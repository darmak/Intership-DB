let servers = [];

const featureBox = document.querySelector('.features-items');
const featuresInp = document.querySelector('.features-input');
const featuresBtn = document.querySelector('.features-btn');

getAllItems(featureBox);

featuresBtn.addEventListener('click', () => {
    const data = {
        name:featuresInp.value,
        status: 'good'
    }
   
    createNewItem(data);
    featuresInp.value = '';
    getAllItems(featureBox);
});

featureBox.addEventListener('click', (event) => {
    if(event.target && event.target.closest("div").classList.contains("features-item")) {
        let idRemoveItem = Number(event.target.closest("div").getAttribute("data-id"));
        removeItem(idRemoveItem);
    }
});


function getAllItems(Box) {
    fetch('/server')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        Box.innerHTML = '';
        data.forEach(item => {
            Box.innerHTML += `<div class="features-item" style="display: flex; border: 1px solid green" data-id="${item.id}">
            <div class="features-item__id">${item.id}</div>
            <div class="features-item__name" style="margin-left: 20px;">${item.name}</div>
            <div class="features-item__Status" style="margin-left: 20px;">${item.status}</div>
        </div>`;
        });
    });
}

function createNewItem(data) {
    fetch('/api/server', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res => {
        const newServer = res.json();
        servers.push(newServer);
    })
}

function removeItem(id) {
    fetch(`/api/server/${id}`, {method: 'DELETE'})
    servers = servers.filter(s => s.id !== id);
    getAllItems(featureBox);
}
 