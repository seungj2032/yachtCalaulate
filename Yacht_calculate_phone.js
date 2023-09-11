//각 주사위의 아이디를 통해서 가져오기
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');

//각 주사위의 클릭수를 확인하기 위한 변수
let d1 = 0; let d2 = 0; let d3 = 0; let d4 = 0; let d5 = 0;

//각각 주사위를 클릭했을때 모양이 변하도록 설정
dice1.addEventListener('click', function() {
  d1 += 1;
  changeDice(dice1, d1);
})
dice2.addEventListener('click', function() {
  d2 += 1;
  changeDice(dice2, d2);
})
dice3.addEventListener('click', function() {
  d3 += 1;
  changeDice(dice3, d3);
})
dice4.addEventListener('click', function() {
  d4 += 1;
  changeDice(dice4, d4);
})
dice5.addEventListener('click', function() {
  d5 += 1;
  changeDice(dice5, d5);
})

//클릭한 횟수에 따라 주사위의 모양을 결정하는 함수
function changeDice(dice, x) {
  let countig = x%6;

  if (countig == 1) {
    dice.classList.remove("dice_six"); 
    dice.classList.add("dice_one");
  } else if (countig == 2) {
    dice.classList.remove("dice_one");
    dice.classList.add("dice_two");
  } else if (countig == 3) {
    dice.classList.remove("dice_two");
    dice.classList.add("dice_three");
  } else if (countig == 4) {
    dice.classList.remove("dice_three");
    dice.classList.add("dice_four");
  } else if (countig == 5) {
    dice.classList.remove("dice_four");
    dice.classList.add("dice_five");
  } else {
    dice.classList.remove("dice_five");
    dice.classList.add("dice_six");
  }
}

//버튼 동작을 위해 변수를 설정
var clickCount = 0;   
var disp1 = document.querySelector('.dices');
var disp2 = document.getElementById('score');

//화면을 전환해주는 장치
function confirm() {
  if(clickCount==0) {
    if ((d1==0)||(d2==0)||(d3==0)||(d4==0)||(d5==0)) {
      alert('선택되지 않은 주사위가 있습니다.');  //잘못 누르는 경우를 방지
    } else {
      conf()
      disp1.style.display = 'none';
      disp2.style.display = 'flex';
      clickCount += 1;
    }
  } else if(clickCount==1) {
    disp2.style.display = 'none';
    disp1.style.display = 'flex';
    clickCount = 0;

    //주사위를 초기화
    for(i=1;i<6;i++) {
      let x = eval('dice'+i);
      let d = eval('d'+i);
      let countig = d%6;

      if (countig == 0) {
        x.classList.remove("dice_six"); 
        x.classList.add("dice");
      } else if (countig == 1) {
        x.classList.remove("dice_one");
        x.classList.add("dice");
      } else if (countig == 2) {
        x.classList.remove("dice_two");
        x.classList.add("dice");
      } else if (countig == 3) {
        x.classList.remove("dice_three");
        x.classList.add("dice");
      } else if (countig == 4) {
        x.classList.remove("dice_four");
        x.classList.add("dice");
      } else {
        x.classList.remove("dice_five");
        x.classList.add("dice");
      }
    }

    d1 = 0; d2= 0; d3=0; d4=0; d5=0;
  }
}

//각 주사위의 값을 정리
function conf() {
  let dd1 = d1%6; let dd2 = d2%6; let dd3 = d3%6; 
  let dd4 = d4%6; let dd5 = d5%6;
  
  if(dd1==0) {dd1 = 6;} else {} 
  if(dd2==0) {dd2 = 6;} else {} 
  if(dd3==0) {dd3 = 6;} else {} 
  if(dd4==0) {dd4 = 6;} else {} 
  if(dd5==0) {dd5 = 6;} else {} 
  
  //각 주사위 값을 배열로 정리
  let diceArray = new Array();
  diceArray.push(dd1);
  diceArray.push(dd2);
  diceArray.push(dd3);
  diceArray.push(dd4);
  diceArray.push(dd5);

  //각 항목별로 계산해서 table에 입력
  show(0,diceArray);
}

//각 항목별로 계산해서 table에 입력해주는 함수
function show(n,diceArray) {
  if(diceArray==0) {
    for(i=0;i<13;i++) {
      document.getElementById('Player1').getElementsByTagName('td')[i].innerHTML = '&nbsp';
    }
  } else {
    for(i=0;i<13;i++) {
      calculate(i,diceArray);
    }
  }
}

//입력값을 table의 위치에 맞게 넣어주는 함수
function calculate(n,diceArray) {
  if(n==0) {
    document.getElementById('Player1').getElementsByTagName('td')[0].innerHTML = Aces(diceArray);
  } else if(n==1) {
    document.getElementById('Player1').getElementsByTagName('td')[1].innerHTML = Deuces(diceArray);
  } else if(n==2) {
    document.getElementById('Player1').getElementsByTagName('td')[2].innerHTML = Threes(diceArray);
  } else if(n==3) {
    document.getElementById('Player1').getElementsByTagName('td')[3].innerHTML = Fours(diceArray);
  } else if(n==4) {
    document.getElementById('Player1').getElementsByTagName('td')[4].innerHTML = Fives(diceArray);
  } else if(n==5) {
    document.getElementById('Player1').getElementsByTagName('td')[5].innerHTML = Sixes(diceArray);
  } else if(n==7) {
    document.getElementById('Player1').getElementsByTagName('td')[7].innerHTML = Choice(diceArray);
  } else if(n==8) {
    document.getElementById('Player1').getElementsByTagName('td')[8].innerHTML = FourKind(diceArray);
  } else if(n==9) {
    document.getElementById('Player1').getElementsByTagName('td')[9].innerHTML = FullHouse(diceArray);
  } else if(n==10) {
    document.getElementById('Player1').getElementsByTagName('td')[10].innerHTML = S_Straight(diceArray);
  } else if(n==11) {
    document.getElementById('Player1').getElementsByTagName('td')[11].innerHTML = L_Straight(diceArray);
  } else if(n==12) {
    document.getElementById('Player1').getElementsByTagName('td')[12].innerHTML = Yacht(diceArray);
  } else {}
}

//각 항목별로 점수를 계산해주는 함수
function Aces(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;

  function isEven(value) {
    return value == 1;
  }

  var checkArray = copyArray.map(isEven);
  for (let i = 0; i < 5; i++) {
    if (checkArray[i] == true) {
      score += 1;
    } else {}
  }

  return score;
}
function Deuces(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;

  function isEven(value) {
    return value == 2;
  }

  var checkArray = copyArray.map(isEven);

  for (let i = 0; i < 5; i++) {
    if (checkArray[i] == true) {
      score += 2;
    } else {}
  }

  return score;
}
function Threes(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;

  function isEven(value) {
    return value == 3;
  }

  var checkArray = copyArray.map(isEven);

  for (let i = 0; i < 5; i++) {
    if (checkArray[i] == true) {
      score += 3;
    } else {}
  }

  return score;
}
function Fours(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;

  function isEven(value) {
    return value == 4;
  }

  var checkArray = copyArray.map(isEven);

  for (let i = 0; i < 5; i++) {
    if (checkArray[i] == true) {
      score += 4;
    } else {}
  }

  return score;
}
function Fives(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;

  function isEven(value) {
    return value == 5;
  }

  var checkArray = copyArray.map(isEven);

  for (let i = 0; i < 5; i++) {
    if (checkArray[i] == true) {
      score += 5;
    } else {}
  }

  return score;
}
function Sixes(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;

  function isEven(value) {
    return value == 6;
  }

  var checkArray = copyArray.map(isEven);

  for (let i = 0; i < 5; i++) {
    if (checkArray[i] == true) {
      score += 6;
    } else {}
  }

  return score;
}
function Bonus(dicearray) {
  const copyArray = [...dicearray];
  let score = 0; let check = 0;
  
  check += Aces(copyArray);
  check += Deuces(copyArray);
  check += Threes(copyArray);
  check += Fours(copyArray);
  check += Fives(copyArray);
  check += Sixes(copyArray);
  
  if(check>=63) {
    score += 35;
  } else {}
  
  return score;
}
function Choice(dicearray) {
  const copyArray = [...dicearray];
  let score = 0;

  for (let i = 0; i < 5; i++) {
    score += copyArray[i];
  }

  return score;
}
function FourKind(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;
    
  for (let i=0;i<2;i++) {
    let result = copyArray.filter(element => copyArray[i] ===element).length;
    
    if (result>=4) {
      for (let i = 0; i < 5; i++) {
        score += copyArray[i];
      }
      break;
    } else {}
  }

  return score;
}
function FullHouse(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;
    
  for (let i=0;i<5;i++) {
    let result1 = copyArray.filter(element => copyArray[i] ===element).length;

      
    if (result1==5) {
      score += copyArray[i]*5;
      break;
    } else if (result1==2) {
      var checkArray = copyArray.filter(element => copyArray[i] !==element);
      let result2 = checkArray.filter(element => checkArray[0] ===element).length;
        
      if(result2==3) {
        score += (copyArray[i]*2) + (checkArray[0]*3);
        break;
      } else {}
    } else if (result1==3) {
      var checkArray = copyArray.filter(element => copyArray[i] !==element);
      let result2 = checkArray.filter(element => checkArray[0] ===element).length;

      if(result2==2) {
        score += (copyArray[i]*3) + (checkArray[0]*2);
        break;
      } else {}
    } else {}
  }
    
  return score;
}
function S_Straight(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;
    
  copyArray.sort(function(a,b) {
    return a - b;
  });
    
  let checkArray = copyArray.filter((c,index) => { return copyArray.indexOf(c) === index; });
  let check = checkArray.join('');
    
  if(checkArray.length==4) {
    if((check=='1234')||(check=='2345')||(check=='3456')) {
      score += 15;
    } 
  } else if(checkArray.length==5) {
    if((check=='12345')||(check=='23456')) {
      score += 15;
    }
  }
    
  return score;
}
function L_Straight(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;
    
  copyArray.sort(function(a,b) {
    return a - b;
  });
    
  let checkArray = copyArray.filter((c,index) => { return copyArray.indexOf(c) === index; });
  let check = checkArray.join('');
    
  if((check=='12345')||(check=='23456')) {
    score += 30;
  }
    
  return score;
}
function Yacht(diceArray) {
  const copyArray = [...diceArray];
  let score = 0;
  
  let result = copyArray.filter(element => copyArray[0] ===element).length;
  
  if (result==5) {
    score += 50;
  } else {}

  return score;
}