package com.speedyGonzalo.gamevault.controller;


import com.speedyGonzalo.gamevault.model.Comment;
import com.speedyGonzalo.gamevault.model.Game;
import com.speedyGonzalo.gamevault.model.User;
import com.speedyGonzalo.gamevault.service.CommentService;
import com.speedyGonzalo.gamevault.service.GameService;
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

    @Autowired
    private GameService gameService;

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

    @PostMapping("/create/{gameID}")
    public ResponseEntity<?> postComment(@RequestBody Comment comment, @PathVariable Integer gameID, HttpServletRequest request){

        try {
            Cookie[] cookies = request.getCookies();
            String userEmail = cookies[0].getValue();

            User user =  userService.getUser(userEmail);
            comment.setUser(user);
            comment.setVotes(0);
            Game game = gameService.getGame(gameID);
            comment.setGame(game);

            commentService.createComment(comment);

            JSONObject resp = new JSONObject();
            resp.put("message", "comment successfully posted");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message", "Error posting comment");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/upvote/{cmntID}")
    public ResponseEntity<?> upvoteComment(@PathVariable Integer cmntID){
        try {
            Comment comment = commentService.getCommentByID(cmntID);
            comment.setVotes(comment.getVotes() + 1);
            commentService.createComment(comment);

            JSONObject resp = new JSONObject();
            resp.put("message", "comment upvoted");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message", "Error upvoting");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/downvote/{cmntID}")
    public ResponseEntity<?> downvoteComment(@PathVariable Integer cmntID){
        try {
            Comment comment = commentService.getCommentByID(cmntID);
            comment.setVotes(comment.getVotes() - 1);
            commentService.createComment(comment);

            JSONObject resp = new JSONObject();
            resp.put("message", "comment downvoted");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message", "Error downvoting");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/delete/{cmntID}")
    public ResponseEntity<?> removeComment(@PathVariable Integer cmntID){
        Comment comment = commentService.getCommentByID(cmntID);
        comment.setDeleted(true);
        commentService.createComment(comment);

        JSONObject resp = new JSONObject();
        resp.put("message", "comment deleted");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }
}
