package com.codeclan.example.demo.Repository;

import com.codeclan.example.demo.Models.Sequence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SequenceRepository extends JpaRepository<Sequence, Long> {

    List<Sequence> findByName (String name);

}


