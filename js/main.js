$(function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});

$('.switch-view').on('click', function(){
  $('.content').toggleClass('container-small container-fluid');
});
$('#reinvestment-strategy-tab').on('click', function(){
  $('#staticBackdrop .inner-container').css('max-width','1400px');
});
$('#payment-breakdown-tab ,#closing-costs-tab').on('click', function(){
  $('#staticBackdrop .inner-container').css('max-width','900px');
});
