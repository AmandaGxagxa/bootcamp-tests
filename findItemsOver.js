function findItemsOver(list, treshold){
  var tresh =[]
for(var i = 0; i < list.length; i++){
if(list[i].qty > treshold){
tresh.push(list[i])
}
}
return tresh.length
}
