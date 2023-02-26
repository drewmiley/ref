const getInitialAllocation = initialArray => {
	if (!initialArray.length) return null;
	if (initialArray.length == 1) return initialArray[0].initial;
	if (initialArray.length == 2 && [0, 2].includes(initialArray.filter(player => player.wouldPreferToRef).length)) return Math.random < 0.5 ? initialArray[0].initial : initialArray[1].initial;
	if (initialArray.length > 2 && initialArray.filter(player => player.wouldPreferToRef).length == 1) return initialArray.find(player => player.wouldPreferToRef).initial;
}

const getInitialsNotAllocatedJoinedUnlessPlayingFrame = (notAllocatedInitials, cannotRefInitials) =>
	notAllocatedInitials.filter(initial => !cannotRefInitials.includes(initial)).join('/');

function selectRef({ playSix, refSix, one, two, three }) {
	const playedSix = players.find(player => player.initial == playSix);
	const reffedSix = players.find(player => player.initial == refSix);
	const playing = [
		[players.find(player => player.initial == one[0]), players.find(player => player.initial == one[1])],
		[players.find(player => player.initial == two[0]), players.find(player => player.initial == two[1])],
		[players.find(player => player.initial == three[0]), players.find(player => player.initial == three[1])]
	];

	const wantsToRefOptions = [
		[...playing[1][0].preferenceBefore ? [playing[1][0]] : [], ...playing[1][1].preferenceBefore ? [playing[1][1]] : []],
		[...!playing[0][0].preferenceBefore ? [playing[0][0]] : [], ...!playing[0][1].preferenceBefore ? [playing[0][1]] : [], ...playing[2][0].preferenceBefore ? [playing[2][0]] : [], ...playing[2][1].preferenceBefore ? [playing[2][1]] : []],
		[...!playing[1][0].preferenceBefore ? [playing[1][0]] : [], ...!playing[1][1].preferenceBefore ? [playing[1][1]] : []],
	]

	const cannotRefOptions = [
		[playing[0][0].initial, playing[0][1].initial, ...!playing[1][0].preferenceBefore ? [playing[1][0].initial] : [], ...!playing[1][1].preferenceBefore ? [playing[1][1].initial] : [], ...playedSix.preferenceBefore ? [playedSix.initial] : [], reffedSix.initial],
		[playing[1][0].initial, playing[1][1].initial, ...playing[0][0].preferenceBefore ? [playing[0][0].initial] : [], ...playing[0][1].preferenceBefore ? [playing[0][1].initial] : [], ...!playing[2][0].preferenceBefore ? [playing[2][0].initial] : [], ...!playing[2][1].preferenceBefore ? [playing[2][1].initial] : []],
		[playing[2][0].initial, playing[2][1].initial, ...playing[1][0].preferenceBefore ? [playing[1][0].initial] : [], ...playing[1][1].preferenceBefore ? [playing[1][1].initial] : []]
	]

	const initialAllocation = wantsToRefOptions.map(getInitialAllocation);

	const initialsNotAllocatedFrame = playing.flat().map(player => player.initial).filter(initial => !initialAllocation.includes(initial));

	const fullAllocation = initialAllocation.map((initial, index) =>
		initial ||
		getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, cannotRefOptions[index]) ||
		players.filter(player => !cannotRefOptions[index].includes(player.initial)).map(player => player.initial).join('/')
	);

	document.getElementById('refOne').innerText = fullAllocation[0];
	document.getElementById('refTwo').innerText = fullAllocation[1];
	document.getElementById('refThree').innerText = fullAllocation[2];
	console.log('Done')
}