var assert = require('assert');
var Bank = require('../bank');

describe( "Bank", function() {

  var myBank = null;

  beforeEach(function(){
    myBank = new Bank();
  });

  it( "should have no accounts at start", function() {
    assert.equal( 0, myBank.accounts.length );
  });

  it("should have numberOfAccounts equal zero at start", function(){
    assert.equal( 0, myBank.numberOfAccounts() );
  })

});
