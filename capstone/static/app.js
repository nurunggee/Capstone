// TASKS:

// 1. Number has a default value of something
// 2. Prepare, work out, rest has a default value of 00:00
// 3. How to add prepare and run only during cycles?
// 4. When I click start, start button change to pause, when I click pause, the timer stops
// 5. When the exercise starts, total time will be in "exercise" and the timer will be inside of the biggest box

////////////////////////////////// PREPARE TIMER //////////////////////////////////
Vue.component("prepare-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null
      }
    },


    props: {
        timeLimit: {
            type: Number,
            default: 5
        },
        timerActive: {
            type: Boolean
        },
    },


    template: `
        <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                    <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5"/>
                    <path
                        :stroke-dasharray="circleDasharray"
                        :class="remainingPathColor"
                        class="base-timer__path-remaining" 
                        d="
                            M 50, 50 
                            m -45, 0 
                            a 45,45 0 0,1 90,0 
                            a 45,45 0 0,1 -90,0
                    "></path>
                </g>
            </svg>
            <span class="base-timer__label">
                {{ totalTimeLeft }}
            </span>
        </div>
    `,


    computed: {
        totalTimeLeft() {
            const timeLeft = this.timeLeft
            let seconds = timeLeft % 60

            return `${seconds}`
        },

        timeLeft() {
            return this.timeLimit - this.timePassed;
        },

        circleDasharray() {
            const FULL_DASH_ARRAY = 283;
            return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
        },

        timeFraction() {  
            const rawTimeFraction = this.timeLeft / this.timeLimit
      
            return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
        },

        colorCodes() {
            return {
                info: {
                    color: "yellow"
                }
            }
        },

        remainingPathColor() {
            const { info } = this.colorCodes;
            return info.color;
        },

    },


    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                // I want the time reset and keep looping for right now//
                this.onTimesUp();
            }
        },
        timerActive(active) {
            if (active){
                this.startTimer()
            }
        }
    },

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "workout")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        }
    },

})


////////////////////////////////// WORKOUT TIMER //////////////////////////////////
Vue.component("workout-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null
      }
    },


    props: {
        timeLimit: {
            type: Number,
            default: 5
        },
        timerActive: {
            type: Boolean
        },
    },


    template: `
        <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                    <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5"/>
                    <path
                        :stroke-dasharray="circleDasharray"
                        :class="remainingPathColor"
                        class="base-timer__path-remaining" 
                        d="
                            M 50, 50 
                            m -45, 0 
                            a 45,45 0 0,1 90,0 
                            a 45,45 0 0,1 -90,0
                    "></path>
                </g>
            </svg>
            <span class="base-timer__label">
                {{ totalTimeLeft }}
            </span>
        </div>
    `,


    computed: {
        totalTimeLeft() {
            const timeLeft = this.timeLeft
            let seconds = timeLeft % 60

            return `${seconds}`
        },

        timeLeft() {
            return this.timeLimit - this.timePassed;
        },

        circleDasharray() {
            const FULL_DASH_ARRAY = 283;
            return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
        },

        timeFraction() {  
            const rawTimeFraction = this.timeLeft / this.timeLimit
      
            return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
        },

        colorCodes() {
            return {
                info: {
                    color: "blue"
                }
            }
        },

        remainingPathColor() {
            const { info } = this.colorCodes;
            return info.color;
        },

    },


    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                // I want the time reset and keep looping for right now//
                this.onTimesUp();
            }
        },
        timerActive(active) {
            if (active){
                this.startTimer()
            }
        }
    },

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "workout")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        }
    },

})


////////////////////////////////// REST TIMER //////////////////////////////////
Vue.component("rest-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null
      }
    },


    props: {
        timeLimit: {
            type: Number,
            default: 3
        },
        timerActive: {
            type: Boolean
        },
    },


    template: `
        <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                    <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5"/>
                    <path
                        :stroke-dasharray="circleDasharray"
                        :class="remainingPathColor"
                        class="base-timer__path-remaining" 
                        d="
                            M 50, 50 
                            m -45, 0 
                            a 45,45 0 0,1 90,0 
                            a 45,45 0 0,1 -90,0
                    "></path>
                </g>
            </svg>
            <span class="base-timer__label">
                {{ totalTimeLeft }}
            </span>
        </div>
    `,


    computed: {
        totalTimeLeft() {
            const timeLeft = this.timeLeft
            let seconds = timeLeft % 60

            return `${seconds}`
        },

        timeLeft() {
            return this.timeLimit - this.timePassed;
        },

        circleDasharray() {
            const FULL_DASH_ARRAY = 283;
            return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
        },

        timeFraction() {  
            const rawTimeFraction = this.timeLeft / this.timeLimit
      
            return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
        },

        colorCodes() {
            return {
                info: {
                    color: "green"
                }
            }
        },

        remainingPathColor() {
            const { info } = this.colorCodes;
            return info.color;
        },

    },


    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                this.onTimesUp();
            }
        },
        timerActive(active) {
            if (active){
                this.startTimer()
            }
        }
    },


    mounted() {
        // this.startTimer();
    },

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "rest")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        }
    },

})

////////////////////////////////// Total TIMER //////////////////////////////////
Vue.component("total-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null
      }
    },


    props: {
        timeLimit: {
            type: Number,
            default: 3
        },
        timerActive: {
            type: Boolean
        },
    },


    template: `
        <div class="base-timer">
            <span class="total-timer__label">
                {{ totalTimeLeft }}
            </span>
        </div>
    `,


    computed: {
        totalTimeLeft() {
            const timeLeft = this.timeLeft
            const minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60

            return `${minutes}:${seconds}`
        },

        timeLeft() {
            return this.timeLimit - this.timePassed;
        },

        circleDasharray() {
            const FULL_DASH_ARRAY = 283;
            return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
        },

        timeFraction() {  
            const rawTimeFraction = this.timeLeft / this.timeLimit
      
            return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
        },

        colorCodes() {
            return {
                info: {
                    color: "green"
                }
            }
        },

        remainingPathColor() {
            const { info } = this.colorCodes;
            return info.color;
        },

    },


    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                this.onTimesUp();
            }
        },
        timerActive(active) {
            if (active){
                this.startTimer()
            }
        }
    },


    mounted() {
        // this.startTimer();
    },

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "rest")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        }
    },

})

////////////////////////////////// Calendar //////////////////////////////////
Vue.component("calendar", {
    data: function() {
        return {
            days:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            currentMonthInNumber: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
        }
    },


    // methods: {
    //     prev(){
    //         if(this.currentMonthInNumber === 0){
    //             this.currentYear--
    //             this.currentMonthInNumber=11
    //         }else{
    //             this.currentMonthInNumber--        
    //         }
    //     },
    //     next(){
    //         if(this.currentMonthInNumber === 11){
    //             this.currentYear++
    //             this.currentMonthInNumber=0
    //         }else{
    //             this.currentMonthInNumber++         
    //         }
    //     },
    //     todayDate(date){
    //         let calendarDate = new Date(this.currentYear, this.currentMonthInNumber, date).toDateString()
    //         let toDay = new Date().toDateString()

    //         return calendarDate=== toDay ? "bg-primary text-white" : ""
    //     }
    // },

    // computed: {
    //     currentMonthName(){
    //         return new Date(this.currentYear, this.currentMonthInNumber).toLocaleString("default", {month:"long"})
    //     },
    //     lastDateOfMonth(){
    //         return new Date(this.currentYear, this.currentMonthInNumber+1, 0).getDate()
    //     },
    //     firstDay(){
    //         return new Date(this.currentYear, this.currentMonthInNumber, 1).getDay()
    //     }
    // },

    template: `
        <div class="container">
            <h1>My Calendar</h1>
            <h3> {{currentMonthName}} {{currentYear}}</h1>

            <section>
                <div class="days">
                    <p v-for="(day, index) in days" :key="index">{{ day }}</p>
                </div>
            </section>

            <section>
                <div class="dates">
                    <p v-for="day in startDay()" :key="day"></p>
                    <p v-for="date in daysInMonth(currentYear, currentMonthInNumber)" :key="date" ref="date" @click="getDate">{{date}}</p>
                    <p :class="todayDate(date)" v-for="date in lastDateOfMonth" :key="date">{{ date }}</p>
                </div>
            </section>

            <section class="button">
                <button @click="prev">Prev</button>
                <button @click="next">Next</button>
            </section>
        </div>
    `
})
  

new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
        restTimeActive: false,
        workoutTimeActive: false,
        prepareTimeLimit: "",
        workoutTimeLimit: "", 
        restTimeLimit: "",
        cycleTimeLimit: "",
        // another one for track like a counter
    },
    methods: {
        toggleTimer: function(doneTimer) {
            if(doneTimer === "workout"){
                this.restTimeActive = true
                this.workoutTimeActive = false
            } else if(doneTimer === "rest"){
                this.restTimeActive = false
                this.workoutTimeActive = true
            }
        },
        startWorkoutTimer: function() {
            this.workoutTimeActive = true
        },

    },
    computed: {
        totalTime: function() {
            const total = parseFloat(this.prepareTimeLimit) + (parseFloat(this.workoutTimeLimit) + parseFloat(this.restTimeLimit)) * parseFloat(this.cycleTimeLimit)
            const minutes = Math.floor(total / 60);
            let seconds = total % 60

            return `${minutes}:${seconds}`
        }
    }
})