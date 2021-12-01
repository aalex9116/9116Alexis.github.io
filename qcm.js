// Fonction pour la correction (réponse correcte ou incorrecte + nbre de bonnes réponses)
var speechstr='"';
var A0= new String
var A1= new String
var A2= new String
var A3= new String
var A4= new String
var A5= new String
var A6= new String
var A7= new String
var A8= new String
var A9= new String
function MarkAnswers(){
	var i=0;
	t=10;
	Answers=window.open("","","width=370,height=250");
if (A0.toLowerCase()=="c")
{
i=i+1;
}
if (A1.toLowerCase()=="a")
{
i=i+1;
}
if (A2.toLowerCase()=="c")
{
i=i+1;
}
if (A3.toLowerCase()=="a")
{
i=i+1;
}
if (A4.toLowerCase()=="a")
{
i=i+1;
}
if (A5.toLowerCase()=="b")
{
i=i+1;
}
if (A6.toLowerCase()=="b")
{
i=i+1;
}
if (A7.toLowerCase()=="d")
{
i=i+1;
}
if (A8.toLowerCase()=="a")
{
i=i+1;
}
if (A9.toLowerCase()=="c")
{
i=i+1;
}
Answers.document.write("<B>Vous avez " + i.toString() + " bonnes réponses sur " + t.toString()+"</B>");
if (A0.toLowerCase()=="c")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 1</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 1</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A1.toLowerCase()=="a")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 2</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 2</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A2.toLowerCase()=="c")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 3</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 3</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A3.toLowerCase()=="a")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 4</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 4</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A4.toLowerCase()=="a")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 5</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 5</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A5.toLowerCase()=="b")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 6</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 6</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A6.toLowerCase()=="b")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 7</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 7</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A7.toLowerCase()=="d")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 8</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 8</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A8.toLowerCase()=="a")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 9</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 9</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (A9.toLowerCase()=="c")
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#27AE60>Question 10</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
}
else
{
Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#F62B19>Question 10</B></FONT></B><FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}

}

function close(){
	window.close();
}
