var btn = document.getElementById("btn");

//ketika form dengan id form data dan button dengan id btn di klik, maka memanggil function validasi
btn.addEventListener("click",validasi);

//setiap keyboard ditekan pada field dengan id name, memanggil function validasinama
document.getElementById("name").addEventListener("keypress", validasinama);
//setiap keyboard ditekan pada field dengan id email, memanggil function validasiemail
document.getElementById("email").addEventListener("keypress", validasiemail);
//setiap keyboard ditekan pada field dengan id message, memanggil function validasimessage
document.getElementById("message").addEventListener("keypress", validasimessage);

function validasinama(){

    if(document.getElementById("name").value == ""){ //jika field dengan id name kosong
        var textnama1='This field is required !';
        //id komen 1 pada form akan diganti dengan textnama1
        document.getElementById("komen1").innerHTML = textnama1; 
        //border field id name menjadi berwarna merah
        document.getElementById("name").style.borderColor="red"
        return false;

    }
    else{

            var textnama3 ='';
            document.getElementById("komen1").innerHTML = textnama3;
            //border field id name menjadi berwarna hitam
            document.getElementById("name").style.borderColor="black"
            return true;
        
        
    }
}


function validasiemail(){ 
    //untuk cek validasi email dengan menggunakan regex di mana harus ada @ kemudian alphabet kemudian . dan 2-4 karakter setelah tanda .
    var cekemail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if(document.getElementById("email").value == ""){ //field dengan id email kosong
        var textemail1 ="This field is required !";
        //id komen 2 pada form akan diganti dengan textemail1
        document.getElementById("komen2").innerHTML = textemail1;
        //border field id email menjadi berwarna merah
        document.getElementById("email").style.borderColor="red"
        return false;
    }
    else{
        if(document.getElementById("email").value.match(cekemail)){//jika sesuai dengan format email pada cekemail
            var textemail3 ="";
        document.getElementById("komen2").innerHTML = textemail3;
        //border field id email menjadi berwarna hitam
        document.getElementById("email").style.borderColor="black"
            return true;
        }
        else{//jika tidak sesuai dengan format email pada cekemail
            var textemail2 ="Invalid Email address";
            //id komen 2 pada form akan diganti dengan textemail2
            document.getElementById("komen2").innerHTML = textemail2;
            //border field id email menjadi berwarna merah
            document.getElementById("email").style.borderColor="red"
            return false;
        }
    }
}


function validasimessage(){

    if(document.getElementById("message").value == ""){//jika field dengan id message kosong
        var textmessage1 ="This field is required !";
        //id komen 1 pada form akan diganti dengan textmessage1
        document.getElementById("komen3").innerHTML = textmessage1;
        //border field id message menjadi berwarna merah
        document.getElementById("message").style.borderColor="red"

        return false;
    }

    else{

            var textmessage2 ="";
            document.getElementById("komen3").innerHTML = textmessage2;
            //border field id message menjadi berwarna hitam
            document.getElementById("message").style.borderColor="black"
            return true;
        
    }
}



function validasi(){

    validasinama();
    validasiemail();
    validasimessage();

    
    if(validasinama() == true && validasiemail() == true && validasimessage() == true ){
        // Jika semua sudah sesuai format maka akan direct ke home.html
        location.replace("home.html")
    }
    
}
