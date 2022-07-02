// SIDEBAR
var sideMunu = document.querySelector("aside");
var menuBtn = document.querySelector("#menu-btn");
var closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMunu.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    sideMunu.style.display = "none";
})

// LIGHT & DARK THEME-
var themeToggler = document.querySelector(".theme-toggler")

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

// FILLING TABLE
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${
                            order.shipping === 'Declined' ? 'danger' : 
                            order.shipping === 'Pending' ? 'warning' : "primary"
                        }">
                        ${order.shipping}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})