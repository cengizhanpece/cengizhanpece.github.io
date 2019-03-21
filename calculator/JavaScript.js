var nokta = false;
        function ekle(i){
            document.getElementById("sonuc").innerHTML +=i;
        }
        function islem(i){
            var icerik = document.getElementById("sonuc").innerText.trim();
            var sonharf = icerik[icerik.length - 1];
            
            if(sonharf == "/" || sonharf ==  "*" || sonharf ==  "+" || sonharf ==  "-" || sonharf =="."){
                return sonharf;
            }
            
            if(i != "."){
                document.getElementById("sonuc").innerHTML += i;
                nokta = false;
            }
            else if(i == "." && nokta == false)
                {
                    document.getElementById("sonuc").innerHTML += i;
                    nokta = true;
                }
            return sonharf;
        }
        
        function temizle(){
            document.getElementById("sonuc").innerHTML = "";
        }

    function esittir(){
    document.getElementById("sonuc").innerHTML = eval(document.getElementById("sonuc").innerHTML);
    }


function geri(){
    var icerik = document.getElementById("sonuc").innerText.trim();
    document.getElementById("sonuc").innerHTML = icerik.slice(0,-1);
    
}