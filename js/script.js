const peopleContainer = document.getElementById("people");

for(let i = 0; i <= 29; i++){
    var people = document.createElement("article");
    people.classList.add("people");
    people.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    people.setAttribute("draggable", "true");
    people.setAttribute("ondragstart","onDragStart(event);")
    people.id = "draggableSpan" + i;

    peopleContainer.append(people);
    
}


/*Transfert données au début du Drag*/
function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
}


/*Anulation du rechargement à la fin du Drag*/
function onDragOver(event) {
    event.preventDefault();
}


/*Transfert final au Drog du Drag Element*/
function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
  
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    
    dropzone.appendChild(draggableElement);
  
    event
      .dataTransfer
      .clearData();
  }






