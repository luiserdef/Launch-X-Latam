const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

// const operation= document.getElementById(".operation")

const equal = document.getElementById("equal")
const raiz = document.getElementById("raiz")
const potencia = document.getElementById("potencia")
const residuo = document.getElementById("residuo")
const clean = document.getElementById("clean")
const divi = document.getElementById("divi")
const multi = document.getElementById("multi")
const plus = document.getElementById("plus")
const rest = document.getElementById("rest")
const point = document.getElementById("point")

const process = document.getElementById("process")
const result = document.getElementById("result")

let operations= ''



one.addEventListener("click",()=>addOperation(1))
two.addEventListener("click",()=>addOperation(2))
three.addEventListener("click",()=>addOperation(3))
four.addEventListener("click",()=>addOperation(4))
five.addEventListener("click",()=>addOperation(5))
six.addEventListener("click",()=>addOperation(6))
seven.addEventListener("click",()=>addOperation(7))
eight.addEventListener("click",()=>addOperation(8))
nine.addEventListener("click",()=>addOperation(9))

equal.addEventListener("click",()=>resultOpe())

raiz.addEventListener("click",()=>addOperation(2))
potencia.addEventListener("click",()=>addOperation('^'))
residuo.addEventListener("click",()=>addOperation(4))
clean.addEventListener("click",()=>{
    operations= ''
    process.textContent = 0
    result.textContent = 0
})
divi.addEventListener("click",()=>addOperation('/'))
multi.addEventListener("click",()=>addOperation('*'))
plus.addEventListener("click",()=>addOperation('+'))
rest.addEventListener("click",()=>addOperation('-'))
point.addEventListener("click",()=>addOperation('.'))

const opers = [
    '^',
    '/',
    '+',
    '-',
    '*',
    ''
]

const operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
};

function addOperation (text){
    operations+=text
    process.textContent = operations

}

function resultOpe (){
    
    const operator = operations.split('').filter(el=>opers.includes(el))
    const finalOperation = operations.split(operator)

    result.textContent = operators[operator](finalOperation[0],finalOperation[1])
    console.log(operators[operator](finalOperation[0],finalOperation[1]))
    // if(opers.includes(...operToA)){
    //     console.log("es true")
    // }
    console.log("reultado: "+operator)
    console.log("reultado: "+operations)
}

