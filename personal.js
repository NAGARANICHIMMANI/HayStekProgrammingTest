let persons = [{
        "name": "John Smith",
        "location": "New York, NY"
    },
    {
        "name": "Jane Doe",
        "location": "Los Angeles, CA"
    },
    {
        "name": "Bob Johnson",
        "location": "Chicago, IL"
    },
    {
        "name": "Emily Davis",
        "location": "Houston, TX"
    },
    {
        "name": "Michael Brown",
        "location": "Phoenix, AZ"
    },
    {
        "name": "Sarah Miller",
        "location": "Philadelphia, PA"
    },
    {
        "name": "David Garcia",
        "location": "San Antonio, TX"
    },
    {
        "name": "Jessica Rodriguez",
        "location": "San Diego, CA"
    },
    {
        "name": "Mark Wilson",
        "location": "Dallas, TX"
    },
    {
        "name": "Elizabeth Martinez",
        "location": "San Jose, CA"
    },
    {
        "name": "Joshua Hernandez",
        "location": "Austin, TX"
    },
    {
        "name": "Karen Moore",
        "location": "Jacksonville, FL"
    },
    {
        "name": "Brian Jackson",
        "location": "Fort Worth, TX"
    },
    {
        "name": "Heather Anderson",
        "location": "Columbus, OH"
    },
    {
        "name": "Teresa Thomas",
        "location": "Charlotte, NC"
    },
    {
        "name": "Dennis Mitchell",
        "location": "Indianapolis, IN"
    },
    {
        "name": "Cynthia Lee",
        "location": "Seattle, WA"
    },
    {
        "name": "Adam Hall",
        "location": "Denver, CO"
    },
    {
        "name": "Nancy Allen",
        "location": "El Paso, TX"
    },
    {
        "name": "Lisa King",
        "location": "Washington, DC"
    },
    {
        "name": "William Wright",
        "location": "Boston, MA"
    },
    {
        "name": "Mary Scott",
        "location": "Nashville, TN"
    },
    {
        "name": "Kathryn Green",
        "location": "Portland, OR"
    },
    {
        "name": "Gerald Baker",
        "location": "Vancouver, BC"
    },
    {
        "name": "Eric Cooper",
        "location": "Sacramento, CA"
    },
    {
        "name": "Stephanie Gomez",
        "location": "Oklahoma City, OK"
    },
    {
        "name": "Edward Kelly",
        "location": "Tulsa, OK"
    },
    {
        "name": "Ashley Sanders",
        "location": "Winnipeg, MB"
    }
];
let personsCount = persons.length;
//console.log(personsCount);
let paragraphEl = document.getElementById("paragraph");
let personIndiviual = document.getElementById("personContainer");
let count = 0;
let buttonEl = document.getElementById("button");

function addPersonInfo(person) {
    count += 1;
    let singlePerson = document.createElement("li");
    singlePerson.classList.add("single-person-container");
    personIndiviual.appendChild(singlePerson);

    let serialNumber = document.createElement("p");
    serialNumber.textContent = count;
    serialNumber.classList.add("number");
    singlePerson.appendChild(serialNumber);

    let nameandLocationEl = document.createElement("div");
    singlePerson.appendChild(nameandLocationEl);

    let nameEl = document.createElement("p");
    nameandLocationEl.appendChild(nameEl);
    nameEl.textContent = "Name: " + JSON.stringify(person.name);
    nameEl.classList.add("name-of-person");

    let locationEl = document.createElement("p");
    nameandLocationEl.appendChild(locationEl);
    locationEl.textContent = "Location: " + person.location;
    locationEl.classList.add("locatioin-of-person");

    if (count === personsCount) {
        paragraphEl.textContent = "No more People";
        paragraphEl.classList.add("alert");
    } else {
        paragraphEl.textContent = "Currently " + count + " People showing";
        paragraphEl.classList.add("paragraph")
    }

}


for (let person of persons) {
    buttonEl.onclick = function() {
        addPersonInfo(person);

    }
}