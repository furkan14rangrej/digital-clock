document.querySelector('#btn').onclick = function () {
    if (document.querySelector('#main input').value.length == 0)
        alert("please Enter Your Task");
    else {
       
        document.querySelector('#tasks').innerHTML
            += `<div class="task"><h3 id="taskname">${document.querySelector("#main input").value}</h3><i class="glyphicon glyphicon-trash delete"></i></div>`;


        var currenttask = document.querySelectorAll('.delete');
        for (var i = 0; i < currenttask.length; i++) {
            currenttask[i].onclick = function () {
                this.parentNode.remove();
            }

        }



        document.querySelector('#main input').value = "";
        var tasks = document.querySelectorAll('#taskname');
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {

                this.classList.toggle('completed');

            }
        }
    }
}

