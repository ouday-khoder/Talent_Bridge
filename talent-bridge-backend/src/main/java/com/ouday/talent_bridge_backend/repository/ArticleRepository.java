package com.ouday.talent_bridge_backend.repository;

import com.ouday.talent_bridge_backend.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Integer> {

}
