> bamAction is a callback.

## Components

BamActions :
    * USER_DISCONNECT
    * USER_LOGIN
    * VIEW_NAVIGATE - Profile - Home - List - Back
    * PROFILE_SHOW
    * PROFILE_SAVE 
    * PROFILE_PICTURE_UPDATE 
    * MESSAGE_SEND
    * MESSAGE_SEARCH


* BamHeader - Ludovic
    * title
    * bamAction (cb)
* BamSearch - Lucas
    * `Alomst same as bamFiled`
    * bamAction
* BamList - Jordhan
    * `Receive collection of Message Items`
    * itemCollection
* BamListItem  - Damien
    * `Displays Message Item`
    * item
* BamField - Gwennolé
    * `On filed validity call bamaction with value`
    * bamAction
* BamGrumpyCat - Franck
    * `can be zoomed (headshot) (with sound ?)`
* BamLogoButton - Axel
    * `Plays a grrr sound or a firendly miaou sound`
    * bamAction
* BamAvatar - Nicolas
    * `On click allow image capture`
