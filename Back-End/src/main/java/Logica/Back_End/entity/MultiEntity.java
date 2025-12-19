package Logica.Back_End.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "storia")
public class MultiEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "number_group")
    private int number_group;

    @Column(name = "categoria" ,length = 20)
    private String categoria;

    @Column(name = "titolo", length = 50)
    private String titolo;

    /*
    @Lob
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
