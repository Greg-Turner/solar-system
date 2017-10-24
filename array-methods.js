const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planetEl.innerHTML += `
<ul>PLANETS:
`

planets.forEach(function(rock) {
   planetEl.innerHTML += `
    <li>${rock}</li>
   `
})

planetEl.innerHTML += `
</ul>
`

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalizedPlanets = planets.map(function(editedPlanets){

    // make a new array of the letters in the planet word
    let spelledPlanet = editedPlanets.split("");

    // slice out the first character in the array of letters
    let firstCharacter = spelledPlanet.slice(0,1);

    // convert the single character array into a string variable
    let firstLetter = firstCharacter[0];

    // slice out the characters following the first character in the array of letters
    let remainingLetters = spelledPlanet.slice(1);

    // convert the letter to uppercase
    let newFirstLetter = firstLetter.toUpperCase();

    // convert the string into a new array of a single character
    let newFirstLetterArray = [newFirstLetter];

    // merge the two arrays then create a single string of the new planet name
    let newSpelledPlanet = newFirstLetterArray.concat(remainingLetters);

    // join the array into a single string of the new planet name
    let newPlanetString = newSpelledPlanet.join("");

    return newPlanetString;

})

planetEl.innerHTML += `
    <ul>CAPITALIZED PLANETS:
`

capitalizedPlanets.forEach(function(rock) {
   planetEl.innerHTML += `
    <li>${rock}</li>
   `
})

planetEl.innerHTML += `
    </ul>
`

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let ePlanets = planets.filter(function(containsE){

    // checks the string for an e
    return containsE.includes('e');
})


planetEl.innerHTML += `
<ul>PLANETS CONTAINING THE LETTER E:
`

ePlanets.forEach(function(rock) {
planetEl.innerHTML += `
<li>${rock}</li>
`
})

planetEl.innerHTML += `
</ul>
`

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let sentence = words.reduce(function(verbia,next){
    return verbia + " " + next;
});

sentence += ".";

planetEl.innerHTML += `
<ul>SENTENCE CONTRUCTED OF REDUCED ARRAY:
<li>${sentence}</li>
</ul>
`