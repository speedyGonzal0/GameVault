package com.speedyGonzalo.gamevault.controller;

import com.speedyGonzalo.gamevault.model.Game;
import com.speedyGonzalo.gamevault.model.OrderDTO;
import com.speedyGonzalo.gamevault.model.Orders;
import com.speedyGonzalo.gamevault.model.User;
import com.speedyGonzalo.gamevault.service.GameService;
import com.speedyGonzalo.gamevault.service.OrdersService;
import com.speedyGonzalo.gamevault.service.UserService;
import org.hibernate.criterion.Order;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @Autowired
    private UserService userService;


    @Autowired
    private GameService gameService;


    @GetMapping("/all")
    public List<Orders> getAllOrders(){
        return ordersService.getAllOrders();
    }

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderDTO orderDTO, HttpServletRequest request){

        try {
            Cookie[] cookies = request.getCookies();
            String userEmail = cookies[0].getValue();
            User user = userService.getUser(userEmail);
            Game game = gameService.getGame(orderDTO.getGameID());
            Orders order = new Orders();
            order.setCost(orderDTO.getCost());
            order.setDays(orderDTO.getDays());
            order.setOrderdate(orderDTO.getOrderdate());
            order.setGame(game);
            order.setUser(user);
            ordersService.createOrder(order);
            JSONObject resp = new JSONObject();
            resp.put("message","Ordered successfully");
            return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
        }
        catch (Exception e){
            JSONObject resp = new JSONObject();
            resp.put("message","Failed to order");
            return new ResponseEntity<>(resp.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/user")
    public List<Orders> getUserOrders(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        String userEmail = cookies[0].getValue();
        return ordersService.getUserOrders(userEmail);
    }

    @GetMapping("/user/{userID}")
    public List<Orders> getOrdersByUserID(@PathVariable Integer userID){
        return ordersService.getOrdersbyUserID(userID);
    }
}
