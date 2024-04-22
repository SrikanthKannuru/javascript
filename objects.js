 var bank3 = {
      name : "KOTAK",
      emps :10 ,
      acts : 50
 }
 class bank {
       constructor(name, acts, emp){
         this.name =name
         this.acts = acts
         this.emp = emp
       }
 }
 var bank1 =new bank("HDFC", 100, 20)
 console.log(bank1);
 var bank2 =new bank("ICCI", 200, 30)
 console.log(bank2);
 console.log(typeof(bank3));
 console.log(typeof(bank1));