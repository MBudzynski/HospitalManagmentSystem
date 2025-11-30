package com.example.hmscore.repository.drug;

import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Table(name = "hospitalization_drug")
public class HospitalizationDrugEntity {

    @Id
    @Column(name = "hospitalization_drug_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hospitalizationDrugId;

    @Column(name = "from_date")
    private LocalDate fromDate;

    @Column(name = "to_date")
    private LocalDate toDate;

    @ManyToOne
    @JoinColumn(name = "patient_hospitalization_id")
    private PatientHospitalizationEntity patientHospitalization;

    @ManyToOne
    @JoinColumn(name = "drug_id")
    private DrugEntity drug;

    @ManyToOne
    @JoinColumn(name = "time_of_day_id")
    private TimeOfDayEntity timeOfDay;

    @ManyToOne
    @JoinColumn(name = "drug_quantity_id")
    private DrugQuantityEntity drugQuantity;
}
