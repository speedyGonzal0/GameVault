package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

    List<Wishlist> findAllByUser_EmailAndDeletedFalse(String email);

    List<Wishlist> findAllByUser_UserIDAndDeletedFalse(Integer userID);
}

