// click + button to show a form
document.querySelector("#plusIcon").addEventListener("click", createList);
// Function to show the list creation form
//for showing form after clicking + button
function createList() {
      document.querySelector("#listForm").style.cssText = "display:block;";
       document.querySelector("#lists").style.filter = "blur(7px)";
       document.querySelector("#content").style.filter = "blur(7px)";
       console.log("createList");
}



// Close form after clicking close button
document.querySelector("#closeListForm").addEventListener("click", hideListForm);

// Function to hide the list creation form
function hideListForm() {
       document.querySelector("#listForm").style.display = "none";
        document.querySelector("#content").style.filter = "none";
        document.querySelector("#lists").style.filter = "none";
         console.log("hideListForm");
}



// For creating Cards
document.querySelector("#createNewCard").addEventListener("click", createCard);

// Create an empty array to store lists
let cards = [];
// Function to create a new card
function createCard() {
  // Hide the list creation form
          document.querySelector("#listForm").style.display = "none";
          document.querySelector("#content").style.filter = "none";
          document.querySelector("#text").style.display = "none";
          document.querySelector("#lists").style.filter = "none";

  // Read the data of the form
  //creating new card on clicking "Add" button

          let userInput = document.querySelector("#listName").value;
           console.log("card is being created");


  // Create elements for the card
          let title = document.createElement("h4");
          title.innerText = userInput;
           title.classList.add("heading");

  // Adding functionality to the title of the list
  //add three element heading, hr,  ul list, plus & delete button

          title.addEventListener("click", titleBtn);

  function titleBtn() {
    // Hide the first child element of the header
          let header = document.querySelector("header");
           header.firstElementChild.style.display = "none";
  
          document.querySelector(".add").style.visibility = "hidden";
  
    // Show the "back" button
          document.querySelector(".backBtnBox").style.display = "flex";
  
    // Set the inner HTML of the "taskList" element to the clicked title's text
           document.querySelector(".taskList").innerHTML = this.innerText;
  
    // Center the "lists" element
           document.querySelector("#lists").style.justifyContent = "center";
  
    // Hide the "#text" element
            document.querySelector("#text").style.display = "none";
  
    // Create a new array and populate it with the clicked list's card
            let tempArray = [];
             for (let i = 0; i < cards.length; i++) {
                 if (cards[i] === div1) {
                      tempArray.push(cards[i]);
                    }
              }
  
    // Update the "cards" array and display the updated cards
              display(tempArray);
  
    // Hide all cards except the clicked one
               cards.forEach((card) => {
                  if (card !== div1) {
                     card.style.display = "none";
                     }
                   });
  
                 console.log("Title is clickable.");
  
    // Attach the event listener to the "Back" button
  document.querySelector(".backBtnBox").addEventListener("click", reverseTitleBtn);
  }



// Function to revert to the main list view
function reverseTitleBtn() {
  // Show the first child element of the header
  let header = document.querySelector("header");
  header.firstElementChild.style.display = "block";

  document.querySelector(".add").style.visibility = "visible";
  document.querySelector(".backBtnBox").style.display = "none";
  document.querySelector(".taskList").innerHTML = "Tasks List";
  document.querySelector("#lists").style.justifyContent = "space-around";

  // Display all cards
  display(cards);

  let lists = document.querySelector("#lists");
  lists.style.justifyContent = "space-between";

  // Show all cards by resetting the filters
  cards.forEach((card) => {
    card.style.display = "block";
  });

  console.log("Back button is working");
}
    


let hr = document.createElement("hr");
let ul = document.createElement("ul");
let del = document.createElement("i");
del.className = "fa fa-trash";

let plusIcon = document.createElement("i");
plusIcon.className = "fa-solid fa-circle-plus";

// Adding function to "add" button
plusIcon.addEventListener("click", () => {
  showItemForm(ul);
});

// Create a div to store title, + and delete buttons
let div1 = document.createElement("div");
div1.append(title, hr, ul, plusIcon, del);

// Set CSS classes for styling
div1.classList.add("cardList");
title.classList.add("cardTitle");
ul.classList.add("cardItemList");
plusIcon.classList.add("cardAddIcon");
del.classList.add("cardDelIcon");



 // Delete button (Delete entire card)
del.addEventListener("click", removeList)

function removeList(){
     let tempArray = [];
     for (let i = 0; i < cards.length; i++) {
     if (cards[i] !== div1) {
          tempArray.push(cards[i]);
         }
      }
      cards = tempArray;

  // Display the remaining cards
      display(cards);

  // Show the "#text" element if no cards are left
      if (cards.length === 0) {
      document.querySelector("#text").style.display = "block";
       }

 console.log("Delete button is working.");
 }





// Function to remove an item from the list
function removeListItem(event) {
       if (event.target.classList.contains("deleteItem")) {
           let listItem = event.target.parentElement; // Get the parent list item
           ul.removeChild(listItem); // Remove the list item from the list

           console.log("Item is being deleted from the list.");
          }
  }

// Attach the event listener to each list item (li)
let listItems = ul.querySelectorAll("li");
listItems.forEach((item) => {
    item.addEventListener("click", removeListItem);
  });


// Push the card into the empty cards array and display
cards.push(div1);
display(cards);
console.log(cards, "cards");


// Function to display the cards
function display(cards) {
    let lists = document.querySelector("#lists");
    lists.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
      lists.appendChild(cards[i]);
    }
    console.log("i am working");
  }
}



// Function to show the item creation form
function showItemForm(ul) {
      document.querySelector("#itemForm").style.display = "block";
      document.querySelector("#lists").style.filter = "blur(7px)";
      document.querySelector("#content").style.filter = "blur(7px)";

document.querySelector("#createNewItem").addEventListener("click", createList);
function createList() {
          let li = document.createElement("li");
          li.innerText = document.querySelector("#itemName").value;
          ul.append(li);

    //adding logic to button of mark as done
          let markAsdone_btn = document.createElement("button");
          markAsdone_btn.innerHTML = "Mark as done";
          markAsdone_btn.type = "checkbox";
          markAsdone_btn.name = "markAsDone";
          markAsdone_btn.classList.add("markAsDone");
           li.append(markAsdone_btn);



    // Function to mark an item as done
markAsdone_btn.addEventListener("click", markAsDone);
function markAsDone() {
               li.classList.add("li");
               markAsdone_btn.style.cursor = "not-allowed";
               markAsdone_btn.style.display = "none";

                console.log("MarkDone button is working");
             }

        document.querySelector("#itemForm").style.display = "none";
        document.querySelector("#content").style.filter = "none";
        document.querySelector("#lists").style.filter = "none";

//remove "eventListener" after creating a item
document.querySelector("#createNewItem").removeEventListener("click", createList);

console.log("Add button is pressed.");
}

  //to close itemform after clikcing "close" button
document.querySelector("#closeItemForm").addEventListener("click", hideItemForm);
function hideItemForm() {
    document.querySelector("#itemForm").style.display = "none";
    document.querySelector("#content").style.filter = "none";
    document.querySelector("#lists").style.filter = "none";
    document.querySelector("#createNewItem").removeEventListener("click", m1);

    console.log("hideItemForm");
  }
}

// function display(cards) {
//   let lists = document.querySelector("#lists");
//   lists.innerHTML = "";
//   for (let i = 0; i < cards.length; i++) {
//     lists.appendChild(cards[i]);
//   }
//   console.log("cards");
// }


function display(tempArray) {
  let lists = document.querySelector("#lists");
  lists.innerHTML = "";
  for (let i = 0; i < tempArray.length; i++) {
    lists.appendChild(tempArray[i]);
  }

  console.log("temparray");
}
