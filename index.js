
let sentence = `short sentence delivers a powerful message with concise and effective language.
 short sentence is a shanghai-based womenswear brand founded in 2015.
  the brand pays homage to modern women through a collection of comfortable and timeless essentials.
   commonplace and banal elements in everyday life inspire short sentence to design understated yet
    evocative pieces  and pursue life-affirming fashion.`

let charactereCounter = 0 ;
let wordcounter = 0 


for(let i = 0 ; i < sentence.length ; i++){
    
    if( sentence[i] != " " ){
        charactereCounter++
    }
}
console.log(charactereCounter)

for(let i = 0; i < sentence.length; i++){

    if( sentence[i] == " "){
        wordcounter++
    }

}
console.log(wordcounter)

