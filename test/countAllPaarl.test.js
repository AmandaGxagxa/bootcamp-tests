describe('The countAllPaarl function', function(){

    it('should give the sum of Paarl registration numbers  ', function(){

        assert.equal(countAllPaarl("CL 900, CJ 678 , CA 34567, CJ 67890, CJ 7864"),3);
    });
    it('should give a wrong answear  ', function(){

        assert.notEqual(countAllPaarl("CL 900, CJ 678 , CA 34567, CJ 67890, CJ 7864"),4);
    });
});
