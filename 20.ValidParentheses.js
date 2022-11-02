/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length===0) return true;
  let haystack =[];
  const openChar = ['(','{','['];
  const closeChar = [')','}',']'];
  
  for (let character of s)
      {
          if (openChar.includes(character))
              haystack.push(character);
          else
              {
                  const top = haystack.pop();
                  if (openChar.indexOf(top)!==closeChar.indexOf(character))
                      return false;
              }
      }
  return haystack.length === 0;
};