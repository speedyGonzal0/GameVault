package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {

    List<Orders> findAllByUser_Email(String email);

    List<Orders> findAllByUser_UserID(Integer userID);


}
