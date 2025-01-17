document.getElementById('add-animal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('animal-name').value;
    const species = document.getElementById('animal-species').value;
    const age = document.getElementById('animal-age').value;
    
    const animalList = document.getElementById('animal-list').querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Species: ${species}, Age: ${age}`;
    animalList.appendChild(li);

    document.getElementById('add-animal-form').reset();
});

document.getElementById('assign-enclosure-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const animalId = document.getElementById('animal-id').value;
    const enclosure = document.getElementById('enclosure-name').value;
    
    const enclosureList = document.getElementById('enclosure-list').querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `Animal ID: ${animalId}, Enclosure: ${enclosure}`;
    enclosureList.appendChild(li);

    document.getElementById('assign-enclosure-form').reset();
});

document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const animalId = document.getElementById('animal-id-schedule').value;
    const type = document.getElementById('schedule-type').value;
    const date = document.getElementById('schedule-date').value;
    
    const scheduleList = document.getElementById('schedule-list').querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `Animal ID: ${animalId}, Schedule: ${type}, Date: ${date}`;
    scheduleList.appendChild(li);

    document.getElementById('schedule-form').reset();
});


