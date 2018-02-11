var express = require('express');
var router = express.Router();

var user = require("../controllers/userController");
var path = require('path');

router
    .route('/login')
    .post(user.postLoginDetails);


router
    .route('/users/:mood')
    .get(user.getSuggestions);

router
    .route('/users/favorite')
    .post(user.saveSuggestions);


router
    .route('/user/:userID/:suggestionID/location')
    .get(user.getLocations);
// router
//     .route('/hotels')
//     .get(getHotels.getAllHotels)
//     .post(getHotels.postHotel);
//
// router
//     .route('/hotels/:hotelId')
//     .get(getHotels.getOneHotel)
//     .put(getHotels.updateHotel)
//     .delete(getHotels.deleteHotel);
//
// router
//     .route('/hotels/:hotelId/review')
//     .get(getReview.getHotelReviews)
//     .post(getReview.postHotelReviews);
//
// router
//     .route('/hotels/:hotelId/review/:reviewId')
//     .get(getReview.getOneReview)
//     .put(getReview.updateReview)
//     .delete(getReview.deleteReview);


module.exports = router;