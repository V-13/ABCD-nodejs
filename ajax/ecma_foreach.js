var fruits=["a","b","c","d"];
fruits.forEach(myfun);
function myfun(item,index){
    ind=index+1
    console.log(item+":found at :"+ind);
}
