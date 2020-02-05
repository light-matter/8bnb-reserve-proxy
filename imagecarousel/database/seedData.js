const faker = require('faker');
const mongoose = require('mongoose');
var {Carousel} = require('./db.js');
const {bodyArr} = require('./bodyData.js');
// const Promise = require('bluebird');
// Promise.promisifyAll(mongoose);

mongoose.connect('mongodb://localhost/homes', {useNewUrlParser: true, useUnifiedTopology:true});

const seedData = (num) => {

  //formType(type is a reserved word in mongoose)
  var formTypes = ['Entire cottage', 'Entire apartment', 'Entire House', 'Private Room', 'Shared Room']

  //40 images in the S3 bucket
  var bucket = [];
  for(var l = 1; l <= 40; l++) {
    var image = `https://8bnb-homes.s3-us-west-1.amazonaws.com/${l}.jpg`;
    bucket.push(image);
  }

  //function generates random number of images between 10-20.
  const randomNumImages = () => {
    var images = [];
    for(var j = 0; j < Math.floor(Math.random()*10)+10; j++) {
      //selects from the bucket of 40 images
      images.push(bucket[Math.floor(Math.random() * 39) + 1]);
    }
    return images;
  }

  //Heart toggle either true of false
  var heart = Math.random() >= 0.5;

  //similarHomes = array of similarHome.
  var similarHomes= [];
  //20 similar homes
  for(var k = 0; k < 20; k++) {
    var similarHome = {
      homeId:  Math.floor(Math.random() * 5) + 5,
      numberOfBeds: Math.floor(Math.random() * 5) + 1,
      formType: formTypes[Math.floor(Math.random() * formTypes.length)],
      // body: faker.random.words(),
      body: bodyArr[Math.floor(Math.random() * bodyArr.length)],
      price: (Math.random() * 240 + 60).toFixed(2),
      rating: (Math.random() * 1 + 4).toFixed(2), //high rating between 4 - 5
      numberOfRatings: Math.floor(Math.random() * 1000),
      images: randomNumImages(),
      heart: Math.random() >= 0.5,
      plus: Math.random() >= 0.5,
      superhost: Math.random() >= 0.5
    }
    similarHomes.push(similarHome);
  }

  for(var i = 0; i < num; i++) {
    var carousel = new Carousel ({
      listingId: i,
      homes: similarHomes
    })
    carousel.save(err => {
      if(err) {
        console.log(err);
      } else {
        console.log('success');
      }
    })

  }

  }

  seedData(100);


  module.exports = {seedData}