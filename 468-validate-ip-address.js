/**
 * @param {string} IP
 * @return {string}
 */
// Using Regex // Not preferred
var validIPAddress = function(IP) {
  if (IP.includes(".")) {
    const regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
    if (regex.test(IP)) return "IPv4"
    else return "Neither";
  } else if (IP.includes(":")) {
    const regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/igm;
    if (regex.test(IP)) return "IPv6";
    else return "Neither";
  } else
      return "Neither"
};

// Using Divide and Conquer
var validIPAddress = function(IP) {
  
  const validateIPv4 = IP => {
    const nums = IP.split('.');
    
    for (let x of nums) {
      if (x.length == 0 || x.length > 3) return 'Neither';
      
      if (x.charAt(0) == '0' && x.length != 1) return 'Neither'; 
      
      if (!x.split('').every(ch => Number.isInteger(+ch))) return 'Neither';
      
      if (Number.parseInt(x) > 255) return 'Neither';
    }
    return "IPv4";
  }
  
  const validateIPv6 = IP => {
    const nums = IP.split(':'),
          hexdigits = '0123456789abcdefABCDEF';
    
    for (x of nums) {
      if (x.length == 0 || x.length > 4) return 'Neither';
      
      if (!x.split('').every(ch => hexdigits.includes(ch))) return 'Neither';
    }
    return "IPv6";
  }
  
  if (IP.includes('.') && IP.split('').filter(ch => ch == ".").length == 3)
    return validateIPv4(IP);
  
  else if (IP.includes(':') && IP.split('').filter(ch => ch == ":").length == 7)
    return validateIPv6(IP);
  
  else
    return 'Neither';
}