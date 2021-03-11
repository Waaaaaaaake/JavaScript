function Slider() {
    this.imagesUrls = [];
    this.currentIndex = 0;
    this.btnPrevObj = null;
    this.btnNextObj = null;
    this.imageObj = null;

    this.start = function(el_name) {
    
        // эта переменная создаёт пример замыкания
        let that = this;

        let el = document.querySelector('#' + el_name);
        this.btnPrevObj = el.querySelector('.btn_prev');
        this.btnNextObj = el.querySelector('.btn_next');
        this.imageObj = el.querySelector('.image-id');

        // создаём изображения 
        this.imagesUrls.push('https://kia-aspec.ru/upload/iblock/0ea/0ea9fc0801bfd51b31411db7a87da1eb.jpg');
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
    };

    this.showPrevBtnClick = function(event) {
        this.btnNextObj.disabled = false;
        this.currentIndex--;
        this.imageObj.src = this.imagesUrls[this.currentIndex];
        if (this.currentIndex === 0) {
            this.btnPrevObj.disabled = true;
        }
    };

    this.showNextBtnClick = function(event) {
        this.btnPrevObj.disabled = false;
        this.currentIndex++;
        this.imageObj.src = this.imagesUrls[this.currentIndex];
        if (this.currentIndex === (this.imagesUrls.length - 1)) {
            this.btnNextObj.disabled = true;
        }
    };

}