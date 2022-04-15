const chessTable = document.querySelector('.chess-table');
let arr = [];



for (let i = 8; i >= 1; i--){
  for (let j = 1; j <= 8; j++){
    let obj = {
      x: i,
      y: j,
    }
    arr.push(obj);
  }
}

arr.forEach((item, index) =>{
  let li = document.createElement('li');
  let box = item.x + item.y;
  li.className = `chess-columns`;
  li.id = index;
  chessTable.appendChild(li);

  if (box % 2 == 0){
    li.style.backgroundColor = '#B58863';
  }
  else{
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

  chessColumns.forEach(item =>{
    item.addEventListener("mouseover", ()=> {
      arr.forEach((el, index)=> {
        if(index == item.id) {
          infoText.innerHTML = `X = ${el.y}`;
          verticalInfo.innerHTML = `Y = ${el.x}`;
        }
      })
    })
  
    item.addEventListener("mouseout", ()=> {
      infoText.innerHTML = "X = 0";
      verticalInfo.innerHTML = `Y = 0`;
    }); 
  })


const buttons = document.querySelectorAll('.chess-btn');
const castleBtn = document.getElementById('castleBtn');

buttons.forEach(item =>{
  item.addEventListener('click', ()=>{
    buttons.forEach(el =>{
      el.classList.remove('color');
    })
    item.classList.add('color');
  })
})

castleBtn.addEventListener('click', ()=>{
  chessColumns.forEach(item =>{
    item.addEventListener("mouseover", ()=> {
      arr.forEach((el, index)=> {

      })
    })
})
})


// 3D ANIMATION 

const animateBtn = document.getElementById('animate-btn');
const table = document.querySelector('.chess-table');
const tableWrap = document.querySelector('.table-wrap');


let count = 0;
animateBtn.addEventListener('click', ()=>{
  table.style.transform = 'rotateX(45deg) scale(1.2)';
  tableWrap.style.perspective = '800px';
  table.style.transition = 'all 0.4s ease';
  animateBtn.textContent = '2d';
  count++;

  if (count % 2 == 0){
    table.style.transform = 'rotate(0deg)';
    animateBtn.textContent = '3d';
  }
})