package com.codeclan.example.demo.Controller;

import com.codeclan.example.demo.Models.Sequence;
import com.codeclan.example.demo.Repository.SequenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SequenceController {
    @Autowired
    SequenceRepository sequenceRepository;

    @GetMapping(value = "/sequences")
    public ResponseEntity<List<Sequence>> getAllSequences() {

        return new ResponseEntity(sequenceRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/sequences/{id}")
    public ResponseEntity getSequence(@PathVariable Long id) {

        return new ResponseEntity(sequenceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/sequences")
    public ResponseEntity<Sequence> postSong(@RequestBody Sequence sequence) {
        sequenceRepository.save(sequence);
        return new ResponseEntity<>(sequence, HttpStatus.OK);
    }

}
