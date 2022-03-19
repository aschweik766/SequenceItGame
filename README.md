# sequenceItGame

Game Link: https://aschweik766.github.io/sequenceItGame/startpage.html
## About 
This is a simple drag and drop matching game designed to work as an educational tool to support a user's practice of step by step sequencing and memory skills related to daily task of choice. Learning requires repetition, and interactive games tend to bring more enjoyment and visual feedback when it comes to rehearsal of skills; especially if the user can engage in errorless learning. For this game, the user can rehearse the steps to making a bowl of soup.

## Design
Sequence It Game showcases 2 levels for the user to choose: Level 1 and Level 2 for Making Soup. The user can practice ordering or labeling the steps to making a pot of soup, with visual feedback for an error, and opportunity to evaluate or correct card-matches by selecting the hint buttons. This game utilizes several modals for interactive hints.

Level 1 and 2 both prevent drag and drop on incorrect card match selections. Rather, Level 1 will feature visual prompts to the user through card color changes of green(go), red(no) upon drag over events, as well as use of hint buttons and image descriptions. A user will track match accuracy through a score counter. Upon correct matches, cards will turn green and display the text step number, i.e., "Step One." 

Level 2 is arranged in a slighlty more challenging image task order and will not feature color changes to support a user's drag and drop selection events. As well, dragging a step card over an incorrect image before drop, results in a point loss, and ultimately, inability to win the level. 


<img src = "https://github.com/aschweik766/sequenceItGame/blob/main/Screen%20Shot%202022-03-18%20at%209.47.15%20PM.png" width = "500" Game Play Hint Modal>


<img src = "https://github.com/aschweik766/sequenceItGame/blob/main/Screen%20Shot%202022-03-18%20at%209.46.43%20PM.png" width = "500" Game Play Level 1>


### Stretch goals
Game features or future ideas:
--activity levels for various categories of activities of daily living, i.e., bathing, making coffee, sorting mail, taking medications, etc.
--Increasing difficulty per category level, i.e., a level 3 for Making Soup.
--Improving the modal prompt for ending a game, based on incorrect points/matches on harder levels.
--Color changes, versatility;
--increased web and user accessiblity
--voice-text-reader features or buttons

### Development Improvements
-The drag and drop events do cause some "bouncing around" within the container, as well as the score-board div. This is not a major functionality issue, more so a styling issue to be improved.
-Better accessilibty
-The end-game based on lack of points/incorrect matches on Make Soup Level 2 should be more specific, as the logic is not as concrete on this feature at this time.

### Resources
Give credit, where credit is due!
 ---sourced free downloadable images---
pixelbay.com
istockphoto.com
---tutorials that helped my whiteboarding and pseudocoding process---   
developer.mozilla.org 
w3schools.com
Drag and Drop API video tutorial by James Schneider https://youtu.be/twq9WHgUhQc
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
