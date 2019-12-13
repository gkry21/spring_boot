const compo = {
	div(id) {
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
		return div
	},
	inputText(id, type) {
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		return input
	},
	inputButton(id, type, val) {
		const input = document.createElement('input')
		input.setAttribute('id',id)
		input.setAttribute('type',type)
		input.setAttribute('value',val)
		return input
	},
	br() {
	return document.createElement('br')
	}
}
