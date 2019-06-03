define(['dataService','jquery'] , function(dataService , $){
	function getdata(){
		console.log('alert',dataService.getName());
		$('body').css('background' , 'pink');
	}
	return {getdata};
})