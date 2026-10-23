let cources = ["WDD131", "WDD130", "CSE110", "CSE210"];
console.log(cources[0])
console.log(cources[1])
console.log(cources[cources.length - 1])

cources.forEach((item) => {
    console.log(item)
});;

let cource = {
    name: "dynamic web fundamentals",
    code: "WDD131",
    credts: 3,
    instructor: "Brother Warner"    
}

console.log(cources.instructor);

let courcesArrayOfObjects = [
    {
        name: "dynamic web fundamentals",
        code: "WDD131",
        credts: 2,
        instructor: "Brother Warner"    
    },
    {
        name: "dynamic web fundamentals2",
        code: "WDD131",
        credts: 2,
        instructor: "Brother Warner"    
    },
]
console.log(courcesArrayOfObjects[1].name);

let body = document.querySelector('body');

courcesArrayOfObjects.forEach((item) => {
    let courceDiv = 
        <div>
            <h2>${cource.name}</h2>
            <p>code: ${cource.code}</p>
            <p>credts: ${cource.credits}</p>
            <p>instructor: ${cource.instructor}</p>
        </div>
})