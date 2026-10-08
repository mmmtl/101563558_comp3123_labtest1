const arrayMix = ["PIZZA", 10, true, 25, false, "Wings"]
let newArray = []
function lowerCaseWords(array){
    for (let x of array){
        if (typeof x === "string"){
            newArray.push(x.toLowerCase())
        }
    }
    return new Promise((resolve, reject) => {
            if (newArray){
                resolve(newArray)
            }
            else{
                reject("No strings were found, new array not created.")
            }
        })
}

console.log(lowerCaseWords(arrayMix))

