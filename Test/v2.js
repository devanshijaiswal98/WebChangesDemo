//get the main div in which we want to show the change
const myDiv=document.querySelector('#bc-free-free-one');

// parent container
let mainDiv= myDiv.querySelector(".row");
mainDiv.querySelector('.bc-free-two').querySelector('.bc-free-two-image').remove();

//Changing both the titles
let paraHeading=mainDiv.querySelector('.bc-free-two').querySelector('.bc-free-two-content').querySelector('div').querySelector('div').querySelector('p');
paraHeading.innerText="Benifits from every day use.";

mainDiv.querySelector('.bc-free-two').querySelector('div').querySelector('div').querySelector('p').innerText="Benifits from every day use.";

// Main container where we want to change
const Container=mainDiv.querySelector('.bc-free-two').querySelector('.bc-free-two-content').querySelector('.bc-holder');

//removing unwanted childs
let child = Container.lastElementChild;
 while (child) {
            Container.removeChild(child);
            child = Container.lastElementChild;
        }

//array of all elements which we have add
const imageLinks=['https://ruffgreens.com/cdn/shop/files/skin-icon-new_1_94x94.png?v=1653306756','https://ruffgreens.com/cdn/shop/files/energy-icon-new_1_94x94.png?v=1653306756','https://ruffgreens.com/cdn/shop/files/joint-icon-new_1_94x94.png?v=1653306756','https://ruffgreens.com/cdn/shop/files/digest-icon-new_1_94x94.png?v=1653306756'];

const titles=['Coat & Skin Care','Youthful Energy','Mobility & Joint','Digestion & Elimination'];

const descriptions=['Omegas Oils support a Shiny Healthy Coat and Less Skin Irritation','Essential Vitamins and Minerals that can very quickly boost your dog’s energy level','Balanced Omega Oils to support your pups mobility and joint health','Powerfully Benifical Probiotics to Support Healthy Digestive'];


for (var row = 0; row < imageLinks.length; row++) {
		let newImage= document.createElement("img");
		newImage.setAttribute('src',imageLinks[row]);
		newImage.setAttribute('loading','lazy');
		newImage.setAttribute('height','94px');
		newImage.setAttribute('width','94px');
		
		let newTitle= document.createElement("p");
		newTitle.setAttribute('class','marg5 font18 db bold');
		newTitle.innerText=titles[row];
		
		let description = document.createElement('p');
		description.innerText=descriptions[row];
		
		
		let rowDiv=document.createElement('div');
		rowDiv.setAttribute('class','bc-free-holder');
		
		
		let rowInnerDiv=document.createElement('div');
		rowInnerDiv.setAttribute('class','bc-inner-holder');
		
		rowInnerDiv.appendChild(newTitle);
		rowInnerDiv.appendChild(description);
		
		rowDiv.appendChild(rowInnerDiv);
		rowDiv.appendChild(newImage);
		Container.appendChild(rowDiv);
}
