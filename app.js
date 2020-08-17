const numberButtons =  document.querySelectorAll(".number")
const operatorButtons =  document.querySelectorAll(".operator")
const clearButton =  document.querySelector(".clear")
const deleteButton =  document.querySelector(".delete")
const equalsButton =  document.querySelector(".equals")
const previousValue = document.querySelector(".previous")
const currentValue = document.querySelector(".current")


class Calculator{
constructor(previousValue, currentValue)    {
    this.previousValue = previousValue
    this.currentValue =currentValue

    this.clear()
}
clear() {
    this.previousOperand =""
    this.currentOperand =""
    this.operation = undefined
}
delete()    {
this.currentOperand =  this.currentOperand.toString().slice(0, -1)
}


appendNumber(number)    {
    if(number ==="." && this.currentOperand.includes(".")) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

choseOperation(operation)   {
 if(this.currentOperand === "") return
    if(this.previousOperand !=+ "")   {
        this.compute()
    }
    this.operation =  operation
    this.previousOperand = this.currentOperand
    this.currentOperand  = ""
}

compute()   {
let computation;
const prev = parseFloat(this.previousOperand)
const current =  parseFloat(this.currentOperand)

if(isNaN(prev)  || isNaN(current)) return
switch (this.operation) {
  case "+":
    computation = prev + current;
    break;
  case "+":
    computation = prev - current;
  
    break;
  case "×":
    computation = prev * current;
    break;
  case "÷":
    computation = prev / current;
    break;
  case "%":
    computation = prev % current;
    break;


  default:
    return

}
this.currentOperand = computation
this.previousOperand = ""
this.operation =undefined
}


getDisplayNumber(number) {
   const floatNumber =  parseFloat(number)
   if(isNaN(floatNumber)) return ''
   return floatNumber.toLocaleString('en')
}

updateDisplay() {
this.currentValue.innerText =  this.getDisplayNumber(this.currentOperand)
if(this.operation != null) {
    this.previousValue.innerText = `${this.getDisplayNumber(this.previousOperand)} ${(this.operation)}`
}else{
    this.previousValue.innerText = "";
}

}
}
const calculator  = new Calculator(previousValue, currentValue)
numberButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        calculator.choseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () =>   {
    calculator.compute()
    calculator.updateDisplay()
})


clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () =>    {
    calculator.delete()
    calculator.updateDisplay()
})