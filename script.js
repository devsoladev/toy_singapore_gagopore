function handleFormSubmit(event) {
	event.preventDefault();
	const title = document.querySelector('#title').value;
	const image = document.querySelector('#image').value;
	const description = document.querySelector('#description').value;
	const addForm = document.querySelector('#add-form');

	addCard(title, image, description);
	addForm.reset();
	closeModal();
}

function addCard(title, image, description) {
	const div = document.createElement('div');
	const container = document.querySelector('.container');

	div.classList.add('card');
	div.innerHTML = `<img src="${image}" alt="Thumbnail"><div class="contents"><h3 class="title">${title}</h3> <div class="description">${description}</div></div>`;
	container.appendChild(div);
}

function closeModal() {
	document.querySelector('#modal').style.display = 'none';
}

document.querySelector('#modal').style.display = 'none';
document.querySelector('.add-btn').onclick = function () {
	document.querySelector('#modal').style.display = 'block';
};
document.querySelector('.close-btn').onclick = function () {
	document.querySelector('#modal').style.display = 'none';
};

const addForm = document.querySelector('#add-form');
addForm.addEventListener('submit', handleFormSubmit);
