var userName = document.getElementById('name')
var email = document.getElementById('email')
var type = document.getElementById('type')

var object_list = []

const Confirm = () => {
  var ul = document.getElementById('ul')

  event.preventDefault()

  var information = { name: userName.value, email: email.value, type: type.value }

  if (information.name === "" || information.email === "" || information.type === ""){
    alert('Preencha todos os campos para continuar');
  }

  else{
    
    object_list.push(information);
  
    const li = document.createElement('li');
  
    const span = document.createElement('span');
  
    const text = document.createTextNode(`${information.name} (${information.type})`);
  
    ul.appendChild(li);
    
    span.appendChild(text);
    
    li.appendChild(span);
  }
}
