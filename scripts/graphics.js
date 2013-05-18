
function loadCharacter(character_base_id){
  return getJsonFromFile(System.Gadget.path + "\\characters\\" + character_base_id + "\\character.json");
}

function changeCharacterImage(character){
  var img_path = "characters/" + character.base.id + "/images/"
  var img_src = img_path + character.base.images[ character.level ];
  $("#imgBackground").attr("src", img_src);
}

function updateCharacter(){
  changeCharacterImage( current_character() );
}

function showMessage(){
  System.Gadget.Flyout.file = "balloon.html";
  System.Gadget.Flyout.show = true;
  System.Gadget.Settings.write("character_base_id", current_character().base.id);
  System.Gadget.Settings.write("character_level", current_character().level);
}

$(document).ready(function(){
  current_character().base = loadCharacter("type01");
  //$("#test_id").text(current_character().base.level_up_value);//loadCharacter("type01").name);
  updateCharacter();
  //showMessage();
});
