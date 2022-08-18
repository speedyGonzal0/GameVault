package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Integer> {

    Boolean existsGameByName(String name);

}
