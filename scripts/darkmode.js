const checkbox = document.getElementById('checkbox');
		
		checkbox.addEventListener('change', ()=>{
		document.body.classList.toggle('dark');
		})
		
		function play() {var audio = document.getElementById("audio"); audio.play();
		}
