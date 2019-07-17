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
	var tlMask = new TimelineMax();
	list.map(function (item) {
		tlMask.from(item, .35, { clip: clip });
	});
	return tlMask;
}

var BEAM_TIME = .065;

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
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var clip = 'rect(0px 46px 1200px 46px)';

function start() {
	beamsPlay();
	_commonJsCommonJs.tl.add(frame1());

	_commonJsCommonJs.tl.to(".frame2", .3, { opacity: 0 });
	_commonJsCommonJs.tl.add(frame3());
}

function frame1() {
	var tlF1 = new TimelineMax();
	tlF1.set('.frame1', { opacity: 1 });
	tlF1.add((0, _commonJsCommonJs.maskBunch)(['.t1a', '.t1b', '.t1c', '.t1d'], clip));
	tlF1.to('.t1', .35, { clip: 'rect(0px 46px 1200px 46px)' }, "+=2");
	return tlF1;
}

function beamsPlay() {
	var tlF2 = new TimelineMax();
	_commonJsCommonJs.tl.set('.frame2', { opacity: 1 });
	tlF2.add((0, _commonJsCommonJs.cascade)(".beam_a", 5));
	tlF2.add((0, _commonJsCommonJs.cascade)(".beam_b", 5), .4);
	return tlF2;
}

function frame3() {
	var tlF3 = new TimelineMax();
	tlF3.set('.frame3', { opacity: 1 });
	tlF3.add((0, _commonJsCommonJs.cascade)(".dot.blue"));
	tlF3.add((0, _commonJsCommonJs.cascade)(".dot.red"), .3);
	tlF3.add((0, _commonJsCommonJs.cascade_on)(".dot.blue"));
	tlF3.add((0, _commonJsCommonJs.cascade_on)(".dot.red"));

	var mask1 = (0, _commonJsCommonJs.maskBunch)(['.t2a', '.t2b'], clip);

	tlF3.add('mask1', .8);
	tlF3.add(mask1, 'mask1');

	tlF3.from('.line', .35, { width: 0 }, 'mask1+=.7');

	tlF3.add('mask1_close', 4);
	tlF3.to('.t2', .35, { clip: 'rect(0px 46px 1200px 46px)' }, 'mask1_close');
	tlF3.to('.line', .35, { width: 0 }, 'mask1_close');

	var mask2 = (0, _commonJsCommonJs.maskBunch)(['.t3a', '.t3b', '.t3c'], clip);
	tlF3.add(mask2, 4.5);
	return tlF3;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
