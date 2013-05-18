
function loadCharacter(character_base_id){
  return getJsonFromFile(System.Gadget.path + "\\characters\\" + character_base_id + "\\character.json");
}

function changeCharacterImage(character){
  var img_path = "characters/" + character.base.id + "/images/"
  var img_src = img_path + character.base.images[ character.level ];
  $("#imgBackground").attr("src", img_src);
}

function showMessage(){
  System.Gadget.Flyout.file = "balloon.html";
  System.Gadget.Flyout.show = true;
  System.Gadget.Settings.write("character_base_id", current_character().base.id);
  System.Gadget.Settings.write("character_level", current_character().level);
}

current_character().level = 0 // <= あとで消す

$(document).ready(function(){
  current_character().base = loadCharacter("type01");
  //$("#hw").text(character.base);//loadCharacter("type01").name);
  changeCharacterImage( current_character() );
  showMessage();
});
