package com.example.backend.ServiceRestaurant;

import com.example.backend.Model.Restaurant;
import com.example.backend.Repo.RepoRestaurant;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;


import static org.mockito.Mockito.*;


class ServiceRestaurantTest {
private RepoRestaurant mockRepo = mock(RepoRestaurant.class);
private ServiceRestaurant serviceTest = new ServiceRestaurant(mockRepo);


    @Test
    void test_getAllRestaurant() {
    //GIVEN
    Restaurant r1 = new Restaurant("Italian", "Hamburg", "italian", 4);
    Restaurant r2 = new Restaurant("Greek", "Hamburg", "greek", 4);
    List<Restaurant> list = List.of(r1, r2);

    when(mockRepo.findAll()).thenReturn(list);

    //when
    List<Restaurant> actual = serviceTest.getAllRestaurants();

    //THEN
    verify(mockRepo).findAll(); // Ist das Repo auch wirklich aufgerufen wurden ??
    assertEquals(list, actual );

    }

}

