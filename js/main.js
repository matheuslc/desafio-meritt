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
    APP.animate(APP.scrollTo('.about-box'), 'bounce', '.about-characteristics');
    APP.animate(APP.scrollTo('.about-box'), 'bounce', '.about-benefits');
    APP.animate(APP.scrollTo('.fundamentals-box'), 'tada', '.book-icon');
    APP.animate(APP.scrollTo('.mec'), 'tada', '.mec-book');
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
   };

   /* Get distance between element and window top
   * @param element {string} Element class
   */
   APP.scrollTo = function(element) {
    var el = document.querySelector(element);

    return el.offsetTop;

   };

   APP.animate = function(distance, animation, element) {
    var el = document.querySelector(element);

      el.classList.add('animated');

    window.addEventListener('scroll', function() {

      if(window.pageYOffset >= distance) {
        el.classList.add(animation);
      }

    });

   }

    APP.init();

}(document, window));
