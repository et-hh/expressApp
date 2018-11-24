(function(doc, win){
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if(clientWidth) docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
          var dpr = parseInt(win.devicePixelRatio || 2, 10);
          docEl.setAttribute('data-dpr', dpr);
      };
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)