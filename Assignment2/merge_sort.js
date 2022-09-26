
function mergeSort(array){
    if (array.length<2){
        return array
    }
    else {
     let ls =[]
     const half = Math.floor(array.length/2);
     const left = mergeSort(array.slice(0,half))
     let lCount=0;
     const right = mergeSort(array.slice(half)) 
     let rCount =0;
    
     while (array.length>rCount +lCount){
        if (right.length==rCount){
            ls.push(left[lCount])
            lCount++;
        }
        else if (left.length==lCount){
            ls.push(right[rCount])
            rCount++;}
        
        else if (right[rCount]<=left[lCount]){
            ls.push(right[rCount])
            rCount++;
        }
        else{
            ls.push(left[lCount])
            lCount++;
        }
     }
     return ls
    }
}

//test 
console.log(mergeSort([9,3,12,2,2,10,24]))