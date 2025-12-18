package com.cosmicspring.config;



import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class KeepAliveScheduler {

    // Run every 5 minutes (300,000 ms)
    @Scheduled(fixedRate = 300000)
    public void keepAlive() {
        // 1. Print to console to keep logs active
        System.out.println("⚡ Keep-Alive Pulse: Server is active. Time: " + System.currentTimeMillis());

        // 2. (Optional) Self-Ping to trick Render into thinking there is traffic
        // NOTE: Replace with your REAL Render URL once deployed (e.g., https://kartikey-backend.onrender.com/api/projects)
        /*
        try {
            String url = "https://YOUR-APP-NAME.onrender.com/api/projects";
            RestTemplate restTemplate = new RestTemplate();
            restTemplate.getForObject(url, String.class);
            System.out.println("✅ Self-Ping successful!");
        } catch (Exception e) {
            System.out.println("⚠️ Self-Ping failed (expected during startup/localhost): " + e.getMessage());
        }
        */
    }
}