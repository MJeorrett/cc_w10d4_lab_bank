var assert = require('assert');
var Bank = require('../bank');

describe( "Bank", function() {

  var myEmptyBank = null;

  beforeEach(function(){
    myEmptyBank = new Bank();
  });

  it( "should have no accounts at start", function() {
    assert.equal( 0, myEmptyBank.accounts.length );
  });

  it("should have numberOfAccounts equal zero at start", function(){
    assert.equal( 0, myEmptyBank.numberOfAccounts() );
  });

  it("should increase numberOfAccounts when account added", function() {
    myEmptyBank.addAccount( "Matthew", 5000, "savings" );
    assert.equal( 1, myEmptyBank.numberOfAccounts() );
  });

  it("should find account by name", function(){
    var testName = "Matthew";
    var testBalance = 5000;
    var testType = "savings";
    myEmptyBank.addAccount(testName, testBalance, testType);
    var foundAccount = myEmptyBank.findAccount(testName);
    assert.equal( testName, foundAccount.name);
    assert.equal( testBalance, foundAccount.balance);
    assert.equal( testType, foundAccount.type);
  });

});
