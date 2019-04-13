"use strict";function getLocale(){var a=(navigator.language||navigator.userLanguage).split("-")[0].toLowerCase();return-1===["en","es"].indexOf(a)&&(a="en"),a}angular.module("alejandrofhesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","pascalprecht.translate","ngMdIcons"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("alejandrofhesApp").config(["$translateProvider",function(a){a.translations("en",{HOME:"Home",ABOUT:"About",EXTRACT:"Who am I?",EXTRACT_P1:"An energetic, highly-motivated professional with over four years of experience working in IT business. Working with other team members to deliver high quality service on time, ensuring customer satisfaction. Some of my skills are:",EXTRACT_U1:"Product oriented and fast learning",EXTRACT_U1_C1:"Product oriented",EXTRACT_U1_C2:"Fast learning",EXTRACT_U2:"Great communication skills, both in technical and non-technical environment.",EXTRACT_U3:"Bilingual: English and Spanish",EXTRACT_U4:"Solutions Architect Leader @ Case on IT, S.L.",EXTRACT_U5:"Heavy use of the following technologies:",EXTRACT_U5_C1:"Embedded system architectures",EXTRACT_U5_C2:"Backend processes and DBs",EXTRACT_U5_C3:"Frontend technologies",EXTRACT_U6:"Team player and problem solver",EXPERIENCE:"Which is my background?",EXPERIENCE_P1:"I built my background during five years in these companies:",MORE:"Want to know more?",MORE_P1:"If you want to know more, download my CV or contact me",DOWNLOAD_CV:"Download CV",CONTACT:"Contact"}),a.translations("es",{HOME:"Inicio",ABOUT:"Sobre",EXTRACT:"¿Quién soy?",EXTRACT_P1:"Profesional con 5+ años de experiencia trabajando en el negocio TI. Siempre en búsqueda de la excelencia. Mis principales habilidades son:",EXTRACT_U1:"Orientación a producto y aprendizaje rápido.",EXTRACT_U1_C1:"Orientación a producto",EXTRACT_U1_C2:"Aprendizaje rápido",EXTRACT_U2:"Buenas capacidades de comunicación, tanto con interlocutores técnicos, como no técnicos.",EXTRACT_U3:"Bilingue: Inglés y Español",EXTRACT_U4:"Solutions Architect Leader @ Case on IT, S.L.",EXTRACT_U5:"Gran experiencia en las siguientes tecnologías:",EXTRACT_U5_C1:"Arquitecturas de sistemas empotrados",EXTRACT_U5_C2:"Procesos Backend y BBDD",EXTRACT_U5_C3:"Tecnologías Frontend",EXTRACT_U6:"Trabajo en equipo y orientación a resolver problemas",EXPERIENCE:"¿Cuál es mi experiencia?",EXPERIENCE_P1:"He desarrollado mi experiencia durante 5 años in estas compañías:",MORE:"¿Quieres saber más?",MORE_P1:"Si quieres saber más, descárgate mi CV o ponte en contacto conmigo:",DOWNLOAD_CV:"Descargar CV",CONTACT:"Contacto"}),a.preferredLanguage(getLocale()),a.useSanitizeValueStrategy("escaped")}]),angular.module("alejandrofhesApp").controller("MainCtrl",["$scope",function(a){a.lang=getLocale()}]),angular.module("alejandrofhesApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("alejandrofhesApp").directive("contactInfo",function(){return{templateUrl:"views/contact-info.html",restrict:"E"}}),angular.module("alejandrofhesApp").directive("contactInfoExtended",function(){return{templateUrl:"views/contact-info-extended.html",restrict:"E"}}),angular.module("alejandrofhesApp").run(["$templateCache",function(a){a.put("views/contact-info-extended.html",'<p class="contact-info-extended"> <a href="mailto:afharo@gmail.com"><span class="glyphicon glyphicon-send"></span>&emsp;afharo@gmail.com</a><br> <a href="https://www.linkedin.com/in/afharo"><ng-md-icon icon="linkedin-box"></ng-md-icon>&emsp;https://www.linkedin.com/in/afharo</a><br> <a href="https://github.com/afharo"><ng-md-icon icon="github-circle"></ng-md-icon>&emsp;https://github.com/afharo</a><br> <a href="http://twitter.com/afharo"><ng-md-icon icon="twitter"></ng-md-icon>&emsp;http://twitter.com/afharo</a> </p>'),a.put("views/contact-info.html",'<p class="contact-info"> <a href="mailto:afharo@gmail.com"><span class="glyphicon glyphicon-send"></span></a> <a href="https://www.linkedin.com/in/afharo"><ng-md-icon icon="linkedin-box" style="fill:grey"></ng-md-icon></a> <a href="https://github.com/afharo"><ng-md-icon icon="github-circle" style="fill:grey"></ng-md-icon></a> <a href="http://twitter.com/afharo"><ng-md-icon icon="twitter" style="fill:grey"></ng-md-icon></a> </p>'),a.put("views/contact.html",'<div id="fullpage"> <!-- Intro --> <div class="section" id="intro"> <div class="jumbotron center"> <contact-info-extended></contact-info-extended> </div> </div> </div>'),a.put("views/main.html",'<div id="fullpage"> <!-- Intro --> <div class="section" id="intro"> <div class="jumbotron center"> <img class="profile-photo round" src="https://avatars2.githubusercontent.com/u/5469006?s=460&v=4"> <h1>Alejandro Fernández Haro</h1> <p class="lead"> <span class="glyphicon glyphicon-briefcase"></span>Lead Developer @ <a href="https://www.adstream.com/">Adstream</a><br> </p> <contact-info></contact-info> </div> </div> <!-- Extract --> <div class="section" id="extract"> <div class="slide"> <div class="jumbotron aliceblue"> <h2>{{\'EXTRACT\' | translate}}</h2> <p class="justified">{{\'EXTRACT_P1\' | translate}}</p> <div class="skills center"> <p>{{\'EXTRACT_U1\' | translate}}</p> <div class="table"> <div class="row"> <div class="cell"> {{\'EXTRACT_U1_C1\' | translate}}<br> <img src="images/product-oriented.70378fcc.png" alt="Product Oriented"> </div> <div class="cell"> {{\'EXTRACT_U1_C2\' | translate}}<br> <img src="images/fast-learner.0a78f9c2.png" alt="Fast learner"> </div> </div> </div> </div> </div> </div> <div class="slide"> <div class="jumbotron aliceblue"> <h2>{{\'EXTRACT\' | translate}}</h2> <p class="justified">{{\'EXTRACT_P1\' | translate}}</p> <div class="skills center"> <p>{{\'EXTRACT_U2\' | translate}}</p> <div class="table"> <div class="row"> <div class="cell"> <img src="images/comm-skills.07c7427c.png" alt="Communication skills"> </div> </div> </div> </div> </div> </div> <div class="slide"> <div class="jumbotron aliceblue"> <h2>{{\'EXTRACT\' | translate}}</h2> <p class="justified">{{\'EXTRACT_P1\' | translate}}</p> <div class="skills center"> <p>{{\'EXTRACT_U3\' | translate}}</p> <div class="table"> <div class="row"> <div class="cell"> <img src="images/bilingual.dd679f74.jpg" alt="Bilingual"> </div> </div> </div> </div> </div> </div> <!-- <div class="slide">\n      <div class="jumbotron aliceblue">\n        <h2>{{\'EXTRACT\' | translate}}</h2>\n        <p class="justified">{{\'EXTRACT_P1\' | translate}}</p>\n        <div class="skills center">\n          <p>{{\'EXTRACT_U4\' | translate}}</p>\n          <div class="table">\n            <div class="row">\n              <div class="cell">\n                <img src="images/case.52fe3df4.png" alt="Case On IT">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> --> <div class="slide"> <div class="jumbotron aliceblue"> <h2>{{\'EXTRACT\' | translate}}</h2> <p class="justified">{{\'EXTRACT_P1\' | translate}}</p> <div class="skills center"> <p>{{\'EXTRACT_U5\' | translate}}</p> <div class="table"> <div class="row"> <div class="cell logos"> {{\'EXTRACT_U5_C1\' | translate}}<br> <img src="images/Raspberry_Pi_Logo.3409ceb9.svg" alt="Raspberry Pi"> <img src="images/Linux.d17cdc0e.svg" alt="Linux"> </div> <div class="cell logos"> {{\'EXTRACT_U5_C2\' | translate}}<br> <img src="images/Nodejs.e9c4c4d8.svg" alt="NodeJS"> <img src="images/MongoDB.35a37a8e.png" alt="MongoDB"> <img src="images/Redis.71fbe76d.svg" alt="Redis"> <img src="images/Mysql.258f706d.png" alt="MySQL"> </div> <div class="cell logos"> {{\'EXTRACT_U5_C3\' | translate}}<br> <img src="images/PHP.fba1f679.svg" alt="PHP"> <img src="images/HTML5.370c117a.svg" alt="HTML5"> <img src="images/CSS3.bc67b5f3.svg" alt="CSS3"> <img src="images/AngularJS.6cdd5462.png" alt="AngularJS"> <img src="images/jQuery.9999c1a8.gif" alt="jQuery"> <img src="images/JavaScript.49ca7c20.png" alt="JavaScript"> </div> </div> </div> </div> </div> </div> <div class="slide"> <div class="jumbotron aliceblue"> <h2>{{\'EXTRACT\' | translate}}</h2> <p class="justified">{{\'EXTRACT_P1\' | translate}}</p> <div class="skills center"> <p>{{\'EXTRACT_U6\' | translate}}</p> <div class="table"> <div class="row"> <div class="cell"> <img src="images/problem-solver.22b67f2a.gif" alt="Problem Solver"> </div> </div> </div> </div> </div> </div> </div> <!-- Experience --> <div class="section" id="experience"> <div class="jumbotron antiquewhite"> <h2>{{\'EXPERIENCE\' | translate}}</h2> <p class="justified">{{\'EXPERIENCE_P1\' | translate}}</p> <div class="table center"> <div class="row"> <div class="cell companies"> <img src="images/case.52fe3df4.png" alt="CaseonIT"> </div> <div class="cell companies"> <img src="images/deloitte.7aa6f9b7.png" alt="Deloitte"> </div> <div class="cell companies"> <img src="images/adstream.5f01615a.jpeg" alt="Adstream"> </div> </div> </div> <div class="table center"> <div class="row"> <div class="cell companies"> <img src="images/ugr-tstc.4cfb7df4.png" alt="TSTC"> </div> </div> </div> </div> </div> <div class="section" id="more"> <div class="jumbotron bisque"> <h2>{{\'MORE\' | translate}}</h2> <p class="justified">{{\'MORE_P1\' | translate}}</p> <div class="table center"> <div class="row"> <div class="cell"> <contact-info-extended></contact-info-extended> </div> <div class="cell cv"> <a ng-href="cv/AlejandroFernandez-{{lang}}.pdf"> {{\'DOWNLOAD_CV\' | translate}}<br> <img src="images/cv.5f1bc711.png" alt="CV"> </a> </div> </div> </div> </div> </div> </div> <script src="assets/fullpage.js"></script>')}]);