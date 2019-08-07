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

var BEAM_TIME = .04;

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
exports.cascade_off = cascade_off;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var clip = 'rect(0px 20px 100px 20px)';

// function start(){	

// 	tl.add(frame1())
// 	tl.add(beamsPlay())

// 	tl.add(frame2(), "-=.5")

// 	tl.add('endBeam', "-=.6")
// 	tl.add( cascade_on(".beam_a"), "endBeam" )
// 	tl.add( cascade_on(".beam_b"), "endBeam+=.3" )

// }

// function beamsPlay(){
// 	const tlF2 = new TimelineMax()
// 	tl.set('.frame2', {opacity:1})	
// 	tlF2.add( cascade(".beam_a", 0) )
// 	tlF2.add( cascade(".beam_b", 0), .5 )	

// 	// tlF2.add( cascade_on(".beam_a") )
// 	// tlF2.add( cascade_on(".beam_b") )
// 	return tlF2	
// }

function start() {
	beamsPlay();
	_commonJsCommonJs.tl.add(frame1());
	_commonJsCommonJs.tl.add(frame2());
}

function beamsPlay() {
	var tlF2 = new TimelineMax();
	_commonJsCommonJs.tl.set('.frame2', { opacity: 1 });
	tlF2.add((0, _commonJsCommonJs.cascade)(".beam_a", 4));
	tlF2.add((0, _commonJsCommonJs.cascade)(".beam_b", 4), .3);

	tlF2.add((0, _commonJsCommonJs.cascade_on)(".beam_a"));
	tlF2.add((0, _commonJsCommonJs.cascade_on)(".beam_b"));
	return tlF2;
}

function frame1() {
	var tlF1 = new TimelineMax();
	tlF1.set('.frame1', { opacity: 1 });
	tlF1.add((0, _commonJsCommonJs.maskBunch)(['.t1a', '.t1b'], clip, .5));
	tlF1.to('.t1', .35, { clip: clip }, "+=1.2");
	return tlF1;
}

function frame2() {
	var tlF3 = new TimelineMax();
	tlF3.set('.frame2', { opacity: 1 });

	var mask1 = (0, _commonJsCommonJs.maskBunch)(['.t2a', '.t2b'], clip, .5);

	tlF3.add(mask1, 'mask1');

	tlF3.from('.line', .35, { width: 0 }, 'mask1+=.8');

	tlF3.add('mask1_close', 2.2);
	tlF3.to('.t2', .5, { clip: clip }, 'mask1_close');
	tlF3.to('.line', .4, { width: 0 }, 'mask1_close');

	tlF3.from('.cta', .4, { opacity: 0 }, "+=.3");

	return tlF3;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
