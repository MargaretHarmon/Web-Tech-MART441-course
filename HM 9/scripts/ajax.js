$(document).ready(function () {
    $("button").click(function () {
        console.log("hi")
        $.getJSON("data/squirtle.json", function(squirtle){
            
        //    var squirtle = JSON.parse(responseText);
            $("#squirtleInformation").html(
                "<img src='" +
                squirtle.img +"'>"+
        
                "<br>type:" +
                squirtle.info.type +
        
                "<br>height:" +
                squirtle.info.height +
        
                "<br>weight:" +
                squirtle.info.weight +
        
                "<br>candy:" +
                squirtle.info.candy +
        
                "<br>candy_count:" +
                squirtle.info.candy_count +
        
                "<br>egg:" +
                squirtle.info.egg +
        
                "<br>spawn_chance:" +
                squirtle.info.spawn_chance +
        
                "<br>avg_spawns:" +
                squirtle.info.avg_spawns +
        
                "<br>spawn_time:" +
                squirtle.info.spawn_time +
        
                "<br>weakness:" +
                squirtle.info.weaknesses +
        
                "<br>evolution:" +
                squirtle.info.evolution);
            });
    });
});
          
