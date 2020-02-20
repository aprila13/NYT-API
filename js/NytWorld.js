//Fetch API
fetch('https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vO1lz2Z8d0Xi1aCI9BX7viYwTwxvkAr2')
.then(response => response.json())
.then(data => {
  console.log(data.results) 
  
    //Article 1
     let titlePol = document.getElementById('titlePol');
     titlePol.innerHTML = data.results[0].title;
     let abstractPol = document.getElementById('abstractPol');abstractPol.innerHTML = data.results[0].abstract;
     let bylinePol = document.getElementById('bylinePol');bylinePol.innerHTML = data.results[0].byline;
     let imgPol = document.querySelector('#imgPol');
     imgPol.src = data.results[0].multimedia[2].url;
     let urlPol = document.querySelector('.urlPol');
     urlPol.href = data.results[0].url;
   
     //Article 2
     let titlePol2 = document.getElementById('titlePol2');titlePol2.innerHTML = data.results[2].title;
     let abstractPol2 = document.getElementById('abstractPol2');abstractPol2.innerHTML = data.results[2].abstract;
     let bylinePol2 = document.getElementById('bylinePol2');bylinePol2.innerHTML = data.results[2].byline;
     let imgPol2 = document.querySelector('#imgPol2');
     imgPol2.src = data.results[2].multimedia[2].url;
     let urlPol2 = document.querySelector('.urlPol2');
     urlPol2.href = data.results[2].url;
  })
