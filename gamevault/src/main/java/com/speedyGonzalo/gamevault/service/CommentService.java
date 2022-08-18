package com.speedyGonzalo.gamevault.service;


import com.speedyGonzalo.gamevault.model.Comment;
import com.speedyGonzalo.gamevault.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }

    public Comment getCommentByID(Integer cmntID){
        return commentRepository.findById(cmntID).get();
    }

    public List<Comment> getGameComments(Integer gameID){
        return commentRepository.findAllByGame_GameIDAndDeletedFalse(gameID);
    }

    public List<Comment> getUserComments(Integer userID){
        return commentRepository.findAllByUser_UserIDAndDeletedFalse(userID);
    }

    public List<Comment> getUserCommentsByEmail(String email){
        return commentRepository.findAllByUser_EmailAndDeletedFalse(email);
    }

    public void createComment(Comment comment){
        commentRepository.save(comment);
    }
}
