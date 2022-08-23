let textBox = document.getElementById("input_text");
let addButton = document.getElementById("bt_add");
let unList = document.querySelector(".un_list");
let textBoxdata;
let alldata=[];
function setLocalStorage(){
    //set to local storage
    localStorage.setItem("inputdata",JSON.stringify(alldata));
}

function getLocalStorage(){
    //get from local storage
    if(localStorage.getItem("inputdata")){
        alldata =JSON.parse(localStorage.getItem("inputdata"));
        buildUI();
    }
    else
    {
        alert("no data in local storage");
    }
    
}


function buildUI(){
    unList.textContent="";
    alldata.forEach((item)=>{

        let listItem=document.createElement("li");
        listItem.classList.add("list_item");
        let spanEl=document.createElement("span");
        spanEl.classList.add("span");
        listItem.appendChild(spanEl)
        spanEl.innerText=item;
        unList.appendChild(listItem);
        textBox.value="";
        textBox.focus();
    
        let dltBtn=document.createElement("i");
        dltBtn.classList.add("fas","fa-trash");
        listItem.appendChild(dltBtn);
    
    
        let edtBtn=document.createElement("i");
        edtBtn.classList.add("fas","fa-edit");
        listItem.appendChild(edtBtn);

    })

   
}


function adBtclick() {
  
    textBoxdata=textBox.value;
    alldata.push(textBoxdata);

    setLocalStorage();

    getLocalStorage();


}
function dltBtClick(e){
    if(e.target.classList[1]==="fa-trash"){
        let single_list=e.target.parentElement;
        single_list.remove();
    }
}

function edtBtClick(event){
    if(event.target.classList[1]==="fa-edit"){
        let newValue=prompt("Enter New Value");
        let item=event.target.parentElement;
        let spanEl=item.querySelector("span");
        console.log(spanEl);
        spanEl.innerText=newValue;
    }
}

addButton.addEventListener("click", adBtclick);
unList.addEventListener("click",dltBtClick);
unList.addEventListener("click",edtBtClick);
getLocalStorage();