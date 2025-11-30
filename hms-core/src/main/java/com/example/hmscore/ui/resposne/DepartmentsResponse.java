package com.example.hmscore.ui.resposne;

import com.example.hmscore.dto.DepartmentDTO;
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
public class DepartmentsResponse {

    @Builder.Default
    List<DepartmentDTO> departments = new ArrayList<>();
}
