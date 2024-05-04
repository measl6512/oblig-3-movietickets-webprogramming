package com.example.oblig3movieticketsdata1700;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ticketRowMapper implements RowMapper<tickets> {

    @Override
    public tickets mapRow(ResultSet rs, int rowNum) throws SQLException {
        tickets tickets = new tickets();
        tickets.setId(rs.getInt("id"));
        tickets.setMovie(rs.getString("movie"));
        tickets.setAmount(rs.getInt("amount"));
        tickets.setFirstname(rs.getString("firstname"));
        tickets.setLastname(rs.getString("lastname"));
        tickets.setMail(rs.getString("mail"));
        tickets.setPhonenumber(rs.getString("phonenumber"));
        return tickets;
    }
}