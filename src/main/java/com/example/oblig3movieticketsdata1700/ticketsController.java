package com.example.oblig3movieticketsdata1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ticketsController {
    @Autowired
    private ticketRepo rep;

    @PostMapping("/save")
    public void saveTickets(tickets ticket) {
        rep.saveTickets(ticket);
    }

    @GetMapping("/showTickets")
    public List<tickets> showTicket(){
        return rep.getAllTickets();
    }

    @GetMapping("/deleteAllTickets")
    public void deleteAllTickets() {
        rep.deleteAllTickets();
    }

}
