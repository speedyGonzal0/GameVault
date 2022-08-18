package com.speedyGonzalo.gamevault.service;

import com.speedyGonzalo.gamevault.model.User;
import com.speedyGonzalo.gamevault.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void registerUser(User user){
        userRepository.save(user);
    }

    public User getUser(String email, String password){
        return userRepository.findByEmailAndPassword(email, password);
    }

    public User getUser(Integer userID){
        return userRepository.findById(userID).get();
    }

    public User getUser(String email){
        return userRepository.findByEmail(email);
    }

    public boolean userExists(String email){
        return userRepository.existsUserByEmail(email);
    }
}
