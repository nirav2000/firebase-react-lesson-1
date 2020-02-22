# Week 1 of 4 - 27/01/2020: #
Drive>ToDO>Developing>React ToDO
- Presentation: [Firebase and Web - Lesson 1/4](https://docs.google.com/presentation/d/1qTWzDzPWebHGzehsDGVwbjIDUcGxNELm7DrzB5HnbDs/edit#slide=id.g76a2e46570_0_4)
- Code: [GDGcloudLondon](https://github.com/gdgcloudlondon/firebase-react-lesson-1) forked to nirav2000 ... (https://github.com/nirav2000/firebase-react-lesson-1)
- Meetup: https://www.meetup.com/gdgcloud/events/267937802/
- Slack: #firebase-web-crash-course (https://gdgcloud.slack.com/archives/CNVT40V8A)

## Requirements ##
- VS Code Editor
- GIT: 
    - Understand GIT commands
    - how to merge a local folder with a GIT local branch
    - know terminology
    - Link GIT to VS code va SSH (why SSH not HTTPS - find a good blog)
- NPM & NodeJS

## Steps ##
- Make a local copy  / ideally branch of the code (latter better as you can see the changes made and reverse more easily amongst other things?... why GIT?)
- See Presentation of and simple overview of React Components, with 3 problems and solutions.
- Use [CreateReact App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)? - bloated (#number of packages downloaded) but easy and quick to develop a react app
- NPM Install #to install the project.json dependencies
- NPM Start #to run a webserver with real time updates on code changes

## Q: ##
- Performance difference (or other benefits) between React function and class (as a class can do everything a function can!)
- React Hooks (Feb 2019 v16.8) - why introduced, what's the use case, whats the different mindset? https://github.com/stefanolepera/react-hooks-playground
- Render/Return JSX curly brackets {} can include any JS. Why not call a function like addNumber() rather then ?referencing addNumber? How to pass parameters across etc.
- How would you apply TypeScript to this project



## Need to learn: ##

Primatives


# Week 2 of 4 - 03/02/2020: #
- Presentation: [Firebase and Web - Lesson 2/4](https://docs.google.com/presentation/d/1SH-_Wm9wdwfUoJjIFQiyJYyOOXWE3LlFuNVZM2add58/edit#slide=id.g6434350865_1_233)
- Code: [GDGcloudLondon](https://github.com/gdgcloudlondon/firebase-react-lesson-2) (https://github.com/nirav2000/firebase-react-lesson-2)
- [React Basics](https://github.com/stefanolepera/react-basic)

## Steps ##
- setup Firebase
    - using NoSql **Realtime DB**
- get Firebase SDK Snippet config data from Project Settings and place into services/Firebase.js

## Q: ##
- onClick = function or function(). A: () calls the function on load, without () you are assigning a reference to that function to the onclick event handler, or onClick is an alisas for the function, so it only gets called when onclick gets called.

## Thoughts: ##
- Code was gone through pretty fast.  Need to review code to understand all parts.
- Kodiri.com Ankita Singhal ~~Anitha Dharaneedharan~~ & chineese

# Week 3 of 4 - 10/02/2020: #
- Presentation: [Firebase and Web - Lesson 3/4] (https://docs.google.com/presentation/d/1xNs5SXcUsd41vzCAIs5aOPP2lMqu1oxNtthlySmGv0w/edit#slide=id.g70ba2bbdf0_0_0)
- Code: [GDGcloudLondon](https://github.com/gdgcloudlondon/firebase-react-lesson-3) (https://github.com/nirav2000/firebase-react-lesson-3)

- PROMISES V CALLBACKS, whats the difference?
- database design
- recommended course: https://www.udemy.com/course/react-the-complete-guide-incl-redux/ and any course by Maximilian Schwarzmüller

# Wekk 4 of 4 - 17/02/2020: #
- Presentation: [Firebase and Web - Lesson 4/4] (https://docs.google.com/presentation/d/1s_DwO29gg8nwS8f-d-UKvtYUXJZyxiBAaYSoxIYyp2o/edit#slide=id.g6434350865_1_233)
- Code: use week 3 solution

- Install Firebase CLI & use to setup hosting and deployment - one time only, using:
    - 'npm install -g firebase-tools'
    - 'firebase login' - to login to firebase so CLI 
    - 'firebase init' - get your project and create the firebasesrc and firebase.json files based on your selections
- Deploy using: 'firebase delpoy' - deploys the app, provides the usl's.  Use <CTRL> click on the link to opennpm node

- package.json you can set up a script so it runs: 'npm run build && firbase init' i.e. build and deploy with one command

- had error with firbase cli tools where when trying to select (in windows enquirer) with the arrow key it jumps an option. Turned out it was an issue with node, uopdateed to latest - hopefully that would of fix it.