package Logica.Back_End.entity;

import Logica.Back_End.GeneralResponseWithMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
@RequiredArgsConstructor
@Validated
public class MultyEntityService {

    private final MultyEntityRepository multyEntityRepository;

    // Salva una nuova entità
    public GeneralResponseWithMessage<MultiEntity> save(MultiEntitySaveDTO request) {

        MultiEntity entity = new MultiEntity();

        // Mapping manuale
        entity.setNumber_group(request.getNumber_group());
        entity.setCategoria(request.getCategoria());
        entity.setTitolo(request.getTitolo());
        //entity.setIntro(request.getIntro());
       // entity.setTesto(request.getTesto());
        entity.setLink(request.getLink());
        entity.setImage(request.getImage());

        MultiEntity savedEntity = multyEntityRepository.save(entity);
        return new GeneralResponseWithMessage<>(savedEntity, "Dati salvati correttamente");
    }

    // Modifica entità esistente
    public GeneralResponseWithMessage<MultiEntity> modifyById(Long id, MultyEntityRequestModify request) {

        MultiEntity entity = multyEntityRepository.findById(id).orElse(null);
        if (entity == null) {
            return new GeneralResponseWithMessage<>(null, "Nessun dato trovato");
        }

        // Mapping manuale dei campi aggiornabili
        if (request.getCategoria() != null) entity.setCategoria(request.getCategoria());
        if (request.getTitolo() != null) entity.setTitolo(request.getTitolo());
        //if (request.getIntro() != null) entity.setIntro(request.getIntro());
        //if (request.getTesto() != null) entity.setTesto(request.getTesto());
        if (request.getLink() != null) entity.setLink(request.getLink());
        if (request.getImage() != null) entity.setImage(request.getImage());

        MultiEntity savedEntity = multyEntityRepository.save(entity);
        return new GeneralResponseWithMessage<>(savedEntity, "Dati salvati correttamente");
    }

    // Elimina entità
    public GeneralResponseWithMessage<MultiEntity> deleteById(Long id) {
        if (!multyEntityRepository.existsById(id)) {
            return new GeneralResponseWithMessage<>(null, "Nessun dato trovato con id: " + id);
        }
        multyEntityRepository.deleteById(id);
        return new GeneralResponseWithMessage<>(null, "Dati eliminati correttamente");
    }

    // Trova entità per id
    public GeneralResponseWithMessage<MultiEntity> findById(Long id) {
        MultiEntity entity = multyEntityRepository.findById(id).orElse(null);
        if (entity == null) {
            return new GeneralResponseWithMessage<>(null, "Nessun dato trovato");
        }
        return new GeneralResponseWithMessage<>(entity, "Dati trovati correttamente");
    }

    // Trova tutte le entità con paging
    public GeneralResponseWithMessage<Page<MultiEntity>> findAll(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        Page<MultiEntity> entita = multyEntityRepository.findAll(pageable);
        return new GeneralResponseWithMessage<>(entita, "Entità recuperate con successo.");
    }
}
