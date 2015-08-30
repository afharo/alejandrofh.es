/*global getLocale:false*/
'use strict';

/**
 * @ngdoc function
 * @name alejandrofhesApp.config:translate
 * @description
 * # translate
 * Config of the alejandrofhesApp
 */
angular.module('alejandrofhesApp')
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      'HOME': 'Home',
      'ABOUT': 'About',
      'EXTRACT': 'Who am I?',
      'EXTRACT_P1': 'An energetic, highly-motivated professional with over four years of experience working in IT business. Working with other team members to deliver high quality service on time, ensuring customer satisfaction. Some of my skills are:',
      'EXTRACT_U1': 'Product oriented and fast learning',
      'EXTRACT_U1_C1': 'Product oriented',
      'EXTRACT_U1_C2': 'Fast learning',
      'EXTRACT_U2': 'Great communication skills, both in technical and non-technical environment.',
      'EXTRACT_U3': 'Bilingual: English and Spanish',
      'EXTRACT_U4': 'Solutions Architect Leader @ Case on IT, S.L.',
      'EXTRACT_U5': 'Heavy use of the following technologies:',
      'EXTRACT_U5_C1': 'Embedded system architectures',
      'EXTRACT_U5_C2': 'Backend processes and DBs',
      'EXTRACT_U5_C3': 'Frontend technologies',
      'EXTRACT_U6': 'Team player and problem solver',
      'EXPERIENCE': 'Which is my background?',
      'EXPERIENCE_P1': 'I built my background during five years in these companies:',
      'MORE': 'Want to know more?',
      'MORE_P1': 'If you want to know more, download my CV or contact me',
      'DOWNLOAD_CV': 'Download CV',
      'CONTACT': 'Contact'
    });

    $translateProvider.translations('es', {
      'HOME': 'Inicio',
      'ABOUT': 'Sobre',
      'EXTRACT': '¿Quién soy?',
      'EXTRACT_P1': 'Profesional con 5+ años de experiencia trabajando en el negocio TI. Siempre en búsqueda de la excelencia. Mis principales habilidades son:',
      'EXTRACT_U1': 'Orientación a producto y aprendizaje rápido.',
      'EXTRACT_U1_C1': 'Orientación a producto',
      'EXTRACT_U1_C2': 'Aprendizaje rápido',
      'EXTRACT_U2': 'Buenas capacidades de comunicación, tanto con interlocutores técnicos, como no técnicos.',
      'EXTRACT_U3': 'Bilingue: Inglés y Español',
      'EXTRACT_U4': 'Solutions Architect Leader @ Case on IT, S.L.',
      'EXTRACT_U5': 'Gran experiencia en las siguientes tecnologías:',
      'EXTRACT_U5_C1': 'Arquitecturas de sistemas empotrados',
      'EXTRACT_U5_C2': 'Procesos Backend y BBDD',
      'EXTRACT_U5_C3': 'Tecnologías Frontend',
      'EXTRACT_U6': 'Trabajo en equipo y orientación a resolver problemas',
      'EXPERIENCE': '¿Cuál es mi experiencia?',
      'EXPERIENCE_P1': 'He desarrollado mi experiencia durante 5 años in estas compañías:',
      'MORE': '¿Quieres saber más?',
      'MORE_P1': 'Si quieres saber más, descárgate mi CV o ponte en contacto conmigo:',
      'DOWNLOAD_CV': 'Descargar CV',
      'CONTACT': 'Contacto'
    });

    $translateProvider.preferredLanguage(getLocale());
    $translateProvider.useSanitizeValueStrategy('escaped');
}]);
