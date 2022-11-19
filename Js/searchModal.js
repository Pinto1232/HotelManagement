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