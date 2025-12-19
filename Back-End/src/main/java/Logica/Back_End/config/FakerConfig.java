/*
package Logica.Back_End.config;

import com.github.javafaker.Faker;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class FakerConfig {

    private final Faker faker = new Faker();
    private final Random random = new Random();

    public String getCategoria() {return faker.book().genre();}

    public String getTitolo() {
        return faker.book().title();
    }

    public String getIntro() {
        return faker.lorem().sentence();
    }

    public String getTesto() {
        return faker.lorem().paragraph(5);
    }

    public String getLink() {
        return "https://example.com/" + faker.lorem().word();
    }

    public String getImage() {
        return "https://picsum.photos/seed/" + faker.lorem().word() + "/600/400";
    }
}
*/