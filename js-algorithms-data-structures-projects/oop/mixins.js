/*
Sometimes you may want to share methods between multiple unrelated objects, and inheritance is not the best way.

So instead, use a mixin function to add methods/properties to multiple objects
*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Mixins are functions that add methods or properties to an object when called
let glideMixin = function(obj) { // pass in an object
    obj.glide = function() { // add method/property
        console.log(obj.name +" is gliding");
    }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();  // Donald is gliding
boat.glide();  // Warrior is gliding
