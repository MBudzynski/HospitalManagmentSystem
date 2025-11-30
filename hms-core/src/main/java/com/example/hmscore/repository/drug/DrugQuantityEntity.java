package com.example.hmscore.repository.drug;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
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
}
