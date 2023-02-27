// is there a game to claim ? if yes, claim it
 if ($('[value="claim"]') && $('[value="claim"]')[0]) {
    $('[value="claim"]')[0].click();
     
// have I claimed a game ? If yes, go back
} else if (!window.location.toString().includes("/bundle/download")) { 
    window.history.back(); 
    
// no game to claim, no game claimed, change page
} else {
    $('.next_page')[0].click()
}
