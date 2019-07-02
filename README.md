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


* BamHeader
    * title
    * bamAction (cb)
* BamSearch
    * `Alomst same as bamFiled`
    * bamAction
* BamList
    * `Receive collection of Message Items`
    * itemCollection
* BamListItem
    * `Displays Message Item`
    * item
* BamField
    * `On filed validity call bamaction with value`
    * bamAction
* BamGrumpyCat
    * `can be zoomed (headshot) (with sound ?)`
* BamLogoButton
    * `Plays a grrr sound or a firendly miaou sound`
    * bamAction
* BamAvatar
    * `On click allow image capture`
