package com.speedyGonzalo.gamevault.service;

import com.speedyGonzalo.gamevault.model.Rating;
import com.speedyGonzalo.gamevault.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public void createRating(Rating rating){
        ratingRepository.save(rating);
    }

    public Rating getGameRating(Integer gameID, String userEmail){
        return ratingRepository.findRatingByGame_GameIDAndUser_Email(gameID, userEmail);
    }
}
