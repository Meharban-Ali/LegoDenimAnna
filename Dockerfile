FROM eclipse-temurin:17-jdk-alpine
VOLUME /temp
COPY target/my-app.jar /app/
ENTRYPOINT [ "java", "-jar", "/app.jar"]
EXPOSE 9090
