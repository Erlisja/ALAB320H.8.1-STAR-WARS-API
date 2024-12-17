const baseURL = 'https://swapi.py4e.com/api/';

export async function getStarships() {
    try{
        const response = await fetch (`${baseURL}/starships/`);
        const data = await response.json()
        return data.results

    }catch (err){
        console.log(err);
        return []
    }
}
