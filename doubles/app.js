document.getElementById('run').onclick = () => run();

const getSelectedValue = (id) => {
	val e = document.getElementById(id);
	return e.value;
}

const run = () => {
    console.log('Running');
    const options = {
    	playedSix: getSelectedValue('playedSix'),
    	refSix: getSelectedValue('refSix'),
    	one: [getSelectedValue('oneOne'), getSelectedValue('oneTwo')],
    	two: [getSelectedValue('twoOne'), getSelectedValue('twoTwo')],
    	three: [getSelectedValue('threeOne'), getSelectedValue('threeTwo')]
    }
    selectRef(options);
}