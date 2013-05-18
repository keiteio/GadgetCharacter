function GetItemFromDrop()
{
	spFeedback = document.getElementById("test_id");
    //spFeedback.innerHTML = "File(s) dropped.<br/>";
    var intIndex = 0;
    var oItem;
    while(oItem = System.Shell.itemFromFileDrop(event.dataTransfer, intIndex))
    {
        // Display the current item property and increment the index.
        //spFeedback.innerHTML += oItem.size + "<br/>";
        current_character().totale_file_size = current_character().totale_file_size + oItem.size;
        spFeedback.innerHTML = current_character().totale_file_size
        intIndex++;
    }
    var level =  current_character().level;
    var level_margin =  current_character().base.level_up_value;
    //spFeedback.innerHTML = current_character().base.level_up_value;
    
    if(level_margin[level + 1] < current_character().totale_file_size){
    	current_character().level = level + 1;
    	spFeedback.innerHTML = current_character().level;
    }
    
}