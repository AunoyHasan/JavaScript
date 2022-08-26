// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  console.log(n.next()); // Returns 10
  console.log(n.next()); // Returns 20
  console.log(n.next()); // Returns 30