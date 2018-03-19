describe('The regCheck function', function(){

    it('should return true if its Gauteng registration number', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
    it('should return false if its Limpopo registration number', function(){
        
      assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });
    it('should return false if its Bellville registration number', function(){

      assert.equal(regCheck('CY189-012', 'CY'),false);
    });
    it('should should return false if its Bellville registration number', function(){
        // this test will fail - can you fix it?
      assert.notEqual(regCheck('CY189-012', 'ND'),"me");
    });

});
