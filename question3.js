// JavaScript source code for question 3 of the midterm test review

function loadXMLDoc() {

    // Create XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    // Once XML document is loaded, process the data
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            displayBooks(this);
        }
    }

    // Send a request for the XML data
    xmlhttp.open("GET", "books.xml", true);
    xmlhttp.send();
}

function displayBooks(xml) {
    // Asign the DOM object to a variable
    var xmlDoc = xml.responseXML;

    // Get the transfers and display them
    var table = "";
    var books = xmlDoc.getElementsByTagName("book");
    for (i = 0; i < books.length; i++) {
            // Add book to table
        table += "<tr><td>" + books[i].getElementsByTagName("title")[0].firstChild.nodeValue
            + "</td><td>" + books[i].getElementsByTagName("author")[0].firstChild.nodeValue
            + "</td><td>" + books[i].getElementsByTagName("description")[0].firstChild.nodeValue
            + "</td</tr>";
    }

    // Assign the table markup to the corresponding element in the web page
    document.getElementById("books").innerHTML += table;
}