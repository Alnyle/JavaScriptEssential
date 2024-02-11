const articlesElement = document.getElementById('articles');


// create XMLHttpRequest object
let xhr = new XMLHttpRequest();


// JSON file location 
let url = 'health.json';



// initializes newly-create request
xhr.open('GET', url, true)

//'GET': Specifies the HTTP method used for the request (in this case, a GET request).
//URL: Represents the URL from where you will fetch the data.
// True: Indicates if the request is asynchronous (true) or synchronous (false).
// In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.


// specify response Type :  inform the XMLHttpRequest object that the expected response from the server should be in JSON format.

xhr.responseType = 'json';

xhr.onload = function() {

  // get array called articles from JSON File or response message
  // retrieve the articles array from the JSON response
  let articles = xhr.response.articles;

 

  articles.forEach(article => {

    // create Article div element
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');


    // create header (title) for article
    const title = document.createElement('h2');
    title.textContent = article.title;

    // create paragraph element for article description
    const description = document.createElement('p');
    description.textContent = article.description;

    const waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve';


    // create Unordered List for ways list
    const waysList = document.createElement('ul');

    // add way items to way list
    article.ways_to_achieve.forEach(way => {
      const ListItem = document.createElement('li');
      ListItem.textContent = way;
      waysList.appendChild(ListItem);
    });


    const benefitListHeader = document.createElement('h3');
    benefitListHeader.textContent = 'Benefits';

    const BenefitsList = document.createElement('ul');

    article.benefits.forEach(benefit => {
      const listItem = document.createElement('li');
      listItem.textContent = benefit;
      BenefitsList.appendChild(listItem);
    });


    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitListHeader);
    articleDiv.appendChild(BenefitsList);

    articlesElement.appendChild(articleDiv);

  });
}

// send XMLHttpRequest
xhr.send();