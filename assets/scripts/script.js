let container = document.querySelector('.container')
let character = document.getElementById('.character')

container.onmousemove = function(e){
  let x = e.pageX
  let y = e.pageY

  character.style.transform = 'translate(' + x/100*3 +'px,' + y/100*2 +'px)';
};