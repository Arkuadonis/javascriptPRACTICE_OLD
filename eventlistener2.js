let counter = 0;
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    // alert for every 10th value
    if (counter % 10 === 0) {
        alert(`counter value is greater than ${counter}`);
    }
}
//seperating html and js
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count
});