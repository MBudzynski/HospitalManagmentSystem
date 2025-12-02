package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class HospitalizationDocumentDTO {

    private Long hospitalizationDocumentId;
    private String title;
    private String userLogin;
    private LocalDateTime createdAt;
    private List<DocumentDTO> documents;
}
