describe('The findItemsOver function', function(){

    it('should find how many  that are over threshold', function(){
      var threshold = 10;
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

        assert.deepEqual(findItemsOver(itemList, threshold),2);
    });
    it('opps! try again', function(){
      var threshold = 10;
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

        assert.notEqual(findItemsOver(itemList, threshold),5);
    });

});
