
// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp

//         // Print buildMeUp to the console
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)

const sentence = ["A","wild","band","of","penguins","took","over","an","airplane","and","crashed","in","Madagascar"];
const newSentence =["Huge","hamsters","stole","a","bmw","and","took","a","joy","ride","to","alaska","where","they","died"]

// Function that allows for 2 parameters, an array of words (like a sentence) and an ending character, or another sentence or anything
const addExcitement = (theWordArray, endingCharacter) => {
    // build me up builds the sentence from the array of words passed in
    let buildMeUp = ''
    // for loops uses the length of the array to give it a stopping point
    for (let i = 0; i < theWordArray.length; i++) {
        // builds up a sentence out of array words and adds space with the empy " ""
        buildMeUp += ' ' + theWordArray[i];
        // if statement that adds an exclamation point every third counter, the repeat adds an ending character after every third exclamation point
        if(i % 3 === 0) {
            buildMeUp += endingCharacter.repeat(i/3);
        }        
        console.log(buildMeUp);
    }
}

addExcitement(sentence, "!");
addExcitement(newSentence, "&");