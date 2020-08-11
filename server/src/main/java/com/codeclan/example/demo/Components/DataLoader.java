package com.codeclan.example.demo.Components;

import com.codeclan.example.demo.Models.Sequence;
import com.codeclan.example.demo.Models.Song;
import com.codeclan.example.demo.Models.User;
import com.codeclan.example.demo.Repository.SequenceRepository;
import com.codeclan.example.demo.Repository.SongRepository;
import com.codeclan.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    SequenceRepository sequenceRepository;

    @Autowired
    SongRepository songRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        Song song1 = new Song("I've got a brand new combine harvester");
        ArrayList<Integer> pattern = new ArrayList<Integer>();
        pattern.add(1);
        pattern.add(0);
        pattern.add(1);
        pattern.add(0);
        song1.setKick(pattern);
        songRepository.save(song1);


        User keith = new User("Keith");
        userRepository.save(keith);

        User tino = new User("Tino");
        userRepository.save(tino);

        User ash = new User("Ash");
        userRepository.save(ash);

        User david = new User("David");
        userRepository.save(david);

        Sequence house = new Sequence("House Beat", keith);
        sequenceRepository.save(house);

        Sequence techno = new Sequence("Techno Tune", tino);
        sequenceRepository.save(techno);

        Sequence reggae = new Sequence("Reggae Riddim", ash);
        sequenceRepository.save(reggae);

        Sequence hiphop = new Sequence("Hip Hop Beat", david);
        sequenceRepository.save(hiphop);

    }

}
