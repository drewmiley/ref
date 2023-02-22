function selectRef({ one, two, three, four, five, six }) {
	console.log(players);
	const onePlayer = players.find(player => player.initial == one);
	const twoPlayer = players.find(player => player.initial == two);
	const threePlayer = players.find(player => player.initial == three);
	const fourPlayer = players.find(player => player.initial == four);
	const fivePlayer = players.find(player => player.initial == five);
	const sixPlayer = players.find(player => player.initial == six);
	document.getElementById('refOne').innerText = 'ONE';
	document.getElementById('refTwo').innerText = 'TWO';
	document.getElementById('refThree').innerText = 'THREE';
	document.getElementById('refFour').innerText = 'FOUR';
	document.getElementById('refFive').innerText = 'FIVE';
	document.getElementById('refSix').innerText = 'SIX';
	console.log('Done')
}