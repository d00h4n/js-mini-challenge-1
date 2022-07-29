function pizzaMozarella(score) {
  // Tulis kodingan dibawah ini

  for (let i = 1; i<=15; i++){
    if (i % 3 ===0) {console.log('Pizza');
  }else if (i % 5 ===0) {console.log('Mozarella');
  }else{
      console.log(i)
    }
  }

  result = 'score';
  return result;
}

// Test Case
pizzaMozarella(15);
// 1
// 2
// Pizza
// 4
// Mozarella
// Pizza
// 7
// 8
// Pizza
// Mozarella
// 11
// Pizza
// 13 
// 14
// PizzaMozarella
