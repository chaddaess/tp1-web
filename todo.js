let butt = document.querySelector(".butt");
let day = document.querySelector("#first");
let task = document.querySelector("#second");
let box = document.querySelector("#toDos");

butt.disabled = true;


day.addEventListener("input", () => {
  if ((day.value.trim() === '') || (task.value === "") || (task.value.trim() === '')) { butt.disabled = true }
  else { butt.disabled = false }
});
day.addEventListener("keyup", () => { if (day.value === "") { butt.disabled = true } });


task.addEventListener("input", () => {
  if ((task.value.trim() === '') || (day.value === "") || (day.value.trim() === '')) { butt.disabled = true }
  else { butt.disabled = false }
});
task.addEventListener("keyup", () => { if (task.value === "") { butt.disabled = true } });

butt.addEventListener("click", addToDo);

let supp; //car si on déclare  'supp ' dans addToDo
// supp sera invisible au programme lorque le bouton est cliqué
let tasks;

function addToDo() {
  let newToDo = document.createElement("div");

  let newThing = document.createElement("div");

  newThing.innerHTML += `<p id="task">for ${day.value} do: ${task.value}</p>`;

  let newbuttonThing = document.createElement("div");

  newbuttonThing.innerHTML += `<button type="reset" class="delbutt" >supprimer</button>`;

  newThing.appendChild(newbuttonThing);

  box.appendChild(newThing);

  supp = newbuttonThing.querySelector(".delbutt");
  supp.addEventListener("click", () => {
  box.removeChild(newbuttonThing.parentElement);
  }
  );


  tasks = newThing.querySelector("p");
  tasks.addEventListener("click", (event) => { event.target.style.color = "green";
                                               event.target.classList.toggle("completed");
                                             });


  day.value = "";
  task.value = "";


}














