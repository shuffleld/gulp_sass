window.onload = function(){

	var oDiv = document.getElementById('div1');
	var iTimer = null;
	var b = 0;

	setTop();

	window.onscroll = function(){

		if (b != 1) {
			clearInterval(iTimer)
		}
		b = 3
		//设置中途停止，因为正常是定时器执行一次，滚动条动一次就会触发一次这个事件，所以不断地有规律的执行，但是当人工拖动滚动条就会打破规律借此实现中途停止

		setTop();
	}

	oDiv.onclick = function(){

		clearInterval(iTimer)

		var iCur = iSpeed = 0;

		iTimer = setInterval(function(){

			iCur = document.documentElement.scrollTop || document.body.scrollTop;
			//设置当前位置

			iSpeed = Math.floor((0 - iCur) / 8);

			if (iCur == 0) {
				clearInterval(iTimer);
				//到达顶部
			}else{
				document.documentElement.scrollTop = document.body.scrollTop = iCur + iSpeed;
			}
			b = 1;
		},30)

	}

	function setTop(){

		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		oDiv.style.top = scrollTop + document.documentElement.clientHeight - oDiv.offsetHeight + 'px';
		//元素的top值等于当前可视区顶部距离页面顶部的距离+可视区的高度再减去自身的高度，正好在底部

	}
}