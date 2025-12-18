package com.cosmicspring.repository;

import com.cosmicspring.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    // No extra code needed. Standard save() works perfectly.
}