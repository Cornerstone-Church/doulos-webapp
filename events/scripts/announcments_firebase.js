// Create firestore variable
var firestore = firebase.firestore();

// Announcment List element (the <ul>)
var announcementList = document.querySelector("#announcment-section");

// An array that will hold the announcments in the right order
var announcementsOrdered = [];

// Finds the database to read
var db = firestore.collection("doulos-webapp").doc('events').collection('data');
// Pull all docs in the database and reads each one.
// Will cal the generateElement function with data recieved.

function getData() {
    db.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            var title = data.title;
            var subtitle = data.subtitle;
            var buttonLabel = data.buttonLabel;
            var buttonLink = data.buttonLink;
            var description = data.description;

            // Send to the generator to create the HTML layout
            generateElement(title, subtitle, buttonLabel, buttonLink, description, data.order);
        });

        if (querySnapshot.docs.length <= 0) {
            generateElement('There are no announcements', '', '', '', '', 0);
        }

        // After all data is fetched draw it
        drawData();
    })
}

function drawData() {
    // Go through the sorted array and place each one in the ul
    announcementsOrdered.forEach((element) => {
        announcementList.appendChild(element);
    });
}


// Generates the HTML layout for the announcment passed to it
function generateElement(title, subtitle, buttonLabel, buttonLink, description, sort) {
    var hasButton = false;

    // Define the elements to generate
    const listElement = document.createElement("li");
    const titleElement = document.createElement("h2");
    const subtitleElement = document.createElement("div");
    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'center');
    const buttonElement = document.createElement('a');
    buttonElement.setAttribute('class', 'button');
    const descriptionElement = document.createElement("p");

    // Assign text to each element
    titleElement.innerHTML = title;
    subtitleElement.innerHTML = subtitle;
    descriptionElement.innerHTML = description;

    // Check to see if there should be a button. If so create it
    if (buttonLabel != '' && buttonLink != '') {
        var label = document.createTextNode(buttonLabel);
        buttonElement.appendChild(label);
        buttonElement.setAttribute('href', buttonLink);

        hasButton = true;
    }

    // Add subtitle class to subtitleElement
    subtitleElement.setAttribute("class", "subtitle");

    // Set up list structure
    listElement.appendChild(titleElement);
    listElement.appendChild(subtitleElement);
    
    // If there is a button, Add it to the list
    if (hasButton) {
        buttonWrapper.appendChild(buttonElement);
        listElement.appendChild(buttonWrapper);
    }
    
    listElement.appendChild(descriptionElement)
    
    announcementsOrdered[sort] = listElement;
}