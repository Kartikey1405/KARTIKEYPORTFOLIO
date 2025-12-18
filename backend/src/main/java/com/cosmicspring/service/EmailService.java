package com.cosmicspring.service;

import com.cosmicspring.entity.ContactMessage;
import com.cosmicspring.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    private final ContactMessageRepository messageRepository;

    @Value("${spring.mail.username}")
    private String myEmail; // It sends the email TO yourself

    public void processContactForm(String name, String email, String content) {
        // 1. Save to Database (Backup)
        ContactMessage savedMsg = ContactMessage.builder()
                .senderName(name)
                .senderEmail(email)
                .message(content)
                .sentAt(LocalDateTime.now())
                .build();
        messageRepository.save(savedMsg);

        // 2. Send Real Email (Try/Catch ensures DB save works even if Gmail fails)
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setFrom(myEmail); // Must be your authenticated email
            mail.setTo(myEmail);   // Send it to yourself
            mail.setSubject("New Portfolio Message from " + name);
            mail.setText("Sender: " + email + "\n\nMessage:\n" + content);

            mailSender.send(mail);
            System.out.println("Email sent successfully!");
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
            // We don't throw exception here so the user still gets a "Success" response
            // knowing their message is at least saved in the DB.
        }
    }
}