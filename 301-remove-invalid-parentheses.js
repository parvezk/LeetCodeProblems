/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(S) {
    let validExpressions = new Set();
    let mininmumRemoved = 0;
    
    const reset = () => {
      validExpressions.clear();
      mininmumRemoved = Number.MAX_VALUE;
    }
    
    const recurse = (s, index, leftCount, rightCount, expression, removedCount) => {
      
      if (index == s.length)
      {
        if (leftCount == rightCount)
        {
          if (removedCount <= mininmumRemoved)
          {
            let possibleAnswer = expression.toString();
            
            if (removedCount < mininmumRemoved)
            {
              validExpressions.clear();
              mininmumRemoved = removedCount;
            }
            validExpressions.add(possibleAnswer);
          }
        }
      }
      else
      {
        let currentCharacter = s.charAt(index),
            length = expression.length;
        
        if (currentCharacter != '(' && currentCharacter != ')')
        {
          expression += currentCharacter;
          recurse(s, index + 1, leftCount, rightCount, expression, removedCount)
          expression = expression.slice(0, length) + expression.slice(length + 1);
        } 
        else
        {
          recurse(s, index + 1, leftCount, rightCount, expression, removedCount + 1);
          expression += currentCharacter;
          
          if (currentCharacter == '(')
          {
            recurse(s, index + 1, leftCount + 1, rightCount, expression, removedCount);
          }
          else if (rightCount < leftCount)
          {
            recurse(s, index + 1, leftCount, rightCount + 1, expression, removedCount);
          }
          
          expression = expression.slice(0, length) + expression.slice(length + 1);
        }
      }
    }
    
    reset();
    recurse(S, 0, 0, 0, '', 0);
    return [...validExpressions.values()];
  };