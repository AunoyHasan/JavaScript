function Factorial(n){
    let i = 1, fact=1;
    while(i<=n){
        fact = fact*i;
        i++;
    }
    console.log("Factorial of "+n+" is", fact);
}

Factorial(5);