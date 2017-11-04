/* Full Page */
import $ from "jquery";
import "./jquery.fullPage.js"

var fullPageCreated = false;
createFullpage();

function createFullpage() {
  if(fullPageCreated === false) {
      fullPageCreated = true;
      $('#fullpage').fullpage({
      //Navigation
      navigation: true,
      navigationPosition: 'left',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: true,
      loopTop: false,
      continuousVertical: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      fixedElements: '#header, .footer',
      responsiveWidth: 640,
      responsiveHeight: 0,
      responsiveSlides: false,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',
      lazyLoading: true,

      //events
      onLeave: function(index, nextIndex, direction){

          if(index == 1 && direction =='down'){
              $('.proj-num').addClass('numberHide');
          }

          if((index == 1 && direction =='down')||(index == 2 && direction =='down')||(index == 3 && direction =='down')||(index == 4 && direction =='down')||(index == 4 && direction =='down')||(index == 5 && direction =='down')||(index == 6 && direction =='down')||(index == 7 && direction =='down')||(index == 8 && direction =='down')||(index == 9 && direction =='down')||(index == 10 && direction =='down')||(index == 11 && direction =='down')||(index == 12 && direction =='down')||(index == 13 && direction =='down')||(index == 14 && direction =='down')||(index == 15 && direction =='down')){
              $('.proj-num').removeClass('numberShow');
              $('.proj-num').addClass('numberHide');
          }

          if((index == 2 && direction =='up')||(index == 3 && direction =='up')||(index == 4 && direction =='up')||(index == 4 && direction =='up')||(index == 5 && direction =='up')||(index == 6 && direction =='up')||(index == 7 && direction =='up')||(index == 8 && direction =='up')||(index == 9 && direction =='up')||(index == 10 && direction =='up')||(index == 11 && direction =='up')||(index == 12 && direction =='up')||(index == 13 && direction =='up')||(index == 14 && direction =='down')||(index == 15 && direction =='up')){
              $('.proj-num').removeClass('numberShow');
              $('.proj-num').addClass('numberHide');
          }

      },
      afterLoad: function(anchorLink, index){

          var loadedSection = $(this);

          if(index == 1){
              $('.proj-num').text('01');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 2){
              $('.proj-num').text('02');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 3){
              $('.proj-num').text('03');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 4){
             $('.proj-num').text('04');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 5){
              $('.proj-num').text('05');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 6){
              $('.proj-num').text('06');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 7){
              $('.proj-num').text('07');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 8){
              $('.proj-num').text('08');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 9){
              $('.proj-num').text('09');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 10){
              $('.proj-num').text('10');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 11){
              $('.proj-num').text('11');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 12){
              $('.proj-num').text('12');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 13){
              $('.proj-num').text('13');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 14){
              $('.proj-num').text('14');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

          if(index == 15){
              $('.proj-num').text('15');
              $('.proj-num').removeClass('numberHide');
              $('.proj-num').addClass('numberShow');
          }

      },
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
  });
  }
}




/*

if(index == 1 && direction =='down'){
      var div = $('.proj-num');
      div.text(parseInt(div.text(),10) + 1);
  }

  else if(index >= 2 && direction == 'up'){
      var div = $('.proj-num');
      div.text(parseInt(div.text(),10) - 1);
  }

*/
