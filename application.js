$(function()
{
  function init()
  {
    // Load Tweet Name
    $('#entry_1188111055').val(localStorage.getItem('tweetName'));
  }

  $(window).load(function()
  {
    var ua = navigator.userAgent,
        iPhone = ua.search(/iPhone/),
        iPad = ua.search(/iPad/),
        Android = ua.search(/Android/);

    if (iPhone != -1)
    {
      $('html, body').addClass('iPhone');
    }
    else if (iPad != -1)
    {
      $('html, body').addClass('iPad');
    }
    else if (Android != -1)
    {
      $('html, body').addClass('Android');
    }

    init();
  });

  $('.toggle__switch').click(function() {
    var $toggle = $(this).next('.toggle');
    if ($toggle.hasClass('toggle--hidden')) {
      $toggle.removeClass('toggle--hidden').addClass('toggle--show');
    } else {
      $toggle.removeClass('toggle--show').addClass('toggle--hidden');
    }
    $(this).hide();
  });

  $('#ss-form').submit(function() {
    // Save Tweet Name
    localStorage.setItem('tweetName', $('#entry_1188111055').val());
  });
});
