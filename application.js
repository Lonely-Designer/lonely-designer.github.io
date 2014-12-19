$(function()
{
  function init()
  {

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
});
