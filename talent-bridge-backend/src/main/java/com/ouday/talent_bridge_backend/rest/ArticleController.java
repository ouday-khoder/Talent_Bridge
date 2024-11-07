package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Article;
import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.repository.ArticleRepository;
import com.ouday.talent_bridge_backend.service.FreelancerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController {

    @Autowired
    private FreelancerServiceInterface freelancerServiceInterface;

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping("/freelancers/{freelancerId}/articles")
    public List<Article> getArticleByFreelancerId(@PathVariable int freelancerId) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }
        return freelancer.getArticleList();
    }

    @PostMapping("/freelancers/{freelancerId}/articles")
    public List<Article> addArticles(@PathVariable int freelancerId, @RequestBody List<Article> articles) {

        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }

        for (Article article : articles) {
            article.setFreelancer(freelancer);
            articleRepository.save(article);
        }

        return articles;
    }
}


