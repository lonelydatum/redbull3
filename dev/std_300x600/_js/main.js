import { tl, maskBunch, beams_on, beams_off, dots } from '../../_common/js/common.js'

function start(){	
	frame2()
	tl.add(frame1())
	tl.to(".beam", .3, {opacity:0})
	tl.add(frame3())
}

function frame1(){
	const tlF1 = new TimelineMax()
	tlF1.set('.frame1', {opacity:1})
	tlF1.add( maskBunch( ['.t1a', '.t1b', '.t1c', '.t1d'] ) )
	tlF1.to('.t1', .35, {clip: `rect(0px 46px 1200px 46px)`}, "+=2")
	return tlF1
}

function frame2(){
	const tlF2 = new TimelineMax({repeat:1})
	tlF2.set('.frame2', {opacity:1})	
	tlF2.add( beams_on(".beam_a") )
	tlF2.add( beams_on(".beam_b") )	
	
	return tlF2	
}



function frame3(){
	const tlF3 = new TimelineMax()
	tlF3.set('.frame3', {opacity:1})
	tlF3.add( dots() )
	
	const mask1 = maskBunch( ['.t2a', '.t2b'] )

	tlF3.add('mask1', .8)
	tlF3.add(mask1, 'mask1')
	

	tlF3.from('.line', .35, {width:0}, 'mask1+=.7')

	tlF3.add('mask1_close', 4)
	tlF3.to('.t2', .35, {clip: `rect(0px 46px 1200px 46px)`}, 'mask1_close')
	tlF3.to('.line', .35, {width:0}, 'mask1_close')


	const mask2 = maskBunch( ['.t3a', '.t3b', '.t3c'] )
	tlF3.add(mask2, 4.5)
	return tlF3
}




start()

module.exports = {};

