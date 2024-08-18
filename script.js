function toggleContent() {
    const content = document.getElementById('card-content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function changeImage() {
    const image = document.getElementById('card-image');
    const dir='.C:\Users\NSPIRA\Pictures\card\download.jpg' // Change to a different image URL
}

function updateTitle() {
    const input = document.getElementById('input-text').value;
    const title = document.querySelector('.card-title');
    if (input) {
        title.textContent = input;
    } else {
        alert('Please enter some text');
    }
}
