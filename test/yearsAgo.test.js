describe('The yearsAgo function', function(){

    it('should state how many years ago ', function(){
        assert.equal(yearsAgo(1992), 26);
    });
    it('opps! Please try again ', function(){
        // this test will fail - can you fix it?
      assert.notEqual(yearsAgo(2015),5);
    });

});
