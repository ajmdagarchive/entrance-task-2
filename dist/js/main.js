(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/devices-filter');

require('./modules/devices-open-menu');

require('./modules/header-nav');

require('./modules/main-scroll-panels');

require('./modules/scripts-arrows');
},{"./modules/devices-filter":2,"./modules/devices-open-menu":3,"./modules/header-nav":4,"./modules/main-scroll-panels":5,"./modules/scripts-arrows":6}],2:[function(require,module,exports){
const devices = document.querySelectorAll('.content-devices .panel__item');
const menuItems = document.querySelectorAll('.content-devices__menu-list-item');

menuItems.forEach((item, id) => {
  item.addEventListener('click', () => {
    item.classList.toggle('picked');
    const filterValue = item.getAttribute('data-filter');

    devices.forEach(device => {
      if (device.getAttribute('data-filter').split(' ').every(item => {
        return item !== filterValue;
      })) {
        device.classList.add('display-none');
      } else {
        device.classList.remove('display-none');
      }
    });

  });
});

},{}],3:[function(require,module,exports){
let itemClickToShow = document.querySelector('.content-devices__menu-list-item-all');
let menuList = document.querySelector('.content-devices__menu-list');

itemClickToShow.addEventListener('click', () => {
  menuList.classList.toggle('open');
});

},{}],4:[function(require,module,exports){
const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
  burger.classList.toggle('close');
});

},{}],5:[function(require,module,exports){
const showMoreButton = document.querySelector('.content-main__scroll-button');
const panelList = document.querySelector('.content-main .panel__list');

showMoreButton.addEventListener('click', () => {
  panelList.scrollBy({
    top: 270,
    behavior: 'smooth'
  });
});

},{}],6:[function(require,module,exports){
const leftArrow = document.querySelector('.content-scripts__arrow--left');
const rightArrow = document.querySelector('.content-scripts__arrow--right');

const panelLists = document.querySelectorAll('.content-scripts__panel-list');
const panelsContainer = document.querySelector('.content-scripts__panels-container');

if (panelLists.length > 1) { // Если больше одного слайда
  // Показываем стрелки
  leftArrow.classList.add('show');
  rightArrow.classList.add('show');

  // Добавляем класс active к первому слайду
  panelLists[0].classList.add('active');

  let position = 0;
  let activeList;
  let panelListWidth;

  leftArrow.addEventListener('click', () => {
    panelListWidth = panelLists[0].offsetWidth;
    activeList = document.querySelector('.content-scripts__panel-list.active');
    if (activeList.previousElementSibling) {
      position += panelListWidth;
      panelsContainer.style.transform = 'translateX(' + position + 'px)';
      activeList.classList.remove('active');
      activeList.previousElementSibling.classList.add('active');
    }
  });
  
  rightArrow.addEventListener('click', () => {
    panelListWidth = panelLists[0].offsetWidth;
    activeList = document.querySelector('.content-scripts__panel-list.active');
    if (activeList.nextElementSibling) {
      position += -panelListWidth;
      panelsContainer.style.transform = 'translateX(' + position + 'px)';
      activeList.classList.remove('active');
      activeList.nextElementSibling.classList.add('active');
    }
  });
};



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3l1cnkvUHJvamVjdHMvc2hyaS0yMDE4L2VudHJhbmNlLXRhc2stMi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUveXVyeS9Qcm9qZWN0cy9zaHJpLTIwMTgvZW50cmFuY2UtdGFzay0yL3NyYy9qcy9mYWtlXzY3NWIzMjEzLmpzIiwiL2hvbWUveXVyeS9Qcm9qZWN0cy9zaHJpLTIwMTgvZW50cmFuY2UtdGFzay0yL3NyYy9qcy9tb2R1bGVzL2RldmljZXMtZmlsdGVyLmpzIiwiL2hvbWUveXVyeS9Qcm9qZWN0cy9zaHJpLTIwMTgvZW50cmFuY2UtdGFzay0yL3NyYy9qcy9tb2R1bGVzL2RldmljZXMtb3Blbi1tZW51LmpzIiwiL2hvbWUveXVyeS9Qcm9qZWN0cy9zaHJpLTIwMTgvZW50cmFuY2UtdGFzay0yL3NyYy9qcy9tb2R1bGVzL2hlYWRlci1uYXYuanMiLCIvaG9tZS95dXJ5L1Byb2plY3RzL3NocmktMjAxOC9lbnRyYW5jZS10YXNrLTIvc3JjL2pzL21vZHVsZXMvbWFpbi1zY3JvbGwtcGFuZWxzLmpzIiwiL2hvbWUveXVyeS9Qcm9qZWN0cy9zaHJpLTIwMTgvZW50cmFuY2UtdGFzay0yL3NyYy9qcy9tb2R1bGVzL3NjcmlwdHMtYXJyb3dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL21vZHVsZXMvZGV2aWNlcy1maWx0ZXInKTtcblxucmVxdWlyZSgnLi9tb2R1bGVzL2RldmljZXMtb3Blbi1tZW51Jyk7XG5cbnJlcXVpcmUoJy4vbW9kdWxlcy9oZWFkZXItbmF2Jyk7XG5cbnJlcXVpcmUoJy4vbW9kdWxlcy9tYWluLXNjcm9sbC1wYW5lbHMnKTtcblxucmVxdWlyZSgnLi9tb2R1bGVzL3NjcmlwdHMtYXJyb3dzJyk7IiwiY29uc3QgZGV2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LWRldmljZXMgLnBhbmVsX19pdGVtJyk7XG5jb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC1kZXZpY2VzX19tZW51LWxpc3QtaXRlbScpO1xuXG5tZW51SXRlbXMuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3BpY2tlZCcpO1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG5cbiAgICBkZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcbiAgICAgIGlmIChkZXZpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpLnNwbGl0KCcgJykuZXZlcnkoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBmaWx0ZXJWYWx1ZTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGRldmljZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldmljZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn0pO1xuIiwibGV0IGl0ZW1DbGlja1RvU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWRldmljZXNfX21lbnUtbGlzdC1pdGVtLWFsbCcpO1xubGV0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZGV2aWNlc19fbWVudS1saXN0Jyk7XG5cbml0ZW1DbGlja1RvU2hvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xufSk7XG4iLCJjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpO1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xufSk7XG4iLCJjb25zdCBzaG93TW9yZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW1haW5fX3Njcm9sbC1idXR0b24nKTtcbmNvbnN0IHBhbmVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW1haW4gLnBhbmVsX19saXN0Jyk7XG5cbnNob3dNb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwYW5lbExpc3Quc2Nyb2xsQnkoe1xuICAgIHRvcDogMjcwLFxuICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICB9KTtcbn0pO1xuIiwiY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtc2NyaXB0c19fYXJyb3ctLWxlZnQnKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1zY3JpcHRzX19hcnJvdy0tcmlnaHQnKTtcblxuY29uc3QgcGFuZWxMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LXNjcmlwdHNfX3BhbmVsLWxpc3QnKTtcbmNvbnN0IHBhbmVsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXNjcmlwdHNfX3BhbmVscy1jb250YWluZXInKTtcblxuaWYgKHBhbmVsTGlzdHMubGVuZ3RoID4gMSkgeyAvLyDQldGB0LvQuCDQsdC+0LvRjNGI0LUg0L7QtNC90L7Qs9C+INGB0LvQsNC50LTQsFxuICAvLyDQn9C+0LrQsNC30YvQstCw0LXQvCDRgdGC0YDQtdC70LrQuFxuICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0Log0L/QtdGA0LLQvtC80YMg0YHQu9Cw0LnQtNGDXG4gIHBhbmVsTGlzdHNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgbGV0IHBvc2l0aW9uID0gMDtcbiAgbGV0IGFjdGl2ZUxpc3Q7XG4gIGxldCBwYW5lbExpc3RXaWR0aDtcblxuICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGFuZWxMaXN0V2lkdGggPSBwYW5lbExpc3RzWzBdLm9mZnNldFdpZHRoO1xuICAgIGFjdGl2ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1zY3JpcHRzX19wYW5lbC1saXN0LmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVMaXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIHBvc2l0aW9uICs9IHBhbmVsTGlzdFdpZHRoO1xuICAgICAgcGFuZWxzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBwb3NpdGlvbiArICdweCknO1xuICAgICAgYWN0aXZlTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGFjdGl2ZUxpc3QucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwYW5lbExpc3RXaWR0aCA9IHBhbmVsTGlzdHNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgYWN0aXZlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXNjcmlwdHNfX3BhbmVsLWxpc3QuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZUxpc3QubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICBwb3NpdGlvbiArPSAtcGFuZWxMaXN0V2lkdGg7XG4gICAgICBwYW5lbHNDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHBvc2l0aW9uICsgJ3B4KSc7XG4gICAgICBhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgYWN0aXZlTGlzdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuIl19
