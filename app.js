var parent = document.getElementById("parent")
var note = document.getElementById("note")
var count = 1;
function addNote() {
    if (!note.value) {
        alert("Please Enter A Note")
        return
    }
    var cardDiv = document.createElement("div")
    cardDiv.className = "card mt-3"
    var cardH5 = document.createElement("h5")
    cardH5.setAttribute("class", "card-header text-white bg-black bg-opacity-75")
    var cardNote = document.createTextNode("Note # " + count++)
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
    

    parent.append(cardDiv)
    // console.log(cardDiv)
}

function deleteNote(ele){
    ele.parentNode.parentNode.remove()
}