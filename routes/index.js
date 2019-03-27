var express = require('express');
var router = express.Router();
var PokemonCollection=require("../models/pokemon")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pokedex/:pokemon',(req,res)=>{
  res.send("Get all the pokenmons")
});
router.post('/pokedex/:pokemon/',(req,res)=>{
PokemonCollection.create({
  pokedex_number: req.body.pokedex_number,
  name:req.body.name,
  hp:req.body.hp,
  attack:req.body.attack,
  defense: req.body.defense,
  speed:req.body.speed,
  sp_attack:req.body.sp_attack,
  sp_deffense: req.body.sp_deffense,
  maintype: req.body.maintype
}),(errors)=>{
  if (errors) res.send(errors);
  else{
    res.redirect("/")
  }
};
  res.send("create a pokemon")
});
router.get('/pokedex/pokemon/:id',(req,res)=>{
  res.send("Get one pokemon")
});
router.put('/pokedex/pokemon',(req,res)=>{
  res.send('Update pokemons ')
});
router.delete('/pokedex/pokemon',(req,res)=>{
  res.send("Delete a pokemon")
});

module.exports = router;
