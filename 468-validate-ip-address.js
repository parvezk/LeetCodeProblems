/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if (IP.includes(".")) {
      //const regex = /^(?:[1-9]{1,3}\.)(?:[0]?[1-9]{1,2}\.)(?:[0]?[1-9]{1,3}\.)(?:[1-9]{1,3})$/gm;
      //const regex = /^(?:[1-9]{1,3}\.)(?:[0]{1}|[1-9]{1,2}\.)(?:[0]{1}|[1-9]{1,3}\.)(?:[1-9]{1,3})$/gm
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