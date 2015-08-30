(function () {
  'use strict';

  $(document).ready(function() {
    if ($.fn.fullpage && $.fn.fullpage.destroy) {
      $.fn.fullpage.destroy('all');
    }
    $('#fullpage').fullpage({
        // //Navigation
        // menu: false,
        // lockAnchors: false,
        // anchors:['intro', 'extract'],
        navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['intro', 'extract'],
        // showActiveTooltip: true,
        // slidesNavigation: false,
        // slidesNavPosition: 'bottom',
        //
        // //Scrolling
        // css3: true,
        // scrollingSpeed: 700,
        // autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 1000,
        // scrollBar: false,
        // easing: 'easeInOutCubic',
        // easingcss3: 'ease',
        // loopBottom: false,
        // loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: false,
        // normalScrollElements: '#element1, .element2',
        // scrollOverflow: false,
        // touchSensitivity: 15,
        // normalScrollElementTouchThreshold: 5,
        //
        // //Accessibility
        // keyboardScrolling: true,
        // animateAnchor: true,
        // recordHistory: true,
        //
        // //Design
        // controlArrows: true,
        verticalCentered: true,
        resize : true,
        // sectionsColor : ['#ccc', '#fff'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        fixedElements: '.header, .footer',
        // responsiveWidth: 0,
        // responsiveHeight: 0,
        //
        // //Custom selectors
        // sectionSelector: '.section',
        // slideSelector: '.slide',
        //
        // //events
        // onLeave: function(index, nextIndex, direction){},
        // onLeave: function (index, nextIndex, direction) {
        //   if (direction){}
        //   //leaving 1st section
        //   if(index === 1){
        //      $('.header').addClass('fixed');
        //   }
        //   //back to the 1st section
        //   if(nextIndex === 1){
        //       $('.header').removeClass('fixed');
        //   }
        // }
        // afterLoad: function(anchorLink, index){},
        // afterLoad: function () {
        //   $(".header").insertBefore($("#fullpage").parent());
        // },
        // afterRender: function(){},
        // afterResize: function(){},
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        // afterSlideLoad: function(){
        //   $(".slide.active .fp-tableCell").removeAttr("style");
        // }
        // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
    $(".fp-tableCell").attr("style","height:"+($(".fp-tableCell").height()-100)+"px");
    $(".fp-controlArrow.fp-next").html('<ng-md-icon icon="keyboard_arrow_right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg></ng-md-icon>');
    $(".fp-controlArrow.fp-next").attr('style','top: 70%;right: 25px;border: none;');
    $(".fp-controlArrow.fp-prev").html('<ng-md-icon icon="keyboard_arrow_left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg></ng-md-icon>');
    $(".fp-controlArrow.fp-prev").attr('style','top: 70%;left: 25px;border: none;');
    // $(".fp-controlArrow.fp-prev").attr("style","left:0px");
  });
})();
