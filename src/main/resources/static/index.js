let tickets = [];

function buyTickets() {
    let buyTickets = document.getElementById("movie").value;
    let ticketAmount = document.getElementById("ticketAmount").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mail = document.getElementById("mail").value;

    const ticket = {
        movie: buyTickets,
        ticketAmount: ticketAmount,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        mail: mail
    };

    // Validere billettopplysninger
    let isValid = validateTicket(ticket);

    if (isValid) {
        tickets.push(ticket);
        showTickets();
        clearInputs();
    }
}

function showTickets() {
    let printOut = "<table id='Receipt'><tr><th>Movie</th><th>Amount of tickets</th><th>First name</th><th>Last name</th><th>Phonenumber</th><th>Mail</th></tr>";
    for (let i = 0; i < tickets.length; i++) {
        printOut += "<tr>";
        printOut += "<td>" + tickets[i].movie + "</td>";
        printOut += "<td>" + tickets[i].ticketAmount + "</td>";
        printOut += "<td>" + tickets[i].firstname + "</td>";
        printOut += "<td>" + tickets[i].lastname + "</td>";
        printOut += "<td>" + tickets[i].phonenumber + "</td>";
        printOut += "<td>" + tickets[i].mail + "</td>";
        printOut += "</tr>";
    }

    printOut += "</table>";
    document.getElementById("boughtTickets").innerHTML = printOut;
}

function deleteTickets() {
    tickets = [];
    showTickets(); // Oppdater visningen for å vise en tom tabell
}

function validateTicket(ticket) {
    let isValid = true;

    if (ticket.ticketAmount.trim() === "" || isNaN(ticket.ticketAmount) || parseInt(ticket.ticketAmount) <= 0) {
        document.getElementById("ticketAmountError").textContent = "Please enter a valid ticket amount";
        document.getElementById("ticketAmountError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("ticketAmountError").textContent = "";
    }

    if (ticket.firstname.trim() === "" || /\d/.test(ticket.firstname)) {
        document.getElementById("firstnameError").textContent = "Please enter a valid first name";
        document.getElementById("firstnameError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("firstnameError").textContent = "";
    }

    if (ticket.lastname.trim() === "" || /\d/.test(ticket.lastname)) {
        document.getElementById("lastnameError").textContent = "Please enter a valid last name";
        document.getElementById("lastnameError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("lastnameError").textContent = "";
    }

    if (ticket.phonenumber.trim() === "" || isNaN(ticket.phonenumber) || ticket.phonenumber.length !== 8) {
        document.getElementById("phonenumberError").textContent = "Please enter a valid phone number";
        document.getElementById("phonenumberError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("phonenumberError").textContent = "";
    }

    if (ticket.mail.trim() === "" || !validateEmail(ticket.mail)) {
        document.getElementById("mailError").textContent = "Please enter a valid email address";
        document.getElementById("mailError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("mailError").textContent = "";
    }

    return isValid;
}

function validateEmail(email) {
    // Forenklet e-postvalidering, kan utvides etter behov
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearInputs() {
    document.getElementById("movie").value = "";
    document.getElementById("ticketAmount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("mail").value = "";
}
