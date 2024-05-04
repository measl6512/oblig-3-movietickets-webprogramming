function buyTickets() {
    let isValid = true; // Declare and initialize isValid to true

    let buyTickets = document.getElementById("movie").value;
    let ticketAmount = document.getElementById("ticketAmount").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mail = document.getElementById("mail").value;

    const numberRegex = /^\d+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const textRegex = /\d/;

    // Nullstill feilmeldinger
    document.getElementById("choseMovieError").textContent = "";
    document.getElementById("firstnameError").textContent = "";
    document.getElementById("ticketAmountError").textContent = "";
    document.getElementById("lastnameError").textContent = "";
    document.getElementById("phonenumberError").textContent = "";
    document.getElementById("mailError").textContent = "";

    // Valider valgt film
    if (buyTickets === 'chose-movie') {
        document.getElementById("choseMovieError").textContent = "Chose a movie*";
        document.getElementById("choseMovieError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("choseMovieError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider antall billetter
    if (Number(ticketAmount) === 0 || !numberRegex.test(Number(ticketAmount))) {
        document.getElementById("ticketAmountError").textContent = "Number of tickets are invalid.*";
        document.getElementById("ticketAmountError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("ticketAmountError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider fornavn
    if (firstname.trim() === "" || textRegex.test(firstname)) {
        document.getElementById("firstnameError").textContent = "This field cannot be empty*";
        document.getElementById("firstnameError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("firstnameError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider etternavn
    if (lastname.trim() === "" || textRegex.test(lastname)) {
        document.getElementById("lastnameError").textContent = "This field cannot be empty*";
        document.getElementById("lastnameError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("lastnameError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider telefonnummer
    if (!numberRegex.test(phonenumber) || phonenumber.length !== 8) {
        document.getElementById("phonenumberError").textContent = "This field cannot be empty*";
        document.getElementById("phonenumberError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("phonenumberError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider e-postadresse
    if (mail.trim() === "" || !emailRegex.test(mail)) {
        document.getElementById("mailError").textContent = "This field cannot be empty.*";
        document.getElementById("mailError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("mailError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    if (!isValid) {
        // Avbryt billettkjøpet hvis validering mislykkes
        return;
    }

    // Fortsett behandling av billettkjøp hvis validering lykkes

    const ticket = {
        movie: buyTickets,
        amount: ticketAmount,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        mail: mail
    };

    tickets.push(ticket);

    updateTicketsTable();

    // Nullstill input-feltene
    document.getElementById("movie").value = "";
    document.getElementById("ticketAmount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("mail").value = "";

}
