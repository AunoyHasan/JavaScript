const names = ["aunoy", "rahim", "rifat", "dil", "antu", "aunoy", "dil", "rifat"];

const removeDuplicate = (names) => {
    var newArray = [];
    for(var i=0; i<names.length; i++){
        for(var j=i+1; j<names.length; j++){
            if(names[i] != names[j]){
                newArray[i] = names[i];
            }
        }
    }
    console.log(newArray);
}

removeDuplicate(names);