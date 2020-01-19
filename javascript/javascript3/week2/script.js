/////// Movies exercise
const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

fetch(moviesUrl)
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
        
    // bad movies array
        const badMovies = movies.filter(movie => movie.rating < 4);
        console.log('bad movies', badMovies);
    
        const badMoviesSince2000 = movies.filter(movie => movie.year >= 2000);
        console.log('bad movies since 2000', badMoviesSince2000);
    
        const badMoviesSince2000ByTitle = movies.map(movie => movie.title);
        console.log('bad movies since 2000 by title', badMoviesSince2000ByTitle);
    }); 




//////// Fetching and waiting
const cockteilsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

fetch(cockteilsUrl)
    .then(response => response.json())
    .then(data => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 3000)
        })
    })
    .then(data => console.log('cocktails', data));



/////// Promise that resolves after set time
function myFunction(resolveAfter) {
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(console.log(`I am called asynchronously ${resolveAfter} seconds.`))
        }, resolveAfter * 1000)
    })
}
myFunction(3);
myFunction(6);





