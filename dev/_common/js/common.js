const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut
const tl = new TimelineMax()


function maskBunch(list, clip){
	const tlMask = new TimelineMax()
	list.map(item=>{
		tlMask.from(item, .35, {clip})	
	})
	return tlMask
}


const BEAM_TIME = .065

function cascade(className, repeat=4){
	const tlDots = new TimelineMax({repeat})
	tlDots.add( cascade_on(className) )
	tlDots.add( cascade_off(className) )
	return tlDots
}

function cascade_on(className){
	const tlDots = new TimelineMax()
	const blues = document.querySelectorAll(className)
	blues.forEach(item=>{
		tlDots.fromTo(item, BEAM_TIME, {opacity:0}, {opacity:1})
	})
	return tlDots
}

function cascade_off(className){
	const tlDots = new TimelineMax()
	const blues = document.querySelectorAll(className)
	blues.forEach(item=>{
		tlDots.to(item, BEAM_TIME, {opacity:0})
	})
	return tlDots
}



export {size, tl, maskBunch, cascade, cascade_on}








