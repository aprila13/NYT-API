//Init API KEY
let indexKey = configIndex.Index_Key;

fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + configIndex.Index_Key)
.then(response => response.json())
.then(data => {
  console.log(data.results)

    //Main articles
    //Article 1
     let title = document.getElementById('title');
     title.innerHTML = data.results[2].title;
     let image = document.querySelector('.img');
     image.src = data.results[2].media[0]["media-metadata"][2].url;
     let byline = document.getElementById('byline');
     byline.innerHTML = data.results[2].byline;
     let url = document.querySelector('.url');
     url.href = data.results[2].url;
    


     //Article 2
     let title2 = document.getElementById('title2');
     title2.innerHTML = data.results[12].title;
     let image2 = document.querySelector('.img2');
     image2.src = data.results[12].media[0]["media-metadata"][2].url;
     let byline2 = document.getElementById('byline2');
     byline2.innerHTML = data.results[12].byline;
     let url2 = document.querySelector('.url2');
     url2.href = data.results[12].url;

    
     //Article 3
     let title3 = document.getElementById('title3');
     title3.innerHTML = data.results[5].title;
     let image3 = document.querySelector('.img3')
     image3.src = data.results[5].media[0]["media-metadata"][2].url;
     let byline3 = document.getElementById('byline3');
     byline3.innerHTML = data.results[5].byline;
     let url3 = document.querySelector('.url3');
     url3.href = data.results[5].url;
   
  
     //Article 4
     let title4 = document.getElementById('title4');
     title4.innerHTML = data.results[6].title;
     let image4 = document.querySelector('.img4')
     image4.src = data.results[6].media[0]["media-metadata"][2].url;
     let byline4 = document.getElementById('byline4');
     byline4.innerHTML = data.results[6].byline;
     let url4 = document.querySelector('.url4');
     url4.href = data.results[6].url;

     //Article 5
     let title5 = document.getElementById('title5');
     title5.innerHTML = data.results[8].title;
     let image5 = document.querySelector('.img5')
     image5.src = data.results[8].media[0]["media-metadata"][2].url;
     let byline5 = document.getElementById('byline5');
     byline5.innerHTML = data.results[8].byline;
     let url5 = document.querySelector('.url5');
     url5.href = data.results[8].url;
  })

