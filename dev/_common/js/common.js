const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut
const tl = new TimelineMax()


function maskBunch(list){
	const tlMask = new TimelineMax()
	list.map(item=>{
		tlMask.from(item, .35, {clip: `rect(0px 46px 1200px 46px)`})	
	})	

	return tlMask
}


function beams_on(beam){	
	const tlBeam = new TimelineMax()
	const list = document.querySelectorAll(beam)
	list.forEach(item=>{		
		tlBeam.from(item, .05, {opacity:0})
	})

	return tlBeam
}

function beams_off(beam){	
	const list = document.querySelectorAll(beam)
	const arr = []
	list.forEach(item=>{		
		arr.push(item)
		
	})

	const tlBeam = new TimelineMax()
	arr.reverse().map(item=>{
		tlBeam.to(item, .02, {opacity:0})
	})

	return tlBeam
}

function dots(){
	const tlDots = new TimelineMax({repeat:1})
	const list = document.querySelectorAll(".dot")
	list.forEach(item=>{
		tlDots.from(item, .05, {opacity:0})
	})

	return tlDots

}

export {size, tl, maskBunch, beams_on, beams_off, dots}