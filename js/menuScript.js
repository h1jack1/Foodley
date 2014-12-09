var menuDiv = document.querySelector("#menuDiv");
var menuPage = document.querySelector("#menuDiv1");

function initMenu() {
	
	console.log("Success!");
	var menuDiv1 = document.createElement("div");
	menuDiv1.setAttribute('id', 'menuDiv1');
	var menuPage = document.querySelector("#menuDiv");
	menuPage.appendChild(menuDiv1);
	
	var menuDiv2 = document.createElement("div");
	menuDiv2.setAttribute('id', 'menuDiv2');
	menuPage.appendChild(menuDiv2);
	
	var menuDiv3 = document.createElement("div");
	menuDiv3.setAttribute('id', 'menuDiv3');
	menuPage.appendChild(menuDiv3);
	
	

	//Loop JSON data, retreive appetizers and append to page
	
	for(var i = 0; i< menuData.Appetizers.length; i++) {
		
		var app = menuData.Appetizers[i].Foodname;
		var menuDiv1 = document.querySelector("#menuDiv1");
		var appDiv = document.createElement("div");
		appDiv.setAttribute('id', 'appDiv' + i);
		var appName = document.createElement("p")
		appName.setAttribute('id', 'appName');
		var appCost = document.createElement("p");
		appCost.setAttribute('id', 'appCost');
		appDiv.appendChild(appName);
		appDiv.appendChild(appCost);
		menuDiv1.appendChild(appDiv);
		appName.innerHTML = (app);
		var appPrice = menuData.Appetizers[i].Cost;
		appCost.innerHTML = ("$" + appPrice);
		var image = new Image();
		//image.src = atob(menuData.Appetizers[i].Image);
		//appDiv.appendChild(image);
		//image.src = menuData.Appetizers[i].Image;
		//appDiv.appendChild(image);
		}
		
		
		
	//Loop JSON data, retreive dishes and append to page
	
	for(var i = 0; i< menuData.Dishes.length; i++) {
		
		var dishes = menuData.Dishes[i].Foodname;
		var menuDiv2 = document.querySelector("#menuDiv2");
		var dishesDiv = document.createElement("div");
		dishesDiv.setAttribute('id', 'dishesDiv' + i);
		var dishesName = document.createElement("p");
		dishesName.setAttribute('id', 'dishesName');
		var dishesCost = document.createElement("p");
		dishesCost.setAttribute('id', 'dishesCost');
		dishesDiv.appendChild(dishesName);
		dishesDiv.appendChild(dishesCost);
		menuDiv2.appendChild(dishesDiv);
		dishesName.innerHTML = (dishes);
		var dishPrice = menuData.Dishes[i].Cost;
		dishesCost.innerHTML = ("$" + dishPrice);
		}
		
	//Loop JSON data, retreive desserts and append to page
		
	for(var i = 0; i< menuData.Desserts.length; i++) {
		
		var desserts = menuData.Desserts[i].Foodname;
		var menuDiv3 = document.querySelector("#menuDiv3");
		var dessertsDiv = document.createElement("div");
		dessertsDiv.setAttribute('id', 'dessertsDiv' + i);
		var dessertsName = document.createElement("p");
		dessertsName.setAttribute('id', 'dessertsName');
		var dessertsCost = document.createElement("p");
		dessertsCost.setAttribute('id', 'dessertsCost');
		dessertsName.innerHTML = (desserts);
		dessertsDiv.appendChild(dessertsName);
		dessertsDiv.appendChild(dessertsCost);
		menuDiv3.appendChild(dessertsDiv);
		
		var dessertsPrice = menuData.Desserts[i].Cost;
		dessertsCost.innerHTML = ("$" + dessertsPrice);
		//console.log(dessertsCost);
		}
	
}


function deleteDiv(divDelete) {
	
    var myNode = document.getElementById(divDelete);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  console.log("div "+menuDiv+" emptied");

}
