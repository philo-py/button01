window.addEventListener('DOMContentLoaded', () =>{
  const btn = document.querySelector('#changeBtn');
  const msg = document.querySelector('#message');

  let count =0; //カウント用の変数

  btn.addEventListener('click', () => {
    count++;
    msg.textContent = 'ボタンをクリックした回数: ${count}回';
  })
});