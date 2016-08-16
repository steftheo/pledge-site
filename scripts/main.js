window.JSON_CALLBACK = function(returned) {
  console.log(returned);
};

(function($) {
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 150) {
      $('nav').addClass('active');
    }
    else{
      $('nav').removeClass('active');
    }
  });

  $('.toggle-modal').click(function() {
    $('#video').attr('src', 'https://www.youtube.com/embed/K4Bo6mbmngc?autoplay=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fnextkeyboard.co');
  });

  $('#myModal').on('hide.bs.modal', function() {
    $('#video').attr('src', 'https://www.youtube.com/embed/K4Bo6mbmngc?rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fnextkeyboard.co');
  });

  $('.mc-form').on('submit', function(e) {
    var $this = this;

    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://tinyhearts.us1.list-manage.com/subscribe/post-json?u=84fde4ba68e9a71fe365ad6bf&amp;id=295df6c550&c=?',
      data: $(this).serialize(),
       dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
      success     : function(data) {
        console.log(data)
        if (data.result === "success") {
          $($this).removeClass('form-error').removeClass('form-success').addClass('form-success');
          $($this).find('.responses .success').show().text(data.msg)
        } else {
          $($this).removeClass('form-error').removeClass('form-success').addClass('form-error');
          $($this).find('.responses .error').show().text(data.msg)
        }

        setTimeout(function() {
          $('.responses .error, .responses .success').text('').hide();
          $($this).removeClass('form-error').removeClass('form-success');
        }, 5000);
      }
    })
  });
})(jQuery);
