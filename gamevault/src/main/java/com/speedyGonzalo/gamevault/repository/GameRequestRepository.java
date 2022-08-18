package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.GameRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRequestRepository extends JpaRepository<GameRequest, Integer> {

    List<GameRequest> findAllByGameReqDeletedFalse();
}
