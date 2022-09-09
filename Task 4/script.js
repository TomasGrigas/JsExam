/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */


const ENDPOINT = 'cars.json';
const request  = fetch(ENDPOINT);
const listEl = document.querySelector('ul');
request
.then((res)=> res.json())
.then((data) => {
    data.forEach(post => {
        listEl.insertAdjacentHTML('beforeend',`<li>${post.brand} - ${post.models} </li>`);
    });
});










