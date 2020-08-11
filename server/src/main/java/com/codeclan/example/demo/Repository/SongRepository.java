package com.codeclan.example.demo.Repository;
import com.codeclan.example.demo.Models.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

    List<Song> findBytitle (String title);
}