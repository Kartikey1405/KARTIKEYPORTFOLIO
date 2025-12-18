

package com.cosmicspring.service;

import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class EmailService {

    // We reuse your existing environment variable for the Key
    @Value("${spring.mail.password}") 
    private String sendGridApiKey;

    // We reuse your existing sender email variable
    @Value("${app.sender.email}") 
    private String myEmail;

    public void processContactForm(String name, String visitorEmail, String messageText) {
        // 1. Configure the Email
        Email from = new Email(myEmail); // Must be your verified sender
        String subject = "Portfolio Contact: " + name;
        Email to = new Email(myEmail);   // Send it to yourself
        Content content = new Content("text/plain", 
            "Name: " + name + "\nFrom: " + visitorEmail + "\n\nMessage:\n" + messageText);
        
        Mail mail = new Mail(from, subject, to, content);
        
        // 2. Set Reply-To (So hitting "Reply" goes to the visitor, not you)
        mail.setReplyTo(new Email(visitorEmail));

        // 3. Send via Web API (HTTPS - Port 443)
        SendGrid sg = new SendGrid(sendGridApiKey);
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            
            Response response = sg.api(request);
            
            System.out.println(" SendGrid API Status: " + response.getStatusCode());
            if (response.getStatusCode() >= 400) {
                System.err.println(" API Error Body: " + response.getBody());
            }
        } catch (IOException ex) {
            System.err.println(" SendGrid API Connection Failed: " + ex.getMessage());
            ex.printStackTrace();
        }
    }
}
