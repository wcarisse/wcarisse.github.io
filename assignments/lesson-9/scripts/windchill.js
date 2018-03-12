/* Input: Get temperature and wind speed from text fields.
 * Processing: The first function (doInputOutput) must receive the input, call the
 *             second funtion (windChill), store the value of windChill into a 
 *             variable, and then output it to users. The windChill function will 
 *             calculate the windchill and return the value.
 * Output: the windchill in Fahrenheit.
 */
 var fahrenheit;
	function doInputOutput() {
		var t = parseFloat(document.getElementById('tempInputBox').value);
		var s = parseFloat(document.getElementById('speedInputBox').value);
		fahrenheit = windChill (t, s);
		document.getElementById('outputdiv').innerHTML = fahrenheit;
	}
	function windChill(tempF, speed) {
		var f = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + 0.4275 * (tempF * Math.pow(speed, 0.16)));
		return f;
	}