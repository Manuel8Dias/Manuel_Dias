(function() {
    let myInput = document.getElementById('myInput');
    let butt = document.getElementById('butt');
    let list = document.querySelector('#list'); 

    function addToDo2 () {
        var tarefa = document.createElement('li');
        var check = document.createElement('input');
            
        check.type = 'checkbox';
        tarefa.innerHTML = myInput.value; 
        
        list.appendChild(tarefa);
        list.appendChild(check);
        myInput.value = ""; 

        var total = document.querySelector('li').length        
        console.log(total);
     
        check.checked = false;

        function visto (){
            tarefa.style.color = "green";
            tarefa.style.cursor = "pointer";
        
            let apagar = () => {
               let confirmar = confirm("Apagar esta tarefa?");
                if (confirmar == true){
                list.removeChild(tarefa)
                list.removeChild(check)
                }
            }            

            
            tarefa.addEventListener('click', apagar)
            
        }

        function naoVisto () {   
            tarefa.style.color= "#1b1b1b";
        }

        function checado () {
        switch (check.checked) {
            case true:
                visto();
                break;
            case false:
                naoVisto();
                break;
        }
    }
    check.addEventListener('click', checado)
    }

    let addToDo = (tecla) => { 
        if (tecla.keyCode == "13"){ 
            addToDo2();
        } else {
            butt.addEventListener('click', addToDo2);
        }
    }

    myInput.addEventListener('keypress', addToDo, false); 
   
})();
