package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Integer> {

    Rating findRatingByGame_GameIDAndUser_Email(Integer gameID, String email);
}
