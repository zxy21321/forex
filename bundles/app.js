/* Minification failed. Returning unminified contents.
(6,25-26): run-time error JS1195: Expected expression: >
(29,1-2): run-time error JS1002: Syntax error: }
(33,29-30): run-time error JS1195: Expected expression: )
(33,31-32): run-time error JS1004: Expected ';': {
(43,57-58): run-time error JS1195: Expected expression: >
(44,38-39): run-time error JS1195: Expected expression: >
(47,9-10): run-time error JS1014: Invalid character: `
(47,10-11): run-time error JS1195: Expected expression: .
(47,30-35): run-time error JS1004: Expected ';': table
(47,53-54): run-time error JS1193: Expected ',' or ')': {
(47,70-71): run-time error JS1195: Expected expression: )
(47,71-72): run-time error JS1014: Invalid character: `
(48,4-5): run-time error JS1195: Expected expression: )
(49,2-3): run-time error JS1195: Expected expression: )
(61,40-41): run-time error JS1195: Expected expression: )
(61,42-43): run-time error JS1004: Expected ';': {
(63,4-5): run-time error JS1195: Expected expression: )
(67,40-41): run-time error JS1195: Expected expression: )
(67,42-43): run-time error JS1004: Expected ';': {
(77,4-5): run-time error JS1195: Expected expression: )
(125,1-2): run-time error JS1002: Syntax error: }
(127,35-36): run-time error JS1004: Expected ';': {
(182,1-6): run-time error JS1195: Expected expression: class
(182,7-14): run-time error JS1197: Too many errors. The file might not be a JavaScript file: Cookies
(27,1-13): run-time error JS1018: 'return' statement outside of function: return false
 */

/// JS Scripts

// Temporary code for testing on top form submission

const checkEnter = (e) => {
//e is event object passed from function invocation

let characterCode //literal character code will be stored in this variable
  
if(e && e.which){ //if which property of event object is supported (NN4)
e = e
characterCode = e.which //character code is contained in NN4's which property
}
else{
e = event
characterCode = e.keyCode //character code is contained in IE's keyCode property
}

if(characterCode == 13){ //if generated character code is equal to ascii 13 (if enter key)
  if (e.target.value !== '') {
    alert(e.target.value)
    e.preventDefault()
  }
}
else{
return false
}
}

// jquery ready start

$(document).ready(function () {
  






// Comparison Table Js starts here

$(".account-modalities article").each((index, element) => {
  $(element).on("click touchend", e => {
      e.preventDefault();
      $(".account-modalities table tr td").add(".account-modalities article").removeClass("active");
      $(`.account-modalities table tr td:nth-child(${(index + 1) * 2})`).add(element).addClass("active");
  });
});

  // Comparison Table Js ends here









 $(".formsearch form").hover(function () {
    $(this).children("input").toggleClass('show');
  });

  // Add extra bottom padding in the menu in mobile / tablet while toggling hamburger menu

  $(".navbar-toggler").click(function () {

    if (!$('.navbar-collapse').hasClass('show')) {
      $('.toppanel__container').css("padding-bottom", "20px");
    }
    else {
      $('.toppanel__container').removeAttr("style");
    }

    
  });

// Mouseover in Main menu

const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownToggleTextRef = $(".dropdown-toggle .linkhrefopen");
const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";
  
$($dropdownToggleTextRef).click(function() {
  var location = jQuery(this).parent().attr('href');
  window.location.href = location;
  return false;
});
  
  if (window.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
      $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
  
  // Mouosehover in Main menu for desktop

	//////////////////////// Prevent closing from click inside dropdown
  $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

      $("html[lang=en]").attr("dir", "ltr")
         .find("head").append("<link rel='stylesheet' type='text/css' href='dist/css/app.min.css' />");
  
         $("html[lang=ar]").attr("dir", "rtl")
         .find("head").append("<link rel='stylesheet' type='text/css' href='dist/css/app-rtl.min.css' />");
  
}); // jquery end
;
function adjustForNotifications() {
    var topNotificationHeight = $('.notification.top').height();

    $('nav.masthead').css('top', topNotificationHeight + 'px');
    $('body').css('padding-top', topNotificationHeight + 'px');

    var bottomNotificationHeight = $('.notification.bottom').height();

    $('body').css('padding-bottom', bottomNotificationHeight + 'px');
}

function checkPW(cookie) {
  if (getCookie(cookie) === null) {
    document.getElementById('accept-paywall').addEventListener('click', function (e) {
      setCookie(cookie, new Date(), 30);
      return true;
    });
    enablePW();
  } else {
    $('body').removeClass('stop-scrolling');
    $('body').unbind('touchmove');
  }
}

function enablePW() {
  $('.paywall-cover').show();
  $('.paywall').show();
  $('body').addClass('stop-scrolling');
  $('body').bind('touchmove', function (e) { e.preventDefault() });
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}


class Cookies {
    static get(name) {
        if (document.cookie.length === 0)
            return null;

        var c_start = document.cookie.indexOf(`${name}=`);
        if (c_start === -1)
            return null;

        c_start = c_start + name.length + 1;
        var c_end = document.cookie.indexOf(';', c_start);
        if (c_end == -1)
            c_end = document.cookie.length;

        return decodeURIComponent(document.cookie.substring(c_start, c_end));
    }

    static set(name, value, days) {
        if (days > 0) {
            let seconds = new Date().getTime() + 1000 * 60 * 60 * 24 * days;
            let date = new Date(seconds).toUTCString();
            document.cookie = name + `=${encodeURIComponent(value)}; expires=${date}; path=/`;
        } else {
            document.cookie = name + `=${encodeURIComponent(value)}; path=/`
        }
    }

    static remove(name) {
        if (name)
            document.cookie = name + `=''; expires=${new Date(1).toUTCString()}`;
    }

    static getAll() {
        if (document.cookie.length === 0)
            return null;
        var cookies = {};
        document.cookie.split(';').forEach(pairs => {
            let pair = pairs.split('=');
            cookies[(pair[0] + '').trim()] = decodeURIComponent(pair[1])
        })
        return cookies
    }

    static check(name) {
        name = this.get(name);
        return (name && name !== '') ? true : false;
    }
}

$(document).ready(function () {
    if ($(".promotions-bar").length > 0) {
        var headingBar = $('.promotions-bar .promotions-bar--strap');
        var hiddenContainer = $(".promotions-bar .promotions-bar--content");
        var animateTime = 250;
        var timeout = false;

        headingBar.click(function () {
            if (hiddenContainer.height() === 0) {
                autoHeightAnimate(hiddenContainer, animateTime);
                headingBar.addClass('open');
            } else {
                hiddenContainer.stop().animate({ height: '0' }, animateTime);
                headingBar.removeClass('open');
            }
        });

        // window.resize event listener
        window.addEventListener('resize', function () {
            // clear the timeout
            clearTimeout(timeout);
            // start timing for event "completion"
            timeout = setTimeout(autoHeightAnimate(hiddenContainer, animateTime), animateTime);
        });
    }

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

  $('.faqaccordion a').click(function () {
    $(this).find('.faq-icon').toggle();
  });
});

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
};
