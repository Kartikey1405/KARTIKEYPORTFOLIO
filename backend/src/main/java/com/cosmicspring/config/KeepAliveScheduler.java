
package com.cosmicspring.config;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class KeepAliveScheduler {

    // Run every 14 minutes (840,000 ms) to stay within free tier limits while preventing sleep
    // (Render sleeps after 15 mins of inactivity)
    @Scheduled(fixedRate = Long.MAX_VALUE) 
    public void keepAlive() {
        // 1. Print to console to keep logs active
        System.out.println("⚡ Keep-Alive Pulse: Server is active. Time: " + System.currentTimeMillis());

        // 2. Self-Ping to trick Render into thinking there is traffic
        try {
            // UPDATED: Your real backend URL
            String url = "https://kartikeyportfolio.onrender.com/api/projects";
            
            RestTemplate restTemplate = new RestTemplate();
            restTemplate.getForObject(url, String.class);
            
            System.out.println(" Self-Ping successful! (App stayed awake)");
        } catch (Exception e) {
            System.out.println(" Self-Ping failed: " + e.getMessage());
        }
    }
}
