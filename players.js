const player = (initial, preferenceBefore, wouldPreferToRef) => ({ initial, preferenceBefore, wouldPreferToRef })

const players = [
	player('DD', false),
	player('DM', false, true),
	player('JC', true),
	player('JK', false),
	player('ND', true, true),
	player('PC', true),
	// TODO: Need values for these two
	player('MS', undefined),
	player('SC', undefined)
]

console.log(players)