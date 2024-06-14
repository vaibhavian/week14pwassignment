function wordCounter(sentence) {

    const words = sentence.split(" ");

   
    const wordMap = new Map();


    words.forEach(word => {
       
        const cleanedWord = word.toLowerCase().replace(/[.,]/g, '');

       
        if (wordMap.has(cleanedWord)) {
            wordMap.set(cleanedWord, wordMap.get(cleanedWord) + 1);
        } else {
            wordMap.set(cleanedWord, 1);
        }
    });

    return wordMap;
}


const sentence = "please submit your assignment on time, your assignments are important";
const result = wordCounter(sentence);

console.log(result);
