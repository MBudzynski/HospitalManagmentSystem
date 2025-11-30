package com.example.hmscore.repository.drug;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "time_of_day")
public class TimeOfDayEntity {

    @Id
    @Column(name = "time_of_day_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long timeOfDayId;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "timeOfDay", cascade = CascadeType.ALL)
    private List<HospitalizationDrugEntity> patientDrugs = new ArrayList<>();
}
