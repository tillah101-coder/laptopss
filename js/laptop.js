const laptops = [
    {
        name:
        specs:
        price:
        image:
    }
];
const container = document.getElementById("laptop-list");
laptops.forEach(laptop => {
    container.innerHTML += `
    <div class="col-md-4">
    <div class="card">
    <img src="${laptop.image}" class="card-img-top">
    <div class="card-body">
    <h5>${laptop.name}</h5>
    <p>${laptop.specs}</p>
    <p class="price">N${laptop.price}/day</p>
    <button class="btn btn-primary">Apply</button>
    </div>
    </div>
    `;
});
const search = document.querySelector("input");
search.addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display =
        card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
});