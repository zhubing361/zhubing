(function () {
    var g = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (g.Android() || g.BlackBerry() || g.iOS() || g.Opera() || g.Windows())
        }
    };
    var e = function () {
        if (!g.any()) {
            $(".js-fullheight").css("height", $(window).height());
            $(window).resize(function () {
                $(".js-fullheight").css("height", $(window).height())
            })
        }
    };
    var d = function () {
        var k = 0;
        $(".animate-box").waypoint(function (i) {
            if (i === "down" && !$(this.element).hasClass("animated")) {
                k++;
                $(this.element).addClass("item-animate");
                setTimeout(function () {
                    $("body .animate-box.item-animate").each(function (m) {
                        var l = $(this);
                        setTimeout(function () {
                            var n = l.data("animate-effect");
                            if (n === "fadeIn") {
                                l.addClass("fadeIn animated")
                            } else {
                                if (n === "fadeInLeft") {
                                    l.addClass("fadeInLeft animated")
                                } else {
                                    if (n === "fadeInRight") {
                                        l.addClass("fadeInRight animated")
                                    } else {
                                        l.addClass("fadeInUp animated")
                                    }
                                }
                            }
                            l.removeClass("item-animate")
                        }, m * 200, "easeInOutExpo")
                    })
                }, 100)
            }
        }, {
            offset: "85%"
        })
    };
    var a = function () {
        $(".js-lonon-nav-toggle").on("click", function (k) {
            k.preventDefault();
            var i = $(this);
            if ($("body").hasClass("offcanvas")) {
                i.removeClass("active");
                $("body").removeClass("offcanvas")
            } else {
                i.addClass("active");
                $("body").addClass("offcanvas")
            }
        })
    };
    var h = function () {
        $(document).on(function (k) {
            var i = $("#lonon-aside, .js-lonon-nav-toggle");
            if (!i.is(k.target) && i.has(k.target).length === 0) {
                if ($("body").hasClass("offcanvas")) {
                    $("body").removeClass("offcanvas");
                    $(".js-lonon-nav-toggle").removeClass("active")
                }
            }
        });
        $(window).scroll(function () {
            if ($("body").hasClass("offcanvas")) {
                $("body").removeClass("offcanvas");
                $(".js-lonon-nav-toggle").removeClass("active")
            }
        })
    };
    var j = function () {
        var i = $(".image-content").outerHeight();
        if ($(window).width() <= 992) {
            $("#sticky_item").trigger("sticky_kit:detach")
        } else {
            $(".sticky-parent").removeClass("stick-detach");
            $("#sticky_item").trigger("sticky_kit:detach");
            $("#sticky_item").trigger("sticky_kit:unstick")
        }
        $(window).resize(function () {
            var k = $(".image-content").outerHeight();
            $(".sticky-parent").css("height", k);
            if ($(window).width() <= 992) {
                $("#sticky_item").trigger("sticky_kit:detach")
            } else {
                $(".sticky-parent").removeClass("stick-detach");
                $("#sticky_item").trigger("sticky_kit:detach");
                $("#sticky_item").trigger("sticky_kit:unstick");
                $("#sticky_item").stick_in_parent()
            }
        });
        $(".sticky-parent").css("height", i);
        $("#sticky_item").stick_in_parent()
    };
    var c = document.querySelectorAll(".btn .blog-entry .blog-img ol.comment-list li.comment .reply a");
    for (var f = 0; f < c.length; f++) {
        var b = c[f];
        b.addEventListener("click", function () {
            if (!b.classList.contains("active")) {
                b.classList.add("active")
            } else {
                b.classList.remove("active")
            }
        })
    }
    $(function () {
        e();
        d();
        a();
        h();
        j()
    })

    //菜单切换
    $('#lonon-main-menu').on('click', 'li', function () {
        $(this).addClass("lonon-active").siblings().removeClass("lonon-active")
    })
}());
