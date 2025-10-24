package com.example.hmscore.ddd.patient.infrastructure.jpa.document;

import com.example.hmscore.ddd.patient.domain.DocumentAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DocumentAdapterImpl implements DocumentAdapter {

    private final DocumentJpaRepository documentJpaRepository;
}
