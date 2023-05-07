const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


const getHole = function(index) {
   return document.getElementById(`hole${index}`);
}
 for (let i = 1; i <= 9; i++) {
   getHole(i).onclick = function () {
     if (getHole(i).className.includes('hole_has-mole')) {
       dead.textContent ++;
     } else {
       lost.textContent ++;
     }

     if (dead.textContent === '10') {
       alert('Вы выйграли!');
       dead.textContent = '0';
       lost.textContent = '0';
     } else if (lost.textContent === '5'){
       alert('Вы проиграли!');
       dead.textContent = '0';
       lost.textContent = '0';
     }
   }
 }