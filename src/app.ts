/*
File: app.ts
Author: Sallai András
Copyright: 2025, Sallai András
Group: szit
Date: 2025-01-11
Github: https://github.com/oktat/
Licenc: MIT
*/

import { calculateVolume } from './rectangle'

const doc = {
  asideInput: document.querySelector('#aside') as HTMLInputElement,
  bsideInput: document.querySelector('#bside') as HTMLInputElement,
  csideInput: document.querySelector('#cside') as HTMLInputElement,
  calculateButton: document.querySelector('#calculateButton') as HTMLButtonElement,
  volumeInput: document.querySelector('#volume') as HTMLInputElement
}

doc.calculateButton.addEventListener('click', () => {
  const aside = Number(doc.asideInput.value)
  const bside = Number(doc.bsideInput.value)
  const cside = Number(doc.csideInput.value)
  const s = (aside + bside + cside) / 2
  const volume = calculateVolume(aside, bside, cside)
  doc.volumeInput.value = String(volume)
})
