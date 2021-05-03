arrayObjetosPrueba=[
    {
        idParent: "0", 
        Token:"ASIGVAR", 
        Value:["X", ":=", "10", ";"]
    },
    {
        idParent: "1", 
        Token:"ASIGVAR", 
        Value:["Y", ":=", "5", ";"]
    },
    {
        idParent: "2", 
        Token:"ASIGVAR", 
        Value:["X", ":=", "10", ";"]
    },
    {
        idParent: "3", 
        Token:"ASIGVAR", 
        Value:["for", "ASIGVAR", "to", "x", "do", "ASIGVAR"]
    },
    {
        idParent: "3", 
        Token:"ASIGVAR", 
        Value:["i", ":=", "1"]
    },
    {
        idParent: "3", 
        Token:"ASIGVAR", 
        Value:["y", ":=", "OPEARIT", ";"]
    },
    {
        idParent: "3", 
        Token:"OPEARIT", 
        Value:["y", "+", "y"]
    },    
];
console.log(arrayObjetosPrueba);



class Tree{
    constructor(nodo){
        this._root = nodo;
    }
}

class Nodo{
    constructor(token, value = null, level){
        this.token = token,
        this.value = value ,
        this.level = level,
        this.children = [];
    }

    añadirHijo(nodo){
        this.children.push(nodo);
    }
}

const nodoPadre = new Nodo("Padre",null, 0);
const arbol = new Tree(nodoPadre);

let longitudArray = arrayObjetosPrueba.length;

for (let i = 0; i < longitudArray; i++) {
    level = 0;
    auxNodo = new Nodo(arrayObjetosPrueba[i].Token, null ,level);
    nodoPadre.añadirHijo(auxNodo);
    arrayHijo = arrayObjetosPrueba[i].Value;
    recorrerArrayValues( arrayHijo, level, arrayObjetosPrueba[i].Token ,auxNodo );
};

function recorrerArrayValues( arrayHijo, level, Token, nodo ){
    level++;
    arrayHijo.forEach(data=>{
        auxNodo = new Nodo(Token,data,level);
        nodo.añadirHijo(auxNodo);
    });
};


console.log(arbol);
