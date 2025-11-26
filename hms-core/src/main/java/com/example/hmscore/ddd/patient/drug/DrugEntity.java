package com.example.hmscore.ddd.patient.drug;

import com.example.hmscore.ddd.patient.infrastructure.jpa.patient_drug.HospitalizationDrugEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
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
}
