const service = {
	vendingMachine(){
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.setItemNoList = function(itemNoList){_itemNoList = itemNoList}
		VendingMachine.prototype.getItemNoList = function(){return _itemNoList}
		VendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		VendingMachine.prototype.getItemList = function(){return _itemList}
	},
	insertCoin(coin){
		service.vendingMachine()
		const vm = new VendingMachine()
		vm.setChange(coin)
		alert(`${vm.getChange()}원을 받음`)
	},
	selectItem(itemNo, quantity){},
	returnChange(){},
	handleOrder(quantity, price, itemName){}
}
// _change, _itemNo, _itemNoList, _itemList