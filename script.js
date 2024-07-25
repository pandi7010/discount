function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
    
    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        alert('Please enter valid numbers.');
        return;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;

    document.getElementById('discountAmount').textContent = `Discount Amount: ₹${discountAmount.toFixed(2)}`;
    document.getElementById('finalPrice').textContent = `Final Price: ₹${finalPrice.toFixed(2)}`;
}

function toggleAbout() {
    const modal = document.getElementById('aboutModal');
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
    } else {
        modal.classList.add('show');
    }
}
