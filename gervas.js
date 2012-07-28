Movements = new Meteor.Collection("movements");
//Movements.remove({});

if (Meteor.is_client) {

  // Template.dashboard.timeleft = function () {
  //   return "3";
  // };
  
  Template.dashboard.result = function () {
    var Movs = Movements.find({});
    var sum = 0;
      Movs.forEach(function(Movs){
        sum += parseInt(Movs.value);
      });
    return sum;
  };

  Template.main.movements = function() {
    return Movements.find({}, {sort: {date: -1}});
  };

  Template.mov.events = {
    'click input.delete': function () {
      Movements.remove(this._id);
    }
  };

  Template.new_movement.events = {
    'click input.add': function () {
      var new_movement_name = document.getElementById("new_movement_name").value;
      var new_movement_value = document.getElementById("new_movement_value").value;      
      var new_movement_date = document.getElementById("new_movement_date").value;      
      Movements.insert({name: new_movement_name, value: new_movement_value, date: Date.parse(new_movement_date)});
    }
  };
}
if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}