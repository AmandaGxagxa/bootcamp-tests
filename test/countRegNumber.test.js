describe('The countRegNumber function', function(){

    it('should give the sum of the registration number', function(){

        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328 , CY 524623'), 4);
    });
    it('should give how many registration numbers ', function(){

      assert.equal(countRegNumber('DV 23 LP GP', 'MP'),1);
    });

});
