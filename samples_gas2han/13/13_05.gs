function myFunction13_05_01() {
  const id = '********';
  const presentation = SlidesApp.openById(id);  
    
  const shape = presentation.getSlides()[2].getShapes()[4];
  
  console.log(shape.getTitle()); //長方形
  console.log(shape.getDescription()); //
  console.log(shape.getObjectId()); //g8fde8fa732_0_55

  console.log(shape.getPageElementType().toString()); //SHAPE
  console.log(shape.getShapeType().toString()); //RECTANGLE
  
  console.log(shape.getLeft()); //155.2775590551181
  console.log(shape.getTop()); //98.47539370078741
  console.log(shape.getWidth()); //196.48818897637796
  console.log(shape.getHeight()); //84.92125984251969
  console.log(shape.getRotation()); //0

  const image = presentation.getSlides()[3].getImages()[0];
  
  console.log(image.getPageElementType().toString()); //IMAGE
  console.log(image.getObjectId()); //SLIDES_API1838705122_1
  console.log(image.getSourceUrl()); //https://tonari-it.com/wp-content/uploads/sea.jpg
}

function myFunction13_05_02() {
  const id = '********';
  const presentation = SlidesApp.openById(id);  
 
  const shapeId = '********'; //シェイプのオブジェクトID 
  const shape = presentation.getPageElementById(shapeId);
  
  shape
    .scaleHeight(2)
    .scaleWidth(-0.8)
    .setRotation(45)
    .bringToFront();
  
  const imageId = '********'; //画像のオブジェクトID
  const image = presentation.getPageElementById(imageId)
    
  image
    .setLeft(0)
    .setTop(0)
    .setWidth(480)
    .setHeight(360)
    .sendToBack();
}
