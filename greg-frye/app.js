
// Create a villian and a Super Hero
// add properties to both swayze and villian to give them hit points

// const adventurer = {
// 	name: 'Patrick Swayze',
// 	shirt: 'black',
// 	pants: 'blue',
// 	hair: 'mullet',
// 	hitPoints: 100,
// 	// we want to decrease the hit points of ogre when he is hit
// 	fightMe: function(){
// 		adventurer.hitPoints -= 20;
// 	console.log(`pain dont hurt ${adventurer.name} throat rip ${ogre.name} and ${ogre.name} has ${ogre.hitPoints}
// 	left`);

// 	}
// }


// 	const Ogre = {
// 	name: 'Brad Wesely',
// 	type: 'bad',
// 	hair: 'grey',
// 	age: 'old',
// 	hitPoints:100,
// 	// // we want to decrease the hit points of adventurer when he is hit
// 	fightBack: function(){
// 	console.log(`ahhh! ${ogre.name} slap ${adventurer.name} and ${adventurer.name} has ${adventurer.hitPoints}
// 	left`);
	
// 	}

const ogre = {
	hitpoints: 100,
	name: 'oof',
	attack: function() {
		// hurt the adventurer
 attackPower = Math.floor((Math.random() * 20) +1)
		console.log(attackPower);
		//  generate random value

		// reduce advs hit by that value
		adventurer.hitpoints -= attackPower;
		console.log("Ogre attacks!!! Adventurer is " +attackPower + "weaker and has" + adventurerhitpoints +"")
	}



} 
const adventurer = {
	name:'reuben',
	hitpoints: 100,
	attackPower: 10,
	attack: function(){
		// reduce the hitpoints by attack power
		ogre.hitpoints -= 10; 
		// say what happened

}
}
adventurer.attack();
console.log(ogre);
console.log(adventurer);
// make the rounds happen automaticlly 
// 



while(ogre.hitpoints > 0 && adventurer.hitpoints > 0){

// while ogre is not dead and adv is not dead 
// o atacks a
ogre.attack();
// check to see if adv is dead
if(adventurer.hitpoints > 0){
// adv attack ogre
adventurer.attack()
// check if ogre is dead
}

}










