function selectRef({ playedSix, refSix, one, two, three }) {
	console.log(players);
	const playedSixPlayer = players.find(player => player.initial == playedSix);
	const refSixPlayer = players.find(player => player.initial == refSix);
	const onePlayers = [players.find(player => player.initial == one[0]), players.find(player => player.initial == one[1])];
	const twoPlayers = [players.find(player => player.initial == two[0]), players.find(player => player.initial == two[1])];
	const threePlayers = [players.find(player => player.initial == three[0]), players.find(player => player.initial == three[1])];
	document.getElementById('refOne').innerText = 'ONE';
	document.getElementById('refTwo').innerText = 'TWO';
	document.getElementById('refThree').innerText = 'THREE';
	console.log('Done');
}