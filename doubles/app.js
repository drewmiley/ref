document.getElementById('run').onclick = () => run();

const getSelectedValue = (id) => {
	const e = document.getElementById(id);
	return e.value;
}

const run = () => {
    console.log('Running');
    const options = {
    	playSix: getSelectedValue('playSix'),
    	refSix: getSelectedValue('refSix'),
    	one: [getSelectedValue('oneOne'), getSelectedValue('oneTwo')],
    	two: [getSelectedValue('twoOne'), getSelectedValue('twoTwo')],
    	three: [getSelectedValue('threeOne'), getSelectedValue('threeTwo')]
    }
    const team = players();
    selectRef(options, team);
}