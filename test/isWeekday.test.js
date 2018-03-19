describe('The isWeekday function', function(){

    it('should be true  when a day is a weekday.  ', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should be false if it is a weekend day. ', function(){
        // this test will fail - can you fix it?
      assert.equal(isWeekday('Saturday'),false);
    });
});
