package Logica.Back_End;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GeneralResponseWithMessage<T> {

    private T data;
    private String message;
}