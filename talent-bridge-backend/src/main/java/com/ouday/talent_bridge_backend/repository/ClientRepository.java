package com.ouday.talent_bridge_backend.repository;

import com.ouday.talent_bridge_backend.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
}

