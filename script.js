const task = document.getElementById("task");
const right = document.getElementById("right");

/*adding to list*/
function addTask() {
    if(task.value ===''){
        alert("Error, you have not written anything.")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        myUL.appendChild(li);
        let span = document.createElement("span"); /*adding the equis*/
        span.innerHTML = "\u00d7"; /*cross code*/
        li.appendChild(span); /*display cross*/
    }
    task.value = ""; /*clearing input after adding task*/
    saveData(); /*will save any task added*/
}

/*adding for click function*/
myUL.addEventListener("click", function(e){ /*if i click here, it will check all of myUL*/
    if(e.target.tagName === "LI"){ /*first will check here on LI*/
        e.target.classList.toggle("checked"); /*if clicked here, will check the task off*/
        saveData(); /*will also save here when task is crossed off*/
    }
    else if(e.target.tagName === "SPAN"){ /*if clicked on span, then will remove the parent element which is the li element*/
        e.target.parentElement.remove();
        saveData(); /*and when task is deleted*/
    }
}, false);

/*countdown timer
const startingMinutes = 60;
let time = startingMinutes * 60; /*seconds

const countdownEl = document.getElemenetById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEl.inerHTML = `${minutes}: ${seconds}`;
    time--;
} did not work :( */

/*countdown timer*/
/*export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: roots.queryselector(".timerPartMinutes"),
            seconds: roots.queryselector(".timerPartSeconds"),
            control: roots.queryselector(".timerPartControl"),
            reset: roots.queryselector(".timerBtnReset")
        };
        
        this.interval = null;
        this.remainingSeconds = 90;

        this.start();

        this.el.control.addEventListener("click", () =>{
            if (this.interval === null){
                this.start();
            } else{
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () =>{
            const inputMinutes = propmt("Enter a number of minutes please");

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfacetime();
            }
        });
    }

    updateInterfacetime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remaingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().Padstart(2, "0");
        this.el.seconds.textContent = seconds.toString().Padstart(2, "0");
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfacetime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);
    }

    stop(){
        clearInterval(this.interval);

        this.interval = null;
    }

    static getHTML() {
        return `
            <span class="timerPart timerPartMinutes">00</span>
            <span class="timerPart">:</span>
            <span class="timerPart timerPartSeconds">00</span><br>

            <button type="button" class="timerBtn timerBtnReset">Reset</button>
            <button type="button" class="timerBtn timerBtnControl timerBtnStart">Start</button>
        `;
    }
} not working :( */