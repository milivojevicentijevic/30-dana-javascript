
/// konfigurisanje
// const config = {
//     front: 'Sloba',
//     back: 'Danilo'
// }

/// funkcionalnost
// function fullStackKurs(tehnologija, ime) {
//     if (tehnologija == 'front' || tehnologija == 'back') {
//         console.log(`${config[tehnologija]} ${ime}`);
//     } else {
//         console.log('Nije unesen predavac');
//     }
// }


import fullStackKurs from "./fullStackKurs.js";
/// egzekucija
fullStackKurs('front', 'je sa vama uz front end');
fullStackKurs('back', 'je sa vama uz back end');