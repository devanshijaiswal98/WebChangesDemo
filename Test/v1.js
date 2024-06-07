//get the main div in which we want to show the change
const myDiv=document.querySelector('#free-how');

//removing top-left image 
let removeImg= myDiv.querySelector("img");
removeImg.remove();

//removed the description under the heading
let paraDiv=myDiv.querySelector(".row.plus-pad").querySelector(".twelve");
paraDiv.removeChild(paraDiv.lastChild);

//change the heading text and its style
let paraToChange=paraDiv.querySelector('p');
paraToChange.innerText="Benifits from every day use.";
paraToChange.setAttribute('class', 'bc-head-text');

//remove bottom button
const rowButton=myDiv.querySelector(".row.new-button");
rowButton.removeChild(rowButton.lastChild);
rowButton.setAttribute('class','row new-button');


const Container= myDiv.querySelectorAll(".row");
const divContainer=Container[1].querySelector(".how-flex");

//removing unwanted childs
let child = divContainer.lastElementChild;
 while (child) {
            divContainer.removeChild(child);
            child = divContainer.lastElementChild;
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
		newTitle.setAttribute('class','marg5 font18 bold');
		//newTitle.setAttribute('aria-hidden','true');
		newTitle.innerText=titles[row];
		
		let description = document.createElement('p');
		description.innerText=descriptions[row];
		
		
		let rowDiv=document.createElement('div');
		rowDiv.setAttribute('class','how-box');
		
		
		rowDiv.appendChild(newTitle);
		rowDiv.appendChild(description);
		rowDiv.appendChild(newImage);
		
		divContainer.appendChild(rowDiv);

}

