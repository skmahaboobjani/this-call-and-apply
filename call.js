// function box(height,width)
// {
//     this.height=height,
//     this.width=width
// }
// function fn(height,width,color)
// {
//     box.call(this,height,width)
//     this.color=color
// }
// var c= new fn(10,20,'red')
// console.log(c)

// let person={
//     name:"mabu"
// }
// function fn(a,b,c)
// {
//     console.log( "fn",a,b,c,this.name)

// }
// fn.call(person,1,2,3)

// let person={
//     name:"mabu"
// }
function fn(name)
{
    console.log( "fn",name)

}
fn.apply(null,["jani"])