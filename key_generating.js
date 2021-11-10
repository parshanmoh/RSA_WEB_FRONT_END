function Redirect() {
    window.location = "encryption.html";
 }            
 

async function key_generating(){
    var data = "";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("GET", "http://127.0.0.1:8000/key_gen/");

    xhr.send(data);

    document.write("You will be redirected to see authorized message from google that files are uploaded and app will be redireect you to encrypt your files after so after see the message back the app page. thanks");
     setTimeout('Redirect()', 12000);


}