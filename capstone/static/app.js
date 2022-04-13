// TASKS:


////////////////////////////////// PREPARE TIMER //////////////////////////////////
Vue.component("prepare-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null,
      }
    },


    props: [
        'timeLimit',
        'timerActive',
        'exerciseQueue',
        'timerPause',
        // 'timerResume'
    ],


    template: `
        <div class="timers">
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
            <div class="exercise_name">
                <p class="current_exercise">Prepare</p>
                <p class="next_exercise">NEXT   {{exerciseQueue[0].name}}</p> 
            </div>
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
            }else{
                this.startTimer()
            }
        },
        // timerPause(active) {
        //     if(active){
        //         this.pauseTimer()
        //     }
        // }
    },

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "prep")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        },

        pauseTimer() {
            clearInterval(this.timerInterval)
        },

        // resumeTimer() {
        //     this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        // }
        
    },

})


////////////////////////////////// WORKOUT TIMER //////////////////////////////////
Vue.component("workout-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null,
      }
    },


    props: [
        'timeLimit',
        'timerActive',
        'exerciseQueue',
        'timerPause',
        // 'timerResume'
    ],


    template: `
        <div class="timers">
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
            <div class="exercise_name">
                <p class="current_exercise_exercise">{{exerciseQueue[0].name}}</p>
            </div>
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
        },
        timerPause(active) {
            if(active){
                this.pauseTimer()
            }else{
                this.startTimer()
            }
        },
        // timerResume(active) {
        //     if(active){
        //         this.pauseTimer()
        //     }else{
        //         this.startTimer()
        //     }
        // }
        
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

        pauseTimer() {
            clearInterval(this.timerInterval)
        },

        // resumeTimer() {
        //     this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        // }

    },


})


////////////////////////////////// REST TIMER //////////////////////////////////
Vue.component("rest-timer", {
    data: function() {
      return {
        timePassed: 0,
        timerInterval: null,
      }
    },


    props: [
        'timeLimit',
        'timerActive',
        'exerciseQueue',
        'timerPause',
        // 'timerResume'
    ],


    template: `
        <div class="timers">
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
            <div class="exercise_name">
                <p class="current_exercise">REST</p>
                <p class="next_exercise">NEXT   {{exerciseQueue[0].name}}</p> 
            </div>
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
        },
        timerPause(active) {
            if(active){
                this.pauseTimer()
            } else {
                this.startTimer()
            }
        },
        // timerResume(active) {
        //     if(active){
        //         this.pauseTimer()
        //     }
        // }
    },
    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "rest")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        },

        pauseTimer() {
            clearInterval(this.timerInterval)
        },

        // resumeTimer() {
        //     this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        // }

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
    
    props: [
        'timeLimit',
        'timerActive',
        'prepareTimeLimit',
        'workoutTimeLimit',
        'restTimeLimit',
        'cycleTimeLimit',
        'timerPause',
        // 'timerResume'
    ],



    template: `
        <div class="base-timer-total">
            <span class="total-timer__label">
                {{totalTimeLeft === "NaN:NaN" ? "00:00" : totalTimeLeft }}
            </span>
        </div>
    `,


    computed: {
        timeLeft() {
            const total = parseFloat(this.prepareTimeLimit) + (parseFloat(this.workoutTimeLimit) + parseFloat(this.restTimeLimit)) * parseFloat(this.cycleTimeLimit)
            return total - this.timePassed;
        },

        totalTimeLeft() {
            const timeLeft = this.timeLeft
            const minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60
            if(seconds < 10){
                seconds = `0${seconds}`
            }
            return `${minutes}:${seconds}`
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
        },
        timerPause(active) {
            if(active){
                this.pauseTimer()
            }else{
                this.startTimer()
            }
        },
        // timerResume(active) {
        //     if(active){
        //         this.pauseTimer()
        //     }
        // }
    },

    
    methods: {
        onTimesUp() {
            this.timePassed = 0;
            clearInterval(this.timerInterval);
            this.$emit("done", "rest")
        },

        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        },

        pauseTimer() {
            clearInterval(this.timerInterval)
        },

        // resumeTimer() {
        //     this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        // }
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
            csrf_token: ""
        }
    },
    props:[
        "currentUser"
    ],
    mounted: function() {
        this.csrf_token = document.querySelector("input[name=csrfmiddlewaretoken]").value
    },
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
            return calenderDate === toDay
        },


        dayClick(date, index) {
            let currentMonth = ""
            if(this.currentMonthInNumber < 10){
                currentMonth = `0${this.currentMonthInNumber + 1}`
            } else{
                currentMonth = this.currentMonthInNumber + 1
            }
            if(date < 10){
                date = `0${date}`
            }
            let currentDate = `${this.currentYear}-${currentMonth}-${date}`

            this.clicked.splice(index, 1, !this.clicked[index])
            axios({
                method: "post",
                url: "/apis/v1/days/",
                headers: {
                    "X-CSRFToken": this.csrf_token
                },
                data: {
                    "day": currentDate,
                    "user": [this.currentUser.id]
                }
            }).then(response => {
                this.loadCurrentUser()
            })
        }
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
                    <p v-for="(date, index) in daysInMonth" :class="{blue2 : todayDate(date), blue : clicked[index], white : !clicked[index]}" @click="dayClick(date, index)">{{ date }}</p>
                </div>
            </section>

            <section class="button">
                <button @click="prev" class="btn btn-primary">Prev</button>
                <button @click="next" class="btn btn-primary">Next</button>
            </section>
        </div>
    `
})

////////////////////////////////// Exercise List //////////////////////////////////
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
    computed: {
        listedExercise: function() {
            return this.exercise_list.filter(exercise => {
                return this.currentUser.added.includes(exercise.id)
            })
        }
    },

    methods: {
        listExercise: function() {
            for(let exercise of this.currentUser.added_info){
                exercise_list.push(exercise.name)
            }
        },

        loadExercise: function() {
            axios({
                method: "get",
                url: '/apis/v1/exercises/'
            }).then(response => this.exercise_list = response.data)
        },

        loadCurrentUser: function() {
            axios({
                method: "get",
                url: "/apis/v1/currentuser/"
            }).then(response => this.currentUser = response.data)
        },
        
        listExercise: function(exercise) {
            if(this.currentUser.added.includes(exercise.id)) {
                this.currentUser.added.splice(this.currentUser.added.indexOf(exercise.id), 1)
            } else {
                this.currentUser.added.push(exercise.id)
            }
            axios ({
                method: 'patch',
                url: 'apis/v1/currentuser/',
                data: {
                    'added': this.currentUser.added
                },
                headers: {"X-CSRFToken": this.csrf_token},  
            }).then(response => {
                this.loadCurrentUser()
                this.loadExercise()
            })
        },
        createExercise: function() {
            let duplicate = false
            for(let exercise of this.currentUser.added_info){
                if(exercise.name === this.newExercise.name) {
                    duplicate = true
                    alert("it's already in the list")
                    break
                }
            }
            if (!duplicate) {
                axios({
                    method: "post",
                    url: "/apis/v1/exercises/",
                    headers: {
                        "X-CSRFToken": this.csrf_token
                    },
                    data: {
                        "name": this.newExercise.name,
                        "added_by": [this.currentUser.id]
                    }
                }).then(response => {
                    this.loadCurrentUser()
                    this.loadExercise()
                    this.newExercise = {
                        "name": ""
                    }
                })
            }

        },
        deleteExercise(exercise) {
            axios.delete("http://localhost:8000/apis/v1/exercises/" + exercise.id + "/", 
            {headers: {"X-CSRFToken": this.csrf_token}
            }).then(response => this.loadExercise());
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
                    <select id="term" name="term">
                        <option value="users">Users</option>
                        <option value="pokemon"selected>Pokemon</option>
                    </select>
                    <input @keyup.enter="createExercise" type="text" id="new-exercise-input" v-model="newExercise.name" placeholder="New Exercise?"><br>
                    <button @click="createExercise" id="new-exercise-submit">Submit</button>
                </div>
            </header>

            <div class="main">
                <section class="exercise-list">
                    <h2>Exercises</h2>
                    <div id="exercises">
                        <ul class="exercise-inside">
                            <li v-for= "exercise in listedExercise" :key="exercise.id" class="content">
                                <p class="text" style="text-transform: uppercase"> {{ exercise.name }} </p>
                                <button @click="deleteExercise(exercise)" class="delete">Delete</button>
                            </li>
                        </ul>
                    </div>
                </section>        
            </div>
        </div>
    `
})
  
////////////////////////////////// Root Component //////////////////////////////////
new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
        restTimeActive: false,
        workoutTimeActive: false,
        prepareTimeActive: false,
        prepareTimeLimit: null,
        workoutTimeLimit: null, 
        restTimeLimit: null,
        cycleTimeLimit: null,
        cyclesLeft: 0,
        totalTimeActive: false,
        totalTimeLimit: null,
        random_list: [],
        exercise_list: [],
        currentUser: {
            exercise_list: []
        },
        restTimePause: false,
        workoutTimePause: false,
        prepareTimePause: false,
        totalTimePause: false,
        // restTimeResume: false,
        // workoutTimeResume: false,
        // prepareTimeResume: false,
        // totalTimeResume: false
    },

    methods: {
        toggleTimer: function(doneTimer) {
            if(this.cyclesLeft === 2) {
                this.restTimeActive = false
                this.workoutTimeActive = false
                if(!alert("Timer's done!")){window.location.reload();}
            } else if(doneTimer === "workout"){
                this.restTimeActive = true
                this.workoutTimeActive = false
                this.random_list.shift()
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
                this.random_list = this.listedExercise.slice()
                this.random_list.sort(() => Math.random() - 0.5)
            }
        },

        pauseWorkoutTimer: function() {
            if(this.prepareTimeActive === true) {
                prepareTimePause = true
            } else if (this.workoutTimeActive === true){
                workoutTimePause = true
            } else if (restTimeActive === true) {
                restTimePause = true
            }
        },

        resumeWorkoutTimer: function() {
            if(this.prepareTimeActive === false) {
                prepareTimePause = false
            } else if (this.workoutTimeActive === false) {
                workoutTimePause = false
            } else if (this.restTimeActive === false) {
                restTimePause = false
            }
        },

        loadExercise: function() {
            axios({
                method: "get",
                url: '/apis/v1/exercises/'
            }).then(response => this.exercise_list = response.data)
        },
    
        loadCurrentUser: function() {
            axios({
                method: "get",
                url: "/apis/v1/currentuser/"
            }).then(response => this.currentUser = response.data)
        },

    },
    computed: {
        totalTime: function() {
            const total = parseFloat(this.prepareTimeLimit) + (parseFloat(this.workoutTimeLimit) + parseFloat(this.restTimeLimit)) * parseFloat(this.cycleTimeLimit)
            const minutes = Math.floor(total / 60);
            let seconds = total % 60

            return `${minutes}:${seconds}`
        },
        listedExercise: function() {
            return this.exercise_list.filter(exercise => {
                return this.currentUser.added.includes(exercise.id)
            })
        }
    },
    created: function() {
        this.loadExercise()
        this.loadCurrentUser()
    },
})