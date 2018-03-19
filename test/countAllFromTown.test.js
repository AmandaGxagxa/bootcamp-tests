describe('The countAllFromTown function', function(){

    it('should take all registration numbers that are from CapeTown', function(){
//
        assert.equal(countAllFromTown("CL 900,CA 678 ,CA 34567,CJ 67890,CA 7864","CA" ),3);
    });
    it('should allow any reg numbers', function(){
    //
        assert.notEqual(countAllFromTown("CL 900,CA 678 ,CA 34567,CJ 67890,CA 7864","CA" ),5);
    });

});
