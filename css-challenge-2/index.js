const cardsList = [
  {
    number: 01
  },
  {
    number: 02
  },
  {
    number: 03
  },
  {
    number: 04
  },
  {
    number: 05
  },
  {
    number: 06
  },
  {
    number: 07
  },
  {
    number: 08
  },
  {
    number: 09
  },
  {
    number: 10
  }
]

window.onload = function () {
  const centralZonesList = cardsList.map(() => `
    <div class="zone">
      <div class="card-space"></div>
    </div>
  `)

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