const btn = document.getElementById('button');

const randomColor = () =>{
  let value = '123456789ABCDF';
  let cons = '#';
  for(let i = 0; i < 6; i++) {
    cons = cons + value[Math.floor(math.radom() * 16)];
  }
  return cons;
};
console.log(randomColor());

function changerandomColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changerandomColor());