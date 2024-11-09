FROM eclipse-temurin:17-jdk-alpine
VOLUME /temp
COPY target/LandingPage-0.0.1.jar /LandingPage/LandingPage.jar
ENTRYPOINT [ "java", "-jar", "/LandingPage.jar"]
EXPOSE 9090
