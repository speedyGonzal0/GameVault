package com.speedyGonzalo.gamevault.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GameRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gameReqID;

    private String gameReqName;

    private boolean gameReqDeleted;

    public GameRequest() {

    }

    public int getGameReqID() {
        return gameReqID;
    }

    public void setGameReqID(int gameReqID) {
        this.gameReqID = gameReqID;
    }

    public String getGameReqName() {
        return gameReqName;
    }

    public void setGameReqName(String gameReqName) {
        this.gameReqName = gameReqName;
    }

    public boolean isGameReqDeleted() {
        return gameReqDeleted;
    }

    public void setGameReqDeleted(boolean gameReqDeleted) {
        this.gameReqDeleted = gameReqDeleted;
    }

}
