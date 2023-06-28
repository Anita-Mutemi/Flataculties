// Function to fetch characters
function fetchCharacters() {
    fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(jsData => {
        for (charactersObj of jsData) {
          console.log(charactersObj.name);
  
          let button = document.createElement('button');
          button.textContent = "Reset";
          button.style.fontSize = 40;
          button.style.display = 'none';
          button.style.backgroundColor = "black";
          button.style.color = "white";
          button.style.width = "60px";
          button.style.height = "30px";
  
          function reset() {
            voteCount = 0;
            votesParagraph.textContent = 'Votes: ' + voteCount;
          }
  
          button.addEventListener('click', reset)
  
          let liTag = document.createElement('li');
          liTag.style.cursor = "pointer";
  
          liTag.addEventListener('click', hiddenContent)
  
          function hiddenContent() {
            imgTag.style.display = 'block';
            votesParagraph.style.display = 'block';
            button.style.display = 'inline-block';
          }
  
          let liData = document.createTextNode(charactersObj.name);
          let imgTag = document.createElement('img');
          imgTag.src = charactersObj.image;
          imgTag.width = 80;
          imgTag.height = 100;
          imgTag.style.display = "none";
  
          const imgTags = document.querySelectorAll('img');
          imgTags.forEach((imgTag) => {
            const votesParagraph = imgTag.nextElementSibling;
            let voteCount = 0;
  
            imgTag.addEventListener('click', () => {
              voteCount++;
              votesParagraph.textContent = `Votes: ${voteCount}`;
            });
          });
  
          let votesParagraph = document.createElement('p');
          votesParagraph.textContent = `Votes: ${charactersObj.votes}`;
          votesParagraph.style.display = "none"
  
          liTag.append(liData);
          liTag.append(imgTag);
          liTag.append(votesParagraph);
          liTag.append(button)
          animalDetail.append(liTag);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Function to show character details
  function showCharacter(character) {
    if (selectedCharacter) {
      selectedCharacter.remove();
    }
  
    let icon = document.createElement("li");
    icon.className = "icon";
    icon.innerHTML = `
      <div class="character-container" style="border: 3px solid white; text-align: center;  border-radius:10px ; width: 60%;  margin-left: 350px;
      background-blend-mode: darken; background-color: rgba(0, 0, 0, 0.781);">
        <img src="${character.image}" style="max-width: 100%;  margin-top: 40px" >
        <div id="details" style ="color: white" >
           <p>${character.name}</p> <br>
           <button class="vote-button">Vote</button>
           <p class="vote-count">${character.votes}</p> <p>votes</p>
        </div>
      </div>
    `;
  
    const voteButton = icon.querySelector(".vote-button");
    const voteCount = icon.querySelector(".vote-count");
  
    voteButton.addEventListener("click", () => {
      character.votes += 1;
      voteCount.textContent = character.votes;
    });
  
    document.querySelector("#main").appendChild(icon);
    selectedCharacter = icon;
  }
  
  // Function to show character name
  function showName(character) {
    let nameCard = document.createElement("div");
    nameCard.className = "nameCard";
    nameCard.innerHTML = `
      <div class="charname">
        <p>${character.name}</p>
      </div>
    `;
    nameCard.addEventListener("click", () => {
      showCharacter(character);
    });
  
    nameCard.style.border = "2px solid white";
    nameCard.style.borderRadius = "10px"
    nameCard.style.display = "inline-block";
    nameCard.style.justifyContent = "space-between"
    nameCard.style.marginRight = "10px";
    nameCard.style.padding = "5px";
    nameCard.style.color = "white"
    nameCard.style.backgroundColor = "blue"
    nameCard.style.textAlign = "center";
  
    document.querySelector("#cover").appendChild(nameCard);
  }
  
  // Function to fetch characters
  function getCharacters() {
    fetch("http://localhost:3000/characters")
      .then(res => res.json())
      .then(characters => characters.forEach(character => {
        showName(character);
      }));
  }
  
  // Function to initialize the app
  function initializer() {
    getCharacters();
  }
  
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
        animalDetails.innerHTML = `
          <h3>${animal.name}</h3>
          <img src="${animal.image}" alt="${animal.name}">
          <p>Votes: ${animal.votes}</p>
          <button onclick="addVote(${animal.id})">Add Vote</button>
        `
        animalDetails.appendChild(listItem);
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
  
  // Function to fetch characters
  function fetchCharacters() {
    fetch(z);
  }
  
  function Func() {
    fetch("./db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }
  
  const sample = require('./db.json');
  console.log(sample);
  
  // Call necessary functions to initialize the app
  fetchCharacters();
  initializer();
  