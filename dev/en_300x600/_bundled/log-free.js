(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;
var tl = new TimelineMax();

function maskBunch(list, clip) {
	var time = arguments.length <= 2 || arguments[2] === undefined ? .35 : arguments[2];

	var tlMask = new TimelineMax();
	list.map(function (item) {
		tlMask.from(item, time, { clip: clip });
	});
	return tlMask;
}

var BEAM_TIME = .05;

function cascade(className) {
	var repeat = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];

	var tlDots = new TimelineMax({ repeat: repeat });
	tlDots.add(cascade_on(className));
	tlDots.add(cascade_off(className));
	return tlDots;
}

function cascade_on(className) {
	var tlDots = new TimelineMax();
	var blues = document.querySelectorAll(className);
	blues.forEach(function (item) {
		tlDots.fromTo(item, BEAM_TIME, { opacity: 0 }, { opacity: 1 });
	});
	return tlDots;
}

function cascade_off(className) {
	var tlDots = new TimelineMax();
	var blues = document.querySelectorAll(className);
	blues.forEach(function (item) {
		tlDots.to(item, BEAM_TIME, { opacity: 0 });
	});
	return tlDots;
}

exports.size = size;
exports.tl = tl;
exports.maskBunch = maskBunch;
exports.cascade = cascade;
exports.cascade_on = cascade_on;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var clip = "rect(0px 46px 1200px 46px)";

function start() {
	var _frame3 = frame3();

	var tlF3 = _frame3.tlF3;
	var tlFlashyStuff = _frame3.tlFlashyStuff;

	beamsPlay();
	_commonJsCommonJs.tl.add(frame1());
	_commonJsCommonJs.tl.to(".frame2", .3, { opacity: 0 });
	_commonJsCommonJs.tl.add("f3");
	_commonJsCommonJs.tl.add(tlFlashyStuff, "f3");
	_commonJsCommonJs.tl.add(tlF3, "f3");
}

function frame1() {
	var tlF1 = new TimelineMax();
	tlF1.set('.frame1', { opacity: 1 });
	tlF1.add((0, _commonJsCommonJs.maskBunch)(['.t1a', '.t1b', '.t1c', '.t1d'], clip));
	tlF1.to('.t1', .35, { clip: "rect(0px 46px 1200px 46px)" }, "+=1.2");
	return tlF1;
}

function beamsPlay() {
	var tlF2 = new TimelineMax();
	_commonJsCommonJs.tl.set('.frame2', { opacity: 1 });
	tlF2.add((0, _commonJsCommonJs.cascade)(".beam_a", 5));
	tlF2.add((0, _commonJsCommonJs.cascade)(".beam_b", 5), .7);
	return tlF2;
}

function frame3() {
	var tlF3 = new TimelineMax();

	var tlFlashyStuff = new TimelineMax();

	tlF3.set('.frame3', { opacity: 1 });

	var tlDots = new TimelineMax();
	tlDots.add((0, _commonJsCommonJs.cascade)(".dot.blue", 3));
	tlDots.add((0, _commonJsCommonJs.cascade)(".dot.red", 3), .35);
	tlFlashyStuff.add(tlDots);

	var tlRings = new TimelineMax();
	tlRings.add((0, _commonJsCommonJs.cascade)(".ring.red", 2));
	tlRings.add((0, _commonJsCommonJs.cascade)(".ring.blue", 2), .3);
	tlRings.add((0, _commonJsCommonJs.cascade_on)(".ring.red"));
	tlRings.add((0, _commonJsCommonJs.cascade_on)(".ring.blue"));

	tlFlashyStuff.add(tlRings);

	var mask1 = (0, _commonJsCommonJs.maskBunch)(['.t2a', '.t2b'], clip);

	tlF3.add('mask1', .5);
	tlF3.add(mask1, 'mask1');

	tlF3.from('.line', .35, { width: 0 }, 'mask1+=.7');

	tlF3.add('mask1_close', "+=2");
	tlF3.to('.t2', .35, { clip: "rect(0px 46px 1200px 46px)" }, 'mask1_close');
	tlF3.to('.line', .35, { width: 0 }, 'mask1_close');

	tlF3.from('.cta', .3, { opacity: 0 });
	return { tlF3: tlF3, tlFlashyStuff: tlFlashyStuff };
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
