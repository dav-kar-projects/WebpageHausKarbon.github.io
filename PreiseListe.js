var date_to_show_winter_prices_as_default = '2023-09-01';
var date_to_show_summer_prices_as_default = '2023-03-01';
var prices = [
    {
        period_de: '29. April - 26. Mai 2023',
        period_it: '29 aprile - 26 maggio 2023',
        period_en: 'April 29 - May 26, 2023',
        studio: 90.00,
        apartment: 100.00
    },
    {
        period_de: '27. Mai - 30. Juni 2023',
        period_it: '27 maggio - 30 giugno 2023',
        period_en: 'May 27 - June 30, 2023',
        studio: 100.00,
        apartment: 120.00
    },
    {
        period_de: '1. Juli - 14. Juli 2023',
        period_it: '1 luglio - 14 luglio 2023',
        period_en: 'July 1 - July 14, 2023',
        studio: 120.00,
        apartment: 140.00
    },
    {
        period_de: '15. Juli - 28. Juli 2023',
        period_it: '15 luglio - 28 luglio 2023',
        period_en: 'July 15 - July 28, 2023',
        studio: 130.00,
        apartment: 150.00
    },
    {
        period_de: '29. Juli - 11. August 2023',
        period_it: '29 luglio - 11 agosto 2023',
        period_en: 'July 29 - August 11, 2023',
        studio: 150.00,
        apartment: 170.00
    },
    {
        period_de: '11. August - 18. August 2023',
        period_it: '11 agosto - 18 agosto 2023',
        period_en: 'August 11 - August 18, 2023',
        studio: 170.00,
        apartment: 190.00
    },
    {
        period_de: '19. August - 25. August 2023',
        period_it: '19 agosto - 25 agosto 2023',
        period_en: 'August 19 - August 25, 2023',
        studio: 150.00,
        apartment: 170.00
    },
    {
        period_de: '26. August - 15. September 2023',
        period_it: '26 agosto - 15 settembre 2023',
        period_en: 'August 26 - September 15, 2023',
        studio: 120.00,
        apartment: 140.00
    },
    {
        period_de: '16. September - 29. September 2023',
        period_it: '16 settembre - 29 settembre 2023',
        period_en: 'September 16 - September 29, 2023',
        studio: 120.00,
        apartment: 140.00
    },
    {
        period_de: '29. September - 06. Oktober 2023',
        period_it: '29 settembre - 06 ottobre 2023',
        period_en: 'September 29 - October 06, 2023',
        studio: 130.00,
        apartment: 150.00
    },
    {
        period_de: '07. Oktober - 03. November 2023',
        period_it: '07 ottobre - 03 novembre 2023',
        period_en: 'October 07 - November 03, 2023',
        studio: 100.00,
        apartment: 120.00
    },
    {
        period_de: '04. November- 01. Dezember2023',
        period_it: '04 novembre - 01 dicembre 2023',
        period_en: 'November 04 - December 01, 2023',
        studio: 90.00,
        apartment: 100.00
    }
];
var winter_prices = [

    {
        period_de: '02. December - 09. Dezember 2023',
        period_it: '02. Dicembre - 09. Dicembre 2023',
        period_en: 'October 07 - November 03, 2023',
        studio: 120.00,
        apartment: 140.00
    },
    {
        period_de: '10. Dezember- 22. Dezember2023',
        period_it: '10. Dicembre- 22. Dicembre',
        period_en: 'November 04 - December 01, 2023',
        studio: 110.00,
        apartment: 130.00
    },
    {
        period_de: '23. Dezember- 29. Dezember2023',
        period_it: '23. Dicembre- 29. Dicembre',
        period_en: 'November 04 - December 01, 2023',
        studio: 150.00,
        apartment: 170.00
    },
    {
        period_de: '30. Dezember- 06. Jänner 2023',
        period_it: '30. Dicembre- 06. Gennaio 2023',
        period_en: 'November 04 - December 01, 2023',
        studio: 170.00,
        apartment: 190.00
    },
    {
        period_de: '07. Jänner- 26. Jänner',
        period_it: '07. Gennaio- 26. Gennaio',
        period_en: 'November 04 - December 01, 2023',
        studio: 110.00,
        apartment: 130.00
    },
    {
        period_de: '27. Jänner- 02. Febuar 2023',
        period_it: '27. Gennaio- 02. Febraio 2023',
        period_en: 'November 04 - December 01, 2023',
        studio: 120.00,
        apartment: 140.00
    },
    {
        period_de: '03. Febuar- 08. März 2023',
        period_it: '03. Febuar- 08. Marzo 2023',
        period_en: 'November 04 - December 01, 2023',
        studio: 130.00,
        apartment: 150.00
    }, {
        period_de: '09. März- 29. März 2023',
        period_it: '09. Marzo- 29. Marzo 2023',
        period_en: 'November 04 - December 01, 2023',
        studio: 110.00,
        apartment: 130.00
    }, {
        period_de: '30. März- 19. April 2023',
        period_it: '30. Marzo- 19. Aprile 2023',
        period_en: 'November 04 - December 01, 2023',
        studio: 90.00,
        apartment: 100.00
    }
];


var currentPrices = prices; // Start with summer prices
const show_winter_prices_as_default = new Date(date_to_show_winter_prices_as_default);
const show_summer_prices_as_default = new Date(date_to_show_summer_prices_as_default);
const currentDate = new Date();

// Make sure your script is loaded before using its variables
// You can use 'window.onload' to ensure that the DOM is fully loaded before executing your script
window.onload = function () {
    var summerButton = document.getElementById('summerButton');
    var summerButtonApp = document.getElementById('summerButtonApp');
    var winterButton = document.getElementById('winterButton');
    var winterButtonApp = document.getElementById('winterButtonApp');
    var tableBody = document.getElementById('price_table_body');
    var langAttribute = document.documentElement.lang;
    var appartment_type = document.getElementById('myDropdownPrice').getAttribute('data-custom-attribute');
    var appTabelInWohnen = document.getElementById('myDropdownPriceApp');
    var appTabelBody = document.getElementById('price_table_body_app');
    if (currentDate.getMonth() >= show_winter_prices_as_default.getMonth() || currentDate.getMonth() < show_summer_prices_as_default.getMonth()) {
        // Perform the action you want
        if (appTabelInWohnen) {
            switchToWinter(true);

        }

        switchToWinter();

    } else {
        if (appTabelInWohnen) {
            switchToSummer(true);
        } else {
            switchToSummer();

        }
    }
    // Function to switch to summer prices
    function switchToSummer(two_Tabels = false) {
        if (two_Tabels == true) {
            currentPrices = prices;
            updateTable(true);
            summerButton.classList.add('activeTab');
            summerButtonApp.classList.add('activeTab');
            winterButton.classList.remove('activeTab');
            winterButtonApp.classList.remove('activeTab');
        } else {

            currentPrices = prices;
            updateTable();
            summerButton.classList.add('activeTab');
            winterButton.classList.remove('activeTab');
        }
    }

    // Function to switch to winter prices
    function switchToWinter(two_Tabels = false) {

        if (two_Tabels == true) {
            currentPrices = winter_prices;
            updateTable(true);
            winterButton.classList.add('activeTab');
            winterButtonApp.classList.add('activeTab');
            summerButton.classList.remove('activeTab');
            summerButtonApp.classList.remove('activeTab');
        } else {
            currentPrices = winter_prices;
            updateTable();
            winterButton.classList.add('activeTab');
            summerButton.classList.remove('activeTab');
        }
    }

    // Function to update the table with the current prices
    function updateTable(two_tabels) {
        tableBody.innerHTML = ''; // Clear existing rows

        // Loop through currentPrices and dynamically fill the table rows
        if (langAttribute == 'it') {

            if (appartment_type == 'Appartment') {

                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_it;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].apartment + ",- €";
                    row.appendChild(priceCell);

                    tableBody.appendChild(row);
                }
            }
            if (appartment_type == 'Studio') {
                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_it;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].studio + ",- €";
                    row.appendChild(priceCell);

                    tableBody.appendChild(row);
                }
            }
            if (appartment_type == 'PreisListe') {
                console.log(tableBody)
                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_it;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].studio + ",- €";
                    row.appendChild(priceCell);
                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_stud' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].apartment + ",- €";
                    row.appendChild(priceCell);

                    tableBody.appendChild(row);
                }
            }
            if (appTabelInWohnen) {
                appTabelBody.innerHTML = ''; // Clear existing rows

                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_it;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].apartment + ",- €";
                    row.appendChild(priceCell);

                    appTabelBody.appendChild(row);
                }
            }
        }
        if (langAttribute == 'de') {
            if (appartment_type == 'Appartment') {
                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_de;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].apartment + ",- €";
                    row.appendChild(priceCell);

                    tableBody.appendChild(row);
                }
            };
            if (appartment_type == 'Studio') {
                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_de;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].studio + ",- €";
                    row.appendChild(priceCell);

                    tableBody.appendChild(row);
                }
            }
            if (appartment_type == 'PreisListe') {
                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_de;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].studio + ",- €";
                    row.appendChild(priceCell);
                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_stud' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].apartment + ",- €";
                    row.appendChild(priceCell);

                    tableBody.appendChild(row);
                }
            }
            if (appTabelInWohnen) {
                appTabelBody.innerHTML = ''; // Clear existing rows

                for (var i = 0; i < currentPrices.length; i++) {
                    var row = document.createElement('tr');

                    var periodCell = document.createElement('td');
                    periodCell.id = '_period_' + i;
                    periodCell.innerHTML = currentPrices[i].period_de;
                    row.appendChild(periodCell);

                    var priceCell = document.createElement('td');
                    priceCell.id = 'price_app_' + i;
                    priceCell.className = 'PriceColon';
                    priceCell.innerHTML = currentPrices[i].apartment + ",- €";
                    row.appendChild(priceCell);

                    appTabelBody.appendChild(row);
                }
            }
        }
    }

    // Attach click event listeners to the buttons

    if (appTabelInWohnen) {
        summerButton.addEventListener('click', function () {
            switchToSummer(true);
        });
        summerButtonApp.addEventListener('click', function () {
            switchToSummer(true);
        });
        winterButton.addEventListener('click', function () {
            switchToWinter(true);
        });
        winterButtonApp.addEventListener('click', function () {
            switchToWinter(true);
        });

    }
    else {
        summerButton.addEventListener('click', switchToSummer);
        winterButton.addEventListener('click', switchToWinter);
    };
    // Initial table update with summer prices
    updateTable();
};
function DropdownFctStudio() {
    var droopdownelement = document.getElementById("myDropdownPrice");
    if (droopdownelement.className.indexOf("show") !== -1) {
        droopdownelement.classList.remove("show");
        droopdownelement.classList.add("animated");
    } else {
        droopdownelement.classList.add("show");
        droopdownelement.classList.remove("animated");
    }
}
function DropdownFctApp() {
    var droopdownelement = document.getElementById("myDropdownPriceApp");
    if (droopdownelement.className.indexOf("show") !== -1) {
        droopdownelement.classList.remove("show");
        droopdownelement.classList.add("animated");
    } else {
        droopdownelement.classList.add("show");
        droopdownelement.classList.remove("animated");
    }
}