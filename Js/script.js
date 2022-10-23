/* Apartment types */
const apartmentType = [
    {
        id: 0,
        name: "Apartment",
        area: "Parkland",
        size: "2.5 Km",
        price: "2 million",
        description: "Is a well located apartment that stays close to a very luxury area",
        images: "/assets/home1.jpg",

        apartmentCompartment: [
            {
                id: 0,
                rooms: "1",
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
        images: "/assets/home2.jpg",

        apartmentCompartment: [
            {
                id: 1,
                rooms: "2",
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
        images: "/assets/home3.jpg",

        apartmentCompartment: [
            {
                id: 2,
                rooms: "3",
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
        images: "/assets/home4.jpg",

        apartmentCompartment: [
            {
                id: 3,
                rooms: "4",
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
        images: "/assets/home5.jpg",

        apartmentCompartment: [
            {
                id: 4,
                rooms: "4",
            }
        ]
    },
    {
        id: 5,
        name: "House",
        area: "Parkland",
        size: "2.5 Km",
        price: "2 million",
        description: "A well spacious 2 bedroom apartiment close to a new developed urban infrastructure",
        images: "/assets/home6.jpg",

        apartmentCompartment: [
            {
                id: 4,
                rooms: "2",
            }
        ]
    },
    {
        id: 6,
        name: "Master Sweat",
        area: "Milnerton",
        size: "2.5 Km",
        price: "2 million",
        description: "A well spacious 2 bedroom apartiment close to a new developed urban infrastructure",
        images: "/assets/home7.jpg",

        apartmentCompartment: [
            {
                id: 4,
                rooms: "2",

            }
        ]
    },
    {
        id: 5,
        name: "Penthouse",
        area: "Parkland",
        size: "2.5 Km",
        price: "2 million",
        description: "A well spacious 2 bedroom apartiment close to a new developed urban infrastructure",
        images: "/assets/home8.jpg",

        apartmentCompartment: [
            {
                id: 4,
                rooms: "3",

            }
        ]
    },
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
/* console.log("Apartment", apartTypes); */


houseTypes.forEach((product, index) => {
    let itemP = document.createElement('a');
    let itemText = document.createTextNode(product.typeofHouse);
    itemP.appendChild(itemText);
    apartTypes.appendChild(itemP)
});



/* apartmentType.forEach(element => {
    console.log(element);
}); */


/* Modal */
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');



open.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})


/* Search modal */
const btnSearchOpen = document.getElementById('btn-search-open');
const megaSearchContainer = document.getElementById('mega_search_container');
const searchClose = document.getElementById('close_search');

/* console.log("btn Open", btnSearchOpen);
console.log("search container", megaSearchContainer);
console.log("search close", searchClose); */

btnSearchOpen.addEventListener('click', () => {
    megaSearchContainer.classList.add('show');
})

searchClose.addEventListener('click', () => {
    megaSearchContainer.classList.remove('show')
})
/* End Search modal */


/* Sub-links */
const about_links = [
    {
        id: 0,
        label: 'Who Are We',
    },
    {
        id: 1,
        label: 'Hotel',
    },

    {
        id: 2,
        label: 'Governance',
    },
    {
        id: 3,
        label: 'Carrers',
    },
    {
        id: 4,
        label: 'Offers',
    },
]

/* console.log(about_links); */

const about_us_links = document.getElementsByClassName('about_us')[0]
/* console.log("About Us", about_us_links); */


about_links.forEach((links, index) => {
    let item_Link = document.createElement('a');
    let itemText_link = document.createTextNode(links.label);
    item_Link.appendChild(itemText_link);
    about_us_links.appendChild(item_Link)
});



/* Investors array */
const INVESTOR_links = [
    {
        id: 0,
        label: "Item name"
    },
    {
        id: 1,
        label: "Item name"
    },
    {
        id: 2,
        label: "Item name"
    },
    {
        id: 3,
        label: "Item name"
    },
    {
        id: 4,
        label: "Item name"
    },
]
/* console.log(INVESTOR_links); */

const InvestorsLink = document.getElementsByClassName('InvestorsLink')[0];
/* console.log('Investor', InvestorsLink); */

INVESTOR_links.forEach((invest_product, index) => {
    let InvestorP = document.createElement('a');
    let InvestorText = document.createTextNode(invest_product.label);
    InvestorP.appendChild(InvestorText);
    InvestorsLink.appendChild(InvestorP)
})
/* End Investors array */


/* Help Resources */
const HELP_RESOURCES = [
    {
        id: 0,
        label: 'item name',
    },
    {
        id: 1,
        label: 'item name',
    },
    {
        id: 2,
        label: 'item name',
    },
    {
        id: 3,
        label: 'item name',
    },
    {
        id: 4,
        label: 'item name',
    },
]

/* console.log('Help resources', HELP_RESOURCES); */
const help_resources = document.getElementsByClassName('helpResources')[0];
/* console.log(help_resources); */

HELP_RESOURCES.forEach((resourceItems, index) => {
    let resourcesP = document.createElement('a');
    let resourceText = document.createTextNode(resourceItems.label);
    resourcesP.appendChild(resourceText);
    help_resources.appendChild(resourcesP);
})
/* End Help Resources */



/* Claims */
const CLAIMS = [
    {
        id: 0,
        label: 'item name'
    },
    {
        id: 1,
        label: 'item name'
    },
    {
        id: 2,
        label: 'item name'
    },
    {
        id: 3,
        label: 'item name'
    },
    {
        id: 4,
        label: 'item name'
    },
]
/* console.log('Claims', CLAIMS); */

const claims = document.getElementsByClassName('claims')[0];
/* console.log(claims); */

CLAIMS.forEach((claimsItem, index) => {
    let claimsP = document.createElement('a');
    let claimsText = document.createTextNode(claimsItem.label);
    claimsP.appendChild(claimsText);
    claims.appendChild(claimsP);
})
/* End Claims */



/* offers */
const STAYDURATION = [
    {
        id: 0,
        label: '+1 night',
    },
    {
        id: 1,
        label: '+4 night',
    },
    {
        id: 2,
        label: '+8 night',
    },
    {
        id: 3,
        label: '+10 night',
    },
    {
        id: 4,
        label: '+31 night',
    },
]
/* console.log(STAYDURATION); */


const StayDuration = document.getElementsByClassName('duration')[0];
/* console.log('duration', StayDuration); */

STAYDURATION.forEach((durationItem, index) => {
    let StayDurantionP = document.createElement('a');
    let stayDurationText = document.createTextNode(durationItem.label);
    StayDurantionP.appendChild(stayDurationText);
    StayDuration.appendChild(StayDurantionP);
})
/*End offers */
/* End Sub-links */


/* Product Offers */
const HolidaysPackages = [
    {
        id: 0,
        images: "assets/vocation1.jpg",
        holidayTitle: "Best family vocation in South Africa",
        packagePrice: "R35000",
        packageDescription: "This package is affordable for a family with 3 members only"
    },
    {
        id: 1,
        images: "assets/vocation2.jpg",
        holidayTitle: "Best family vocation in USA",
        packagePrice: "$35000",
        packageDescription: "This package is affordable for a family with 2 members only"
    },
    {
        id: 2,
        images: "assets/vocation3.jpg",
        holidayTitle: "Best family vocation in Europe",
        packagePrice: "€35000",
        packageDescription: "This package is affordable for a family with 2 members only"
    },
    {
        id: 3,
        images: "assets/vocation4.jpg",
        holidayTitle: "Best family vocation in Angola",
        packagePrice: "53000AOA",
        packageDescription: "This package is affordable for a family with 4 members only"
    },
]

const myPackages = document.querySelector(".myPackages")
/* console.log("div", myPackages);
 */
const showInHtml = HolidaysPackages.map((packagesItem, index) => {
    return `
    <div class="card-offer" 
        <span></span>
        <img class="img" src="${packagesItem.images}" id="images" alt="">
        <div class="text">
        <p class="offer-price"> Price - ${packagesItem.packagePrice}</p>
        <br/>
        <h2>${packagesItem.holidayTitle}</h2>
        </div>
    </div> 

    `
})

myPackages.innerHTML = showInHtml;
/* console.log(showInHtml); */
/* End Product Offers */

const ApartmentDescription = document.querySelector(".card-holder");
console.log(ApartmentDescription);

const showApatmentHtml = apartmentType.map((apartmentItem, index) => {
    return `
            <div class="card-offers">
                <img src="${apartmentItem.images}" alt="image-package" />
                <h3>${apartmentItem.name}</h3>
                <h2>${apartmentItem.area}</h2>
            <div class="card-content">
            <div class="tinyheading">
                <p>Price - ${apartmentItem.price}</p>
                <span>Size - ${apartmentItem.size}</span>
                <p>${apartmentItem.description}</p>
            </div>
            <div class="buy-now">
                <a class="btn-buy-now" href="#">Check Now</a>
                <span class="stars">
                <div class="rating-text">
                    <p>rating</p>
                </div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </span>
            </div>
            </div>
            </div>

    `
})
ApartmentDescription.innerHTML = showApatmentHtml;




/* Array of countries */
const ALL_COUNTRIES = [
    {
        id: 0,
        countryName: "Angola",
        population: "32,000 000",
        provincies: "18",
        president: "João Lourenço",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "kwanza",
        short_video: "",
    },
    {
        id: 1,
        countryName: "South Africa",
        population: "50,000 000",
        provincies: "18",
        president: "Cyril Ramaphosa",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "rand",
        short_video: "",
    },

    {
        id: 2,
        countryName: "United State of America",
        population: "78,000 000",
        provincies: "18",
        president: "John Biden",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "dollar",
        short_video: "",
    },
    {
        id: 3,
        countryName: "Brasil",
        population: "32,000 000",
        provincies: "18",
        president: "Jair Bolsonaro",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "kwanza",
        short_video: "",
    },

    {
        id: 4,
        countryName: "Portugal",
        population: "70,000 000",
        provincies: "18",
        president: "Marcelo Ribeiro",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "euro",
        short_video: "",
    },

    {
        id: 5,
        countryName: "China",
        population: "32,000 000",
        provincies: "18",
        president: "Xii Jin Ping",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "yuan",
        short_video: "",
    },

    {
        id: 6,
        countryName: "Spain",
        population: "32,000 000",
        provincies: "18",
        president: "Pedro Sánchez",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "euro",
        short_video: "",
    },
    {
        id: 7,
        countryName: "England",
        population: "52,000 000",
        provincies: "18",
        president: "Elizabeth Truss",
        languages: "20",
        imgFlag: "assets/Angola_flag.png",
        currencyName: "euro",
        short_video: "",
    },
]
/* console.log('All countries',ALL_COUNTRIES); */
/* End Array of countries */


/*Merge apartmentType array and HolidaysPackages array*/
const merge = [...new Set([...ALL_COUNTRIES, ...apartmentType, ...apartmentType, ...HolidaysPackages, ...STAYDURATION, ...houseTypes])];
console.log("Merged arrays", merge);
/* End mergin arrays */