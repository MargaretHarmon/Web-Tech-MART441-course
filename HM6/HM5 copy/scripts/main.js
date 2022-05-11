
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8","image9", "image10"];

var blankImagePath = "./images/Blankimage.jpg";

//additions im not certain about
var firstNumber = -1;
var secondNumber = -1;
var player = {"firstname":"", "lastname":"" , "age": 0, "score":0};

var actualImages = new Array();

function printBlanks()
{
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    { document.getElementById(imageTags[i]).src= blankImagePath; }  
}

function createRandomImageArray()
{
    var actualImagePath = [
    "images/Aspen.jpg", 
    "images/bamboo.jpg", 
    "images/Douglas-Fur.jpg", 
    "images/engelmannspruce.jpg", 
    "images/huckleberry.jpg", 
    "images/limberpine.jpg", 
    "images/oak.jpg", 
    "images/ponderosa.jpg", 
    "images/rockymountainjuniper.jpg",
    "images/Spruce.jpg"];
    
    var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    while(actualImages.length < 10)
    {
       
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }   
}

function flipImage(number)
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
    }
    else if(firstNumber < 0) 
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    }

   
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000);
    }

    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
   
}
