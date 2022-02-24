
var imageTags = ["image1", "image2", "image3", "image4","image5", "image6", "image7", "image8","image9", "image10"];

var blankImagePath = "images/Blankimage.jpg";

var actualImages = new Array();

function printBlanks()
{
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    { document.getElementById(imageTags[i]).src= blankImagePath; }  

    console.log("2"); 
}

function createRandomImageArray()
{
    var actualImagePath = 
    ["images/Spruce.jpg",
    "images/Douglas-Fur.jpg", 
    "images/ponderosa.jpg",
    "images/Aspen.jpg",
    "images/engelmannspruce.jpg",
    "images/huckleberry.jpg",
    "images/limberpine.jpg",
    "images/oak.jpg",
    "images/rockymountainjuniper.jpg",
    "images/bamboo.jpg"];
    var count = [0,0];
   
    while(actualImages.length <= 10)
    { var randomNumber = Math.floor(Math.random() * actualImagePath.length)

    if(count[randomNumber] < 5)
    {   actualImages.push(actualImagePath[randomNumber]);
        count[randomNumber] = count[randomNumber] + 1; 
    }

    }

    console.log("1")
}
function flipImage(number)
{ document.getElementById(imageTags[number]).src= actualImages[number];}