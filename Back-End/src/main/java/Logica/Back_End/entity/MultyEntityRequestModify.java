package Logica.Back_End.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.Negative;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MultyEntityRequestModify {

    @Column(name = "number_group")
    private int number_group;

    @Column(name = "categoria" ,length = 20)
    private String categoria;

    @Column(name = "titolo", length = 50)
    private String titolo;

    /*
    @Column(name = "intro", length = 200)
    private String intro;

    @Lob
    @Column(name = "testo")
    private String testo;
     */

    @Lob
    @Column(name = "link_")
    private String link;

    @Lob
    @Column(name = "image")
    private String image;
}
