document.querySelector("#createList").addEventListener("click",createList);
document.querySelector("#closeList").addEventListener("click",closeListForm);
document.querySelector("#exit").addEventListener("click",closeItemForm);
document.querySelector("#addList").addEventListener("click",createCard);
document.querySelector("#additem").addEventListener("click",createList);
function createList(){
    document.querySelector("#listForm").style.visibility="visible";
    document.querySelector("#noItems").style.visibility="hidden";
    document.querySelector("#blur").style.visibility="visible";
    document.querySelector("#blur").style.zIndex="2";
    document.querySelector("#tasks").style.visibility="visible";
    document.querySelector("#list").style.visibility="visible";
    document.querySelector("#createList").style.visibility="visible";
    document.querySelector("#additem").style.visibility="visible";
    document.querySelector("#backicon").style.visibility="hidden";
    document.querySelector("#backtext").style.visibility="hidden";
    document.querySelector("#heading").style.visibility="hidden";
    document.querySelector("#createList").style.fontSize="1.8rem";
}
function closeListForm(){
    document.querySelector("#listForm").style.visibility="hidden";
    document.querySelector("#blur").style.visibility="hidden";
    if(cards.length==0){
        document.querySelector("#noItems").style.visibility="visible";
    }
}
function closeItemForm(){
    document.querySelector("#itemForm").style.visibility="hidden";
    document.querySelector("#blur").style.visibility="hidden";
}
let cards=[];
function createCard(){
    document.querySelector("#blur").style.visibility="hidden";
    document.querySelector("#listForm").style.visibility="hidden";
    let userInput=document.querySelector("#listName").value;
    let title=document.createElement("h4");
    let ul=document.createElement("ul");
    ul.className="ul";
    title.innerText=userInput;
    let rule=document.createElement("hr");
    rule.id="rule";
    let plusIcon=document.createElement("i");
    plusIcon.className="fa-solid fa-circle-plus";
    plusIcon.id="plus";
    let deleteIcon=document.createElement("i");
    let div1=document.createElement("div");
    div1.className="card";
    deleteIcon.className="fa-solid fa-trash";
    deleteIcon.id="delete";
    div1.append(title,rule,ul,plusIcon,deleteIcon);
    plusIcon.addEventListener("click",()=>{
        showItemForm(ul);
        document.querySelector("#blur").style.visibility="visible";
    });
    deleteIcon.addEventListener("click",function removeList(){
        let tempNewArray=[];
        for(let i=0;i<cards.length;i++){
            if(cards[i]!==div1){
                tempNewArray.push(cards[i]);
            }
        }
        cards=tempNewArray;
        display(cards);
        if(cards.length===0){
            document.querySelector("#noItems").style.visibility="visible";
        }
    });
    cards.push(div1);
    display(cards);
    title.addEventListener("click",()=>{
        document.querySelector("#tasks").style.visibility="hidden";
        document.querySelector("#list").style.visibility="hidden";
        document.querySelector("#additem").style.visibility="hidden";
        document.querySelector("#backicon").style.visibility="visible";
        document.querySelector("#backtext").style.visibility="visible";
        document.querySelector("#heading").style.visibility="visible";
        document.querySelector("#createList").style.fontSize="2rem";
        document.querySelector("#createList").style.marginLeft="500px";               
        heading.innerText=userInput;
        document.body.append(heading);
        let tempArray=[];
        for(let i=0;i<cards.length;i++){
            if(cards[i]===div1){
                tempArray.push(cards[i]);
            }
        }
        display(tempArray);
        document.querySelector("#lists").style.justifyContent="center";
        document.querySelector("#backicon").addEventListener("click",()=>{
            document.querySelector("#lists").style.justifyContent="space-around";
            document.querySelector("#tasks").style.visibility="visible";
            document.querySelector("#list").style.visibility="visible";
            document.querySelector("#createList").style.visibility="visible";
            document.querySelector("#additem").style.visibility="visible";
            document.querySelector("#backicon").style.visibility="hidden";
            document.querySelector("#backtext").style.visibility="hidden";
            document.querySelector("#heading").style.visibility="hidden";
            document.querySelector("#createList").style.fontSize="1.6rem";
            document.querySelector("#createList").style.marginLeft="0px";
            display(cards);
        });
        document.querySelector("#backtext").addEventListener("click",()=>{
            document.querySelector("#lists").style.justifyContent="space-around";
            document.querySelector("#tasks").style.visibility="visible";
            document.querySelector("#list").style.visibility="visible";
            document.querySelector("#createList").style.visibility="visible";
            document.querySelector("#additem").style.visibility="visible";
            document.querySelector("#backicon").style.visibility="hidden";
            document.querySelector("#backtext").style.visibility="hidden";
            document.querySelector("#heading").style.visibility="hidden";
            document.querySelector("#createList").style.fontSize="1.6rem";
            document.querySelector("#createList").style.marginLeft="0px";
            display(tempArray);
            display(cards);
        });
    });
}
function showItemForm(tag){
    document.querySelector("#itemForm").style.visibility="visible";
    document.querySelector("#add").addEventListener("click",function m1(){
        document.querySelector(".card").style.visibility="visible";
        document.querySelector("#blur").style.visibility="hidden";
        let li=document.createElement("li");
        li.innerText=document.querySelector("#itemName").value;
        li.id="todo";
        let markDone=document.createElement("button");
        markDone.innerText="Mark Done";
        markDone.className="mark";
        markDone.addEventListener("click",()=>{
            li.style.textDecoration="line-through";
            li.style.color="red";
            markDone.style.display="none";
        });
        li.appendChild(markDone);
        tag.append(li);
        document.querySelector("#itemForm").style.visibility="hidden";
        document.querySelector("#add").removeEventListener("click",m1);
    });
}
function display(cards){
    let lists=document.querySelector("#lists");
    lists.innerHTML="";
    for(let i=0;i<cards.length;i++){
        lists.appendChild(cards[i]);
    }
}
function display(tempArray){
    let lists=document.querySelector("#lists");
    lists.innerHTML="";
    for(let i=0;i<tempArray.length;i++){
        lists.appendChild(tempArray[i]);
    }
}