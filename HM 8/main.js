var forgSelector = "#frog";
var allFrogs = new Array();
class FrogInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var frog = new FrogInfo("#frog", "images/frog.JPG");
    allFrogs.push(frog);

}
$(document).ready(function(){
    initializeArray();
    console.log(allFrogs.length);
    console.log(allFrogs[0].toString());
    console.log(allFrogs[0].theSelector);
    console.log(allFrogs[0].theImagePath);
    
    $(allFrogs[0].theSelector).attr("src", allFrogs[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 3000);
        
        $(allFrogs[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:350}).animate({top:100}).animate({left:0}).animate({top:300});
}