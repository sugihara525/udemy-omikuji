const btn = document.querySelector("button");
btn.addEventListener("click",draw);

function draw() {
    //乱数
    const rand = Math.floor(Math.random() * 100);
    //おみくじ結果を出力するフィールド
    const result = document.getElementById("result");

    switch(true) {
        case rand <= 5:
            result.textContent = "結果:大吉";
            break;

        case rand > 5 && rand <= 25:
            result.textContent = "結果:吉";
            break;
        
        case rand > 25 && rand <= 60:
            result.textContent = "結果:凶";
            break;

        case rand > 60:
            result.textContent = "結果:大凶";
            break;       
    }
}