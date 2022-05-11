
var myViewFinderArray = new Array();
class ViewFinder


{

    constructor(title)
    {
        this.title = title;
    }

    toString()
    {
        return "Title: " + this.title;    
    }

    get theTitle()
    {
        return this.title;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("Aztec Art: 1400-1519 AD. Central Mexico. Volcanic stone. Unknown Artist");
    var myViewFinder1 = new ViewFinder("Double walled beaker with Mythological Scene.A.D 800-1470. Lambayeque region Peru. Unknown Artist.  ");
    var myViewFinder2 = new ViewFinder("Tassled Tunic, Ad 900-1400, Peru.Knotted netwrok and tapestry and camelid fiber. Unkown artist");
    var myViewFinder3= new ViewFinder("ReVisión: Art in the Americas is one of the first exhibitions to open in the renovated Martin Building. A strong selection of nearly 180 objects from the museum’s Ancient American and Latin American Art collections, hailed as one of the best in the country, will tell a visually compelling narrative about the formation of the Americas from 100 B.C. to today.");
    
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
}


function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}