	let selectMenu = document.testForm.major;  // 셀렉트 메뉴를 가져와 selectMenu로 저장
		
	function displaySelect() {
		let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
		// 선택한 옵션의 innerText를 가져와 selectedText에 저장		
		alert("[" + selectedText + "]를 선택했습니다.");
	}		