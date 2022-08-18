package com.speedyGonzalo.gamevault.controller;


import com.speedyGonzalo.gamevault.model.LoginDTO;
import com.speedyGonzalo.gamevault.model.User;
import com.speedyGonzalo.gamevault.service.UserService;
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
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }


    @GetMapping("/{userID}")
    public User getUser(@PathVariable Integer userID){
        return userService.getUser(userID);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        if(userService.userExists(user.getEmail())){
            JSONObject resp = new JSONObject();
            resp.put("message","User already exists");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
        user.setBanned(false);
        user.setRole("Client");
        user.setImg("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
        userService.registerUser(user);
        JSONObject resp = new JSONObject();
        resp.put("message","User registration successful");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }

    @PostMapping("/admin/register")
    public ResponseEntity<?> registerAdmin(@RequestBody User user){
        if(userService.userExists(user.getEmail())){
            JSONObject resp = new JSONObject();
            resp.put("message","User already exists");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
        user.setBanned(false);
        user.setRole("Admin");
        user.setImg("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
        userService.registerUser(user);
        JSONObject resp = new JSONObject();
        resp.put("message","Admin registration successful");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO, HttpServletResponse response){

        User user = userService.getUser(loginDTO.getEmail(), loginDTO.getPassword());

        if( user == null){
            JSONObject resp = new JSONObject();
            resp.put("message","email or password do not match");
            return new ResponseEntity<>(resp.toString(), HttpStatus.UNAUTHORIZED);
        }
        Cookie cookie = new Cookie("userEmail", user.getEmail());
        cookie.setMaxAge(7 * 24 * 60 * 60); // expires in 7 days
//        cookie.setSecure(true);
//        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);
        JSONObject resp = new JSONObject();
        resp.put("role", user.getRole());
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response){
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setValue("");
                cookie.setPath("/");
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }
            JSONObject resp = new JSONObject();
            resp.put("message", "User log out done");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        else{
            JSONObject resp = new JSONObject();
            resp.put("message","Error in logging out");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/details")
    public User getUserDetails(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        String userEmail = cookies[0].getValue();
        return userService.getUser(userEmail);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(HttpServletRequest request, @RequestBody LoginDTO loginDTO){
        try {
            Cookie[] cookies = request.getCookies();
            String userEmail = cookies[0].getValue();
            User user = userService.getUser(userEmail);

            if(loginDTO.getPassword() != null){
                user.setPassword(loginDTO.getPassword());
            }
            else if(loginDTO.getPhone() != null){
                user.setPhone(loginDTO.getPhone());
            }
            else if(loginDTO.getImg() != null){
                user.setImg(loginDTO.getImg());
            }
            userService.registerUser(user);
            JSONObject resp = new JSONObject();
            resp.put("message","Successfully updated");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message","Error updating info");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }

    }

}
