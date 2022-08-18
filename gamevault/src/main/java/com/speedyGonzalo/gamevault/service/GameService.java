package com.speedyGonzalo.gamevault.service;


import com.speedyGonzalo.gamevault.model.Game;
import com.speedyGonzalo.gamevault.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public List<Game> getAllGames(){
        return gameRepository.findAll();
    }

    public Game getGame(Integer gameID) { return gameRepository.findById(gameID).get(); }

    public void createGame(Game game){
        gameRepository.save(game);
    }

    public Game getGameDetails(Integer gameID){
        return gameRepository.findById(gameID).get();
    }

    public boolean gameExists(String name){
        return gameRepository.existsGameByName(name);
    }

    public void removeGame(Game game){
        gameRepository.delete(game);
    }
}
