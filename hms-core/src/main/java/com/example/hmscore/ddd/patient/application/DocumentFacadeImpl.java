package com.example.hmscore.ddd.patient.application;

import com.example.hmscore.common.patient.DocumentFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class DocumentFacadeImpl implements DocumentFacade {

    private final DocumentService documentService;
}
