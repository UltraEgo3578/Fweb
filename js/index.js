var banners = ["../img/destaquehome.png","../img/destaquehome2.png"]
var bannerAtual = 0;
function trocaBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner,4000);

const audiop = document.querySelector('#audioplayer');
const inputRange = document.querySelector('#input-range');
const buttonPlay = document.querySelector('#Play');

inputRange.addEventListener("input", () => { audiop.volume = inputRange.ariaValueMax;});

buttonPlay.addEventListener("click", () => {
    audiop.play();
});
