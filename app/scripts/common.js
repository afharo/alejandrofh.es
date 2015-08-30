'use strict';

var getLocale = function () {
  var lang = (navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
  if (['en','es'].indexOf(lang)===-1) {
    lang = 'en';
  }
  return lang;
};
