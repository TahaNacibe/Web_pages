
  var imgElement = document.getElementById('imgg');
  var parentElement = document.body;
  var SendrName = document.getElementById('SendrName').value;
  var Sendr = document.getElementById('Sendr').value;
  var PhoneNumber = document.getElementById('PhoneNumber').value;
  var MessageBody = document.getElementById('MessageBody').value;
  var state = false;
  var phone = document.getElementById('phone')
  var phoneText = document.getElementById('phonetext')
  var mail = document.getElementById('mail')
  var mailText = document.getElementById('mailtext')


  imgElement.addEventListener('mouseover', func1,false)
  function func1 () {
    state = true;
    set(); 
     
  };

  imgElement.addEventListener('mouseout',func2,false);
   function func2 () {
     state = false ;
     setTimeout(set,2000); 
    };
  
function set() {
    if (state){
    parentElement.classList.add('hovered');
  }else{
    
    parentElement.classList.remove('hovered');
    parentElement.style.transition="300ms";
  }
}  
function sendEmail() { 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "bikoutaha@gmail.com",
    Password : "576503410A672C5F70A7BE78AEDE74F1C1BB",
    To : 'choukio124@gmail.com',
    From : Sendr,
    Subject : SendrName,
    Body : MessageBody
}) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
}
document.getElementById('sendMe').addEventListener('click', function() {
  alert("sorry i didn't register in the service that send mail's yet")
});
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});




