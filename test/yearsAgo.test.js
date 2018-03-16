describe('The yearsAgo function', function(){

    it('should state how many years ago ', function(){
        assert.equal(yearsAgo(1992), 26);
    });
    it('should state how many years ago ', function(){
        // this test will fail - can you fix it?
      assert.equal(yearsAgo(2015),3);
    });

});
