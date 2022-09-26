// with iteration 

function fibs(number){
    if (number==0){
        return [0]
    } else if (number==1){
        return [0,1]
    }
    else {
    let ls=[0,1];
    let first = 0;
    let second = 1;
    for (let i =2;i<number;i++){
       // new number
       const newNum = first +second
       ls.push(newNum)
       if (first > second){
        second = newNum; 
       } else {
        first =newNum;
       }
    }
    return ls    
}
}
//test
//console.log(fibs(8)) [0,1,1,2,3,5,8,13]


// with recursion 

function fib (n){
    return n<=1 ? n: fib(n-1) +fib(n-2)
}
function fibsRec(num){
  let ls = []
  for (let i=0;i <num;i++){
    ls.push(fib(i))
  }
  return ls
}


console.log(fibsRec(8))
