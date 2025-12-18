package com.cosmicspring.controller;

import com.cosmicspring.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
//@CrossOrigin(origins = "*") // Allow React to access this
@RequiredArgsConstructor
public class ContactController {

    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<?> sendContactMessage(@RequestBody Map<String, String> payload) {
        String name = payload.get("name");
        String email = payload.get("email");
        String message = payload.get("message");

        if (name == null || email == null || message == null) {
            return ResponseEntity.badRequest().body("All fields are required");
        }

        emailService.processContactForm(name, email, message);
        return ResponseEntity.ok("Message received!");
    }
}