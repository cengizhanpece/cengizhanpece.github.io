document.body.onscroll = calis;
let oldScrollPos = 0;
let inner = document.getElementById("inner");
let opacity = 1.0;
let box_left = document.getElementById("box-left");
let box_left_transform = -100;
let box_right = document.getElementById("box-right");
let box_right_transform = 100;

let pairBox1 = document.getElementById("id1-text-span");
let pairBox1_transform = 100;
let pairBox2 = document.getElementById("id2-text-span");
let pairBox2_transform = -100;
let pairBox3 = document.getElementById("id3-text-span");
let pairBox3_transform = 100;



function check() {
  let newScrollPos = document.body.scrollTop || document.documentElement.scrollTop;
  if (oldScrollPos > newScrollPos) {
    /* SCROLL UP */
    oldScrollPos = newScrollPos;
    return 1;
  } else {
    /* SCROLL DOWN */
    oldScrollPos = newScrollPos;
    return 2;
  }

}

function Opacity(direction) {
  if (direction == 1) {
    /* SCROLL UP */
    if (opacity < 1 && oldScrollPos <= 300) {
      /* Dont increase opacity when u too much down */
      opacity += 0.05;
      if (document.documentElement.scrollTop <= 15) /* IF U HIT TOP CLEAR YOURSELF BEACUSE ITS BUGGY */ {
        opacity = 1;
      }
    }
  } else {
    if (opacity >= 0.0 && oldScrollPos >= 300) {
      /* SCROLL DOWN */
      opacity -= 0.05;
    }
  }
  inner.style.opacity = opacity;
}

function Transform(direction) {
  if (direction == 1) {
    /* SCROLL UP */
    if (box_left_transform > -100 && oldScrollPos <= 250) {
      box_left_transform -= 5;
      if (oldScrollPos <= 15) /* IF U HIT TOP CLEAR YOURSELF BEACUSE ITS BUGGY */ {
        box_left_transform = -100;
      }
      box_left.style.transform = "translateX(" + box_left_transform + "%)";
    }

    if (box_right_transform < 100 && oldScrollPos <= 250) {
      box_right_transform += 5;
      if (oldScrollPos <= 15) /* IF U HIT TOP CLEAR YOURSELF BEACUSE ITS BUGGY */ {
        box_right_transform = 100;
      }
      box_right.style.transform = "translateX(" + box_right_transform + "%)";
    }

  } else {
    /* SCROLL DOWN */
    if (box_left_transform <= -5) {
      box_left_transform += 5;
      box_left.style.transform = "translateX(" + box_left_transform + "%)";
    }
    if (box_right_transform >= 5) {
      box_right_transform -= 5;
      box_right.style.transform = "translateX(" + box_right_transform + "%)";
    }

  }
}


function PairBox1(direction){
  if(direction == 1){
    if((oldScrollPos) <=(pairBox1.offsetTop/2) && pairBox1_transform < 100){
          pairBox1_transform += 10;
          pairBox1.style.transform = "translateX(" + pairBox1_transform + "%)";
    }

  }
  else{
    if((oldScrollPos) >=(pairBox1.offsetTop/2) && pairBox1_transform >0){
          pairBox1_transform -= 10;
          pairBox1.style.transform = "translateX(" + pairBox1_transform + "%)";
    }
  }
}

function PairBox2(direction){
  if(direction == 1){
    if((oldScrollPos) <=(pairBox2.offsetTop/1.5) && pairBox2_transform > -100){
          pairBox2_transform -= 10;
          pairBox2.style.transform = "translateX(" + pairBox2_transform + "%)";
    }

  }
  else{
    if((oldScrollPos) >=(pairBox2.offsetTop/1.5) && pairBox2_transform < 0){
          pairBox2_transform += 10;
          pairBox2.style.transform = "translateX(" + pairBox2_transform + "%)";
    }
  }
}

function PairBox3(direction){
  if(direction == 1){
    if((oldScrollPos) <=(pairBox3.offsetTop/1.3) && pairBox3_transform < 100){
          pairBox3_transform += 10;
          pairBox3.style.transform = "translateX(" + pairBox3_transform + "%)";
    }

  }
  else{
    if((oldScrollPos) >=(pairBox3.offsetTop/1.3) && pairBox3_transform >0){
          pairBox3_transform -= 10;
          pairBox3.style.transform = "translateX(" + pairBox3_transform + "%)";
    }
  }
}



function calis() {

  console.log((oldScrollPos-100)+ "  " + (pairBox1.offsetTop/2) +"  "+ (pairBox2.offsetTop/2)+ "  "+ (pairBox3.offsetTop/2))
  if (check() == 1) {
    /* SCROLL UP */

    Opacity(1);
    Transform(1);
    PairBox1(1);
    PairBox2(1);
    PairBox3(1);
  } else {
    /* SCROLL DOWN */
    Opacity(2);
    Transform(2);
    PairBox1(2);
    PairBox2(2);
    PairBox3(2);

  }
}
