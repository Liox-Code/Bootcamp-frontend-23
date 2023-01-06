const cardsData = [
  {
    title: 'Blue-Eyes White Dragon',
    numberStars: 17,
    imageSource: 'img/magicImage1.jpg',
    cardType: 'Dragon',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 2500,
      puntosDefensa: 2500,
    }
  },
  {
    title: 'Dark Magician',
    numberStars: 7,
    imageSource: 'img/magicImage2.jpg',
    cardType: 'Spellcaster / Normal',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 2500,
      puntosDefensa: 2100,
    }
  },
  {
    title: 'Skilled Red Magician',
    numberStars: 4,
    imageSource: 'img/magicImage3.jpg',
    cardType: 'Spellcaster / Effect',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 2400,
      puntosDefensa: 1800,
    }
  },
  {
    title: 'Blue-Eyes Abyss Dragon',
    numberStars: 8,
    imageSource: 'img/magicImage4.jpg',
    cardType: 'Dragon / Effect',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 2500,
      puntosDefensa: 2500,
    }
  },
  {
    title: 'Blue-Eyes White Dragon',
    numberStars: 8,
    imageSource: 'img/magicImage5.jpg',
    cardType: 'Dragon / Effect',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 3000,
      puntosDefensa: 2500,
    }
  },
  {
    title: 'Destiny HERO - Dark Angel',
    numberStars: 1,
    imageSource: 'img/magicImage6.jpg',
    cardType: 'Warrior / Effect',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 200,
      puntosDefensa: 800,
    }
  },
  {
    title: 'Red-Eyes Black Drago',
    numberStars: 7,
    imageSource: 'img/magicImage7.jpg',
    cardType: 'Dragon / Normal',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta beatae eveniet, voluptas consequuntur provident sit aut repudiandae repellendus laboriosam.',
    statusData: {
      puntosAtaque: 2400,
      puntosDefensa: 2000,
    }
  }
]

const cardComponent = (cardData) => {
  let stars = ''
  for (let i = 0; i < cardData.numberStars; i++) {
    stars += `<div class="star"></div>`
  }

  const {
    title,
    numberStars,
    imageSource,
    cardType,
    description,
    statusData,
  } = cardData
  const card = `
    <div class="card-container">
      <div class="card">

        <div class="header">
          <h2>${title}</h2>
          <div class="symbol"></div>
        </div>

        <div class="graphic-info">
          <div class="stars">
            ${stars}
          </div>
          <img src="${imageSource}" alt="">
        </div>

        <div class="info">
          <h3>${cardType}</h3>
          <p>${description}</p>
          <div class="info-status-data">
            <span>ATK / ${statusData.puntosAtaque}</span>
            <span>DEF / ${statusData.puntosDefensa}</span>
          </div>
        </div>

        <div class="copyright">
          <span>46986414</span>
          <span>@2014 KAZUKE TAKAHASHI</span>
        </div>

      </div>
    </div>
  `

  return card
}

const lifePointsComponent = () => {
  const lifePoints = `
    <div class="duelist-name">
      <span>Name</span>
    </div>
    <div class="life-points">
      <span>LP</span>
      <span>8000</span>
    </div>
    <div class="duelist-picture">
      <img src="./img/magicImage1.jpg" alt="">
    </div>
  `
  const topLifeBar = document.querySelector('.top_life-bar');
  topLifeBar.insertAdjacentHTML('beforeend', lifePoints);
  const bottomLifeBar = document.querySelector('.bottom_life-bar');
  bottomLifeBar.insertAdjacentHTML('beforeend', lifePoints);
}

const cardDescriptionComponent = () => {
  const {
    title,
    numberStars,
    imageSource,
    cardType,
    description,
    statusData,
  } = cardsData[0]

  const card = cardComponent(cardsData[0])

  const cardDescription = `
    <div class="card-description_zone">
      ${card}
    </div>
    <span class="card-description_title">${title}</span>
    <span class="card-description_description">${description}</span>
  `
  const cardDesc = document.querySelector('.card-desc');
  cardDesc.insertAdjacentHTML('beforeend', cardDescription);
}

const gameBoardRender = () => {
  const centralZonesList = [];

  for (let i = 0; i < 10; i++) {
    const cardData = cardsData[(i % cardsData.length)]
    centralZonesList.push(`
      <div class="zone">
        ${cardComponent(cardData)}
      </div>
    `);
  }

  const fieldSections = `
    <div class="side-section two-columns-section" id="twoColumnSide">
      <div class="zone special-zone bottom-zone"><div class="special-space"></div></div>
      <div class="zone special-zone central-zone"><div class="special-space"></div></div>
      <div class="zone special-zone top-zone"><div class="special-space"></div></div>
      <div class="zone special-zone deck-zone"><div class="special-space"></div></div>
    </div>

    <div class="central-section">
      <div class='btnContainer'>
        <button id='btnLeftSide'>Show / Hidden</button>
        <button id='btnRightSide'>Show / Hidden</button>
      </div>
      <div class="zones-container">
        ${centralZonesList.join('')}
      </div>
    </div>

    <div class="side-section one-column-section" id="oneColumnSide">
      <div class="zone special-zone"><div class="special-space"></div></div>
      <div class="zone special-zone"><div class="special-space"></div></div>
      <div class="zone special-zone"><div class="special-space"></div></div>
    </div>
  `
  const topField = document.getElementById('top-field');
  topField.insertAdjacentHTML('beforeend', fieldSections);
  const bottomField = document.getElementById('bottom-field');
  bottomField.insertAdjacentHTML('beforeend', fieldSections);
}

const navbarEvents = () => {
  var btnShowLifeBar = document.getElementById("btnLifeBar");
  var btnShowCardDescription = document.getElementById("btnCardsDescription");

  btnShowLifeBar.addEventListener("click", () => {
    var topLifeBar = document.getElementById("top_lb");
    var bottomLifeBar = document.getElementById("bottom_lb");

    toogleVisibility(topLifeBar)
    toogleVisibility(bottomLifeBar)
  });
  btnShowCardDescription.addEventListener("click", () => {
    var cardDesc = document.getElementById("cd-card-desc");

    toogleVisibility(cardDesc)
  });
}

const toggleSideSection = () => {
  var topField = document.getElementById("top-field");
  var bottomField = document.getElementById("bottom-field");

  var btnTopLeftSide = topField.querySelector("#btnLeftSide");
  var btnTopRightSide = topField.querySelector("#btnRightSide");
  var btnBottomLeftSide = bottomField.querySelector("#btnLeftSide");
  var btnBottomRightSide = bottomField.querySelector("#btnRightSide");

  var topTwoColumnSide = topField.querySelector("#twoColumnSide");
  var topOneColumnSide = topField.querySelector("#oneColumnSide");
  var bottomTwoColumnSide = bottomField.querySelector("#twoColumnSide");
  var bottomOneColumnSide = bottomField.querySelector("#oneColumnSide");

  btnTopLeftSide.addEventListener("click", () => {
    toogleDisplay(topTwoColumnSide)
    updateFieldGridFragmentation(topOneColumnSide, topTwoColumnSide, topField)
  });

  btnTopRightSide.addEventListener("click", () => {
    toogleDisplay(topOneColumnSide)
    updateFieldGridFragmentation(topOneColumnSide, topTwoColumnSide, topField)
  });

  btnBottomLeftSide.addEventListener("click", () => {
    toogleDisplay(bottomOneColumnSide)
    updateFieldGridFragmentation(bottomTwoColumnSide, bottomOneColumnSide, bottomField)
  });

  btnBottomRightSide.addEventListener("click", () => {
    toogleDisplay(bottomTwoColumnSide)
    updateFieldGridFragmentation(bottomTwoColumnSide, bottomOneColumnSide, bottomField)
  });
}

const updateFieldGridFragmentation = (rightSide, leftSide, gridContainer) => {
  if (rightSide.style.display === "inherit" && leftSide.style.display === "inherit") {
    gridContainer.style.gridTemplateColumns = '2fr 5fr 2fr';
  } else if (rightSide.style.display === "inherit") {
    gridContainer.style.gridTemplateColumns = 'min-content 5fr 2fr';
  } else if (leftSide.style.display === "inherit") {
    gridContainer.style.gridTemplateColumns = '2fr 5fr min-content';
  } else {
    gridContainer.style.gridTemplateColumns = 'min-content 5fr min-content';
  }
}

const toogleDisplay = (htmlElement) => {
  if (htmlElement.style.display === "inherit") {
    htmlElement.style.display = "none";
    htmlElement.style.display = null;
  } else {
    htmlElement.style.display = "inherit";
  }
}

const toogleVisibility = (htmlElement) => {
  if (htmlElement.style.visibility === "visible") {
    htmlElement.style.visibility = "hidden";
  } else {
    htmlElement.style.visibility = "visible";
  }
}

function isSmarthPhoneSize(windowWidth) {
  var topField = document.getElementById("top-field");
  var bottomField = document.getElementById("bottom-field");
  console.log('LOL')
  if (windowWidth.matches) {
    topField.style = null;
    bottomField.style = null;
  }
}

function isPersonalComputerSize(windowWidth) {
  var topField = document.getElementById("top-field");
  var bottomField = document.getElementById("bottom-field");

  var topTwoColumnSide = topField.querySelector("#twoColumnSide");
  var topOneColumnSide = topField.querySelector("#oneColumnSide");
  var bottomTwoColumnSide = bottomField.querySelector("#twoColumnSide");
  var bottomOneColumnSide = bottomField.querySelector("#oneColumnSide");
  if (windowWidth.matches) {
    updateFieldGridFragmentation(topOneColumnSide, topTwoColumnSide, topField)
    updateFieldGridFragmentation(bottomTwoColumnSide, bottomOneColumnSide, bottomField)
  }
}

window.onload = function () {
  cardDescriptionComponent()
  lifePointsComponent()
  gameBoardRender()
  navbarEvents()
  toggleSideSection()
  var smarthPhoneSize = window.matchMedia("(min-width: 600px)")
  smarthPhoneSize.addEventListener('change', isSmarthPhoneSize);
  var personalComputerSize = window.matchMedia("(max-width: 600px)")
  personalComputerSize.addEventListener('change', isPersonalComputerSize);
}