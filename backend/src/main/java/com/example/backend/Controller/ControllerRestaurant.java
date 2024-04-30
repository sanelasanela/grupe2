package com.example.backend.Controller;

import com.example.backend.Model.Restaurant;
import com.example.backend.ServiceRestaurant.ServiceRestaurant;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/Restaurant")
@RequiredArgsConstructor
public class ControllerRestaurant {
private final ServiceRestaurant service;

    @GetMapping("/allRestaurants")
    public List<Restaurant> getAllRestaurant() {
     return   service.getAllRestaurants();
     //   return List.of(new Restaurant("Balkan Meal", "Geibelstraße 10, 81679 München", "Balkan", 5));



    }

}
