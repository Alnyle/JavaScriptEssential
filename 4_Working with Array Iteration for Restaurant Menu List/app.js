
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const prices = ['$12', '$22.99', '$21.99', '$15'];

// copy copy element using map method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => {
    const p = document.createElement('p');
    const content = document.createTextNode(`${index + 1}: ${item}`);
    p.appendChild(content);
    document.getElementById('breakfastMenuItems').appendChild(p);
});

const breakfast = document.getElementById('breakfastMenuItems').childNodes;

prices.map((item, index) => {
    const price = document.createTextNode(` - ${item}`);
    breakfast[index].appendChild(price);
})


document.getElementById('breakfastTotalItems').textContent = `breakfast Total Items: ${dessertMenu.length}`


// copy element using forEach
const mainCourseMenuItemsHTML = mainCourseMenu.forEach((item, index) => {
    const p = document.createElement('p');
    const content = document.createTextNode(`${index + 1}: ${item}`);
    p.appendChild(content);
    document.getElementById('maincourseMenuItems').appendChild(p);
})
document.getElementById('maincourseTotalItems').textContent = `main course Total Items: ${mainCourseMenu.length}`

// copy elements using loop
let dessert = '';

for(let i = 0; i < dessertMenu.length; i++) {
    dessert += `<p>item ${i + 1}: ${dessertMenu[i]}</p>`
}
document.getElementById('dessertMenuItems').innerHTML = dessert
document.getElementById('dessertTotalItems').textContent = `dessert Total Items: ${dessertMenu.length}`

