$(() => {

	// accordion
	// button контейнер содержащий тело аккордиона
	function accordionHover(button) {
		let btnActive = document.querySelectorAll(`${button}`);
		if (btnActive) {
			btnActive.forEach(item => {
				item.addEventListener('mousemove', () => {
					if (window.innerWidth >= 992) {
						let panel = item.lastElementChild;
						for (let i = 0; i < btnActive.length; i++) {
							if (btnActive[i].classList.contains('active')) {
								btnActive[i].classList.remove('active')
								btnActive[i].lastElementChild.style.maxHeight = null;
							}
						}
						item.classList.add('active');
						panel.style.maxHeight = panel.scrollHeight + "px";
					} else if (window.innerWidth <= 992) {
						if (item.classList.contains('active')) {
							item.classList.remove('active')
							item.lastElementChild.style.maxHeight = null;
						} else {
							let panel = item.lastElementChild;
							for (let i = 0; i < btnActive.length; i++) {
								if (btnActive[i].classList.contains('active')) {
									btnActive[i].classList.remove('active')
									btnActive[i].lastElementChild.style.maxHeight = null;
								}
							}
							item.classList.add('active');
							panel.style.maxHeight = panel.scrollHeight + "px";
						}
					}
				})
			})
		}
	}

	accordionHover(".service-box")





	// accordion
	// button контейнер содержащий тело аккордиона
	function accordionClick(button) {
		let btnActive = document.querySelectorAll(`${button}`);
		if (btnActive) {
			btnActive.forEach(item => {
				item.addEventListener('click', () => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
						item.lastElementChild.style.maxHeight = null;
					} else {
						let panel = item.lastElementChild;
						for (let i = 0; i < btnActive.length; i++) {
							if (btnActive[i].classList.contains('active')) {
								btnActive[i].classList.remove('active')
								btnActive[i].lastElementChild.style.maxHeight = null;
							}
						}
						item.classList.add('active');
						panel.style.maxHeight = panel.scrollHeight + "px";
					}


				})
			})
		}
	}

	accordionClick(".quest-box")

})