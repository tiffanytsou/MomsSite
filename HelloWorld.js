var i = 0; var path = new Array(); 

// LIST OF IMAGES
path[0] = "https://scontent-b-iad.xx.fbcdn.net/hphotos-xfa1/t1.0-9/305881_143710972385804_1781994_n.jpg"; 
path[1] = "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/t1.0-9/228929_424508057639426_1053769312_n.jpg"; 
path[2] = "https://scontent-a-iad.xx.fbcdn.net/hphotos-xap1/t1.0-9/1010972_466428836780681_967051341_n.jpg"; 
path[3] = "https://scontent-a-iad.xx.fbcdn.net/hphotos-ash2/t1.0-9/1044658_466427276780837_1121303129_n.jpg";
path[4] = "https://scontent-a-iad.xx.fbcdn.net/hphotos-xaf1/t1.0-9/321246_143710872385814_2601028_n.jpg";
path[5] = "https://scontent-a-iad.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/306386_143710915719143_1523707_n.jpg?oh=26053c5b9038f890e0d4e89f4fe3a5db&oe=542FDF76";

function swapImage() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",3000); 
} 
window.onload=swapImage; 


var tabLinks = new Array();
var contentDivs = new Array();
