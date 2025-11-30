package com.example.hmscore.repository.room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomConfiguration {

    private boolean withPatientHospitalizations;
    private boolean withDepartments;

}
