$(document).ready(function () {
    const myDiv = $("#free-how");
    myDiv.find("img").remove();

    // Select the .twelve element within the .row.plus-pad element
    const paraDiv = myDiv.find('.row.plus-pad .twelve');
    paraDiv.children().last().remove();

    //change title
    paraDiv.find('p').first().text('Benifits from every day use.').attr('class', 'bc-head-text');

    //remove button
    myDiv.find('.row.new-button').children().last().remove().attr('class', 'row new-button');

    let divContainer = myDiv.find('.row').eq(1);
    if (divContainer.length) {
        divContainer.find('.how-flex').empty().append(newUI());
    }
});

function newUI() {
    //array of all elements which we have add
    const elements = [
        { imageUrl: 'https://iili.io/Jp6kX5J.png', title: 'Coat & Skin Care', description: 'Omegas Oils support a Shiny Healthy Coat and Less Skin Irritation' },
        { imageUrl: 'https://iili.io/Jp6kWJa.png', title: 'Youthful Energy', description: 'Essential Vitamins and Minerals that can very quickly boost your dog’s energy level' },
        { imageUrl: 'https://iili.io/Jp6kjbR.png', title: 'Mobility & Joint', description: 'Balanced Omega Oils to support your pups mobility and joint health' },
        { imageUrl: 'https://iili.io/Jp6khOv.png', title: 'Digestion & Elimination', description: 'Powerfully Benifical Probiotics to Support Healthy Digestive' }
    ];

    return elements.map(function (item) {
        return $(`
            <div class="how-box">
                <p class="marg5 font18 bold">${item.title}</p>
                <p> ${item.description} </p>
                <img src="${item.imageUrl}" loading="lazy"/>
            </div>
        `);
    });
}