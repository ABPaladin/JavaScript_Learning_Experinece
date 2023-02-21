const todoin = document.getElementById("todoin");
const todslist = document.getElementById("todslist");
const todobtn = document.getElementById("todobtn");
const p = document.querySelectorAll("p");

todobtn.addEventListener("click",() => {
    todoval = todoin.value 
    todslist.innerHTML += `<p onclick="linetodos(id)">${todoval}</p>`;
    console.log(todoval)
    console.log(todslist)
})
function linetodos() {
    console.log(p)
    p.style.textDecoration ='line-through' 
}
const handleClick = () => {
    let task = {
      id: Date.now(),
      value: todo,
      completed: false,
    }
    setTodos([...todos, task])
    setTodo("")
    console.log(todos)
  }

  const handleComplete = (id) => {
      setTodos(todos.map(t =>{
        if (t.id === id) {
            t.completed = !t.completed
        }
        return t
      }))
  }
// newtodos.addEventListener("click",() => {
//     newtodos.style.textDecoration='line-through' 
// })
// newtodos.addEventListener("doubleclick",() => {
//     newtodos.display = none
// })