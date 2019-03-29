const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://www.profnit.org.br/pt/sample-page/';

rp(url)
  .then(function(html){
    //success!
    const news = $('#category-posts-3-internal li > div > a', html);
    const newsLength = $('#category-posts-3-internal li > div > a', html).length;
    for (let i = 0; i < newsLength; i++) {
        console.log(news[i].children[0].data)
        // news.push($('#category-posts-3-internal li > div > a', html)[i].children);
    }
    // console.log(news)
  })
  .catch(function(err){
    //handle error
  });