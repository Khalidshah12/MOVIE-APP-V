

var imagesArray = [
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/04/movies-like-jack-reacher.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    "https://www.rajdhanidelhi.com/media/posts/box-office-pushpa-hindi-is-the-bonus-hit-of-2021-001.jpg",
    "https://i0.wp.com/3.bp.blogspot.com/-SeYr4QJOtwk/Tb7VN1XQqbI/AAAAAAAACZc/-f9SzspU6qg/s1600/veera-wallpapers-posters-raviteja-kajal-tapsee-wallpapers-002.jpeg",
    "https://static.toiimg.com/photo/msid-86293975/86293975.jpg?48564",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/f9.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2016/04/18/24-Movie-Stills-8.jpg?fit=1400%2C700&quality=80&zoom=1&ssl=1",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/extraction-2.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    "https://i0.wp.com/liftoff.network/wp-content/uploads/2018/06/Star-Wars-Adaptation.jpg?fit=1500%2C700&ssl=1",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255911859%2F73959077741%2F1%2Foriginal.20220328-182724?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C375%2C1500%2C750&s=e8fa4e0c0ae3383699434c11653090a8",
]

// Slide Show Start
let i = 0;
var id;
const slideshow = document.querySelector('#slideshow');
id = setInterval(function () {

    if (i == imagesArray.length) {
        i = 0
    }
    else {
        slideshow.innerHTML = ""
        let image = imagesArray[i]
        console.log(i)
        const img = document.createElement('img');
        img.setAttribute("class", "slideShowImages")
        img.src = image
        slideshow.append(img)
        i++
    }

}, 2500)
// Slide Show End



// Movies list Start

// function Obj(name,release_date,poster_url,IMDb_rating){
// this.name = name
// this.release_date = release_date
// this.poster_url = poster_url
// this.IMDb_rating = IMDb_rating
// }


let arrayItems = [
    {
        name: "KGF II",
        release_date: "02-October-2020",
        poster_url: "https://bd-career.org/wp-content/uploads/2022/05/KGF-Chapter-2-movie-download-Hindi-dubbed-250x250.jpg",
        rating: 8.9,
    },

    {
        name: "Panga",
        release_date: "24-January-2022",
        poster_url: "https://www.zoomnews.in/uploads_2019/movies/panga_1741391024_sm.jpg",
        rating: 3.2,
    },

    {
        name: "Yuva",
        release_date: "06-December-2022",
        poster_url: "https://raaga.gumlet.io/raagaimg/r_img/250/h/h004964.jpg?w=240&dpr=2.6",
        rating: 4,
    },
    {
        name: "Roohi",
        release_date: "11-March-2022",
        poster_url: "https://cdn.bollywoodmdb.com/movies/largethumb/250x267/2020/rooh-afza/poster.jpg",
        rating: 2.4,
    },
    {
        name: "RRR",
        release_date: "23-January-2023",
        poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYIt-w2CQYdbnnyc5jo5itHqM-8-0g-ttVw&usqp=CAU",
        rating: 7,
    },
    {
        name: "DILWALE",
        release_date: "09-Feb-2022",
        poster_url: "https://i0.wp.com/www.chordzone.org/wp-content/uploads/2020/01/250x250bb-167.jpg?fit=250%2C250&ssl=1",
        rating: 8.5,
    },
    {
        name: "2.0",
        release_date: "15-November-2022",
        poster_url: "https://2.bp.blogspot.com/-BMveBvS5c9Q/XAEVuD5uLkI/AAAAAAAALgY/dXSm3NNjKTUMKZsLZWRMpkIP46Jle5fygCLcBGAs/s250-c/2.0-2018-Pre-DVDRip-700Mb-Full-Hindi-Movie-Download-720p.jpg",
        rating: 9.5,
    },
    {
        name: "Happy New Year",
        release_date: "24-December-2022",
        poster_url: "https://i.pinimg.com/474x/a4/b2/3b/a4b23bac00a5edec3ab9d1231c7bf7fd.jpg",
        rating: 6.8,
    },
    {
        name: "CHHALAANG",
        release_date: "12-July-2022",
        poster_url: "https://thewallpost.co/wp-content/uploads/2020/10/Chhalaang-new-movie-trailer-released-Rajkumar-Rao-will-inspire-students-The-Wall-Post-250x250.jpg",
        rating: 2.7,
    },
];


localStorage.setItem("movies", JSON.stringify(arrayItems))

display(arrayItems)

function display(data)
{
    document.querySelector('#movies').innerHTML = ""
    data.forEach(function (elem) {
        let movies = document.querySelector('#movies');
    
        const box = document.createElement('div');
        box.setAttribute("class", "box")
    
        const image = document.createElement('img');
        image.src = elem.poster_url;
    
        const name = document.createElement('h3');
        name.innerText = elem.name;
    
        const release_date = document.createElement('p');
        release_date.innerText = "Release Date: "
    
        const dateSpan = document.createElement('span');
        dateSpan.setAttribute("class", "dateSpan")
        dateSpan.innerText = elem.release_date
    
        release_date.append(dateSpan)
    
        const rating = document.createElement('p');
        rating.innerText = "IMDb Rating: "
    
        const ratingSpan = document.createElement('span');
        ratingSpan.setAttribute("class", "ratingSpan")
        ratingSpan.innerText = elem.rating + " / 10";
    
        rating.append(ratingSpan)
    
        box.append(image, name, release_date, rating)
        movies.append(box)
    })
}


// movie list end


// Sorting Buttons

let lh = document.querySelector("#sort-lh")
lh.addEventListener("click", lowtohighFunc)

function lowtohighFunc() {

    arrayItems.sort(function (a, b) {
        return b.rating - a.rating
    })
    display(arrayItems)
}

let hl = document.querySelector("#sort-hl")
hl.addEventListener("click", hightolowFunc)

function hightolowFunc(){
    arrayItems.sort(function (a, b) {
        return a.rating - b.rating
    })
    display(arrayItems)
}