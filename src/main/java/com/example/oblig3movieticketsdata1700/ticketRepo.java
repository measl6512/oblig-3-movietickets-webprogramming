package com.example.oblig3movieticketsdata1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ticketRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveTicket(tickets tickets) {
        String sql = "INSERT INTO tickets (movie, amount, firstname, lastname, mail, phonenumber) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, tickets.getMovie(), tickets.getAmount(), tickets.getFirstname(), tickets.getLastname(), tickets.getMail(), tickets.getPhonenumber());
    }

    public List<tickets> getAllTickets() {
        String sql = "SELECT * FROM tickets";
        return jdbcTemplate.query(sql, new ticketRowMapper());
    }

    public void deleteAllTickets() {
        String sql = "DELETE FROM tickets";
        jdbcTemplate.update(sql);
    }
}
