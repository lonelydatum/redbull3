import { tl, maskBunch,  cascade, cascade_on } from '../../_common/js/common.js'

const clip = `rect(0px 250px 180px 250px)`

function start(){	
	beamsPlay()
	tl.add(frame1())
	tl.add(frame2())
	// tl.to(".frame2", .3, {opacity:0})
	// tl.add(frame3())
}

function frame1(){
	const tlF1 = new TimelineMax()
	tlF1.set('.frame1', {opacity:1})
	tlF1.add( maskBunch( ['.t1a', '.t1b'], clip, .4 ) )
	tlF1.to('.t1', .35, {clip: clip}, "+=1.2")
	return tlF1
}

function beamsPlay(){
	const tlF2 = new TimelineMax()
	tl.set('.frame2', {opacity:1})	
	tlF2.add( cascade(".beam_a", 4) )
	tlF2.add( cascade(".beam_b", 4), .3 )	

	tlF2.add( cascade_on(".beam_a") )
	tlF2.add( cascade_on(".beam_b") )
	return tlF2	
}



function frame2(){
	const tlF3 = new TimelineMax()
	tlF3.set('.frame2', {opacity:1})
	
	
	const mask1 = maskBunch( ['.t2a', '.t2b'], clip, .5 )

	
	tlF3.add(mask1, 'mask1')

	

	tlF3.from('.line', .35, {width:0}, 'mask1+=.8')

	tlF3.add('mask1_close', 2.2)
	tlF3.to('.t2', .5, {clip: clip}, 'mask1_close')
	tlF3.to('.line', .5, {width:0}, 'mask1_close')


	
	
	tlF3.from('.cta', .4, {opacity:0}, "+=.3")


	return tlF3
}




start()

module.exports = {};

