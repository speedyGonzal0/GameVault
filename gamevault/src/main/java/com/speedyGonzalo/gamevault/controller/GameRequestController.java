package com.speedyGonzalo.gamevault.controller;


import com.speedyGonzalo.gamevault.model.GameRequest;
import com.speedyGonzalo.gamevault.service.GameRequestService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gamerequest")
public class GameRequestController {

    @Autowired
    private GameRequestService gameRequestService;


    @GetMapping("/all")
    public List<GameRequest> getAllGameReqs(){
        return gameRequestService.getAllGameReqs();
    }


    @PostMapping("/create")
    public ResponseEntity<?> saveGameReq(@RequestBody GameRequest gameRequest) {
        try{
            gameRequest.setGameReqDeleted(false);
            gameRequestService.saveGameReq(gameRequest);

            JSONObject resp = new JSONObject();
            resp.put("message","Game request sent");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message","Error sending request");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/delete/{reqID}")
    public ResponseEntity<?> deleteGameReq(@PathVariable Integer reqID){
        try {
            gameRequestService.deleteGameReq(reqID);
            JSONObject resp = new JSONObject();
            resp.put("message","Game request deleted");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);

        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message","Error deleting request");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }
}
