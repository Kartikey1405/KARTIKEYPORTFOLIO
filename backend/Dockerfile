# Use a lightweight Java runtime
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
# NOTE: This assumes your build creates a jar in the /target folder
COPY target/*.jar app.jar

# Expose port 8080 (standard for Spring Boot)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]