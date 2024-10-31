package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Client;
import com.ouday.talent_bridge_backend.entity.Profile;
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

    // post profile for client by id
    @PostMapping("/clients/profile/{clientId}")
    public Client ClientProfile(@PathVariable int clientId, @RequestBody Profile profile) {
        Client client = clientServiceInterface.findById(clientId);

        if (client == null) {
            throw new RuntimeException("Client id not found - " + clientId);
        }
        // update client with profile information

        client.setCountry(profile.getCountry());
        client.setCity(profile.getCity());
        client.setStreet(profile.getStreet());
        client.setPostCode(profile.getPostCode());
        client.setDateOfBirth(profile.getDateOfBirth());
        client.setGender(profile.getGender());
        client.setJobTitle(profile.getJobTitle());
        client.setPhoneNumber(profile.getPhoneNumber());
        client.setBio(profile.getBio());

        clientServiceInterface.save(client);

        return client;
    }

    @PutMapping("/clients")
    public Client updateClient(@RequestBody Client theClient) {
        Client dbClient = clientServiceInterface.save(theClient);

        return dbClient;
    }

    @DeleteMapping("/clients/{clientId}")
    public String deleteClientById(@PathVariable int clientId) {
        Client tempClient = clientServiceInterface.findById(clientId);

        if(tempClient == null) {
            throw new RuntimeException("client id not found - " + clientId);
        }
        clientServiceInterface.deleteById(clientId);

        return "deleted client id " + clientId;
    }

    @DeleteMapping("/clients")
    public String deleteAllClients() {
        clientServiceInterface.deleteAll();
        return "All clients are deleted";
    }

}
