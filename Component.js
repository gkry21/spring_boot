const compo = {
	div(id) {
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
		// div.textContent = text
		return div
	},
	inputText(id, type) {
		const input = document.createElement('input')
		input.setAttribute('type', type)
		input.setAttribute('id', id)
		return input
	},
	inputButton(id, type, val) {
		const input = document.createElement('input')
		input.setAttribute('type', type)
		input.setAttribute('value', val)
		input.setAttribute('id', id)
		return input
	},
	br() {
	return document.createElement('br')
	}
}


// function Factory(type) {
// 	switch (type) {
// 		case 'inputText': return new InputText() //return을 바로 타기 때문에 break 안걸음!
// 		case 'inputButton': return new InputButton()
// 		case 'br': return new Br()
// 		case 'div': return new Div()
// 	}
// }