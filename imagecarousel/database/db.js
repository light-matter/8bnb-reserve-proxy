const mongoose = require('mongoose');
const faker = require('faker');
// const Promise = require('bluebird');
// Promise.promisifyAll(mongoose);
// var {seedData} = require('./seedData.js');
mongoose.connect('mongodb://localhost/homes', {useNewUrlParser: true, useUnifiedTopology:true});

//testing the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Connected!");
});

var carouselSchema = mongoose.Schema({
  listingId: Number,
  homes: [{
      homeId:  Number, // Number for one of 10 similar homes, ids 1-10
      numberOfBeds: Number, //Number of beds
      formType: String, //type of home (ie entire cotttage, entire apartment)
      body: String, //Description of the similar home
      price: Number, //price per night
      rating: Number, //rating of the home
      numberOfRatings: Number, //number of ratings
      images: [String], //image array of home
      heart: Boolean, //favorite icon
      plus: Boolean, //plus status
      superhost: Boolean //superhost status
  }]

});


var Carousel = mongoose.model('Carousel', carouselSchema);

console.log('what is schema?', Carousel)

const getHomes = (callback) => {
  Carousel.find((err,homes)=> {
    if(err) {
      callback(err);
    } else {
      console.log('--------');
      callback(null,homes);
    }
  })
}

module.exports = {getHomes, Carousel};

// module.exports.getHomes = Promise.promisify(getHomes);
// module.exports.Carousel = Promise.promisify(Carousel);