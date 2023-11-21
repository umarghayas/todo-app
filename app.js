var parent = document.getElementById("parent")
var note = document.getElementById("note")
// var count = 1;
function addNote() {
    if (!note.value) {
        alert("Please Enter A Note")
        return
    }
    var cardDiv = document.createElement("div")
    cardDiv.className = "card mt-3"
    var cardH5 = document.createElement("h5")
    cardH5.setAttribute("class", "card-header text-white bg-black bg-opacity-75")
    // var cardNote = document.createTextNode("Note # " + count++)
    var cardNote = document.createTextNode("Note")
    cardH5.append(cardNote)
    var cardBodyDiv = document.createElement("div")
    cardBodyDiv.className = "card-body bg-dark text-white"
    var cardFooterDiv = document.createElement("div")
    cardFooterDiv.className = "card-footer bg-black bg-opacity-75"
    cardDiv.append(cardH5, cardBodyDiv, cardFooterDiv)
    var cardText = document.createElement("h5")
    cardText.className = "card-title"
    var cardTextNote = document.createTextNode(note.value)
    cardText.append(cardTextNote)
    cardBodyDiv.append(cardText)

    var edBtn = document.createElement("a")
    var delBtn = document.createElement("a")
    edBtn.className = "btn btn-primary me-2"
    edBtn.setAttribute("onclick", "editNote(this)")
    delBtn.setAttribute("onclick", "deleteNote(this)")
    delBtn.className = "btn btn-danger"
    var editBtnText = document.createTextNode("Edit ")
    var editSym = document.createElement("i")
    editSym.className = "fa-solid fa-pen fa-xs"
    var delBtnText = document.createTextNode("Delete ")
    var delSym = document.createElement("i")
    delSym.className = "fa-regular fa-trash-can"
    edBtn.append(editBtnText,editSym)
    delBtn.append(delBtnText,delSym)
    cardFooterDiv.append(edBtn,delBtn)
    
    note.value = "";
    parent.append(cardDiv)
    // console.log(cardDiv)
}

function deleteNote(ele){
    ele.parentNode.parentNode.remove();
}
function deleteAll(){
    parent.innerHTML = "";
}

var editField = document.createElement("input")
editField.className = "form-control bg-dark input-field text-white"
editField.setAttribute('onblur','save(this)')


function editNote(ele){
    // var editValue = prompt("Enter the edited Note", ele.parentNode.previousElementSibling.firstElementChild.innerHTML);
    // if (!editValue){
    //     alert("Note cannot be empty")
    //     editNote(ele);
    // }
    // else {
    //     ele.parentNode.previousElementSibling.firstElementChild.innerHTML = editValue;
    // }
    editField.value = ele.parentNode.previousElementSibling.firstElementChild.innerHTML
    ele.parentNode.previousElementSibling.firstElementChild.remove()
    ele.parentNode.previousElementSibling.append(editField)
    ele.setAttribute("onclick","saveNote(this)")
    ele.innerHTML = 'Save <i class="fa-regular fa-square-check"></i>'
}


function saveNote(ele){
    var note = ele.parentNode.previousElementSibling.firstElementChild
    var cardText = document.createElement("h5")
    cardText.className = "card-title"
    var cardTextNote = document.createTextNode(note.value)
    cardText.append(cardTextNote)
    

    ele.parentNode.previousElementSibling.firstElementChild.remove()
    ele.parentNode.previousElementSibling.append(cardText)
    ele.setAttribute("onclick","editNote(this)")
    ele.innerHTML = 'Edit <i class="fa-solid fa-pen fa-xs"></i>'
    // console.log(ele)
    // var edit = document.getElementById
}

function save(ele){
    saveNote(ele.parentNode.nextElementSibling.firstElementChild);
}