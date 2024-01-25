



document.getElementById('loadUsersBtn').addEventListener('click', () => {

  // make XMLHttpRequest Object
  var xhr = new XMLHttpRequest();

  // Define the request
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  // to handle response XMLHttpRequest
  xhr.onload = function() {
    
    // if status = 200 (ok) => successful response request
    if (xhr.status >= 200 && xhr.status < 400) {
       var users = JSON.parse(xhr.responseText);
       displayUsers(users);
    }
    else {
      console.error("Error fetching data")
    }
  }

  // handles errors during the request or network issues
  xhr.onerror = function() {
    console.error('Network Error');
  }


  // send the request
  xhr.send();
  
})


function displayUsers(users) {
  var usersListDiv = document.getElementById('userList');
  usersListDiv.innerHTML = '<h2>User List</h2>';
  var ul = document.createElement('ul');


  users.forEach(function(user) {
    var li = document.createElement('li');
    li.textContent = user.name;
    ul.appendChild(li);
  });

  usersListDiv.appendChild(ul);
}