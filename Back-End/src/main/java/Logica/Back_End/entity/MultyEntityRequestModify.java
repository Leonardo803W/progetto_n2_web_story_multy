package Logica.Back_End.entity;

import jakarta.validation.constraints.Negative;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MultyEntityRequestModify {

    private int number_group;

    private String categoria;

    private String titolo;

    private String intro;

    private String testo;

    private String link_;

    private String image;
}
