const countDisplay = document.getElementById('countDisplay');
const btn = document.getElementById('btn');
const  reset = document.getElementById('reset');

let followers = 0;

function Message() {
    alert(`Your Instagram post gained ${followers} followers!Congratulation`)
}



btn.addEventListener('click', () => {
    followers++;
    countDisplay.textContent = followers;
    if (followers === 10) {
        Message();
    }
})

reset.addEventListener('click', () => {
    followers = 0;
    countDisplay.textContent = followers;
    alert('Followers counter has been reset');
})