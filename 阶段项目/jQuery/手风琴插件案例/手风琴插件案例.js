$.fn.accordion = function(colors , width){
    /*如果有参数就用参数，如果没有参数那就用自己默认的colors和width，非常的灵活*/
    var colors = colors || [];
    var width = width || 0;
    /*var $li = $("#box li");*/
    var $li = this.find("li");/*这样就保证了在以后不管是谁调用它，不一定是#box，就算是别人也能找到下面的li，因为我用的是this*/
    var boxLength = this.width();
    var maxLength = boxLength - ($li.length - 1) * width;
    var avgLength = boxLength/$li.length;
    $li.each(function(i , e){
        $(e).css("backgroundColor" , colors[i]);
    })
    $li.on("mouseenter" , function(){
        $(this).stop().animate({width:maxLength}).siblings().stop().animate({width:width});
    })
    $("#box").on("mouseleave" , function(){
        $li.stop().animate({width:avgLength});
    })
}/*然后将它存入一个js文件中，就可以随时调用了*/