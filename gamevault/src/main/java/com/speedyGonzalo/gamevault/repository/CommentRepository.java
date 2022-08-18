package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findAllByGame_GameIDAndDeletedFalse(Integer gameID);

    List<Comment> findAllByUser_UserIDAndDeletedFalse(Integer userID);

    List<Comment> findAllByUser_EmailAndDeletedFalse(String email);
}
