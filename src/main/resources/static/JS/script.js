function showProductDetails(title, description, imageUrl) {
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-image').src = imageUrl;
    document.getElementById('product-modal').style.display = 'flex';
}

function closeProductDetails() {
    document.getElementById('product-modal').style.display = 'none';
}

function sendEmail() {
    window.location.href = "mailto:info@myjewelrystore.com?subject=Inquiry&body=Hello, I would like to know more about your products.";
}

function chatOnWhatsApp() {
    window.open("https://wa.me/+919994071791?text=Hello, I would like to know more about your products.", "_blank");
}
