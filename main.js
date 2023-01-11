function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
let chislo = +prompt ('Введите количество примеров');


for ( let i = 0; i < chislo;i++) {

   let one = rand(1,10);
   let two = rand(1,10);
   let znak = rand(1,4);
   let otvet = 0;
   if(znak == 1) {
    otvet = one + two
      znak = '+' 
   }else if (znak == 2) {
    otvet = one - two
    znak = '-'   
}else if (znak == 3) {
    otvet = one * two
    znak = '*' 
}else if (znak == 4) {
    otvet = one / two
    znak = '/' 
}
let primer = +prompt(one + znak + two + ' =')
alert (primer == otvet ? 'Ответ верный ' + primer : ' Ответ неверный ' + primer + ' Правильный ответ равен ' + otvet);
}