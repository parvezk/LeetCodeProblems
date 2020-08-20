/**
 * @param {string[]} emails
 * @return {number}
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const set = new Set();
  
  for (let email of emails) {
    email = email.split('@');
    
    let username = email[0].replace(/\./ig, '');
    username = username.replace(/\+.*/ig, '');

    email = username + '@' + email[1];
    set.add(email);
  }
  return set.size;
};
  
  