$(document).ready(() => {
    const $img = $(".page-main");

    $img.mousemove(function (e) {
        const xPos = $(this).data("xPos");
        const yPos = $(this).data("yPos");
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const left = mouseX - xPos;
        const top = mouseY - yPos;
        const origin = "center center -300";
        const xPerc =
            ((left - $(this).data("itemWidth") / 2) /
                $(this).data("itemWidth")) *
            200;
        const yPerc =
            ((top - $(this).data("itemHeight") / 2) /
                $(this).data("itemHeight")) *
            200;

        TweenMax.to($(this).data("imgOuter"), 3, {
            // rotationX: 0.1 * yPerc,
            // rotationY: -0.1 * xPerc,
            x: 0.3 * yPerc,
            y: -0.3 * xPerc,
            transformOrigin: origin,
            ease: "expo.easeOut",
        });
    });

    $img.each(function () {
        $(this).data("xPos", $(this).offset().left);
        $(this).data("yPos", $(this).offset().top);
        $(this).data("itemWidth", $(this).width());
        $(this).data("itemHeight", $(this).height());
        $(this).data("imgOuter", $(this).find(".page-main__image-container"));
    });

    var tl = gsap.timeline();
    tl.from(".page-main__heading", {
        duration: 1,
        y: -10,
        opacity: 0,
    })
        .from(".page-main__description", { duration: 1, y: -10, opacity: 0 })
        .from(".page-main__button", { duration: 1, y: -10, opacity: 0 });
});
