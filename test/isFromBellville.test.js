describe('The isFromBellville function', function(){

    it('should return true for a Bellville reg number', function(){
        assert.equal(isFromBellville('CY 123'),true);
    });
    it('should return false for a Paarl reg number', function(){

      assert.equal(isFromBellville('CJ 123'), false);
    });
});
