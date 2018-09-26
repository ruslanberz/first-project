

$(document).ready(function () {

    //Prevent preudobuttons click action 

    $(".not-a-button").click(function (e) {
        e.preventDefault();
    });

 //This vill validate e-mail format: 123@123.az
    function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
     //mobile-menu plugin
    $('#simple-menu').sidr();

    //mobile menu plugin handler
    $(".mob-menu-li").click(function (e) {
        e.preventDefault();
        $(this).find("ul").slideToggle();
      

         if($(this).find("span i").hasClass("fa-angle-down")){
             $(this).find("span i").removeClass("fa-angle-down");
             $(this).find("span i").addClass("fa-angle-up");
        }
        else{
            $(this).find("span i").removeClass("fa-angle-up");
            $(this).find("span i").addClass("fa-angle-down");
        }

    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

       //Contact form fill handler 
    $("#send-message").submit(function(e){
        e.preventDefault();
        if ($("#msg-name").val()=="") {
            $("#message").text("Please enter your name!").slideDown("slow");

          
     
        }  
        else if ($("#msg-email").val()==""||!validateEmail($("#msg-email").val())) {
           
            $("#message").text("Please enter valid email address.");
        }

        else if ($("#msg-msg").val()=="")
        {
            $("#message").text("Please enter your message.").fadeIn("slow");
        }   else {
            $("#message").text("");
            $("#send-message").addClass("d-none");
            var name=$("#msg-name").val();
            $("#person-name").text(name);
            $("#msg-sent").css("display","block");

            
        }
    });


    $("#longmenu").hover(function () {
        $("#here").addClass("d-flex");
    }, function () {
        $("#here").removeClass("d-flex");

    });

    //scroll to top Button 
    $(".scrollup").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
//scroll to top and menu appearence /disapppearence
    var $heightz = $(window).scrollTop();
    if ($heightz > 0) {
        $('.menu').addClass("fixedheader");
        $(".scrollup").removeClass("d-none");
    }

    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 0) {
            $("#top-header").addClass("d-none");
            $('.menu').addClass("fixedheader");
            $(".scrollup").removeClass("d-none");
            $("#search").addClass("fixsearch");



        } else {
            if ($("#top-header").hasClass("d-none")) {
                $("#top-header").removeClass("d-none");
                $(".menu").removeClass("fixedheader");
                $('.scrollup').addClass("d-none");
                $("#search").removeClass("fixsearch");

            }

        }
    });


//isotope plugin

    var $grid = $('.myverystrangediv').isotope({
        // options
        itemSelector: '.image-grid',
        layoutMode: 'fitRows',

    });
    $('.stopa').on('click', function (e) {
        e.ventDefault;
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });


    });


//Search form toggler
    $(".searchactivate").click(function () {
      
     
        $("#search").fadeToggle("slow");
    });



  
    //Owl testimonial section
    $("#testimonial_slider").owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        margin: 15,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,

            }
        }
    });


    //Owl latestnews section
    $("#latestnews_slider").owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        margin: 15,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,

            }
        }
    });

//Owl upcoming section

    $("#upcoming-slider").owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        margin: 15,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,

            }
        }
    });



});


