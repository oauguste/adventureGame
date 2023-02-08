# adventureGame

CLI adventure game using javascript

Class template and class that we can print multiple of, for
our monster and our item Class template for our player Our
game map needs to be aware of our player, monster, item, and
stepped on squares instances on it Our game map needs to be
displayed as a string Our game map needs to be able to be
called with a different size?? Once thats done we need to
implement logic to play the game Our player and our monster
can both attack Our player and our monster can both die
Stepped on squares dont have anything on them but their
stepped on emoji We need to return a new array map after
every player movement When we return our array map we have
to turn it into a string

---

HUD display keep a running display of our players updated
stats if a player found an item annouce it if a player found
an enemy annouce the encounter and the win If a player
reaches the star annouce "Win"

---

Game logic IF our player reaches the star the game ends (is
over) If not then our player can move around the map to
reach our star Our player can move Up down left and right on
our map as long as they dont leave the map, the cannot move
out of bounds When our player moves to a spot on the map the
spot he was on before becomes a "stepped on" square meaning
theres no monsters or items on that square and the square
emoji changes to footsteps If our player moves on to a
square which an item was already placed on he picks up that
item meaning the items stats get added to his stats and the
items dissapears from the square and the square becomes a
stepped on square if our player moves on to a square which a
monster was already placed on the fight that monster. While
the player' s health is greater than 0 he continues to fight
the monster until the monsters health becomes zero While the
monsters health is greater than 0 the monster fight until
the players health becomes zero Fighting means the player
attacks then the monster attacks in a loop Attacking means
scoring a hit. a hit reduces health by that amount, The Hit
is player attack - enemy Defense and enemy attack - player
defense The fight ends as a result of whichever happens
first, player health goes to 0 or monsters health goes to 0
If the players health gets to zero they DIE and the game
ends (is over) If the monsters health goes to 0 the are
"Defeated" and removed from the square
