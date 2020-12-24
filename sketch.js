var dog, happyDog, database, foodS, foodStock, food;

function preload()
{
dog = loadImage("images/dogImg.png");
happyDog = loadImage("image/dogImg1.png");

}

function setup() {
  database= firebase.database();

  createCanvas(800, 800);
  
  dog = createSprite(250,250,30,30);
  dog.image = loadImage("images/dogImg.png");

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

  foodObj = new Food;

  var feed = createButton("Feed Drago");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  var addFood = createButton("Add Food");
  addFeed.position(800,95);
  addFeed.mousePressed(addFoods);

}


function draw() {  

background (46,139,87);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed: " + lastFed%12 + "PM",350,30);
}else if(lastFed===0){
  text("Last Feed: 12 AM", 350,30);
}else{
  text("Last Feed: " + lastFed + "AM",350,30);
}


  drawSprites();
 


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0){
    x = 0;
  }else{
    x = x-1
  }
  database.ref('/').update({

  })
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      FeedTime: hour()

    })
  }


function addFood(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}
