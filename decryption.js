const input = document.getElementById('file');
const input1 = document.getElementById('file1');



async function decryption(){

    var fullPath = document.getElementById('file').value;
    var fullPath1 = document.getElementById('file1').value;

    if (fullPath) {

         var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));

         var filename = fullPath.substring(startIndex);

         if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {

             filename = filename.substring(1);

    }
    if (fullPath1){

          var startIndex = (fullPath1.indexOf('\\') >= 0 ? fullPath1.lastIndexOf('\\') : fullPath1.lastIndexOf('/'));

          var filename1= fullPath1.substring(startIndex);

          if (filename1.indexOf('\\') === 0 || filename1.indexOf('/') === 0) {

             filename1 = filename1.substring(1);


    }



     var data = new FormData();

     data.append("private_key", input.files[0],filename);

      data.append("image", input1.files[0], filename1);
     
     var xhr = new XMLHttpRequest();

     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function() {

          if(this.readyState === 4) {

             console.log(this.responseText);
     }
     });

     xhr.open("POST", "http://127.0.0.1:8000/decrypt/");

     xhr.send(data);
     document.write("You will be redirected to see authorized message from google that files are uploaded and app will be redireect you.thanks");
     setTimeout('Redirect()', 10000);


    
       }

  } 
  
            
}
