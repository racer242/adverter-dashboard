(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 311, 135);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 311, 135);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 311, 315);
 (lib.car = function() {
  this.initialize(img.car);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 477, 264);
 (lib.style = function() {
  this.initialize(img.style);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 119, 41);

 function mc_symbol_clone() {
  var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
  clone.gotoAndStop(this.currentFrame);
  clone.paused = this.paused;
  clone.framerate = this.framerate;
  return clone;
 }

 function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
  var prototype = cjs.extend(symbol, cjs.MovieClip);
  prototype.clone = mc_symbol_clone;
  prototype.nominalBounds = nominalBounds;
  prototype.frameBounds = frameBounds;
  return prototype;
 }
 (lib.ClipGroup_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AicCeQhChBAAhdQAAhcBChBQBBhBBbAAQBcAABCBBQBBBBAABcQAABdhBBBQhCBBhcAAQhbAAhBhBg");
  mask.setTransform(22.3, 22.85);
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#030304").s().p("AgFASIAAgjIALAAIAAAjg");
  this.shape.setTransform(35.175, 1.825);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#030304").s().p("AgFASIAAgjIALAAIAAAjg");
  this.shape_1.setTransform(35.175, 43.775);
  var maskedShapeInstanceList = [this.shape, this.shape_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(34.6, 0.6, 1.1999999999999957, 44.6), null);
 (lib.ClipGroup = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AicCeQhChBAAhdQAAhcBChBQBBhBBbAAQBcAABCBBQBBBBAABcQAABdhBBBQhCBBhcAAQhbAAhBhBg");
  mask.setTransform(22.3, 22.85);
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#030304").s().p("AgFASIAAgjIALAAIAAAjg");
  this.shape.setTransform(35.175, 1.825);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#030304").s().p("AgFASIAAgjIALAAIAAAjg");
  this.shape_1.setTransform(35.175, 43.775);
  var maskedShapeInstanceList = [this.shape, this.shape_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(34.6, 0.6, 1.1999999999999957, 44.6), null);
 (lib.t05 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0022").s().p("ACADDQgNgOAAgYQAAghASgWQAUgYAhAAQAZAAAOAOQANAOAAAYQAAAigSAWQgUAXggAAQgaAAgOgOgAClB4IgEAYIgCAUQAAARAMAAQAMAAAGgOQACgGACgRIACgVQAAgRgNAAQgMAAgFAOgAhqDDQgOgOAAgYQAAghATgWQATgYAhAAQAaAAAOAOQAMAOAAAYQAAAigRAWQgUAXghAAQgaAAgNgOgAhGB4QgCAFgCATIgCAUQAAARANAAQALAAAGgOQACgGACgRIACgVQAAgRgNAAQgMAAgFAOgAG2DPIAEgBIAFgCIAAgFQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgCAAIABgEQADgDgBgJQgBgJgCgBQgFgCABgHIALgWQAFgOABgKQABgFAGgSQAGgNgEgKQgBgFABgNQAAgKAHgUQAGgUABgJQABgGgCgIIgDgOIABgCIgBACQgBAEgCgCIgCgBIADAFIACAHQABAGAAANIgBACIgDgDIgCgDQgCgDgDAAIACAEIABAAIABABIgFAJIgCABIgCgBQgJgDADgLIAFgNQADgGAFgEIABgCIgGgDIgFgDIAFgCIAGgCIAHAAQgFgCgEACIgIACIgBABIgCAAIAAgBQAHgLADgPQACgJACgSQAAgYACgLQADgTALgNIAEgIIAAgDIgCABQgBACgJALQgHAJAAAHQgGAoAAAUQAAAHgFAKIgHAPIgCACIgCgCIgCgCIgBABQgCAEgEAAIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgRQgBgGACgKIAAgQQgBgbgBgMQgCgVgIgRIgGgJIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAIADADIAEAGIAAABIgBAAQgEgCgDgGIgBgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADgCQAGgEAJgBIAMgBIADgBIghABIABAAIAIABIgHACQgNAGAAAHIADgCIABABIgBAGIgDgCQAAAFADAFIAGANIACAEIgCgGIAAgBIABABQAFAQgBAPIgBAYQABgYgDgYQAAAFgCAHQgDAIAAAEIgDAPIgBAOQgCAFAAAfIAAACIACAAQABgGACgDIABgJQABgdAEgbQACAdgEAWQgEAbgOAWIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIABgEIABAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIADgEIABgGIAAgDIgBACQgBgBAAABQgBAAAAAAQAAAAAAABQAAABAAABQAAABAAAAQgBAAAAAAQAAAAgBAAQgBgBgBgBIgBABIgBAAIgCAEIgBgSIgBgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIADgCIAAgEQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBABAAQAAgBgBgBIAAgDIAAAEIgBgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgBABIgDAAIAAgEIADAAIACgBIABgGIgDgBIgDAAIAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgHgDACgCQACgCAEgDIACgDIgCgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAgFIACgXQAAgOgHgJQgDgEgGgDIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQABgBAAAAQADgHAHgDQAFgCAJgBIABgBICYAAIg6GfgAGCg/QAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgFgEABIgCAAIABAEgAHVixQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAEABIAHAAIAEAAIgFgBIgEAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAGAAIAGgCQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIACgEIgDAEQgDADgFAAIgLgBQgGAAABAGgAHVi/QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAFAAIASAAIACgBIgCAAQgPABgFgBIgCgBIACgCIAWgCIAAgBIgUgBQgIABABAFgAD8DPIA6mfIBPAAIgQADQgJACgEAGIgCAEIADgCIAAABIAAACQABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAABAAIAGAaQADAPAAAMQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgWgFgYAMQgDABgBAGQAAAAAAABQAAAAABAAQAAABABAAQABAAAAAAIABABIAAABIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIACACQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAFgCAGABIAMACQAGAAgBAHQgRBKAPA3IAAABIAAAAIgBgCIAAAEIABAKIACAKIAQAwQAIAbABAXIABAKQAAAHgEAEQgDAEgBAIQAAAJACADIABAFIgDABIgBgBIgBgDIgCADIAAAEIABAEIABABgAABDPIAFgiIAogWQAWgOAAgOQAAgIgHgEQgGgEgJAAQgPAAgNAGIADgfQAXgEASAAQAyAAAAAkQAAATgQAQQgLAMgWALIgLAGIAAAAIAzAAIgEAdgAjpDPIAEgiIApgWQAVgOAAgOQAAgIgGgEQgGgEgJAAQgQAAgNAGIADgfQAXgEASAAQAyAAAAAkQAAATgQAQQgLAMgWALIgMAGIAAAAIA1AAIgEAdgAF/DHQgDAAgCgDIAAAAIAMACIgCABIgFAAgAGqC7QACgEgCgEQgEgEgGACQgFABgHgDQgBAAAAgIIAAgPIACAEQAAgFABgGIALggQAHgSAGgNQACgEAAgMQAAgMACgFIACgNIACgCIAAABQAKAUABAYQAAAngTAqQgEAHgGgBQgFAAgHgDQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAADQgBAFAEAAIAHABIAKACQgCACgCAAIgGAAIgBABIACADIACAAIAFgBIgFAAQADgBAHABQAFgCABgGQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADABIgCACIgBABIADABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCAAIgDABQABABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQgBABAAAAQAAABAAABQAAAAABABQAAAAABABQAEABgBAGIgDABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgIABQgDAAADgIgAF9DBQgEgBABgFIAAgHQgCgFACAAIAJAAIAJACIgBAAQgFgBgBACIAAAHIgBAIQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgFgCgAGLCsIABgDQABgDAAgGIAAgKIAAgDIACAEIABAEIgBAPQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAAAAIgCgBgAF+CmIAAgBIABgKIACAHIABgBIABgWQgBgJgBgRIgDgcIgCgJIAAgSIADAHIACAHIAJAqQAFAagDASQgCAFgDABQgBABgFACIgDgBgAGuClIAAgBIACgGQAPgnADgbIABgPIAAAFIAAgCIAAgBIABgDIAAABQAAAVgHAXIgMApIgCAEIgBgBgAGWB5QAHgcABgIQAGgZgFgRIABgDIAFAaQgCAYgNAgIAAABgAGWBxIAAgUIgBgJIgBgJIABgPIAAgLQgCgEADgCIAGgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAEQADAPgDASQgCAOgGATIAAAAgAkJBQIAPgaIgVhFIAaAAIAMApIASgpIAbAAIgwBfgAljBQIALhDIAAAAIgOAQQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAgBIgBAAQgBAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAJgVAMgHIADgWIAZAAIgBAJQAFgBAJAAQAPAAAHAJQAIAIAAAOQAAAXgOANQgMALgUAAIgJgBIgEATgAk9AEIgGAmIAFABQAKAAAGgJQAFgGABgLQgBgHgDgEQgEgEgGAAQgEAAgDACgAGEBFQgFgMACgGIABgCIAFARIgBADIABAJIgDgJgAhtAzQgHgJAAgNQABgVAKgLQALgOAVAAQAUAAAHAQQAHAKgEAUIguAAQgBAQARAAQAPAAAMgIIgDAUQgMAGgSAAQgVAAgJgMgAhYAQIAWAAQACgQgLAAQgMAAgBAQgAjPArQAIgBACgCQAEgCACgEQADgGAHgaIADgRIA+AAIgMBMIgZAAIAJg5IgPAAIgFAVQgEARgFAIQgKALgUACgAnEAiQAAgYAOgNQAQgNAWAAIAdABIgNBMIgYAAIABgIIAAAAQgIAKgNAAQgYAAAAgdgAmlALQgFAIgBALQgBAGAEAEQACADAEAAQAHAAAGgFIAFgjIgDgBQgLAAgHAJgAocA2IADgXQARAJAQAAQASAAAAgMQgBgLgPAAIgQAAIADgUIAPAAQATAAgBgMQAAgJgQAAQgQABgPAIIAEgYQAPgGAUAAQAOAAAJAFQAMAIAAAOQABASgSAFQAIADADAGQADAGAAAIQAAARgOAKQgNAIgSAAQgWAAgPgJgAAkA9IABgoIgWAoIgNAAIgKgnIgJAnIgYAAIAShMIAaAAIAMAlIAUglIAaAAIAABMgAHCA4IgGgYIAAgBIAAABIAHAWIAAADgAGNA1IgDgEIgBgEIABgLQAAgGgBgEQgCgCAAgEIgCgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQADgBAFAEIADAEQAAABAAAAQABAAAAgBQABAAAAAAQABgBAAgBIABAAIAAABIgCAGQgCAFgFgGIgBAAIAAABIAAADIAAgBIABAEIADAOQAAAHgDAGQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgBAAgAFxAsIgHgEQgEgBgBgEQACgIgBgHIAAgBIABABQAFAKAIADQAFABgCAGQAAAAAAAAQgBABAAAAQAAABABAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgEgBgAGVAoIABgBIAcgKIAAAAIAEgBIgGADQgSAJgIABgAGUAiIAKgDIAJgBIgRAHIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBgAG1AUQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBIABgFIABABIAAAHQgBAEgDABgAFfAIQgIgXABgXQAAgfAJgjIACgCIABADIgHAkQgEAWABAQQADAZADALIAAADgAGrABIgCgBIAAgEIABgFIASgUIACAAQAAAAAAABQAAAAAAABQABAAABAAQABAAACAAQAFgBgGAFQgGADgCAHIgCALIgBACIgBABgAFygjQgDgVgBgLIABgTIABgUIAAgBQAHgHgEAAIgHABQgJgDADgIQABgDAHAAIADABIgDgBIgEgBQgGAAgEAHQAAADgGAAIgGgCQgFACgDgBQgEAAgCgFIAAgCIACAAIACACIgCgDQAAAAAAAAQgBAAAAgBQAAAAAAAAQABAAAAgBIABAAQAbgKAdAKIABACIgBABQgOAAAEAOQAEAXgBAKQgBAHABAMIABAMIADAKQAAABAAAAQAAAAABAAQAAABABAAQAAAAABABQABAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgDAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHgBgCgIgAGDgcIAAgBQAJgIAGgOIgHAPIAAABIABgBIABAAIgCAEIgGAFgADqggIAKg8IgaA8IgvAAIANhTIAdAAIgKA6IAYg6IAxAAIgOBTgABNggIAOhTIA1AAQAOAAAGAGQAKAHgDAPQgCAQgKAIQgKAHgNAAIgWAAIgFAYgABzhLIAHAAQAQAAABgLQACgKgQAAIgHAAgAAhggIAKg7IgWAAIgJA7IgfAAIANhTIBVAAIgOBTgAhlggIADgeIgVAAIgEAeIggAAIAMhTIAhAAIgFAcIAVAAIAGgcIAfAAIgNBTgAjBggIgDgSIgaAAIgJASIgfAAIAqhTIAsAAIARBTgAjXhGIASAAIgEgbIgBAAgAlRggIAOhTIA2AAQAMAAAHAGQAJAHgCAPQgDAQgKAIQgJAHgNAAIgYAAIgDAYgAkrhLIAGAAQARAAABgLQACgKgQAAIgHAAgAmhggIAOhTIBHAAIgDAYIgpAAIgJA7gAg6g2IAEgUIAhAAIgEAUgAFwiHIgBgJIABAAIgCgUIAAgBIABABQACANAAAQIgBABg");
  this.shape.setTransform(218.2, 37.975);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ap0EgIAAo/ITpAAIAAI/g");
  this.shape_1.setTransform(217.925, 38.825);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(155, 10, 125.89999999999998, 57.7), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAqBAIgPgqIg1AAIgQAqIgNAAIAxh/IANAAIAxB/gAAWALIgWg7IgWA7IAsAAg");
  this.shape.setTransform(302.8, 57.9);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARABALAIQAKAJAAAOQAAAKgEAGQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAEQgJAFgMAAgAgbA0IAbAAQAOAAAGgGQAHgHABgLQgBgLgGgGQgHgGgLAAIgeAAgAgbgFIAYAAQAGAAAFgDQAGgEADgFQADgGAAgGQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_1.setTransform(291.775, 57.9);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgiA5QgOgIgJgPQgJgPABgTQgBgSAJgPQAJgPAPgIQAPgJASAAQATAAAPAJQAPAIAIAPQAJAPAAASQAAATgJAPQgIAOgPAJQgPAIgTABQgTgBgPgIgAgagtQgMAHgHAMQgHALAAAPQAAAPAHAMQAHAMAMAHQAMAHAOAAQAQAAALgHQAMgHAHgMQAGgMABgPQgBgPgGgLQgHgMgMgHQgLgHgQAAQgOAAgMAHg");
  this.shape_2.setTransform(278.05, 57.925);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgaA8QgLgFgHgHIAHgLIAJAIQAFAEAIACQAGACAJABQAOgBAIgGQAKgHgBgMQABgNgLgGQgLgGgWAAIAAgLQAPAAAIgEQAKgDACgGQAEgFAAgGQgBgKgGgFQgIgGgMAAQgKAAgHAEQgJAEgGAFIgGgKQAHgGAKgFQAJgEANAAQAMAAAIAEQAJAEAFAHQAFAHAAAKQAAAMgIAIQgGAHgNADQAPACAJAHQAHAIABAOQAAALgGAJQgEAIgLAFQgKAFgOAAQgQAAgKgGg");
  this.shape_3.setTransform(264.8, 57.925);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgiBAIgJgDIADgMIAHADIAIABQAIAAAFgFQAFgFAEgIIgyhjIAPAAIApBUIAlhUIAOAAIgrBiQgEAJgFAHQgDAHgGAEQgHAEgKAAIgKgBg");
  this.shape_4.setTransform(254.375, 58);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_5.setTransform(243.925, 57.925);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_6.setTransform(226.025, 57.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAmBQIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/gAgThAQgHgFAAgKIAJAAQABAGAFADQAFACAGAAQAIAAAFgCQAEgDABgGIAKAAQgBAKgIAFQgHAFgMAAQgMAAgHgFg");
  this.shape_7.setTransform(212.325, 56.275);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAqBAIgPgqIg1AAIgPAqIgOAAIAxh/IANAAIAxB/gAAWALIgWg7IgWA7IAsAAg");
  this.shape_8.setTransform(199.45, 57.9);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgaA8QgLgFgHgHIAHgLIAJAIQAGAEAGACQAIACAIABQAOgBAIgGQAJgHAAgMQAAgNgLgGQgKgGgVAAIAAgLQAOAAAIgEQAJgDAEgGQADgFAAgGQAAgKgIgFQgGgGgNAAQgKAAgHAEQgJAEgGAFIgGgKQAHgGAKgFQAKgEALAAQAMAAAJAEQAJAEAFAHQAFAHAAAKQgBAMgGAIQgIAHgMADQAPACAIAHQAJAIAAAOQAAALgGAJQgEAIgLAFQgKAFgOAAQgPAAgLgGg");
  this.shape_9.setTransform(188.05, 57.925);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAmBAIAAhqIhLBqIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_10.setTransform(176.075, 57.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEgBADgEQADgDADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBAMgDAIQgDAIgDACIA7AAIAAhnIgpAAg");
  this.shape_11.setTransform(162.925, 59.4);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAmBQIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/gAgThAQgHgFAAgKIAJAAQABAGAFADQAFACAGAAQAIAAAFgCQAEgDABgGIAKAAQgBAKgIAFQgHAFgMAAQgMAAgHgFg");
  this.shape_12.setTransform(283.675, 35.625);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAOAAIAAB/gAg9BAIAAh/IAOAAIAAA3IAcAAQAUAAAKAIQAKAKAAAQQAAALgEAJQgFAJgJAFQgIAEgOAAgAgvA0IAaAAQAPAAAGgHQAIgGAAgNQgBgMgHgGQgHgFgOAAIgaAAg");
  this.shape_13.setTransform(268.775, 37.25);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_14.setTransform(254.025, 37.25);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgGBAIAAhyIgkAAIAAgNIBVAAIAAANIgkAAIAAByg");
  this.shape_15.setTransform(242.6, 37.25);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAANIg3AAIAAAtIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_16.setTransform(233.025, 37.25);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAJgEAHQgEAHgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgFgLgBIgeAAgAgbgFIAYAAQAGAAAFgEQAGgDADgFQADgGAAgGQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_17.setTransform(222.575, 37.25);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAsBPIAAgeIhjAAIAAh/IANAAIAABzIBGAAIAAhzIAOAAIAABzIAOAAIAAAqg");
  this.shape_18.setTransform(210.475, 38.75);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAkBAIgkg2IgjA2IgPAAIAshAIgsg/IARAAIAhA0IAkg0IAOAAIgrA/IAsBAg");
  this.shape_19.setTransform(197.2, 37.25);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgiBAIgJgDIADgMIAHADIAIABQAIAAAFgFQAFgEAEgKIgyhiIAPAAIApBVIAlhVIAOAAIgrBhQgEAKgFAHQgDAHgGAEQgHAEgKAAIgKgBg");
  this.shape_20.setTransform(185.775, 37.35);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAJgEAHQgEAHgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgFgLgBIgeAAgAgbgFIAYAAQAGAAAFgEQAGgDADgFQADgGAAgGQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_21.setTransform(175.075, 37.25);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEAAADgEQADgEADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBAMgDAIQgDAHgDADIA7AAIAAhmIgpAAg");
  this.shape_22.setTransform(162.925, 38.75);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAmBQIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/gAgThAQgHgFAAgKIAJAAQABAGAFADQAFACAGAAQAIAAAFgCQAEgDABgGIAKAAQgBAKgIAFQgHAFgMAAQgMAAgHgFg");
  this.shape_23.setTransform(309.475, 14.975);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAOAAIAAB/gAg9BAIAAh/IAOAAIAAA3IAcAAQAUAAAKAIQAKAKAAARQAAALgEAIQgFAIgJAGQgIAEgOAAgAgvA0IAaAAQAPAAAGgHQAIgGAAgMQgBgNgHgFQgHgHgOAAIgaAAg");
  this.shape_24.setTransform(294.575, 16.6);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_25.setTransform(279.825, 16.6);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IANAAIAAA3IAbAAQAVAAALAIQAKAKgBARQAAALgEAIQgEAIgKAGQgJAEgOAAgAgbA0IAaAAQAOAAAIgHQAHgGAAgMQAAgNgIgFQgHgHgOAAIgaAAg");
  this.shape_26.setTransform(268.1, 16.6);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgtBAIgEgCIACgMIADACIAGAAQAEAAADgEQACgEABgIIAKhkIBFAAIAAB/IgOAAIAAhyIgsAAIgJBbQgBAMgEAGQgGAGgKABIgIgBg");
  this.shape_27.setTransform(255.3, 16.675);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_28.setTransform(245.375, 16.6);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgFBAIAAhzIgkAAIAAgMIBTAAIAAAMIgjAAIAABzg");
  this.shape_29.setTransform(235.35, 16.6);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAmBAIAAhqIhLBqIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_30.setTransform(223.775, 16.6);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgbA8QgKgFgHgHIAHgLIAJAIQAFAEAIACQAHACAIABQAOgBAJgGQAJgHAAgMQgBgNgKgGQgLgGgWAAIAAgLQAPAAAJgEQAIgDADgGQADgFAAgGQAAgKgGgFQgIgGgMAAQgJAAgJAEQgIAEgGAFIgGgKQAHgGAKgFQAJgEAMAAQANAAAIAEQAJAEAFAHQAFAHAAAKQAAAMgIAIQgHAHgLADQAOACAIAHQAJAIAAAOQAAALgFAJQgGAIgKAFQgKAFgOAAQgQAAgLgGg");
  this.shape_31.setTransform(211.4, 16.625);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgQAqIgNAAIAxh/IANAAIAxB/gAAXALIgXg6IgVA6IAsAAg");
  this.shape_32.setTransform(200.4, 16.6);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANABAKAEQAJAFAFAJQAFAJAAALQAAAMgFAIQgFAJgJAFQgKAGgNABIgWAAIAAAvgAgZAEIAVAAQAHAAAHgDQAHgDAEgGQAEgGAAgKQAAgKgEgGQgEgGgHgDQgHgCgHAAIgVAAg");
  this.shape_33.setTransform(189.725, 16.6);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAOAAIAAB/gAg9BAIAAh/IAOAAIAAA3IAcAAQAUAAAKAIQAKAKAAARQAAALgEAIQgFAIgJAGQgIAEgOAAgAgvA0IAaAAQAPAAAGgHQAIgGAAgMQgBgNgHgFQgHgHgOAAIgaAAg");
  this.shape_34.setTransform(176.025, 16.6);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARABALAIQAKAJAAAOQAAAKgEAGQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgLQgBgLgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGAAAFgDQAGgEADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_35.setTransform(162.975, 16.6);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_35
   }, {
    t: this.shape_34
   }, {
    t: this.shape_33
   }, {
    t: this.shape_32
   }, {
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(155, 0, 181.5, 71), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAoCmQgVgZAAgvQAAgtAVgZQAUgZAlAAQAkAAAUAZQAUAZAAAtQAAAvgUAZQgUAZgkAAQglAAgUgZgAA+ArQgLARAAAiQAAAjALASQAMARAXAAQAWAAAMgRQALgSAAgjQAAgigLgRQgMgSgWAAQgXAAgMASgAh+C8IDdl3IAgAAIjdF3gAiZgWQgTgaAAguQAAgtATgaQAUgZAlAAQAlAAAUAZQAVAaAAAtQAAAugVAaQgUAYglAAQglAAgUgYgAiBiSQgMASAAAiQAAAjAMARQALASAWAAQAXAAALgSQAMgRAAgjQAAgigMgSQgLgRgXAAQgWAAgLARg");
  this.shape.setTransform(374.9, 43.425);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAmC8IAAhUIipAAIAAgZIC0kKIAcAAIAAEAIA3AAIAAAjIg3AAIAABUgAhXBFIB9AAIAAi6g");
  this.shape_1.setTransform(344.825, 43.425);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(327.8, -1.6, 181.39999999999998, 79.6), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgPAqIgOAAIAxh/IANAAIAxB/gAAXAMIgXg8IgVA8IAsAAg");
  this.shape.setTransform(319.3, 55.9);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_1.setTransform(309.025, 55.925);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAOQAAAJgEAIQgEAHgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAEQgJAFgMAAgAgbA0IAbAAQAOAAAGgGQAHgHABgLQgBgLgGgGQgHgFgLgBIgeAAgAgbgFIAYAAQAGgBAFgCQAGgEADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_2.setTransform(297.925, 55.9);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgPAqIgOAAIAxh/IANAAIAxB/gAAXAMIgXg8IgVA8IAsAAg");
  this.shape_3.setTransform(286.55, 55.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgGBAIAAhyIgkAAIAAgNIBVAAIAAANIgkAAIAAByg");
  this.shape_4.setTransform(276.45, 55.9);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgXA5QgPgIgIgPQgIgPAAgTQAAgTAIgOQAIgPAPgIQAQgJARAAQANAAALAEQAKAEAKAGIgGANQgHgGgKgEQgKgEgLAAQgOAAgMAHQgMAHgGALQgHAMAAAPQAAAPAHAMQAHAMALAHQAMAHAOAAQANAAAKgEQALgEAHgHIAEANQgKAHgKAEQgMAEgNAAQgSgBgPgIg");
  this.shape_5.setTransform(266, 55.925);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAfBAIAAg1IgYAAIgCAAIgBAAIggA1IgPAAIAjg4QgLgEgGgJQgGgJgBgMQABgRAKgKQALgKASAAIAlAAIAAB/gAgEgxQgFADgFAGQgDAFAAAJQAAAJADAGQAEAGAGACQAFADAHAAIAXAAIAAgzIgVAAQgIAAgGACg");
  this.shape_6.setTransform(249.4, 55.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgPAqIgOAAIAxh/IANAAIAxB/gAAWAMIgWg8IgWA8IAsAAg");
  this.shape_7.setTransform(238.95, 55.9);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_8.setTransform(226.725, 55.9);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgFBAIAAhyIgkAAIAAgNIBUAAIAAANIgkAAIAAByg");
  this.shape_9.setTransform(215.8, 55.9);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAmBAIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_10.setTransform(204.725, 55.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEgBADgDQADgEADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBAMgDAIQgDAHgDADIA7AAIAAhmIgpAAg");
  this.shape_11.setTransform(192.075, 57.4);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAANIg3AAIAAAtIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_12.setTransform(181.775, 55.9);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANAAAKAFQAJAFAFAJQAFAIAAANQAAAKgFAJQgFAJgJAGQgKAFgNAAIgWAAIAAAwgAgZAEIAVAAQAHAAAHgDQAHgCAEgHQAEgGAAgJQAAgLgEgGQgEgGgHgDQgHgCgHAAIgVAAg");
  this.shape_13.setTransform(172.175, 55.9);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_14.setTransform(162.125, 55.925);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAfBAIAAg2IgYAAIgBAAIgCAAIgfA2IgRAAIAkg4QgLgFgGgIQgGgJgBgMQABgRALgKQAKgJASgBIAlAAIAAB/gAgEgwQgFACgFAGQgDAFAAAJQAAAJADAGQAEAGAGADQAFACAHAAIAXAAIAAgzIgWAAQgHAAgGADg");
  this.shape_15.setTransform(279.85, 36.25);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAqBAIgPgpIg1AAIgQApIgNAAIAxh/IANAAIAxB/gAAWAMIgWg7IgWA7IAsAAg");
  this.shape_16.setTransform(269.4, 36.25);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_17.setTransform(257.175, 36.25);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IANAAIAAA3IAbAAQAWAAAKAIQAKAKAAAQQgBALgEAJQgEAJgJAFQgKAEgOAAgAgbA0IAaAAQAOAAAIgHQAHgGAAgNQAAgLgIgHQgIgFgNAAIgaAAg");
  this.shape_18.setTransform(245.95, 36.25);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgtBAIgFgCIADgMIAEACIAEAAQAFAAACgEQADgEABgIIAJhkIBFAAIAAB/IgNAAIAAhyIgrAAIgJBbQgCAMgFAGQgFAGgLABIgHgBg");
  this.shape_19.setTransform(233.65, 36.325);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AAqBAIgQgpIg0AAIgPApIgOAAIAxh/IANAAIAxB/gAAWAMIgWg7IgWA7IAsAAg");
  this.shape_20.setTransform(223.2, 36.25);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AAmBAIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_21.setTransform(210.825, 36.25);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAsBPIAAgeIhjAAIAAh/IANAAIAABzIBGAAIAAhzIAOAAIAABzIAOAAIAAAqg");
  this.shape_22.setTransform(198.225, 37.75);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAANIg3AAIAAAtIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_23.setTransform(186.375, 36.25);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAjBAIAAhyIhFAAIAAByIgOAAIAAh/IBhAAIAAB/g");
  this.shape_24.setTransform(174.775, 36.25);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgXA5QgOgIgJgPQgJgPABgTQgBgTAJgOQAJgPAOgIQAQgJARAAQANAAALAEQAKAEAKAGIgGANQgHgGgKgEQgJgEgMAAQgOAAgMAHQgLAHgHALQgGAMgBAPQABAPAGAMQAHAMALAHQANAHANAAQANAAAKgEQAKgEAIgHIAEANQgKAHgKAEQgMAEgNAAQgSgBgPgIg");
  this.shape_25.setTransform(162.3, 36.275);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_26.setTransform(234.875, 16.6);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANABAKAEQAJAFAFAJQAFAJAAALQAAAMgFAIQgFAJgJAFQgKAGgNABIgWAAIAAAvgAgZAEIAVAAQAHAAAHgDQAHgDAEgGQAEgGAAgKQAAgKgEgGQgEgGgHgDQgHgCgHAAIgVAAg");
  this.shape_27.setTransform(225.275, 16.6);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IBCAAIAAAMIg1AAIAAArIAcAAQAUAAALAIQAKAKgBARQAAALgEAIQgEAIgKAGQgJAEgNAAgAgbA0IAaAAQAOAAAIgHQAHgGAAgMQAAgNgIgFQgHgHgOAAIgaAAg");
  this.shape_28.setTransform(215.1, 16.6);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAfBAIAAg2IgYAAIgBAAIgCAAIgfA2IgRAAIAkg4QgLgFgGgIQgGgJgBgMQABgRALgKQAKgJASgBIAlAAIAAB/gAgEgxQgFADgFAFQgDAGAAAJQAAAKADAFQAEAGAGADQAFACAHAAIAXAAIAAgzIgVAAQgIAAgGACg");
  this.shape_29.setTransform(203.35, 16.6);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgiA5QgOgIgJgPQgIgPAAgTQAAgSAIgPQAJgPAPgIQAOgJATAAQATAAAPAJQAPAIAJAPQAIAPABASQgBATgIAPQgJAOgPAJQgPAIgTABQgSgBgQgIgAgbgtQgLAHgHAMQgHALAAAPQAAAPAHAMQAHAMALAHQANAHAOAAQAQAAALgHQAMgHAHgMQAGgMAAgPQAAgPgGgLQgHgMgMgHQgLgHgQAAQgOAAgNAHg");
  this.shape_30.setTransform(191.05, 16.625);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_31.setTransform(176.975, 16.6);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARABALAIQAKAJAAAOQAAAKgEAGQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgLQgBgLgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGAAAFgDQAGgEADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_32.setTransform(161.525, 16.6);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_32
   }, {
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(153.6, 0, 181.4, 69), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(61, 27, 0.6639, 0.6634);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(61, 27, 79, 27.200000000000003), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAJBHIAAgcIg8AAIAAgSIA9hfIAZAAIAABcIARAAIAAAVIgRAAIAAAcgAgaAWIAjAAIAAg4g");
  this.shape.setTransform(54.275, 40.5);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgOBHIgziNIAdAAIAkBuIAlhuIAdAAIgzCNg");
  this.shape_1.setTransform(42.425, 40.5);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAnBHIgOgoIgyAAIgOAoIgbAAIA0iNIAdAAIA0CNgAARAKIgRgyIgRAyIAiAAg");
  this.shape_2.setTransform(29.325, 40.5);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAXBHIggg4IgSAAIAAA4IgbAAIAAiNIAyAAQAOAAALAFQAKAGAGAJQAFAJAAAMQAAAOgHALQgGAJgNAGIAnA8gAgbgFIATAAQAGAAAEgCQAGgCADgFQADgFAAgIQAAgKgHgFQgGgGgJAAIgTAAg");
  this.shape_3.setTransform(16.975, 40.5);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAnBHIgOgoIgyAAIgOAoIgbAAIA0iNIAdAAIA0CNgAARAJIgRgxIgRAxIAiAAg");
  this.shape_4.setTransform(81.925, 17);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgMBHIAAh2IgmAAIAAgXIBlAAIAAAXIglAAIAAB2g");
  this.shape_5.setTransform(69.9, 17);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AglBAQgRgKgKgPQgJgRgBgWQABgVAJgRQAKgQARgJQAQgJAVAAQAVAAASAJQAQAJAKAQQAKARAAAVQAAAWgKAQQgKARgQAIQgSAKgVAAQgVAAgQgJgAgXgoQgKAGgGALQgGAKAAANQAAAOAGAKQAGAMAKAFQALAGAMABQAOgBAKgGQAKgFAHgMQAFgKAAgOQAAgNgFgKQgHgLgKgGQgKgHgOAAQgMAAgLAHg");
  this.shape_6.setTransform(56.5, 17);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgNBHIAAg4IgvhVIAdAAIAgA9IAig9IAbAAIgxBWIAAA3g");
  this.shape_7.setTransform(42.6, 17);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AglBAQgRgKgJgPQgKgRAAgWQAAgVAKgRQAJgQARgJQARgJAUAAQAWAAAQAJQARAJAKAQQAJARAAAVQAAAWgJAQQgKARgRAIQgQAKgWAAQgUAAgRgJgAgXgoQgLAGgFALQgGAKAAANQAAAOAGAKQAFAMALAFQAKAGANABQAOgBAKgGQALgFAFgMQAHgKgBgOQABgNgHgKQgFgLgLgGQgKgHgOAAQgNAAgKAHg");
  this.shape_8.setTransform(28.65, 17);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgNBHIAAh2IglAAIAAgXIBlAAIAAAXIglAAIAAB2g");
  this.shape_9.setTransform(15.3, 17);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(7.8, -1.2, 181.5, 56), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
  this.shape.setTransform(393.275, 79.075);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAUIAQgUIgQgTIAHAAIARATIgRAUgAgWAUIARgUIgRgTIAIAAIAQATIgQAUg");
  this.shape_1.setTransform(389.325, 76.9);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGABACgDQACgDAAgEQAAgEgDgDQgCgCgGAAIgMAAg");
  this.shape_2.setTransform(383.25, 77);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_3.setTransform(376.675, 78);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgBQAFgCADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_4.setTransform(370.45, 77);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFADAAAGQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_5.setTransform(365.225, 77);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_6.setTransform(359.275, 77);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgEgFQgDgGAAgIQAAgHADgFQAEgHAFgDQAHgDAGAAQAFAAAEABIAIAEIgCAGQgDgCgEgBQgDgCgFABQgFgBgDADQgFADgCAEQgDAEABAFQgBAGADAEQACAEAEADQAEADAFgBIAJgBIAHgEIACAGQgEADgFACQgEABgGAAQgGAAgGgDg");
  this.shape_7.setTransform(353.7, 77);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgIAXQgGgEgDgFQgDgGgBgIQABgHADgFQADgHAGgDQAFgDAHAAQAFAAAEABIAIAEIgCAGQgDgCgEgBQgEgCgEABQgFgBgEADQgEADgCAEQgCAEgBAFQABAGACAEQACAEAEADQAEADAEgBIAJgBIAIgEIABAGQgCADgGACQgEABgGAAQgGAAgFgDg");
  this.shape_8.setTransform(348.6, 77);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_9.setTransform(342.925, 77);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_10.setTransform(336.875, 78);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AALAZIgVgYIgCAAIAAAYIgHAAIAAgxIAHAAIAAAVIADAAIATgVIAJAAIgXAYIAYAZg");
  this.shape_11.setTransform(331.425, 77);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAFAEADAFQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgBQAEgCADgEIADAHQgEADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_12.setTransform(323.25, 77);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGABACgDQADgDAAgEQgBgEgDgDQgBgCgHAAIgMAAg");
  this.shape_13.setTransform(316.85, 77);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_14.setTransform(310.225, 77);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIAEAAQADAAACgDQACgEABgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgCAHQgBADgBACIAZAAIAAglIgSAAg");
  this.shape_15.setTransform(304.2, 77.725);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_16.setTransform(298.225, 77);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFADAAAGQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_17.setTransform(292.775, 77);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_18.setTransform(286.775, 77);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_19.setTransform(280.625, 78);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AAOAZIAAgrIgbAAIAAArIgHAAIAAgxIApAAIAAAxg");
  this.shape_20.setTransform(274.225, 77);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_21.setTransform(268.125, 77);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_22.setTransform(262.025, 77);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_23.setTransform(255.625, 77.025);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_24.setTransform(249.975, 77);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAOAZIAAgrIgbAAIAAArIgHAAIAAgxIApAAIAAAxg");
  this.shape_25.setTransform(243.925, 77);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAEAGQAFAEAJAAQAFAAAFgBQAFgCADgEIACAHQgDADgGACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_26.setTransform(235.6, 77);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGABACgDQADgDAAgEQAAgEgEgDQgBgCgHAAIgMAAg");
  this.shape_27.setTransform(229.2, 77);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_28.setTransform(222.575, 77);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_29.setTransform(216.575, 78);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAFAEAIAAQAGAAAFgBQAFgCACgEIACAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgEAAgDACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_30.setTransform(210.35, 77);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAVAZIAAgnIgSAgIgFAAIgTggIAAAnIgGAAIAAgxIAHAAIAUAiIAUgiIAIAAIAAAxg");
  this.shape_31.setTransform(203.85, 77);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgMAZIgIgFIACgGQADACAEACQAFACAGgBQAGAAADgBQAEgDAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBgCgFgCIgLgBIAAgFQAJAAAEgCQAEgCAAgEQAAgEgDgCQgDgCgFAAQgEAAgDACIgIACIgCgFIAIgEIAJgBQAJAAAEADQAFADAAAHQAAAEgDADQgDAEgGABIAHAAQAEACACADQACACAAAEQAAAGgDACQgDAEgEACQgFABgGAAQgHAAgFgBg");
  this.shape_32.setTransform(197.475, 77);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCADAAADQAAAEADADQADACAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_33.setTransform(192.125, 77);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_34.setTransform(186.425, 78);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAHAAQAGAAAFgBQAFgCADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgEAAgDACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_35.setTransform(180.2, 77);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_36.setTransform(174.325, 77);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIAEAAQADAAACgDQACgEABgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgCAHQgBADgCACIAaAAIAAglIgSAAg");
  this.shape_37.setTransform(168.3, 77.725);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgBQAEgCADgEIADAHQgEADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_38.setTransform(162.6, 77);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_39.setTransform(156.775, 78);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAIgFAKAAQAHAAAGADQAGACAFADIgDAHQgEgDgFgCQgGgCgGgBQgHAAgHAFQgGADgEAHQgEAHAAAHQAAAJAEAGQAEAGAGAEQAHAFAHAAQAHAAAGgDQAFgCAFgDIACAHQgGADgGACQgGACgHAAQgKAAgIgEg");
  this.shape_40.setTransform(149.825, 75.95);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAOAUIgPgUIAPgTIAJAAIgRATIARAUgAgFAUIgRgUIARgTIAHAAIgQATIAQAUg");
  this.shape_41.setTransform(143.625, 76.9);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_42.setTransform(135.475, 77);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_43.setTransform(129.175, 77);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AASAgIAAgOIgqAAIAAgxIAHAAIAAArIAbAAIAAgrIAHAAIAAArIAIAAIAAAUg");
  this.shape_44.setTransform(123.275, 77.725);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCADAAADQAAAEADADQADACAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_45.setTransform(116.925, 77);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_46.setTransform(111.175, 77);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_47.setTransform(105.025, 77);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAVAZIAAgnIgSAgIgFAAIgTggIAAAnIgGAAIAAgxIAHAAIAUAiIAUgiIAIAAIAAAxg");
  this.shape_48.setTransform(98.2, 77);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_49.setTransform(91.425, 77);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_50.setTransform(85.325, 77);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFADAAAGQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_51.setTransform(77.425, 77);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgSAZIAAgxIAHAAIAAAVIAMAAQAJAAAEADQAFADAAAHQAAAFgCADQgCAEgEABQgEACgFAAgAgLATIAMAAQAGABADgDQACgDAAgEQAAgEgDgDQgDgCgGAAIgLAAg");
  this.shape_52.setTransform(69.725, 77);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_53.setTransform(63.525, 77.025);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgBQAFgCADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_54.setTransform(58.15, 77);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_55.setTransform(53.075, 77);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_56.setTransform(47.725, 77);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIADAAQAEAAACgDQADgEAAgGIAEgeIAeAAIAAArIAIAAIAAAUgAgIAAIgBAHQgBADgCACIAZAAIAAglIgSAAg");
  this.shape_57.setTransform(41.55, 77.725);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAGAGQAEAEAIAAQAGAAAFgBQAEgCADgEIACAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_58.setTransform(35.85, 77);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgJAlQgFgCgDgEQgEgEgCgIQgCgHAAgMQAAgKADgIQACgHAGgEQAGgFAJgBIAEgBIACAAIAHgBIADAAIAEgBIABAHIgHABIgGAAIgDABIgDAAQgGABgFACQgFADgCAGQgCAFgBAKQADgEAFgDQAFgDAHAAQAHAAAFADQAGADADAGQADAFAAAIQAAAHgDAGQgDAGgGADQgGAEgIAAIgJgCgAgHgEQgEACgCACIgFAFQAAALAEAGQACAGAEACQAEACAEAAQAGAAAEgCQAEgDACgEQACgFAAgGQAAgFgCgFQgCgDgEgCQgEgDgFAAQgEAAgEACg");
  this.shape_59.setTransform(29.95, 75.725);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_60.setTransform(23.725, 77);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AATAjIAAg/IglAAIAAA/IgIAAIAAhGIA1AAIAABGg");
  this.shape_61.setTransform(16.95, 75.95);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_62.setTransform(11.275, 73.975);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_62
   }, {
    t: this.shape_61
   }, {
    t: this.shape_60
   }, {
    t: this.shape_59
   }, {
    t: this.shape_58
   }, {
    t: this.shape_57
   }, {
    t: this.shape_56
   }, {
    t: this.shape_55
   }, {
    t: this.shape_54
   }, {
    t: this.shape_53
   }, {
    t: this.shape_52
   }, {
    t: this.shape_51
   }, {
    t: this.shape_50
   }, {
    t: this.shape_49
   }, {
    t: this.shape_48
   }, {
    t: this.shape_47
   }, {
    t: this.shape_46
   }, {
    t: this.shape_45
   }, {
    t: this.shape_44
   }, {
    t: this.shape_43
   }, {
    t: this.shape_42
   }, {
    t: this.shape_41
   }, {
    t: this.shape_40
   }, {
    t: this.shape_39
   }, {
    t: this.shape_38
   }, {
    t: this.shape_37
   }, {
    t: this.shape_36
   }, {
    t: this.shape_35
   }, {
    t: this.shape_34
   }, {
    t: this.shape_33
   }, {
    t: this.shape_32
   }, {
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(7.3, 65.9, 406.9, 18.19999999999999), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABADIgBAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
  this.shape.setTransform(46.025, 79.175);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_1.setTransform(41.475, 77.125);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_2.setTransform(36.025, 75.975);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgGgDgEQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_3.setTransform(30.175, 77.1);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_4.setTransform(25.475, 77.1);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgMAfQgIgEgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAIgFAKAAQAHABAGACQAGACAFADIgDAHQgEgDgFgCQgGgCgGgBQgHAAgHAFQgGADgEAHQgEAGAAAIQAAAJAEAGQAEAGAGAEQAHAFAHAAQAHgBAGgCQAFgCAFgDIACAHQgGADgGACQgGACgHABQgKgBgIgFg");
  this.shape_5.setTransform(19.975, 76.05);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_6.setTransform(12.325, 74.075);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(8.4, 66, 292.3, 18.200000000000003), null);
 (lib.snoska = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAIABADIgBAEQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
  this.shape.setTransform(287.825, 79.175);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAUIAQgUIgQgTIAHAAIARATIgRAUgAgWAUIARgUIgRgTIAIAAIAQATIgQAUg");
  this.shape_1.setTransform(284.125, 77);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AALAZIgVgYIgCAAIAAAYIgHAAIAAgxIAHAAIAAAVIADAAIATgVIAJAAIgXAXIAYAag");
  this.shape_2.setTransform(279.825, 77.1);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_3.setTransform(274.175, 77.1);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgGgDgEQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_4.setTransform(268.475, 77.1);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgWAjIAAhFIAlAAIAAAGIgeAAIAAAYIAPAAQAMAAAFAEQAGAFAAAJQAAAHgDAEQgCAFgFADQgFACgIAAgAgPAdIAPAAQAHAAAEgEQAEgDABgIQgBgGgEgDQgFgDgGAAIgPAAg");
  this.shape_5.setTransform(263.3, 76.05);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgGgDgEQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_6.setTransform(255.075, 77.1);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_7.setTransform(250.375, 77.1);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDADQgCAFAAAFQAAAFACAFQADAEAEADQAEACAFAAQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgFQgDgDgEgDQgEgCgGAAQgFAAgEACg");
  this.shape_8.setTransform(245.325, 77.1);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_9.setTransform(239.375, 75.975);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDADQgCAFAAAFQAAAFACAFQADAEAEADQAEACAFAAQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgFQgDgDgEgDQgEgCgGAAQgFAAgEACg");
  this.shape_10.setTransform(233.375, 77.1);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgDAjIAAg/IgUAAIAAgGIAuAAIAAAGIgTAAIAAA/g");
  this.shape_11.setTransform(228, 76.05);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAOAUIgPgUIAPgTIAJAAIgRATIARAUgAgFAUIgRgUIARgTIAHAAIgQATIAQAUg");
  this.shape_12.setTransform(223.175, 77);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AgSAfQgIgEgFgIQgFgJAAgKQAAgJAFgJQAFgIAIgFQAIgFAKAAQAKABAJAFQAIAEAFAIQAFAJAAAJQAAAKgFAJQgFAIgIAEQgJAFgKABQgKgBgIgFgAgOgYQgGADgFAHQgDAGAAAIQAAAJADAGQAFAGAGAEQAGAFAIAAQAIAAAHgFQAHgEADgGQAEgGAAgJQAAgIgEgGQgDgHgHgDQgHgFgIAAQgIAAgGAFg");
  this.shape_13.setTransform(214.35, 76.05);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAXAjIgIgWIgdAAIgJAWIgHAAIAbhFIAHAAIAbBFgAAMAGIgMggIgMAgIAYAAg");
  this.shape_14.setTransform(207.025, 76.05);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AANAZIAAgVIgMAAIgNAVIgHAAIAOgWQgFgBgDgCQgDgEAAgFQAAgFACgEQACgDAEgBQAEgCAEAAIAUAAIAAAxgAgGgQQgDACAAAFQAAAEADACQACADAFAAIAMAAIAAgTIgMAAQgFAAgCADg");
  this.shape_15.setTransform(198.925, 77.075);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgIAXQgGgEgDgFQgDgGAAgIQAAgHADgFQADgHAGgDQAFgDAHAAQAFAAAEABIAIAEIgDAHQgCgDgEgBQgDgBgFAAQgFAAgEACQgEADgCADQgDAFAAAFQAAAGADAEQACAEAEADQAEACAEAAIAJgBIAIgEIABAGQgCADgGACQgEABgGAAQgGAAgFgDg");
  this.shape_16.setTransform(194.35, 77.1);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_17.setTransform(189.775, 77.1);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAGgDAFAAQAIAAAFADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAGAGQAFAEAHAAQAGAAAFgCQAEgBADgDIADAGQgDADgGACQgFACgHAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgCAAgEACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_18.setTransform(185, 77.1);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AANAZIAAgVIgMAAIgNAVIgHAAIAOgWQgFgBgDgCQgDgEAAgFQAAgFACgEQACgDAEgBQAEgCAEAAIAUAAIAAAxgAgGgQQgDACAAAFQAAAEADACQACADAFAAIAMAAIAAgTIgMAAQgFAAgCADg");
  this.shape_19.setTransform(179.575, 77.075);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_20.setTransform(174.125, 77.125);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFADAAAGQAAAFgDADQgCADgEAAQAGABADACQADADABAGQgBAFgCADQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgDgGAAIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgCgEABIgLAAg");
  this.shape_21.setTransform(169.425, 77.1);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_22.setTransform(164.575, 77.1);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgEgFQgDgGAAgIQAAgHADgFQAEgHAFgDQAHgDAGAAQAFAAAFABIAHAEIgDAHQgCgDgEgBQgDgBgFAAQgEAAgEACQgFADgCADQgDAFABAFQgBAGADAEQACAEAEADQAEACAFAAIAJgBIAHgEIACAGQgDADgFACQgFABgGAAQgGAAgGgDg");
  this.shape_23.setTransform(160.1, 77.1);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgCQAEgBADgDIADAGQgEADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_24.setTransform(154.95, 77.1);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAgAgIAAgOIhGAAIAAgxIAHAAIAAArIAYAAIAAgrIAHAAIAAArIAYAAIAAgrIAHAAIAAArIAIAAIAAAUg");
  this.shape_25.setTransform(148.275, 77.825);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgTAkIgDgBIABgGIACAAIACAAQAEAAADgCQADgCACgGIAEgHIgWgvIAHAAIARAmIAQgmIAHAAIgYA4QgCAIgEADQgEAEgHAAIgCAAg");
  this.shape_26.setTransform(141.35, 78.175);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgEgFQgCgGAAgIQAAgHACgFQAEgHAFgDQAHgDAGAAQAFAAAFABIAHAEIgDAHQgCgDgEgBQgDgBgFAAQgEAAgEACQgFADgCADQgDAFABAFQgBAGADAEQACAEAEADQAEACAFAAIAJgBIAHgEIACAGQgDADgFACQgFABgGAAQgGAAgGgDg");
  this.shape_27.setTransform(136.7, 77.1);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDADQgCAFAAAFQAAAFACAFQADAEAEADQAEACAFAAQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgFQgDgDgEgDQgEgCgGAAQgFAAgEACg");
  this.shape_28.setTransform(131.275, 77.1);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgCQAFgBADgDIABAGQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_29.setTransform(123.4, 77.1);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_30.setTransform(117.675, 77.1);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_31.setTransform(111.725, 77.1);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgGgDgEQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_32.setTransform(106.025, 77.1);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFADAAAGQAAAFgDADQgCADgEAAQAGABADACQADADABAGQgBAFgCADQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgDgGAAIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgCgEABIgLAAg");
  this.shape_33.setTransform(101.175, 77.1);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDADQgCAFAAAFQAAAFACAFQADAEAEADQAEACAFAAQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgFQgDgDgEgDQgEgCgGAAQgFAAgEACg");
  this.shape_34.setTransform(95.475, 77.1);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_35.setTransform(90.425, 77.1);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_36.setTransform(85.325, 77.1);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgGAAIAAgUIACAAQAEAAACgDQACgEABgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgBAHQgCADgCACIAZAAIAAglIgRAAg");
  this.shape_37.setTransform(79.4, 77.825);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgCQAEgBADgDIADAGQgEADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_38.setTransform(73.95, 77.1);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgDQAFgDAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCADQgDAFAAAGQAAAFACAEQADAEAEADQAEACAFAAQAFAAAEgCQAEgDADgEQACgEAAgFQAAgGgCgEQgCgFgEgCQgEgCgGAAQgEAAgFACg");
  this.shape_39.setTransform(68.375, 78.1);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AARAjIgcggIgHAAIAAAgIgHAAIAAhFIAHAAIAAAfIAGAAIAagfIAJAAIgcAiIAfAjg");
  this.shape_40.setTransform(62.575, 76.05);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_41.setTransform(54.975, 74.075);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_42.setTransform(51.325, 74.075);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABADIgBAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
  this.shape_43.setTransform(46.025, 79.175);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_44.setTransform(41.475, 77.125);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_45.setTransform(36.025, 75.975);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgCAHgCQAHgCANAAIAAgBQAAgGgDgEQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_46.setTransform(30.175, 77.1);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_47.setTransform(25.475, 77.1);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AgMAfQgIgEgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAIgFAKAAQAHABAGACQAGACAFADIgDAHQgEgDgFgCQgGgCgGgBQgHAAgHAFQgGADgEAHQgEAGAAAIQAAAJAEAGQAEAGAGAEQAHAFAHAAQAHgBAGgCQAFgCAFgDIACAHQgGADgGACQgGACgHABQgKgBgIgFg");
  this.shape_48.setTransform(19.975, 76.05);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_49.setTransform(12.325, 74.075);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_49
   }, {
    t: this.shape_48
   }, {
    t: this.shape_47
   }, {
    t: this.shape_46
   }, {
    t: this.shape_45
   }, {
    t: this.shape_44
   }, {
    t: this.shape_43
   }, {
    t: this.shape_42
   }, {
    t: this.shape_41
   }, {
    t: this.shape_40
   }, {
    t: this.shape_39
   }, {
    t: this.shape_38
   }, {
    t: this.shape_37
   }, {
    t: this.shape_36
   }, {
    t: this.shape_35
   }, {
    t: this.shape_34
   }, {
    t: this.shape_33
   }, {
    t: this.shape_32
   }, {
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.snoska, new cjs.Rectangle(8.4, 66, 292.3, 18.200000000000003), null);
 (lib.red_line = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0022").s().p("AyvAKIAAgTMAlfAAAIAAATg");
  this.shape.setTransform(120, 1);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.red_line, new cjs.Rectangle(0, 0, 240, 2), null);
 (lib.logo_s = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiwByQhJgvAAhDQAAhCBJgvQBKgwBmAAQBnAABKAwQBJAvAABCQAABDhJAvQhKAwhnAAQhmAAhKgwgAC6hNQgBAig2AXQgfAOgnAFIAAAHQAAA7gRAqQgMAZgNAKQBKgEA5gmQAfgUARgcQAQgcAAgdQABgegQgaQgFgKgJgJIABADgAjHg9QgPAaAAAeQABAdAQAcQARAcAfAUQAfAVAlALQAeAIAgACQgNgKgLgZQgRgqgBg7IAAgHQgmgFgfgOQg2gXAAgiIAAgDQgIAJgHAKgAgaBAQALAbAPAAQAQAAALgbQAKgbACgkQgTACgUAAQgTAAgTgCQABAkALAbgAgahHQgGAPgDASIAjABIAjgBQgCgSgGgPQgLgdgQAAQgPAAgLAdgAAshfQAJAYAGAeQAWgEAVgHQAqgPAAgVQAAgWgqgPQgQgFgTgDIgQgDIgwgDIgDAAIgDAAIg5AEIgLACQgQAEgOAEQgqAPAAAWQAAAVAqAPQAUAIAYADQADgeALgYQASgpAZAAQAZAAATApg");
  this.shape.setTransform(25, 16.15);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.logo_s, new cjs.Rectangle(0, 0, 50, 32.3), null);
 (lib.legal_01_d1 = function() {
  this.initialize(img.legal_01_d1);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 885, 117);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(10, 8, 0.5, 0.5);
  this.initialize(mode, startPosition, loop, {
   cvr_frame01: 65,
   cvr_frame02: 195
  });
  this.frame_start = function() {
   globalStop(false);
   this.gotoAndPlay(1);
  }
  this.frame_finish = function() {
   globalStop(true)
   this.stop()
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_start).wait(260).call(this.frame_finish).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).to({
   alpha: 0
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -70
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -148
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(454.5, 47, 8.89, 0.78);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(8, 6, 889, 79), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(435, -204, 0.46, 0.46);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(435, -204, 219.39999999999998, 121.5), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EhLxAHCIAAuDMCXjAAAIAAODg");
  this.shape.setTransform(485, 45);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 970, 90), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(40, 0, 207.5, 90.1), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(40, 0, 207.4, 90), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EhLxAHCIAAuDMCXjAAAIAAODg");
  this.shape.setTransform(485, 45);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 970, 90), null);
 (lib.arrow1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], 0, 130.3, 0, -124).s().p("ABJTWQEjmfgWlzQgVlekqk8Qi8jJhJkhQgtiwAFioIiHAAIDAi/IDAC/IiIAAQgECVAoCgQBCELCpC1QCXChBQDDQBODCgBDOQgCDQhTDEQhYDLioCog");
  this.shape.setTransform(41.3756, 124.025);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], 0, 130.3, 0, -124).s().p("ABJTWQEjmfgWlzQgVlekqk8Qi8jJhJkhQgtiwAFioIiHAAIDAi/IDAC/IiIAAQgECVAoCgQBCELCpC1QCXChBQDDQBODCgBDOQgCDQhTDEQhYDLioCog");
  this.shape_1.setTransform(121.3756, 124.025);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], 0, 130.3, 0, -124).s().p("ABJTWQEjmfgWlzQgVlekqk8Qi8jJhJkhQgtiwAFioIiHAAIDAi/IDAC/IiIAAQgECVAoCgQBCELCpC1QCXChBQDDQBODCgBDOQgCDQhTDEQhYDLioCog");
  this.shape_2.setTransform(206.3756, 124.025);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.arrow1, new cjs.Rectangle(0, 0, 247.8, 248.1), null);
 (lib.txt05 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t05();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 217.9,
   regY: 38.8,
   x: 200.7,
   y: 38.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 203.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 205.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 207.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 209.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 211.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 212.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 214.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 215.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 216.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 217,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 217.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 217.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(135, 10, 145.89999999999998, 57.7);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AjiB5IAAjoIc5AAIAADog");
  mask.setTransform(162.2526, 12.1373);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 235.9,
   regY: 37.1,
   x: 218.7,
   y: 37.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 221.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 223.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 225.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 227.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 229.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 230.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 232.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 233.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 234.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 235,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 235.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 235.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("AjiDuIAAjpIc5AAIAADpg");
  mask_1.setTransform(162.2526, 23.7873);
  this.instance_1 = new lib.t03();
  this.instance_1.parent = this;
  this.instance_1.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_1.alpha = 0;
  this.instance_1._off = true;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({
   _off: false
  }, 0).wait(1).to({
   regX: 235.9,
   regY: 37.1,
   x: 218.7,
   y: 37.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 221.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 223.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 225.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 227.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 229.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 230.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 232.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 233.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 234.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 235,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 235.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 235.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(16));
  var mask_2 = new cjs.Shape();
  mask_2._off = true;
  mask_2.graphics.p("AjiFiIAAjpIc5AAIAADpg");
  mask_2.setTransform(162.2526, 35.4373);
  this.instance_2 = new lib.t03();
  this.instance_2.parent = this;
  this.instance_2.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_2.alpha = 0;
  this.instance_2._off = true;
  var maskedShapeInstanceList = [this.instance_2];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({
   _off: false
  }, 0).wait(1).to({
   regX: 235.9,
   regY: 37.1,
   x: 218.7,
   y: 37.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 221.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 223.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 225.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 227.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 229.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 230.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 232.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 233.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 234.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 235,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 235.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 235.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(139.6, 1, 184.9, 69.9);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Aj/CAIAAjZIdrAAIAADZg");
  mask.setTransform(164.4022, 12.8205);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 240.8,
   regY: 37.7,
   x: 223.6,
   y: 37.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 226.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 228.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 230.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 232.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 234.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 235.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 237.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 238.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 239.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 239.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 240.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 240.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("Aj/DtIAAjaIdrAAIAADag");
  mask_1.setTransform(164.4022, 23.7205);
  this.instance_1 = new lib.t02();
  this.instance_1.parent = this;
  this.instance_1.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_1.alpha = 0;
  this.instance_1._off = true;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({
   _off: false
  }, 0).wait(1).to({
   regX: 240.8,
   regY: 37.7,
   x: 223.6,
   y: 37.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 226.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 228.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 230.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 232.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 234.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 235.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 237.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 238.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 239.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 239.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 240.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 240.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(16));
  var mask_2 = new cjs.Shape();
  mask_2._off = true;
  mask_2.graphics.p("Aj/FaIAAjaIdrAAIAADag");
  mask_2.setTransform(164.4022, 34.5955);
  this.instance_2 = new lib.t02();
  this.instance_2.parent = this;
  this.instance_2.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_2.alpha = 0;
  this.instance_2._off = true;
  var maskedShapeInstanceList = [this.instance_2];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({
   _off: false
  }, 0).wait(1).to({
   regX: 240.8,
   regY: 37.7,
   x: 223.6,
   y: 37.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 226.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 228.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 230.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 232.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 234.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 235.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 237.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 238.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 239.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 239.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 240.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 240.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
  var mask_3 = new cjs.Shape();
  mask_3._off = true;
  mask_3.graphics.p("ATcFZIAAovIMgAAIAAIvg");
  mask_3.setTransform(204.4021, 34.4856);
  this.instance_3 = new lib.t02a();
  this.instance_3.parent = this;
  this.instance_3.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_3.alpha = 0;
  this.instance_3._off = true;
  var maskedShapeInstanceList = [this.instance_3];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({
   _off: false
  }, 0).wait(1).to({
   regX: 361.9,
   regY: 43.4,
   x: 344.7,
   y: 43.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 347.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 349.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 351.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 353.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 355.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 356.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 358.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 359.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 360.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 361,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 361.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 361.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(138.9, 3.9, 269.9, 65.1);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t01_1();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  this.instance._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({
   _off: false
  }, 0).wait(1).to({
   regX: 100.5,
   regY: 40.6,
   x: 83.3,
   y: 40.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 85.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 88.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 90.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 92.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 94,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 95.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 96.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 97.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 98.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 99.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 100.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 100.4,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 140, 54.2);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvQCbIAAk1IehAAIAAE1g");
  mask.setTransform(97.6929, 14.1113);
  this.instance = new lib.t01();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 49.4,
   regY: 28.6,
   x: 32.2,
   y: 28.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 34.75,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 37.1,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 39.2,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 41.15,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 42.9,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 44.4,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 45.75,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 46.85,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 47.8,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 48.5,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 49,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 49.3,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(16));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("AvQEZIAAkNIehAAIAAENg");
  mask_1.setTransform(97.6929, 28.1081);
  this.instance_1 = new lib.t01();
  this.instance_1.parent = this;
  this.instance_1.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_1.alpha = 0;
  this.instance_1._off = true;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
   _off: false
  }, 0).wait(1).to({
   regX: 49.4,
   regY: 28.6,
   x: 32.2,
   y: 28.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 34.75,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 37.1,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 39.2,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 41.15,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 42.9,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 44.4,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 45.75,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 46.85,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 47.8,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 48.5,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 49,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 49.3,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -1.2, 189.3, 56);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(182.95, 37.1);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(182.975, 37.075);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(182.95, 37.05, 1, 1, 0, 0, 0, 22.3, 22.8);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(182.95, 37.05, 1, 1, 0, 0, 0, 22.3, 22.8);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(182.95, 37.1);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgHA1IAAhcIgdAAIAAgNIBJAAIAAANIgdAAIAABcg");
  this.shape_3.setTransform(308.775, 53.425);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AghA1IAAhpIAgAAQALAAAIAEQAIAEAEAIQAEAHAAAKQAAAJgEAIQgEAHgIAFQgIAEgLABIgRAAIAAAmgAgSACIAPAAQAFAAAFgCQAFgCADgFQADgFAAgHQAAgHgDgFQgDgEgFgCQgFgCgFAAIgPAAg");
  this.shape_4.setTransform(300.275, 53.425);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgcAwQgMgHgHgNQgIgMAAgQQAAgPAIgMQAHgNAMgHQANgHAPAAQAQAAANAHQAMAHAIANQAGAMABAPQgBAQgGAMQgIANgMAHQgNAHgQAAQgPAAgNgHgAgUgiQgIAFgFAJQgGAJAAALQAAAMAGAJQAFAJAIAFQAKAFAKAAQAMAAAJgFQAIgFAFgJQAGgJAAgMQAAgLgGgJQgFgJgIgFQgJgFgMAAQgKAAgKAFg");
  this.shape_5.setTransform(288.45, 53.425);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgGA3IAAgLQgPgBgMgGQgLgFgGgKQgGgJgBgNQABgMAGgJQAGgKALgFQAMgGAPgBIAAgLIAOAAIAAALQAPABALAGQALAFAHAKQAGAJAAAMQAAANgGAJQgHAKgLAFQgLAGgPABIAAALgAAIAfQAQgBAJgJQAKgIAAgNQAAgMgKgIQgJgJgQgBgAgggUQgJAIAAAMQAAANAJAIQAKAJAQABIAAg9QgQABgKAJg");
  this.shape_6.setTransform(275.075, 53.425);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAlA1IAAhUIggAwIgKAAIgegwIAABUIgQAAIAAhpIATAAIAgA0IAhg0IATAAIAABpg");
  this.shape_7.setTransform(261.55, 53.425);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgbAwQgNgHgHgNQgHgMAAgQQAAgPAHgMQAHgNANgHQAMgHAPAAQAQAAAMAHQANAHAHANQAIAMgBAPQABAQgIAMQgHANgNAHQgMAHgQAAQgPAAgMgHgAgTgiQgJAFgGAJQgEAJAAALQAAAMAEAJQAGAJAJAFQAIAFALAAQAMAAAIgFQAKgFAFgJQAFgJAAgMQAAgLgFgJQgFgJgKgFQgIgFgMAAQgLAAgIAFg");
  this.shape_8.setTransform(248, 53.425);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAXA1IgngvIgKAAIAAAvIgPAAIAAhpIAPAAIAAAvIAJAAIAlgvIARAAIgoAzIAtA2g");
  this.shape_9.setTransform(236.85, 53.425);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAdBDIAAhSIg5BSIgPAAIAAhpIAPAAIAABTIA5hTIAPAAIAABpgAgRg0QgGgGAAgJIAKAAQABAFADADQAEACAFAAQAGAAAEgCQADgDABgFIAKAAQAAAJgHAGQgGAEgLAAQgLAAgGgEg");
  this.shape_10.setTransform(297.225, 37.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAdA1IAAhSIg5BSIgPAAIAAhpIAPAAIAABSIA5hSIAPAAIAABpg");
  this.shape_11.setTransform(284.875, 39.325);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAbA1IAAguIg2AAIAAAuIgPAAIAAhpIAPAAIAAAuIA2AAIAAguIAQAAIAABpg");
  this.shape_12.setTransform(272.675, 39.325);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAlA1IAAhUIggAwIgKAAIgfgwIAABUIgPAAIAAhpIAUAAIAfA0IAhg0IATAAIAABpg");
  this.shape_13.setTransform(259.65, 39.325);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAdA1IAAhSIg5BSIgPAAIAAhpIAPAAIAABSIA5hSIAPAAIAABpg");
  this.shape_14.setTransform(246.525, 39.325);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgXAzQgJgEgGgGIAIgMQAFAFAHAEQAHADALAAQAKAAAHgFQAGgFAAgJQAAgJgIgEQgJgFgRAAIAAgLQAMAAAGgDQAHgDADgEQACgEAAgEQAAgHgFgEQgFgEgJAAQgIAAgHADQgGADgFAEIgHgMQAGgFAJgDQAIgEALAAQAPAAAJAHQAJAHABANQgBAKgFAGQgGAHgKACQAMACAHAFQAGAHABALQAAAKgFAHQgFAHgIAEQgJAEgMAAQgNAAgKgEg");
  this.shape_15.setTransform(235.475, 39.325);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AApBKIgPgpIg0AAIgPApIgdAAIA4iTIAdAAIA4CTgAASAKIgSg1IgSA1IAkAAg");
  this.shape_16.setTransform(305.575, 19.05);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgNBKIAAh7IgoAAIAAgYIBrAAIAAAYIgnAAIAAB7g");
  this.shape_17.setTransform(293.225, 19.05);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgnBDQgSgKgKgQQgKgSAAgXQAAgWAKgRQAKgSASgJQARgJAWAAQAXAAARAJQASAJAKASQAKARAAAWQAAAWgKASQgKARgSAKQgRAJgXABQgWAAgRgKgAgYgrQgLAHgGALQgGAMAAANQAAAPAGALQAGALALAGQALAGANABQAOgBALgGQALgGAGgLQAHgLAAgPQAAgNgHgMQgGgLgLgHQgLgGgOAAQgNAAgLAGg");
  this.shape_18.setTransform(279.425, 19.05);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgNBKIAAg6IgyhZIAeAAIAiA/IAjg/IAcAAIgyBZIAAA6g");
  this.shape_19.setTransform(265.1, 19.05);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgnBDQgSgKgKgQQgKgSAAgXQAAgWAKgRQAKgSASgJQARgJAWAAQAXAAARAJQASAJAKASQAKARAAAWQAAAWgKASQgKARgSAKQgRAJgXABQgWAAgRgKgAgYgrQgLAHgGALQgGAMAAANQAAAPAGALQAGALALAGQALAGANABQAOgBALgGQALgGAGgLQAHgLAAgPQAAgNgHgMQgGgLgLgHQgLgGgOAAQgNAAgLAGg");
  this.shape_20.setTransform(250.725, 19.05);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgNBKIAAh7IgoAAIAAgYIBrAAIAAAYIgnAAIAAB7g");
  this.shape_21.setTransform(236.975, 19.05);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAj8IAAH5");
  this.shape_22.setTransform(220.45, 36.525);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.instance_1
   }, {
    t: this.instance
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(156.4, 0, 163.1, 64.7), null);
 (lib.arrow = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EAOCB62IAAkQMAt5AAAIAAEQg");
  var mask_graphics_1 = new cjs.Graphics().p("EAOCB62IAAmNMAt5AAAIAAGNg");
  var mask_graphics_2 = new cjs.Graphics().p("EAOCB63IAAoKMAt5AAAIAAIKg");
  var mask_graphics_3 = new cjs.Graphics().p("EAOCB63IAAqHMAt5AAAIAAKHg");
  var mask_graphics_4 = new cjs.Graphics().p("EAOCB63IAAsDMAt5AAAIAAMDg");
  var mask_graphics_5 = new cjs.Graphics().p("EAOCB63IAAuAMAt5AAAIAAOAg");
  var mask_graphics_6 = new cjs.Graphics().p("EAOCB63IAAv8MAt5AAAIAAP8g");
  var mask_graphics_7 = new cjs.Graphics().p("EAOCB64IAAx6MAt5AAAIAAR6g");
  var mask_graphics_8 = new cjs.Graphics().p("EAOCB64IAAz3MAt5AAAIAAT3g");
  var mask_graphics_9 = new cjs.Graphics().p("EAOCB64IAA1zMAt5AAAIAAVzg");
  var mask_graphics_10 = new cjs.Graphics().p("EAOCB64IAA3wMAt5AAAIAAXwg");
  var mask_graphics_11 = new cjs.Graphics().p("EAOCB65IAA5tMAt5AAAIAAZtg");
  var mask_graphics_12 = new cjs.Graphics().p("EAOCB65IAA7qMAt5AAAIAAbqg");
  var mask_graphics_13 = new cjs.Graphics().p("EAOCB65IAA9mMAt5AAAIAAdmg");
  var mask_graphics_14 = new cjs.Graphics().p("EAOCB65IAA/jMAt5AAAIAAfjg");
  var mask_graphics_15 = new cjs.Graphics().p("EAOCB65MAAAghfMAt5AAAMAAAAhfg");
  var mask_graphics_16 = new cjs.Graphics().p("EAOCB66MAAAgjdMAt5AAAMAAAAjdg");
  var mask_graphics_17 = new cjs.Graphics().p("EAOCB66MAAAglZMAt5AAAMAAAAlZg");
  var mask_graphics_18 = new cjs.Graphics().p("EAOCB66MAAAgnWMAt5AAAMAAAAnWg");
  var mask_graphics_19 = new cjs.Graphics().p("EAOCB66MAAAgpTMAt5AAAMAAAApTg");
  var mask_graphics_20 = new cjs.Graphics().p("EAOCB66MAAAgrPMAt5AAAMAAAArPg");
  var mask_graphics_21 = new cjs.Graphics().p("EAOCB61MAAAgtMMAt5AAAMAAAAtMg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 383.5248,
   y: 786.2192
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 383.5248,
   y: 786.2406
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 383.5248,
   y: 786.2619
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 383.5248,
   y: 786.2832
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 383.5248,
   y: 786.3045
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 383.5248,
   y: 786.3259
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 383.5248,
   y: 786.3472
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 383.5248,
   y: 786.3685
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 383.5248,
   y: 786.3899
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 383.5248,
   y: 786.4112
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 383.5248,
   y: 786.4325
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 383.5248,
   y: 786.4538
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 383.5248,
   y: 786.4752
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 383.5248,
   y: 786.4965
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 383.5248,
   y: 786.5178
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 383.5248,
   y: 786.5391
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 383.5248,
   y: 786.5605
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 383.5248,
   y: 786.5818
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 383.5248,
   y: 786.6031
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 383.5248,
   y: 786.6245
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 383.5248,
   y: 786.6458
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 383.5248,
   y: 786.0887
  }).wait(1));
  this.instance = new lib.arrow1();
  this.instance.parent = this;
  this.instance.setTransform(608.8, 1421.5, 1, 1, 0, 0, 0, 123.9, 124);
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(484.9, 1297.5, 247.80000000000007, 248.0999999999999);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t04();
  this.instance.parent = this;
  this.instance.setTransform(21, 99.7, 1, 1, 0, 0, 0, 41, 99.7);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 234.5,
   regY: 37.1,
   x: 217.3,
   y: 37.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 219.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 222.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 224.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 226.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 228,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 229.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 230.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 231.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 232.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 233.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 234.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 234.4,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(136.4, 0, 183.1, 64.7);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.arrow("synched", 0, false);
  this.instance.parent = this;
  this.instance.setTransform(30.2, -94.45, 0.1971, 0.1971, 0, 0, 0, 41.9, 123.8);
  this.instance._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({
   _off: false
  }, 0).wait(46));
  this.instance_1 = new lib.bg3();
  this.instance_1.parent = this;
  this.instance_1.setTransform(40, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(40, 0, 207.5, 210.1);
 (lib.content = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1_4: 69,
   cvr_frame2_1: 149,
   cvr_frame3_2: 278,
   "cvr_frame#4": 350,
   cvr_stay: 360
  });
  this.frame_360 = function() {
   if (!this.cycle) this.cycle = 0;
   this.cycle++;
   var frames = this.duration * this.cycle + this.currentFrame;
   if (frames / createjs.Ticker.getMeasuredFPS() > 30) {
    if (this.cycle > 1) {
     _globalStop(this.stage);
    } else {
     var stopFrame = this.currentFrame;
     var tst = cjs.Tween.get(this);
     this.timeline.addTween(cjs.Tween.get(this).wait(this.duration - 1).call(function() {
      globalGotoAndStop(stopFrame);
     }));
    }
   }
  }
  this.timeline.addTween(cjs.Tween.get(this).wait(360).call(this.frame_360));
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(910, 10);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(385));
  this.instance_1 = new lib.legal_01();
  this.instance_1.parent = this;
  this.instance_1.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(380).to({
   _off: false
  }, 0).to({
   _off: true
  }, 1).wait(4));
  this.instance_2 = new lib.black_plate();
  this.instance_2.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(354).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 11, cjs.Ease.get(1)).wait(5));
  this.instance_3 = new lib.snoska3("synched", 0, false);
  this.instance_3.parent = this;
  this.instance_3.alpha = 0;
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(294).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(76));
  this.instance_4 = new lib.snoska2("synched", 0, false);
  this.instance_4.parent = this;
  this.instance_4.alpha = 0;
  this.instance_4._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(160).to({
   startPosition: 0
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).wait(91));
  this.instance_5 = new lib.snoska("synched", 0, false);
  this.instance_5.parent = this;
  this.instance_5.alpha = 0;
  this.instance_5._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(35).to({
   startPosition: 0
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(265));
  this.instance_6 = new lib.txt05("synched", 0, false);
  this.instance_6.parent = this;
  this.instance_6.setTransform(122, 0);
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(294).to({
   _off: false
  }, 0).wait(91));
  this.instance_7 = new lib.txt04("synched", 0, false);
  this.instance_7.parent = this;
  this.instance_7.setTransform(122, 0);
  this.instance_7._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(209).to({
   _off: false
  }, 0).wait(70).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).wait(91));
  this.instance_8 = new lib.txt03("synched", 0, false);
  this.instance_8.parent = this;
  this.instance_8.setTransform(122, 0);
  this.instance_8._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(175));
  this.instance_9 = new lib.txt02("synched", 0, false);
  this.instance_9.parent = this;
  this.instance_9.setTransform(122, 0);
  this.instance_9._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({
   _off: false
  }, 0).wait(80).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(265));
  this.instance_10 = new lib.txt01_1("synched", 0, false);
  this.instance_10.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(279).to({
   startPosition: 29
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_11 = new lib.txt01("synched", 0, false);
  this.instance_11.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(385));
  this.instance_12 = new lib.red_line();
  this.instance_12.parent = this;
  this.instance_12.setTransform(506.95, 89.5, 0.0146, 1, 0, 0, 180, 99.5, 1.5);
  this.instance_12._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({
   _off: false
  }, 0).to({
   regX: 100,
   scaleX: 0.275,
   x: 543.5
  }, 30, cjs.Ease.get(1)).wait(326));
  this.instance_13 = new lib.red_line();
  this.instance_13.parent = this;
  this.instance_13.setTransform(748, 1.5, 0.0499, 1, 0, 0, 0, 100.2, 1.5);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({
   _off: false
  }, 0).to({
   scaleX: 0.8583,
   x: 634.9
  }, 30, cjs.Ease.get(1)).wait(326));
  this.instance_14 = new lib.car_1();
  this.instance_14.parent = this;
  this.instance_14.setTransform(209.2, 281, 1, 1, 0, 0, 0, 120.2, 75);
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(174).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(-1)).wait(76));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EAmwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_1 = new cjs.Graphics().p("EAmtAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_2 = new cjs.Graphics().p("EAmmAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_3 = new cjs.Graphics().p("EAmZAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_4 = new cjs.Graphics().p("EAmHAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_5 = new cjs.Graphics().p("EAlwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_6 = new cjs.Graphics().p("EAlUAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_7 = new cjs.Graphics().p("EAkzAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_8 = new cjs.Graphics().p("EAkNAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_9 = new cjs.Graphics().p("EAjiAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_10 = new cjs.Graphics().p("EAixAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_11 = new cjs.Graphics().p("EAh8AHCIAAuDMAooAAAIAAODg");
  var mask_graphics_12 = new cjs.Graphics().p("EAhBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_13 = new cjs.Graphics().p("EAgBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_14 = new cjs.Graphics().p("Ae9HCIAAuDMAonAAAIAAODg");
  var mask_graphics_15 = new cjs.Graphics().p("Ad4HCIAAuDMAonAAAIAAODg");
  var mask_graphics_16 = new cjs.Graphics().p("Ac3HCIAAuDMAooAAAIAAODg");
  var mask_graphics_17 = new cjs.Graphics().p("Ab8HCIAAuDMAooAAAIAAODg");
  var mask_graphics_18 = new cjs.Graphics().p("AbFHCIAAuDMAooAAAIAAODg");
  var mask_graphics_19 = new cjs.Graphics().p("AaTHCIAAuDMAooAAAIAAODg");
  var mask_graphics_20 = new cjs.Graphics().p("AZmHCIAAuDMAooAAAIAAODg");
  var mask_graphics_21 = new cjs.Graphics().p("AY9HCIAAuDMAooAAAIAAODg");
  var mask_graphics_22 = new cjs.Graphics().p("AYaHCIAAuDMAooAAAIAAODg");
  var mask_graphics_23 = new cjs.Graphics().p("AX7HCIAAuDMAooAAAIAAODg");
  var mask_graphics_24 = new cjs.Graphics().p("AXhHCIAAuDMAonAAAIAAODg");
  var mask_graphics_25 = new cjs.Graphics().p("AXLHCIAAuDMAooAAAIAAODg");
  var mask_graphics_26 = new cjs.Graphics().p("AW6HCIAAuDMAooAAAIAAODg");
  var mask_graphics_27 = new cjs.Graphics().p("AWvHCIAAuDMAooAAAIAAODg");
  var mask_graphics_28 = new cjs.Graphics().p("AWnHCIAAuDMAooAAAIAAODg");
  var mask_graphics_29 = new cjs.Graphics().p("AWlHCIAAuDMAooAAAIAAODg");
  var mask_graphics_119 = new cjs.Graphics().p("EAmwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_120 = new cjs.Graphics().p("EAmtAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_121 = new cjs.Graphics().p("EAmmAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_122 = new cjs.Graphics().p("EAmZAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_123 = new cjs.Graphics().p("EAmHAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_124 = new cjs.Graphics().p("EAlwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_125 = new cjs.Graphics().p("EAlUAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_126 = new cjs.Graphics().p("EAkzAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_127 = new cjs.Graphics().p("EAkNAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_128 = new cjs.Graphics().p("EAjiAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_129 = new cjs.Graphics().p("EAixAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_130 = new cjs.Graphics().p("EAh8AHCIAAuDMAooAAAIAAODg");
  var mask_graphics_131 = new cjs.Graphics().p("EAhBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_132 = new cjs.Graphics().p("EAgBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_133 = new cjs.Graphics().p("Ae9HCIAAuDMAonAAAIAAODg");
  var mask_graphics_134 = new cjs.Graphics().p("Ad4HCIAAuDMAonAAAIAAODg");
  var mask_graphics_135 = new cjs.Graphics().p("Ac3HCIAAuDMAooAAAIAAODg");
  var mask_graphics_136 = new cjs.Graphics().p("Ab8HCIAAuDMAooAAAIAAODg");
  var mask_graphics_137 = new cjs.Graphics().p("AbFHCIAAuDMAooAAAIAAODg");
  var mask_graphics_138 = new cjs.Graphics().p("AaTHCIAAuDMAooAAAIAAODg");
  var mask_graphics_139 = new cjs.Graphics().p("AZmHCIAAuDMAooAAAIAAODg");
  var mask_graphics_140 = new cjs.Graphics().p("AY9HCIAAuDMAooAAAIAAODg");
  var mask_graphics_141 = new cjs.Graphics().p("AYaHCIAAuDMAooAAAIAAODg");
  var mask_graphics_142 = new cjs.Graphics().p("AX7HCIAAuDMAooAAAIAAODg");
  var mask_graphics_143 = new cjs.Graphics().p("AXhHCIAAuDMAonAAAIAAODg");
  var mask_graphics_144 = new cjs.Graphics().p("AXLHCIAAuDMAooAAAIAAODg");
  var mask_graphics_145 = new cjs.Graphics().p("AW6HCIAAuDMAooAAAIAAODg");
  var mask_graphics_146 = new cjs.Graphics().p("AWvHCIAAuDMAooAAAIAAODg");
  var mask_graphics_147 = new cjs.Graphics().p("AWnHCIAAuDMAooAAAIAAODg");
  var mask_graphics_148 = new cjs.Graphics().p("AWlHCIAAuDMAooAAAIAAODg");
  var mask_graphics_209 = new cjs.Graphics().p("EAmwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_210 = new cjs.Graphics().p("EAmtAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_211 = new cjs.Graphics().p("EAmmAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_212 = new cjs.Graphics().p("EAmZAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_213 = new cjs.Graphics().p("EAmHAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_214 = new cjs.Graphics().p("EAlwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_215 = new cjs.Graphics().p("EAlUAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_216 = new cjs.Graphics().p("EAkzAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_217 = new cjs.Graphics().p("EAkNAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_218 = new cjs.Graphics().p("EAjiAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_219 = new cjs.Graphics().p("EAixAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_220 = new cjs.Graphics().p("EAh8AHCIAAuDMAooAAAIAAODg");
  var mask_graphics_221 = new cjs.Graphics().p("EAhBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_222 = new cjs.Graphics().p("EAgBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_223 = new cjs.Graphics().p("Ae9HCIAAuDMAonAAAIAAODg");
  var mask_graphics_224 = new cjs.Graphics().p("Ad4HCIAAuDMAonAAAIAAODg");
  var mask_graphics_225 = new cjs.Graphics().p("Ac3HCIAAuDMAooAAAIAAODg");
  var mask_graphics_226 = new cjs.Graphics().p("Ab8HCIAAuDMAooAAAIAAODg");
  var mask_graphics_227 = new cjs.Graphics().p("AbFHCIAAuDMAooAAAIAAODg");
  var mask_graphics_228 = new cjs.Graphics().p("AaTHCIAAuDMAooAAAIAAODg");
  var mask_graphics_229 = new cjs.Graphics().p("AZmHCIAAuDMAooAAAIAAODg");
  var mask_graphics_230 = new cjs.Graphics().p("AY9HCIAAuDMAooAAAIAAODg");
  var mask_graphics_231 = new cjs.Graphics().p("AYaHCIAAuDMAooAAAIAAODg");
  var mask_graphics_232 = new cjs.Graphics().p("AX7HCIAAuDMAooAAAIAAODg");
  var mask_graphics_233 = new cjs.Graphics().p("AXhHCIAAuDMAonAAAIAAODg");
  var mask_graphics_234 = new cjs.Graphics().p("AXLHCIAAuDMAooAAAIAAODg");
  var mask_graphics_235 = new cjs.Graphics().p("AW6HCIAAuDMAooAAAIAAODg");
  var mask_graphics_236 = new cjs.Graphics().p("AWvHCIAAuDMAooAAAIAAODg");
  var mask_graphics_237 = new cjs.Graphics().p("AWnHCIAAuDMAooAAAIAAODg");
  var mask_graphics_238 = new cjs.Graphics().p("AWlHCIAAuDMAooAAAIAAODg");
  var mask_graphics_294 = new cjs.Graphics().p("EAmwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_295 = new cjs.Graphics().p("EAmtAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_296 = new cjs.Graphics().p("EAmmAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_297 = new cjs.Graphics().p("EAmZAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_298 = new cjs.Graphics().p("EAmHAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_299 = new cjs.Graphics().p("EAlwAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_300 = new cjs.Graphics().p("EAlUAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_301 = new cjs.Graphics().p("EAkzAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_302 = new cjs.Graphics().p("EAkNAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_303 = new cjs.Graphics().p("EAjiAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_304 = new cjs.Graphics().p("EAixAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_305 = new cjs.Graphics().p("EAh8AHCIAAuDMAooAAAIAAODg");
  var mask_graphics_306 = new cjs.Graphics().p("EAhBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_307 = new cjs.Graphics().p("EAgBAHCIAAuDMAooAAAIAAODg");
  var mask_graphics_308 = new cjs.Graphics().p("Ae9HCIAAuDMAonAAAIAAODg");
  var mask_graphics_309 = new cjs.Graphics().p("Ad4HCIAAuDMAonAAAIAAODg");
  var mask_graphics_310 = new cjs.Graphics().p("Ac3HCIAAuDMAooAAAIAAODg");
  var mask_graphics_311 = new cjs.Graphics().p("Ab8HCIAAuDMAooAAAIAAODg");
  var mask_graphics_312 = new cjs.Graphics().p("AbFHCIAAuDMAooAAAIAAODg");
  var mask_graphics_313 = new cjs.Graphics().p("AaTHCIAAuDMAooAAAIAAODg");
  var mask_graphics_314 = new cjs.Graphics().p("AZmHCIAAuDMAooAAAIAAODg");
  var mask_graphics_315 = new cjs.Graphics().p("AY9HCIAAuDMAooAAAIAAODg");
  var mask_graphics_316 = new cjs.Graphics().p("AYaHCIAAuDMAooAAAIAAODg");
  var mask_graphics_317 = new cjs.Graphics().p("AX7HCIAAuDMAooAAAIAAODg");
  var mask_graphics_318 = new cjs.Graphics().p("AXhHCIAAuDMAonAAAIAAODg");
  var mask_graphics_319 = new cjs.Graphics().p("AXLHCIAAuDMAooAAAIAAODg");
  var mask_graphics_320 = new cjs.Graphics().p("AW6HCIAAuDMAooAAAIAAODg");
  var mask_graphics_321 = new cjs.Graphics().p("AWvHCIAAuDMAooAAAIAAODg");
  var mask_graphics_322 = new cjs.Graphics().p("AWnHCIAAuDMAooAAAIAAODg");
  var mask_graphics_323 = new cjs.Graphics().p("AWlHCIAAuDMAooAAAIAAODg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 507.9988,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 507.7439,
   y: 45.0014
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 506.9793,
   y: 45.0021
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 505.7049,
   y: 45.0032
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 503.9209,
   y: 45.0047
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 501.627,
   y: 45.0067
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 498.8234,
   y: 45.0091
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 495.5101,
   y: 45.0119
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 491.6871,
   y: 45.0152
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 487.3543,
   y: 45.0189
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 482.5117,
   y: 45.023
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 477.1595,
   y: 45.0276
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 471.2975,
   y: 45.0326
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 464.9257,
   y: 45.038
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 458.0442,
   y: 44.9989
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 451.1428,
   y: 44.9876
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 444.7173,
   y: 44.9771
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 438.7678,
   y: 44.9674
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 433.2943,
   y: 44.9584
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 428.2967,
   y: 44.9502
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 423.7751,
   y: 44.9428
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 419.7295,
   y: 44.9362
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 416.1598,
   y: 44.9303
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 413.066,
   y: 44.9253
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 410.4483,
   y: 44.921
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 408.3065,
   y: 44.9175
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 406.6406,
   y: 44.9147
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 405.4507,
   y: 44.9128
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 404.7368,
   y: 44.9116
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 404.4988,
   y: 45.0012
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 507.9988,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 507.7439,
   y: 45.0014
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 506.9793,
   y: 45.0021
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 505.7049,
   y: 45.0032
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 503.9209,
   y: 45.0047
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 501.627,
   y: 45.0066
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 498.8234,
   y: 45.009
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 495.5101,
   y: 45.0118
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 491.6871,
   y: 45.015
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 487.3543,
   y: 45.0187
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 482.5117,
   y: 45.0228
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 477.1595,
   y: 45.0274
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 471.2975,
   y: 45.0323
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 464.9257,
   y: 45.0377
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 458.0442,
   y: 44.9986
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 451.1428,
   y: 44.9873
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 444.7173,
   y: 44.9768
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 438.7678,
   y: 44.9671
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 433.2943,
   y: 44.9582
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 428.2967,
   y: 44.95
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 423.7751,
   y: 44.9427
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 419.7295,
   y: 44.9361
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 416.1598,
   y: 44.9302
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 413.066,
   y: 44.9252
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 410.4483,
   y: 44.9209
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 408.3065,
   y: 44.9174
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 406.6406,
   y: 44.9147
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 405.4507,
   y: 44.9128
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 404.7368,
   y: 44.9116
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 404.4988,
   y: 45.0012
  }).wait(61).to({
   graphics: mask_graphics_209,
   x: 507.9988,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 507.7439,
   y: 45.0014
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 506.9793,
   y: 45.0021
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 505.7049,
   y: 45.0032
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 503.9209,
   y: 45.0047
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 501.627,
   y: 45.0066
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 498.8234,
   y: 45.009
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 495.5101,
   y: 45.0118
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 491.6871,
   y: 45.015
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 487.3543,
   y: 45.0187
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 482.5117,
   y: 45.0228
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 477.1595,
   y: 45.0274
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 471.2975,
   y: 45.0323
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 464.9257,
   y: 45.0377
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 458.0442,
   y: 44.9986
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 451.1428,
   y: 44.9873
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 444.7173,
   y: 44.9768
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 438.7678,
   y: 44.9671
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 433.2943,
   y: 44.9582
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 428.2967,
   y: 44.95
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 423.7751,
   y: 44.9427
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 419.7295,
   y: 44.9361
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 416.1598,
   y: 44.9302
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 413.066,
   y: 44.9252
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 410.4483,
   y: 44.9209
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 408.3065,
   y: 44.9174
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 406.6406,
   y: 44.9147
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 405.4507,
   y: 44.9128
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 404.7368,
   y: 44.9116
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 404.4988,
   y: 45.0012
  }).wait(56).to({
   graphics: mask_graphics_294,
   x: 507.9988,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 507.7439,
   y: 45.0014
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 506.9793,
   y: 45.0021
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 505.7049,
   y: 45.0032
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 503.9209,
   y: 45.0047
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 501.627,
   y: 45.0066
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 498.8234,
   y: 45.009
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 495.5101,
   y: 45.0118
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 491.6871,
   y: 45.015
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 487.3543,
   y: 45.0187
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 482.5117,
   y: 45.0228
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 477.1595,
   y: 45.0274
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 471.2975,
   y: 45.0323
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 464.9257,
   y: 45.0377
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 458.0442,
   y: 44.9986
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 451.1428,
   y: 44.9873
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 444.7173,
   y: 44.9768
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 438.7678,
   y: 44.9671
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 433.2943,
   y: 44.9582
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 428.2967,
   y: 44.95
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 423.7751,
   y: 44.9427
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 419.7295,
   y: 44.9361
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 416.1598,
   y: 44.9302
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 413.066,
   y: 44.9252
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 410.4483,
   y: 44.9209
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 408.3065,
   y: 44.9174
  }).wait(1).to({
   graphics: mask_graphics_320,
   x: 406.6406,
   y: 44.9147
  }).wait(1).to({
   graphics: mask_graphics_321,
   x: 405.4507,
   y: 44.9128
  }).wait(1).to({
   graphics: mask_graphics_322,
   x: 404.7368,
   y: 44.9116
  }).wait(1).to({
   graphics: mask_graphics_323,
   x: 404.4988,
   y: 45.0012
  }).wait(62));
  this.instance_15 = new lib.bg1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(658.9, 197, 1, 1, 0, 0, 0, 150, 197);
  var maskedShapeInstanceList = [this.instance_15];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 90).wait(176));
  this.instance_16 = new lib.bg2_1();
  this.instance_16.parent = this;
  this.instance_16.setTransform(658.9, 197, 1, 1, 0, 0, 0, 150, 197);
  this.instance_16._off = true;
  var maskedShapeInstanceList = [this.instance_16];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(175));
  this.instance_17 = new lib.bg3_1("synched", 0, false);
  this.instance_17.parent = this;
  this.instance_17.setTransform(658.9, 197, 1, 1, 0, 0, 0, 150, 197);
  this.instance_17._off = true;
  var maskedShapeInstanceList = [this.instance_17];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(209).to({
   _off: false
  }, 0).to({
   y: 101.75,
   mode: "single",
   startPosition: 84
  }, 69, cjs.Ease.get(0.5)).wait(1).to({
   startPosition: 84
  }, 0).to({
   y: 91.75,
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_18 = new lib.bg1();
  this.instance_18.parent = this;
  this.instance_18.setTransform(658.9, 197, 1, 1, 0, 0, 0, 150, 197);
  this.instance_18._off = true;
  var maskedShapeInstanceList = [this.instance_18];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(294).to({
   _off: false
  }, 0).wait(91));
  this.instance_19 = new lib.bg_01();
  this.instance_19.parent = this;
  this.instance_19.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(385));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -1.2, 970, 124.7);
 (lib.toyota_970x90 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(472.8, 43.6, 543.2, 79.9);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 970,
  height: 90,
  fps: 24,
  color: "#FFFFFF",
  opacity: 1.00,
  manifest: [{
   src: "bg.jpg",
   id: "bg"
  }, {
   src: "bg2.jpg",
   id: "bg2"
  }, {
   src: "bg3.jpg",
   id: "bg3"
  }, {
   src: "car.png",
   id: "car"
  }, {
   src: "style.png",
   id: "style"
  }, {
   src: "legal_01_d1.png",
   id: "legal_01_d1"
  }, ],
  preloads: []
 };
 (lib.Stage = function(canvas) {
  createjs.Stage.call(this, canvas);
 }).prototype = p = new createjs.Stage();
 p.setAutoPlay = function(autoPlay) {
  this.tickEnabled = autoPlay;
 }
 p.play = function() {
  this.tickEnabled = true;
  this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
 }
 p.stop = function(ms) {
  if (ms) this.seek(ms);
  this.tickEnabled = false;
 }
 p.seek = function(ms) {
  this.tickEnabled = true;
  this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
 }
 p.getDuration = function() {
  return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
 }
 p.getTimelinePosition = function() {
  return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
 }
 an.bootcompsLoaded = an.bootcompsLoaded || [];
 if (!an.bootstrapListeners) {
  an.bootstrapListeners = [];
 }
 an.bootstrapCallback = function(fnCallback) {
  an.bootstrapListeners.push(fnCallback);
  if (an.bootcompsLoaded.length > 0) {
   for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
    fnCallback(an.bootcompsLoaded[i]);
   }
  }
 };
 an.compositions = an.compositions || {};
 an.compositions['1E4D562F91EE4B408F0AC49B20246D76'] = {
  getStage: function() {
   return exportRoot.getStage();
  },
  getLibrary: function() {
   return lib;
  },
  getSpriteSheet: function() {
   return ss;
  },
  getImages: function() {
   return img;
  }
 };
 an.compositionLoaded = function(id) {
  an.bootcompsLoaded.push(id);
  for (var j = 0; j < an.bootstrapListeners.length; j++) {
   an.bootstrapListeners[j](id);
  }
 }
 an.getComposition = function(id) {
  return an.compositions[id];
 }
 an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
  var lastW, lastH, lastS = 1;
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function resizeCanvas() {
   var w = lib.properties.width,
    h = lib.properties.height;
   var iw = window.innerWidth,
    ih = window.innerHeight;
   var pRatio = window.devicePixelRatio || 1,
    xRatio = iw / w,
    yRatio = ih / h,
    sRatio = 1;
   if (isResp) {
    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
     sRatio = lastS;
    } else if (!isScale) {
     if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
    } else if (scaleType == 1) {
     sRatio = Math.min(xRatio, yRatio);
    } else if (scaleType == 2) {
     sRatio = Math.max(xRatio, yRatio);
    }
   }
   domContainers[0].width = w * pRatio * sRatio;
   domContainers[0].height = h * pRatio * sRatio;
   domContainers.forEach(function(container) {
    container.style.width = w * sRatio + 'px';
    container.style.height = h * sRatio + 'px';
   });
   stage.scaleX = pRatio * sRatio;
   stage.scaleY = pRatio * sRatio;
   lastW = iw;
   lastH = ih;
   lastS = sRatio;
   stage.tickOnUpdate = false;
   stage.update();
   stage.tickOnUpdate = true;
  }
 }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;