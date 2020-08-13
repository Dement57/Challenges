// const { type } = require("cypress/types/jquery");

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// This is testing code for QA!
const strLog = 'Mabl bl mxlmbgz vhwx yhk JT!'
const arrLog = strLog.replace('!', '').split(' ');

//Define 
const offSet = arrLog.reduce(function(prev, current){
    // console.log(prev, current)
    if (prev.length >= current.length){
        return prev;
    } else if (prev.length <= current.length) {
        return current;
    }
}).length

console.log('Массив после разделения строки: ' + arrLog + ' типа: ' +     typeof arrLog)

const indexes = arrLog.map((elem1) => {
    const letters = elem1.split('');
    console.log('После разделения слов:' + letters)
    const indexVar =  letters.map((elem2)=> {
        // console.log(elem2, elem2.toUpperCase())
        if(elem2 === elem2.toUpperCase()){
            console.log('Upper case ' + elem2)
            const indexUp = arr_EN.indexOf(elem2)
            return {index: indexUp, type: 'upper'}; 
        } else {
            console.log('Lower case ' + elem2)
            const indexLow = arr_en.indexOf(elem2)
            return indexLow;
        }
        
    })
    return indexVar;
})
console.log('BEFORE: ')
console.log(offSet, indexes)

// //ADD INDEXES

// const newIndexes = indexes.map((elem1) => {
//     const newInds = elem1.map((elem2) => {
//         if (elem2.type) {
//             const newIndUp = elem2.index - offSet;
//             if(newIndUp > 25){
//                 return {index: newIndUp + 26, type: 'upper'}
//             } else {
//                 return {index: newIndUp, type: 'upper'}; 
//             }
//         } else {
//             const newIndLow = elem2 - offSet;
//             if(newIndLow > 25){
//                 return newIndLow + 26
//             } else {
//                 return newIndLow;
//             }
            
//         }
        
//     })
//     return newInds;
// })

// // SUBTRACT INDEXES
const newIndexes = indexes.map((elem1) => {
    const newInds = elem1.map((elem2) => {
        if (elem2.type) {
            const newIndUp = elem2.index + offSet;
            if(newIndUp > 25){
                return {index: newIndUp - 26, type: 'upper'}
            } else {
                return {index: newIndUp, type: 'upper'}; 
            }
        } else {
            const newIndLow = elem2 + offSet;
            if(newIndLow > 25){
                return newIndLow - 26
            } else {
                return newIndLow;
            }
            
        }
        
    })
    return newInds;
})


console.log('AFTER: ')
console.log(newIndexes, typeof newIndexes)

const plusIndexes = newIndexes.map ((elem1) => {
    const plInd = elem1.map((elem2) => {
        if (elem2.type) {
            if (elem2.index < 0) {
                const plusIndUp1 = 26 + elem2.index;
                return {index: plusIndUp1, type: 'upper'};
            } else {
                const plusIndUp2 = elem2.index;
                return {index: plusIndUp2, type: 'upper'};;
            }
        } else {
            if (elem2 < 0) {
                const plusIndLow1 = 26 + elem2;
                return plusIndLow1;
            } else {
                const plusIndLow2 = elem2;
                return plusIndLow2;
            }
        }
    })
    return plInd;
})
console.log('PLUS INDEXES')
console.log(plusIndexes)

const newLetters = plusIndexes.map((elem1) => {
    const newLet = elem1.map((elem2) => {
        if (elem2.type){
            console.log('index : ' + elem2.index)
            const newLetUp = arr_EN[elem2.index]
            return newLetUp;
        } else {
            const newLetLow = arr_en[elem2]
            return newLetLow;
        }
    })
    return newLet;
})

const newWords = newLetters.map((elem1) => {
    newWord = elem1.toString().replace(/,/g, '')
    return newWord
})
const newPhrase = `${newWords.toString().replace(/,/g, ' ')}!`;

console.log('NEW LETTERS:')
console.log(newLetters)

console.log('NEW WORDS:')
console.log(newWords)

console.log('NEW PHRASE:')
console.log(newPhrase)
