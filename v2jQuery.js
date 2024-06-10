$(document).ready(

    function () {
        //get the main div in which we want to show the change
        const myDiv = $('#bc-free-free-one');

        // parent container
        let mainDiv = myDiv.find('.row .bc-free-two');
        mainDiv.find('.bc-free-two-image').remove();

        //Changing both the titles
        mainDiv.find('.bc-free-two-content p').text("Benefits from every day use.");

        mainDiv.find('div div p').text("Benifits from every day use.");

        // Main container where we want to change
        mainDiv.find('.bc-free-two-content .bc-holder').empty().append(newUI());
    });

function newUI() {
    const elements = [
        { imageUrl: 'https://iili.io/Jp6kX5J.png', title: 'Coat & Skin Care', description: 'Omegas Oils support a Shiny Healthy Coat and Less Skin Irritation' },
        { imageUrl: 'https://iili.io/Jp6kWJa.png', title: 'Youthful Energy', description: 'Essential Vitamins and Minerals that can very quickly boost your dog’s energy level' },
        { imageUrl: 'https://iili.io/Jp6kjbR.png', title: 'Mobility & Joint', description: 'Balanced Omega Oils to support your pups mobility and joint health' },
        { imageUrl: 'https://iili.io/Jp6khOv.png', title: 'Digestion & Elimination', description: 'Powerfully Benifical Probiotics to Support Healthy Digestive' }
    ];

    return elements.map(function (item) {
        return $(`
	 		<div class='bc-free-holder'>
	 				<div class='bc-inner-holder'>
	 					<p class='marg5 font18 db bold'> ${item.title}</p>
	 					<p>${item.description}</p>
	 				</div>
	 				<img src='${item.imageUrl}' loading='lazy'/>
	 		</div>
	 		`);
    });
}