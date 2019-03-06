let body = document.querySelector('body')
body.setAttribute('style', 'display:flex; flex-direction: column; justify-content: center;')

let grid = document.querySelector('#main');
grid.setAttribute('style', 'order:2; margin: 10px auto; width: 800px; display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);')

// grid.setAttribute('style', 'order:2; margin: auto; width: 800px; height: 800px; display: flex; flex-flow: row wrap; align-content: center;')


let button = document.createElement('button');
button.setAttribute('style', 'background: gray; -webkit-border-radius: 28; -moz-border-radius: 28; border-radius: 28px; text-shadow: 2px 1px 2px #090909; -webkit-box-shadow: 6px 5px 24px #666666; -moz-box-shadow: 6px 5px 24px #666666; box-shadow: 2px 3px 4px 1px #252323; font-family: Arial; color: #fafafa; font-size: 14px; text-decoration: none; order:1; margin: 20px; width: 190px; height: 40px; align-self: center;');

button.textContent = 'CLICK ME BISH'

body.appendChild(button);

button.addEventListener('click', question)

// Function for clear and create divs 

let clear = () => {
   while (grid.firstChild) {
      grid.removeChild(grid.firstChild)
   }
}



function question() {
   if (!grid.hasChildNodes()) {
      let amount = prompt('Wie viele Felder möchtest Du haben?');
      grid.style.gridTemplateColumns = `repeat(${amount}, 1fr)`
      let i;
      for (i = 0; i < (amount * amount); i++) {
         origin(amount)
      }
      coloring();

   } else {
      clear();
   }
};

function origin(size) {
   let content = document.createElement('div');
   content.setAttribute('style', 'background-color:black;')
   content.style.height = (800 / size).toString() +'px';
   content.classList.add('sty');
   grid.appendChild(content);
}

let i;
for (i = 0; i < 256; i++) {
   origin(16)
}



// Event Listener to hover and change color
let coloring = () => {
   let hovering = document.querySelectorAll('.sty');
   hovering.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
         e.target.style.background = 'yellow'
      })
   });

}

coloring();





// document.addEventListener('mousemove', (e) => {
//    const sqrs = document.querySelectorAll('.sty');

//    const mouseX = e.pageX;
//    const mouseY = e.pageY;

//    sqrs.forEach(sqr => {
//       const sqrX = sqr.offsetLeft + 20;
//       const sqrY = sqr.offsetTop + 20;

//       const diffX = mouseX - sqrX;
//       const diffY = mouseY - sqrY;

//       const radians = Math.atan2(diffY, diffX);

//       const angle = radians * 180 / Math.PI;

//       sqr.style.transform = `rotate(${angle}deg)`;
//    })

// })