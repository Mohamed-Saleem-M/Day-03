// Question 01 : For the given JSON iterate over all for loops (for, for in, for of, forEach)

var json = [
    {
        "name" : "John Doe",
        "age" : "23"
    },{
        "name" : "Mary Doe",
        "age" : "25"
    }
];


//for loop

for(var i = 0; i < json.length; i++) {

    console.log(json[i].name, json[i].age);
    
}

// for in loop

for(var i in json){

    console.log(json[i].name, json[i].age);

}

// for of loop

for(var i of json){

    console.log(i.name, i.age);

}

//forEach loop

json.forEach((i) => console.log(i.name, i.age));
