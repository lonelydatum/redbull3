(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;
var tl = new TimelineMax();

function maskBunch(list) {
	var tlMask = new TimelineMax();
	list.map(function (item) {
		tlMask.from(item, .35, { clip: "rect(0px 46px 1200px 46px)" });
	});

	return tlMask;
}

function beams_on(beam) {
	var tlBeam = new TimelineMax();
	var list = document.querySelectorAll(beam);
	list.forEach(function (item) {
		tlBeam.from(item, .05, { opacity: 0 });
	});
	return tlBeam;
}

function beams_off(beam) {
	var list = document.querySelectorAll(beam);
	var arr = [];
	list.forEach(function (item) {
		arr.push(item);
	});

	var tlBeam = new TimelineMax();
	arr.reverse().map(function (item) {
		tlBeam.to(item, .02, { opacity: 0 });
	});
	return tlBeam;
}

function dots() {
	var tlDots = new TimelineMax({ repeat: 6, repeatDelay: .3 });

	var blues = document.querySelectorAll(".dot.blue");
	blues.forEach(function (item) {
		tlDots.from(item, .07, { opacity: 0 });
	});

	var reds = document.querySelectorAll(".dot.red");
	reds.forEach(function (item) {
		tlDots.from(item, .07, { opacity: 0 });
	});

	return tlDots;
}

exports.size = size;
exports.tl = tl;
exports.maskBunch = maskBunch;
exports.beams_on = beams_on;
exports.beams_off = beams_off;
exports.dots = dots;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	frame2();
	_commonJsCommonJs.tl.add(frame1());
	_commonJsCommonJs.tl.to(".beam", .3, { opacity: 0 });
	_commonJsCommonJs.tl.add(frame3());
}

function frame1() {
	var tlF1 = new TimelineMax();
	tlF1.set('.frame1', { opacity: 1 });
	tlF1.add((0, _commonJsCommonJs.maskBunch)(['.t1a', '.t1b', '.t1c', '.t1d']));
	tlF1.to('.t1', .35, { clip: 'rect(0px 46px 1200px 46px)' }, "+=2");
	return tlF1;
}

function frame2() {
	var tlF2 = new TimelineMax({ repeat: 1 });
	tlF2.set('.frame2', { opacity: 1 });
	tlF2.add((0, _commonJsCommonJs.beams_on)(".beam_a"));
	tlF2.add((0, _commonJsCommonJs.beams_on)(".beam_b"));

	return tlF2;
}

function frame3() {
	var tlF3 = new TimelineMax();
	tlF3.set('.frame3', { opacity: 1 });
	tlF3.add((0, _commonJsCommonJs.dots)());

	var mask1 = (0, _commonJsCommonJs.maskBunch)(['.t2a', '.t2b']);

	tlF3.add('mask1', .8);
	tlF3.add(mask1, 'mask1');

	tlF3.from('.line', .35, { width: 0 }, 'mask1+=.7');

	tlF3.add('mask1_close', 4);
	tlF3.to('.t2', .35, { clip: 'rect(0px 46px 1200px 46px)' }, 'mask1_close');
	tlF3.to('.line', .35, { width: 0 }, 'mask1_close');

	var mask2 = (0, _commonJsCommonJs.maskBunch)(['.t3a', '.t3b', '.t3c']);
	tlF3.add(mask2, 4.5);
	return tlF3;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
