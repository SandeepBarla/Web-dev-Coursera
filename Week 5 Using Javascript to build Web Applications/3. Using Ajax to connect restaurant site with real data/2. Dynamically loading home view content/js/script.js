
// (function (global) {

// var dc = {};

// var homeHtml = "snippets/home-snippet.html";

// // Convenience function for inserting innerHTML for 'select'
// var insertHtml = function (selector, html) {
//   document.querySelector(selector).innerHTML = html;
// };

// // Show loading icon inside element identified by 'selector'.
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };

// // On page load (before images or CSS)
// $(function () {
// $("#navbarToggle").blur(function () {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });
// // On first load, show home view
// showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//   homeHtml,
//   function (responseText) {

//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//   },
//   false);
// });


// global.$dc = dc;

// })(window);



var homeHtml="snippets/home-snippet.html";
var insertHtml= function (selector,html) {
  document.querySelector(selector).innerHTML=html;
}
var showLoading=function(selector){
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector,html);
}
$("#navbarToggle").blur(function () {
  var screenWidth=window.innerWidth;
  if (screenWidth<768) {$("#collapsable-nav").collapse('hide');}
});
showLoading("#main-content");
$ajaxUtils.sendGetRequest(homeHtml,function (responseText) {
  document.querySelector("#main-content").innerHTML=responseText;
},false);
