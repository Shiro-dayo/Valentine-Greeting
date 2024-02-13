let noClickCount = 0;

document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html'; 
});

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount < 7) {
        this.style.transform = `scale(${0.9 - noClickCount * 0.1})`;
        document.getElementById('yesButton').style.transform = `scale(${1 + noClickCount * 0.2})`;
    } else {
        this.style.display = 'none';
    }
});