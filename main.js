/*let listelement = document.querySelector('.one');
let nodes = [];

function renderElementsToScreen(){
    if(localStorage.getItem('nodes')){
        nodes = jSON.parse(localStorage.getItem('nodes'))
        nodes.forEach(node=>{
        nodeList(node, uniqueID);
        })
    }
}

document.querySelector('.butt').addEventListener('click',()=>{
    document.querySelectorAll('.three').forEach(nod =>{
        nod.remove()
    })
    localStorage.clear();
})

document.querySelector('.butt2').addEventListener('click',()=>{
    let uniqueID = 'node' + Math.floor(Math.random() * 1000);
    let node =
    {
        title : document.querySelector('.inp').value,
        des : document.querySelector('.tex').value
    }
    addNoteToLocalStorage(node , uniqueID)
    nodeList(node, uniqueID)
})
function nodeList(node, uniqueID){

    let div1 = document.createElement('div');
    div1.classList.add('three', uniqueID);
   // div1.className = 'three';
   let divv = document.createElement('div');
   divv.className = 'edit';
    let titlee = document.createElement('h4');
    let dess = document.createElement('p');
    let editbutt = document.createElement('button');
    editbutt.textContent = 'Edit Node';
    let delbutt = document.createElement('button');
    delbutt.textContent = 'Delete Node';
    titlee.innerText = node.title;
    dess.innerText = node.des;
   /* delbutt.addEventListener('click',()=>{
       //div1.remove()
       delbutt.parentElement.remove();
    })*/
   /* delbutt.addEventListener('click',()=>{
    render(uniqueID);
    })
    editbutt.addEventListener('click',()=>{
       titlee.innerText = editbutt.parentElement.previousElementSibling.innerHTML;
    })
    //document.body.appendChild(listelement);
    listelement.appendChild(div1);
    div1.appendChild(titlee);
    div1.appendChild(dess);
    div1.appendChild(divv);
    divv.appendChild(editbutt)
    divv.appendChild(delbutt)

    document.querySelector('.inp').value = '';
    document.querySelector('.tex').value = '';

}

function addNoteToLocalStorage(node,uniqueID){
    node = {...node. uniqueID}
    nodes.push(node)
    localStorage.setItem('nodes',JSON.stringify(nodes))

}

function render(id){
    document.querySelector('.' + id).remove();
    nodes = JSON.parse(localStorage.getItem('nodes'))
    let index = nodes.findIndex(node=> node.uniqueID == id)
    nodes.splice(index, 1);
    localStorage.setItem('nodes',JSON.stringify(nodes));
}

renderElementsToScreen();
*/


let listelement = document.querySelector('.one');
let nodes = [];

function renderElementsToScreen() {
    if (localStorage.getItem('nodes')) {
        nodes = JSON.parse(localStorage.getItem('nodes'));
        nodes.forEach(node => {
            nodeList(node, node.uniqueID);
        });
    }
}

document.querySelector('.butt').addEventListener('click', () => {
    document.querySelectorAll('.three').forEach(nod => {
        nod.remove();
    });
    localStorage.clear();
});

document.querySelector('.butt2').addEventListener('click', () => {
    let titleValue = document.querySelector('.inp').value;
    let descriptionValue = document.querySelector('.tex').value;
    if (!titleValue) {
        alert('Title field is empty!');
        return;
    }
    if (!descriptionValue) {
        alert('Description field is empty!');
        return;
    }

    let uniqueID = 'node' + Math.floor(Math.random() * 1000);
    let node = {
        title: titleValue,
        des: descriptionValue,
        uniqueID: uniqueID
    };
    addNoteToLocalStorage(node);
    nodeList(node, uniqueID);
});

function nodeList(node, uniqueID) {
    let div1 = document.createElement('div');
    div1.classList.add('three', uniqueID);

    let divv = document.createElement('div');
    divv.className = 'edit';

    let titlee = document.createElement('h4');
    let dess = document.createElement('p');

    let editbutt = document.createElement('button');
    editbutt.textContent = 'Edit Node';

    let delbutt = document.createElement('button');
    delbutt.textContent = 'Delete Node';

    titlee.innerText = node.title;
    dess.innerText = node.des;

    delbutt.addEventListener('click', () => {
        render(uniqueID);
    });

    editbutt.addEventListener('click', () => {
        // Populate the form with existing values for editing
        document.querySelector('.inp').value = node.title;
        document.querySelector('.tex').value = node.des;

        // Remove the old node after editing begins
        render(uniqueID);
    });

    listelement.appendChild(div1);
    div1.appendChild(titlee);
    div1.appendChild(dess);
    div1.appendChild(divv);
    divv.appendChild(editbutt);
    divv.appendChild(delbutt);

    document.querySelector('.inp').value = '';
    document.querySelector('.tex').value = '';
}

function addNoteToLocalStorage(node) {
    nodes.push(node);
    localStorage.setItem('nodes', JSON.stringify(nodes));
}

function render(id) {
    document.querySelector('.' + id).remove();
    nodes = JSON.parse(localStorage.getItem('nodes'));
    let index = nodes.findIndex(node => node.uniqueID == id);
    nodes.splice(index, 1);
    localStorage.setItem('nodes', JSON.stringify(nodes));
}

renderElementsToScreen();





// let notesListRootElement = document.querySelector('.notesList')
// let deleteNotesAll = document.querySelector('.deleteAllNotes')
// let notes = []

// function renderElementsToScreen(){
//     if(localStorage.getItem('notes')){
//             notes=JSON.parse(localStorage.getItem('notes'))
//             notes.foeEach(note=>{
//                 renderNoteToList(note, note.uniquID)
//             })
//         }
//     }
//     if(localStorage.getItem('notes')) {
//         notes = JSON.parse(localStorage.getItem('notes'));

//         //ensure that notes is an array before using forEach
//         if(Array.isArray(notes)){
//             notes.forEach(note =>{
//                 renderNoteToList(note, note.uniquID);
//             });
//         }
//     } 
//     deleteNotesAll.addEventListener('click' , ()=>{
//         document.querySelectorAll('.note').forEach(note=>{
//             note.remove()
//         })
//         localStorage.clear()
//     })
//     document.querySelector('#createNoteButton').addEventListener('click', ()=>{
//         let uniquID = 'note' + Math.floor(Math.random()*1000) 
//         let note ={
//             title: document.querySelector('#createNoteTitle').value,
//             content: document.querySelector('#createNoteContent').value
//         }
//         addNoteToLocalStorage(note, uniquID)
//         renderNoteToList(note, uniquID)
//     })
//     function renderNoteToList(note, uniquID) {
//         let noteDiv = document.createElement('div')
//         noteDiv.classList.add('note',uniquID)
//         let noteTitle=document.createElement('h4')
//         let noteContent = document.createElement('p');
//         let noteDeletebutton = document.createElement('button');

//         noteDeletebutton.addEventListener('click',()=>{
//             removeElementFromNotesList(uniquID)        
//         })

//         noteTitle.innerText = note.title;
//         noteContent.innerText = note.content;
//         noteDeletebutton.innerText = "Delete Note";

//         noteDiv.appendChild(noteTitle)
//         noteDiv.appendChild(noteContent)
//         noteDiv.appendChild(noteDeletebutton)
//         notesListRootElement.append(noteDiv)

//     document.querySelector('#createNoteTitle').value='';
//     document.querySelector('#createNoteContent').value='';
// }

// function addNoteToLocalStorage(note, uniquID) {
//         let notes = JSON.parse(localStorage.getItem('notes')) ||[]; //instalize
//         note = {...note, uniquID}
    
//         if(!Array.isArray(notes)) {
//             notes = [];
//         }
//         notes.push(note)
//         localStorage.setItem('notes', JSON.stringify(notes))
//     }

// function removeElementFromNotesList(id){
//     console.log(id);
//     document.querySelector('.'+ id).remove()
//     notes = JSON.parse(localStorage.getItem('notes'))
//     let index = notes.findIndex(note=>note.uniquID == id)
//     notes.splice(index, 1)
//     localStorage.setItem('notes', JSON.stringify('notes'))
// }
// renderElementsToScreen()











//without localstorage

// let notesListRootElement = document.querySelector('.notesList')
// let deleteNotesAll = document.querySelector('.deleteAllNotes')
// let notes = []

// function renderElementsToScreen(){
    
   
//         //ensure that notes is an array before using forEach
//         if(Array.isArray(notes)){
//             notes.forEach(note =>{
//                 renderNoteToList(note, note.uniquID);
//             });
//         }
//     } 
   
//     document.querySelector('#createNoteButton').addEventListener('click', ()=>{
//         let uniquID = 'note' + Math.floor(Math.random()*1000) 
//         let note ={
//             title: document.querySelector('#createNoteTitle').value,
//             content: document.querySelector('#createNoteContent').value
//         }
//         //addNoteToLocalStorage(note, uniquID)
//         renderNoteToList(note, uniquID)
//     })
//     function renderNoteToList(note, uniquID) {
//         let noteDiv = document.createElement('div')
//         noteDiv.classList.add('note',uniquID)
//         let noteTitle=document.createElement('h4')
//         let noteContent = document.createElement('p');
//         let noteDeletebutton = document.createElement('button');

//         noteDeletebutton.addEventListener('click',()=>{
//             removeElementFromNotesList(uniquID)        
//         })

//         noteTitle.innerText = note.title;
//         noteContent.innerText = note.content;
//         noteDeletebutton.innerText = "Delete Note";

//         noteDiv.appendChild(noteTitle)
//         noteDiv.appendChild(noteContent)
//         noteDiv.appendChild(noteDeletebutton)
//         notesListRootElement.append(noteDiv)

//     document.querySelector('#createNoteTitle').value='';
//     document.querySelector('#createNoteContent').value='';
// }


// function removeElementFromNotesList(id){
//     console.log(id);
//     document.querySelector('.'+ id).remove()
//     notes = JSON.parse(localStorage.getItem('notes'))
//     let index = notes.findIndex(note=>note.uniquID == id)
//     notes.splice(index, 1)
//     localStorage.setItem('notes', JSON.stringify('notes'))
// }
// renderElementsToScreen()



// import axios from 'axios'; 

// let notesListRootElement = document.querySelector('.notesList')
// let deleteNotesAll = document.querySelector('.deleteAllNotes')
// let notes = []

// async function renderElementsToScreen(){
    
//     // notesListRootElement.innerHTML = '';
//     let players = await axios.get('http://localhost:3000/api/v1/players/get-players'); //http://localhost:3000/api/v1/players/get-players
//     console.log(players);
//     //console.log(players.data.data);
//     //notes = players.data.data;

//         //ensure that notes is an array before using forEach
//         if(Array.isArray(notes)){
//             notes.forEach(note =>{
//                 renderNoteToList(note, note.uniquID);
//             });
//         }
//     } 
   
//     document.querySelector('#createNoteButton').addEventListener('click', ()=>{
//         let uniquID = 'note' + Math.floor(Math.random()*1000) 
//         let note ={
//             title: document.querySelector('#createNoteTitle').value,
//             content: document.querySelector('#createNoteContent').value
//         }
//         //addNoteToLocalStorage(note, uniquID)
//         renderNoteToList(note, uniquID)
//     })
//     function renderNoteToList(note, uniquID) {
//         let noteDiv = document.createElement('div')
//         noteDiv.classList.add('note',uniquID)
//         let noteTitle=document.createElement('h4')
//         let noteContent = document.createElement('p');
//         let noteDeletebutton = document.createElement('button');

//         noteDeletebutton.addEventListener('click',()=>{
//             removeElementFromNotesList(uniquID)        
//         })

//         noteTitle.innerText = note.title;
//         noteContent.innerText = note.content;
//         noteDeletebutton.innerText = "Delete Note";

//         noteDiv.appendChild(noteTitle)
//         noteDiv.appendChild(noteContent)
//         noteDiv.appendChild(noteDeletebutton)
//         notesListRootElement.append(noteDiv)

//     document.querySelector('#createNoteTitle').value='';
//     document.querySelector('#createNoteContent').value='';
// }


// function removeElementFromNotesList(id){
//     console.log(id);
//     document.querySelector('.'+ id).remove()
//     notes = JSON.parse(localStorage.getItem('notes'))
//     let index = notes.findIndex(note=>note.uniquID == id)
//     notes.splice(index, 1)
//     localStorage.setItem('notes', JSON.stringify('notes'))
// }
// renderElementsToScreen()











//import axios from 'axios';

// let notesListRootElement = document.querySelector('.notesList')
// let deleteNotesAll = document.querySelector('.deleteAllNotes')
// //let noteBtn = document.getElementById('createNoteButton')

// let notes = []

// //let updatingID = null;

// //noteBtn.addEventListener('click',async ()=>{
//     // const first_name = document.getElementById('first_name').value;
//     // const last_name = document.getElementById('last_name').value;
//     // const email = document.getElementById('email').value;
//     // const phone = document.getElementById('phone').value;
//     // const role = document.getElementById('role').value;
//     // const available = document.querySelector('input[name="available"]:checked')?
//     // document.querySelector('input[name="available"]:checked').value : "";

//     // if(!first_name || !last_name || !email || !phone || !role){
//     //     document.getElementById('warning-msg').innerHTML = 'All fields are required';
//     // }
//     // //console.log(first_name, last_name, email, phone, role, available);
//     // let body = {first_name, last_name, email, phone, role, available};

//     // if(updatingID){
//     //     let result = await axios.put(`http://localhost:3000/api/v1/players/${updatingID}`, body);
//     //     updatingID = null;
//     //     noteBtn.innerText = 'Submit';
//     // }else{
//     //     let res = await axios.post('http://localhost:3000/api/v1/players/add-players', body);
//     //     document.getElementById('warning-msg').innerHTML = '';
//     //     //console.log(res);
//     // }
//     // renderElementsToScreen()
// // })

// async function renderElementsToScreen(){
//     //notesListRootElement.innerHTML = '';
//     // let players = await axios.get('http://localhost:3000/api/v1/players/get-players') //http://localhost:3000/api/v1/players/get-players
//     // console.log(players.data.data);
//     // notes = players.data.data;

//     //ensure that notes is an array before using forEach
//     if(Array.isArray(notes)){
//         notes.forEach(note =>{
//             renderNoteToList(note, note.uniquID);
//         });
//     }
// } 

// document.querySelector('#createNoteButton').addEventListener('click', ()=>{
//     let uniquID = 'note' + Math.floor(Math.random()*1000) 
//     let note ={
//         // first_name: document.querySelector('.first_name').value,
//         // last_name: document.querySelector('last_name').value,
//         // email: document.querySelector('email').value,
//         // phone: document.querySelector('phone').value,
//         // role: document.querySelector('role').value
//         // available: document.querySelector('').value;
//         title: document.querySelector('#createNoteTitle').value,
//         content: document.querySelector('#createNoteContent').value
//      }
//     addNoteToLocalStorage(note, uniquID)
//     renderNoteToList(note, uniquID)
// })

// function renderNoteToList(note, uniquID) {
//             let noteDiv = document.createElement('div')
//             noteDiv.classList.add('note',uniquID)
//             let noteTitle=document.createElement('h4')
//             let noteContent = document.createElement('p');
//             let noteDeletebutton = document.createElement('button');
    
//             noteDeletebutton.addEventListener('click',()=>{
//                 removeElementFromNotesList(uniquID)        
//             })
    
//             noteTitle.innerText = note.title;
//             noteContent.innerText = note.content;
//             noteDeletebutton.innerText = "Delete Note";
    
//             noteDiv.appendChild(noteTitle)
//             noteDiv.appendChild(noteContent)
//             noteDiv.appendChild(noteDeletebutton)
//             notesListRootElement.append(noteDiv)
    
//         document.querySelector('#createNoteTitle').value='';
//         document.querySelector('#createNoteContent').value='';
//     }

// // function renderNoteToList(note, uniquID) {
// //     //if(note.title && note.content){
// //     // alert('please fill the title and content')
// //     // }else{
// //     let noteDiv = document.createElement('div')
// //     noteDiv.classList.add('note',`note${uniquID}`)
// //     let noteTitle=document.createElement('h4')
// //     let noteContent = document.createElement('p');
// //     // let playermobile = document.createElement('p');
// //     // let playeravailability = document.createElement('p');
// //     // let playerrole = document.createElement('p');
// //     // let noteDeletebutton = document.createElement('button');
// //     // let updateButton = document.createElement('button');

// //     noteDeletebutton.addEventListener('click',()=>{
// //         removeElementFromNotesList(uniquID)
// //     })

//     // updateButton.addEventListener('click',()=>{
//     //     updatePlayers(uniquID, note)
//     // })

// //     noteTitle.innerText = `Name: ${note.first_name} ${note.last_name}`//note.first_name+' '+note.last_name;
// //     noteContent.innerText = `Email: ${note.email}`;
// //     playermobile.innerText = `Phone: ${note.phone}`;
// //     playerrole.innerText = `Role: ${note.role}`;
// //     playeravailability.innerText = `Availability: ${note.available ? 'Yes' : 'No'}`;
// //     noteDeletebutton.innerText = 'Delete';
// //     updateButton.innerText = 'Update'
// //     updateButton.style.marginLeft = '10px';
// //     noteDiv.appendChild(noteTitle)
// //     noteDiv.appendChild(noteContent)
// //     noteDiv.appendChild(playermobile)
// //     noteDiv.appendChild(playerrole)
// //     noteDiv.appendChild(playeravailability)
// //     noteDiv.appendChild(noteDeletebutton)
// //     noteDiv.appendChild(updateButton)
// //     notesListRootElement.append(noteDiv)
// //     document.getElementById('first_name').value = '';
// //     document.getElementById('last_name').value = '';
// //     document.getElementById('emai').value = '';
// //     document.getElementById('phone').value = '';
// //     document.getElementById('role').value = '';
// // //document.getElementById('first_name').value = '';
// // }

// async function removeElementFromNotesList(id){
//     console.log(id);
//     //let res = await axios.delete(`http://localhost:3000/api/v1/players/${id}`)
//    // console.log(res.data);
//     //document.querySelector(`.note${id}`).remove()
//     //renderElementsToScreen();
//    //localStorage.setItem('notes', JSON.stringify('notes'))
//    document.querySelector('.'+ id).remove()
//        notes = JSON.parse(localStorage.getItem('notes'))
//        let index = notes.findIndex(note=>note.uniquID == id)
//        notes.splice(index, 1)
//        localStorage.setItem('notes', JSON.stringify('notes'))
// }



// // async function updatePlayers(uniquID, note){
// //     console.log(note);
// //     document.getElementById('first_name').value = note.first_name;
// //     document.getElementById('last_name').value = note.last_name;
// //     document.getElementById('email').value = note.email;
// //     document.getElementById('phone').value = note.phone;
// //     document.getElementById('role').value = note.role;
// //     note.available ? document.getElementById('role_yes').checked = true:
// //     document.getElementById('role_no').checked = true;

// //     updatingID  = updatingID
// //     noteBtn.innerHTML = 'Update';

// //    // note.available ==='Yes' ? document.getElementById('input[name="available"][value="Yes"]').checked = true:
// //     //document.querySelector('input[name="available"][value= "No"]').checked = true;
// // }
// renderElementsToScreen()