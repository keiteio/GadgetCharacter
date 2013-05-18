var character = {
  totale_file_size: 0,
  base: "",
  level: 0
}

function current_character(){
  return character;
}

function readFile(filename){
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var str = "";
  if(fso.FileExists(filename)){
    var f = fso.OpenTextFile(filename, 1);
    while (!f.AtEndOfStream){
      str += f.ReadLine();
    }
    f.Close();
  }
  fso = null;
  return str;
}

function getJsonFromFile(filename){
  return $.parseJSON( readFile(filename) );
}