let styles = ["Jazz", "Blues"];




styles.push("Rock-n-Roll"); 




let middleIndex = Math.floor(styles.length / 2); 
styles[middleIndex] = "Classics"; 




let firstStyle = styles.shift(); 
console.log("Removed:", firstStyle); 




console.log(styles); 