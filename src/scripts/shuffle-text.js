const headerChars = [
  '[#@si{yg&',
  '7o04e0!&-',
  'ip]@3&s$o',
  '[fg7[82w}',
  'l)h67ypjk',
  't%vem*j&1',
  '(1%#(2qdx'
]
const descChars = [
  "1 J C ' M > { 1 z 8 U M ( j ? X q 5 A ) / Y U W > Y ! 9 1 s | L U r H O @ 6 ~ * U M n s W W u m z B",
  "£ < b 4 W 6 # e o t 3 [ K I , Y 8 : / c K h e } ^ K W < = 1 l 2 v + p 3 X Q O k % g ( - x r ' V - /",
  "_ 5 ( n M 1 B w W ' 8 q V R Q i 8 C 0 9 K t ( 7 + C x b K { c | O 7 6 a R 9 V X R | Y T > t H p y l",
  "0 2 A n 4 ? p N ; | X Q } < 5 @ 2 ] { 1 : 3 w d F ( 1 } q O X j 2 ' * < Q * 6 z > + u X > 7 h l | %",
  '& x t S ! - T 4 { S L 8 & ~ W | % l l Z Y C % t £ O 8 = s i 6 i - { Q ? r ) C 6 V 7 y o v £ n . p',
  "e : 2 / 8 n } I ( U : ! F W B | & g W i ] & B P 4 ? ! z k 7 , 2 Q y 1 [ Q w ) b 4 a S & V 5 ' S 8 $",
  "$ n 0 i U P % { 5 6 m u ' = < S 5 T G t p X N 7 _ | - , g j ~ M E g S { Q : h 7 @ ; m C g 0 % M e !"
]

const rotatingHeader = document.querySelectorAll('.rotatingHeader')
const rotatingDesc = document.querySelectorAll('.rotatingDesc')

let indexA = 0
let indexB = 0
const velocity = 100 // Time in milliseconds

function rotateHeader() {
  rotatingHeader.forEach((text) => {
    text.textContent = headerChars[indexA]
  })
  indexA = (indexA + 1) % headerChars.length
}

setInterval(rotateHeader, velocity)

function rotateDesc() {
  rotatingDesc.forEach((text) => {
    text.textContent = descChars[indexB]
  })
  indexB = (indexB + 1) % descChars.length
}

setInterval(rotateDesc, velocity)
