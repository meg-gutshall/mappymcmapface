// I decided to make a service class in which to build new HTML elements in order to adhere to the Single Responsibility Principle.
// It also makes the rest of my app look a bit tidier. :)
// By using the `static get` keywords, I can use ES6 syntactic sugar to invoke these class methods in other files where I've
// imported the DOMElements class.

class DOMElements {
  // This returns the div element nested inside the main element which you can see on line 7 on the `template.html` file.
  static get mainBody() { return document.getElementById('main-container') }

  // This method calls on the `mainBody` method above to access the main content of the page. It then adds a row to hold the current user's
  // topic requests by manipulating the returned element's `innerHTML` property.
  static createUserRow() {
    this.mainBody.innerHTML += `
      <div class="row mt-5" id="user-row-header">
        <div class="col text-center">My Code Talks Topic Ideas</div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" id="user-row"></div>`;
  }
  
  // This method calls the `createUserRow` method above to execute the creation of the current user topic request row. It then returns the empty
  // row, not the header row that contains the "My Code Talks Topic Ideas" text. However, the header row will still appear in the main content
  // of the site.
  static get userRow() {
    this.createUserRow();
    return document.getElementById('user-row');
  }

  // The two methods below do the same as the two methods above except for the all other users topic requests row.
  static createAllOtherRow() {
    this.mainBody.innerHTML += `
      <div class="row mt-5" id="all-other-row-header">
        <div class="col text-center">My Codepanions' Code Talks Topic Ideas</div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" id="all-other-row"></div>`;
  }
  
  static get allOtherRow() {
    this.createAllOtherRow();
    return document.getElementById('all-other-row');
  }
}