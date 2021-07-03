class Calculator{
  constructor(DataText1,DataText2){
      //do the two text over operation
      this.dataText1=DataText1
      this.dataText2=DataText2
      this.OperationAndClear()
      
  }
  //operation and clear the all numbers
  OperationAndClear(){
    this.numberOperation=""
    this.operation=null
    this.oldNumbers=""
  }
  delOperation(){
    this.numberOperation=this.numberOperation.toString().slice(0,-1)
  }
  //append numbers
  addNumber(number){
    if(number=="."&&this.numberOperation.includes("."))return
    this.numberOperation+=number.toString()

  }
  chooseOperation(operation){
    if(this.numberOperation==="")return
    if(this.oldNumbers!=""){
      this.computeNumbers()
    }
    //append operation
    this.operation=operation
    //get the old numbers
    this.oldNumbers=this.numberOperation
    //and update the new numbers
    this.numberOperation=""

   }
  //compute the numbers
  computeNumbers(){
    // define a value
    let compute
    //string Numbers --> integer Numbers
    var old=parseFloat(this.oldNumbers)
    var update=parseFloat(this.numberOperation)
    if(isNaN(old)||isNaN(update)) return
    switch(this.operation){
      case "÷":
        compute=old/update
        break
      case "x":
        compute=old*update

        break
      case "-":
        compute=old-update
        break
      case "+":
       compute=old+update
       break
    }
    this.numberOperation=compute
    //formating peration and old numbers
    this.operation=undefined
    this.oldNumbers=""

  }

  updateDisplay(){
    this.dataText2.innerText=this.numberOperation
    if(this.operation!=null){
      //the old number into dataText1 write
      this.dataText1.innerText=`${this.oldNumbers} ${this.operation}`
    }
    else{
      this.dataText1.innerText=""
    }
  }

}





var butonNumber=document.querySelectorAll("[value-number]")
var operationButtons=document.querySelectorAll("[value-operation]")
var equalsButton=document.querySelector("[data-equals]")
var deleteButton=document.querySelector("[data-delete]")
var clearButton=document.querySelector("[data-All-clear]")
var displayNumber1=document.querySelector("[data-text1]")
var displayNumber2=document.querySelector("[data-text2]")




var calculator=new Calculator(displayNumber1,displayNumber2)

var z=0
var x=0
butonNumber.forEach(NumberButtons=>{
  NumberButtons.addEventListener("click",()=>{
   calculator.addNumber(NumberButtons.innerText)
   calculator.updateDisplay()
  })
})

operationButtons.forEach(Operation=>{
  Operation.addEventListener("click",()=>{
    calculator.chooseOperation(Operation.innerText)
    calculator.updateDisplay()
  })
})
equalsButton.addEventListener('click', button => {
  calculator.computeNumbers()
  calculator.updateDisplay()
})

deleteButton.addEventListener("click",NumberButtons=>{
  calculator.delOperation()
  calculator.updateDisplay()
  
})

clearButton.addEventListener("click",NumberButtons=>{
  calculator.OperationAndClear()
  calculator.updateDisplay()
})