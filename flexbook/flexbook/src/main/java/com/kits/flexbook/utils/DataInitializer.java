package com.kits.flexbook.utils;

import com.kits.flexbook.model.Post;
import com.kits.flexbook.model.User;
import com.kits.flexbook.repository.PostRepository;
import com.kits.flexbook.repository.UserRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.sql.Timestamp;

@Configuration
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PostRepository postRepository;

    private final Faker faker;

    public DataInitializer(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.faker = new Faker();
    }

    @Override
    public void run(String... args) throws Exception {
        for (int i = 0; i < 10; i++) {
            User user = new User();
            user.setUser_id(i + 1);
            user.setUsername(faker.name().username());
            user.setEmail(faker.internet().emailAddress());
            user.setPassword(faker.internet().password());
            user.setProfile_picture(faker.internet().image());
            user.setBio(faker.lorem().sentence());
            user.setCreated_at(new Timestamp(System.currentTimeMillis()));
            user.setUpdated_at(new Timestamp(System.currentTimeMillis()));
            userRepository.save(user);
        }

        for (int i = 0; i <= 30; i++){
            Post post = new Post();
           post.setPost_id(i+1);
           post.setContent(faker.lorem().sentence());
           post.setPost_image(faker.internet().image());
           post.setCreated_at(new Timestamp(System.currentTimeMillis()));
           post.setUpdated_at(new Timestamp(System.currentTimeMillis()));
           postRepository.save(post);
        }
    }
}
