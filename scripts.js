document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: new URLSearchParams(formData)
        })
        .then(response => response.text())
        .then(html => {
            document.getElementById('predictionResult').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
    });
});
