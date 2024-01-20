const username = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const job = document.getElementById('job');
const designation = document.getElementById('designation');
const productType = document.getElementById('productType');
const feedBack = document.getElementById('feedbackText');
const experience = document.getElementById('Experience');
const userInfo = document.getElementById('userInfo');

const submitBtn =  document.getElementById('submitBtn');

function submitFeedBack(e) {
    e.preventDefault();
    userInfo.style.display = 'block';
    // alert('Thank you for your valuable feedBack');
    const userName = document.getElementById('userName');
    userName.innerHTML = username.value;
    document.getElementById('userAge').innerHTML = age.value;
    document.getElementById('userEmail').innerHTML = email.value;
    document.getElementById('userJob').innerHTML = job.value;
    document.getElementById('userDesignation').innerHTML = designation.value;
    document.getElementById('userProductChoice').innerHTML = productType.value;
    document.getElementById('userProductChoice').innerHTML = feedBack.value;
    document.getElementById('userExperience').innerHTML = experience.value
}


submitBtn.addEventListener('click', submitFeedBack);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitFeedBack(e);
    }
})