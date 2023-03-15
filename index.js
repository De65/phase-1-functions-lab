function distanceFromHqInBlocks (distance){
	const Hq = 42
	return Math.abs(distance - Hq)
}
function distanceFromHqInFeet (distance){
	const distaInBlocks = distanceFromHqInBlocks(distance)
	const feetBlock = 264
	return distaInBlocks * feetBlock
}
function distanceTravelledInFeet (start, destination){
	const distaInBlocks = Math.abs(destination - start)
	const feetBlock = 264
	const distInFeet = distaInBlocks * feetBlock
	return distInFeet 
}
function calculatesFarePrice(start,destination) {
	const distance = distanceTravelledInFeet(start,destination)
	if (distance < 400) {
		return 0;
	}
	else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * .02;
	}
	else if (distance > 2000 && distance < 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
}

