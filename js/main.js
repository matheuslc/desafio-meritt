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
      var el   = document.querySelector(anchor),
          root = document.querySelector('body');

      el.addEventListener('click', function() {
        root.classList
            .toggle('menu-active');
      });
   }

    APP.init();

}(document, window));
