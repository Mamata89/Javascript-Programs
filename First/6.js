var movie="parasite"

function remoMovie(){
    var movie = "joker"
    console.log(this.movie)     // undefined
}


console.log(this.movie)         // undefined
remoMovie()