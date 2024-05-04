package com.example.oblig3movieticketsdata1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ticketsController {
    @Autowired
    private ticketRepo ticketRepo;

    @PostMapping("/save")
    public void saveTicket(@RequestBody tickets tickets) {
        ticketRepo.saveTicket(tickets);
    }

    @GetMapping("/showTickets")
    public List<tickets> showTickets(){
        return ticketRepo.getAllTickets();
    }

    @DeleteMapping("/deleteAllTickets")
    public void deleteAllTickets() {
        ticketRepo.deleteAllTickets();
    }
}
