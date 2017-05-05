lightGallery(document.getElementById('lightgallery'));

const age = document.querySelector('.age-container');

function calculateAge() {
    const birthday = 'March 27, 1990';
    const years = ((Date.now() - Date.parse(birthday)) / (1000 * 60 * 60 * 24 * 365)).toFixed(8);
    age.innerHTML = `I'm <span id='age'>${years}</span> years old.`;
}

window.onload = () => {
    calculateAge();
    window.ageInterval = setInterval(() => {
        calculateAge();
    }, 1000);
};
