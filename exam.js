function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('mainContent');
    if (navbar.style.left === '-250px') {
        navbar.style.left = '0';
        content.style.marginLeft = '250px';
    } else {
        navbar.style.left = '-250px';
        content.style.marginLeft = '50px';
    }
}

function showMidTerm1Score() {
    document.getElementById("mid-term-1-score").style.display = "block";
    document.getElementById("mid-term-2-score").style.display = "none";
    document.getElementById("practical-score").style.display = "none";
    document.getElementById("end-semester-score").style.display = "none";
}

function showMidTerm2Score() {
    document.getElementById("mid-term-1-score").style.display = "none";
    document.getElementById("mid-term-2-score").style.display = "block";
    document.getElementById("practical-score").style.display = "none";
    document.getElementById("end-semester-score").style.display = "none";
}

function showPracticalScore() {
    document.getElementById("mid-term-1-score").style.display = "none";
    document.getElementById("mid-term-2-score").style.display = "none";
    document.getElementById("practical-score").style.display = "block";
    document.getElementById("end-semester-score").style.display = "none";
}

function showEndSemesterScore() {
    document.getElementById("mid-term-1-score").style.display = "none";
    document.getElementById("mid-term-2-score").style.display = "none";
    document.getElementById("practical-score").style.display = "none";
    document.getElementById("end-semester-score").style.display = "block";
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Redirect to a PDF file after form submission
    window.location.href = "form.pdf";
}