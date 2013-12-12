var user_opinion = 'unknown';

function send_opinion() {
  var text = $('#user_opinion_text').val();
  $('#popup_user_opinion').remove();
  $.ajax({
    url: '/send_opinion?opinion='+user_opinion+'&text='+(text || ''),
    type: 'GET',
    async: false,
    cache: false,
    timeout: 3000,
    error: function(){
      return true;
    },
    success: function(msg){
      return false;
    }
  });
}

function set_yes() {
  $('#popup_around_yes').css('display','block');
  $('#popup_around_no').css('display','none');
  user_opinion = 'yes';
}
function set_no() {
  $('#popup_around_yes').css('display','none');
  $('#popup_around_no').css('display','block');
  user_opinion = 'no';
}

function close_popup() {
  $('#popup_user_opinion').remove();
  $.ajax({
    url: '/close_popup',
    type: 'GET',
    async: false,
    cache: false,
    timeout: 3000,
    error: function(){
      return true;
    },
    success: function(msg){
      return false;
    }
  });
}

// run display popup block
setTimeout(function() {
  $('#popup_user_opinion').css('display','block');
  $('#popup_user_opinion').animate({opacity: 1}, 2000);
}, 2000);
