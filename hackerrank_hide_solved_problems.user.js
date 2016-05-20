// ==UserScript==
// @name              Hackerrank
// @namespace    http://koldbyte.github.io/hackerrank/hide-solved-problems
// @description     Hides solved problems
// @include            https://www.hackerrank.com/domains/*
// @exclude           https://www.hackerrank.com/contests/*
// @version            1
// @grant                none
// ==/UserScript==
/*
How to user?
Click on the ellipsis icon to hide all the solved problems on the current page.

Option 1: Add a link to breadcrumb. Reloads everytime a user navigates to different page.
Option 2: Add a link to the Top Nav. No reload necessary.
*/

var opt = 2; //preferred

function setClick() {
  $('#com-koldbyte-hackerrank-hidesolved').click(function () {
    $('div.challenges-list-view').has('div.completed-indicator').hide();
    return false;
  });
}

function add() {
  $('div.bcrumb').append('<a id="com-koldbyte-hackerrank-hidesolved" href="#" class="nav_link pull-right" style="padding-left: 50px;" ><i class="icon-ellipsis"></i><span></span></a>');
  setClick();
}

function add2Menu() {
  $('ul.nav-links-active').append('<li><a id="com-koldbyte-hackerrank-hidesolved" href="#" class="nav_link pull-right" ><i class="icon-ellipsis"></i><span></span></a><li>');
  setClick();
}

if (typeof $ == 'undefined') {
  var $ = unsafeWindow.jQuery;
}

$(document).ready(function () {
  setTimeout(function () {
    console.log('First Load : Added Hide button!');
    if (opt == 1) {
      add();
      window.setInterval(function () {
        if ($('#com-koldbyte-hackerrank-hidesolved').length == 0) {
          add();
          console.log('Button disappeared! Re-Added Hide button! ');
        }
      }, 5000);
    } else {
      add2Menu();
    }
  }, 5000);
});
