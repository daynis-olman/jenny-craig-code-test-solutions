/*

We would like you to write code here in a convention that is comfortable to you in order to transform banner.jpg into
a slideshow that would play on the loop.

Please write your code here to loop below 3 images


IMAGE 1

https://www.jennycraig.com.au/sites/default/files/q-Home-B-Hero-Slide3-Desktop-2500x732.jpg

IMAGE 2

https://www.jennycraig.com.au/sites/default/files/Home-B-Hero-Dietitians--Desktop--2500-x-733%402x.jpg

IMAGE 3

https://www.jennycraig.com.au/sites/default/files/Home-B-Hero-Mel-B--Desktop--2500-x-733%402x.jpg


*/
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
