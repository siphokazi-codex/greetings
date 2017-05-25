describe('The radio button language function', function(){

  it('Checks which language is selected', function(){
     assert.equal('Hello', getLanguage('English'));
  });
  it('Checks which language is selected', function(){
     assert.equal('Bonjour', getLanguage('French'));
  });
  it('Checks which language is selected', function(){
     assert.equal('Tshivenda', getLanguage('Ndaa'));
  });

});
