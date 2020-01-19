const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

fetch(moviesUrl)
    .then(response => response.json())
    // bad movies array
    .then(movies => { 
        const badMovies = movies.filter(movie => movie.rating < 4);
        console.log(badMovies);
        return badMovies;
    })
    .then(movies => {
        const badMoviesSince2000 = movies.filter(movie => movie.year >= 2000);
        console.log(badMoviesSince2000);
    })

    .then(movies => {
        const badMoviesSince2000ByTitle = movies.map(movie => movie.title);
        console.log(badMoviesSince2000ByTitle);
    }) 


