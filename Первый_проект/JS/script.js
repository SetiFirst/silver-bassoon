// Получаем теги имен и отзывов

let namePrevRewiows = document.getElementById('prevName'); // Получаем h3  у прошлого отзыва
let textPrevRewiows = document.getElementById('textPrevRewiows'); // Получаем text  у прошлого отзыва
let namePresentRewiows = document.getElementById('presentName'); // Получаем h3  у Нынешнего отзыва
let textPresentRewiows = document.getElementById('textPresentRewiows'); // Получаем text  у нынешнего отзыва
let nameNextRewiows = document.getElementById('nextName'); // Получаем h3  у следующего отзыва
let textNextRewiows = document.getElementById('textNextRewiows'); // Получаем text  у следующего отзыва
// console.log(namePrevRewiows);

// Получаем  

//Получаем контент тегов свыше

let namePrevRewiowsText = namePrevRewiows.textContent;
let textPrevRewiowsText = textPrevRewiows.textContent; 
let namePresentRewiowsText = namePresentRewiows.textContent; 
let textPresentRewiowsText = textPresentRewiows.textContent; 
let nameNextRewiowsText = nameNextRewiows.textContent; 
let textNextRewiowsText = textNextRewiows.textContent;
// namePrevRewiows.textContent = 'dsdfsd'

// Получаем коллекцию элементов

let parent = document.getElementById('dots-row');
let parentChildrenCollection = parent.children; // Collection

let activeDotsBtnSrc = parentChildrenCollection.item(0).children.item(0).src; // Получаем активную точку
let passiveDotsBtnSrc = parentChildrenCollection.item(1).children.item(0).src; // Получаем пассивную точку
console.log(activeDotsBtnSrc, passiveDotsBtnSrc);

// Создаем массив с данными отзывов

let rewiowsArray = [
	{
		name: 'Кира Иванова',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.<br><div class="br"></div>Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. ',

	},{
		name: 'Яна Жернова',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia eget mattis orci aliquam enim tincidunt gravida aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt. Pretium dictum odio feugiat auctor diam sit viverra gravida. Lobortis arcu rhoncus, mi mi vitae feugiat amet, vitae ac. Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit vestibulum feugiat proin tempor, justo. Diam commodo, pellentesque at porttitor tristique faucibus faucibus morbi. Bibendum pretium lacus, tempus viverra vitae odio nunc eget.<br><div class="br"></div>Tortor fermentum orci neque sed. Mauris faucibus diam lorem erat ullamcorper donec egestas neque. Maecenas malesuada mauris magnis sed id. Luctus vitae justo, in consectetur arcu. ',
	},{
		name: 'Олег Мазахистов',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia eget mattis orci aliquam enim tincidunt gravida aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt. Pretium dictum odio feugiat auctor diam sit viverra gravida. Lobortis arcu rhoncus, mi mi vitae feugiat amet, vitae ac. Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit vestibulum feugiat proin tempor, justo. Diam commodo, pellentesque at porttitor tristique faucibus faucibus morbi. Bibendum pretium lacus, tempus viverra vitae odio nunc eget.<br><div class="br"></div>Tortor fermentum orci neque sed. Mauris faucibus diam lorem erat ullamcorper donec egestas neque. Maecenas malesuada mauris magnis sed id. Luctus vitae justo, in consectetur arcu.',
	},{
		name: 'Александра Дмитриева',
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia eget mattis orci aliquam enim tincidunt gravida aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt. Pretium dictum odio feugiat auctor diam sit viverra gravida. Lobortis arcu rhoncus, mi mi vitae feugiat amet, vitae ac. Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit vestibulum feugiat proin tempor, justo. Diam commodo, pellentesque at porttitor tristique faucibus faucibus morbi. Bibendum pretium lacus, tempus viverra vitae odio nunc eget.<br><div class="br"></div>Tortor fermentum orci neque sed. Mauris faucibus diam lorem erat ullamcorper donec egestas neque. Maecenas malesuada mauris magnis sed id. Luctus vitae justo, in consectetur arcu.`,
	},
];

// Создание переменных для индексации слайдов

let rewiowsArrayLength = rewiowsArray.length;
let indexPrevSlide = rewiowsArrayLength - 1;
let indexJustSlide = 0;
let indexNextSlide = 1;

function click(){
	// Для активного слайда

	namePresentRewiows.textContent = rewiowsArray[indexJustSlide].name;
	textPresentRewiows.innerHTML = rewiowsArray[indexJustSlide].text;

	// Для предыдущего слайда

	namePrevRewiows.textContent = rewiowsArray[indexPrevSlide].name;
	textPrevRewiows.innerHTML = rewiowsArray[indexPrevSlide].text;	

	// Для следующего слайда

	nameNextRewiows.textContent = rewiowsArray[indexNextSlide].name;
	textNextRewiows.innerHTML = rewiowsArray[indexNextSlide].text;	
	
	// Переключение точек

	parentChildrenCollection.item(indexJustSlide).children[0].src = passiveDotsBtnSrc;
	parentChildrenCollection.item(indexNextSlide).children[0].src = activeDotsBtnSrc;

	// Изменение индексов слайдов

	indexPrevSlide = indexJustSlide;
	indexJustSlide = indexNextSlide;
	indexNextSlide += 1;

	// Проверка на максимальный элемент

	if ( indexNextSlide === rewiowsArray.length ){
		indexNextSlide = 0;
	};

};

setInterval(click, 10000);

console.log(rewiowsArray[0].name);

// console.log(arrayOfDots[1]);
// let newDoc = new DOMParser().parseFromString(arrayOfDots[0],'text/html');
// let vffv = newDoc.getElementsByTagName('img')[0].src;

