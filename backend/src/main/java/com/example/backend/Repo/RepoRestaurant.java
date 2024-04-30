package com.example.backend.Repo;

import com.example.backend.Model.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoRestaurant extends MongoRepository<Restaurant, String> {
}
