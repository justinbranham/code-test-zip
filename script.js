
function zipApi(){
    zipIn = document.getElementById('zip').value;
    //console.log(zipIn);
    if (zipIn.length = 5) {  
        var client = new XMLHttpRequest();
        client.open("GET", "http://api.zippopotam.us/us/" + zipIn, true);
        client.onreadystatechange = function() {
            if(client.readyState == 4) {
                console.log(client.responseText);
                document.getElementById('city').value = JSON.parse(client.responseText).places[0]["place name"]
                document.getElementById('state').value = JSON.parse(client.responseText).places[0].state
                document.getElementById('stateAbbrev').src = "states/" + JSON.parse(client.responseText).places[0]["state abbreviation"] + ".svg"
            };
        };
    };

    client.send();

};
