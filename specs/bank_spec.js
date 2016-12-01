var assert = require('assert');

describe( "Bank", function() {

  it( "should have no accounts at start", function() {
    assert.equal( 0, myBank.accounts.length );
  });
});
