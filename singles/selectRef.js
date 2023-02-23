const getInitialAllocation = initialArray => {
	if (!initialArray.length) return null;
	if (initialArray.length == 1) return initialArray[0];
	if (initialArray.length == 2) return Math.random < 0.5 ? initialArray[0] : initialArray[1];
}

const getInitialsNotAllocatedJoinedUnlessPlayingFrame = (notAllocatedInitials, playingInitials) => {
	return notAllocatedInitials.filter(initial => initial !== playingInitials).join('/');
}

function selectRef({ one, two, three, four, five, six }) {
	const onePlayer = players.find(player => player.initial == one);
	const twoPlayer = players.find(player => player.initial == two);
	const threePlayer = players.find(player => player.initial == three);
	const fourPlayer = players.find(player => player.initial == four);
	const fivePlayer = players.find(player => player.initial == five);
	const sixPlayer = players.find(player => player.initial == six);

	const oneOptions = [...twoPlayer.preferenceBefore ? [twoPlayer.initial] : []];
	const twoOptions = [...!onePlayer.preferenceBefore ? [onePlayer.initial] : [], ...threePlayer.preferenceBefore ? [threePlayer.initial] : []];
	const threeOptions = [...!twoPlayer.preferenceBefore ? [twoPlayer.initial] : [], ...fourPlayer.preferenceBefore ? [fourPlayer.initial] : []];
	const fourOptions = [...!threePlayer.preferenceBefore ? [threePlayer.initial] : [], ...fivePlayer.preferenceBefore ? [fivePlayer.initial] : []];
	const fiveOptions = [...!fourPlayer.preferenceBefore ? [fourPlayer.initial] : [], ...sixPlayer.preferenceBefore ? [sixPlayer.initial] : []];
	const sixOptions = [...!fivePlayer.preferenceBefore ? [fivePlayer.initial] : []];

	const playerInitials = [one, two, three, four, five, six];
	const initialAllocation = [
		getInitialAllocation(oneOptions),
		getInitialAllocation(twoOptions),
		getInitialAllocation(threeOptions),
		getInitialAllocation(fourOptions),
		getInitialAllocation(fiveOptions),
		getInitialAllocation(sixOptions)
	];

	const initialsNotAllocatedFrame = playerInitials.filter(initial => !initialAllocation.includes(initial));

	const fullAllocation = [
		initialAllocation[0] || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, onePlayer.initial),
		initialAllocation[1] || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, twoPlayer.initial),
		initialAllocation[2] || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, threePlayer.initial),
		initialAllocation[3] || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, fourPlayer.initial),
		initialAllocation[4] || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, fivePlayer.initial),
		initialAllocation[5] || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, sixPlayer.initial)
	];

	document.getElementById('refOne').innerText = fullAllocation[0];
	document.getElementById('refTwo').innerText = fullAllocation[1];
	document.getElementById('refThree').innerText = fullAllocation[2];
	document.getElementById('refFour').innerText = fullAllocation[3];
	document.getElementById('refFive').innerText = fullAllocation[4];
	document.getElementById('refSix').innerText = fullAllocation[5];
	console.log('Done')
}