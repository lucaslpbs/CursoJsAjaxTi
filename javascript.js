var people = document.getElementById('name')
var email = document.getElementById('email')
var type = document.getElementById('type')

var list = []

const Confirm = () => {
  event.preventDefault()

  var information = { name: people.value, email: email.value, type: type.value }

  if (name || email || type === null)
    alert('Preencha todos os campos para continuar')

  list.push(information)
}
