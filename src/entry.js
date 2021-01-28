// This function runs after a successful login to render the Code Talks Topic Request Platform's main content.
function renderTopicRequests(REQS_URL) {
  // During the JWT authorization process, I saved the user's ID to the browser's localStorage. Line 4 accesses that ID now and assigns it to the variable `current_user`.
  let current_user = localStorage.getItem('current_user');

  // This function creates two Bootstrap row elements in the body of the page: one specfically meant for the current user, the other for all other users. Optional: Refer to the `domElements.js` file for further details on this.
  async function createRowElements() {
    DOMElements.userRow;
    DOMElements.allOtherRow;
  }

  // This function fetches all topic requests from the backend database. In my case, I was using Rails with PostgreSQL.
  async function fetchTopicRequests(url) {
    // Await the creation of the row elements to render. This must complete before moving forward or only two empty row containers will render.
    await createRowElements();
    // Assign options to a variable to pass in as an argument to the fetch function, including the current user's JWT token from local storage and the HTTP method.
    const jwtGetFetchOptions = {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
    };
    fetch(url, jwtGetFetchOptions)
      .then(resp => resp.json())
      .then(topicRequests => topicRequests.data.forEach(attrs => {
        let newTopicRequest = new TopicRequest(attrs);
        // Check the `newTopicRequest` variable's `codepanionId` property to see if it matches the current user's ID which was stored in the `current_user` variable above.
        if (newTopicRequest.codepanionId == parseInt(current_user)) {
          // If truthy, call the class method `renderTopicRequests` passing in the `'user-row'` argument.
          newTopicRequest.renderTopicRequests('user-row');
        } else {
          // If falsy, call the class method `renderTopicRequests` passing in the `'all-other-row'` argument.
          newTopicRequest.renderTopicRequests('all-other-row');
        }
      }));
  }

  fetchTopicRequests(REQS_URL);
}