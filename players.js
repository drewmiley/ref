const player = (initial, preferenceBefore, wouldPreferToRef) => ({ initial, preferenceBefore, wouldPreferToRef })

const players = [
	player('DD', false),
	player('DM', false, true),
	player('JC', true),
	player('JK', false),
	player('MS', true),
	player('NA', false),
	player('ND', true, true),
	player('PC', true),
	player('SC', true)
]

console.log(players)