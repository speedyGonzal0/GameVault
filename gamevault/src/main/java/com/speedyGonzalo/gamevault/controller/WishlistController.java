package com.speedyGonzalo.gamevault.controller;

import com.speedyGonzalo.gamevault.model.Game;
import com.speedyGonzalo.gamevault.model.User;
import com.speedyGonzalo.gamevault.model.Wishlist;
import com.speedyGonzalo.gamevault.service.GameService;
import com.speedyGonzalo.gamevault.service.UserService;
import com.speedyGonzalo.gamevault.service.WishlistService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @Autowired
    private UserService userService;

    @Autowired
    private GameService gameService;

    @GetMapping("/all")
    public List<Wishlist> getAllWishlist(){
        return wishlistService.getAllWishlist();
    }

    @GetMapping("/user")
    public List<Wishlist> getUsersWishlist(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        String userEmail = cookies[0].getValue();
        return wishlistService.getWishlist(userEmail);
    }

    @GetMapping("/user/{userID}")
    public List<Wishlist> getUserWishlistByID(@PathVariable Integer userID){
        return wishlistService.getUserWishlistByID(userID);
    }

    @PostMapping("/create/{gameID}")
    public ResponseEntity<?> createWishlist(HttpServletRequest request, HttpServletResponse response, @PathVariable Integer gameID){
        try {
            Cookie[] cookies = request.getCookies();
            String userEmail = cookies[0].getValue();
            User user = userService.getUser(userEmail);
            Game game = gameService.getGame(gameID);

            Wishlist wishlist = new Wishlist();
            wishlist.setGame(game);
            wishlist.setUser(user);
            wishlist.setDeleted(false);
            wishlistService.createWishlist(wishlist);

            JSONObject resp = new JSONObject();
            resp.put("message","Wishlist created");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message","Error creating wishlist");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<?> deleteWishlist(@PathVariable Integer id){
        Wishlist wishlist = wishlistService.getWishlistByID(id);
        wishlist.setDeleted(true);
        wishlistService.createWishlist(wishlist);
        JSONObject resp = new JSONObject();
        resp.put("message","Wishlist removed");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }


}
