package com.codeclan.example.demo.Models;
import javax.persistence.*;
import java.util.ArrayList;


@Entity
@Table(name ="songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="clap")
    private ArrayList<Integer> clap;

    @Column(name="clave")
    private ArrayList<Integer> clave;

    @Column(name="closedHiHat")
    private ArrayList<Integer> closedHiHat;

    @Column(name="cowbell")
    private ArrayList<Integer> cowbell;

    @Column(name="cymbal")
    private ArrayList<Integer> cymbal;

    @Column(name="highConga")
    private ArrayList<Integer> highConga;

    @Column(name="hiTom")
    private ArrayList<Integer> hiTom;

    @Column(name="kick")
    private ArrayList<Integer> kick;

    @Column(name="lowConga")
    private ArrayList<Integer> lowConga;

    @Column(name="lowTom")
    private ArrayList<Integer> lowTom;

    @Column(name="midConga")
    private ArrayList<Integer> midConga;

    @Column(name="midTom")
    private ArrayList<Integer> midTom;

    @Column(name="openHiHat")
    private ArrayList<Integer> openHiHat;

    @Column(name="rimShot")
    private ArrayList<Integer> rimShot;

    @Column(name="shaker")
    private ArrayList<Integer> shaker;

    @Column(name="snare")
    private ArrayList<Integer> snare;

    public Song(String title) {
        this.title = title;
        this.clap = new ArrayList<Integer>();
        this.clave = new ArrayList<Integer>();
        this.closedHiHat = new ArrayList<Integer>();
        this.cowbell = new ArrayList<Integer>();
        this.cymbal = new ArrayList<Integer>();
        this.highConga = new ArrayList<Integer>();
        this.hiTom = new ArrayList<Integer>();
        this.kick = new ArrayList<Integer>();
        this.lowConga = new ArrayList<Integer>();
        this.lowTom = new ArrayList<Integer>();
        this.midConga = new ArrayList<Integer>();
        this.midTom = new ArrayList<Integer>();
        this.openHiHat = new ArrayList<Integer>();
        this.rimShot = new ArrayList<Integer>();
        this.shaker = new ArrayList<Integer>();
        this.snare = new ArrayList<Integer>();
    }

    public Song(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList<Integer> getClap() {
        return clap;
    }

    public void setClap(ArrayList<Integer> clap) {
        this.clap = clap;
    }

    public ArrayList<Integer> getClave() {
        return clave;
    }

    public void setClave(ArrayList<Integer> clave) {
        this.clave = clave;
    }

    public ArrayList<Integer> getClosedHiHat() {
        return closedHiHat;
    }

    public void setClosedHiHat(ArrayList<Integer> closedHiHat) {
        this.closedHiHat = closedHiHat;
    }

    public ArrayList<Integer> getCowbell() {
        return cowbell;
    }

    public void setCowbell(ArrayList<Integer> cowbell) {
        this.cowbell = cowbell;
    }

    public ArrayList<Integer> getCymbal() {
        return cymbal;
    }

    public void setCymbal(ArrayList<Integer> cymbal) {
        this.cymbal = cymbal;
    }

    public ArrayList<Integer> getHighConga() {
        return highConga;
    }

    public void setHighConga(ArrayList<Integer> highConga) {
        this.highConga = highConga;
    }

    public ArrayList<Integer> getHiTom() {
        return hiTom;
    }

    public void setHiTom(ArrayList<Integer> hiTom) {
        this.hiTom = hiTom;
    }

    public ArrayList<Integer> getKick() {
        return kick;
    }

    public void setKick(ArrayList<Integer> kick) {
        this.kick = kick;
    }

    public ArrayList<Integer> getLowConga() {
        return lowConga;
    }

    public void setLowConga(ArrayList<Integer> lowConga) {
        this.lowConga = lowConga;
    }

    public ArrayList<Integer> getLowTom() {
        return lowTom;
    }

    public void setLowTom(ArrayList<Integer> lowTom) {
        this.lowTom = lowTom;
    }

    public ArrayList<Integer> getMidConga() {
        return midConga;
    }

    public void setMidConga(ArrayList<Integer> midConga) {
        this.midConga = midConga;
    }

    public ArrayList<Integer> getMidTom() {
        return midTom;
    }

    public void setMidTom(ArrayList<Integer> midTom) {
        this.midTom = midTom;
    }

    public ArrayList<Integer> getOpenHiHat() {
        return openHiHat;
    }

    public void setOpenHiHat(ArrayList<Integer> openHiHat) {
        this.openHiHat = openHiHat;
    }

    public ArrayList<Integer> getRimShot() {
        return rimShot;
    }

    public void setRimShot(ArrayList<Integer> rimShot) {
        this.rimShot = rimShot;
    }

    public ArrayList<Integer> getShaker() {
        return shaker;
    }

    public void setShaker(ArrayList<Integer> shaker) {
        this.shaker = shaker;
    }

    public ArrayList<Integer> getSnare() {
        return snare;
    }

    public void setSnare(ArrayList<Integer> snare) {
        this.snare = snare;
    }
}
