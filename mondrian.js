background(64);
colorMode(RGB);
noStroke();

_width = width - 15;
_height = height - 15;

color_dict = {
	red: {r: 242, g: 23, b: 33},
	blue: {r: 26, g: 128, b: 188},
	yellow: {r: 249, g: 225, b: 57},
	white: {r: 243, g: 243, b: 243},
	black: {r: 0, g: 0, b: 0}
}

function _x(num) {
	return num + 10;
}

function _y(num) {
	return num + 10;
}

function draw_rect(x, y, w, h, color) {
	fill(38)
	rect(x+1, y+1, w, h);
	fill(color.r, color.g, color.b);
	rect(x, y, w, h);
}

function fill_area(x, y, w, h, color) {
	draw_rect(_x(x), _y(y), w-5, h-5, color)
}

function get_random_color() {
	var ran = random(7);
	var color;
	if (ran < 1) {
		color = color_dict.red;
	} else if (ran < 2) {
		color = color_dict.blue;
	} else if (ran < 3) {
		color = color_dict.yellow;
	} else if (ran < 4) {
		color = color_dict.black;
	} else {
		color = color_dict.white;
	}
	return color;
}

function divide_area_veritcally(x, y, w, h, num_divs) {
	for (var i = 0; i < num_divs; i++) {
		var ran_color = get_random_color();
		fill_area(x + w/num_divs * i, y, w/num_divs, h, ran_color);
	}
}

function divide_area_horizontally(x, y, w, h, num_divs) {
	for (var i = 0; i < num_divs; i++) {
		var ran_color = get_random_color();
		fill_area(x, y + h/num_divs * i, w, h/num_divs, ran_color);
	}
}

function recurse(x, y, w, h, depth) {
  
  if (depth == 0) {
		if (random(2) < 1) {
			divide_area_veritcally(x, y, w, h, Math.ceil(random(3)));
		} else {
			divide_area_horizontally(x, y, w, h, Math.ceil(random(3)));
		}
	} else {
		var num_divs = Math.ceil(random(3));
    if (random(2) < 1) {
			for (var i = 0; i < num_divs; i++) {
      	recurse(x + (w/num_divs * i), y, w/num_divs, h, depth-1);
			} 
    } else {
			for (var j = 0; j < num_divs; j++) {	
      	recurse(x, y + (h/num_divs * j), w, h/num_divs, depth-1);
      }
		}
	}
}

recurse(0, 0, _width, _height, 3);


