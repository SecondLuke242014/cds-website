var button = document.getElementByID('submit')
var email = document.getElementByID('email')

button.addEventListener('click', function(){
  email.send({
    Host: 'mail.google.com',
    Username: 'support@secondluke242014.github.io',
    Password: 'bot123',
    To: email.value,
    From: 'support@secondluke242014.github.io',
    Subject: 'SecondLuke242014 Support',
    Body: ''
  })
})
