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

  $('.yo').click(function() {
    var http = new XMLHttpRequest(),
        api_url = 'http://api.justyo.co/yo/',
        api_token = '4e41850c-2734-4a68-a3b7-93f1c827cee4',
        username = $(this).attr('data-yo-username'),
        params = 'api_token=' + api_token + '&username=' + username;
    http.open('POST', api_url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.setRequestHeader('Content-length', params.length);
    http.setRequestHeader('Connection', 'close');
    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        alert('YO送信完了!');
      }
    }
    http.send(params);
  });
});
