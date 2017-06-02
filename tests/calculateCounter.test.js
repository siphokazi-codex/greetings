describe('The calculate counter function', function(){

  it('Checks how many names entered and calculates them using counter variable', function(){

    var nameList = ["Spokie","Passie","Yamkela","Spha","SPOKIE"];

    assert.equal(5, calculateCounter(nameList));
   });
});
