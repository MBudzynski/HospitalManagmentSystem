package com.example.hmscore.ddd.patient.application;

import com.example.hmscore.ddd.patient.domain.DocumentAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class DocumentService {

    private final DocumentAdapter documentAdapter;
}
