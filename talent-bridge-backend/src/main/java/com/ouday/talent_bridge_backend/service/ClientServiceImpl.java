package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Client;
import com.ouday.talent_bridge_backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Client findById(int theId) {
        Optional<Client> result = clientRepository.findById(theId);

        Client theClient =null;

        if (result.isPresent()) {
            theClient = result.get();
        } else  {
            throw new RuntimeException("did not found the client id - " + theId);
        }
        return theClient;
    }

    @Override
    public Client save(Client theClient) {
        return clientRepository.save(theClient);
    }

    @Override
    public void deleteById(int theId) {
        clientRepository.deleteById(theId);
    }

    @Override
    public void deleteAll() {
        clientRepository.deleteAll();
    }


    @Override
    public Client findByEmail(String email) {
        return clientRepository.findByEmail(email);
    }


}
