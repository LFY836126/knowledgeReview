define(function(require, exports, module){
	let module2 = require('./module2');
	module2();
	require.async('./module3' , function(module3){
		module3.module3.fun();
	});
	function fun2(){
		console.log('4');
	}
	exports.fun2 = fun2;
})