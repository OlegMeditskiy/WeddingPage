package weddingsitebackend.weddingsitebackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import weddingsitebackend.weddingsitebackend.service.StorageService;
import weddingsitebackend.weddingsitebackend.storage.StorageProperties;


@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class WeddingSiteBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(WeddingSiteBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {
            storageService.init();
        };
    }

}
