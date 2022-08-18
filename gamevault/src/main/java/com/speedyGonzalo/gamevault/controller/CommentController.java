package com.speedyGonzalo.gamevault.controller;


import com.speedyGonzalo.gamevault.model.Comment;
import com.speedyGonzalo.gamevault.service.CommentService;
import com.speedyGonzalo.gamevault.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<Comment> getAllComments(){
        return commentService.getAllComments();
    }

    @GetMapping("/game/{gameID}")
    public List<Comment> getGameComments(@PathVariable Integer gameID){
        return commentService.getGameComments(gameID);
    }

    @GetMapping("/user/{userID}")
    public List<Comment> getUserCommentsByID(@PathVariable Integer userID){
        return commentService.getUserComments(userID);
    }

    @GetMapping("/user")
    public List<Comment> getUserComments(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        String userEmail = cookies[0].getValue();
        return commentService.getUserCommentsByEmail(userEmail);
    }

//    @PostMapping("/create")
//    public ResponseEntity<?> postComment(@RequestBody Comment comment , HttpServletRequest request){
//        Cookie[] cookies = request.getCookies();
//        String userEmail = cookies[0].getValue();
//
//        userService.getUser(userEmail);
//
//
//    }
}
