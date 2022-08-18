package com.speedyGonzalo.gamevault.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gameID;

    private String name;

    private String description;

    @JsonFormat(pattern="yyyy-MM-dd")
    private java.sql.Date releasedate;

    private String metarating;

    private String platforms;

    private String trailer;

    private String coverImg;


    @JsonIgnore
    @OneToMany(mappedBy = "game")
    private Set<Orders> order;

    @JsonIgnore
    @OneToMany(mappedBy = "game")
    private Set<Comment> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "game")
    private Set<Wishlist> wishlists;

    @JsonIgnore
    @OneToMany(mappedBy = "game")
    private Set<Rating> ratings;

    public Game() {
    }

    public int getGameID() {
        return gameID;
    }

    public void setGameID(int gameID) {
        this.gameID = gameID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String desc) {
        this.description = desc;
    }

    public Date getReleasedate() {
        return releasedate;
    }

    public void setReleasedate(Date release) {
        this.releasedate = release;
    }

    public String getMetarating() {
        return metarating;
    }

    public void setMetarating(String metaRating) {
        this.metarating = metaRating;
    }

    public String getPlatforms() {
        return platforms;
    }

    public void setPlatforms(String platforms) {
        this.platforms = platforms;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getCoverImg() {
        return coverImg;
    }

    public void setCoverImg(String coverImg) {
        this.coverImg = coverImg;
    }

    public Set<Orders> getOrder() {
        return order;
    }

    public Set<Rating> getRatings() {
        return ratings;
    }
}
