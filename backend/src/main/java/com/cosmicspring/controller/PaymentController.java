package com.cosmicspring.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/payment")
//@CrossOrigin(origins = "*")
public class PaymentController {

    // Add this to application.properties: payment.upi-id=your-upi@okaxis
    @Value("${payment.upi-id}")
    private String upiId;

    @PostMapping("/generate-link")
    public ResponseEntity<?> generatePaymentLink(@RequestBody Map<String, String> request) {
        String amount = request.get("amount");
        String message = request.getOrDefault("message", "Portfolio Support");
        String txnId = UUID.randomUUID().toString();

        try {
            // Logic ported from your Python code
            String query = String.format("pa=%s&pn=%s&tn=%s&am=%s&cu=INR",
                    upiId,
                    URLEncoder.encode("GitGrade Support", StandardCharsets.UTF_8),
                    URLEncoder.encode(message, StandardCharsets.UTF_8),
                    amount,
                    "INR"
            );

            String upiLink = "upi://pay?" + query;

            // Return the link (Frontend will turn this into a QR Code)
            return ResponseEntity.ok(Map.of(
                    "paymentUrl", upiLink,
                    "transactionId", txnId
            ));

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error generating link");
        }
    }
}