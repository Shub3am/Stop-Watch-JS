const Seconds = document.querySelector(".seconds")
const Minute = document.querySelector(".minute")
const Hour = document.querySelector(".hour")
const Start = document.querySelector("#start")
const Pause = document.querySelector("#pause")
const Reset = document.querySelector("#reset")
let timer_state = true;
let sec = 0;
let min = 0;
let hr = 0;

Reset.addEventListener("click", ()=> {
	Seconds.innerText = Minute.innerText = Hour.innerText  = "00";
	sec = min = hr = 0;
	timer_state = false;

})

Start.addEventListener("click", () => {
	timer_state = true;
	timer();
})
Pause.addEventListener("click", ()=>{
	timer_state = false;
})



function timer() {
	if (timer_state) {
		Seconds.innerText = sec;
		sec++;

		if (min == 60) {
			hr++;
			Hour.innerText = hr;
			sec = 0
			min = 0;
		}

		if (sec==60) {
			min++
			Minute.innerText = min;
			sec = 0

		}
		(hr <=9) ? Hour.innerText = "0" +hr: Hour.innerText = hr;
		(min <=9) ? Minute.innerText = "0" +min: Minute.innerText = min;
		(sec <=9) ? Seconds.innerText = "0" +sec: Seconds.innerText = sec;
		setTimeout("timer()", 1000)

	}
}
