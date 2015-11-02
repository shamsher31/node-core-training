'use strict'

var module = (function() {

  var account = {
    111 : {
      'name' : 'Shamsher Ansari',
      'balance' : 30000 
    },
    222 : {
      'name' : 'Pranay Dubey',
      'balance' : 20000 
    },
    333 : {
      'name' : 'Devendra Dhanal',
      'balance' : 10000 
    },
  };

  var validateAccountNumber = function(accountNumber) {
    
    if (typeof accountNumber == 'undefined') {
      throw new Error('Please provide account Number');
    }

    if (!account.hasOwnProperty(accountNumber)) {
      throw new Error('Account number ' + accountNumber + ' does not exists');
    }

    return (typeof accountNumber == 'number') ? accountNumber : Number(accountNumber);
  }

  // getBalance is not exposed as public method
  // so only methods inside this module can access it
  var getBalance = function (accountNumber) {
    accountNumber = validateAccountNumber(accountNumber);
    return account[accountNumber].balance;  
  };
  
  // Only methods and variables attached to 'exports'
  // are accessible when you require this module 
  exports.getBankHolderName = function(accountNumber) {
    accountNumber = validateAccountNumber(accountNumber);
    return account[accountNumber].name;
  }

  exports.info = function(accountNumber) {
    
    accountNumber = validateAccountNumber(accountNumber);
    return account[accountNumber];
  }

  return exports;

})();