// Fetch animal data from the server
function fetchAnimals() {
    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(data => displayAnimals(data))
        .catch(error => console.log(error));
    }

    // Display the list of animals
    function displayAnimals(animals) {
    const animalList = document.getElementById('animal-list');
    animalList.innerHTML = '';

    animals.forEach(animal => {
        const listItem = document.createElement('li');
        listItem.textContent = animal.name;
        listItem.style.listStyleType= 'none';
        listItem.style.fontSize= '2rem';
        listItem.addEventListener('click', () => displayAnimalDetails(animal.id));
        animalList.appendChild(listItem);
    });
    }

    // Display the details of a specific animal
    function displayAnimalDetails(animalId) {
    fetch(`http://localhost:3000/characters/${animalId}`)
        .then(response => response.json())
        .then(animal => {
        const animalDetails = document.getElementById('animal-details');
        animalDetails.style.fontSize= '2.5rem'
        animalDetails.innerHTML = `
            <h3>${animal.name}</h3>
            <img src="${animal.image}" alt="${animal.name}">
            <p>Votes: ${animal.votes}</p>
            <button onclick="addVote(${animal.id})">Add Vote</button>
        `;
        })
        .catch(error => console.log(error));
    }

    // Add a vote to an animal
    function addVote(animalId) {
    const animalDetails = document.getElementById('animal-details');
    const votesElement = animalDetails.querySelector('p');
    const currentVotes = parseInt(votesElement.textContent.split(': ')[1]);
    const newVotes = currentVotes + 1;
    votesElement.textContent = `Votes: ${newVotes}`;

    // Update the votes on the server (not persistent)
    fetch(`http://localhost:3000/characters/${animalId}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ votes: newVotes })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    }

    // Initialize the app
    function init() {
    fetchAnimals();
    }

    init();


// function to get characters
 function fetchCharacters(){
    fetch()
 }
    