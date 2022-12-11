(function ($) {
  "use strict";
  
  //MainPage Username Display
  var welcome_text
  if (localStorage.getItem('user')==null){
    welcome_text='Create your music List'
  }
  else{
    welcome_text='Create '+localStorage.getItem('user')+'\'s music List'
  }
  $('.local-btn').text(welcome_text)
  
  //Search bar
  $("#searchBtn").click(function () {
    var search_content = $(".search-content").val();

    if (!search_content) {
      return;
    }

    $.get(
      "https://1w6pxgofqa.execute-api.us-east-1.amazonaws.com/REDKKPrototype/rapid-spotify-search?search_content=" +
        search_content,
      function (data, status) {
        console.log("data -> :", data);

        var trackid = data.tracks.items[0].data.id;
        console.log("trackid -> :", trackid);

        $("#search_result iframe").attr(
          "src",
          "https://open.spotify.com/embed/track/" +
            trackid +
            "?utm_source=generator"
        );
      }
    );
  });

  //Create List
  $(".local-btn").click(function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        $("#localInfo").text("Latitude: " + position.coords.longitude);
      });
    } else {
      $("#localInfo").text("Geolocation is not supported by this browser.");
    }
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".nav-bar").addClass("nav-sticky");
    } else {
      $(".nav-bar").removeClass("nav-sticky");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 768) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Top News Slider
  $(".tn-slider").slick({
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Category News Slider
  $(".cn-slider").slick({
    autoplay: false,
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Related News Slider
  $(".sn-slider").slick({
    autoplay: false,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  
  //   login
  $(".login-btn").click(function () {
    var data = $("#loginForm").serializeArray();
    var res = data.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
    console.log("res -> :", res);

    var data = `{"query":"SELECT surname FROM REDKK.Login WHERE username=\\"${res.username}\\" AND password=\\"${res.password}\\""}`;

    $.ajax({
      url: "https://1w6pxgofqa.execute-api.us-east-1.amazonaws.com/REDKKPrototype",
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      data,
      success: function (data) {
        console.log("data -> :", data);

        if (data.totalRows === "0") {
          alert("User Not Found, Please Invalid username or password");
          return;
        }

        var value = data.rows[0].f[0].v;

        localStorage.setItem("user", value);
        alert("Welcome Back,"+value+"!")
        window.location.href = "index.html";
      },
    });
  });
})(jQuery);
