package com.codeclan.example.demo.Controller;
import com.codeclan.example.demo.Models.Sequence;
import com.codeclan.example.demo.Models.Song;
import com.codeclan.example.demo.Repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
public class SongController {

    @Autowired
    SongRepository songRepository;


    @GetMapping(value = "/songs")
    public ResponseEntity<List<Song>> getAllSongs() {
        return new ResponseEntity(songRepository.findAll(), HttpStatus.OK);
    }


    @PostMapping(value = "/songs")
    public ResponseEntity<Song> postSongs(@RequestBody Song song) {
        songRepository.save(song);
        return new ResponseEntity<>(song, HttpStatus.OK);
    }
}
