package com.example.hmscore.services;

import com.example.hmscore.dto.RoomDTO;
import com.example.hmscore.repository.room.RoomConfiguration;
import com.example.hmscore.repository.room.RoomEntity;
import com.example.hmscore.repository.room.RoomJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomJpaRepository roomJpaRepository;

    public RoomDTO saveRoom(RoomDTO roomDTO) {
        return roomJpaRepository.save(RoomEntity.fromDTO(roomDTO)).toDTO(RoomConfiguration.builder().build());
    }

    public void deleteRoom(Long roomId) {
        RoomEntity room = roomJpaRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Nie znaleziono pokoju o ID: " + roomId));
        if(room.getPatientHospitalizations() != null && room.getPatientHospitalizations().size() > 0) {
            throw new RuntimeException("Nie można usunąć sali, w której są hospitalizowani pacjenci !!!");
        }
        roomJpaRepository.delete(room);
    }
}
