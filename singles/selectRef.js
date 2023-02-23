const getInitialAllocation = initialArray => {
	if (!initialArray.length) return null;
	if (initialArray.length == 1) return initialArray[0];
	if (initialArray.length == 2) return Math.random < 0.5 ? initialArray[0] : initialArray[1];
}

const getInitialsNotAllocatedJoinedUnlessPlayingFrame = (notAllocatedInitials, cannotRefInitials) =>
	notAllocatedInitials.filter(initial => !cannotRefInitials.includes(initial)).join('/');

function selectRef({ one, two, three, four, five, six }) {
	const playing = [
		players.find(player => player.initial == one),
		players.find(player => player.initial == two),
		players.find(player => player.initial == three),
		players.find(player => player.initial == four),
		players.find(player => player.initial == five),
		players.find(player => player.initial == six)
	];

	const wantsToRefOptions = [
		[...playing[1].preferenceBefore ? [playing[1].initial] : []],
		[...!playing[0].preferenceBefore ? [playing[0].initial] : [], ...playing[2].preferenceBefore ? [playing[2].initial] : []],
		[...!playing[1].preferenceBefore ? [playing[1].initial] : [], ...playing[3].preferenceBefore ? [playing[3].initial] : []],
		[...!playing[2].preferenceBefore ? [playing[2].initial] : [], ...playing[4].preferenceBefore ? [playing[4].initial] : []],
		[...!playing[3].preferenceBefore ? [playing[3].initial] : [], ...playing[5].preferenceBefore ? [playing[5].initial] : []],
		[...!playing[4].preferenceBefore ? [playing[4].initial] : []]
	];

	const cannotRefOptions = [
		[playing[0].initial, ...!playing[1].preferenceBefore ? [playing[1].initial] : []],
		[playing[1].initial, ...playing[0].preferenceBefore ? [playing[0].initial] : [], ...!playing[2].preferenceBefore ? [playing[2].initial] : []],
		[playing[2].initial, ...playing[1].preferenceBefore ? [playing[1].initial] : [], ...!playing[3].preferenceBefore ? [playing[3].initial] : []],
		[playing[3].initial, ...playing[2].preferenceBefore ? [playing[2].initial] : [], ...!playing[4].preferenceBefore ? [playing[4].initial] : []],
		[playing[4].initial, ...playing[3].preferenceBefore ? [playing[3].initial] : [], ...!playing[5].preferenceBefore ? [playing[5].initial] : []],
		[playing[5].initial, ...playing[4].preferenceBefore ? [playing[4].initial] : []]
	]

	const initialAllocation = wantsToRefOptions.map(getInitialAllocation);

	const initialsNotAllocatedFrame = playing.map(player => player.initial).filter(initial => !initialAllocation.includes(initial));

	const fullAllocation = initialAllocation.map((initial, index) => initial || getInitialsNotAllocatedJoinedUnlessPlayingFrame(initialsNotAllocatedFrame, cannotRefOptions[index]));

	document.getElementById('refOne').innerText = fullAllocation[0] || 'Random';
	document.getElementById('refTwo').innerText = fullAllocation[1] || 'Random';
	document.getElementById('refThree').innerText = fullAllocation[2] || 'Random';
	document.getElementById('refFour').innerText = fullAllocation[3] || 'Random';
	document.getElementById('refFive').innerText = fullAllocation[4] || 'Random';
	document.getElementById('refSix').innerText = fullAllocation[5] || 'Random';
	console.log('Done')
}