window.onload = function () {
  const fieldSections = `
    <div class="side-section two-columns-section">
      <div class="zone bottom-zone"></div>
      <div class="zone central-zone"></div>
      <div class="zone top-zone"></div>
      <div class="zone deck-zone"></div>
    </div>

    <div class="central-section">
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
    </div>

    <div class="side-section one-column-section">
      <div class="zone"></div>
      <div class="zone"></div>
      <div class="zone"></div>
    </div>
  `
  const topField = document.querySelector('.top-field');
  topField.insertAdjacentHTML('beforeend', fieldSections);
  const bottomField = document.querySelector('.bottom-field');
  bottomField.insertAdjacentHTML('beforeend', fieldSections);
}