//Fetch API

fetch('https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=fHwWNJ9R6W3VwSJKwo1eydixTG202GAm')
.then(response => response.json())
.then(data => {
  console.log(data.results) 



 //Article 1
     let titleBus = document.getElementById('titleBus');
     titleBus.innerHTML = data.results[0].title;
     let bylineBus = document.getElementById('bylineBus');bylineBus.innerHTML = data.results[0].byline;
     imgBus = document.querySelector('#imgBus');
     imgBus.src = data.results[0].multimedia[2].url;
     urlBus = document.querySelector('.urlBus');
     urlBus.href = data.results[0].url;


//Article 2
     let titleBus2 = document.getElementById('titleBus2');
     titleBus2.innerHTML = data.results[1].title;
     let bylineBus2 = document.getElementById('bylineBus2');
     bylineBus2.innerHTML = data.results[1].byline;
     let imgBus2 = document.querySelector('#imgBus2')
     imgBus2.src = data.results[1].multimedia[2].url;
     let urlBus2 = document.querySelector('.urlBus2');
     urlBus2.href = data.results[1].url;

//Article 3
     let titleBus3 = document.getElementById('titleBus3');
     titleBus3.innerHTML = data.results[2].title;
     let bylineBus3 = document.getElementById('bylineBus3');
     bylineBus3.innerHTML = data.results[2].byline;
     let imgBus3 = document.querySelector('#imgBus3')
     imgBus3.src = data.results[2].multimedia[2].url;
     let urlBus3 = document.querySelector('.urlBus3');
     urlBus3.href = data.results[2].url;


//Article 4
     let titleBus4 = document.getElementById('titleBus4');
     titleBus4.innerHTML = data.results[3].title;
     let bylineBus4 = document.getElementById('bylineBus4');
     bylineBus4.innerHTML = data.results[3].byline;
     let imgBus4 = document.querySelector('#imgBus4')
     imgBus4.src = data.results[3].multimedia[2].url;
     let urlBus4 = document.querySelector('.urlBus4');
     urlBus4.href = data.results[3].url;

//Article 5
     let titleBus5 = document.getElementById('titleBus5');
     titleBus5.innerHTML = data.results[4].title;
     let bylineBus5 = document.getElementById('bylineBus5');
     bylineBus5.innerHTML = data.results[4].byline;
     let imgBus5 = document.querySelector('#imgBus5')
     imgBus5.src = data.results[4].multimedia[2].url;
     let urlBus5 = document.querySelector('.urlBus5');
     urlBus5.href = data.results[4].url;

//      //Article 6
     let titleBus6 = document.getElementById('titleBus6');
     titleBus6.innerHTML = data.results[5].title;
     let bylineBus6 = document.getElementById('bylineBus6');
     bylineBus6.innerHTML = data.results[5].byline;
     let imgBus6 = document.querySelector('#imgBus6');
     imgBus6.src = data.results[5].multimedia[2].url;
     let urlBus6 = document.querySelector('.urlBus6');
     urlBus6.href = data.results[5].url;

})
.catch(error => console.error(error))


 


