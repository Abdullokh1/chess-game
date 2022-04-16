const chessTable = document.querySelector('.chess-table');
const buttons = document.querySelectorAll('.chess-btn');
const castleBtn = document.getElementById('castleBtn');
const kingBtn = document.getElementById('kingBtn');
const horseBtn = document.getElementById('horseBtn');
const queen = document.getElementById('queenBtn');
const elephant = document.getElementById('elephant');
const pawnBtn = document.getElementById('pawnBtn');

let arr = [];

for (let i = 8; i >= 1; i--) {
  for (let j = 1; j <= 8; j++) {
    let obj = {
      x: i,
      y: j,
    }
    arr.push(obj);
  }
}

arr.forEach((item, index) => {
  let li = document.createElement('li');
  let box = item.x + item.y;
  li.className = `chess-columns`;
  li.classList.add(`X_${item.x}`);
  li.classList.add(`Y_${item.y}`);
  li.style.transition = 'all 0.2s ease';

  li.id = index;
  chessTable.appendChild(li);

  if (box % 2 == 0) {
    li.style.backgroundColor = '#B58863';
  } else {
    li.style.backgroundColor = '#F0D9B5';
  }
})

// X Y INFO TEXT 

const chessInfo = document.querySelector('.chess-info');
let infoText = document.createElement('p');
let chessColumns = document.querySelectorAll('.chess-columns');

infoText.className = 'chess-x-info';
infoText.innerHTML = `X = 0`;
chessInfo.appendChild(infoText);

let verticalInfo = document.createElement('p');
verticalInfo.className = 'chess-x-info chess-y-info';
verticalInfo.innerHTML = `Y = 0`;
chessInfo.appendChild(verticalInfo);

chessColumns.forEach(item => {
  item.addEventListener("mouseover", () => {
    arr.forEach((el, index) => {
      if (index == item.id) {
        infoText.innerHTML = `X = ${el.y}`;
        verticalInfo.innerHTML = `Y = ${el.x}`;
      }
    })
  })

  item.addEventListener("mouseout", () => {
    infoText.innerHTML = "X = 0";
    verticalInfo.innerHTML = `Y = 0`;
  });
})


buttons.forEach(item => {
  item.addEventListener('click', () => {
    buttons.forEach(el => {
      el.classList.remove('color');
    })
    item.classList.add('color');
  })
})

castleBtn.addEventListener("click", () => {
  chessColumns.forEach(item => {
    item.addEventListener('mouseover', (e) => {
      chessColumns.forEach(ele => {
        ele.classList.remove('green');
      })
      arr.forEach((element, index) => {
        e.target.classList.remove('green');
        if (item.id == index) {
          chessColumns.forEach(el => {

            if (el.className.includes(`Y_${element.y}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`X_${element.x}`)) {
              el.classList.add('green')
            }
            item.addEventListener("mouseout", (e) => {
              el.classList.remove('green')
            })
          })
        }
      })
    })
  })
})

kingBtn.addEventListener('click', () => {
  chessColumns.forEach(item => {
    item.addEventListener('mouseover', (e) => {
      arr.forEach((element, index) => {
        if (item.id == index) {
          chessColumns.forEach((el) => {
            el.classList.remove('green');

            if (el.className.includes(`X_${element.x-1}`) && el.className.includes(`Y_${element.y-1}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y-1}`) && el.className.includes(`X_${element.x + 1}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y}`) && el.className.includes(`X_${element.x + 1}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y}`) && el.className.includes(`X_${element.x - 1}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y+1}`) && el.className.includes(`X_${element.x - 1}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y+1}`) && el.className.includes(`X_${element.x + 1}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y+1}`) && el.className.includes(`X_${element.x}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`Y_${element.y-1}`) && el.className.includes(`X_${element.x}`)) {
              el.classList.add('green')
            }
          })
        }
      })
    })
  })
})

horseBtn.addEventListener('click', () => {
  chessColumns.forEach(item => {
    item.addEventListener('mouseover', () => {
      arr.forEach((element, index) => {

        if (item.id == index) {
          chessColumns.forEach(el => {
            el.classList.remove('green');

            if (el.className.includes(`X_${element.x+2}`) && el.className.includes(`Y_${element.y+1}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x+2}`) && el.className.includes(`Y_${element.y-1}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x+1}`) && el.className.includes(`Y_${element.y-2}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x+1}`) && el.className.includes(`Y_${element.y+2}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x-1}`) && el.className.includes(`Y_${element.y+2}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x-1}`) && el.className.includes(`Y_${element.y-2}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x-2}`) && el.className.includes(`Y_${element.y-1}`)) {
              el.classList.add('green');
            }

            if (el.className.includes(`X_${element.x-2}`) && el.className.includes(`Y_${element.y+1}`)) {
              el.classList.add('green');
            }

          })
        }
      })

      })

    })

  })


queen.addEventListener('click', () => {
  chessColumns.forEach(item => {
      item.addEventListener('mouseover', (e) => {
        arr.forEach((element, index) => {
          if (item.id == index) {
            chessColumns.forEach((el) => {
              el.classList.remove('green');
  
              if (el.className.includes(`Y_${element.y}`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`X_${element.x}`)) {
                el.classList.add('green')
              }

              for (let i = 0; i < 8; i++) {
                if (el.className.includes(`Y_${element.y - i}`) && el.className.includes(`X_${element.x + i}`)) {
                  el.classList.add('green')
                }
                if (el.className.includes(`Y_${element.y + i}`) && el.className.includes(`X_${element.x + i}`)) {
                  el.classList.add('green')
                }
                if (el.className.includes(`Y_${element.y + i}`) && el.className.includes(`X_${element.x - i}`)) {
                  el.classList.add('green')
                }
                if (el.className.includes(`Y_${element.y - i}`) && el.className.includes(`X_${element.x - i}`)) {
                  el.classList.add('green')
                }
              }
            })
          }
        })
      })
    })
  })


elephant.addEventListener('click', ()=>{
  chessColumns.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
      arr.forEach((el, index) =>{
        if(item.id == index){
          chessColumns.forEach(element =>{
            element.classList.remove('green');
            
            for(let i = 1; i <= 8; i++){
              if(element.className.includes(`Y_${el.y-i}`) && element.className.includes(`X_${el.x+i}`)){
                element.classList.add('green');
              }
              if(element.className.includes(`Y_${el.y+i}`) && element.className.includes(`X_${el.x-i}`)){
                element.classList.add('green');
              }
              if(element.className.includes(`Y_${el.y+i}`) && element.className.includes(`X_${el.x+i}`)){
                element.classList.add('green');
              }
              if(element.className.includes(`Y_${el.y-i}`) && element.className.includes(`X_${el.x-i}`)){
                element.classList.add('green');
              }
            }
          })
        }
      })
    })
  })
})

pawnBtn.addEventListener('click', ()=>{ 
  chessColumns.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
      arr.forEach((el, index) =>{
        if(item.id == index){
          chessColumns.forEach(element =>{
            element.classList.remove('green');
            if(element.className.includes(`Y_${el.y}`) && element.className.includes(`X_${el.x+1}`)){
               element.classList.add('green');
            }
          })
        }
      })
    })
  })
})

chessColumns.forEach(el =>{
  chessTable.addEventListener('mouseout', ()=>{
    el.classList.remove('green');
  })
})


// 3D ANIMATION 

const animateBtn = document.getElementById('animate-btn');
const table = document.querySelector('.chess-table');
const tableWrap = document.querySelector('.table-wrap');


let count = 0;
animateBtn.addEventListener('click', () => {
  table.style.transform = 'rotateX(45deg) scale(1.2) translateY(-10px)';
  tableWrap.style.perspective = '800px';
  table.style.transition = 'all 0.4s ease';
  animateBtn.textContent = '2d';
  count++;

  if (count % 2 == 0) {
    table.style.transform = 'rotate(0deg)';
    animateBtn.textContent = '3d';
  }
})