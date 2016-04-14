$("#div1").on('click',function(){
	alert("asdads");
})

class fly{
	constructor(){}
			gogo(){
				$("#touch_me").on('mouseover',function(event) {
					$(".dialog").css('display','block');
				})
				$("#touch_me").on('mouseout',function(event) {
					$(".dialog").css('display','none');
				})
				return this
			}
			arrt(arr){  
				var arr2 = arr;
				arr2.forEach(function (item, index, array) {
				  console.log(item, index);
				});
				return this
			}
		}
var arr = ['aa','bb','cc','dd','ee','ff','gg',]
new fly().gogo()
		.arrt(arr);