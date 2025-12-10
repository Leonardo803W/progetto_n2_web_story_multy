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

    private int number_group;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    private String titolo;
    private String intro;
    private String testo;
    private String link_;
    private String image;
}
