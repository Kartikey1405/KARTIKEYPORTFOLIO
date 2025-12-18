# Cosmic Portfolio – Full Stack Personal Website

## About the Developer

I am a Full Stack Developer proficient in Java and the Spring ecosystem, with a strong focus on building robust backend systems. My expertise extends to frontend development using React, allowing me to create end-to-end web solutions. I also have a keen interest in Machine Learning and integrating AI models into web applications.

This portfolio serves as a demonstration of my technical abilities, bridging complex server-side logic with immersive, interactive user interfaces.

---

## Portfolio Theme

The website is built around a "Cosmic / Futuristic" design philosophy. It moves away from traditional static layouts, utilizing physics-based animations and spatial concepts to present information.

**Visual Style**
- High-contrast neon aesthetics (Cyan, Gold, Purple) against deep space backgrounds

**Desktop Experience**
- 3D orbital mechanics
- Interactive star maps
- Holographic carousels

**Mobile Experience**
- Hybrid Responsive Strategy
- Complex 3D animations replaced with optimized vertical grids and lists for touch devices

---

## Key Features

- **Orbital Navigation**  
  A dynamic navigation bar that adapts based on the device, featuring a spotlight effect on desktop and a slide-out drawer on mobile.

- **Solar System Projects**  
  On desktop, projects orbit a central core like planets. On mobile, they transform into a clean, vertical Mission Log.

- **Tech Constellation**  
  An interactive star map connecting technologies based on their relationships (for example, Java connected to Spring Boot).

- **Holographic Certificates**  
  A 3D perspective carousel displaying achievements and research papers.

- **Backend-Integrated Contact**  
  A fully functional contact form that communicates with a Spring Boot backend.

- **Email System**  
  Integrated SendGrid Web API for reliable, secure email delivery, bypassing standard SMTP port restrictions.

- **Keep-Alive Architecture**  
  Implemented self-ping scheduling to prevent the backend service from entering sleep mode on cloud hosting tiers.

---

## Tech Stack

### Frontend
- React (v18+) with TypeScript  
- Vite  
- Tailwind CSS  
- Framer Motion  
- Lucide React, React Icons  
- React Router DOM  

### Backend
- Java 17  
- Spring Boot 3.4.0  
- PostgreSQL (Production)  
- H2 (Optional for Development)  
- Spring Data JPA / Hibernate  
- SendGrid Web API (sendgrid-java library)  
- Maven  

---

## Deployment

- Frontend: Vercel  
- Backend: Render (Dockerized)  
- Database: Neon / Render PostgreSQL  

---

## Project Structure

### Backend Structure (Spring Boot)

src/main/java/com/cosmicspring/
├── config/
│   ├── CorsConfig.java          # CORS policy configuration
│   └── KeepAliveScheduler.java  # Self-ping logic to prevent cold starts
├── controller/
│   └── ContactController.java   # REST endpoints for form submissions
├── service/
│   └── EmailService.java        # SendGrid API integration logic
└── CosmicSpringApplication.java # Main entry point



### Frontend Structure (React)

src/
├── components/
│   ├── Navbar.tsx               # Responsive navigation (Desktop/Mobile modes)
│   ├── Projects.tsx             # Solar System and List View logic
│   ├── Tech.tsx                 # Constellation map and Grid View
│   ├── Certificates.tsx         # 3D Carousel and Stack View
│   └── ContactFooter.tsx        # Contact form and Social links
├── contexts/
│   └── SoundContext.tsx         # Audio state management
├── lib/
│   └── utils.ts                 # Utility functions (Tailwind class merging)
└── App.tsx                      # Main routing and layout



---

## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)  
- Java JDK 17  
- Maven  
- Git  

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Backend Setup

Navigate to the backend directory

Open src/main/resources/application.properties

Configure the following environment variables (or set them in your IDE):

SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
SPRING_DATASOURCE_PASSWORD
SPRING_MAIL_PASSWORD
APP_SENDER_EMAIL


Run the application:

mvn spring-boot:run


The backend server will start on port 8080.

. Frontend Setup
Navigate to the frontend directory.

Install dependencies:

Bash

npm install
Create a .env file in the root of the frontend folder:

VITE_API_BASE_URL=http://localhost:8080
Run the development server:

Bash

npm run dev
Open your browser at http://localhost:5173.

License
This project is open-source and available for educational purposes.
