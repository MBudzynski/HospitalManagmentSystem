package com.example.hmscore.repository.drug;

import com.example.hmscore.dto.TimeOfDayDTO;
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

    public TimeOfDayDTO toDTO() {
        return TimeOfDayDTO
                .builder()
                .timeOfDayId(this.timeOfDayId)
                .description(this.description)
                .build();
    }

    public static TimeOfDayEntity toEntity(TimeOfDayDTO dto) {
        return TimeOfDayEntity
                .builder()
                .timeOfDayId(dto.getTimeOfDayId())
                .description(dto.getDescription())
                .build();
    }
}
