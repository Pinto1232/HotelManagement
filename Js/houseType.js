/* Types of infrastructure */
const houseTypes = [
    {
        id: 0,
        typeofHouse: "apartment",
    },
    {
        id: 1,
        typeofHouse: "Single bedroom",
    },
    {
        id: 2,
        typeofHouse: "double bedroom ",
    },
    {
        id: 3,
        typeofHouse: "House",
    },
    {
        id: 4,
        typeofHouse: "Pent House",
    },
]

const apartTypes = document.getElementsByClassName('apart_types')[0]
/* console.log("Apartment", apartTypes); */


houseTypes.forEach((product, index) => {
    let itemP = document.createElement('a');
    let itemText = document.createTextNode(product.typeofHouse);
    itemP.appendChild(itemText);
    apartTypes.appendChild(itemP)
});
