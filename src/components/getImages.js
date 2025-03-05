
export default async function getData() {

    try{
        const myPromise = await fetch('https://pokeapi.co/api/v2/ability/?limit=20', {mode: 'cors'})
        const myResults = await myPromise.json(); 
        return myResults.results;
    } catch(err){
        throw new Error('Error in fetching data:',err)
    }
    
}