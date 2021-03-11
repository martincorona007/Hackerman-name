/*
	Author:  Martin Corona
*/	
const firtName = document.getElementById("ifname");
const lastName = document.getElementById("ilname");
const button = document.getElementById("enter");
button.addEventListener("click", function(){
	//nopealert(firtName);
	//nopealert("2 your name "+firtName+" "+lastName);
	//only 2ndalert('3 Your name is '+firtName.text+' '+lastName.value);
	alert(`4 Your name is ${firtName.value} ${lastName.value}` );
	//nelconsole.log(firtName);
	if(firtName && firtName.value){
		alert("my imput has a value");
	}else{
		alert("my imput hasn't a value");
	}
})
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