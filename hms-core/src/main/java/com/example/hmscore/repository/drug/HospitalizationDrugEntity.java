package com.example.hmscore.repository.drug;

import com.example.hmscore.dto.HospitalizationDrugDTO;
import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
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

    public HospitalizationDrugDTO toDTO() {
        return HospitalizationDrugDTO
                .builder()
                .hospitalizationDrugId(this.hospitalizationDrugId)
                .fromDate(this.fromDate)
                .toDate(this.toDate)
                .drug(this.drug.toDTO())
                .timeOfDay(this.timeOfDay.toDTO())
                .drugQuantity(this.drugQuantity.toDTO())
                .build();
    }

    public static HospitalizationDrugEntity toEntity(Long patientHospitalization, HospitalizationDrugDTO dto) {
        return HospitalizationDrugEntity
                .builder()
                .hospitalizationDrugId(dto.getHospitalizationDrugId())
                .fromDate(dto.getFromDate())
                .toDate(dto.getToDate())
                .patientHospitalization(PatientHospitalizationEntity.builder().patientHospitalizationId(patientHospitalization).build())
                .drugQuantity(dto.getDrugQuantity() != null ? DrugQuantityEntity.toEntity(dto.getDrugQuantity()) : null)
                .drug(dto.getDrug() != null ? DrugEntity.fromDTO(dto.getDrug()) : null)
                .timeOfDay(dto.getTimeOfDay() != null ? TimeOfDayEntity.toEntity(dto.getTimeOfDay()) : null)
                .build();
    }
}
