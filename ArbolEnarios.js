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



