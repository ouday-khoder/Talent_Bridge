package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Client;

import java.util.List;

public interface ClientServiceInterface {

    List<Client> findAll();

    Client findById(int theId);

    Client save(Client theClient);

    void deleteById(int theId);

    void deleteAll();
}
