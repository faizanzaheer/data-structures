function Stack() {

  var storage = [];
  Stack.add = function(value){
  this.storage.push(value);
  }
  Stack.remove = function(){
  if(this.storage.length){
    return this.storage.shift()
    //we'll get the thing which we just dequeued
    }
  }
  Stack.size = function(){
    return this.storage.length;
  }

}
