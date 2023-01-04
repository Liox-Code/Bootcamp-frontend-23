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
    <div class="side-section two-columns-section">
      <div class="zone special-zone bottom-zone"><div class="special-space"></div></div>
      <div class="zone special-zone central-zone"><div class="special-space"></div></div>
      <div class="zone special-zone top-zone"><div class="special-space"></div></div>
      <div class="zone special-zone deck-zone"><div class="special-space"></div></div>
    </div>

    <div class="central-section">
      <div class="zones-container">
        ${centralZonesList.join('')}
      </div>
    </div>

    <div class="side-section one-column-section">
      <div class="zone special-zone"><div class="special-space"></div></div>
      <div class="zone special-zone"><div class="special-space"></div></div>
      <div class="zone special-zone"><div class="special-space"></div></div>
    </div>
  `
  const topField = document.querySelector('.top-field');
  topField.insertAdjacentHTML('beforeend', fieldSections);
  const bottomField = document.querySelector('.bottom-field');
  bottomField.insertAdjacentHTML('beforeend', fieldSections);
}

const navbarEvents = () => {
  var btnShowLifeBar = document.getElementById("btnLifeBar");
  var btnShowCardDescription = document.getElementById("btnCardsDescription");

  console.log(btnShowLifeBar)
  console.log(btnShowCardDescription)

  btnShowLifeBar.addEventListener("click",() => {
    var topLifeBar = document.getElementById("top_lb");
    var bottomLifeBar = document.getElementById("bottom_lb");

    if(topLifeBar.style.visibility === "hidden" && bottomLifeBar.style.visibility === "hidden") {
      topLifeBar.style.visibility = "visible";
      bottomLifeBar.style.visibility = "visible";
    } else {
      topLifeBar.style.visibility = "hidden";
      bottomLifeBar.style.visibility = "hidden";
    }
  });
  btnShowCardDescription.addEventListener("click",() => {
    var cardDesc = document.getElementById("cd-card-desc");

    if(cardDesc.style.visibility === "hidden") {
      cardDesc.style.visibility = "visible";
    } else {
      cardDesc.style.visibility = "hidden";
    }
  });
}

window.onload = function () {
  cardDescriptionComponent()
  lifePointsComponent()
  gameBoardRender()
  navbarEvents()
}