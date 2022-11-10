// Your code here
window.addEventListener('DOMContentLoaded', event => {
    const itemName = document.getElementById('name');
    const itemType = document.getElementById('type');
    const shoppinglist = document.getElementById('shopping-list')

    const btn = document.getElementById('add');
    btn.addEventListener('click', event => {
        event.preventDefault();
        const newLi = document.createElement('li');
        newLi.innerText = itemName.value;
        newLi.setAttribute('data-type', itemType.value);

        shoppinglist.appendChild(newLi);

    });
})
