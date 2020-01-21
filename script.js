function showText(str){
    if(str.length == 0){
        document.getElementById('result').innerHTML = '';
        return;
    }
    else{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200 ){
         document.getElementById('result').innerHTML = this.responseText;
            }
        } 
        xmlHttp.open("GET", `cities.php?q=${str}`);
        xmlHttp.send();
    }

}