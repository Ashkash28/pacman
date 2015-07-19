pacman&world.jsvar myAudio = new Audio('./SFX_Pacman/Pacman Waka Waka.mp3');
			var myAudio2 = new Audio('./SFX_Pacman/Pacman Eating Cherry.mp3');
			var myAudio3 = new Audio('./SFX_Pacman/Pacman Dies.mp3');
			
			var score = 0;
			var direction = "pacman";
			var lives = 1;

			var pacman = {
				x: 1,
				y: 1
			}
			var ghost = {
				x: 4,
				y: 5
			}

			var world = [
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 3, 3, 1, 1, 1, 1, 1, 0, 0,
				0, 0, 0, 3, 3, 0, 0, 3, 0, 0,
				0, 3, 3, 3, 3, 0, 0, 3, 0, 0,
				0, 3, 3, 2, 2, 2, 2, 3, 0, 0,
				0, 3, 3, 3, 3, 4, 3, 3, 0, 0,
				0, 3, 3, 0, 0, 0, 3, 0, 0, 0,
				0, 3, 3, 0, 0, 0, 3, 0, 0, 0,
				0, 3, 3, 3, 3, 3, 3, 3, 0, 0,
				0, 3, 0, 0, 0, 0, 0, 3, 0, 0,
				0, 3, 3, 3, 3, 3, 3, 3, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				
				];

			document.getElementById("score").innerHTML = "<h1>Score</h1>" + "<h3>" + score + "</h3>";

			document.getElementById("life_board").innerHTML = "<h1>Lives</h1>" + "<h3>" + lives;

			function restart()
			{
				// console.log('pacman restart', pacman.x, pacman.y);
				// console.log('ghost restart', ghost.x, ghost.y);
				direction = "pacman";
				score = 0;
				world = [
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 3, 3, 1, 1, 1, 1, 1, 0, 0,
								0, 0, 0, 3, 3, 0, 0, 3, 0, 0,
								0, 3, 3, 3, 3, 0, 0, 3, 0, 0,
								0, 3, 3, 2, 2, 2, 2, 3, 0, 0,
								0, 3, 3, 3, 3, 4, 3, 3, 0, 0,
								0, 3, 3, 0, 0, 0, 3, 0, 0, 0,
								0, 3, 3, 0, 0, 0, 3, 0, 0, 0,
								0, 3, 3, 3, 3, 3, 3, 3, 0, 0,
								0, 3, 0, 0, 0, 0, 0, 3, 0, 0,
								0, 3, 3, 3, 3, 3, 3, 3, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
								
								];
				pacman = {
					x: 1,
					y: 1
				}

				lives = 1;
				document.getElementById("life_board").innerHTML = "<h1>Lives</h1>" + "<h3>" + lives + "</h3><button onclick='killzone()'>KillZone</button>"
				document.getElementById("score").innerHTML = "<h1>Score</h1>" + "<h3>" + score + "</h3>";
				draw_world();
				draw_ghost();
				draw_pacman(direction);
				// ghost_move();

			}


			function draw_world()
			{
				document.getElementById("world").innerHTML = "";
				for(var i = 0; i < world.length; i++)
				{
					if(world[i] === 0){
						// brick
						document.getElementById("world").innerHTML = 
							document.getElementById("world").innerHTML +
							"<div class='brick' style='top:" + Math.floor(i/10) * 32 + "px;left:" + (i%10) * 32 + "px'></div>";

					}
					else if(world[i] === 1){
						// coin
						document.getElementById("world").innerHTML = 
							document.getElementById("world").innerHTML +
							"<div class='coin' style='top:" + Math.floor(i/10) * 32 + "px;left:" + (i%10) * 32 + "px'></div>";
						
					}
					else if(world[i] === 2){
						// cherry
						document.getElementById("world").innerHTML = 
							document.getElementById("world").innerHTML +
							"<div class='cherry' style='top:" + Math.floor(i/10) * 32 + "px;left:" + (i%10) * 32 + "px'></div>";
					}
		
					else{

					}
				}
			}

			function draw_pacman(direction){
				
					document.getElementById("world").innerHTML = 
						document.getElementById("world").innerHTML +
						"<div class='"+ direction +"' style='top:" + pacman.y * 32 + "px;left:" + pacman.x * 32 + "px'></div>";

			}

			function draw_ghost(){

				document.getElementById("world").innerHTML = 
					document.getElementById("world").innerHTML +
					"<div class='ghost' style='top:" + ghost.y * 32 + "px;left:" + ghost.x * 32 + "px'></div>";
			}


//cardinal move the pacman
			function pmove_right(){
				pacman.x = pacman.x + 1;
			}
			function pmove_left(){
				pacman.x = pacman.x - 1;
			}
			function pmove_up(){
				pacman.y = pacman.y - 1;
			}
			function pmove_down(){
				pacman.y = pacman.y + 1;
			}

//CHANGES DIRECTION OF PACMAN MOVEMENT		
			document.onkeydown = function(e)
			{
				// console.log(e);
				if(e.keyCode == 65 && world[((pacman.y*10) + pacman.x) - 1] != 0)
				{
					direction = 'left';
				}
				// right
				else if(e.keyCode == 68 && world[((pacman.y*10) + pacman.x) + 1] != 0)
				{
						direction = 'right';
				}
				// up
				else if(e.keyCode == 87 && world[((pacman.y*10) + pacman.x) - 10] != 0)
				{
						direction = 'up';
				}
				// down
				else if(e.keyCode == 83 && world[((pacman.y*10) + pacman.x) + 10] != 0)
				{

						direction = 'down';
				}


					draw_world();
					draw_ghost();
					draw_pacman(direction);
					console.log('pacman location', pacman.x, pacman.y);
			}

		
//MOVES PACMAN
			setInterval(function(){
				if(direction == "right" && world[((pacman.y*10) + pacman.x) + 1] != 0)
				{
					pacman.x = pacman.x + 1;
				}
				else if(direction == "left" && world[((pacman.y*10) + pacman.x) - 1] != 0)
				{
					pacman.x = pacman.x - 1;
				}
				else if(direction == "up" && world[((pacman.y*10) + pacman.x) - 10] != 0)
				{
					pacman.y = pacman.y - 1;
				}
				else if(direction == "down" && world[((pacman.y*10) + pacman.x) + 10] != 0)
				{
					pacman.y = pacman.y + 1;
				}
				if(world[((pacman.y*10) + pacman.x)] == 1)
				{
					
					myAudio.play();

					world[((pacman.y*10) + pacman.x)] = 3;
					score = score + 10;
					document.getElementById("score").innerHTML = "<h1>Score</h1>" + "<h3>" + score + "</h3>";
				}
				else if(world[((pacman.y*10) + pacman.x)] == 2)
				{
				
					myAudio2.play();
					world[((pacman.y*10) + pacman.x)] = 3;
					score = score + 50;
					document.getElementById("score").innerHTML = "<h1>Score</h1>" + "<h3>" + score + "</h3>";
				}
				else if(pacman.x === ghost.x && pacman.y === ghost.y)
				{

					myAudio3.play();
					restart();
				}
				draw_world();
				draw_ghost();
				draw_pacman(direction);


			}, 300)

			draw_world();
			draw_ghost();
			draw_pacman(direction);
			ghost_move();
