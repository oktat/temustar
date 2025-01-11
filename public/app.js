(() => {
  // src/rectangle.ts
  function calculateVolume(aside, bside, cside) {
    return aside * bside * cside;
  }

  // src/app.ts
  var doc = {
    asideInput: document.querySelector("#aside"),
    bsideInput: document.querySelector("#bside"),
    csideInput: document.querySelector("#cside"),
    calculateButton: document.querySelector("#calculateButton"),
    volumeInput: document.querySelector("#volume")
  };
  doc.calculateButton.addEventListener("click", () => {
    const aside = Number(doc.asideInput.value);
    const bside = Number(doc.bsideInput.value);
    const cside = Number(doc.csideInput.value);
    const s = (aside + bside + cside) / 2;
    const volume = calculateVolume(aside, bside, cside);
    doc.volumeInput.value = String(volume);
  });
})();
