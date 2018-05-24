class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var obj = new Circle(223); 
obj.disp()

// Multi-level class inheritance
class Root { 
    str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
 
 var leaf = new Leaf(); 
 leaf.str ="hello" 
 console.log(leaf.str)

// Class inheritance and Method Overriding
 class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
 } 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() // super is used to refer base class properties and constructor
       console.log("doPrint() is printing a string…")
    } 
 } 
 
 var printer = new StringPrinter() 
 printer.doPrint()