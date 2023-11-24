function camelize(str) {
    return str
    .split('-') 
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    
    .join('');
    }
    
    let dashString = "my-short-string";
    let camelCaseString = camelize(dashString);
    console.log(camelCaseString);