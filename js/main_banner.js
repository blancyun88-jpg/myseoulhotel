/*슬라이드*/
var n=0;
     
function view(n){
    //메인이미지
	$("#mainVisual .main_img li").stop().removeClass('on');
    $("#mainVisual .main_img li").eq(n).stop().addClass('on');
};
   
var cnt = 3;/*갯수조절*/
function move(i){
	if(i==1){
    	n++;
	}else{
		n--;	
	}
	
    if(n<0){
        n=cnt-1;					
        view(n);
	}else if(n<cnt) {/*갯수조절*/	
        view(n);
    }else{
        n=0;					
        view(n);
    };
}; 

sTimer1=setInterval("move(1)",5000); 

$(document).ready(function(){
	$('#mainVisual .main_img').stop().delay(0).animate({"opacity":"1","left":"0"},1000);
    $("#main_banner .bg").animate({"right":"50%","opacity":"1"},1000);
    $("#mainVisual").delay(500).animate({"left":"0","opacity":"1"},1000);
	$('#mainVisual .txt_area').delay(1300).animate({"opacity":"1"},1000);
});

