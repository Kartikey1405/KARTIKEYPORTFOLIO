package com.cosmicspring.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "projects") // This creates a table named 'projects' in Postgres
@Data                     // Lombok: Auto-generates Getters, Setters, toString
@NoArgsConstructor        // Lombok: Generates empty constructor
@AllArgsConstructor       // Lombok: Generates full constructor
@Builder                  // Lombok: Allows cool object creation patterns
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000) // Allow longer text for descriptions
    private String description;

    // We will store tech stack as a comma-separated string
    // Example: "Java, Spring Boot, React, AWS"
    private String techStack;

    private String liveUrl;   // Link to deployed site
    private String githubUrl; // Link to code

    private String imageUrl;  // Cloudinary URL

    // Critical for Solar System:
    // 1 = Inner Orbit (Most important), 5 = Outer Orbit
    private Integer priority;
}