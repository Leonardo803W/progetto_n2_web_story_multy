package Logica.Back_End.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MultiEntitySaveDTO {
    private int number_group;
    private String categoria;
    private String titolo;
    private String intro;
    private String testo;
    private String link;
    private String image;
}