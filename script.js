window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form")

    form.addEventListener("submit", (e) => {
        handleItemForm(e, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();

    return false;

}

function addItemToShoppingList() {
    let ItemName = document.getElementById("item-name");
    let ItemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0,1000000)

    // Creates list item html and appends to page.
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    console.log("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
        deleteButton.addEventListener("click", () => {
        });
}
function createListItemHtml (itemName, itemAmount, id) {
    return `<li id="item${id}">
                ${itemName} - ${itemAmount}
                <button id="button"${id} type="button">Delete Item</button>
            </li>';
}

function removeListItem() {
    let listItem = document.getElementById("item"+id);
    list item.parentNode.removeChild(listItem);
}
    

function getRandomInt(min, max) {
    min = Math.ciel(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}