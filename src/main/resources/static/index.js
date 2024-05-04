let tickets = [];

function buyTickets() {
    let isValid = true;

    let chosenMovie = document.getElementById("movie").value;
    let ticketAmount = document.getElementById("ticketAmount").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mail = document.getElementById("mail").value;

    // Validation code...

    if (!isValid) {
        return;
    }

    const ticket = {
        movie: chosenMovie,
        amount: ticketAmount,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        mail: mail
    };

    tickets.push(ticket);

    updateTicketList();

    // Clear input fields after buying tickets
    document.getElementById("movie").value = "";
    document.getElementById("ticketAmount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("mail").value = "";
}

function updateTicketList() {
    let output = "<table id='receipt'><tr><th>Movie</th><th>Amount</th><th>Firstname</th><th>Lastname</th><th>Phonenumber</th><th>Mail</th></tr>";
    for (let i = 0; i < tickets.length; i++) {
        output += "<tr>";
        output += "<td>" + tickets[i].movie + "</td>";
        output += "<td>" + tickets[i].amount + "</td>";
        output += "<td>" + tickets[i].firstname + "</td>";
        output += "<td>" + tickets[i].lastname + "</td>";
        output += "<td>" + tickets[i].phonenumber + "</td>";
        output += "<td>" + tickets[i].mail + "</td>";
        output += "</tr>";
    }
    output += "</table>";
    document.getElementById("boughtTickets").innerHTML = output;
}

function deleteAllTickets() {
    tickets = [];
    updateTicketList();
}
