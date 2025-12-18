package com.cosmicspring.repository;

import com.cosmicspring.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    // Custom query to fetch planets in order (Sun -> Mercury -> Venus...)
    // This ensures your best projects appear in the inner orbits first.
    List<Project> findAllByOrderByPriorityAsc();
}