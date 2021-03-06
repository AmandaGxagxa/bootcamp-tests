describe('The totalPhoneBill function', function(){

  it('should give the total cost if the calls & smses', function(){

      assert.equal(totalPhoneBill("call, sms, call, sms, sms"),"R7.45");
  });

  it('should give the sum of calls and smses', function(){
      assert.equal(totalPhoneBill("call, call, sms"),"R6.15");
  });

  it('Please try again!', function(){

        assert.notEqual(totalPhoneBill("call, sms"),"R5.40");
    });

});
