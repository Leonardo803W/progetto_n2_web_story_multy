package Logica.Back_End.entity;

/*
import Logica.Back_End.config.FakerConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MultyEntityRunner implements CommandLineRunner {

    private final FakerConfig fakerConfig;
    private final MultyEntityRepository multyEntityRepository;

    @Override
    public void run(String... args) throws Exception {

        // gruppi da 1 a 5
        for (int group = 1; group <= 5; group++) {

            // 5 elementi per gruppo (totale 25 oggetti)
            for (int i = 0; i < 5; i++) {

                MultiEntity m = new MultiEntity();
                m.setNumber_group(group);
                m.setCategoria(fakerConfig.getCategoria());
                m.setTitolo(fakerConfig.getTitolo());
                m.setIntro(fakerConfig.getIntro());
                m.setTesto(fakerConfig.getTesto());
                m.setLink_(fakerConfig.getLink());
                m.setImage(fakerConfig.getImage());

                multyEntityRepository.save(m);
            }
        }

        System.out.println("Dati iniziali caricati correttamente.");
    }
}
*/