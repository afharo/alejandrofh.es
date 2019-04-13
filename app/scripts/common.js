// jshint ignore: start
'use strict';

function getLocale () {
  var lang = (navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
  if (['en','es'].indexOf(lang)===-1) {
    lang = 'en';
  }
  return lang;
}
