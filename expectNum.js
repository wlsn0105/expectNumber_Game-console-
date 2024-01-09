let maximum = parseInt(prompt("최대 번호를 입력해"));
// 최대 번호를 입력하는 변수 maximum

while(!maximum){
    maximum = parseInt(prompt("유효한 값을 입력해"));
}
// maximum 값이 정수가 아니면 정수를 입력할 때까지 무한 반복

const targetNum = Math.floor(Math.random() * maximum) + 1;
// 0~0.9999 사이의 값을 랜덤으로 정하는데 지정한 maximum을 곱하고 소수점을 버리고 1을 더함
// -> 설정한 값이 최대 범위 값이 될 수 있도록

console.log(targetNum);

let guess = (prompt("값을 예측해봐(q를 입력하면 종료됨)"));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess == 'q'){
        break;
    }
    else{
        guess = parseInt(guess);
    }   
    if(guess > targetNum){
        guess = prompt("너무 높아");
        attempts++;
    }
    else if(guess < targetNum){
        guess = prompt("너무 낮아");
        attempts++;
    }
    else{
        guess = prompt("유효한 값을 입력하거나, q를 입력해"); 
    }
}

if(guess == 'q'){
    alert("그만뒀어"); 
}
else{
    alert(`축하해, 정답이야. ${attempts}번 만에 찾았어`);
    console.log(`축하해, 정답이야. ${attempts}번 만에 찾았어`);    
}
