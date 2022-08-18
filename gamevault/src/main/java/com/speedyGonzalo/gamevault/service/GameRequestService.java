package com.speedyGonzalo.gamevault.service;

import com.speedyGonzalo.gamevault.model.GameRequest;
import com.speedyGonzalo.gamevault.repository.GameRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameRequestService {

    @Autowired
    private GameRequestRepository gameRequestRepository;

    public List<GameRequest> getAllGameReqs(){
        return gameRequestRepository.findAllByGameReqDeletedFalse();
    }

    public void saveGameReq(GameRequest gameRequest){
        gameRequestRepository.save(gameRequest);
    }

    public void deleteGameReq(Integer gameReqID){
        GameRequest game =  gameRequestRepository.findById(gameReqID).get();
        game.setGameReqDeleted(true);
        gameRequestRepository.save(game);
    }
}
