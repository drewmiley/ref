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
    	one: getSelectedValue('one'),
    	two: getSelectedValue('two'),
    	three: getSelectedValue('three'),
    	four: getSelectedValue('four'),
    	five: getSelectedValue('five'),
    	six: getSelectedValue('six')
    }
    selectRef(options);
}