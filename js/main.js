$(function() { 
 $(".menu_mobil").hide();
 $(".sub_menu").hide();
 $(".sub_menu_mobil").hide();

 $(".hover").hover(function() {
  $(".sub_menu").fadeIn(200);
 }, function() {
  $(".sub_menu").fadeOut(200);
 });


 // Меню для телефонов и планшетов
 $(".nav_mobil").on("click", function() {
   $(".menu_mobil").fadeToggle(200);
 });

 $(".exit").on("click", function() {
   $(".menu_mobil").fadeToggle(200);
 });

 $(".hover_mobil").on("click", function(event) {
  event.preventDefault();
  $(".sub_menu_mobil").stop().slideToggle(200);
 });
});