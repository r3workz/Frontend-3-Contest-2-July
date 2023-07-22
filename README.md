# Project Overview

## User Interface
Figma - https://www.figma.com/file/M6GZlsfAVlDVlkL5V3PuCN/Alarm-App?type=design&node-id=0%3A1&mode=design&t=V1JZEQaoE3Lp0eKI-1

Reference- https://storage.googleapis.com/acciojob-open-file-collections/ab49cbce-b4a4-42c9-bf99-8952f45bdf04_image.gif

## Task
Your task is to build a web application that allows users to set multiple timers. The application's design should match the UI provided in the Figma file.
The Figma design is broken down into three main components:

    1. Timer Input Section
    2. Active Timers Display Section
    3. Timer End Display Design

1. Timer Input Section 
   - This section allows the user to input the desired time in hours, minutes, and seconds. Upon setting the time and clicking the 'Start New Timer' button, a new timer should be started and added to the Active Timers Display Section.

2. Active Timers Display Section
   - This section should dynamically display all active timers. Each timer should show the time remaining and have a 'Stop Timer' button to cancel the timer. Make sure that each timer shows the countdown from whatever time was set to 0, and they need to update every second.

3. Timer End Display Design
   - Upon reaching zero, the display for that timer should change to match the design provided in the Figma file. Additionally, an audio alert of your choice should be played to notify the user that the timer has ended.

## Good Practices
While building your web application, please ensure you follow these best practices:

- Semantic HTML: Use correct element tags for better SEO and accessibility.
- CSS Flexbox/Grid: Use what you've learned about Flexbox and CSS Grid to manage your layouts.
- Vanilla JavaScript: No libraries or frameworks should be used for this project. 
- Code cleanliness: Maintain clean and commented code to enhance readability. 

## Hints
1. Timer Functionality: You can use the setInterval method in JavaScript to decrement the timer every second. Be sure to clear the interval with clearInterval when the timer reaches zero. 
2. Multiple Timers: Each timer should have its own interval. You could store these in an array or an object for easy access. 
3. Audio Alert: The Audio object in JavaScript can be used to play a sound. You can create a new Audio object and use the play method to play the sound. 
4. Changing the Timer Display: You could use a different CSS class for a timer that has ended and use JavaScript to change the class when the timer reaches zero. This will allow you to change the appearance of the timer according to the Figma design. 
5. Handling User Input: Ensure you validate user input to prevent any unexpected behavior. For instance, don't start a timer if the user hasn't entered a valid time. 
6. Stopping a Timer: You'll need a way to identify which 'Stop Timer' button was clicked. One way to do this could be to use a data attribute on the button that corresponds to the index of the timer in your array/object.

## Marking Scheme
1. Timer Input Section - 25 Points
   <br> Accurate gathering of user input (hours, minutes, seconds)
Proper validation of user input
Correct triggering of timer creation upon clicking 'Start New Timer' button

2. Active Timers Display Section - 25 Points
   <br> Dynamic display of active timers, with each showing time remaining
Correct countdown functionality, with timers updating every second
Appropriate removal of timers from the display when the 'Stop Timer' button is clicked

3. Timer End Display Design - 25 Points
   <br> Correct change in the display of a timer when it ends, matching the provided Figma design
Successful playing of an audio alert when a timer ends

4. Fidelity of the web application's design to the provided Figma design (25 Points)