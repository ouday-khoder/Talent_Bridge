package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Client;
import com.ouday.talent_bridge_backend.service.ClientServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @Autowired
    private ClientServiceInterface clientServiceInterface;

    @GetMapping("/clients")
    public List<Client> findAll() {
        return clientServiceInterface.findAll();
    }

    @GetMapping("/clients/{clientId}")
    public Client getClientById(@PathVariable int clientId) {
        Client theClient = clientServiceInterface.findById(clientId);

        if(theClient == null) {
            throw new RuntimeException("client id not found " + clientId);
        }
        return  theClient;
    }

    @PostMapping("/clients")
    public Client addClient(@RequestBody Client theClient) {

        theClient.setId(0);

        Client dbClient = clientServiceInterface.save(theClient);

        return dbClient;
    }

    @PutMapping("/clients")
    public Client updateClient(@RequestBody Client theClient) {
        Client dbClient = clientServiceInterface.save(theClient);

        return dbClient;
    }



}
