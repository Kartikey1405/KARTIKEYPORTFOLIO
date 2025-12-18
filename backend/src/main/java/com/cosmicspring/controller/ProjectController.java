package com.cosmicspring.controller;

import com.cosmicspring.entity.Project;
import com.cosmicspring.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
//@CrossOrigin(origins = "*") // Allow React to access this (We will refine this later)
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    // GET: Fetch all projects for the Solar System
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    // POST: Add a new project (Must use Form-Data in Postman)
    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Project> createProject(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("techStack") String techStack,
            @RequestParam(value = "liveUrl", required = false) String liveUrl,
            @RequestParam("githubUrl") String githubUrl,
            @RequestParam("priority") Integer priority,
            @RequestParam("image") MultipartFile image
    ) {
        try {
            Project savedProject = projectService.saveProject(
                    title, description, techStack, liveUrl, githubUrl, priority, image
            );
            return ResponseEntity.ok(savedProject);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}