let timer;

function showAlert(type, message){
  const alert = document.getElementById('alert');

  alert.className = type;
  alert.innerText = message;
  alert.style.display = 'block';

  clearTimeout(timer);
  timer = setTimeout(()=>{
    alert.style.display = 'none';
  }, 2500);
}
