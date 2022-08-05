function runExercice(label, fn) {
	console.time(label);
	const exResult = fn();
	console.timeEnd(label);
	console.log(label, exResult);
}

console.time('npm');

console.log('-----------------\n');
console.timeEnd('npm');