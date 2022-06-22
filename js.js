const email = document.getElementById('mail');
const btn = document.getElementById('btn');
var mess = document.getElementsByClassName('Messeror')[0];
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var entry = document.getElementsByClassName('entry')[0];
var tag = document.createElement('p');
var text = document.createTextNode('Please provide a valid email address');
btn.onclick = () => {
  if (!filter.test(email.value)) {
    email.style.border = '1px solid red';
    tag.style.color = 'red';
    tag.style.fontSize = '0.5em';
    tag.appendChild(text);
    mess.appendChild(tag);
  } else {
    email.style.border = '1px solid gray';
    mess.parentNode.removeChild(mess);
  }
};
