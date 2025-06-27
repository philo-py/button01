const btn = document.querySelector('changeBtn');
const msg = document.querySelector('message');

btn.addEventListener('click', () => {
  msg.textContent = 'ボタンがクリックされました！';
});