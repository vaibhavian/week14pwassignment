function uniqueCharactersCheck(username) {
 
    username = username.toLowerCase();

   
    const characters = username.split('');

s
    const uniqueCharacters = new Set(characters);


    if (uniqueCharacters.size === characters.length) {
        console.log("The input string contains unique characters.");
    } else {
        console.log("The input string contains duplicates.");
    }
}

uniqueCharactersCheck("Mithun"); // Output: The input string contains unique characters.
uniqueCharactersCheck("anurag"); // Output: The input string contains duplicates.
