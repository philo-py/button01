window.addEventListener('DOMContentLoaded', () =>{
  const btn = document.querySelector('#changeBtn');
  const msg = document.querySelector('#message');

  let count =0; //カウント用の変数

  //背景色をランダムに作る関数
  function getRandomColor() {
    //16進数のカラーコードをランダム生成
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  btn.addEventListener('click', () => {
    count++;
    msg.textContent = `ボタンをクリックした回数: ${count}回`;
  })

  //背景色を変える
  document.body.style.backgroundColor = getRandomColor();
});