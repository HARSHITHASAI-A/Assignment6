for(var i=1; i <= 100; i++) {
    var isMultiple3 = i%3 === 0;
    var isMultiple5 = i%5 === 0;
    if(isMultiple3 || isMultiple5) {
      if(isMultiple3 && isMultiple5) {
        document.writeln("Marco! Polo!");
      }
      else if(isMultiple3) {
        document.writeln("Marco!");
      }
      else {
        document.writeln("Polo!");
      }
    }
  }
  