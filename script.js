const input = document.querySelector('#fruit');
// const suggestions = document.querySelectorAll('.suggestions ul');
const suggestionStartsWithInput = document.querySelector('.starts-with-input');
const suggestionOthers = document.querySelector('.rest-of-suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
	let results = [];
	const userInput = input.value.toLowerCase()

	fruit.filter(function(e){
		if (e.toLowerCase().includes(userInput) && input.value !== ""){
			results.push(e)
		}
	});
	
	showSuggestions(results, userInput);
}

function removeElements() {
	let shownSuggestions = document.querySelectorAll(".list-item")
	shownSuggestions.forEach((item) => {
		item.remove();
	})
}

function showSuggestions(results, inputValue) {
	results.forEach(function(result){

		let startIdx = result.toLowerCase().indexOf(inputValue);
		let endIdx = startIdx + inputValue.length;

		const listItem = document.createElement("li");
		listItem.classList.add("list-item");
		listItem.innerHTML = result.substring(0, startIdx) + "<b>" + result.substring(startIdx, endIdx) + "</b>" + result.substring(endIdx, result.length);		
		
		if (startIdx === 0) {
			suggestionStartsWithInput.appendChild(listItem);
		} else {	
			suggestionOthers.appendChild(listItem);
		}
	});
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	removeElements();
}

input.addEventListener('keyup', removeElements);
input.addEventListener('keyup', search)
suggestions.addEventListener('click', useSuggestion);