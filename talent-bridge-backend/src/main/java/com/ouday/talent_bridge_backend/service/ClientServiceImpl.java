package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Client;
import com.ouday.talent_bridge_backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientServiceInterface {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientServiceImpl(ClientRepository theClientRepository) {
        clientRepository = theClientRepository;
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Client save(Client theClient) {
        return clientRepository.save(theClient);
    }

}
