
### Luck Description

Luck is a game where a player will be placing bets and hope that the choices they make turn to their advantage.�
Overall, the player will have a board where on top of it will be black and white colors.
Underneath those colors will be random colors of blue and red (bet options). 
When placing a bet the player will have the option to select the color they want to bet on,  
which will be randomly placed underneath the black and white colors. 
Players will  first select the bet options of their choice (red or bleu) on the side of the board then select any of the black and white colors on the board, which will then flip and display the color underneath it.
If the player has guessed correctly there will be a score section keeping  track of the points they’ve accumulated. 
If the player gets the right answer they will be rewarded a point, 
if they get the wrong color they will have a point deducted from them.
There will be 16 squares on the board, if the player scores  8 or more they win the game. 
if the player’s final score if less than 8 they will lose the game.

 
  User Stories
- AAU I should be able to see the objective of the game 
- AAU I should be able to see and select my bet options.�
- AAU I should be able to select where on the board I want to place my bet.�
- AAU I should be able to see my score�
- AAU I should be able to see a message based on my final score.
- AAU I should be able to restart the game when it ends.


### stretch goals:
-  Make it a 2 player game.
-  Assign a color to each player.
-  Make bet options randomize when playing a new game.
-  Add an extra color which would be worth 5 points but there would only be one on the board.

### Pseudocode:�

- Step 1: set variables for the Player, Board, Bet, Player's Choice, the Score Display, and the game's Final Message, Restart Game
- Step 2: Cache the Player's Bet, Choice, Message, Restart Button
- Step 3: Handle Player Click on Bet and Choice on board
- Step 4: Evoke Functions that will evaluate players bet, board choice, win, loss and score
          create win and loss strategies
          if player selects red and random choice on board is red, player gets pointsAdded 
          if player selects red and random choice on board is blue, player gets PointReduced
          if player selects blue and random choice on board is blue, player gets pointsAdded 
          if player selects blue and random choice on board is red, player gets PointReduced 
- Step 5: Create event listeners to allow user to click  bet, choices and restart game
- step 6: Calculate players points in Score as game is being played.   
- Step 7: Display Final Message for if score is equal or greater than 8, or less than 8
                   Message depending on final score

![7D0A9AA1-AB2F-4E15-A2D2-0B7E58E294F5](https://github.com/user-attachments/assets/2c8a8b5e-314f-41ba-9800-b05946a6891a)




|  Day        |   | Task                               | Blockers | Notes/ Thoughts |
| ------------|---|------------------------------------|----------|-----------------|
| Monday      |   | Create and present proposal        |          |                 |
| Tuesday     |   | Create html, js, css files         |          |                 |
| Wednesday   |   | Code HTML/CSS                      |          |                 |
| Thursday    |   | Code JavaScript                    |          |                 |
| Friday      |   | Add styling                        |          |                 |
| Saturday    |   | Finaliza MVP                       |          |                 |
| Sunday      |   | Work on stretch goals              |          |                 |
| Monday      |   | Review and fix bugs if any         |          |                 |
| Tuesday     |   | VOTE!                              |          |                 |
| Wednesday   |   | Run last test                      |          |                 |
| Thursdat    |   | Present                            |          |                 |


