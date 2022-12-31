const cardsData = [
  {
    title: 'Blue-Eyes White Dragon',
    numberStars: 3,
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
  let card = `
    <div class="card-container">
      <div class="card">

        <div class="header">
          <div class="title">
            <h2>${title}</h2>
          </div>
          <div class="symbol"></div>
        </div>

        <div class="graphic-info">
          <div class="stars">
            ${stars}
          </div>
          <img src="${imageSource}" alt="">
        </div>

        <div class="info">
          <div class="info-title">
            <h3>${cardType}</h3>
          </div>
          <div class="info-description">
            <p>${description}</p>
          </div>
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

  card = `
    <div class="card-container">
      <div class="card">

        <div class="header">
          <div class="title">
            <h2>${title}</h2>
          </div>
          <div class="symbol"></div>
        </div>
        
        <div class="info">
          <div class="info-title">
            <h3>${cardType}</h3>
          </div>
          <div class="info-description">
            <p>Angel LEonardo${description}</p>
          </div>
          <div class="info-status-data">
            <span>ATK / ${statusData.puntosAtaque}</span>
            <span>DEF / ${statusData.puntosDefensa}</span>
          </div>
        </div>

      </div>
    </div>
  `

  return card
}

const gameBoardRender = () => {
  const centralZonesList = [];

  for (let i = 0; i < 10; i++) {
    centralZonesList.push(`
      <div class="zone">
        ${cardComponent(cardsData[0])}
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

window.onload = function () {
  gameBoardRender()
}