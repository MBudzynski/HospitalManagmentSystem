package com.example.hmscore.ddd.patient.infrastructure.jpa.patient;

import com.example.hmscore.ddd.patient.infrastructure.jpa.patient_hospitalization.PatientHospitalizationEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "patient")
public class PatientEntity {

    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;
    private String name;
    private String surname;
    private String gender;
    private String phone;
    private String email;
    private String street;
    private String city;
    private String houseNumber;
    private String postalCode;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    List<PatientHospitalizationEntity> hospitalizations = new ArrayList<>();
}
