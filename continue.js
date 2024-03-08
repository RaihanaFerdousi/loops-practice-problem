var items = ['bottle', 'mouse', 'sunglass', 'pen', 'book'];
for(var i = 0; i < items.length; i++){
    var item = items[1];
    if(item > 50){
        continue;
    }
    console.log(item);
}