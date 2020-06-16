//Fetch API

fetch('https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=fHwWNJ9R6W3VwSJKwo1eydixTG202GAm')
.then(response => response.json())
.then(data => {
  console.log(data.results)


 //Article 1
     let titleBus = document.getElementById('titleBus');
     titleBus.innerHTML = data.results[0].title;
     let bylineBus = document.getElementById('bylineBus');
     bylineBus.innerHTML = data.results[0].byline;
     urlBus = document.querySelector('.urlBus');
     urlBus.href = data.results[0].url;


//Article 2
     let titleBus2 = document.getElementById('titleBus2');
     titleBus2.innerHTML = data.results[1].title;
     let bylineBus2 = document.getElementById('bylineBus2');
     bylineBus2.innerHTML = data.results[1].byline;
     let urlBus2 = document.querySelector('.urlBus2');
     urlBus2.href = data.results[1].url;

//Article 3
     let titleBus3 = document.getElementById('titleBus3');
     titleBus3.innerHTML = data.results[4].title;
     let bylineBus3 = document.getElementById('bylineBus3');
     bylineBus3.innerHTML = data.results[4].byline;
     let urlBus3 = document.querySelector('.urlBus3');
     urlBus3.href = data.results[4].url;


//Article 4
     let titleBus4 = document.getElementById('titleBus4');
     titleBus4.innerHTML = data.results[5].title;
     let bylineBus4 = document.getElementById('bylineBus4');
     bylineBus4.innerHTML = data.results[5].byline;
     let urlBus4 = document.querySelector('.urlBus4');
     urlBus4.href = data.results[5].url;

//Article 5
     let titleBus5 = document.getElementById('titleBus5');
     titleBus5.innerHTML = data.results[6].title;
     let bylineBus5 = document.getElementById('bylineBus5');
     bylineBus5.innerHTML = data.results[6].byline;
     let urlBus5 = document.querySelector('.urlBus5');
     urlBus5.href = data.results[6].url;

//Article 6
     let titleBus6 = document.getElementById('titleBus6');
     titleBus6.innerHTML = data.results[7].title;
     let bylineBus6 = document.getElementById('bylineBus6');
     bylineBus6.innerHTML = data.results[7].byline;
     let urlBus6 = document.querySelector('.urlBus6');
     urlBus6.href = data.results[7].url;

})
.catch(error => console.error(error))
