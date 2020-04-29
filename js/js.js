			var currentImg = 0;
			var imgItems = document.querySelectorAll('.imgItem');
			console.log(imgItems);
			var next = document.querySelector('.btn.next');
			var pre = document.querySelector('.btn.pre');
			
			next.onclick = function(){
				currentImg++;
				if(currentImg>=imgItems.length){
					currentImg = 0;
				}
				changeImg();
			}
			pre.onclick = function(){
				currentImg--;
				if(currentImg<0){
					currentImg = imgItems.length-1
				}
				changeImg();
			}
			var circleBtns = document.querySelectorAll('.circleBtn');
			circleBtns.forEach(function(btn,i){
				btn.onclick = function(){
					currentImg =parseInt(btn.id[1]);
					changeImg();
				}
			})
			var texts = document.querySelectorAll('.text')
			function changeImg(){
				imgItems.forEach(function(item,i){
					item.classList.remove('active')
				})
				circleBtns.forEach(function(btn,i){
					btn.classList.remove('activec')
				})
				texts.forEach(function(txt,i){
					txt.classList.remove('activet')
				})
				imgItems[currentImg].classList.add('active')
				circleBtns[currentImg].classList.add('activec')
				texts[currentImg].classList.add('activet')
			}