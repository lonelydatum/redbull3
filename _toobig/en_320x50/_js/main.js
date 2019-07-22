import { tl, maskBunch,  cascade, cascade_on } from '../../_common/js/common.js'

const clip = `rect(0px 20px 100px 20px)`

function start(){	
	
	tl.add(frame1())
	
}

function frame1(){
	const tlF1 = new TimelineMax()
	tlF1.set('.frame1', {opacity:1})
	tlF1.add( maskBunch( ['.t1a', '.t1b'], clip, .5 ) )
	// tlF1.to('.t1', .35, {clip: clip}, "+=1.2")
	return tlF1
}


start()

module.exports = {};

