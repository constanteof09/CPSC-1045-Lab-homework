let animals = [];

//constructor
function Animal (Name, Species, Age){
    this.Name = Name;
    this.Species = Species;
    this.Age = Age;
}

function addAnimal(){
    let Name = document.getElementById("Name").value;
    let Species = document.getElementById("Species").value;
    let Age = document.getElementById("Age").value;
    let output = document.getElementById("output");

    let animal1 = new Animal(Name, Species, Age);

    animals.push(animal1);

    // animals.push(Name + ", " + Species + ", " + Age);

    let str = "";
        //for loop
        for(let i = 0; i < animals.length; i++){
            str += "<li>"+animals[i].Name+ ", " 
            +animals[i].Species+ ", " + animals[i].Age+"</li>";
        }
    
        output.innerHTML = str;

    console.log(animals.toString());
    console.log(animal1);
}

