function changeImg(x){
  var y = x.getAttribute('src');
  y = y.substring(0, 17)
  x.setAttribute('src', y + '_2.jpg');
}
