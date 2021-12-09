// var numbers=[1,2,3]
// console.log(Math.max.apply(null,numbers))



 let person={
        name:"mabu"
    }
    function fn(a,b,c)
    {
        console.log("fn",a,b,c,this.name)
    
    }
    fn.apply(person,[1,2,3])