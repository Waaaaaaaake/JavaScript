let mainSlider = {
    imagesUrls: [],
    currentIndex: 0,
    btnPrevObj: document.getElementById('btn_prev'),
    btnNextObj: document.getElementById('btn_next'),
    imageObj: document.getElementById('image-id'),
    init: function() {

        // эта переменная создаёт пример замыкания
        let that = this;

        // создаём изображения 
        this.imagesUrls.push('https://lh3.googleusercontent.com/proxy/8qY5VVLTDdH1-tTI7OmLPPLkbwiMAHUfV2uU0y9j-N9rHa0SW-363QGAMjdG61hU6d5Lw4JkeeyirTH-AV4tvnHkJcG7hMH2vvNuMhztxJpk2bUvchA5-Fwyert7XJcrqUdbMA');
        this.imagesUrls.push('https://i.pinimg.com/474x/50/6b/e8/506be842bed564b53c5c674f4d45f709.jpg');
        this.imagesUrls.push('https://img1.od-cdn.com/ImageType-400/0887-1/006/C57/64/%7B006C5764-9103-4F66-A650-0FE4C080DC9F%7DImg400.jpg');
        this.imagesUrls.push('https://di-uploads-pod17.dealerinspire.com/lylepearsonacura/uploads/2018/10/New.jpg');
        

        this.btnPrevObj.addEventListener('click', function(event) {
            that.showPrevBtnClick(event);
        });
        this.btnNextObj.addEventListener('click', function(event) {
            that.showNextBtnClick(event);
        });
        this.imageObj.src = this.imagesUrls[this.currentIndex];
        this.btnPrevObj.disabled = true;
    },
    showPrevBtnClick: function(event) {
        this.btnNextObj.disabled = false;
        this.currentIndex--;
        this.imageObj.src = this.imagesUrls[this.currentIndex];
        if (this.currentIndex === 0) {
            this.btnPrevObj.disabled = true;
        }
    }, 
    showNextBtnClick: function(event) {
        this.btnPrevObj.disabled = false;
        this.currentIndex++;
        this.imageObj.src = this.imagesUrls[this.currentIndex];
        if (this.currentIndex === (this.imagesUrls.length - 1)) {
            this.btnNextObj.disabled = true;
        }
    }  
};
