package com.cosmicspring.dto;

public class ProjectDTO {
    private String title;
    private String description;
    private String techStack;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl; // Ensure this matches exactly what Postman sends ("image" vs "imageUrl")
    private Integer priority;

    // Getters
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getTechStack() { return techStack; }
    public String getGithubUrl() { return githubUrl; }
    public String getLiveUrl() { return liveUrl; }
    public String getImageUrl() { return imageUrl; }
    public Integer getPriority() { return priority; }

    // Setters
    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setTechStack(String techStack) { this.techStack = techStack; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public void setPriority(Integer priority) { this.priority = priority; }
}