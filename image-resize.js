// http://sharp.dimens.io/en/stable/api/
var sharp = require('sharp');

sharp('failure.jpg')
  .resize(300, 200)
  .toFile('output.jpg', function(err, metadata) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
    if(err) {
      console.log(err);
      return;  
    }
    
    console.log(metadata);

  });