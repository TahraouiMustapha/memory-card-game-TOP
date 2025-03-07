
export default async function fetchData() {

    try{
        const myPromise = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9', {mode: 'cors'})
        const myResults = await myPromise.json(); 

        const pokemonNames = myResults.results.map((obj) => obj.name);
        const arrayOfImages = pokemonNames.map(async (name)=> { 
            try {
                const myPromise = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {mode: 'cors'});

                if(!myPromise.ok) throw new Error('no data found');
                
                const myFinalResult = await myPromise.json()
                return myFinalResult
            } catch(err) {
                throw new Error(err);
            }
        })

        return Promise.all(arrayOfImages);
        
    } catch(err){
        throw new Error('Error in fetching data:',err)
    }
}