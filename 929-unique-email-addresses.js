/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    
    for (let email of emails) {
      email = email.split('@');
      let localName = email[0]
      
      localName = localName.replace(/\./g,'');
      localName = localName.replace(/\+.*/,'');
      
      email = localName + '@' + email[1];
      set.add(email)
    }
    
    //console.log(set)
    return set.size;
    
  };
  
  