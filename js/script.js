$(document).ready(function (){
    $('.js-example-basic-multiple').select2();

    $(document).on("select2:open", "select", function() {
        $('.select2-results').mCustomScrollbar();
    });


    $('.js-toggler').on('click', function(){
        $('.header').toggleClass('open');
    });

    $('.footer__tp').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $("#lz").change(function(){
        if($(this).val() == 2){
            $('.form__row').addClass('open');
        }
        if($(this).val() == 1){
            $('.form__row').removeClass('open');
        }
    });
    $("#lz2").change(function(){
        if($(this).val() == 2){
            $('.form__row').addClass('open').removeClass('op');
            $('.button').removeAttr('disabled');

        }

        if($(this).val() == 1){
            $('.form__row').addClass('op').removeClass('open');
            $('.button').removeAttr('disabled');
        }

        if($(this).val() == 0){
            $('.form__row').removeClass('open op');
            $('.button').attr('disabled','disabled');

        }
    });


    $(".header__menu ul li a[href*='#'], .footer__menu li a[href*='#'], .news__sl-item .button[href*='#'], .directions__prices-btn .button[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });




    $('.js-news').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.js-sl').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(window).on('load resize', function() {
        if ($(window).width() < 991) {
            $('.js-slider-projects').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true
            });
        }
    });




    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function() {
        initMasks();
        initListeners();
    });

    function initMasks() {
        $('input[name="phone-number"]').mask("+7 (000) 000-00-00");
        $('input[name="kpp"]').mask("000000-000000000");
        $('input[name="inn"]').mask("0000000-0000000000000000");
    }

    function initListeners() {
        $(".phone-number").on("blur", validatePhone);
        $(".email").on("blur", validateEmail);
        $(".kpp").on("blur", validateKpp);
        $(".inn").on("blur", validateInn);

        $(".submitBtn").on("click", validateForm);
        $(".recallForm").on("click", recallFormValues);
    }



    function validatePhone() {
        var isValid = false;
        var length = $(".phone-number").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $(".phone-number").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }


    function validateKpp() {
        var isValid = false;
        var length = $(".kpp").val().length;
        if (length == 16) {
            $(".kppValidationImg").html( '').parent().parent().removeClass('er');
            $(".kpp").removeClass("invalid");
            isValid  = true;
        } else {
            $(".kppValidationImg").html('КПП введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateInn() {
        var isValid = false;
        var length = $(".inn").val().length;
        if (length == 24) {
            $(".innValidationImg").html( '').parent().parent().removeClass('er');
            $(".inn").removeClass("invalid");
            isValid  = true;
        } else {
            $(".innValidationImg").html('ИНН введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateEmail() {
        var emailAddress = $(".email").val().trim().toLowerCase();
        var pattern = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".emailValidationImg").html( '').parent().parent().removeClass('er');
            $(".email").removeClass("invalid");
        } else {
            $(".emailValidationImg").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateForm() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid = true;

        if (!validatePhone()) {
            $(".phone-number").addClass("invalid");
            formIsValid = false;
        } else {
            $(".phone-number").removeClass("invalid");
        }

        if (!validateEmail()) {
            $(".email").addClass("invalid");
            formIsValid = false;
        } else {
            $(".email").removeClass("invalid");
        }

        if (!validateKpp()) {
            $(".kpp").addClass("invalid");
            formIsValid = false;
        } else {
            $(".kpp").removeClass("invalid");
        }

        if (!validateInn()) {
            $(".inn").addClass("invalid");
            formIsValid = false;
        } else {
            $(".inn").removeClass("invalid");
        }
    }

    function recallFormValues(){
        if(sessionStorage.formValues){
            var form = JSON.parse(sessionStorage.formValues);
            var msg =
                "Date: " + form.date + "\n" +
                "Zip Code: " + form.zip + "\n" +
                "Phone #: " + form.phone + "\n" +
                "SIN: " + form.SIN + "\n" +
                "Email: " + form.email + "\n" +
                "Money: " + form.money + "\n" +
                "Password: " + form.password + "\n";
            alert(msg);
        }
        else{
            alert("No form values stored yet");
        }
    }

});
