package com.speedyGonzalo.gamevault.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.sql.Date;

public class OrderDTO {

    private int days;
    private int cost;

    @JsonFormat(pattern="yyyy-MM-dd")
    private java.sql.Date orderdate;

    private int gameID;

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public Date getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    public int getGameID() {
        return gameID;
    }

    public void setGameID(int gameID) {
        this.gameID = gameID;
    }
}
