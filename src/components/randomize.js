
let ignoreObj = {
    value: false,
    reassign: function() {
        this.value =  !!(Math.floor(Math.random() * 10) % 2);
    }
} 

export default function randomize(array) {
    let newArray = [], ignoredArray = [];

    array.forEach(element => {
        if(!ignoreObj.value) {
            newArray.push(element)
        } else {
            ignoredArray.push(element);
        }
        ignoreObj.reassign()
    });

    ignoredArray.forEach( element => newArray.push(element))

    return newArray
}

