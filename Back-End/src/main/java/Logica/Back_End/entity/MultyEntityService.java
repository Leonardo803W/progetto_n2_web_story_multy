package Logica.Back_End.entity;

import Logica.Back_End.GeneralResponseWithMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
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

    //metodo per salvare una entita
    public GeneralResponseWithMessage<MultiEntity> save (MultyEntitySave multyEntityRequest) {

        MultiEntity entity = new MultiEntity();
        BeanUtils.copyProperties(multyEntityRequest, entity);
        MultiEntity savedEntity = multyEntityRepository.save(entity);
        return new GeneralResponseWithMessage<>(savedEntity, "Dati salvati correttamente") ;
    }

    //metodo per modificare una entita
    public GeneralResponseWithMessage <MultiEntity> modifyById (Long id, MultyEntityRequestModify multyEntityRequest) {

        MultiEntity entity = multyEntityRepository.findById(id).orElse(null);

        if (entity == null)
        {
            return new GeneralResponseWithMessage<>(null, "Nessun dato trovato");
        }

        BeanUtils.copyProperties(multyEntityRequest, entity);
        MultiEntity savedEntity = multyEntityRepository.save(entity);
        return new GeneralResponseWithMessage<>(savedEntity, "Dati salvati correttamente");
    }

    //metodo per eliminare una entita
    public GeneralResponseWithMessage <MultiEntity> deleteById (Long id) {

        if (!multyEntityRepository.existsById(id))
        {
            throw new IllegalArgumentException("Nessun dato trovato con id: " + id + ":");
        }

        multyEntityRepository.deleteById(id);

        return new GeneralResponseWithMessage<>(null, "Dati eliminati correttamente");
    }

    //metodo per trovare una entita tramite id
    public GeneralResponseWithMessage <MultiEntity> findById (Long id) {

        MultiEntity entity = multyEntityRepository.findById(id).orElse(null);

        if (entity == null)
        {
            return new GeneralResponseWithMessage<>(null, "Nessun dato trovato");
        }

        return new GeneralResponseWithMessage<>(entity, "Dati trovati correttamente");
    }

    //metodo per trovare tutti le entita
    public GeneralResponseWithMessage<Page<MultiEntity>> findAll (int page, int size, String sort) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
        Page<MultiEntity> entita = multyEntityRepository.findAll(pageable);

        return new GeneralResponseWithMessage<>(entita, "Entita recuperate con successo.");
    }

}
