function active_nav_menu(element) {
    $('.nav-menu').find('a').removeClass('active');
    $('.nav-menu a#' + element).addClass('active');
}

function showMenu(obj) {
    var flag = $(obj).attr("data-rel");
    if (flag == "false") {
        $(".main-nav").slideDown(500);
        $(obj).attr("data-rel", true);
        $('.trans_bg').removeClass('hide');
    }
    if (flag == "true") {
        $(".main-nav").slideUp(500);
        $(obj).attr("data-rel", false);
        $('.trans_bg').addClass('hide');
    }
}

function change_hiw_img(ele) {
    $("#hiw_img").removeClass("active");
    var src_img = "image/" + ele + ".png";
    setTimeout(function () {
        $("#hiw_img").addClass("active");
        $("#hiw_img img").attr("src", src_img);
    }, 300);
}

function changeNavMenu() {
    var top_about = $("#get-involved").offset().top,        
        top_how_it_work = $("#how-it-work").offset().top - 90,
        top_experience = $("#experience").offset().top - 90;
        top_dwl = $("#dwl").offset().top,
        top_foot = $("footer").offset().top;

        $(window).scroll(function () {
            var _top = $(this).scrollTop();
            if (_top < top_how_it_work) {
                $(".main-nav a").removeClass("active");
                $(".main-nav a[data-rel=get-involved]").addClass("active");
            }
            else if (_top >= top_how_it_work && _top < top_experience) {
                $(".main-nav a").removeClass("active");
                $(".main-nav a[data-rel=how-it-work]").addClass("active");
            }
            else if (_top >= top_experience && _top < top_dwl) {
                $(".main-nav a").removeClass("active");
                $(".main-nav a[data-rel=experience]").addClass("active");
            }
            else if (_top + $(window).height() == $(document).height()) {
                $(".main-nav a").removeClass("active");
                $(".main-nav a[data-rel=contact]").addClass("active");
            }
        });
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function change_flag(flag) {
    var src_img = "./image/" + flag + ".png";
    $("#flag_top img").attr("src", src_img);
    $("#flag_bottom img").attr("src", src_img);
}

$(document).ready(function () {
    renderLanguage("vi");
    $("#myCarousel").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function () {
        $(this).carousel('next');
    });

    $(".main-nav a").on("click", function () {
        var div = $(this).attr("data-rel");
        var top = $("#" + div).offset().top - 100;
        $(".main-nav a").not(this).removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({ scrollTop: top }, 500);
    });
    $('.trans_bg').on("click", function () {
        $(".main-nav").slideUp(500);
        $('.nav-bar').attr("data-rel", false);
        $('.trans_bg').addClass('hide');
    });

    $("#how-it-work li").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        }
        $("#how-it-work li").removeClass("active");
        var img = $(this).attr("data-rel");
        change_hiw_img(img);
    });

    changeNavMenu();

    $(".language_select").on("change", function () {
        var val = $(this).val();
        if (val == "vi") {
            change_flag("Flag_of_Vietnam");
        } else if (val == "jp") {
            change_flag("Falg_of_Japan");
        } else {
            change_flag("Flag_of_the_United_Kingdom");
        }
        
        renderLanguage(val);
    });

    $(".dwl-now").on("click", function () {
        var os = getMobileOperatingSystem();
        var url = "https://play.google.com/store/apps/details?id=com.akira.nguyen.kanayomi";
        if (os === "Android") {
            url = "https://play.google.com/store/apps/details?id=com.akira.nguyen.kanayomi";
        } else if (os === "iOS") {
            url = "https://itunes.apple.com/us/app/kanayomi/id1315238862";
        }

        window.open(url,'_blank');
    });
});