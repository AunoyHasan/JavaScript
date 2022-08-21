function swapWithTemp(a, b){
    console.log("Before swapping: a = "+a+" b = "+b);
    let temp = a;
    a=b;
    b=temp;
    console.log("After swapping: a = "+a+" b = "+b);
}

swapWithTemp(10, 20);

//using destructure
const swapWithoutTemp = (a, b) => {
    console.log(a , b);
    [a, b] = [b, a];
    console.log(a , b);
}

swapWithoutTemp(8, 9);