// let btnPrevObj = document.getElementById('btn_prev');
// let btnNextObj = document.getElementById('btn_next');
// let imageObj = document.getElementById('image-id');
// let currentIndex = 0;

// // создаём изображения 
// let imagesUrls = [
//     'https://lh3.googleusercontent.com/proxy/8qY5VVLTDdH1-tTI7OmLPPLkbwiMAHUfV2uU0y9j-N9rHa0SW-363QGAMjdG61hU6d5Lw4JkeeyirTH-AV4tvnHkJcG7hMH2vvNuMhztxJpk2bUvchA5-Fwyert7XJcrqUdbMA',
//     'https://i.pinimg.com/474x/50/6b/e8/506be842bed564b53c5c674f4d45f709.jpg',
//     'https://img1.od-cdn.com/ImageType-400/0887-1/006/C57/64/%7B006C5764-9103-4F66-A650-0FE4C080DC9F%7DImg400.jpg',
//     'https://di-uploads-pod17.dealerinspire.com/lylepearsonacura/uploads/2018/10/New.jpg'   
// ]

// btnPrevObj.addEventListener('click', showPrevBtnClick);
// btnNextObj.addEventListener('click', showNextBtnClick);
// imageObj.src = imagesUrls[currentIndex];
// btnPrevObj.disabled = true;

// function showPrevBtnClick(event) {
//     btnNextObj.disabled = false;
//     currentIndex--;
//     imageObj.src = imagesUrls[currentIndex];
//     if (currentIndex === 0) {
//         btnPrevObj.disabled = true;
//     }
// }


// function showNextBtnClick(event) {
//     btnPrevObj.disabled = false;
//     currentIndex++;
//     imageObj.src = imagesUrls[currentIndex];
//     if (currentIndex === (imagesUrls.length - 1)) {
//         btnNextObj.disabled = true;
//     }
// }


mainSlider.init()