package com.speedyGonzalo.gamevault.service;


import com.speedyGonzalo.gamevault.model.Wishlist;
import com.speedyGonzalo.gamevault.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    public List<Wishlist> getAllWishlist(){
        return wishlistRepository.findAll();
    }

    public Wishlist getWishlistByID(Integer id){
        return wishlistRepository.findById(id).get();
    }

    public List<Wishlist> getWishlist(String email){
        return wishlistRepository.findAllByUser_EmailAndDeletedFalse(email);
    }

    public List<Wishlist> getUserWishlistByID(Integer id){
        return wishlistRepository.findAllByUser_UserIDAndDeletedFalse(id);
    }

    public void createWishlist(Wishlist wishlist){
        wishlistRepository.save(wishlist);
    }

//    public void removeWishlist(Wishlist wishlist){
//        wishlistRepository.save(wishlist);
//    }


}
