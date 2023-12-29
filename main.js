/**
 Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
**/

function comp(array1, array2){
    if (array1**2 === array2){
        return true
    } else {
        return false
    }
    //so i know i need to compare both arrays
    //i think i may need the % module to better compare

  }

  console.log(comp(2 , 4))
  
  //full kata wasn't answered to save time. can come back later and solve