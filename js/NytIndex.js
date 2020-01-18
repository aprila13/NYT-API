//Init API KEY
let indexKey = configIndex.Index_Key;

fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + configIndex.Index_Key)
.then(response => response.json())
.then(data => {
  console.log(data.results)

    //Main articles
    //Article 1
     let title = document.getElementById('title');
     title.innerHTML = data.results[0].title;
     let image = document.querySelector('.img');
     image.src = data.results[0].media[0]["media-metadata"][2].url;
     let byline = document.getElementById('byline');
     byline.innerHTML = data.results[0].byline;
     let url = document.querySelector('.url');
     url.href = data.results[0].url;
     let tag = document.getElementById('tag');
     tag.innerHTML = data.results[0].section;


     //Article 2
     let title2 = document.getElementById('title2');
     title2.innerHTML = data.results[1].title;
     let image2 = document.querySelector('.img2');
     image2.src = data.results[1].media[0]["media-metadata"][2].url;
     let byline2 = document.getElementById('byline2');
     byline2.innerHTML = data.results[1].byline;
     let url2 = document.querySelector('.url2');
     url2.href = data.results[1].url;
     let tag2 = document.getElementById('tag2');
     tag2.innerHTML = data.results[1].section;

    
     //Article 3
     let title3 = document.getElementById('title3');
     title3.innerHTML = data.results[3].title;
     let image3 = document.querySelector('.img3')
     image3.src = data.results[3].media[0]["media-metadata"][2].url;
     let byline3 = document.getElementById('byline3');
     byline3.innerHTML = data.results[3].byline;
     let url3 = document.querySelector('.url3');
     url3.href = data.results[3].url;
     let tag3 = document.getElementById('tag3');
     tag3.innerHTML = data.results[3].section;
  
  })

