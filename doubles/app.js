document.getElementById('run').onclick = () => run();

// TODO: getSelectedValue
const getSelectedValue = () => {
	return '';
}
// const getCheckedValue = (checkedValue) =>
//     [...document.getElementById(checkedValue).children]
//         .find(d => d.checked)
//         .id
//         .replace(checkedValue, '');

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