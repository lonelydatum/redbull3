import { tl, maskBunch,  cascade, cascade_on } from '../../_common/js/common.js'

const clip = `rect(0px 46px 1200px 46px)`

function start(){	
	beamsPlay()
	tl.add(frame1())
	tl.to(".frame2", .3, {opacity:0})
	tl.add(frame3())
}

function frame1(){
	const tlF1 = new TimelineMax()
	tlF1.set('.frame1', {opacity:1})
	tlF1.add( maskBunch( ['.t1a', '.t1b', '.t1c', '.t1d'], clip ) )
	tlF1.to('.t1', .35, {clip: `rect(0px 46px 1200px 46px)`}, "+=2")
	return tlF1
}

function beamsPlay(){
	const tlF2 = new TimelineMax()
	tl.set('.frame2', {opacity:1})	
	tlF2.add( cascade(".beam_a", 5) )
	tlF2.add( cascade(".beam_b", 5), .7 )	
	return tlF2	
}



function frame3(){
	const tlF3 = new TimelineMax()
	tlF3.set('.frame3', {opacity:1})
	tlF3.add( cascade(".dot.blue") )
	tlF3.add( cascade(".dot.red"), .35 )
	tlF3.add( cascade_on(".dot.blue") )
	tlF3.add( cascade_on(".dot.red") )
	
	
	const mask1 = maskBunch( ['.t2a', '.t2b'], clip )

	tlF3.add('mask1', .8)
	tlF3.add(mask1, 'mask1')
	

	tlF3.from('.line', .35, {width:0}, 'mask1+=.7')

	tlF3.add('mask1_close', 4)
	tlF3.to('.t2', .35, {clip: `rect(0px 46px 1200px 46px)`}, 'mask1_close')
	tlF3.to('.line', .35, {width:0}, 'mask1_close')


	const mask2 = maskBunch( ['.t3a', '.t3b', '.t3c'], clip )
	tlF3.add(mask2, 4.5)
	return tlF3
}




start()

module.exports = {};

