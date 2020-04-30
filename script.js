function start() {
  var lose_cont = document.getElementById("lose-container");
  var starter = document.getElementById("starter-container");
  var container = document.getElementById("container");
  var header = document.getElementById("header");
  starter.style.display = "none";
  header.style.display = "none";
  container.style.display = "block";
  lose_cont.style.display = "none";
  image_setter();
}
var image_num;
var grid_num;
var grid;
var lives = 3;
var is_danger = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 };
var inter;
function image_setter() {
  inter = setInterval(() => {
    setImage();
  }, 1000);
}
function setImage() {
  if (grid != null) {
    grid.innerHTML = null;
  }
  image_num = Math.floor(Math.random() * 10) + 1;
  grid_num = Math.floor(Math.random() * 25) + 1;
  grid = document.getElementById(grid_num);

  grid.innerHTML = `<img src="./svgs/${image_num}.svg" alt="" class="inside" />`;
  console.log(grid);
}
var point = 0;
var point_place = document.getElementById("point");
var life_place = document.getElementById("life");
function water() {
  if (is_danger[image_num] == 0) {
    point += 1;
    point_place.innerHTML = point;
  } else {
    point--;
    point_place.innerHTML = point;
    if (point <= 0) {
      clearInterval(inter);
      var lost = document.getElementById("lost-point");
      lost.innerHTML = point;
      point = 0;
      lives = 3;
      point_place.innerHTML = point;
      life_place.innerHTML = lives;
      show_lose();
    }
  }
}
function kill() {
  if (is_danger[image_num] == 1) {
    point += 2;
    point_place.innerHTML = point;
  } else {
    point -= 2;
    point_place.innerHTML = point;
    lives--;
    life_place.innerHTML = lives;
    if (lives < 1 || point <= 0) {
      clearInterval(inter);
      var lost = document.getElementById("lost-point");
      lost.innerHTML = point;
      point = 0;
      lives = 3;
      point_place.innerHTML = point;
      life_place.innerHTML = lives;
      show_lose();
    }
  }
}
function show_lose() {
  var lose_cont = document.getElementById("lose-container");

  container.style.display = "none";
  lose_cont.style.display = "block";
}
