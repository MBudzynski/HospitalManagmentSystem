package com.example.hmscore.ui.resposne;

import com.example.hmscore.dto.StaffDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Getter
@Service
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StaffSearchResponse {

    @Builder.Default
    List<StaffDTO> staffs = new ArrayList<>();
}
