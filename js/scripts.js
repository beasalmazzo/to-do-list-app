/*

Tip: jQuery doesn’t have an equivalent to createElement, 
so you’ll have to append HTML as a string like this: 
$('.selectedElement').append('<li>some item</li>').

Tip: You can reuse createTextNode('X') in jQuery like this: 
deleteButton.append(document.createTextNode('X'));.

*/


function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
       /* vanilla --- let li = document.createElement("li"); */
       let li = $('<li></li>');
       /* vanilla --- let inputValue = document.getElementById('input').value;
                      let text = document.createTextNode(inputValue); 
                      li.appendChild(text);*/
       let inputValue = $('#input').val();
       li.append(inputValue);
    
       if (inputValue === '') {
         alert('You must write something!');
       } else {
         /*vanilla --- let list = document.querySelector('#list');*/
         let list = $('#list');
         /* vanilla --- list.appendChild(li); */
         list.append(li);
       }
    
     //2. Crossing out an item from the list of items:
       function crossOut() {
            /* vanilla --- li.classList.toggle('strike'); */
            li.toggleClass('strike');
         }
    
        /* vanilla --- li.addEventListener('dblclick',crossOut); */
        li.on('dblclick', crossOut);
    
     //3(i). Adding the delete button "X": 
        /* vanilla --- let crossOutButton = document.createElement('crossOutButton'); 
                       crossOutButton.appendChild(document.createTextNode('X'));*/
        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
    
        /* vanilla --- 	crossOutButton.addEventListener("click", deleteListItem); */
        crossOutButton.on('click', deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
            /* vanilla --- li.classList.add("delete") */
            li.addClass('delete');
         }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    
     
    
    