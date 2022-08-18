package com.speedyGonzalo.gamevault.controller;

import com.speedyGonzalo.gamevault.model.Game;
import com.speedyGonzalo.gamevault.model.Rating;
import com.speedyGonzalo.gamevault.model.User;
import com.speedyGonzalo.gamevault.service.GameService;
import com.speedyGonzalo.gamevault.service.RatingService;
import com.speedyGonzalo.gamevault.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/rating")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @Autowired
    private UserService userService;

    @Autowired
    private GameService gameService;

    @PostMapping("/create/{gameID}")
    public ResponseEntity<?> createRating(HttpServletRequest request, @PathVariable Integer gameID, @RequestBody Rating rating){
        Cookie[] cookies = request.getCookies();
        String userEmail = cookies[0].getValue();
        User user = userService.getUser(userEmail);
        Game game = gameService.getGame(gameID);
        rating.setGame(game);
        rating.setUser(user);
        ratingService.createRating(rating);
        JSONObject resp = new JSONObject();
        resp.put("message", "Rating posted");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }

    @GetMapping("/user/{gameID}")
    public Rating getGameRating(HttpServletRequest request, @PathVariable Integer gameID){
        Cookie[] cookies = request.getCookies();
        String userEmail = cookies[0].getValue();
        return ratingService.getGameRating(gameID, userEmail);
    }


}
