import './hh.scss'
import 'libs/swiper-141019040812/dist/idangerous.swiper.css'
import 'libs/dialog/style/dialog.css'
import 'styles/index.scss'

import 'utils/rem'
import Swiper from 'libs/swiper-141019040812/dist/idangerous.swiper'
import 'libs/dialog/javascript/zepto.min'
import 'libs/dialog/javascript/dialog'

console.log('index')
console.log('zz')
console.log('zz')

var mySwiper = new Swiper('.swiper-container',{
  wrapperClass: 'swiper-wrapper',
  pagination: '.pagination',
  loop:true,
  grabCursor: true,
  paginationClickable: true,
  autoplayDisableOnInteraction: false,
  autoplay: 3000
})

console.log(mySwiper)

popup({type:'success',msg:"操作成功",delay:1000,callBack:function(){
  console.log('callBack~~~');
}});

// 表单校验手写未必复杂，主要是样式，不过h5页面已经写过一套了
// document.addEventListener('touchmove', function (event) {
//   event.preventDefault();
// }, false);