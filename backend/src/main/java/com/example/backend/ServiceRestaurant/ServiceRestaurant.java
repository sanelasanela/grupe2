package com.example.backend.ServiceRestaurant;

import com.example.backend.Model.Restaurant;
import com.example.backend.Repo.Repo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceRestaurant {
private final Repo repo;

    /**
     * to get a list of Restaurants
     * @return list of Restaurants
     */
    public List<Restaurant> getAllRestaurants() {
    return repo.findAll();
}

}
