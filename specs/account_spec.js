var assert = require( 'assert' );
var Account = require( '../account' );

describe( "Account", function(){

  var cookiesAccount = null;

  beforeEach( function() {
    cookiesAccount = new Account( "Cookie" );
  });

  it("should have name passed in constructor", function(){
    assert.equal( "Cookie", cookiesAccount.name );
  });

  it( "should have amount passed in constructor", function() {
    assert.equal( 10000, cookiesAccount.balance );
  });

});
