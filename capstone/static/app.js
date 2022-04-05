// TASKS:

// 1. calendar link to NAV
// 2. calendar clicked change color

// optional. 00:00 style 


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
        totalTimeLeft: {
            type: Number,
            default: 3
        }
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
            if(newValue === 3 && this.timerActive === true) {
                let sound = new Audio("/static/img/countdown.mp3")
                sound.play()
            }
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

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "prep")
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
            if(newValue === 3 && this.timerActive === true) {
                let sound = new Audio("/static/img/countdown.mp3")
                sound.play()
            }
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

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "workout")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        },

        // onPause() {
        //     this.timePassed = 0;
        //     clearInterval(this.timerInterval);
        //     this.$emit("done", "workout")
        // },

        // onStart() {
        //     this.timePassed = 0;
        //     clearInterval(this.timerInterval);
        //     this.$emit("done", "workout")
        // },
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
            if(newValue === 3 && this.timerActive === true) {
                let sound = new Audio("/static/img/countdown.mp3")
                sound.play()
            }
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
        totalTimeLeft: {
            type: Number,
        }
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
            const total = parseFloat(this.prepareTimeLimit) + (parseFloat(this.workoutTimeLimit) + parseFloat(this.restTimeLimit)) * parseFloat(this.cycleTimeLimit)
            return total - this.timePassed;
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
            clicked: [false ,false ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        }
    },
// todayDate(date)
    methods: {
        next() {
            if(this.currentMonthInNumber===11){
                this.currentYear++
                this.currentMonthInNumber=0
            }else{
                this.currentMonthInNumber++
            }
            this.clicked = [false ,false ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        }, 
        
        prev() {
            if(this.currentMonthInNumber===0){
                this.currentYear--
                this.currentMonthInNumber=11
            }
            else{
                this.currentMonthInNumber--
            }
            this.clicked = [false ,false ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },

        todayDate(date){
            let calenderDate = new Date(this.currentYear, this.currentMonthInNumber, date).toDateString()
            let toDay = new Date().toDateString()
            return calenderDate === toDay ? "text-primary" : ""
        },
    },
    
    computed:{
        currentMonthInName(){
          return new Date(this.currentYear,this.currentMonthInNumber).toLocaleString("default", {month: "long"})
        },
        daysInMonth(){
            return new Date(this.currentYear, this.currentMonthInNumber+1, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonthInNumber, 1).getDay();
        }
    },

    template: `
        <div class="container">
            <h1>My Calendar</h1>
            <h3> {{currentMonthInName}} {{currentYear}}</h3>

            <section>
                <div class="days">
                    <p v-for="(day, index) in days" :key="index">{{ day }}</p>
                </div>
            </section>

            <section>
                <div class="date">
                    <p v-for="day in startDay" :key="day"></p>
                    <p v-for="(date, index) in daysInMonth" :class="{blue : clicked[index], white : !clicked[index]}" @click="clicked.splice(index, 1, !clicked[index])">{{ date }}</p>
                </div>
            </section>

            <section class="button">
                <button @click="prev" class="btn btn-primary">Prev</button>
                <button @click="next" class="btn btn-primary">Next</button>
            </section>
        </div>
    `
})

Vue.component("exercise-list", {

    data: function() {
        return {
            users: [],
            currentUser: {
                exercise_list: []
            },
            
            newExercise: {
                "name": "",
            },
            csrf_token: "",
            name: "",
            exercise: "",
            results: {},
            exercise_list: [],
        }
    },

    methods: {
        loadExercise: function() {
            axios({
                method: "get",
                url: '/apis/v1/exercises/'
            }).then(response => this.exercise_list = response.data)
        },
        createExercise: function() {
            axios({
                method: "post",
                url: "/apis/v1/exercises/",
                headers: {
                    "X-CSRFToken": this.csrf_token
                },
                data: {
                    "name": this.newExercise.name,
                }
            }).then(response => {
                this.loadExercise()
                this.newExercise = {
                    "name": ""
                }
            })
        },
        deleteExercise(exercise) {
            axios.delete("http://localhost:8000/apis/v1/exercises/" + exercise.id + "/", 
            {headers: {"X-CSRFToken": this.csrf_token}
            }).then(response => this.loadExercise());
        },

        loadCurrentUser: function() {
            axios({
                method: "get",
                url: "/apis/v1/currentuser/"
            }).then(response => this.currentUser = response.data)
        },
    },
    
    created: function() {
        this.loadExercise()
        this.loadCurrentUser()
    },

    mounted: function() {
        this.csrf_token = document.querySelector("input[name=csrfmiddlewaretoken]").value
    },

    template: `
        <div class="ex">
            <header>
                <h1>List of Exercises: </h1>
                <div id ="new-exercise-form">
                    <input type="text" id="new-exercise-input" v-model="newExercise.name" placeholder="New Exercise?"><br>
                    <button @click="createExercise" id="new-exercise-submit">Submit</button>
                </div>
            </header>

            <div class="main">
                <section class="exercise-list">
                    <h2>Exercises</h2>
                    <div id="exercises">
                        <ul class="exercise-inside">
                            <li v-for= "exercise in exercise_list" :key="exercise.id" class="content">
                                <p class="text"> {{ exercise.name }} </p>
                                <button @click="deleteExercise(exercise)" class="delete">Delete</button>
                            </li>
                        </ul>
                    </div>
                </section>        
            </div>



        </div>
    `
})
  

new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
        restTimeActive: false,
        workoutTimeActive: false,
        prepareTimeActive: false,
        prepareTimeLimit: "",
        workoutTimeLimit: "", 
        restTimeLimit: "",
        cycleTimeLimit: "",
        cyclesLeft: 0,
        totalTimeActive: false,
        totalTimeLimit: "",

    },
    methods: {
        toggleTimer: function(doneTimer) {
            if(this.cyclesLeft < 0) {
                this.restTimeActive = false
                this.workoutTimeActive = false
                alert("timer's done")
            }
            else if(doneTimer === "workout"){
                this.restTimeActive = true
                this.workoutTimeActive = false
                this.cyclesLeft--
            } else if(doneTimer === "rest"){
                this.restTimeActive = false
                this.workoutTimeActive = true
                this.cyclesLeft--
            } else if(doneTimer === "prep"){
                this.prepareTimeActive = false
                this.workoutTimeActive = true
                this.restTimeActive = false
            }
        },
        startWorkoutTimer: function() {
            if(this.totalTime !== "NaN:NaN"){
                this.cyclesLeft = parseFloat(this.cycleTimeLimit) * 2
                this.prepareTimeActive = true
                this.totalTimeActive = true
            }
        },

    },
    computed: {
        totalTime: function() {
            const total = parseFloat(this.prepareTimeLimit) + (parseFloat(this.workoutTimeLimit) + parseFloat(this.restTimeLimit)) * parseFloat(this.cycleTimeLimit)
            const minutes = Math.floor(total / 60);
            let seconds = total % 60

            return `${minutes}:${seconds}`
        },
    }
})