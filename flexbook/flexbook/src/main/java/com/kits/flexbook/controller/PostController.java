package com.kits.flexbook.controller;

import com.kits.flexbook.model.Post;
import com.kits.flexbook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/post")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("")
    public List<Post> getAllPost() {
        return postService.getAllPost();
    }

    @PostMapping("")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post newPost = postService.createPost(post);
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }

    @PutMapping("{post_id}")
    public ResponseEntity<Post> updatePost(@PathVariable("post_id") int postId, @RequestBody Post post) {
        Post updatedPost = postService.updatePost(postId, post);
        return new ResponseEntity<>(updatedPost, HttpStatus.OK);
    }
}
