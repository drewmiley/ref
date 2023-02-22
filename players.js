const player = (initial, preferenceBefore) => ({ initial, preferenceBefore })

const players = [
	player('DD', false),
	player('DM', false),
	player('JC', true),
	player('JK', false),
	player('ND', true),
	player('PC', true),
	// TODO: Need values for these two
	player('MS', undefined),
	player('SC', undefined)
]

console.log(players)