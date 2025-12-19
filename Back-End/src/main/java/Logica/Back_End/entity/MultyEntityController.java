package Logica.Back_End.entity;

import Logica.Back_End.GeneralResponseWithMessage;
import Logica.Back_End.email.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/open/entity")
@RequiredArgsConstructor
public class MultyEntityController {

    private final MultyEntityService multyEntityService;
    private final EmailService emailService;

    /*
    @Value("${messages.new.viaggio.to}")
    private String newViaggioTo;

    @Value("${messages.new.viaggio.subject}")
    private String newViaggioSubject;

    @Value("${messages.new.viaggio.body}")
    private String newViaggioBody;
     */

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.OK)
    public GeneralResponseWithMessage<MultiEntity> save(@RequestBody @Valid MultiEntitySaveDTO body) {
        // Email invio opzionale
        // emailService.sendEmail(newViaggioTo, newViaggioSubject, newViaggioBody);
        return multyEntityService.save(body);
    }

    @PutMapping("/modifyById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GeneralResponseWithMessage<MultiEntity> modifyById(
            @PathVariable Long id,
            @RequestBody MultyEntityRequestModify request) {
        return multyEntityService.modifyById(id, request);
    }

    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GeneralResponseWithMessage<MultiEntity> deleteById(@PathVariable Long id) {
        return multyEntityService.deleteById(id);
    }

    @GetMapping("/findById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GeneralResponseWithMessage<MultiEntity> findById(@PathVariable Long id) {
        return multyEntityService.findById(id);
    }

    @GetMapping("/fetchall")
    @ResponseStatus(HttpStatus.OK)
    public GeneralResponseWithMessage<Page<MultiEntity>> findAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy) {
        return multyEntityService.findAll(page, size, sortBy);
    }
}
