package com.kits.flexbook.service;

import com.kits.flexbook.model.Post;
import com.kits.flexbook.repository.PostRepository;
import com.kits.flexbook.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPost(){
        return postRepository.findAll();
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }


    public Post updatePost(int postId, Post post) {
        Post existingPost = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));

        existingPost.setContent(post.getContent());
        existingPost.setPost_image(post.getPost_image());
        existingPost.setUpdated_at(Timestamp.from(Instant.now()));

        return postRepository.save(existingPost);
    }
}
