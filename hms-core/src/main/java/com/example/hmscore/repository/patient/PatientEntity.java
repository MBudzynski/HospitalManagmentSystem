package com.example.hmscore.repository.patient;

import com.example.hmscore.dto.PatientDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "patient")
public class PatientEntity {

    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;
    private String name;
    private String surname;
    private String pesel;
    private LocalDate birthDate;
    private String gender;
    private String phone;
    private String email;
    private String street;
    private String city;
    private String houseNumber;
    private String postalCode;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    List<PatientHospitalizationEntity> hospitalizations = new ArrayList<>();

    public PatientDTO toDTO() {
        return PatientDTO
                .builder()
                .patientId(patientId)
                .name(name)
                .surname(surname)
                .pesel(pesel)
                .birthDate(birthDate)
                .gender(gender)
                .phone(phone)
                .email(email)
                .street(street)
                .city(city)
                .houseNumber(houseNumber)
                .postalCode(postalCode)
                .build();
    }

    public static PatientEntity toEntity(PatientDTO dto) {
        return PatientEntity
                .builder()
                .patientId(dto.getPatientId())
                .name(dto.getName())
                .surname(dto.getSurname())
                .pesel(dto.getPesel())
                .birthDate(dto.getBirthDate())
                .gender(dto.getGender())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .street(dto.getStreet())
                .city(dto.getCity())
                .houseNumber(dto.getHouseNumber())
                .postalCode(dto.getPostalCode())
                .build();
    }
}
