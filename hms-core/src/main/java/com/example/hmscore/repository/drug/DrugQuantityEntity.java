package com.example.hmscore.repository.drug;

import com.example.hmscore.dto.DrugQuantityDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "drug_quantity")
public class DrugQuantityEntity {

    @Id
    @Column(name = "drug_quantity_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long drugQuantityId;
    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "drugQuantity", cascade = CascadeType.ALL)
    private List<HospitalizationDrugEntity> patientDrugs = new ArrayList<>();

    public DrugQuantityDTO toDTO() {
        return DrugQuantityDTO
                .builder()
                .drugQuantityId(this.drugQuantityId)
                .description(this.description)
                .build();
    }

    public static DrugQuantityEntity toEntity(DrugQuantityDTO dto) {
        return DrugQuantityEntity
                .builder()
                .drugQuantityId(dto.getDrugQuantityId())
                .description(dto.getDescription())
                .build();
    }
}
