function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed for arguments a and b.');
    //Alternative: provide default values
    //a = a || 0; 
    //b = b || 0; 
  }
  // ...rest of the function...
}