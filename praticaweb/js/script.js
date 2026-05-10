const formNewsletter = document.getElementById('form-newsletter');
const emailInput = document.getElementById('email-input');



formNewsletter.addEventListener('submit', function(event) {
 event.preventDefault(); 
 const email = emailInput.value; 
 alert(`Obrigado por se inscrever, sneakerhead!\nNovidades serão enviadas para: ${email}`);
 emailInput.value = "";
});



