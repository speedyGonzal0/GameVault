package com.speedyGonzalo.gamevault.controller;


import com.speedyGonzalo.gamevault.model.Game;
import com.speedyGonzalo.gamevault.service.GameService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/all")
    public List<Game> getAllGames(){
        return gameService.getAllGames();
    }

    @GetMapping("/{gameID}")
    public Game getGameDetails(@PathVariable Integer gameID){
        return gameService.getGameDetails(gameID);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createGame(@RequestBody Game game){
        if(gameService.gameExists(game.getName())){
            JSONObject resp = new JSONObject();
            resp.put("message","Game already exists");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
        gameService.createGame(game);
        JSONObject resp = new JSONObject();
        resp.put("message","Game successfully added");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{gameID}")
    public void removeGame(@PathVariable Integer gameID){
        Game game = gameService.getGame(gameID);
        gameService.removeGame(game);
    }
}