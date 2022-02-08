function storyFunction(choice) {
    var answer1= document.getElementById("choice1").innerHTML;
    var answer2= document.getElementById("choice2").innerHTML;

    if (choice == 1 && answer1 == "Lets do it") 
    {   document.getElementById("story").innerHTML = "Slator sneaks around his owner, and can slip out the door. Does he go for it?";
        document.getElementById("choice1").innerHTML = "Sneak out the door";
        document.getElementById("choice2").innerHTML = "Its to risky, lets stay inside";
    } 
    else if (choice == 2 && answer2 == "No, lets stay inside") 
    {   document.getElementById("story").innerHTML = "Slator backs out, but sees his scratching post";
        document.getElementById("choice1").innerHTML = "Go scratch away";
        document.getElementById("choice2").innerHTML = "Go back to couch";
    } 
    else if (choice == 1 && answer1 == "Sneak out the door") 
    {   document.getElementById("story").innerHTML = "Slator is on the front porch, the door has shut behind him'";
        document.getElementById("choice1").innerHTML = "Sit and soak in the sun";
        document.getElementById("choice2").innerHTML = "Go explore the bushes in the front yard";

    } else if (choice == 2 && answer2 == "Go explore the bushes in the front yard") 
    {   document.getElementById("story").innerHTML = "Slator hears a russeling in the bushes";
        document.getElementById("choice1").innerHTML = "Slator finds a cat";
        document.getElementById("choice2").innerHTML = "Slator finds a squirell";

    } else if (choice == 2 && answer2 == "Slator finds a squirell") 
    {   document.getElementById("story").innerHTML = "Slator makes eyecontact with the squirell, it darts off.'";
        document.getElementById("choice1").innerHTML = "Chase it up a tree";
        document.getElementById("choice2").innerHTML = "Chase it out into the front yard";

    } else if (choice == 1 && answer1 == "Chase it up a tree") 
    {   document.getElementById("story").innerHTML = "The squirell takes you to the top of the tree, and you see a birds nest'";
        document.getElementById("choice1").innerHTML = "Go play with the baby birds";
        document.getElementById("choice2").innerHTML = "Ignore the nest and keep persuing the squirell";

    } else if (choice == 2 && answer2 == "Ignore the nest and keep persuing the squirell") 
    {   document.getElementById("story").innerHTML = "The squirell makes a leap for the electrical pole, you then notice your at the top of a huge tree";
        document.getElementById("choice1").innerHTML = "climb down";
        document.getElementById("choice2").innerHTML = "Stay a second and notice the beautiful sunset";

    } else if (choice == 2 && answer2 == "Stay a second and notice the beautiful sunset") {
    document.getElementById("story").innerHTML = "Slator finds a comfy spot on a tree limb, overlooking the whole neighborhood. Slator gets to be in nature and smell the most amazing new scents. You have lead slator on a great adventure and he thanks you. Slators owner has now noticed hes missing, and calls out the frontdoor for him. Slator makes his way down the tree and runs to the fron door. The owner is overwhellmed with joy, and plays and chills with slator for the rest of the evening. THE END, YOU WON!";
    document.getElementById("choice1").innerHTML = "Restart?";
    document.getElementById("choice2").innerHTML = "Stay Home";

    
    // end game path
     } else if (choice == 1 && answer1 == "Go scratch away") {
        document.getElementById("story").innerHTML = "Slators claws are nice and sharp, ready to go outside?" + "<br>Wanna put them to the test?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 2 && answer2 == "Go back to couch") {
        document.getElementById("story").innerHTML = "Slator decides to save his first outdoor adventure for another day" + "<br>the couch was too comfy";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 2 && answer2 == "Its to risky, lets stay inside") {
        document.getElementById("story").innerHTML = "The owner notices slator decided to not run away, you get rewarded with play time" + "<br>Try Again";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 1 && answer1 == "Sit and soak in the sun") {
        document.getElementById("story").innerHTML = "The owner notices Slator is gone, opens the door and brings Slator back inside" + "<br>Want to try again?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 1 && answer1 == "Slator finds a cat") {
        document.getElementById("story").innerHTML = "The Cat is very teritorial, hisses and starts to battle with you. The Cat is very loud and aggresive, Slators owner comes out and scares the mean cat off and brings Slator inside" + "<br> Are you going to let another cat bully Slator?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 2 && answer2 == "Chase it out into the front yard") {
        document.getElementById("story").innerHTML = "The neighborhood kids are outside playing, they see Slator running through the front yard. They chase Slator down kidnap him...But bring him back to his owner:) " + "<br>Slator is now Inside.";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 1 && answer1 == "Go play with the baby birds") {
        document.getElementById("story").innerHTML = "Oh no, the mama bird has come home and starts to dive bomb Slator. The squaking alerts the owner and comes outside. Grabs slator and brings him inside";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";

    } else if (choice == 1 && answer1 == "climb down") {
        document.getElementById("story").innerHTML = "Once Slator makes it down, the owner is outside waiting for him. The owner is happy Slator did not run away, he gets dinner and a nice nap" + "<br>Will you try again tomorrow?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Stay Home";


    } else if (choice == 1 && answer1 == "Restart?") {
        document.getElementById("story").innerHTML = " This is my cat Slator, he is 8 months old. Slator has just seen the front door open, and gets a enticing smell of the outdoors. Are you ready to lead him through his first outdoor adventure?";
        document.getElementById("choice1").innerHTML = "Lets do it";
        document.getElementById("choice2").innerHTML = "No, lets stay inside";

    } else if (choice == 2 && answer2 == "Stay Home") {
        document.getElementById("story").innerHTML = "Slaytor gets his favorite sunny spot on the couch, with lots of catnip and love.";

    }


}