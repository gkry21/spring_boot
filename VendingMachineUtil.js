//포장마차리필 배열의 6가지
//for forTest 
//foreach
//map
//find
//reduce
//filter
function Looping() {
	this.forTest = function (arr) {
		let returnVal = []
		for (let i = 0; i <= arr.length; i++) {
			if (arr[i] % 2 == 0)
				returnVal.push(arr[i])
		}
		return returnVal
	}
	this.foreach = function (arr) {
		let returnVal = []
		for (let i = 0; i <= arr.length; i++) {
			if (arr[i] % 2 == 0)
				returnVal.push(arr[i])
		}
		return returnVal
	}
	this.map = function (arr) { //
		return arr.map(i => i * 100)
	}
	this.find = function (arr) { //오직 하나만 찾아준다
		return (arr.find(function (i) {
			return i > 5
		}))
	}
	this.find2 = function (arr, id) {
		let resultVal = (arr.find(i => i.id == id))
		return (resultVal == undefined) ? '찾는 id가없습니다.' : resultVal.name
	}
	this.reduce = function (arr) { //하나의 값을 찾지만 조건을 걸면 여러개의 값을 찾을수 있다.
		return arr.reduce((i, j) => i + j) //파라미터가 2개일땐 ()쳐줘라
	}
	this.filter = function (arr) {
		return arr.filter(i => (i % 2 == 0))
	}
	this.ofTest = function (arr) {
		let temp = []
		for (const item of arr) {
			temp.push(item.name)
		}
		return temp
	}
	this.fromTest = function (arr) { //람다가 아니고 arr자체에 대한 것임 html에있는 값에 1더하는 조건을 달았다.
		return Array.from(arr, i => i + i)
	}
	this.argumentsTest = function () {
		return [...arguments] //...는 전달된 값을 그대로 return 한다.
	}
	this.joinTest = function (arr) {
		return [...arguments].join("\n")
	}
	this.sortTest = function () { // arguments 내부에서 배열 처리를 하니
		// let t1 = [...arguments].sort()
		// let t2 = [...t1].reverse()
		return [...arguments].sort()
	}
	this.reverseTest = function () {
		return [...[...arguments].sort()].reverse()
	}
	this.todo = function () {
		const todos = arr
		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}
		// id를 기준으로 정렬
		resultVal = todos.sort(compare('id')); //String 값으로 던지게 되면 a.id를 사용할수 없다.
		console.log(resultVal);

		// content를 기준으로 정렬
		arr = todos.sort(compare('content'));
		let temp = []
		for(const item of arr){
			temp.push(item.content)
		}
		return temp
	}
}