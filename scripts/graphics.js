
function loadCharacter(character_base_id){
  return getJsonFromFile(System.Gadget.path + "\\characters\\" + character_base_id + "\\character.json");
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

function changeCharacterImage(character){
  var img_path = "characters/" + character.base.id + "/images/"
  var img_src = img_path + character.base.images[ character.level ];
  $("#imgBackground").attr("src", img_src);
}

character.level = 2 // <= あとで消す

$(document).ready(function(){
  character.base = loadCharacter("type01");
  $("#hw").text(character.base);//loadCharacter("type01").name);
  changeCharacterImage( current_character() );
});
