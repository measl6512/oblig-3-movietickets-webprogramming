package com.example.oblig3movieticketsdata1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ticketsController {

    @Autowired
    private ticketRepo ticketRepo;

    @PostMapping("/tickets")
    public void saveTicket(@RequestBody tickets tickets) {
        ticketRepo.saveTicket(tickets);
    }

    @GetMapping("/tickets")
    public List<tickets> getAllTickets() {
        return ticketRepo.getAllTickets();
    }

    @DeleteMapping("/tickets")
    public void deleteAllTickets() {
        ticketRepo.deleteAllTickets();
    }
}
