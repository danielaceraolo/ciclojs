for (let i = 1; i <=3; i++) {
    
    let ingresarNombre = prompt("Ingresar Nombre");
    let ingresarApellido = prompt("Ingresar Apellido");
        alert(" Nombre: " + ingresarNombre + " Apellido: "+ingresarApellido);
    let reservarTurno = prompt("Reservar turno?")
        if ((reservarTurno == "si") || (reservarTurno == "Si") || (reservarTurno == "SI"))
            alert(" Turno  Reservado N° "+i+ " Nombre: " + ingresarNombre + " Apellido: "+ingresarApellido)
        else{
            alert("Turno no reservado.")
        }}