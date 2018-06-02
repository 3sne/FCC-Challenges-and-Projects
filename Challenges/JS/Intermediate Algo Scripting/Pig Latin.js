function isVowelRegEx(char)
{
  if (char.length == 1)
  {
    return /[aeiou]/.test(char);
  }
}


function translatePigLatin(str) {
  if(/[aeiou]/.test(str[0])) {
    str = str + 'way';
  } else {
    let temp_arr = str.split('');
    let curr_cluster = '';
    let crit_index;
    for(let i =0 ; i < temp_arr.length; i++) {
      if(!isVowelRegEx(temp_arr[i+1])) {
         curr_cluster += temp_arr[i];
      } else {
         curr_cluster += temp_arr[i];
         crit_index = i + 1;
         break;
      }
    }
    temp_arr = temp_arr.slice(crit_index);
    str = temp_arr.join('');
    str = str + curr_cluster + 'ay';
    
  }
  return str;
}

console.log(translatePigLatin("glove"));

