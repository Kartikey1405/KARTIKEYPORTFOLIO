package com.cosmicspring.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.cosmicspring.entity.Project;
import com.cosmicspring.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor // Lombok creates the constructor for us
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final Cloudinary cloudinary;

    // 1. Fetch all projects sorted by Priority (Solar System Order)
    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderByPriorityAsc();
    }

    // 2. Create a new Project (Uploads Image first)
    public Project saveProject(String title, String description, String techStack,
                               String liveUrl, String githubUrl, Integer priority,
                               MultipartFile imageFile) throws IOException {

        // Step A: Upload file to Cloudinary
        Map uploadResult = cloudinary.uploader().upload(imageFile.getBytes(), ObjectUtils.emptyMap());
        String imageUrl = (String) uploadResult.get("url");

        // Step B: Build the Project Object
        Project project = Project.builder()
                .title(title)
                .description(description)
                .techStack(techStack)
                .liveUrl(liveUrl)
                .githubUrl(githubUrl)
                .priority(priority)
                .imageUrl(imageUrl) // Save the Cloudinary URL, not the file!
                .build();

        // Step C: Save to Postgres
        return projectRepository.save(project);
    }
}