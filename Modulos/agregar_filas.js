// Variables Globales
var id = 0;
var table = document.getElementById("tfoot");
let boton = document.getElementById("add");


// ADD LINEA
add = () => {
    
    boton.addEventListener('click', () => {

        // Creamos la fila
        let fila = document.createElement('tr');
        table.appendChild(fila);
        fila.setAttribute('id', id);
        

        for (let i = 0; i < 7; i++) { //7 columnas
            var columna = document.createElement('td');
            fila.appendChild(columna);

            //agrego por cada columna lo que corresponde
            switch (i) {
                case 0:    
                    let input = document.createElement('input');
                    input.setAttribute('class','form-control');
                    input.setAttribute('value',`ID: ${id}`);
                    columna.appendChild(input);                    
                    break;
                case 1:
                    columna.setAttribute("colspan","2");
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;              
                case 6:
                    btn_borrar = document.createElement("button");
                    btn_borrar.setAttribute("class","btn btn-danger");
                    btn_borrar.setAttribute("id","id_fila" + id);
                    columna.appendChild(btn_borrar).innerHTML = "Borrar";
                    columna.setAttribute("style","background-color: transparent; border:none;");
                    break;                  
                default:
                    break;
            }

            }
        }   
    )
}

add();

    /*
    id = id+1;
    
    // Creamos la fila
    let fila = document.createElement('tr');
    fila.setAttribute('id', id);

    for (let i = 0; i < 8; i++) { //7 columnas
        var columna = document.createElement('td');
        // columna.setAttribute('class', 'col_'+id) ID PARA COL
        fila.appendChild(columna);
    }

    // Diferenciamos las columnas individuales
    let columnas = fila.children;
    // console.log(columnas.length) => retorna 6

    // Accedemos 1x1 para meterle los campos

    // Input 1
    let input = document.createElement('input');
    input.setAttribute('class','form-control');
    input.setAttribute('value',`ID: ${id}`);
    columnas[0].appendChild(input);

    
    // Creamos el select Obra Social
    let selectOS = document.createElement('select');
    selectOS.setAttribute('class','form-select selectOS');
    for (let i = 1; i < 6; i++) { //5 OS options
        let option = document.createElement('option');
        let textnode = document.createTextNode(`OS ${i}`);
        option.appendChild(textnode);
        selectOS.appendChild(option);
        columnas[1].appendChild(selectOS);
    }
    
    // Creamos el select Obra Social Plan
    let selectOSP = document.createElement('select');
    selectOSP.setAttribute('class','form-select');
    for (let i = 1; i <= 3; i++) { //3 OSP options
        let option = document.createElement('option');
        let textnode = document.createTextNode(`OS Plan ${i}`);
        option.appendChild(textnode);
        selectOSP.appendChild(option);
        columnas[2].appendChild(selectOSP);
    }

    // Input 2
    let input2 = document.createElement('input');
    input2.setAttribute('class','form-control');
    columnas[3].appendChild(input2);

    // Input 3
    let input3 = document.createElement('input');
    input3.setAttribute('class','form-control');
    columnas[4].appendChild(input3);

    // Input 4
    let input4 = document.createElement('input');
    input4.setAttribute('class','form-control');
    columnas[5].appendChild(input4);
    
    // Boton borrar
    let btn = document.createElement('button');
    btn.setAttribute('class','btn btn-danger remove');
    btn.setAttribute('onClick', `remove(${id})`);
    let text = document.createTextNode('Borrar');
    btn.appendChild(text);
    columnas[6].appendChild(btn);


    table.appendChild(fila);
}

// Funcion para borrar
function remove(id) {
    document.getElementById(id).remove()
}
*/