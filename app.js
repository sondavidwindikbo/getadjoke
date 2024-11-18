
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button')


// const addJoke = async () => {
//     const jokeText = await getJokes();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }



// //membuat request ke dadjokes api
// const getJokes = async () => {
//     try{
//         const config = {
//             headers: {
//                 Accept: 'application/json',
//             },
//         }
//         const res = await axios.get('https://icanhazdadjokefgs.com', config);
//         return res.data.joke;
//     } catch (error) {
//         return 'No Jokes Available';
//     }
// } 

// button.addEventListener('click', addJoke);
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async() => {
    const jokeText = await getJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getJoke = async() => {
   try{
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
   } catch (error) {
        return 'No Jokes Avaible'
   }
}

button.addEventListener('click', addJoke);