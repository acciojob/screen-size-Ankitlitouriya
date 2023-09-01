//your JS code here. If required.
window.addEventListner('resize',displayWindowSize);

 function displayWindowSize() {
 	let widht = window.innerWidth;
	 let height = window.innerHeight;
	 let sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
 }

displayWindowSize();