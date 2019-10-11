var colors=selectRandomColors(6);
var clickedColor;
var squares=document.querySelectorAll(".box");
var message=document.querySelector(".playAgain");
var pickedColor=colorChoice();
var selectBorder1=document.querySelector(".border1");
var selectColor=document.querySelector(".font1");
selectColor.textContent=pickedColor;
var playAgainBtn=document.querySelector(".newColor");
var easyBtn=document.querySelector(".easy");
var hardbtn=document.querySelector(".hard");





for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];				/*convert the background color of array given color*/
	squares[i].addEventListener("click",function()		/*event listener of click the box*/
	{
		clickedColor=this.style.background;
		if(pickedColor!=clickedColor)
		{
			this.style.background="#232321";
			message.textContent="try again";
		}
		else
		{
			message.textContent="correct";
			correct(clickedColor);
			playAgainBtn.textContent="play again?";
		}
	});
}

easyBtn.addEventListener("click",easy);				/*event listener of click the easy button*/
hardbtn.addEventListener("click",hard);				/*event listener of click the hard button*/

function colorChoice() 
{
	var randoms=Math.floor(Math.random()*colors.length);		/*create random number*/
	return colors[randoms];
}

function selectRandomColors(num) 
{
	var arr=[];
	for (var i = 0; i < num; i++) 
	{
		arr.push(createRandomColor());
	}
	return arr;
}

function createRandomColor() 
{
	var red=Math.floor(Math.random()*256);
	var grean=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb("+red+", "+grean+", "+blue+")";	//tricky bug1
}

function easy()
{
	easyBtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors=selectRandomColors(3);
	pickedColor=colorChoice();
	selectColor.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) 
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
}

function hard()
{
	hardbtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=selectRandomColors(6);
	pickedColor=colorChoice();
	selectColor.textContent=pickedColor;
	for (var i = 0; i < 6; i++) 
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
}

function correct(color) 
{
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.background=color;
		selectBorder1.style.background=color;
	}
}
//tricky bug1: here a bug about string. here space is matter. space after comma. if these space are not given themn game will not work