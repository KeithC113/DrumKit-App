package com.codeclan.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name ="users")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"user"})
    private List<Sequence> sequences;

    public User(String name) {
        this.name = name;
        this.sequences = new ArrayList<Sequence>();
    }


    public User(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
//        this.sequences = sequences;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Sequence> findSequence(){
        return sequences;
    }

    public List<Sequence> getSequences() {
        return sequences;
    }

    public void setSequences(List<Sequence> sequences) {
        this.sequences = sequences;
    }

    public String findByName(){
        return name;
    }
}