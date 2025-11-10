package Logica.Back_End.Entity;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/multy-entity")
@RequiredArgsConstructor
public class MultyEntityController {

    private final MultyEntityService multyEntityService;


}
