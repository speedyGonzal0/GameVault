package com.speedyGonzalo.gamevault.service;

import com.speedyGonzalo.gamevault.model.Orders;
import com.speedyGonzalo.gamevault.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;

    public List<Orders> getAllOrders(){
        return ordersRepository.findAll();
    }

    public List<Orders> getUserOrders(String email){
        return ordersRepository.findAllByUser_Email(email);
    }

    public void createOrder(Orders order){
        ordersRepository.save(order);
    }

    public List<Orders> getOrdersbyUserID(Integer userID){ return ordersRepository.findAllByUser_UserID(userID); }
}
