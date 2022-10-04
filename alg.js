let statement = 'The cost of living is paid in blood.'
let amount = statement.length
console.log(`lenght = ${amount}`)
let word = statement.split(' ')
const howManyWords = (word) =>{
    let wordCount = 0;
    for (const item in word){
        wordCount++
    }
    console.log(`word count = ${wordCount}`)
}
howManyWords(word)
const vowelFrequency = (statement) => {
    let frequency = ['a', 'e' , 'i', 'o', 'u']
    let vowelCount= 0
    for (const vowel of statement){
        if(frequency.includes(vowel)){
            vowelCount++
        }
    }
    console.log(`vowel count = ${vowelCount}`)
}
vowelFrequency(statement)