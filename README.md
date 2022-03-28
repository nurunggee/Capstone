# Capstone


Capstone Proposal


NAME: YGT(You Got This!) - Home Workout Random Generator W/ Timer

PROJECT OVERVIEW: Anywhere, Anytime YGT provides you random functional fitness workouts without any equipment

FEATURES:
	1. As a traveler, I want to have an automatic circuit training timer for workout and rest between workouts, because I don’t have a timer with me all the time.
        - [ ] User needs to add times for workout, rest, Total time. (Use selection drop box)
            - [ ] Once, the user set the time for everything, it will give total time. 
		ex) Total time - 20, 30, 45 minutes, Workouts - 20, 45 seconds, Rests - 10, 15 seconds
            - [ ] When it starts, give 5 seconds for the preparation
	2. As a home training lover, I want to edit the list of workouts so I can do other workouts too. 
        - [ ] On the right-side, show a list of random workouts (like a todo list)
            - [ ] Create Random and Edit buttons (like a todo list)
        - [ ] On top of the list, make modal to show all the list of workouts
            - [ ] Let user to add, delete, change the workouts
	3. As a student, I want to get fit and healthy without using any expensive equipment or gear, because I’m on a budget.
        - [ ] Create a list of workouts without equipments		
	4. As a fitness trainer, I want a workout tracker for members because I want to be able to track my members’ progress
        - [ ] Create a workout tracker like a calendar
            - [ ] When the user click the date, it will change the color.

DATA MODEL:  
	User: 
	Workout List:
		1. Id
		2. Title
	Calendar(user list):
		1. (I haven’t really think about it yet)

Schedule: 
	week 1[1~5]: Focus on building an interval timer(workout & rest) for the user with customizable features
	week 1[6~7]: User Registration and login authentication
	week 2: Make the workout tracker (calendar)
	week 3: CSS and add more workouts into the workout list
