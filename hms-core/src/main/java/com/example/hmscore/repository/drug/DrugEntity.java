package com.example.hmscore.repository.drug;

import com.example.hmscore.dto.DrugDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "drug")
public class DrugEntity {

    @Id
    @Column(name = "drug_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long drugId;
    private String name;
    private String activeIngredient;
    private String dosage;
    private String dosageForm;
    private String quantity;

    @OneToMany(mappedBy = "drug", cascade = CascadeType.ALL)
    private List<HospitalizationDrugEntity> patientDrugs = new ArrayList<>();

    public DrugDTO toDTO() {
        return DrugDTO
                .builder()
                .drugId(this.drugId)
                .name(this.name)
                .activeIngredient(this.activeIngredient)
                .dosage(this.dosage)
                .dosageForm(this.dosageForm)
                .quantity(this.quantity)
                .build();
    }

    public static DrugEntity fromDTO(DrugDTO dto) {
        return DrugEntity
                .builder()
                .drugId(dto.getDrugId())
                .name(dto.getName())
                .activeIngredient(dto.getActiveIngredient())
                .dosage(dto.getDosage())
                .dosageForm(dto.getDosageForm())
                .quantity(dto.getQuantity())
                .build();
    }
}
