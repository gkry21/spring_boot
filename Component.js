function InputText(){
	this.make = function(){
		const input = document.createElement('input')
		input.setAttribute('type','text')
		input.setAttribute('id','val')
		return input
	}
}
function InputButton(){
	this.make = function(){
		const input = document.createElement('input')
		input.setAttribute('type','button')
		input.setAttribute('value','버튼')
		input.setAttribute('id','btn')
		return input
	}
}
function Br(){
	this.make = function(){
		const br = document.createElement('br')
		return br
	}
}
function Func02(){
	this.play = function(){
		if(input == undefined || input == null || input == ''){
			alert('텍스트 필드를 입력하세요')
		}else{
			alert((input.value !== '') ? input.value : '먼저 입력하시오'); input.focus() //;는 한 줄로 할 때 사용. 만약 ; 생략할거면 줄 바꿔주면 됨!
		}
		choice.value = 0
	}
}
function Factory(type){ //팩토리 패턴
	switch(type){
		case 'inputText' : return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new Br()
	}
}