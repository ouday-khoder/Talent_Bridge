package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Client;

import java.util.List;

public interface ClientServiceInterface {

    List<Client> findAll();

    Client save(Client theClient);
}
