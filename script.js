document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert('Semua field harus diisi.');
        event.preventDefault();
    } else if (!emailPattern.test(email)) {
        alert('Email tidak valid.');
        event.preventDefault();
    } else {
        // Menambahkan pesan konfirmasi
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.textContent = 'Form ini telah berhasil diisi dan dikirim!';
        event.preventDefault(); // Prevent form submission for demonstration
    }
});
