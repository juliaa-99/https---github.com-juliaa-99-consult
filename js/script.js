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
        }, 2000);
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
        //$('input[name="kpp"]').mask("000000-000000000");
        //$('input[name="inn"]').mask("0000000-0000000000000000");
    }

    function initListeners() {
        $("#phone").on("blur", validatePhone);
        $("#phone3").on("blur", validatePhone3);
        $("#phone4").on("blur", validatePhone4);

        $("#email").on("blur", validateEmail);
        $("#email2").on("blur", validateEmail2);
        $("#email3").on("blur", validateEmail3);
        $("#email4").on("blur", validateEmail4);
        $("#email5").on("blur", validateEmail5);

        $("#check").on("blur", validateCheck);
        $("#check2").on("blur", validateCheck2);
        $("#check3").on("blur", validateCheck3);
        $("#check4").on("blur", validateCheck4);
        $("#check5").on("blur", validateCheck5);
        //$(".kpp").on("blur", validateKpp);
        //$(".inn").on("blur", validateInn);

        $(".submitBtn").on("click", validateForm);
        $(".submitBtn2").on("click", validateForm2);
        $(".submitBtn3").on("click", validateForm3);
        $(".submitBtn4").on("click", validateForm4);
        $(".submitBtn5").on("click", validateForm5);

    }



    function validatePhone() {
        var isValid = false;
        var length = $("#phone").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $("#phone").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone3() {
        var isValid = false;
        var length = $("#phone3").val().length;
        if (length == 18) {
            $(".phoneValidationImg3").html( '').parent().parent().removeClass('er');
            $("#phone3").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg3").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone4() {
        var isValid = false;
        var length = $("#phone4").val().length;
        if (length == 18) {
            $(".phoneValidationImg4").html( '').parent().parent().removeClass('er');
            $("#phone4").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg4").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }


    function validateCheck() {
        var isValid = false;
        if ($('#check').is(':checked')) {

            $(".checkValidationImg").html( '').parent().parent().removeClass('er');
            $("#check").removeClass("invalid");
            isValid  = true;
        } else {
            $(".checkValidationImg").html('Согласитесь с условиями конфиденциальности').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateCheck2() {
        var isValid = false;
        if ($('#check2').is(':checked')) {

            $(".checkValidationImg2").html( '').parent().parent().removeClass('er');
            $("#check2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".checkValidationImg2").html('Согласитесь с условиями конфиденциальности').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateCheck3() {
        var isValid = false;
        if ($('#check3').is(':checked')) {

            $(".checkValidationImg3").html( '').parent().parent().removeClass('er');
            $("#check3").removeClass("invalid");
            isValid  = true;
        } else {
            $(".checkValidationImg3").html('Согласитесь с условиями конфиденциальности').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateCheck4() {
        var isValid = false;
        if ($('#check4').is(':checked')) {

            $(".checkValidationImg4").html( '').parent().parent().removeClass('er');
            $("#check4").removeClass("invalid");
            isValid  = true;
        } else {
            $(".checkValidationImg4").html('Согласитесь с условиями конфиденциальности').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateCheck5() {
        var isValid = false;
        if ($('#check5').is(':checked')) {

            $(".checkValidationImg5").html( '').parent().parent().removeClass('er');
            $("#check5").removeClass("invalid");
            isValid  = true;
        } else {
            $(".checkValidationImg5").html('Согласитесь с условиями конфиденциальности').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }


    /*function validateKpp() {
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
    }*/

    function validateEmail() {
        var emailAddress = $("#email").val().trim().toLowerCase();
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
            $("#email").removeClass("invalid");
        } else {
            $(".emailValidationImg").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }
    function validateEmail2() {
        var emailAddress = $("#email2").val().trim().toLowerCase();
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
            $(".emailValidationImg2").html( '').parent().parent().removeClass('er');
            $("#email2").removeClass("invalid");
        } else {
            $(".emailValidationImg2").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateEmail3() {
        var emailAddress = $("#email3").val().trim().toLowerCase();
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
            $(".emailValidationImg3").html( '').parent().parent().removeClass('er');
            $("#email3").removeClass("invalid");
        } else {
            $(".emailValidationImg3").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateEmail4() {
        var emailAddress = $("#email4").val().trim().toLowerCase();
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
            $(".emailValidationImg4").html( '').parent().parent().removeClass('er');
            $("#email4").removeClass("invalid");
        } else {
            $(".emailValidationImg4").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateEmail5() {
        var emailAddress = $("#email5").val().trim().toLowerCase();
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
            $(".emailValidationImg5").html( '').parent().parent().removeClass('er');
            $("#email5").removeClass("invalid");
        } else {
            $(".emailValidationImg5").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }


    function validateForm() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid = true;

        if (!validatePhone()) {
            $("#phone").addClass("invalid");
            formIsValid = false;
        } else {
            $("#phone").removeClass("invalid");
        }

        if (!validateEmail()) {
            $("#email").addClass("invalid");
            formIsValid = false;
        } else {
            $("#email").removeClass("invalid");
        }



        if (!validateCheck()) {
            $("#check").addClass("invalid");
            formIsValid = false;
        } else {
            $("#check").removeClass("invalid");
        }

        /*if (!validateKpp()) {
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
        }*/
    }

    function validateForm2() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid2 = true;

        if (!validateEmail2()) {
            $("#email2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#email2").removeClass("invalid");
        }



        if (!validateCheck2()) {
            $("#check2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#check2").removeClass("invalid");
        }

        /*if (!validateKpp()) {
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
        }*/
    }


    function validateForm3() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid3 = true;

        if (!validatePhone3()) {
            $("#phone3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#phone3").removeClass("invalid");
        }

        if (!validateEmail3()) {
            $("#email3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#email3").removeClass("invalid");
        }



        if (!validateCheck3()) {
            $("#check3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#check3").removeClass("invalid");
        }

        /*if (!validateKpp()) {
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
        }*/
    }


    function validateForm4() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid4 = true;

        if (!validatePhone4()) {
            $("#phone4").addClass("invalid");
            formIsValid4 = false;
        } else {
            $("#phone4").removeClass("invalid");
        }

        if (!validateEmail4()) {
            $("#email4").addClass("invalid");
            formIsValid4 = false;
        } else {
            $("#email4").removeClass("invalid");
        }



        if (!validateCheck4()) {
            $("#check4").addClass("invalid");
            formIsValid = false;
        } else {
            $("#check4").removeClass("invalid");
        }

        /*if (!validateKpp()) {
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
        }*/
    }
    function validateForm5() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid5 = true;


        if (!validateEmail5()) {
            $("#email5").addClass("invalid");
            formIsValid5 = false;
        } else {
            $("#email5").removeClass("invalid");
        }



        if (!validateCheck5()) {
            $("#check5").addClass("invalid");
            formIsValid5 = false;
        } else {
            $("#check5").removeClass("invalid");
        }

        /*if (!validateKpp()) {
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
        }*/
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
