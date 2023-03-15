// click + button to show a form
document.querySelector("#plusIcon").addEventListener("click", createList);

//to close form after clicking close button
document.querySelector("#closeListForm").addEventListener("click",hideListForm);

//for creating Cards
document.querySelector("#createNewCard").addEventListener("click",createCard);

//create an empty array to store lists
let cards=[];

function createList(){
     //for showing form after clicking + button
    document.querySelector("#listForm").style.cssText="display:block;"; 
    document.querySelector("#lists").style.filter = "blur(7px)";
    document.querySelector("#content").style.filter = "blur(7px)";

    console.log("createList");
}

function hideListForm(){
    document.querySelector("#listForm").style.display="none";
    document.querySelector("#content").style.filter = "none";
    document.querySelector("#lists").style.filter = "none";


    console.log("hideListForm");
}

function createCard(){
     //to hide the form after pressing Add button
    document.querySelector("#listForm").style.display="none";
    document.querySelector("#content").style.filter = "none";
     document.querySelector("#text").style.display="none";
     document.querySelector("#lists").style.filter = "none";

    //read the data of the form
    //creating new card on clicking "Add" button
     let userInput = document.querySelector("#listName").value;

    console.log("card is being created");

    //for putting itmes in card
    //add three element heading, hr,  ul list, plus & delete button
    let title=document.createElement("h4");//<h4></h4>
    title.innerText=userInput;
    title.classList.add("heading");

    //<h4>userInput</h4>

     //adding functionality to "title" of list
     title.addEventListener("click", titleBtn);
     function titleBtn(){
        // hide the first child element of the header
        let header=document.querySelector("header");
        header.firstElementChild.style.display="none";

        document.querySelector(".add").style.visibility="hidden";

        //show "back" button
        document.querySelector(".backBtnBox").style.display="flex";
 
        //set the inner HTML of the "taskList" element to the clicked title's text
        document.querySelector(".taskList").innerHTML=this.innerText;

        //center the "lists" element
        let lists=document.querySelector("#lists");
        // lists.setAttribute("style","justify-content:center;")
        lists.style.justifyContent="center";

        //create a new array and populate it with clicked list's card
        let tempArray=[];
        for(let i=0; i<cards.length;i++){
            if(cards[i] === div1){
                tempArray.push(cards[i]);
            }
        }

        //update the "cards"array and display the updated cards
        cards=tempArray;
        display(cards);

        console.log("title is clickable.")

      
        function reverseTitleBtn(){
            let header=document.querySelector("header");
            header.firstElementChild.style.display="block";
            document.querySelector(".add").style.visibility="visible";
            document.querySelector(".backBtnBox").style.display="none";
            document.querySelector(".taskList").innerHTML="Tasks List";
           // let taskListText = document.querySelector(".taskList").innerHTML;
            //console.log(taskListText);

            let lists=document.querySelector("#lists");
            lists.style.justifyContent="space-between";
            display(cards);


            console.log("back button is working")
        }
        
        document.querySelector(".backBtnBox").addEventListener("click",reverseTitleBtn);
    }  

    let hr=document.createElement("hr");

    let ul=document.createElement("ul");


   let del=document.createElement("i");
    del.className="fa fa-trash";
    //<i class="fa fa-trash"></i>

    
    let plusIcon=document.createElement("i");
    plusIcon.className="fa-solid fa-circle-plus"; 
    //<i id="createList" class="fa-solid fa-plus"></i>

    //adding function to "add"  button
    plusIcon.addEventListener("click",()=>{ 
    showItemForm(ul);
    })
   
    //create one div to store title, + and delete buttons
    let div1 = document.createElement("div");
    div1.append(title, hr, ul, plusIcon, del);
  
    // Set multiple CSS properties in one statement
    div1.style.cssText = "width: 230px; height: 330px; border: 1px solid black; border-radius:20px;box-shadow: 2px 2px 5px gray; background-color: white;position:relative;text-align:center;";

    title.style.cssText="text-align:center;font-weight:bold;font-size:25px;"

    ul.style.cssText="list-style-type:none;text-align:center;";

    //plusIcon.style.cssText="float:right;margin:240px 0px 15px;";
    plusIcon.style.cssText="position:absolute;top:290px;left:190px;";

    //del.style.cssText="float:right;margin:240px 15px 15px;";
    del.style.cssText="margin-left:10px;position:absolute;top:290px;left:150px;";

    


    //adding function to "del"
    del.addEventListener("click", function removeList(){
        let tempArray=[];
        for(let i=0; i<cards.length;i++){
            if(cards[i] !== div1){
                tempArray.push(cards[i]);
            }
        }
        cards=tempArray;
        display(cards);


        console.log("delete button is working.")
    });

    //pushing lists into empty array
     cards.push(div1);
     display(cards);
 
     console.log(cards);


    function display(cards){
        let lists = document.querySelector("#lists");
        lists.innerHTML="";
        for(let i=0;i<cards.length;i++){
            lists.appendChild(cards[i]);
         }
      
     }

     
    
}
  

function showItemForm(ul){
    
    document.querySelector("#itemForm").style.display="block";
    document.querySelector("#lists").style.filter = "blur(7px)";
    document.querySelector("#content").style.filter = "blur(7px)";

    document.querySelector("#createNewItem").addEventListener("click",m1);
       function m1(){
       let li=document.createElement("li");
       li.innerText=document.querySelector("#itemName").value
       ul.append(li);


       //adding logic to button of mark as done
       let markAsdone_btn=document.createElement("button");
       markAsdone_btn.innerHTML="Mark as done";
       markAsdone_btn.type="checkbox";
       markAsdone_btn.name="markAsDone";
       markAsdone_btn.classList.add("markAsDone");
       li.append(markAsdone_btn);


       markAsdone_btn.addEventListener("click", markAsDone);
       function markAsDone(){
        li.classList.add("li");
        markAsdone_btn.style.cursor="not-allowed";
        markAsdone_btn.style.display="none";
         
        console.log("MarkDone button is working")
       }


       document.querySelector("#itemForm").style.display="none";
       document.querySelector("#content").style.filter = "none";
       document.querySelector("#lists").style.filter = "none";

       //remove "eventListener" after creating a item
       document.querySelector("#createNewItem").removeEventListener("click", m1);
         
       console.log("Add button is pressed.")

    }


//to close itemform after clikcing "close" button
document.querySelector("#closeItemForm").addEventListener("click",hideItemForm);

function hideItemForm(){
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#content").style.filter = "none";
    document.querySelector("#lists").style.filter = "none";
    // document.querySelector("#text").style.display="none";
    document.querySelector("#createNewItem").removeEventListener("click", m1);

    console.log("hideItemForm");
}
}