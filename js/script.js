/*
	Author:  Martin Corona
*/	
const firtName = document.getElementById("ifname");
const lastName = document.getElementById("ilname");
const button = document.getElementById("enter");
let hackerName = "";
button.addEventListener("click", function(){
	//nopealert(firtName);
	//nopealert("2 your name "+firtName+" "+lastName);
	//only 2ndalert('3 Your name is '+firtName.text+' '+lastName.value);
	//alert(`4 Your name is ${firtName.value} ${lastName.value}` );
	//nelconsole.log(firtName);
	firstNameFn(firtName.value);
	lastNameFn(lastName.value);
	alert("Your HackerName is "+hackerName);
	/*if(firtName && firtName.value){
		alert("my imput has a value");
	}else{
		alert("my imput hasn't a value");//
	}*/
	
})
function firstNameFn(firstName){
	
	switch (firstName[0]) {
	  case 'A' || 'a':
		  hackerName += "SH4DOW";
		break;
	  case 'B' || 'b':
		  hackerName += "CHIEF";
		break;
	  case 'C' || 'c':
		  hackerName += "CYBER";
		break;
	  case 'D' || 'd':
		  hackerName += "M4STER";
		break;
	  case 'E' || 'e':
		  hackerName += "PRIV4TE";
		break;
	  case 'F' || 'f':
		  hackerName += "NULL";
		break;
	  case 'G' || 'g':
		  hackerName += "TESTED";
		break;
	  case 'H' || 'h':
		  hackerName += "GENER4L";
		break;
	  case 'I' || 'i':
		  hackerName += "TOXIC";
		break;
	  case 'J' || 'j':
		  hackerName += "CRASH";
		break;
	  case 'K' || 'k':
		  hackerName += "STEALPH";
		break;
	  case 'L' || 'l':
		  hackerName += "H4ACKER";
		break;
	  case 'M' || 'm':
		  hackerName += "UBER";
		break;
	  case 'N' || 'n':
		  hackerName += "GRAY";
		break;
	  case 'O' || 'o':
		  hackerName += "MR.";
		break;
	  case 'P' || 'p':
		  hackerName += "TROLL";
		break;
	  case 'Q' || 'q':
		  hackerName += "ASYNC";
		break;
	  case 'R' || 'r':
		  hackerName += "RENA";
		break;
	  case 'S' || 's':
		  hackerName += "NINJA";
		break;
	  case 'T' || 't':
		  hackerName += "TRUE";
		break;
	  case 'U' || 'u':
		  hackerName += "JAVA";
		break;
	  case 'V' || 'v':
		  hackerName += "MYSQL";
		break;
	  case 'W' || 'w':
		  hackerName += "TESTED";
		break;
	  case 'Y' || 'y':
		  hackerName += "FIRE";
		break;
	  case 'Z' || 'z':
		  hackerName += "ZERO";
		break;
	  default:
		// code
	}
	
}
function lastNameFn(lastName){
	switch(lastName[0]){
		case 'A' || 'a':
			hackerName += " " + "BET4";
		  break;
		case 'B' || 'b':
			hackerName += " " + "TERABYTE";
		  break;
		case 'C' || 'c':
			hackerName += " " + "WIRE";
		  break;
		case 'D' || 'd':
			hackerName += " " + "PL4GUE";
		  break;
		case 'E' || 'e':
			hackerName += " " + "SKELETON";
		  break;
		case 'F' || 'f':
			hackerName += " " + "B4RCODE";
		  break;
		case 'G' || 'g':
			hackerName += " " + "FRE4K";
		  break;
		case 'H' || 'h':
			hackerName += " " + "BOT";
		  break;
		case 'I' || 'i':
			hackerName += " " + "SSL";
		  break;
		case 'J' || 'j':
			hackerName += " " + "HYDRA4";
		  break;
		case 'K' || 'k':
			hackerName += " " + "BYTE";
		  break;
		case 'L' || 'l':
			hackerName += " " + "PH4NTHOM";
		  break;
		case 'M' || 'm':
			hackerName += " " + "MON";
		  break;
		case 'N' || 'n':
			hackerName += " " + "NIGHT";
		  break;
		case 'O' || 'o':
			hackerName += " " + "CRACK";
		  break;
		case 'P' || 'p':
			hackerName += " " + "SHARK";
		  break;
		case 'Q' || 'q':
			hackerName += " " + "VARY4BLE";
		  break;
		case 'R' || 'r':
			hackerName += " " + "ROOT";
		  break;
		case 'S' || 's':
			hackerName += " " + "ANTRAX";
		  break;
		case 'T' || 't':
			hackerName += " " + "VIRUS";
		  break;
		case 'U' || 'u':
			hackerName += " " + "SILENCE";
		  break;
		case 'V' || 'v':
			hackerName += " " + "SAINT";
		  break;
		case 'W' || 'w':
			hackerName += " " + "DESTROYER";
		  break;
		case 'Y' || 'y':
			hackerName += " " + "L3GEND";
		  break;
		case 'Z' || 'z':
			hackerName += " " + "PROGRAM";
		  break;
		
		default:
	  }
}
/*function pressButton(){
	//alert('Your name is '+firtName.value+' '+lastName);
	//alert(`Your name is ${firtName} ${lastName}` );
	alert("your name "+firtName+" "+lastName);
	if(firtName && firtName.value){
		alert("my imput has a value");
	}else{
		alert("my imput hasn't a value");
	}
	//alert("sod");
}
button.addEventListener("click",pressButton());
*/