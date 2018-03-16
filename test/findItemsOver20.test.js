describe('The findItemsOver20 function', function(){

    it('should find how many items over20', function(){
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
        assert.equal(findItemsOver20(itemList),2);
    });
    it('it is not more than 20', function(){
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
        assert.notEqual(findItemsOver20(itemList),5);
    });

});
