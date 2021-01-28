// This class also contains a constructor method and a method called `createTopicRequestCard` which returns an HTML element formatted as a
// Bootstrap card that contains details about the TopicRequest object.

class TopicRequest {
  // The `renderTopicRequests` method acts as a mini factory to insert new topic request cards into their proper rows. As you can see on
  // line 26 in `src/entry.js`, after a new TopicRequest object is created, it's fed through a conditional statement to see whether or not the request belongs
  // to the current user. The result determines which elementId will be passed as an argument to `renderTopicRequests`.
  // Previously this function was duplicated (one for current user and one for all other users) and lived in `src/entry.js`. Now as a class function,
  // it dynamically retrieves the correct row from the DOM, creates a Bootstrap card to represent the new TopicRequest object, and inserts that card as a
  // column in the selected row. This refactored method is performant and has more than halved the code for this single action.
  renderTopicRequests(elementId) {
    let row = document.getElementById(elementId);
    let col = this.createTopicRequestCard();
    row.innerHTML += col;
  }
}