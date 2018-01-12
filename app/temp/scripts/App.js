/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pGrid = document.getElementsByClassName('pic-grid-container'),

// textarea = document.querySelector('textarea'),
baseball = document.getElementById('baseball'),
    football = document.getElementById('football'),
    display = document.getElementById('btn-display'),
    reset = document.getElementById('btn-reset'),
    mainText = document.getElementById('main-text'),
    names = [],
    numbers = void 0;

// save names without submitting
function saveNames() {
  names = mainText.value.split('\n');
  numbers = Array.from({ length: names.length }).map(function (_, i) {
    return i;
  }); //creates a numbers array that is the same length as the names array, for indexing.
}
// save names to array, no submit button
mainText.addEventListener('blur', saveNames, false);

// shuffle arrays
function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

//display images with names
function displayEls() {
  // clear content to start fresh
  pGrid[0].innerHTML = "";
  names.forEach(function (name, i) {

    var picContainer = document.createElement('div'),
        newImg = document.createElement('img'),
        newName = document.createElement('p');
    // append the elements
    picContainer.className = "picture-frame";
    picContainer.appendChild(newImg);
    picContainer.appendChild(newName);
    newName.textContent = name;

    if (baseball.checked) {
      newImg.src = "./assets/images/baseball/team" + numbers[i] + ".jpg";
    } else if (football.checked) {
      newImg.src = "./assets/images/football/team" + numbers[i] + ".gif";
    }
    pGrid[0].appendChild(picContainer);
  });
}

display.addEventListener('click', function () {
  displayEls();
});

random.addEventListener('click', function () {
  shuffle(names);
  shuffle(numbers);
  displayEls();
});

reset.addEventListener('click', function () {
  pGrid[0].innerHTML = "";
});

/***/ })
/******/ ]);