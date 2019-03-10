# Simon Says! Pattern Recognition Game

Face off against the machine in a pattern recognition pressure test. Simply choose your difficulty and click Start to see if you've got what it takes to beat Simon! https://huckcity.github.io/milestone-project-two/
 
## UX

The user experience for this project was kept very simple, just like the game is generally presented in the real world, even with similarly styled games such as Bop It, there are no distractions, bells or whistles. The focus is on the core mechanic and the draw to play is in the simplicity.

Use cases were simple, as we want to present the game in one form but allow users of different abilities to feel the sense of achievement that comes with beating the game. We achieved this by allowing the user to set their difficulty and quickly restart or change at any time.

## Features

As described above, the site consists of a very simple interface, just one page. The sections on this page are also kept very simple, with a difficulty selector and a call to action on the games start button front and center.

The game plays as expected, associating a colour and sound event with each button, allowing the user to remember the sequence in multiple ways.

The difficulty selector allows the user to choose between 3 settings, Easy, Medium and Hard. This setting applies two modifiers, namely the number of turns required to win and the speed at which the sequence is played. 
- Easy: 5 turns, 800ms sequence delay
- Medium: 10 turns, 400ms sequence delay
- Hard: 20 turns, 200ms sequence delay

There is a start button to begin, and a reset button to restart using the same settings. Changing the difficulty will automatically reset the game.

### Features Left to Implement

I would like to implement and fine tune more diffuculty settings, or allow a user to specify custom settings.
Another feature I would like to implement is a never ending game, that would track users highest scores and present this table to all visitors.

## Technologies Used

- HTML
- CSS
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

Testing on this project has probably accounted for 40% of the total development time, in an effort to ensure the user cannot accidentally break the game, and ensuring it works on multiple devices. Working on the buttons and developing a nice UX interaction for this proved challenging and required a lot of fine tuning to get speed and responsiveness for the higher difficulties. 

The site has been teseted thoghroughly across multiple screen sizes. This testing was conducted using Firefox/Chrome/Safari and each of their relevant developer tools.
The site has also been tested manually on the following devices:

    - Macbook Pro 15"
    - iPad 4 9.7"
    - Xiaomi Air 13" (Ubuntu)
    - Honor Play 6.3"

The site displayed correctly in all cases, although it is fair to say a horizontal viewport is recommended and I felt this was preferably to expect from the user rather than having the site scale down to the point that it would fit the width of the smallest devices.

## Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. The live site updates automatically each time there is a new push to the repository. You can git clone the code to run it locally on your machine.

## Credits

### Content

All content was written by me, and no other copy was used in this project.

### Media

The audio effects were acquired from https://freesound.org/
