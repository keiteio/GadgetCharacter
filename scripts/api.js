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
        asdf = current_character().totale_file_size;
        spFeedback.innerHTML = asdf;
        intIndex++;
    }
}