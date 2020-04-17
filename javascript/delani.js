// WHAT WE DO SECTION

$('.what').click(function() {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });
  
  //PORTFOLIO SECTION
  
  $(".card").hover(function() {
    $(this).children(".card-1").fadeToggle(1000,"linear");
  });
  
  //CONTACT SECTION
  
  $("button").click(function (delani) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message. ' + ' Thank you for reaching out to us.');
    delani.preventDefault();
  });
  
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });
  