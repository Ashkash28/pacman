//cardinal move the ghost
var prev_x,
	prev_y;
			function move_right(){
				prev_x = ghost.x;
				// prev_y = ghost.y;
				ghost.x = ghost.x + 1;

			}
			function move_left(){
				prev_x = ghost.x;
				// prev_y = ghost.y;
				ghost.x = ghost.x - 1;
			}
			function move_up(){
				// prev_x = ghost.x;
				prev_y = ghost.y;
				ghost.y = ghost.y - 1;
			}
			function move_down(){
				// prev_x = ghost.x;
				prev_y = ghost.y;
				ghost.y = ghost.y + 1;
			}


//moving the ghost
			function ghost_move()
			{
				var number = Math.floor(Math.random() * 3) - 1;
				// console.log("set interval");
				setInterval(
					function()
					{
						var quarter = Math.floor(Math.random() * 4);
						// console.log('gos loc', ghost.x, ghost.y);
						// console.log('prev loc', prev_x, prev_y);
						// var location = 
//no wall around

						if(world[((ghost.y*10) + ghost.x) + 1] != 0 
							&& world[((ghost.y*10) + ghost.x) - 1] != 0 
							&& world[((ghost.y*10) + ghost.x) - 10] != 0 
							&& world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							if(quarter == 0)
							{
								// if(move_right() !== prev_x)
								// {
									move_right();
								// }
							} 
							else if( quarter == 1)
							{
								// if(move_down() !== prev_y){
									move_down();
								// }
								
							}
							else if(quarter == 2)
							{
								// if(move_left() !== prev_x){
									move_left();
								// }
							}
							else if(quarter == 3)
							{
								// if(move_up() !== prev_y)
								// {
									move_up();
								// }
							}
						}

// //move up the left pipe
						else if(world[((ghost.y*10) + ghost.x) + 1] == 0 && world[((ghost.y*10) + ghost.x) - 1] == 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] != 0 && world[((ghost.y*10) + ghost.x) + 30] == null &&  world[((ghost.y*10) + ghost.x) - 20] != 0)
						{
							if(quarter == 0 || quarter == 1)
							{
								move_down();
							} 
							else if( quarter == 2 || quarter == 3)
							{
								move_up();
							}
						}
//first pipe line travel down
						else if(world[((ghost.y*10) + ghost.x) + 1] == 0 && world[((ghost.y*10) + ghost.x) - 1] == 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							if(quarter == 0 || quarter == 1)
							{
								move_down();
							} 
							else if( quarter == 2 || quarter == 3)
							{
								move_up();
							}
						}
//wall on bottom
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] != 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] == 0   )
						{
							if(quarter == 0)
							{
								move_right();
							} 
							else if( quarter == 1)
							{
								move_right();
							}
							else if(quarter == 2)
							{
								move_left();
							}
							else if(quarter == 3)
							{
								move_up();
							}
						}
//wall on right
						else if(world[((ghost.y*10) + ghost.x) + 1] == 0 && world[((ghost.y*10) + ghost.x) - 1] != 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							
							if( quarter == 1 || quarter == 0)
							{
								move_down();
							}
							else if(quarter == 2)
							{
								move_left();
							}
							else if(quarter == 3)
							{
								move_up();
							}
						}
//wall on right and on top
						else if(world[((ghost.y*10) + ghost.x) + 1] == 0 && world[((ghost.y*10) + ghost.x) - 1] != 0 && world[((ghost.y*10) + ghost.x) - 10] == 0 && world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							if(quarter == 0 || 1)
							{
								move_down();
							} 
							else if( quarter == 2 || quarter == 3)
							{
								move_left();
							}
						}
//wall on right and below
						else if(world[((ghost.y*10) + ghost.x) + 1] == 0 && world[((ghost.y*10) + ghost.x) - 1] != 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] == 0   )
						{
							
							if( quarter == 1 || quarter == 0)
							{
								move_left();
							}
							else if(quarter == 2 || quarter == 3)
							{
								move_up();
							}
						}						
//wall on top
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] != 0 && world[((ghost.y*10) + ghost.x) - 10] == 0 && world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							if(quarter == 0)
							{
								move_right();
							} 
							else if( quarter == 1)
							{
								move_left();
							}
							else if(quarter == 2)
							{
								move_left();
							}
							else if(quarter == 3)
							{
								move_down();
							}
						}
//wall on left
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] == 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							
							if( quarter == 1 || quarter == 0)
							{
								move_down();
							}
							else if(quarter == 2)
							{
								move_right();
							}
							else if(quarter == 3)
							{
								move_up();
							}
						}
//wall on left and below
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] == 0 && world[((ghost.y*10) + ghost.x) - 10] != 0 && world[((ghost.y*10) + ghost.x) + 10] == 0   )
						{
							
							if( quarter == 1 || quarter == 0)
							{
								move_right();
							}
							else if(quarter == 2 || quarter == 3)
							{
								move_up();
							}
						}
//wall on left and top
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] == 0 && world[((ghost.y*10) + ghost.x) - 10] == 0 && world[((ghost.y*10) + ghost.x) + 10] != 0   )
						{
							
							if( quarter == 1 || quarter == 0)
							{
								move_right();
							}
							else if(quarter == 2 || quarter == 3)
							{
								move_down();
							}
						}
//wall on top and below
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] != 0 && world[((ghost.y*10) + ghost.x) - 10] == 0 && world[((ghost.y*10) + ghost.x) + 10] == 0   )
						{
							
							if( quarter == 1 || quarter == 0)
							{
								move_right();
							}
							else if(quarter == 2 || quarter == 3)
							{
								move_left();
							}
						}
//wall on left, top, and below
						else if(world[((ghost.y*10) + ghost.x) + 1] != 0 && world[((ghost.y*10) + ghost.x) - 1] == 0 && world[((ghost.y*10) + ghost.x) - 10] == 0 && world[((ghost.y*10) + ghost.x) + 10] == 0   )
						{
								move_right();
						}

						if(ghost.x === pacman.x && ghost.y === pacman.y)
						{
							restart();
						}
					
							draw_world();
							draw_pacman(direction);
							draw_ghost();

					},
					 1000)
			}

		function killzone()
		{
			
		}