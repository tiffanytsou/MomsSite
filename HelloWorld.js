<head>
<script type="text/javascript">
var image1=new Image()
    image1.src="https://scontent-b-iad.xx.fbcdn.net/hphotos-xfa1/t1.0-9/305881_143710972385804_1781994_n.jpg"
var image2=new Image()
    image2.src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/t1.0-9/228929_424508057639426_1053769312_n.jpg"
var image3=new Image()
    image3.src="https://scontent-a-iad.xx.fbcdn.net/hphotos-xap1/t1.0-9/1010972_466428836780681_967051341_n.jpg"
var image4=new Image()
    image4.src="https://scontent-a-iad.xx.fbcdn.net/hphotos-ash2/t1.0-9/1044658_466427276780837_1121303129_n.jpg"
var image5=new Image()
    image5.src="https://scontent-a-iad.xx.fbcdn.net/hphotos-xaf1/t1.0-9/321246_143710872385814_2601028_n.jpg"
var image6=new Image()
    image6.src="https://scontent-a-iad.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/306386_143710915719143_1523707_n.jpg?oh=26053c5b9038f890e0d4e89f4fe3a5db&oe=542FDF76"
</script>
</head>
<script type="text/javascript">
<!--
//variable that will increment through the images
var step=1
function slideit(){
//if browser does not support the image object, exit.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<3)
step++
else
step=1
//call function "slideit()" every 2.5 seconds
setTimeout("slideit()",2500)
}
slideit()
//-->
</script>
