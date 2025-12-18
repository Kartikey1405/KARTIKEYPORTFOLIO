// package com.cosmicspring.service;

// import com.cosmicspring.entity.ContactMessage;
// import com.cosmicspring.repository.ContactMessageRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.mail.SimpleMailMessage;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;

// @Service
// @RequiredArgsConstructor
// public class EmailService {

//     private final JavaMailSender mailSender;
//     private final ContactMessageRepository messageRepository;

//     @Value("${spring.mail.username}")
//     private String myEmail; // It sends the email TO yourself

//     public void processContactForm(String name, String email, String content) {
//         // 1. Save to Database (Backup)
//         ContactMessage savedMsg = ContactMessage.builder()
//                 .senderName(name)
//                 .senderEmail(email)
//                 .message(content)
//                 .sentAt(LocalDateTime.now())
//                 .build();
//         messageRepository.save(savedMsg);

//         // 2. Send Real Email (Try/Catch ensures DB save works even if Gmail fails)
//         try {
//             SimpleMailMessage mail = new SimpleMailMessage();
//             mail.setFrom(myEmail); // Must be your authenticated email
//             mail.setTo(myEmail);   // Send it to yourself
//             mail.setSubject("New Portfolio Message from " + name);
//             mail.setText("Sender: " + email + "\n\nMessage:\n" + content);

//             mailSender.send(mail);
//             System.out.println("Email sent successfully!");
//         } catch (Exception e) {
//             System.err.println("Failed to send email: " + e.getMessage());
//             // We don't throw exception here so the user still gets a "Success" response
//             // knowing their message is at least saved in the DB.
//         }
//     }
// }

package com.cosmicspring.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    // We use a NEW variable for your email, because 'spring.mail.username' will be 'apikey'
    @Value("${app.sender.email}") 
    private String senderEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // MATCHING THE CONTROLLER: Method name is now processContactForm
    public void processContactForm(String name, String visitorEmail, String messageText) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();

            // CRITICAL FOR SENDGRID:
            // 1. FROM: Must be YOUR verified email (fetched from Env Var)
            message.setFrom(senderEmail);
            
            // 2. REPLY-TO: The visitor's email. When you hit reply, it goes to them.
            message.setReplyTo(visitorEmail);
            
            // 3. TO: Sending it to yourself
            message.setTo(senderEmail);
            
            // 4. SUBJECT: Since controller doesn't send one, we create a default
            message.setSubject("New Portfolio Message from " + name);
            
            // 5. BODY: Combine the details
            message.setText("Name: " + name + "\nFrom: " + visitorEmail + "\n\nMessage:\n" + messageText);

            mailSender.send(message);
            System.out.println(" Email sent successfully via SendGrid!");
        } catch (Exception e) {
            System.err.println(" Failed to send email: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
