/* Apartment types */
const apartmentType = [
    {
        id: 0,
        name: "Apartment",
        area: "Parkland",
        size: "2.5 Km",
        price: "2 million",
        description: "Is a well located apartment that stays close to a very luxury area",

        apartmentCompartment: [
            {
                id: 0,
                rooms: "1",
                images: "/assets/icon.png",
            }
        ]

    },

    {
        id: 1,
        name: "Apartment",
        area: "Milnerton",
        size: "4.5 Km",
        price: "2 million",
        description: "If you like to live in a area close to a vibrant night life, here is the right spot",

        apartmentCompartment: [
            {
                id: 1,
                rooms: "2",
                images: "/assets/icon.png",
            }
        ]
    },
    {
        id: 2,
        name: "Apartment",
        area: "Durban Ville",
        size: "2.5 Km",
        price: "5 million",
        description: "Across the sea side, this is a perfect area for your family to live",

        apartmentCompartment: [
            {
                id: 2,
                rooms: "3",
                images: "/assets/icon.png",
            }
        ]
    },
    {
        id: 3,
        name: "Apartment",
        area: "Cape Town - CBD",
        size: "1.5 Km",
        price: "3 million",
        description: "Living in the heal is your thing? Then come and grab this vastiuous luxury apartment with breath taking sight see",

        apartmentCompartment: [
            {
                id: 3,
                images: "/assets/icon.png",
            }
        ]
    },
    {
        id: 4,
        name: "Apartment",
        area: "Parkland",
        size: "2.5 Km",
        price: "2 million",
        description: "A well spacious 2 bedroom apartiment close to a new developed urban infrastructure",

        apartmentCompartment: [
            {
                id: 4,
                images: "/assets/icon.png",
            }
        ]
    }
];


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
console.log("Apartment", apartTypes);


houseTypes.forEach((product, index) => {
    let itemP = document.createElement('a');
    let itemText = document.createTextNode(product.typeofHouse);
    itemP.appendChild(itemText); 
    apartTypes.appendChild(itemP)
});



apartmentType.forEach(element => {
    console.log(element);
});


/* Modal */
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

/* console.log(open);
console.log(modal_container);
console.log(close); */


open.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})