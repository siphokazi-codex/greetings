describe('The radio button language function', function(){

  it('Checks if English language is selected', function(){

      var checkMessage = getMessage('Siphokazi', 'English');
     assert.equal('Hello, Siphokazi', checkMessage);
  });
  it('Checks if French language is selected', function(){

      var checkMessage = getMessage('Siphokazi', 'French');
     assert.equal('Bonjour, Siphokazi', checkMessage);
  });
  it('Checks if French language is selected', function(){

      var checkMessage = getMessage('Siphokazi', 'Tshivenda');
     assert.equal('Ndaa, Siphokazi', checkMessage);
  });
});
