package Controller;

import Model.Restaurant;
import ServiceRestaurant.ServiceRestaurant;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/restaurant")
@RestController()
@RequiredArgsConstructor
public class ControllerRestaurant {
private final ServiceRestaurant service;

    @GetMapping("/allRestaurants")
    public List<Restaurant> getAllRestaurant() {
        return service.getAllRestaurants();

    }

}
