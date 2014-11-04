/* Name: Desafio Meritt
 * Author: Matheus Lucca do Carmo
 * Version: 0.0.1
 */


;(function (document, window) {
  'use strict';

  // App namespace

  var APP = {} || window.APP;

  /* Active functions
   *
   */
  APP.init = function() {
    APP.toggleMenu('.anchor');
  };

  /* Active responsive menu
   * @param anchor {string} Anchor elemnt class
   */
   APP.toggleMenu = function(anchor) {
      var el = document.querySelector(anchor);
      document.querySelector('body')
              .classList
              .toggleClass('menu-active');
   };

   window.addEventListener('load', function() {
    APP.init();
   });

}(window, document));
