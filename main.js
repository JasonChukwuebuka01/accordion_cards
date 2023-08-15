window.onload = () => {
  let wrapper = document.querySelector("#wrapper");

  createDiv("✨");

  /* setInterval(callDiv,500)
      
   function callDiv() {
   
      for(let i=0; i < 3; i++){
    
        createDiv("✨");        
    };    
  };
 */

  let cardObject = {
    data: [
      {
        header:
          `Have you ever come across people who discourages tech Newbies?`.toUpperCase(),
        description: `it might seem true that tech can be over whelming and the tech industry at the moment is kind of over saturated. This may have caused so many Newbies who are still wavering in tech fall off real bad. That shouldn't be alarming. hey, despite the challenges and struggles youre still here, regardless of which tech stack youre into, you sure deserve to have your flowers cause its never an easy journey💐`,
      },

      {
        header:
          `Do not listen to over zealous Tech influencers online`.toUpperCase(),
        description: `Most of these Tech influencers know little or zero tech skills. They tend to promote tech literally. and most atimes in a misleading way. They pack loads of tech stack hereby making it look an impossible journey for Tech Newbies. They only way to survive tech is to keep the WILL power burning 🔥`,
      },

      {
        header: `What to do?`,
        description: `Always measure your Tech self growth with your previous state. you should only draw motivation from peoples code NOT doubt this is to avoid having impostor syndrome. And no matter how little youre in tech, even if its as little as centering a Div, give yourself some love pats on your shoulder and say its not easy ♥️`,
      },
    ],
  };

  /* CASE 1: LOGIC 
 
     creates card for each of cardObject.data.
 
 */

  for (let i of cardObject.data) {
    let cardArticle = document.createElement(`article`);

    cardArticle.className = `cardArticle`;

    let header = document.createElement(`header`);

    let headerP = document.createElement(`p`);

    headerP.innerHTML = i.header;

    let headerI = document.createElement(`i`);

    headerI.classList.add(`fa-plus`);

    let descriptionDiv = document.createElement(`div`);

    descriptionDiv.innerHTML = i.description;

    descriptionDiv.className = `description`;

    header.appendChild(headerP);

    header.appendChild(headerI);

    cardArticle.appendChild(header);

    cardArticle.appendChild(descriptionDiv);

    wrapper.appendChild(cardArticle);
  }

  /* CASE 2: LOGIC

  This loops through all article elements and assigns an event listener to the header.
  once, each article's header is toggled(click,unclick),each article will be assigned and unassigned "open" as a class name. 
     once "open " is found in the className list, display the description else hide it.
     
   since we want just the active/clicked Article to have the className "open", i inserted a function indexCheck() that will loop through the card yet again and compared its index number to the index number of active class. 
   
    If other wise the indexes doesnt match, remove the className "open" from all articles that dont match / articles not clicked.
    Reason for this would be not to allow the "open" to be found in an unclicked article. "open" should be found in the clicked/ active article/ div so that it wont distort the toggle operation and also the () changes "-" back to "+";    
 
 */

  let cards = document.querySelectorAll(`article`);

  cards.forEach((card, index) => {
    let header = card.querySelector(`header`);

    let i = card.querySelector(`i`);

    let description = card.querySelector(`.description`);

    header.addEventListener(`click`, () => {
      card.classList.toggle(`open`);

      if (card.classList.contains(`open`)) {
        i.classList.replace(`fa-plus`, `fa-shirt-runnin`);

        i.innerHTML = `-`;

        description.style.height = `${description.scrollHeight}px`;
      } else {
        i.classList.replace(`fa-shirt-runnin`, `fa-plus`);

        description.style.height = `0px`;

        i.innerHTML = ``;
      } // End of if/else;

      // inserted animation () call;
      if (index === 0) {
        createDiv("💐");
      } else if (index === 1) {
        createDiv("🔥");
      } else if (index === 2) {
        createDiv("♥️");
      } // End animation () call;

      indexCheck(index); // () that loops card again.
    }); // header event();
  }); // card forEach();

  // start Index Check;
  function indexCheck(index1) {
    cards.forEach((card2, index2) => {
      let description = card2.querySelector(`.description`);

      let i = card2.querySelector(`i`);

      if (index1 != index2) {
        card2.classList.remove(`open`);

        description.style.height = `0px`;

        i.innerHTML = ``;

        i.classList.replace(`fa-shirt-runnin`, `fa-plus`);
      } // if
    }); // forEach();
  } // indexCheck();

  //CASE 3: A () that creates and append's Div;

  function createDiv(item) {
    let div = document.createElement(`div`);

    div.className = `newDiv`;

    div.innerHTML = item;

    div.style.left = Math.round(Math.random() * window.innerWidth) + "px";

    document.querySelector(`body`).appendChild(div);

    setTimeout(() => {
      div.innerHTML = `💯`;
    }, 3000);
  }
}; // End of general()✅;
