const script = document.createElement("script");
script.setAttribute("src", "https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js")
document.body.appendChild(script);

$(document).ready(
    function () {

        const replaceContentDiv = $('.vc_row.wpb_row.vc_inner.vc_row-fluid.vc_row-o-equal-height.vc_row-o-content-top.vc_row-flex');

        replaceContentDiv.attr('class', 'slider');

        const cloneButton = $(' .vc_btn3-container.hp_240122_dev-bnnr_btn.hp_240122_dev-bnnr_btn-mbl.vc_btn3-center.vc_custom_1705973392048.vc_do_btn');
        console.log(cloneButton);

        replaceContentDiv.children().each(function () {
            const currentElement = $(this);
            const slide = currentElement.find('.vc_column-inner .wpb_wrapper').eq(0);
            const buttonText = slide.children().last().children().first().children().first().text();
            cloneButton.clone().appendTo(slide).find('a').text('Shop ' + buttonText);
        });

        cloneButton.remove();

        $('.slider').slick({
            slidesToShow: 3,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '-40px',
                    Infinity: true,
                    slidesToShow: 1,
                },
            }]
        });

    });
