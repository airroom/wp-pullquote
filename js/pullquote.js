/*
Plugin Name: PushQuote Plugin
Author: Realtidbits (Modded by @airroom)
Author URI: http://realtidbits.com/
*/

jQuery(document).ready(function ($) {
  var $pullQuoteSource = $('.pullquote-source');
  var pathname = window.location.href;
  var pagetitle = document.title;
  var shorten_url = "";

  if (!$pullQuoteSource.length) return;

  $pullQuoteSource.each(function (i) {
    var $this = $(this);
    var direction = $this.attr('data-float');
    var $tw_btn;
    var $li_btn;

    var pullquote = $('<div />').html($this.html());
    $(pullquote).addClass('pulled-' + direction).addClass(direction);

    var hide_original = $this.attr('data-hidden');

    if (hide_original) {
      $this.hide();
    }
    
    // Social Buttons
    $tw_btn = $('<a />')
      .addClass('pullquote__social--twitter')
      .attr({
        href: 'http://twitter.com/share?original_referer=' + encodeURIComponent(pathname) + '&text=' + encodeURIComponent(($this.html().length > 110 ? $this.html().substr(0, 110) + "..." : $this.html()) + " - " + pathname),
        title: 'Share in Twitter'
      })
      .click(function (event) {
        event.preventDefault();

        var width = 575,
          height = 400,
          left = ($(window).width() - width) / 2,
          top = ($(window).height() - height) / 2,
          url = this.href,
          opts = 'status=1' +
          ',width=' + width +
          ',height=' + height +
          ',top=' + top +
          ',left=' + left;

        window.open(url, 'twitter', opts);
      });

    $li_btn = $('<a />')
      .addClass('pullquote__social--linkedin')
      .attr({
        href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(pathname) + '&summary=' + encodeURIComponent(($this.html().length > 110 ? $this.html().substr(0, 110) + "... -" : $this.html())),
        title: 'Share in Twitter'
      })
      .click(function (event) {
        var width = 575,
          height = 400,
          left = ($(window).width() - width) / 2,
          top = ($(window).height() - height) / 2,
          url = this.href,
          opts = 'status=1' +
          ',width=' + width +
          ',height=' + height +
          ',top=' + top +
          ',left=' + left;

        window.open(url, 'linkedin', opts);

        return false;
      });

    $(pullquote)
      .append(
        $('<div />')
        .addClass('pullquote__social')
        .append($tw_btn)
        .append($li_btn)
        // .append($fb_btn)
      );

    $this.after(pullquote);
  });
});