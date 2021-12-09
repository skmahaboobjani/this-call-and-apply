var obj={
    x:100,
    y:200
}
function fn(name)
{
    console.log(this.x,this.y,name)
}
var c=fn.bind(obj,"red")
c()