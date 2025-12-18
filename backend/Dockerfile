# # Use a lightweight Java runtime
# FROM eclipse-temurin:17-jdk-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the built JAR file into the container
# # NOTE: This assumes your build creates a jar in the /target folder
# COPY target/*.jar app.jar

# # Expose port 8080 (standard for Spring Boot)
# EXPOSE 8080

# # Command to run the application
# ENTRYPOINT ["java", "-jar", "app.jar"]

# --- Stage 1: Build the JAR file ---
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Copy the project files into the container
COPY . .

# Build the project (skipping tests to save time)
RUN mvn clean package -DskipTests

# --- Stage 2: Run the application ---
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy the built JAR from the 'build' stage to this stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
