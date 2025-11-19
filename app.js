//filter products

function productsFilter() {

    const select = document.getElementById('filter-roast')
    const clearBtn = document.getElementById('product-clear')
    const cards = document.querySelectorAll('#product-grid .card')

    //this function will run when we want to update the display

    function filterProducts() {

        const choice = select.value;

        cards.forEach(card => {
            const roast = card.dataset.roast
            //show all cards, or only those that match the select roast

            if (choice === "" || roast === choice) {
                card.style.display = "block"; //display it
            }
            else {
                card.style.display = "none"; //hide it
            }
        });
    }

    //run the filter when the dropdown changes
    select.addEventListener('change', filterProducts);

    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            select.value = "";
            filterProducts();
        })
    }
    filterProducts();

}
//run when the page loads
document.addEventListener('DOMContentLoaded', function () {
    productsFilter();
})