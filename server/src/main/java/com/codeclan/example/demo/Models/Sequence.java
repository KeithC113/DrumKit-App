package com.codeclan.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name ="sequences")
public class Sequence implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    // column for each drum component, object containing pattern.
    // 

    @JsonIgnoreProperties({"sequences"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    @JsonIgnoreProperties({"user"})
//    private List<Sequence> sequences;

    public Sequence(String name, User user) {
        this.name = name;
        this.user = user;
//        this.sequences = new ArrayList<Sequence>();
    }

    public Sequence(){
}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public List<Sequence> getSequences() {
//        return sequences;
//    }
//
//    public void setSequences(List<Sequence> sequences) {
//        this.sequences = sequences;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


//    public List<Sequence> getSequences() {
//        return sequences;
//    }
//
//    public void setSequences(List<Sequence> sequences) {
//        this.sequences = sequences;
//    }

//    public List<Sequence> getByName(){
//        return sequences;
    }


