const CARD_DATA = [
    {
        id: "0",
        icons: "fa-solid fa-square-h",
        title: "Hotel Marine",
        hotelDescription: "The hotel to visit with family during the summer"
    },
    {
        id: "1",
        icons: "fa-sharp fa-solid fa-building-columns",
        title: "Bank closer",
        hotelDescription: "Our hotel is closer the beach and shooping"
    },

    {
        id: "2",
        icons: "fa-solid fa-bed",
        title: "Rooms",
        hotelDescription: "We offer rooms for a couple and single visitors"
    },

    {
        id: "3",
        icons: "fa-solid fa-bell-concierge",
        title: "Meals",
        hotelDescription: "We offers breakfast as per customer order"
    },

]



const card_data = document.querySelector(".card_block_main");


const showCardData = CARD_DATA.slice(0,4).map((cardItem, index) => {
    return `
    <div class="card_block">
        <div class="icons">
            <i class="${cardItem.icons}"></i>
        </div>
        <h3>${cardItem.title}</h3>
        <p>${cardItem.hotelDescription}</p>
    </div>
    
    `
})

card_data.innerHTML = showCardData;
