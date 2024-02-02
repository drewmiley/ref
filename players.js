const player = (initial, preferenceBefore, wouldPreferToRef) => ({ initial, preferenceBefore, wouldPreferToRef })

const players = [
	player('DD', false),
	player('DM', false, true),
	player('JC', true),
	player('LW', false),
	player('NA', false),
	player('ND', true, true),
	player('PC', true),
	player('SF', false)
]

console.log(players)