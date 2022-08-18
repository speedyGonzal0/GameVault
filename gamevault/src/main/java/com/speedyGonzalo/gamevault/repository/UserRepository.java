package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmailAndPassword(String email, String password);

    User findByEmail(String email);

    Boolean existsUserByEmail(String email);

    List<User> findAllByBannedTrue();

}
