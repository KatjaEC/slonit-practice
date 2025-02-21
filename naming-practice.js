// ORIGINAL

// function pp(u) {
//     let x = 0;
//     u.forEach(i => {
//       x += i;
//     });
//     return x;
//   }
  
//   let aa = [10000, 20000, 30000];
//   console.log(pp(aa));

// EDITED

function countTotalPurchaseSum(purchaseSumsArray) {
    let totalSum = 0;
    purchaseSumsArray.forEach(sum => {
        totalSum += sum;
    });
    return totalSum;
  }
  
  let topUsersPurchases = [10000, 20000, 30000];
  console.log(countTotalPurchaseSum(topUsersPurchases));
  