/**
 * common.js
 * UI Script
 */

var setGnb = function() {
  $('.gnb > li').on('mouseenter mouseover', function() {
    $('.gnb > li').removeClass('on');
    $('.sub_gnb').removeClass('active');
    $(this).closest('.header').find('.header_bottom').addClass('active');
    $(this).addClass('on');
    $(this).find('.sub_gnb').addClass('active');
  });
  $('.header').on('mouseleave', function() {
    $(this).find('.header_bottom').removeClass('active');
  });
};

var setDatePicker = function() {
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
    monthNames: ['1월', '2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  });
  $('.input_date').datepicker();
};

var setLayerPopup = function() {
  $('.js-popup-open').on('click', function() {
    $(this).next('.layer_popup').addClass('open');
    $('body').addClass('popup_open');
  });
  $('.js-popup-close').on('click', function() {
    $(this).closest('.layer_popup').removeClass('open');
    $('body').removeClass('popup_open');
  });
};

var setTab = function() {
  $('.js-tab-list > li').each(function() {
    $(this).on('click', function() {
      var idx = $(this).index();
      $(this).closest('.js-tab-list').find('li').removeClass('active');
      $(this).addClass('active');

      $(this).closest('.js-tab-list').next('.js-tab-con').find('li').removeClass('active');
      $(this).closest('.js-tab-list').next('.js-tab-con').find('li').eq(idx).addClass('active');
    });
  });
};

var setTooltip = function() {
  $('.js-tooltip').on('click', function() {
    $(this).next('.layer_tooltip').toggleClass('on');
  });
};

$(document).ready(function() {
  setGnb();
  if ($('.input_date').length) {
    setDatePicker();
  }
  if ($('.layer_popup').length) {
    setLayerPopup();
  }
  setTab();
  setTooltip();
});