document.getElementById("n1").addEventListener("click", n1);
        document.getElementById("n2").addEventListener("click", n2);
        document.getElementById("n3").addEventListener("click", n3);
        document.getElementById("n4").addEventListener("click", n4);
        document.getElementById("n5").addEventListener("click", n5);
        document.getElementById("n6").addEventListener("click", n6);
        document.getElementById("n7").addEventListener("click", n7);
        document.getElementById("n8").addEventListener("click", n8);
        document.getElementById("n9").addEventListener("click", n9);
        document.getElementById("n0").addEventListener("click", n0);
        
        document.getElementById("suma").addEventListener("click", suma);
        document.getElementById("resta").addEventListener("click", resta);
        document.getElementById("division").addEventListener("click",division);
        document.getElementById("multiplicacion").addEventListener("click", multiplicacion);
        
        document.getElementById("sr").addEventListener("click", showResult);
        
    //*Resultado *//    
    
    function showResult(){
       let actual = document.getElementById("resultado").innerHTML;
       let suma = actual.indexOf("+");
        let resta = actual.indexOf("-");
        let mult = actual.indexOf("x");
        let divi = actual.indexOf("%");
        if (suma !== -1){
            arr = actual.split("+",2);
            res = parseInt(arr[0]) + parseInt(arr[1]);
            document.getElementById("resultado").innerHTML = res;
        }
        else if (resta !== -1) {
           arr = actual.split("-",2);
            res = parseInt(arr[0]) - parseInt(arr[1]);
            document.getElementById("resultado").innerHTML = res;
        }
        else if(mult !== -1){
            arr = actual.split("x",2);
            res = parseInt(arr[0]) * parseInt(arr[1]);
            document.getElementById("resultado").innerHTML = res;
        }
        else if(divi !== -1){
            arr = actual.split("%",2);
            res = parseInt(arr[0]) / parseInt(arr[1]);
            document.getElementById("resultado").innerHTML = res;
        }
    }    
        
    function n1(){
        let sumado = document.getElementById("n1").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n2(){
        let sumado = document.getElementById("n2").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n3(){
        let sumado = document.getElementById("n3").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n4(){
        let sumado = document.getElementById("n4").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n5(){
        let sumado = document.getElementById("n5").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n6(){
        let sumado = document.getElementById("n6").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n7(){
        let sumado = document.getElementById("n1").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n8(){
        let sumado = document.getElementById("n8").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n9(){
        let sumado = document.getElementById("n9").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        function n0(){
        let sumado = document.getElementById("n0").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = actual + sumado;
    }
        //*Operaciones*//
        
        function suma(){
        let sumado = document.getElementById("suma").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML =  actual + " " + sumado + " ";
    }
        function resta(){
        let sumado = document.getElementById("resta").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML =  actual + " " + sumado + " ";
    }
        function division(){
        let sumado = document.getElementById("division").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML =  actual + " " + sumado + " ";
    }
        function multiplicacion(){
        let sumado = document.getElementById("multiplicacion").innerHTML;
        let actual = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML =  actual + " " + sumado + " ";
    }