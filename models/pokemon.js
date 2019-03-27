var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pokemonSchema=new Schema({
    pokedex_number:Number,
    name:String,
    attack:Number,
    defense:Number,
    speed:Number,
    sp_attack:Number,
    sp_deffense:Number,
    maintype:String,
});

module.exports = mongoose.model('pokemon',pokemonSchema)