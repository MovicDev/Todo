function disTable() {
    checking = "";
    todo.map((todoI,i)=>{
              checking += `
              <tr'>
                        <td>${i+1}</td>
                        <td>${todoI.todoName}</td>
                        <td>${todoI.todoDis}</td>
                        <td style="align-center">
                        <small><button class="btn btn-warning shadow-sm btn-sm mx-auto float-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button></small>
                        <small><button class="btn btn-danger shadow-sm btn-sm mx-auto float-end" onclick="del(${i})">Delete</button></small>
                        </td>
             </tr>
               `
            //    checking += `
            //    <div class="card col-12 col-lg-4">
            //    <img src="imags.png" alt="" class="w-100 card-img-top">
            //   <div class="card-body">
            //     <p class="card-title text-center">${todoI.todoName}</p>
            //     <p class="card-title text-center">${todoI.todoDis}</p>
            //   </div>
            //   <div class="card-body mx-auto justify-center d-flex gap-5">
            //   <small><button class="btn btn-warning shadow-sm btn-sm mx-auto float-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button></small>
            //    <small><button class="btn btn-danger shadow-sm btn-sm mx-auto float-end" onclick="del(${i})">Delete</button></small>
            //   </div>
            //   </div>
            //    `
            
    })
               document.getElementById('show').innerHTML = checking
    }

var todo = []
var editTable = 0
function submitTodo() {
    var todoName = document.getElementById('inp').value
    var todoDis = document.getElementById('inpTwo').value
    if (todoName === '' || todoDis === '') {
        err.style.display = 'block'
        setTimeout(() => {
            err.style.display = 'none'
        }, 1000);
    }else{
       var list = {todoName,todoDis}
       var todoS = todo.push(list)
       console.log(todoS);
        disTable()
        console.log(list);
        errR.style.display = 'block'
        setTimeout(() => {
            errR.style.display = 'none'
        }, 1000);
    } 
        document.getElementById('inp').value = ''
        document.getElementById('inpTwo').value = ''
    }

function del(i) {
    todo.splice(i,1)
    disTable()
}
function edit(i) {
    editTable = i
    // document.getElementById('todoT').value = `${todoI.todoName}`
    // document.getElementById('todoD').value = `${todoI.todoDis}`
}
function editTodo() {
    var todoText = document.getElementById('todoT').value
    var todoTextDis = document.getElementById('todoD').value
    if (todoText.value === '' || todoTextDis.value === '') {
        alert('ok ok ok kk')
    } else{
        var todoName = document.getElementById('inp').value
        var todoDis = document.getElementById('inpTwo').value
        var list = {todoName,todoDis}
        var todoS = todo.push(list)
        todo.splice(editTable,1,todoS)
        disTable()
    }
}
