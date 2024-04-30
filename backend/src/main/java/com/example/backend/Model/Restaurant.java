package com.example.backend.Model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Restaurant") //MongoDB MUSS mit R suchen nicht mit r

public record Restaurant(

        String name,
        String location,
        String kitchen,
        int review

            ) {

}
