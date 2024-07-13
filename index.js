let carousel = document.querySelector('.carousel-inner');
		let items = document.querySelectorAll('.carousel-item');
		let currentItem = 0;
		let intervalId = null;

		function nextItem() {
			items[currentItem].classList.remove('active');
			currentItem = (currentItem + 1) % items.length;
			items[currentItem].classList.add('active');
		}

		function prevItem() {
			items[currentItem].classList.remove('active');
			currentItem = (currentItem - 1 + items.length) % items.length;
			items[currentItem].classList.add('active');
		}

		intervalId = setInterval(nextItem, 4000); // 4 seconds

		document.querySelector('.prev').addEventListener('click', () => {
			clearInterval(intervalId);
			prevItem();
			intervalId = setInterval(nextItem, 4000);
		});

		document.querySelector('.next').addEventListener('click', () => {
			clearInterval(intervalId);
			nextItem();
			intervalId = setInterval(nextItem, 4000);
		});