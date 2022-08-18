package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findAllByGame_GameID(Integer gameID);

    List<Comment> findAllByUser_UserID(Integer userID);

    List<Comment> findAllByUser_Email(String email);
}
