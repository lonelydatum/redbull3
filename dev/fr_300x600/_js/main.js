import { tl, maskBunch,  cascade, cascade_on } from '../../_common/js/common.js'

const clip = `rect(0px 30px 1200px 30px)`

function start(){	
	const {tlF3, tlFlashyStuff} = frame3()
	beamsPlay()
	tl.add(frame1())
	tl.to(".frame2", .3, {opacity:0})
	tl.add("f3")
	tl.add(tlFlashyStuff, "f3")
	tl.add(tlF3, "f3")
}

function frame1(){
	const tlF1 = new TimelineMax()
	tlF1.set('.frame1', {opacity:1})
	tlF1.add( maskBunch( ['.t1a', '.t1b', '.t1c', '.t1d', '.t1e'], clip ) )
	tlF1.to('.t1', .35, {clip: `rect(0px 46px 1200px 46px)`}, "+=1.2")
	return tlF1
}

function beamsPlay(){
	const tlF2 = new TimelineMax()
	tl.set('.frame2', {opacity:1})	
	tlF2.add( cascade(".beam_a", 5) )
	tlF2.add( cascade(".beam_b", 5), .3 )	
	return tlF2	
}





function frame3(){
	const tlF3 = new TimelineMax()

	const tlFlashyStuff = new TimelineMax()




	
	tlF3.set('.frame3', {opacity:1})

	const tlDots = new TimelineMax()	
	tlDots.add( cascade(".dot.blue", 3) )
	tlDots.add( cascade(".dot.red", 3), .25 )
	tlFlashyStuff.add(tlDots)
	

	const tlRings = new TimelineMax()
	tlRings.add( cascade(".ring.red", 2) )
	tlRings.add( cascade(".ring.blue", 2), .2 )
	tlRings.add( cascade_on(".ring.red") )
	tlRings.add( cascade_on(".ring.blue") )

	tlFlashyStuff.add(tlRings)

	
	
	const mask1 = maskBunch( ['.t2a', '.t2b'], clip )

	tlF3.add('mask1', .5)
	tlF3.add(mask1, 'mask1')
	

	tlF3.from('.line', .35, {width:0}, 'mask1+=.7')

	tlF3.add('mask1_close', "+=2")
	tlF3.to('.t2', .35, {clip: `rect(0px 46px 1200px 46px)`}, 'mask1_close')
	tlF3.to('.line', .35, {width:0}, 'mask1_close')


	

	tlF3.from('.cta', .3, {opacity:0})
	return {tlF3, tlFlashyStuff}
}




start()

module.exports = {};

