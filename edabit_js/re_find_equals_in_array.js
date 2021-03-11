function countTrue(arr) {
	return (String(arr).match(/true/g) || []).length;
}

console.log(countTrue([true, true, true]));

console.log(['stas', 'stas', 'stas'].filter((varr) => varr === 'stas').length);
