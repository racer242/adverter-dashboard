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
  this.shape.graphics.f("#FF0022").s().p("ACADDQgNgOAAgYQAAghASgWQAUgYAhAAQAZAAAOAOQANAOAAAYQAAAigSAWQgUAXggAAQgaAAgOgOgAClB4IgEAYIgCAUQAAARAMAAQAMAAAGgOQACgGACgRIACgVQAAgRgNAAQgMAAgFAOgAhqDDQgOgOAAgYQAAghATgWQATgYAhAAQAaAAAOAOQAMAOAAAYQAAAigRAWQgUAXghAAQgaAAgNgOgAhGB4QgCAFgCATIgCAUQAAARANAAQALAAAGgOQACgGACgRIACgVQAAgRgNAAQgMAAgFAOgAG2DPIAEgBIAFgCIAAgFQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgCAAIABgEQADgDgBgJQgBgJgCgBQgFgCABgHIALgWQAFgOABgKQABgFAGgSQAGgNgEgKQgBgFABgNQAAgKAHgUQAGgUABgJQABgGgCgIIgDgOIABgCIgBACQgBAEgCgCIgCgBIADAFIACAHQABAGAAANIgBACIgDgDIgCgDQgCgDgDAAIACAEIABAAIABABIgFAJIgCABIgCgBQgJgDADgLIAFgNQADgGAFgEIABgCIgGgDIgFgDIAFgCIAGgCIAHAAQgFgCgEACIgIACIgBABIgCAAIAAgBQAHgLADgPQACgJACgSQAAgYACgLQADgTALgNIAEgIIAAgDIgCABQgBACgJALQgHAJAAAHQgGAoAAAUQAAAHgFAKIgHAPIgCACIgCgCIgCgCIgBABQgCAEgEAAIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgRQgBgGACgKIAAgQQgBgbgBgMQgCgVgIgRIgGgJIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAIADADIAEAGIAAABIgBAAQgEgCgDgGIgBgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADgCQAGgEAJgBIAMgBIADgBIghABIABAAIAIABIgHACQgNAGAAAHIADgCIABABIgBAGIgDgCQAAAFADAFIAGANIACAEIgCgGIAAgBIABABQAFAQgBAPIgBAYQABgYgDgYQAAAFgCAHQgDAIAAAEIgDAPIgBAOQgCAFAAAfIAAACIACAAQABgGACgDIABgJQABgdAEgbQACAdgEAWQgEAbgOAWIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIABgEIABAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIADgEIABgGIAAgDIgBACQgBgBAAABQgBAAAAAAQAAAAAAABQAAABAAABQAAABAAAAQgBAAAAAAQAAAAgBAAQgBgBgBgBIgBABIgBAAIgCAEIgBgSIgBgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIADgCIAAgEQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBABAAQAAgBgBgBIAAgDIAAAEIgBgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgBABIgDAAIAAgEIADAAIACgBIABgGIgDgBIgDAAIAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgHgDACgCQACgCAEgDIACgDIgCgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAgFIACgXQAAgOgHgJQgDgEgGgDIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQABgBAAAAQADgHAHgDQAFgCAJgBIABgBICYAAIg6GfgAGCg/QAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgFgEABIgCAAIABAEgAHVixQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAEABIAHAAIAEAAIgFgBIgEAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAGAAIAGgCQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIACgEIgDAEQgDADgFAAIgLgBQgGAAABAGgAHVi/QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAFAAIASAAIACgBIgCAAQgPABgFgBIgCgBIACgCIAWgCIAAgBIgUgBQgIABABAFgAD8DPIA6mfIBPAAIgQADQgJACgEAGIgCAEIADgCIAAABIAAACQABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAABAAIAGAaQADAPAAAMQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgWgFgYAMQgDABgBAGQAAAAAAABQAAAAABAAQAAABABAAQABAAAAAAIABABIAAABIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIACACQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAFgCAGABIAMACQAGAAgBAHQgRBKAPA3IAAABIAAAAIgBgCIAAAEIABAKIACAKIAQAwQAIAbABAXIABAKQAAAHgEAEQgDAEgBAIQAAAJACADIABAFIgDABIgBgBIgBgDIgCADIAAAEIABAEIABABgAABDPIAFgiIAogWQAWgOAAgOQAAgIgHgEQgGgEgJAAQgPAAgNAGIADgfQAXgEASAAQAyAAAAAkQAAATgQAQQgLAMgWALIgLAGIAAAAIAzAAIgEAdgAjpDPIAEgiIApgWQAVgOAAgOQAAgIgGgEQgGgEgJAAQgQAAgNAGIADgfQAXgEASAAQAyAAAAAkQAAATgQAQQgLAMgWALIgMAGIAAAAIA1AAIgEAdgAF/DHQgDAAgCgDIAAAAIAMACIgCABIgFAAgAGqC7QACgEgCgEQgEgEgGACQgFABgHgDQgBAAAAgIIAAgPIACAEQAAgFABgGIALggQAHgSAGgNQACgEAAgMQAAgMACgFIACgNIACgCIAAABQAKAUABAYQAAAngTAqQgEAHgGgBQgFAAgHgDQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAADQgBAFAEAAIAHABIAKACQgCACgCAAIgGAAIgBABIACADIACAAIAFgBIgFAAQADgBAHABQAFgCABgGQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADABIgCACIgBABIADABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCAAIgDABQABABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQgBABAAAAQAAABAAABQAAAAABABQAAAAABABQAEABgBAGIgDABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgIABQgDAAADgIgAF9DBQgEgBABgFIAAgHQgCgFACAAIAJAAIAJACIgBAAQgFgBgBACIAAAHIgBAIQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgFgCgAGLCsIABgDQABgDAAgGIAAgKIAAgDIACAEIABAEIgBAPQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAAAAIgCgBgAF+CmIAAgBIABgKIACAHIABgBIABgWQgBgJgBgRIgDgcIgCgJIAAgSIADAHIACAHIAJAqQAFAagDASQgCAFgDABQgBABgFACIgDgBgAGuClIAAgBIACgGQAPgnADgbIABgPIAAAFIAAgCIAAgBIABgDIAAABQAAAVgHAXIgMApIgCAEIgBgBgAGWB5QAHgcABgIQAGgZgFgRIABgDIAFAaQgCAYgNAgIAAABgAGWBxIAAgUIgBgJIgBgJIABgPIAAgLQgCgEADgCIAGgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAEQADAPgDASQgCAOgGATIAAAAgAkJBQIAPgaIgVhFIAaAAIAMApIASgpIAbAAIgwBfgAljBQIALhDIAAAAIgOAQQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAgBIgBAAQgBAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAJgVAMgHIADgWIAZAAIgBAJQAFgBAJAAQAPAAAHAJQAIAIAAAOQAAAXgOANQgMALgUAAIgJgBIgEATgAk9AEIgGAmIAFABQAKAAAGgJQAFgGABgLQgBgHgDgEQgEgEgGAAQgEAAgDACgAGEBFQgFgMACgGIABgCIAFARIgBADIABAJIgDgJgAhtAzQgHgJAAgNQABgVAKgLQALgOAVAAQAUAAAHAQQAHAKgEAUIguAAQgBAQARAAQAPAAAMgIIgDAUQgMAGgSAAQgVAAgJgMgAhYAQIAWAAQACgQgLAAQgMAAgBAQgAjPArQAIgBACgCQAEgCACgEQADgGAHgaIADgRIA+AAIgMBMIgZAAIAJg5IgPAAIgFAVQgEARgFAIQgKALgUACgAnEAiQAAgYAOgNQAQgNAWAAIAdABIgNBMIgYAAIABgIIAAAAQgIAKgNAAQgYAAAAgdgAmlALQgFAIgBALQgBAGAEAEQACADAEAAQAHAAAGgFIAFgjIgDgBQgLAAgHAJgAocA2IADgXQARAJAQAAQASAAAAgMQgBgLgPAAIgQAAIADgUIAPAAQATAAgBgMQAAgJgQAAQgQABgPAIIAEgYQAPgGAUAAQAOAAAJAFQAMAIAAAOQABASgSAFQAIADADAGQADAGAAAIQAAARgOAKQgNAIgSAAQgWAAgPgJgAAkA9IABgoIgWAoIgNAAIgKgnIgJAnIgYAAIAShMIAaAAIAMAlIAUglIAaAAIAABMgAHCA4IgGgYIAAgBIAAABIAHAWIAAADgAGNA1IgDgEIgBgEIABgLQAAgGgBgEQgCgCAAgEIgCgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQADgBAFAEIADAEQAAABAAAAQABAAAAgBQABAAAAAAQABgBAAgBIABAAIAAABIgCAGQgCAFgFgGIgBAAIAAABIAAADIAAgBIABAEIADAOQAAAHgDAGQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgBAAgAFxAsIgHgEQgEgBgBgEQACgIgBgHIAAgBIABABQAFAKAIADQAFABgCAGQAAAAAAAAQgBABAAAAQAAABABAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgEgBgAGVAoIABgBIAcgKIAAAAIAEgBIgGADQgSAJgIABgAGUAiIAKgDIAJgBIgRAHIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBgAG1AUQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBIABgFIABABIAAAHQgBAEgDABgAFfAIQgIgXABgXQAAgfAJgjIACgCIABADIgHAkQgEAWABAQQADAZADALIAAADgAGrABIgCgBIAAgEIABgFIASgUIACAAQAAAAAAABQAAAAAAABQABAAABAAQABAAACAAQAFgBgGAFQgGADgCAHIgCALIgBACIgBABgAFygjQgDgVgBgLIABgTIABgUIAAgBQAHgHgEAAIgHABQgJgDADgIQABgDAHAAIADABIgDgBIgEgBQgGAAgEAHQAAADgGAAIgGgCQgFACgDgBQgEAAgCgFIAAgCIACAAIACACIgCgDQAAAAAAAAQgBAAAAgBQAAAAAAAAQABAAAAgBIABAAQAbgKAdAKIABACIgBABQgOAAAEAOQAEAXgBAKQgBAHABAMIABAMIADAKQAAABAAAAQAAAAABAAQAAABABAAQAAAAABABQABAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgDAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHgBgCgIgAGDgcIAAgBQAHgHAGgLIgFALIAAABIABgBIABAAIgCAEIgGAFgADqggIAKg8IgaA8IgvAAIANhTIAdAAIgKA6IAYg6IAxAAIgOBTgABNggIAOhTIA1AAQAOAAAGAGQAKAHgDAPQgCAQgKAIQgKAHgNAAIgWAAIgFAYgABzhLIAHAAQAQAAABgLQACgKgQAAIgHAAgAAhggIAKg7IgWAAIgJA7IgfAAIANhTIBVAAIgOBTgAhlggIADgeIgVAAIgEAeIggAAIAMhTIAhAAIgFAcIAVAAIAGgcIAfAAIgNBTgAjBggIgDgSIgaAAIgJASIgfAAIAqhTIAsAAIARBTgAjXhGIASAAIgEgbIgBAAgAlRggIAOhTIA2AAQAMAAAHAGQAJAHgCAPQgDAQgKAIQgJAHgNAAIgYAAIgDAYgAkrhLIAGAAQARAAABgLQACgKgQAAIgHAAgAmhggIAOhTIBHAAIgDAYIgpAAIgJA7gAg6g2IAEgUIAhAAIgEAUgAFwiHIgBgJIABAAIgCgUIAAgBIABABQACANAAAQIgBABg");
  this.shape.setTransform(53.3589, 45.1443, 0.6756, 0.6753);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ap0EgIAAo/ITpAAIAAI/g");
  this.shape_1.setTransform(53.1731, 45.7183, 0.6756, 0.6753);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(10.7, 26.3, 85, 38.900000000000006), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape.setTransform(114.975, 61.675);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAaAAQAMAAAHAGQAHAHABAKQAAAHgDAFQgDAFgHAEQAJABAFAGQAEAFABAJQgBAIgDAGQgDAGgHADQgGADgJAAgAgTAmIATAAQAKAAAFgFQAFgFAAgIQAAgIgFgEQgFgEgIAAIgVAAgAgTgDIARAAQAEgBAEgCQAEgCACgEQACgEAAgFQAAgHgFgEQgFgEgIAAIgPAAg");
  this.shape_1.setTransform(107.025, 61.675);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgYApQgKgGgHgKQgGgLAAgOQAAgNAGgLQAHgKAKgHQALgFANAAQAOAAALAFQALAHAGAKQAGALAAANQAAANgGAMQgGAKgLAGQgLAGgOAAQgNAAgLgGgAgSghQgJAGgFAIQgFAJAAAKQAAALAFAIQAFAJAJAFQAIAFAKAAQALAAAJgFQAIgFAGgJQAEgIAAgLQAAgKgEgJQgGgIgIgGQgJgEgLAAQgKAAgIAEg");
  this.shape_2.setTransform(97.15, 61.7);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgTAsQgIgEgEgFIAFgIIAGAGQAEADAFABQAFABAGAAQAKAAAGgEQAHgGAAgIQAAgKgIgDQgIgFgPAAIAAgHQAKAAAHgDQAGgDACgEQACgDAAgFQAAgHgFgEQgFgEgJAAQgGAAgGADQgGACgFAFIgEgIQAFgFAHgDQAHgCAJAAQAIgBAGADQAHADADAFQAEAFAAAHQAAAJgFAGQgGAFgIACQAKABAGAGQAGAFAAAKQAAAIgDAHQgEAFgHAEQgIAEgKgBQgLAAgIgDg");
  this.shape_3.setTransform(87.625, 61.7);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgZAuIgGgCIACgIIAFACIAGAAQAGAAAEgDQAEgDADgIIglhGIALAAIAdA8IAag8IALAAIgfBGIgGAMQgCAFgFADQgEADgIAAIgIgBg");
  this.shape_4.setTransform(80.15, 61.75);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAWAuIglgqIgJAAIAAAqIgJAAIAAhbIAJAAIAAAqIAIAAIAjgqIALAAIglAtIApAug");
  this.shape_5.setTransform(72.675, 61.7);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAaAuIAAgqIgzAAIAAAqIgKAAIAAhbIAKAAIAAAqIAzAAIAAgqIAKAAIAABbg");
  this.shape_6.setTransform(59.775, 61.675);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAbA6IAAhMIg2BMIgJAAIAAhbIAKAAIAABMIA2hMIAJAAIAABbgAgOguQgFgEAAgHIAHAAQAAAEAEACQAEACAEAAQAGAAADgCQADgCABgEIAHAAQgBAHgFAEQgFAEgJAAQgIAAgGgEg");
  this.shape_7.setTransform(49.9, 60.5);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape_8.setTransform(40.625, 61.675);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgTAsQgIgEgEgFIAFgIIAGAGQAEADAFABQAFABAGAAQAKAAAGgEQAHgGAAgIQAAgKgIgDQgIgFgPAAIAAgHQAKAAAHgDQAGgDACgEQACgDAAgFQAAgHgFgEQgFgEgJAAQgGAAgGADQgGACgFAFIgEgIQAFgFAHgDQAHgCAJAAQAIgBAGADQAHADADAFQAEAFAAAHQAAAJgFAGQgGAFgIACQAKABAGAGQAGAFAAAKQAAAIgDAHQgEAFgHAEQgIAEgKgBQgLAAgIgDg");
  this.shape_9.setTransform(32.425, 61.7);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAbAuIAAhMIg2BMIgJAAIAAhbIAKAAIAABMIA2hMIAJAAIAABbg");
  this.shape_10.setTransform(23.8, 61.675);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAgA5IAAgVIg/AAIAAAVIgJAAIAAgeIAFAAQADAAACgDIAEgIIACgMIAHg8IAwAAIAABTIAKAAIAAAegAgOAFQgBAJgCAGQgCAFgCACIAqAAIAAhKIgdAAg");
  this.shape_11.setTransform(14.275, 62.75);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAbA6IAAhMIg2BMIgJAAIAAhcIAJAAIAABNIA3hNIAJAAIAABcgAgOguQgFgDAAgIIAHAAQAAAEAEACQADACAFABQAFgBAEgCQADgCABgEIAHAAQgBAIgFADQgGAEgIAAQgIAAgGgEg");
  this.shape_12.setTransform(101.3, 45.95);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAjAuIAAhbIAKAAIAABbgAgrAuIAAhbIAJAAIAAAnIAUAAQAPABAHAFQAIAHgBAMQABAIgEAGQgDAGgGAEQgGADgLAAgAgiAmIAUAAQAKAAAEgFQAGgFgBgJQABgJgGgEQgFgEgJAAIgUAAg");
  this.shape_13.setTransform(90.55, 47.125);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAaAuIAAgqIgzAAIAAAqIgKAAIAAhbIAKAAIAAAqIAzAAIAAgqIAKAAIAABbg");
  this.shape_14.setTransform(79.925, 47.125);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgDAuIAAhSIgaAAIAAgJIA8AAIAAAJIgaAAIAABSg");
  this.shape_15.setTransform(71.7, 47.125);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgZAuIAAhbIAyAAIAAAJIgoAAIAAAhIAnAAIAAAHIgnAAIAAAhIApAAIAAAJg");
  this.shape_16.setTransform(64.825, 47.125);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAaAAQAMAAAHAGQAHAHABAKQAAAHgDAFQgDAFgHAEQAJABAFAGQAEAFABAJQgBAIgDAGQgDAGgHADQgGADgJAAgAgTAmIATAAQAKAAAFgFQAFgFAAgIQAAgIgFgEQgFgEgIAAIgVAAgAgTgDIARAAQAEgBAEgCQAEgCACgEQACgEAAgFQAAgHgFgEQgFgEgIAAIgPAAg");
  this.shape_17.setTransform(57.275, 47.125);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAgA5IAAgWIhIAAIAAhbIAKAAIAABSIAyAAIAAhSIAKAAIAABSIALAAIAAAfg");
  this.shape_18.setTransform(48.575, 48.2);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAaAuIgagnIgZAnIgLAAIAfguIgegtIALAAIAYAmIAagmIAKAAIgfAtIAhAug");
  this.shape_19.setTransform(39, 47.125);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgYAuIgHgCIACgIIAGABIAGABQAFAAAEgDQADgEADgGIgkhHIALAAIAdA9IAbg9IAKAAIgfBGIgGAMQgDAFgEADQgFADgHAAIgHgBg");
  this.shape_20.setTransform(30.8, 47.2);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAaAAQAMAAAHAGQAHAHABAKQAAAHgDAFQgDAFgHAEQAJABAFAGQAEAFABAJQgBAIgDAGQgDAGgHADQgGADgJAAgAgTAmIATAAQAKAAAFgFQAFgFAAgIQAAgIgFgEQgFgEgIAAIgVAAgAgTgDIARAAQAEgBAEgCQAEgCACgEQACgEAAgFQAAgHgFgEQgFgEgIAAIgPAAg");
  this.shape_21.setTransform(23.075, 47.125);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAgA5IAAgWIg/AAIAAAWIgJAAIAAgfIAFAAQADAAACgCIAEgIIACgLIAHg9IAwAAIAABSIAKAAIAAAfgAgOAFQgBAJgCAFQgCAGgCABIAqAAIAAhJIgdAAg");
  this.shape_22.setTransform(14.275, 48.2);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAbA6IAAhMIg2BMIgJAAIAAhbIAJAAIAABMIA3hMIAJAAIAABbgAgNguQgGgEAAgHIAHAAQAAAFAEACQADACAFAAQAFAAAEgCQADgCABgFIAHAAQgBAHgFAEQgGAEgIAAQgJAAgEgEg");
  this.shape_23.setTransform(119.85, 31.4);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAjAuIAAhbIAKAAIAABbgAgrAuIAAhbIAJAAIAAAnIAUAAQAPABAHAFQAIAHgBAMQAAAIgDAGQgDAGgHAEQgFADgLAAgAgiAmIATAAQALAAAEgFQAGgFgBgJQABgJgGgEQgFgEgKAAIgTAAg");
  this.shape_24.setTransform(109.1, 32.575);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAaAuIAAgqIgzAAIAAAqIgKAAIAAhbIAKAAIAAAqIAzAAIAAgqIAKAAIAABbg");
  this.shape_25.setTransform(98.475, 32.575);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAKAAIAAAnIATAAQAPABAIAFQAHAHAAAMQAAAIgEAGQgCAGgHAEQgHADgKAAgAgTAmIATAAQAJAAAGgFQAFgFAAgJQAAgJgFgEQgHgEgIAAIgTAAg");
  this.shape_26.setTransform(90.05, 32.575);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AggAuIgEgBIACgJIADABIADABQAEAAACgDQABgDABgGIAHhIIAxAAIAABcIgJAAIAAhTIgfAAIgHBCQAAAJgFAEQgDAFgIAAIgFgBg");
  this.shape_27.setTransform(80.8, 32.625);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgZAuIAAhbIAyAAIAAAJIgoAAIAAAhIAnAAIAAAHIgnAAIAAAhIApAAIAAAJg");
  this.shape_28.setTransform(73.675, 32.575);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgEAuIAAhSIgaAAIAAgJIA8AAIAAAJIgZAAIAABSg");
  this.shape_29.setTransform(66.45, 32.575);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAbAuIAAhMIg2BMIgJAAIAAhbIAJAAIAABMIA3hMIAJAAIAABbg");
  this.shape_30.setTransform(58.1, 32.575);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgTAsQgIgEgEgFIAFgIIAGAFQAEAEAFABQAFABAGABQAKAAAGgGQAHgEAAgJQAAgJgIgFQgIgEgPAAIAAgHQAKAAAHgDQAGgDACgEQACgEAAgEQAAgHgFgEQgFgEgJAAQgGAAgGADQgGACgFAEIgEgHQAFgEAHgDQAHgDAJgBQAIAAAGADQAHADADAFQAEAFAAAHQAAAJgFAGQgGAFgIACQAKACAGAEQAGAGAAAKQAAAIgDAHQgEAGgHADQgIADgKAAQgLABgIgEg");
  this.shape_31.setTransform(49.175, 32.6);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape_32.setTransform(41.275, 32.575);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgbAuIAAhbIAZAAQAJAAAHAEQAHADAEAGQADAHAAAIQAAAIgDAHQgEAFgHAFQgHAEgJAAIgQAAIAAAigAgSADIAPAAQAFAAAFgCQAFgCADgEQADgFAAgHQAAgHgDgEQgDgFgFgCQgFgCgFABIgPAAg");
  this.shape_33.setTransform(33.625, 32.575);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AAjAuIAAhbIAJAAIAABbgAgsAuIAAhbIAKAAIAAAnIAVAAQAOABAHAFQAHAHAAAMQAAAIgDAGQgDAGgGAEQgGADgKAAgAgiAmIAUAAQAKAAAEgFQAFgFAAgJQAAgJgFgEQgFgEgJAAIgUAAg");
  this.shape_34.setTransform(23.75, 32.575);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAaAAQAMAAAHAGQAHAHABAKQAAAHgDAFQgDAFgHAEQAJABAFAGQAEAFABAJQgBAIgDAGQgDAGgHADQgGADgJAAgAgTAmIATAAQAKAAAFgFQAFgFAAgIQAAgIgFgEQgFgEgIAAIgVAAgAgTgDIARAAQAEgBAEgCQAEgCACgEQACgEAAgFQAAgHgFgEQgFgEgIAAIgPAAg");
  this.shape_35.setTransform(14.325, 32.575);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(8, 20, 181.5, 51.7), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAmCfQgTgYAAgsQAAgsATgYQAUgYAjAAQAjAAATAYQAUAYAAAsQAAAsgUAYQgTAYgjABQgjgBgUgYgAA8ApQgLAQAAAiQAAAhALARQALARAWAAQAWAAALgRQAKgRAAghQAAgigKgQQgLgRgWAAQgWAAgLARgAh6C1IDVlpIAgAAIjVFpgAiSgVQgUgZAAgtQAAgrAUgYQATgZAjAAQAjAAAUAZQATAYABArQgBAtgTAZQgUAXgjAAQgjAAgTgXgAh8iMQgLARAAAhQAAAhALARQAKARAWAAQAWAAALgRQALgRAAgiQAAgggLgRQgLgRgWAAQgWAAgKARg");
  this.shape.setTransform(174.275, 45.45);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAkC1IAAhRIiiAAIAAgYICtkAIAbAAIAAD3IA1AAIAAAhIg1AAIAABRgAhUBDIB4AAIAAi0g");
  this.shape_1.setTransform(145.525, 45.45);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(129, 2, 181.5, 76.8), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape.setTransform(125.325, 59.675);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAWAuIglgqIgJAAIAAAqIgJAAIAAhbIAJAAIAAApIAIAAIAjgpIALAAIglAtIApAug");
  this.shape_1.setTransform(118.125, 59.7);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAaAAQAMAAAHAGQAHAHABAKQAAAHgDAFQgDAFgHAEQAJABAFAGQAEAFABAJQgBAIgDAGQgDAGgHADQgGADgJAAgAgTAmIATAAQAKAAAFgFQAFgFAAgIQAAgIgFgEQgFgEgIAAIgVAAgAgTgDIARAAQAEgBAEgCQAEgCACgEQACgEAAgFQAAgHgFgEQgFgEgIAAIgPAAg");
  this.shape_2.setTransform(110.225, 59.675);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape_3.setTransform(102.175, 59.675);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgEAuIAAhSIgaAAIAAgJIA8AAIAAAJIgZAAIAABSg");
  this.shape_4.setTransform(95.05, 59.675);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQgKgGgHgKQgGgLAAgOQAAgOAGgKQAHgKAKgHQALgFANAAQAJAAAIACQAIADAFAFIgCAJQgGgFgHgCQgIgDgHAAQgKAAgIAEQgJAFgFAJQgFAJAAAKQAAAKAFAJQAFAJAJAFQAIAFAKAAQAJAAAHgDQAIgDAFgEIADAJQgHAFgIADQgIACgJAAQgNAAgLgGg");
  this.shape_5.setTransform(87.6, 59.7);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAWAuIAAgmIgRAAIgBAAIgBAAIgXAmIgLAAIAZgoQgHgDgFgGQgFgHAAgJQABgMAHgHQAIgHANAAIAaAAIAABbgAgCgjQgEACgDAEQgDAEgBAHQABAGADAEQACAFAFACQADABAFAAIAQAAIAAgkIgPAAIgCAAQgEAAgDABg");
  this.shape_6.setTransform(76, 59.675);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape_7.setTransform(68.625, 59.675);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAaAuIAAgqIgzAAIAAAqIgKAAIAAhbIAKAAIAAAqIAzAAIAAgqIAKAAIAABbg");
  this.shape_8.setTransform(59.975, 59.675);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgDAuIAAhSIgaAAIAAgJIA7AAIAAAJIgZAAIAABSg");
  this.shape_9.setTransform(52.25, 59.675);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAcAuIAAhMIg3BMIgJAAIAAhbIAKAAIAABMIA2hMIAJAAIAABbg");
  this.shape_10.setTransform(44.4, 59.675);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAgA5IAAgWIg/AAIAAAWIgJAAIAAgfIAFAAQADAAACgCIAEgIIACgLIAHg9IAwAAIAABSIAKAAIAAAfgAgOAFQgBAJgCAGQgCAFgCABIAqAAIAAhJIgdAAg");
  this.shape_11.setTransform(35.375, 60.75);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgZAuIAAhbIAyAAIAAAJIgoAAIAAAhIAnAAIAAAHIgnAAIAAAhIApAAIAAAJg");
  this.shape_12.setTransform(28.125, 59.675);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AgbAuIAAhbIAZAAQAJAAAHAEQAHADAEAGQADAHAAAIQAAAIgDAHQgEAFgHAFQgHAEgJAAIgQAAIAAAigAgSADIAPAAQAFAAAFgCQAFgCADgEQADgFAAgHQAAgHgDgEQgDgFgFgCQgFgCgFABIgPAAg");
  this.shape_13.setTransform(21.375, 59.675);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAWAuIglgqIgJAAIAAAqIgJAAIAAhbIAJAAIAAApIAIAAIAjgpIALAAIglAtIApAug");
  this.shape_14.setTransform(14.325, 59.7);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAXAuIAAgmIgSAAIgBAAIgBAAIgXAmIgLAAIAZgoQgHgDgFgGQgFgHAAgJQABgMAHgHQAIgHANAAIAaAAIAABbgAgCgjQgEACgDAEQgDAEAAAHQAAAGADAEQACAFAFACQADABAFAAIARAAIAAgkIgQAAIgCAAQgEAAgDABg");
  this.shape_15.setTransform(97.7, 46.125);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape_16.setTransform(90.325, 46.125);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AAaAuIAAgqIgzAAIAAAqIgKAAIAAhbIAKAAIAAAqIAzAAIAAgqIAKAAIAABbg");
  this.shape_17.setTransform(81.675, 46.125);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAKAAIAAAnIATAAQAQABAGAFQAIAHAAAMQAAAIgDAGQgDAGgHAEQgGADgLAAgAgTAmIATAAQAJAAAGgFQAFgFAAgJQAAgJgFgEQgHgEgIAAIgTAAg");
  this.shape_18.setTransform(73.75, 46.125);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AggAuIgDgBIACgJIACABIAEABQADAAABgDQACgDABgGIAHhIIAyAAIAABcIgKAAIAAhTIggAAIgGBCQgBAJgDAEQgEAFgIAAIgFgBg");
  this.shape_19.setTransform(65, 46.175);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AAeAuIgLgeIglAAIgMAeIgKAAIAkhbIAJAAIAkBbgAAQAIIgQgqIgPAqIAfAAg");
  this.shape_20.setTransform(57.625, 46.125);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AAbAuIAAhMIg2BMIgJAAIAAhbIAJAAIAABMIA3hMIAJAAIAABbg");
  this.shape_21.setTransform(48.85, 46.125);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAgA5IAAgVIhIAAIAAhcIAKAAIAABTIAyAAIAAhTIAKAAIAABTIALAAIAAAeg");
  this.shape_22.setTransform(39.925, 47.2);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgZAuIAAhbIAyAAIAAAJIgoAAIAAAhIAnAAIAAAHIgnAAIAAAhIApAAIAAAJg");
  this.shape_23.setTransform(31.525, 46.125);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAZAuIAAhSIgyAAIAABSIgJAAIAAhbIBFAAIAABbg");
  this.shape_24.setTransform(23.325, 46.125);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgQApQgLgGgFgLQgHgLAAgNQAAgNAHgLQAFgLALgFQALgHANAAQAJABAIACQAHADAHAEIgEAKQgFgFgHgDQgIgCgHgBQgKABgJAFQgIAEgFAJQgFAIAAALQAAALAFAIQAFAJAIAFQAJAFAKAAQAJAAAHgDQAHgDAGgFIADAJQgHAGgIACQgIADgKABQgMgBgLgGg");
  this.shape_25.setTransform(14.4, 46.15);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgZAuIAAhbIAyAAIAAAJIgoAAIAAAhIAnAAIAAAHIgnAAIAAAhIApAAIAAAJg");
  this.shape_26.setTransform(65.625, 32.575);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgbAuIAAhbIAZAAQAJAAAHAEQAHADAEAGQADAHAAAIQAAAIgDAHQgEAFgHAFQgHAEgJAAIgQAAIAAAigAgSADIAPAAQAFAAAFgCQAFgCADgEQADgFAAgHQAAgHgDgEQgDgFgFgCQgFgCgFABIgPAAg");
  this.shape_27.setTransform(58.875, 32.575);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAwAAIAAAJIgmAAIAAAeIATAAQAQABAGAFQAIAHAAAMQAAAIgDAGQgDAGgHAEQgGADgLAAgAgTAmIATAAQAJAAAGgFQAFgFAAgJQAAgJgFgEQgHgEgIAAIgTAAg");
  this.shape_28.setTransform(51.7, 32.575);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAWAuIAAgmIgRAAIgBAAIgBAAIgXAmIgLAAIAZgoQgIgDgEgGQgEgHgBgJQABgMAHgHQAIgHANAAIAaAAIAABbgAgCgjQgEACgDAEQgEAEAAAHQAAAGAEAEQACAFAEACQADABAGAAIAQAAIAAgkIgQAAIgBAAQgEAAgDABg");
  this.shape_29.setTransform(43.4, 32.575);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgYApQgKgGgHgLQgGgKAAgOQAAgNAGgLQAHgKAKgHQAMgFAMgBQAOABALAFQALAHAGAKQAGALAAANQAAAOgGAKQgGALgLAGQgLAGgOAAQgNAAgLgGgAgSghQgJAFgFAJQgFAJAAAKQAAALAFAJQAFAIAJAFQAIAFAKAAQALAAAJgFQAIgFAGgIQAEgJAAgLQAAgKgEgJQgGgJgIgFQgJgEgLgBQgKABgIAEg");
  this.shape_30.setTransform(34.7, 32.6);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAaAuIAAgqIgzAAIAAAqIgKAAIAAhbIAKAAIAAAqIAzAAIAAgqIAKAAIAABbg");
  this.shape_31.setTransform(24.725, 32.575);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAaAAQAMAAAHAGQAHAHABAKQAAAHgDAFQgDAFgHAEQAJABAFAGQAEAFABAJQgBAIgDAGQgDAGgHADQgGADgJAAgAgTAmIATAAQAKAAAFgFQAFgFAAgIQAAgIgFgEQgFgEgIAAIgVAAgAgTgDIARAAQAEgBAEgCQAEgCACgEQACgEAAgFQAAgHgFgEQgFgEgIAAIgPAAg");
  this.shape_32.setTransform(13.875, 32.575);
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(7.6, 20, 223.4, 49.7), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(117, 5, 0.4881, 0.4877);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(117, 5, 58.099999999999994, 20), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAHA5IAAgXIgwAAIAAgOIAxhMIAUAAIAABJIAOAAIAAARIgOAAIAAAXgAgVARIAcAAIAAgsg");
  this.shape.setTransform(110.475, 14.775);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgKA5IgqhxIAYAAIAdBXIAdhXIAXAAIgpBxg");
  this.shape_1.setTransform(101.1, 14.775);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAfA5IgLggIgoAAIgLAgIgWAAIAqhxIAXAAIAqBxgAAOAIIgOgoIgOAoIAcAAg");
  this.shape_2.setTransform(90.725, 14.775);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AASA5IgagtIgNAAIAAAtIgWAAIAAhxIAoAAQALAAAIAFQAJAEAEAHQAEAIAAAJQAAALgFAJQgFAHgLAFIAgAwgAgVgEIAOAAQAFAAAEgCQAEgBACgEQADgEAAgGQAAgJgGgEQgFgEgHAAIgOAAg");
  this.shape_3.setTransform(80.975, 14.775);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAfA5IgLggIgoAAIgLAgIgWAAIAqhxIAXAAIAqBxgAAOAIIgOgoIgOAoIAcAAg");
  this.shape_4.setTransform(66.975, 14.775);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgJA5IAAheIgfAAIAAgTIBRAAIAAATIgeAAIAABeg");
  this.shape_5.setTransform(57.45, 14.775);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgdAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAMgHARAAQARAAANAHQAOAHAIANQAHANABARQgBARgHANQgIANgOAIQgNAHgRAAQgQAAgNgHgAgSggQgJAFgFAIQgEAJAAAKQAAALAEAJQAFAIAJAFQAIAFAKAAQALAAAIgFQAIgFAFgIQAFgJAAgLQAAgKgFgJQgFgIgIgFQgIgFgLAAQgKAAgIAFg");
  this.shape_6.setTransform(46.85, 14.775);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgKA5IAAgtIgmhEIAYAAIAZAxIAbgxIAVAAIgmBFIAAAsg");
  this.shape_7.setTransform(35.825, 14.775);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgdAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAMgHARAAQARAAANAHQAOAHAIANQAHANABARQgBARgHANQgIANgOAIQgNAHgRAAQgQAAgNgHgAgSggQgIAFgGAIQgEAJAAAKQAAALAEAJQAGAIAIAFQAIAFAKAAQALAAAIgFQAIgFAFgIQAFgJAAgLQAAgKgFgJQgFgIgIgFQgIgFgLAAQgKAAgIAFg");
  this.shape_8.setTransform(24.8, 14.775);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgKA5IAAheIgeAAIAAgTIBRAAIAAATIgeAAIAABeg");
  this.shape_9.setTransform(14.2, 14.775);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(7.8, -0.2, 181.5, 26.8), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
  this.shape.setTransform(224.525, 83.725);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBASIAOgSIgOgRIAJAAIAOARIgOASgAgWASIAQgSIgQgRIAKAAIAOARIgOASg");
  this.shape_1.setTransform(221.05, 81.85);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AARAXIAAgtIAJAAIAAAtgAgZAXIAAgtIAJAAIAAATIALAAQAHAAAEADQAFACAAAHQAAAEgDADQgBADgEACQgDACgEAAgAgQARIAKAAQAFAAABgDQACgCAAgDQAAgEgCgBQgCgCgEAAIgKAAg");
  this.shape_2.setTransform(215.55, 81.925);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgXAhIAAhAIAJAAIAAAIQADgEAFgCQAEgDAEAAQAGABAFADQAFADACAFQADAFAAAHQAAAHgDAEQgCAGgFADQgFADgHAAQgDAAgFgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgCADgBAFQAAAFACADQACADAEACQAEACADAAQAFAAADgCQADgCABgDQACgDAAgFQAAgEgBgEQgCgEgDgCQgDgCgFAAQgDAAgEACg");
  this.shape_3.setTransform(209.9, 82.825);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAFADQAFACADAGQACAFAAAGIAAABIgiAAQAAAHAEAEQAFAEAGAAQAEAAAFgBIAGgEIADAHQgEACgEACQgFACgGAAQgGAAgGgDgAAOgEQgCgFgDgDQgDgDgGAAQgEAAgDADQgEADgBAFIAaAAIAAAAg");
  this.shape_4.setTransform(204.65, 81.925);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgSAXIAAgtIASAAQAIAAADAEQAEADAAAEQAAAFgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgEABQgDACgFAAgAgJARIAKAAQAEAAADgCQACgCAAgEQAAgHgKAAIgJAAgAgJgDIAJAAIAEgBIACgCIABgDQAAgDgCgCQgCgBgEAAIgIAAg");
  this.shape_5.setTransform(200.175, 81.925);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_6.setTransform(195.175, 81.925);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgIAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAGgCQAFgDAGgBIAIACIAHADIgDAIIgFgDQgDgCgEAAQgGAAgEAFQgEAEAAAGQAAAHAEAFQAEAEAGAAIAHgBIAHgEIACAIIgIADQgEACgFAAQgGAAgFgDg");
  this.shape_7.setTransform(190.475, 81.925);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgIAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAGgCQAFgDAGgBIAIACIAHADIgDAIIgFgDQgDgCgEAAQgGAAgEAFQgEAEAAAGQAAAHAEAFQAEAEAGAAIAHgBIAHgEIACAIIgIADQgEACgFAAQgGAAgFgDg");
  this.shape_8.setTransform(186.225, 81.925);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_9.setTransform(181.475, 81.925);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgXAhIAAhAIAJAAIAAAIQADgEAEgCQAEgDAEAAQAHABAFADQAFADACAFQADAFABAHQgBAHgDAEQgCAGgFADQgFADgHAAQgEAAgEgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgCADgBAFQAAAFACADQADADADACQAEACADAAQAFAAADgCQADgCABgDQACgDABgFQAAgEgCgEQgCgEgDgCQgDgCgFAAQgDAAgEACg");
  this.shape_10.setTransform(176.35, 82.825);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAJAXIgQgVIgDAAIAAAVIgIAAIAAgtIAIAAIAAATIADAAIAQgTIAKAAIgUAWIAUAXg");
  this.shape_11.setTransform(171.625, 81.925);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAGgBQAGABAFADQAFACACAGQADAFAAAGIAAABIgjAAQABAHAFAEQAEAEAFAAQAFAAAEgBIAHgEIACAHQgCACgGACQgEACgGAAQgGAAgGgDgAANgEQAAgFgEgDQgDgDgFAAQgEAAgEADQgEADgBAFIAZAAIAAAAg");
  this.shape_12.setTransform(165, 81.925);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AARAXIAAgtIAJAAIAAAtgAgZAXIAAgtIAIAAIAAATIAMAAQAHAAAFADQAEACAAAHQAAAEgDADQgCADgDACQgDACgEAAgAgRARIALAAQAFAAABgDQACgCAAgDQAAgEgCgBQgBgCgGAAIgKAAg");
  this.shape_13.setTransform(159.45, 81.925);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_14.setTransform(153.725, 81.925);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AASAeIAAgOIgkAAIAAAOIgIAAIAAgVIADAAQAEAAABgDQADgDAAgFIAEgaIAdAAIAAAlIAIAAIAAAVgAgHgBIgBAGQAAADgCABIAUAAIAAgeIgOAAg");
  this.shape_15.setTransform(148.55, 82.6);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_16.setTransform(143.375, 81.925);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgSAXIAAgtIASAAQAIAAADAEQAEADAAAEQAAAFgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgEABQgDACgFAAgAgJARIAKAAQAEAAADgCQACgCAAgEQAAgHgKAAIgJAAgAgJgDIAJAAIAEgBIACgCIABgDQAAgDgCgCQgCgBgEAAIgIAAg");
  this.shape_17.setTransform(138.675, 81.925);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAOAXIAAghIgaAhIgJAAIAAgtIAJAAIAAAhIAaghIAIAAIAAAtg");
  this.shape_18.setTransform(133.55, 81.925);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAIAAIAAAIQADgEAFgCQADgDAFAAQAGABAFADQAFADADAFQACAFAAAHQAAAHgCAEQgDAGgFADQgFADgHAAQgDAAgFgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgDADABAFQAAAFABADQACADAEACQADACAEAAQAEAAADgCQAEgCABgDQACgDAAgFQABgEgCgEQgCgEgDgCQgEgCgEAAQgEAAgDACg");
  this.shape_19.setTransform(128.35, 82.825);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AALAXIAAglIgWAAIAAAlIgIAAIAAgtIAnAAIAAAtg");
  this.shape_20.setTransform(122.925, 81.925);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_21.setTransform(117.775, 81.925);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_22.setTransform(112.575, 81.925);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgUAXIgDgBIABgHIADAAIACABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQACgCABgEIADgeIAgAAIAAAtIgIAAIAAgmIgQAAIgEAZQAAAHgEADQgDADgFAAIgEAAg");
  this.shape_23.setTransform(107.05, 81.95);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_24.setTransform(102.225, 81.925);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AALAXIAAglIgWAAIAAAlIgIAAIAAgtIAnAAIAAAtg");
  this.shape_25.setTransform(97.075, 81.925);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAFADQAFACADAGQACAFAAAGIAAABIgiAAQAAAHAEAEQAFAEAGAAQAEAAAFgBIAGgEIADAHQgEACgEACQgFACgGAAQgGAAgGgDgAAOgEQgCgFgDgDQgDgDgGAAQgEAAgDADQgEADgBAFIAaAAIAAAAg");
  this.shape_26.setTransform(90.35, 81.925);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AASAXIAAgtIAIAAIAAAtgAgZAXIAAgtIAJAAIAAATIALAAQAHAAAEADQAFACAAAHQAAAEgCADQgCADgEACQgDACgFAAgAgQARIAKAAQAFAAABgDQACgCAAgDQAAgEgCgBQgBgCgFAAIgKAAg");
  this.shape_27.setTransform(84.8, 81.925);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_28.setTransform(79.075, 81.925);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgXAhIAAhAIAJAAIAAAIQADgEAFgCQAEgDAEAAQAGABAFADQAFADACAFQADAFAAAHQAAAHgDAEQgCAGgFADQgFADgHAAQgDAAgFgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgCADgBAFQABAFABADQACADAEACQAEACADAAQAFAAADgCQADgCABgDQACgDAAgFQAAgEgBgEQgCgEgDgCQgDgCgFAAQgDAAgEACg");
  this.shape_29.setTransform(74, 82.825);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAFADQAFACADAGQACAFAAAGIAAABIgiAAQAAAHAEAEQAFAEAGAAQAEAAAFgBIAGgEIADAHQgEACgEACQgFACgGAAQgGAAgGgDgAAOgEQgCgFgDgDQgDgDgGAAQgEAAgDADQgEADgBAFIAaAAIAAAAg");
  this.shape_30.setTransform(68.75, 81.925);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AASAXIAAghIgOAaIgGAAIgQgaIAAAhIgIAAIAAgtIAKAAIAQAdIARgdIAJAAIAAAtg");
  this.shape_31.setTransform(63.15, 81.925);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgLAWQgFgBgDgCIADgIQACADAEABQAFABAEAAQAFAAADgBQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgCgEAAIgJgBIAAgGIAIgBQAEAAABgCQAAAAABgBQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQgCgBgEAAIgHABIgHADIgBgHIAHgDIAIgCQAIABAFADQAEADAAAFQAAAEgDADQgCADgGABQAEAAADABIAFADQACADAAADQgBAFgCADQgDADgEABQgFACgFAAQgHAAgEgCg");
  this.shape_32.setTransform(57.7, 81.925);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQAEgCAGgCQAGgBALAAIAAgBQAAgFgCgDQgEgDgFAAIgGABIgEACIgEACIgCgHIAIgEIAJgCQAJAAAFAFQAFAEAAAJIAAAcIgJAAIAAgHQgCADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAADACACQACACAFAAQACAAADgBQADgBACgDQACgDAAgEIAAgEIgMABg");
  this.shape_33.setTransform(53.15, 81.925);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgXAhIAAhAIAJAAIAAAIQADgEAFgCQAEgDAEAAQAGABAFADQAFADACAFQADAFAAAHQAAAHgDAEQgCAGgFADQgFADgHAAQgDAAgFgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgCADgBAFQABAFABADQACADAEACQAEACADAAQAFAAADgCQADgCABgDQACgDAAgFQAAgEgBgEQgCgEgDgCQgDgCgFAAQgDAAgEACg");
  this.shape_34.setTransform(48.35, 82.825);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAFADQAFACADAGQACAFAAAGIAAABIgiAAQAAAHAEAEQAFAEAGAAQAEAAAFgBIAGgEIADAHQgEACgEACQgFACgGAAQgGAAgGgDgAAOgEQgCgFgDgDQgDgDgGAAQgEAAgDADQgEADgBAFIAaAAIAAAAg");
  this.shape_35.setTransform(43.1, 81.925);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_36.setTransform(38.125, 81.925);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AATAeIAAgOIgkAAIAAAOIgIAAIAAgVIADAAQADAAACgDQABgDABgFIADgaIAfAAIAAAlIAIAAIAAAVgAgGgBIgCAGQgBADgCABIAVAAIAAgeIgOAAg");
  this.shape_37.setTransform(32.95, 82.6);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAGgBQAGABAFADQAFACADAGQACAFAAAGIAAABIgjAAQABAHAFAEQADAEAHAAQAFAAAEgBIAGgEIADAHQgEACgEACQgFACgGAAQgHAAgFgDgAANgEQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
  this.shape_38.setTransform(28, 81.925);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAIAAIAAAIQADgEAEgCQAFgDADAAQAHABAFADQAFADACAFQAEAFAAAHQAAAHgEAEQgCAGgFADQgFADgHAAQgEAAgEgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgDADAAAFQABAFACADQACADADACQADACAEAAQAFAAADgCQADgCACgDQACgDAAgFQgBgEgBgEQgCgEgDgCQgEgCgEAAQgEAAgDACg");
  this.shape_39.setTransform(23.1, 82.825);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgLAdQgHgFgEgHQgFgIAAgJQAAgJAFgHQAEgHAIgFQAHgEAJAAQAGAAAFACQAGACAEADIgDAJIgIgGQgFgBgFAAQgGAAgGADQgFADgDAFQgDAGAAAGQAAAHADAGQADAFAFADQAGADAGAAQAGAAAFgCQAFgBADgEIADAJQgFADgFACQgGACgHAAQgIAAgIgEg");
  this.shape_40.setTransform(17.275, 81);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AANASIgOgSIAOgRIAKAAIgQARIAQASgAgHASIgPgSIAPgRIAJAAIgOARIAOASg");
  this.shape_41.setTransform(11.825, 81.85);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAOAXIAAghIgaAhIgJAAIAAgtIAJAAIAAAhIAaghIAIAAIAAAtg");
  this.shape_42.setTransform(116.9, 72.075);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAOAXIAAghIgaAhIgJAAIAAgtIAJAAIAAAhIAaghIAIAAIAAAtg");
  this.shape_43.setTransform(111.5, 72.075);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AARAdIAAgNIgoAAIAAgsIAIAAIAAAlIAWAAIAAglIAKAAIAAAlIAHAAIAAAUg");
  this.shape_44.setTransform(106.35, 72.75);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQADgCAIgCQAFgBAMAAIAAgBQAAgFgDgDQgEgDgFAAIgFABIgFACIgEACIgCgHIAIgEIAJgCQAJAAAFAFQAEAEABAJIAAAcIgIAAIAAgHQgDADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAADACACQACACAEAAQADAAADgBQADgBACgDQACgDABgEIAAgEIgNABg");
  this.shape_45.setTransform(100.9, 72.075);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_46.setTransform(96.025, 72.075);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AANAXIAAghIgaAhIgIAAIAAgtIAIAAIAAAhIAaghIAIAAIAAAtg");
  this.shape_47.setTransform(90.75, 72.075);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AASAXIAAghIgOAaIgGAAIgQgaIAAAhIgIAAIAAgtIAKAAIAQAdIARgdIAJAAIAAAtg");
  this.shape_48.setTransform(84.85, 72.075);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_49.setTransform(79.075, 72.075);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_50.setTransform(73.875, 72.075);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgSAXIAAgtIASAAQAIAAADAEQAEADAAAEQAAAFgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgEABQgDACgFAAgAgJARIAKAAQAEAAADgCQACgCAAgEQAAgHgKAAIgJAAgAgJgDIAJAAIAEgBIACgCIABgDQAAgDgCgCQgCgBgEAAIgIAAg");
  this.shape_51.setTransform(67.425, 72.075);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIAIAAIAAATIAKAAQAJAAAEADQAEACABAHQgBAEgCADQgCADgEACQgDACgFAAgAgJARIAKAAQAEAAADgDQACgCgBgDQAAgEgCgBQgCgCgFAAIgJAAg");
  this.shape_52.setTransform(61.15, 72.075);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgUAXIgDgBIABgIIACABIACAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQABgBAAgEIAEgeIAgAAIAAAsIgJAAIAAgkIgQAAIgDAZQAAAFgDAEQgEADgEAAIgFAAg");
  this.shape_53.setTransform(55.8, 72.1);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAFADQAFACADAGQACAFAAAGIAAABIgiAAQAAAHAEAEQAFAEAGAAQAEAAAFgBIAGgEIADAHQgEACgEACQgFACgGAAQgGAAgGgDgAAOgEQgCgFgDgDQgDgDgGAAQgEAAgDADQgEADgBAFIAaAAIAAAAg");
  this.shape_54.setTransform(51.2, 72.075);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgEAXIAAglIgNAAIAAgIIAkAAIAAAIIgPAAIAAAlg");
  this.shape_55.setTransform(46.9, 72.075);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AANAXIAAghIgZAhIgJAAIAAgtIAJAAIAAAhIAZghIAJAAIAAAtg");
  this.shape_56.setTransform(42.3, 72.075);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AATAdIAAgNIgkAAIAAANIgIAAIAAgUIACAAQAEAAACgDQABgCABgFIADgbIAfAAIAAAlIAIAAIAAAUgAgGAAIgCAEQgBAEgCABIAVAAIAAgeIgOAAg");
  this.shape_57.setTransform(37, 72.75);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAGgBQAGABAFADQAFACADAGQACAFAAAGIAAABIgjAAQABAHAFAEQADAEAHAAQAFAAAEgBIAGgEIADAHQgEACgFACQgEACgGAAQgGAAgGgDgAANgEQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
  this.shape_58.setTransform(32.05, 72.075);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgIAhQgEgCgDgDQgEgEgCgHIgCgRQAAgIADgHQACgHAFgEQAFgEAIgBIAEgBIADAAIAHgBIAFgBIABAIIgGABIgFAAIgEAAIgCABQgFABgDACQgEACgCAEQgCAEgBAIIAHgGQAFgCAFAAQAGAAAFADQAEADADAFQADAEAAAHQAAAHgDAFQgDAGgFADQgFADgIAAIgIgCgAgFgCIgFACIgEAFQABAIACAFQACAFADACQADACADAAQAFAAADgCQAEgCABgEQACgDAAgFQAAgHgEgEQgEgDgGAAQgDAAgDABg");
  this.shape_59.setTransform(27.075, 70.975);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_60.setTransform(21.875, 72.075);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAQAgIAAg3IgfAAIAAA3IgJAAIAAg/IAxAAIAAA/g");
  this.shape_61.setTransform(16.075, 71.15);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAFIgFAKIgGgEIAHgJIgLgCIACgHIALAFIgBgMIAHAAIgCAMIALgFIADAHIgMACIAIAJIgGAEg");
  this.shape_62.setTransform(11.2, 69.475);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(7.3, 61.9, 406.9, 26.699999999999996), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
  this.shape.setTransform(42.075, 83.825);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgUAXIgDgBIABgHIACAAIADABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQACgCAAgEIAEgeIAgAAIAAAtIgJAAIAAgmIgPAAIgEAZQAAAHgDADQgDADgFAAIgFAAg");
  this.shape_1.setTransform(38, 82.05);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AANAhIAAghIgaAhIgIAAIAAgtIAIAAIAAAiIAagiIAIAAIAAAtgAgJgWQgFgEAAgGIAHAAQAAAEACACQADACACAAQADAAADgCQACgCAAgEIAGAAQAAAGgDAEQgEADgHAAQgGAAgDgDg");
  this.shape_2.setTransform(33.05, 81);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQAEgCAGgCQAGgBALAAIAAgBQAAgFgCgDQgEgDgFAAIgGABIgEACIgEACIgCgHIAIgEIAJgCQAJAAAFAFQAEAEABAJIAAAcIgJAAIAAgHQgCADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAADACACQADACAEAAQACAAADgBQADgBACgDQACgDAAgEIAAgEIgMABg");
  this.shape_3.setTransform(27.85, 82.025);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgPAAIAAgIIAkAAIAAAIIgOAAIAAAlg");
  this.shape_4.setTransform(23.65, 82.025);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgLAdQgHgFgEgHQgFgIAAgJQAAgJAFgHQAEgHAIgFQAHgEAJAAQAGAAAFACQAGACAEADIgDAJIgIgGQgFgBgFAAQgGAAgGADQgFADgDAFQgDAGAAAGQAAAHADAFQADAGAFADQAGADAGAAQAGAAAFgCQAFgCADgCIADAIQgFADgFACQgGACgHAAQgIAAgIgEg");
  this.shape_5.setTransform(18.825, 81.1);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAAAFIgFAKIgHgEIAIgJIgLgCIACgHIALAFIgBgMIAHAAIgBAMIAKgFIADAHIgMACIAIAJIgGAEg");
  this.shape_6.setTransform(12.25, 79.425);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(8.4, 63, 292.3, 25.700000000000003), null);
 (lib.snoska = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
  this.shape.setTransform(223.725, 83.825);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBASIAOgSIgOgRIAJAAIAOARIgOASgAgWASIAQgSIgQgRIAKAAIAOARIgOASg");
  this.shape_1.setTransform(220.25, 81.95);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAJAXIgQgVIgDAAIAAAVIgIAAIAAgtIAIAAIAAATIADAAIAQgTIAKAAIgUAWIAUAXg");
  this.shape_2.setTransform(216.075, 82.025);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_3.setTransform(211.025, 82.025);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQAEgCAGgCQAGgBALAAIAAgBQAAgFgCgDQgDgDgGAAIgGABIgEACIgEACIgCgHIAIgEIAJgCQAJAAAFAFQAEAEABAJIAAAcIgJAAIAAgHQgCADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAADACACQADACAEAAQACAAADgBQADgBACgDQACgDAAgEIAAgEIgMABg");
  this.shape_4.setTransform(205.95, 82.025);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAjAAIAAAJIgZAAIAAARIAMAAQAHABAFACQAEACADADQACAEAAAGQAAAGgCADQgDAFgEADQgFACgHAAgAgLAYIALAAQAGAAADgCQADgDAAgGQAAgGgDgCQgDgDgGABIgLAAg");
  this.shape_5.setTransform(201.275, 81.1);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQAEgCAGgCQAGgBAMAAIAAgBQAAgFgDgDQgEgDgFAAIgGABIgEACIgEACIgCgHIAIgEIAJgCQAJAAAFAFQAEAEABAJIAAAcIgIAAIAAgHQgDADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAADACACQACACAEAAQADAAADgBQADgBACgDQACgDABgEIAAgEIgNABg");
  this.shape_6.setTransform(194.15, 82.025);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgPAAIAAgIIAkAAIAAAIIgOAAIAAAlg");
  this.shape_7.setTransform(189.95, 82.025);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_8.setTransform(185.475, 82.025);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAOAhIAAghIgaAhIgIAAIAAgtIAIAAIAAAiIAagiIAIAAIAAAtgAgKgWQgDgEAAgGIAGAAQAAAEACACQACACADAAQADAAADgCQACgCAAgEIAHAAQgBAGgEAEQgEADgGAAQgGAAgEgDg");
  this.shape_9.setTransform(180.15, 81);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_10.setTransform(174.875, 82.025);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgEAgIAAg2IgRAAIAAgJIArAAIAAAJIgRAAIAAA2g");
  this.shape_11.setTransform(170.05, 81.1);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AANASIgOgSIAOgRIAKAAIgQARIAQASgAgHASIgPgSIAPgRIAJAAIgOARIAOASg");
  this.shape_12.setTransform(165.475, 81.95);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AgQAdQgHgFgFgHQgEgHgBgKQABgJAEgHQAFgHAHgFQAIgEAIAAQAKAAAHAEQAIAFAEAHQAEAHAAAJQAAAJgEAIQgEAHgIAFQgHAEgKAAQgIAAgIgEgAgMgUQgFADgDAFQgDAGAAAGQAAAHADAFQADAGAFADQAGADAGAAQAHAAAFgDQAFgDAEgGQADgFAAgHQAAgGgDgGQgEgFgFgDQgFgDgHAAQgGAAgGADg");
  this.shape_13.setTransform(157.7, 81.1);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AATAgIgHgUIgYAAIgHAUIgJAAIAYg/IAJAAIAYA/gAAKAFIgKgaIgJAaIATAAg");
  this.shape_14.setTransform(151.175, 81.1);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AALAXIAAgTIgKAAIgKATIgJAAIAMgTQgEgCgDgCQgCgDgBgFQABgHAEgDQAEgEAHAAIATAAIAAAtgAgFgNQgCACAAADQAAAEACABQADACADAAIAKAAIAAgOIgKAAQgDAAgDACg");
  this.shape_15.setTransform(144.075, 82.025);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgIAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAGgCQAFgDAGgBIAIACIAHADIgDAIIgFgDQgDgCgEAAQgGAAgEAFQgEAEAAAGQAAAHAEAFQAEAEAGAAIAHgBIAHgEIACAIIgIADQgEACgFAAQgGAAgFgDg");
  this.shape_16.setTransform(140.025, 82.025);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgPAAIAAgIIAkAAIAAAIIgOAAIAAAlg");
  this.shape_17.setTransform(135.95, 82.025);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAGgBQAGABAFADQAFACACAGQADAFAAAGIAAABIgjAAQABAHAFAEQAEAEAFAAQAFAAAEgBIAHgEIACAHQgCACgGACQgEACgGAAQgGAAgGgDgAANgEQAAgFgEgDQgDgDgFAAQgEAAgEADQgEADgBAFIAZAAIAAAAg");
  this.shape_18.setTransform(131.7, 82.025);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AALAXIAAgTIgKAAIgKATIgJAAIAMgTQgEgCgDgCQgCgDgBgFQABgHAEgDQAEgEAHAAIATAAIAAAtgAgFgNQgCACAAADQAAAEACABQADACADAAIAKAAIAAgOIgKAAQgDAAgDACg");
  this.shape_19.setTransform(126.875, 82.025);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgUAXIgDgBIABgHIACAAIACABQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABgCAAgEIAEgeIAgAAIAAAtIgJAAIAAgmIgQAAIgCAZQgBAHgDADQgEADgEAAIgFAAg");
  this.shape_20.setTransform(121.95, 82.05);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgSAXIAAgtIASAAQAIAAADAEQAEADAAAEQAAAFgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgEABQgDACgFAAgAgJARIAKAAQAEAAADgCQACgCAAgEQAAgHgKAAIgJAAgAgJgDIAJAAIAEgBIACgCIABgDQAAgDgCgCQgCgBgEAAIgIAAg");
  this.shape_21.setTransform(117.625, 82.025);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgPAAIAAgIIAkAAIAAAIIgOAAIAAAlg");
  this.shape_22.setTransform(113.3, 82.025);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgIAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAGgCQAFgDAGgBIAIACIAHADIgDAIIgFgDQgDgCgEAAQgGAAgEAFQgEAEAAAGQAAAHAEAFQAEAEAGAAIAHgBIAHgEIACAIIgIADQgEACgFAAQgGAAgFgDg");
  this.shape_23.setTransform(109.325, 82.025);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAFADQAEACADAGQADAFAAAGIAAABIgjAAQABAHAEAEQAFAEAFAAQAGAAADgBIAHgEIACAHQgCACgGACQgEACgGAAQgGAAgGgDgAANgEQAAgFgEgDQgDgDgGAAQgDAAgEADQgEADgBAFIAZAAIAAAAg");
  this.shape_24.setTransform(104.8, 82.025);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAdAeIAAgOIhBAAIAAgtIAJAAIAAAmIAUAAIAAgmIAHAAIAAAmIAUAAIAAgmIAJAAIAAAmIAIAAIAAAVg");
  this.shape_25.setTransform(98.675, 82.7);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgRAgIgDgBIABgHIACAAIACABQADAAADgCQACgCACgEIACgGIgSgqIAJAAIANAgIAMggIAJAAIgUAyQgCAHgEADQgEADgGAAIgDAAg");
  this.shape_26.setTransform(92.375, 82.975);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgIAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAGgCQAFgDAGgBIAIACIAHADIgDAIIgFgDQgDgCgEAAQgGAAgEAFQgEAEAAAGQAAAHAEAFQAEAEAGAAIAHgBIAHgEIACAIIgIADQgEACgFAAQgGAAgFgDg");
  this.shape_27.setTransform(88.225, 82.025);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_28.setTransform(83.475, 82.025);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAGgBQAGABAFADQAFACADAGQACAFAAAGIAAABIgjAAQABAHAFAEQADAEAGAAQAFAAAEgBIAHgEIACAHQgDACgFACQgEACgGAAQgHAAgFgDgAANgEQgBgFgDgDQgDgDgFAAQgEAAgEADQgEADgBAFIAZAAIAAAAg");
  this.shape_29.setTransform(76.7, 82.025);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAOAXIAAghIgaAhIgIAAIAAgtIAIAAIAAAhIAaghIAHAAIAAAtg");
  this.shape_30.setTransform(71.6, 82.025);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
  this.shape_31.setTransform(66.325, 82.025);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQAEgCAGgCQAGgBALAAIAAgBQAAgFgDgDQgDgDgFAAIgGABIgEACIgEACIgCgHIAHgEIAKgCQAJAAAFAFQAFAEAAAJIAAAcIgJAAIAAgHQgCADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAADACACQACACAFAAQACAAADgBQADgBACgDQACgDAAgEIAAgEIgMABg");
  this.shape_32.setTransform(61.25, 82.025);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgSAXIAAgtIASAAQAIAAADAEQAEADAAAEQAAAFgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgEABQgDACgFAAgAgJARIAKAAQAEAAADgCQACgCAAgEQAAgHgKAAIgJAAgAgJgDIAJAAIAEgBIACgCIABgDQAAgDgCgCQgCgBgEAAIgIAAg");
  this.shape_33.setTransform(56.875, 82.025);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgMAVQgFgDgDgGQgDgFAAgHQAAgGADgFQADgFAFgDQAGgDAGgBQAHABAGADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgKgKQgEAEAAAGQAAAFACADQACAEADACQADACAEAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgDQgCgEgDgCIgIgCQgGABgEAEg");
  this.shape_34.setTransform(51.875, 82.025);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgEAXIAAglIgNAAIAAgIIAkAAIAAAIIgPAAIAAAlg");
  this.shape_35.setTransform(47.35, 82.025);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AANAXIAAghIgaAhIgIAAIAAgtIAIAAIAAAhIAaghIAJAAIAAAtg");
  this.shape_36.setTransform(42.75, 82.025);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AATAeIAAgOIgkAAIAAAOIgIAAIAAgVIACAAQAEAAACgDQABgDABgFIADgbIAfAAIAAAmIAIAAIAAAVgAgGgBIgCAGQgBADgCABIAVAAIAAgeIgOAAg");
  this.shape_37.setTransform(37.45, 82.7);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAGgBQAGABAFADQAFACADAGQACAFAAAGIAAABIgjAAQABAHAFAEQADAEAHAAQAFAAAEgBIAGgEIADAHQgEACgEACQgFACgGAAQgHAAgFgDgAANgEQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
  this.shape_38.setTransform(32.5, 82.025);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAIAAIAAAIQADgEAEgCQAFgDADAAQAHABAFADQAFADACAFQAEAFAAAHQAAAHgEAEQgCAGgFADQgFADgHAAQgEAAgEgDQgEgCgDgEIAAAbgAgHgWQgDACgCAEQgDADAAAFQABAFACADQACADADACQADACAEAAQAFAAADgCQADgCACgDQACgDAAgFQgBgEgBgEQgCgEgDgCQgEgCgEAAQgEAAgDACg");
  this.shape_39.setTransform(27.6, 82.925);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AAOAgIgXgdIgGAAIAAAdIgJAAIAAg/IAJAAIAAAcIAFAAIAWgcIALAAIgZAfIAbAgg");
  this.shape_40.setTransform(22.325, 81.1);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAAAFIgFAKIgHgEIAJgJIgMgCIACgHIALAFIgBgMIAHAAIgBAMIALgFIACAHIgLACIAHAJIgGAEg");
  this.shape_41.setTransform(15.65, 79.425);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAAAFIgFAKIgHgEIAIgJIgLgCIACgHIALAFIgBgMIAHAAIgBAMIAKgFIADAHIgMACIAIAJIgGAEg");
  this.shape_42.setTransform(12.25, 79.425);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
  this.shape_43.setTransform(42.075, 74.975);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AgUAXIgDgBIABgIIACABIADABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQACgBAAgEIAEgeIAgAAIAAAsIgJAAIAAglIgPAAIgEAZQAAAGgDAEQgDADgFAAIgFAAg");
  this.shape_44.setTransform(38, 73.2);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AANAhIAAghIgaAhIgIAAIAAgsIAIAAIAAAhIAaghIAIAAIAAAsgAgJgWQgFgEAAgGIAHAAQAAAEACACQADABACAAQADAAADgBQACgCAAgEIAGAAQAAAGgDAEQgEADgHAAQgGAAgDgDg");
  this.shape_45.setTransform(33.05, 72.15);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFADgDQAEgCAGgCQAGgBALAAIAAgBQAAgFgCgDQgEgDgFAAIgGABIgEACIgEACIgCgHIAIgEIAJgCQAJAAAFAFQAEAEABAJIAAAcIgJAAIAAgHQgCADgEACQgEADgFAAQgHAAgEgEgAgBACQgFABgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAADACACQADACAEAAQACAAADgBQADgBACgDQACgDAAgEIAAgEIgMABg");
  this.shape_46.setTransform(27.85, 73.175);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgPAAIAAgIIAkAAIAAAIIgOAAIAAAlg");
  this.shape_47.setTransform(23.65, 73.175);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AgLAcQgHgEgEgHQgFgIAAgJQAAgJAFgHQAEgIAIgEQAHgDAJgBQAGAAAFACQAGACAEADIgDAIIgIgEQgFgCgFAAQgGAAgGADQgFADgDAGQgDAFAAAGQAAAHADAGQADAFAFADQAGADAGAAQAGAAAFgCQAFgCADgDIADAJQgFADgFACQgGACgHAAQgIAAgIgFg");
  this.shape_48.setTransform(18.825, 72.25);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AAAAFIgFAKIgHgEIAIgJIgLgCIACgHIALAFIgBgMIAHAAIgBAMIAKgFIADAHIgMACIAIAJIgGAEg");
  this.shape_49.setTransform(12.25, 70.575);
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
 }).prototype = getMCSymbolPrototype(lib.snoska, new cjs.Rectangle(8.4, 63, 292.3, 25.700000000000003), null);
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
 p.nominalBounds = new cjs.Rectangle(0, 0, 388, 208);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(10, 8, 0.5, 0.5);
  this.initialize(mode, startPosition, loop, {
   cvr_frame01: 65,
   cvr_frame02: 195,
   cvr_frame03: 325,
   cvr_frame04: 455
  });
  this.frame_start = function() {
   globalStop(false);
   this.gotoAndPlay(1);
  }
  this.frame_finish = function() {
   globalStop(true)
   this.stop()
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_start).wait(520).call(this.frame_finish).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).to({
   alpha: 0
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -57
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -122
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -187
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -252
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(206, 40.5, 3.92, 0.65);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(8, 6, 392, 75.1), null);
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
  this.shape.graphics.f("#282830").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
  this.shape.setTransform(364.0009, 45.0012, 3.0333, 0.225);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 728, 90), null);
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
  this.shape.graphics.f("#282830").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
  this.shape.setTransform(364.0009, 45.0012, 3.0333, 0.225);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 728, 90), null);
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
   regX: 53.2,
   regY: 45.7,
   x: 36,
   y: 45.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 38.55,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 40.9,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 43,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 44.95,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 46.7,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 48.2,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 49.55,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 50.65,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 51.6,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 52.3,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 52.8,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 53.1,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-9.3, 26.3, 105, 38.900000000000006);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AqiDBIAAidIVFAAIAACdg");
  mask.setTransform(67.4934, 19.301);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 66.8,
   regY: 47,
   x: 49.6,
   y: 47,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 52.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 54.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 56.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 58.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 60.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 61.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 63.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 64.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 65.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 65.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 66.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 66.7,
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
  mask_1.graphics.p("AqiEQIAAieIVFAAIAACeg");
  mask_1.setTransform(67.4934, 27.151);
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
   regX: 66.8,
   regY: 47,
   x: 49.6,
   y: 47,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 52.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 54.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 56.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 58.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 60.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 61.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 63.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 64.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 65.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 65.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 66.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 66.7,
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
  mask_2.graphics.p("AqiFeIAAidIVFAAIAACdg");
  mask_2.setTransform(67.4934, 35.001);
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
   regX: 66.8,
   regY: 47,
   x: 49.6,
   y: 47,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 52.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 54.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 56.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 58.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 60.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 61.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 63.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 64.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 65.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 65.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 66.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 66.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 22.9, 135, 47.1);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("ArADEIAAiTIWBAAIAACTg");
  mask.setTransform(70.4739, 19.5721);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 69.9,
   regY: 47.2,
   x: 52.7,
   y: 47.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 55.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 57.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 59.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 61.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 63.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 64.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 66.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 67.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 68.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 69,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 69.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 69.8,
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
  mask_1.graphics.p("ArAENIAAiTIWBAAIAACTg");
  mask_1.setTransform(70.4739, 26.9221);
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
   regX: 69.9,
   regY: 47.2,
   x: 52.7,
   y: 47.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 55.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 57.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 59.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 61.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 63.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 64.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 66.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 67.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 68.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 69,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 69.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 69.8,
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
  mask_2.graphics.p("ArAFWIAAiTIWBAAIAACTg");
  mask_2.setTransform(70.4739, 34.2221);
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
   regX: 69.9,
   regY: 47.2,
   x: 52.7,
   y: 47.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 55.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 57.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 59.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 61.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 63.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 64.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 66.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 67.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 68.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 69,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 69.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 69.8,
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
  mask_3.graphics.p("AEsFnIAAnpIK8AAIAAHpg");
  mask_3.setTransform(99.9764, 35.8768);
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
   regX: 161.9,
   regY: 45.5,
   x: 144.7,
   y: 45.5,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 147.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 149.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 151.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 153.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 155.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 156.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 158.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 159.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 160.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 161,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 161.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 161.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 22.8, 200, 49);
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
   regX: 146,
   regY: 15,
   x: 128.8,
   y: 15,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 131.35,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 133.7,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 135.8,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 137.75,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 139.5,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 141,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 142.35,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 143.45,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 144.4,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 145.1,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 145.6,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 145.9,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 175.1, 25);
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
   regX: 62.4,
   regY: 14.8,
   x: 45.2,
   y: 14.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 47.75,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 50.1,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 52.2,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 54.15,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 55.9,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 57.4,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 58.75,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 59.85,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 60.8,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 61.5,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 62,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 62.3,
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
   regX: 62.4,
   regY: 14.8,
   x: 45.2,
   y: 14.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 47.75,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 50.1,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 52.2,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 54.15,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 55.9,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 57.4,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 58.75,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 59.85,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 60.8,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 61.5,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 62,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 62.3,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -0.2, 189.3, 26.8);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(31.1927, 49.9659, 0.8246, 0.8277);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(31.2138, 49.9457, 0.8246, 0.8277);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(32, 50.35, 0.8246, 0.8277, 0, 0, 0, 23, 23.4);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(32, 50.35, 0.8246, 0.8277, 0, 0, 0, 23, 23.4);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(31.1931, 49.9664, 0.8246, 0.8277);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgXAAIAAgLIA5AAIAAALIgXAAIAABJg");
  this.shape_3.setTransform(134.825, 65);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgbAqIAAhUIAbAAQAIABAHADQAGADADAGQADAGAAAIQAAAHgDAGQgDAFgGAFQgHAEgIAAIgOAAIAAAegAgOACIAMAAQAEgBAEgBQAEgCACgEQADgDAAgGQAAgGgDgDQgCgEgEgCQgEgCgEAAIgMAAg");
  this.shape_4.setTransform(127.85, 65);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgPgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAEAHAIAEQAHAEAIAAQAJAAAIgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgIgEgJAAQgIAAgHAEg");
  this.shape_5.setTransform(118.325, 64.975);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgFAsIAAgJQgMgBgJgEQgJgEgFgIQgFgIAAgKQAAgJAFgIQAFgHAJgFQAJgEAMgBIAAgJIALAAIAAAJQAMABAJAEQAJAFAFAHQAFAIAAAJQAAAKgFAIQgFAHgJAFQgJAEgMABIAAAJgAAGAZQANgBAHgHQAIgGAAgLQAAgJgIgHQgHgGgNgCgAgZgQQgIAHAAAJQAAALAIAGQAHAHANABIAAgxQgNACgHAGg");
  this.shape_6.setTransform(107.575, 64.975);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAdAqIAAhDIgZAmIgIAAIgYgmIAABDIgMAAIAAhUIAPAAIAZAqIAbgqIAOAAIAABUg");
  this.shape_7.setTransform(96.625, 65);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgPgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAEAHAIAEQAHAEAIAAQAJAAAIgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgIgEgJAAQgIAAgHAEg");
  this.shape_8.setTransform(85.725, 64.975);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AATAqIgfgmIgIAAIAAAmIgNAAIAAhUIANAAIAAAmIAHAAIAdgmIAOAAIghAqIAlAqg");
  this.shape_9.setTransform(76.725, 65);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAXA2IAAhCIguBCIgLAAIAAhUIAMAAIAABBIAthBIAMAAIAABUgAgNgqQgFgEgBgHIAJAAQAAAEADACQADACAEgBQAFABADgCQADgCAAgEIAIAAQAAAHgFAEQgFAEgJAAQgJAAgEgEg");
  this.shape_10.setTransform(125.875, 50.75);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAXArIAAhCIguBCIgLAAIAAhVIAMAAIAABCIAthCIAMAAIAABVg");
  this.shape_11.setTransform(115.825, 51.9);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAWArIAAglIgrAAIAAAlIgMAAIAAhVIAMAAIAAAmIArAAIAAgmIAMAAIAABVg");
  this.shape_12.setTransform(105.875, 51.9);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAdArIAAhEIgZAnIgIAAIgYgnIAABEIgMAAIAAhVIAPAAIAZAqIAbgqIAOAAIAABVg");
  this.shape_13.setTransform(95.325, 51.9);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAXArIAAhCIguBCIgLAAIAAhVIAMAAIAABCIAthCIAMAAIAABVg");
  this.shape_14.setTransform(84.675, 51.9);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgSApQgHgEgFgEIAHgKQADAEAGADQAGADAIAAQAIAAAFgEQAFgEABgHQAAgHgHgEQgGgEgOAAIAAgJQAJAAAFgCQAFgCACgDQACgDAAgEQABgGgFgDQgEgDgHgBQgGABgGACIgJAGIgFgKQAFgEAHgCQAHgDAIAAQAMAAAIAGQAGAGABAKQgBAHgEAFQgFAFgHADQAKABAEAEQAGAGAAAIQAAAIgDAGQgEAFgIAEQgGADgKAAQgKAAgIgDg");
  this.shape_15.setTransform(75.6, 51.9);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAjBAIgNgkIgsAAIgNAkIgZAAIAwh/IAZAAIAwB/gAAPAJIgPgtIgQAtIAfAAg");
  this.shape_16.setTransform(135.275, 35.6);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgLBAIAAhqIgiAAIAAgVIBbAAIAAAVIghAAIAABqg");
  this.shape_17.setTransform(124.8, 35.6);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AghA5QgPgIgKgPQgIgOAAgUQAAgTAIgPQAKgOAPgJQAOgIATAAQATAAAQAIQAPAJAIAOQAIAPABATQgBATgIAPQgJAPgPAIQgPAIgTABQgTAAgOgJgAgVgkQgJAFgFAKQgGAJAAAMQAAAMAGAKQAFAKAJAFQAJAFAMABQAMgBAJgFQAKgFAFgKQAGgKgBgMQABgMgGgJQgFgKgKgFQgJgGgMAAQgMAAgJAGg");
  this.shape_18.setTransform(113.15, 35.625);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgLBAIAAgyIgrhNIAbAAIAcA3IAeg3IAYAAIgrBOIAAAxg");
  this.shape_19.setTransform(100.975, 35.6);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AghA5QgPgIgKgPQgIgOAAgUQAAgTAIgPQAKgOAPgJQAOgIATAAQATAAAQAIQAPAJAIAOQAIAPABATQgBATgIAPQgJAPgPAIQgPAIgTABQgTAAgOgJgAgVgkQgJAFgFAKQgGAJAAAMQAAAMAGAKQAFAKAJAFQAJAFAMABQAMgBAJgFQAKgFAFgKQAGgKgBgMQABgMgGgJQgFgKgKgFQgJgGgMAAQgMAAgJAGg");
  this.shape_20.setTransform(88.85, 35.625);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgLBAIAAhqIgiAAIAAgVIBbAAIAAAVIgiAAIAABqg");
  this.shape_21.setTransform(77.15, 35.6);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAjRIAAGj");
  this.shape_22.setTransform(62.3, 49.425);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(9.3, 19, 151.2, 55.400000000000006), null);
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
   regX: 75.3,
   regY: 49.9,
   x: 58.1,
   y: 49.9,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 60.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 63,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 65.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 67.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 68.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 70.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 71.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 72.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 73.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 74.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 74.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 75.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-10.7, 19, 171.2, 55.400000000000006);
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
  this.instance.setTransform(408, 10);
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
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(294).to({
   _off: false
  }, 0).wait(91));
  this.instance_7 = new lib.txt04("synched", 0, false);
  this.instance_7.parent = this;
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
  this.instance_12.setTransform(187.95, 89.5, 0.0146, 1, 0, 0, 180, 99.5, 1.5);
  this.instance_12._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({
   _off: false
  }, 0).to({
   regX: 100,
   scaleX: 0.275,
   x: 224.5
  }, 30, cjs.Ease.get(1)).wait(326));
  this.instance_13 = new lib.red_line();
  this.instance_13.parent = this;
  this.instance_13.setTransform(392, 1.5, 0.0499, 1, 0, 0, 0, 100.2, 1.5);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({
   _off: false
  }, 0).to({
   regX: 100.6,
   scaleX: 0.7041,
   x: 300.8
  }, 30, cjs.Ease.get(1)).wait(326));
  this.instance_14 = new lib.car_1();
  this.instance_14.parent = this;
  this.instance_14.setTransform(-109.8, 281, 1, 1, 0, 0, 0, 120.2, 75);
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
  var mask_graphics_0 = new cjs.Graphics().p("Ad7HCIAAuDIBRAAIAAODg");
  var mask_graphics_1 = new cjs.Graphics().p("Ad3HCIAAuDIBVAAIAAODg");
  var mask_graphics_2 = new cjs.Graphics().p("AdrHCIAAuDIBhAAIAAODg");
  var mask_graphics_3 = new cjs.Graphics().p("AdYHCIAAuDIB0AAIAAODg");
  var mask_graphics_4 = new cjs.Graphics().p("Ac9HCIAAuDICPAAIAAODg");
  var mask_graphics_5 = new cjs.Graphics().p("AcbHCIAAuDICxAAIAAODg");
  var mask_graphics_6 = new cjs.Graphics().p("AbxHCIAAuDIDbAAIAAODg");
  var mask_graphics_7 = new cjs.Graphics().p("Aa/HCIAAuDIENAAIAAODg");
  var mask_graphics_8 = new cjs.Graphics().p("AaGHCIAAuDIFFAAIAAODg");
  var mask_graphics_9 = new cjs.Graphics().p("AZFHCIAAuDIGGAAIAAODg");
  var mask_graphics_10 = new cjs.Graphics().p("AX8HCIAAuDIHPAAIAAODg");
  var mask_graphics_11 = new cjs.Graphics().p("AWsHCIAAuDIIfAAIAAODg");
  var mask_graphics_12 = new cjs.Graphics().p("AVUHCIAAuDIJ3AAIAAODg");
  var mask_graphics_13 = new cjs.Graphics().p("AT0HCIAAuDILXAAIAAODg");
  var mask_graphics_14 = new cjs.Graphics().p("ASNHCIAAuDIM+AAIAAODg");
  var mask_graphics_15 = new cjs.Graphics().p("AQeHCIAAuDIOtAAIAAODg");
  var mask_graphics_16 = new cjs.Graphics().p("AO3HCIAAuDIQUAAIAAODg");
  var mask_graphics_17 = new cjs.Graphics().p("ANXHCIAAuDIR0AAIAAODg");
  var mask_graphics_18 = new cjs.Graphics().p("AL/HCIAAuDITMAAIAAODg");
  var mask_graphics_19 = new cjs.Graphics().p("AKvHCIAAuDIUcAAIAAODg");
  var mask_graphics_20 = new cjs.Graphics().p("AJmHCIAAuDIVkAAIAAODg");
  var mask_graphics_21 = new cjs.Graphics().p("AIlHCIAAuDIWlAAIAAODg");
  var mask_graphics_22 = new cjs.Graphics().p("AHsHCIAAuDIXeAAIAAODg");
  var mask_graphics_23 = new cjs.Graphics().p("AG6HCIAAuDIYQAAIAAODg");
  var mask_graphics_24 = new cjs.Graphics().p("AGQHCIAAuDIY6AAIAAODg");
  var mask_graphics_25 = new cjs.Graphics().p("AFtHCIAAuDIZdAAIAAODg");
  var mask_graphics_26 = new cjs.Graphics().p("AFTHCIAAuDIZ3AAIAAODg");
  var mask_graphics_27 = new cjs.Graphics().p("AE/HCIAAuDIaLAAIAAODg");
  var mask_graphics_28 = new cjs.Graphics().p("AE0HCIAAuDIaWAAIAAODg");
  var mask_graphics_29 = new cjs.Graphics().p("AExHCIAAuDIaaAAIAAODg");
  var mask_graphics_119 = new cjs.Graphics().p("Ad7HCIAAuDIBRAAIAAODg");
  var mask_graphics_120 = new cjs.Graphics().p("Ad3HCIAAuDIBVAAIAAODg");
  var mask_graphics_121 = new cjs.Graphics().p("AdrHCIAAuDIBhAAIAAODg");
  var mask_graphics_122 = new cjs.Graphics().p("AdYHCIAAuDIB0AAIAAODg");
  var mask_graphics_123 = new cjs.Graphics().p("Ac9HCIAAuDICPAAIAAODg");
  var mask_graphics_124 = new cjs.Graphics().p("AcbHCIAAuDICxAAIAAODg");
  var mask_graphics_125 = new cjs.Graphics().p("AbxHCIAAuDIDbAAIAAODg");
  var mask_graphics_126 = new cjs.Graphics().p("Aa/HCIAAuDIENAAIAAODg");
  var mask_graphics_127 = new cjs.Graphics().p("AaGHCIAAuDIFFAAIAAODg");
  var mask_graphics_128 = new cjs.Graphics().p("AZFHCIAAuDIGGAAIAAODg");
  var mask_graphics_129 = new cjs.Graphics().p("AX8HCIAAuDIHPAAIAAODg");
  var mask_graphics_130 = new cjs.Graphics().p("AWsHCIAAuDIIfAAIAAODg");
  var mask_graphics_131 = new cjs.Graphics().p("AVUHCIAAuDIJ3AAIAAODg");
  var mask_graphics_132 = new cjs.Graphics().p("AT0HCIAAuDILXAAIAAODg");
  var mask_graphics_133 = new cjs.Graphics().p("ASNHCIAAuDIM+AAIAAODg");
  var mask_graphics_134 = new cjs.Graphics().p("AQeHCIAAuDIOtAAIAAODg");
  var mask_graphics_135 = new cjs.Graphics().p("AO3HCIAAuDIQUAAIAAODg");
  var mask_graphics_136 = new cjs.Graphics().p("ANXHCIAAuDIR0AAIAAODg");
  var mask_graphics_137 = new cjs.Graphics().p("AL/HCIAAuDITMAAIAAODg");
  var mask_graphics_138 = new cjs.Graphics().p("AKvHCIAAuDIUcAAIAAODg");
  var mask_graphics_139 = new cjs.Graphics().p("AJmHCIAAuDIVkAAIAAODg");
  var mask_graphics_140 = new cjs.Graphics().p("AIlHCIAAuDIWlAAIAAODg");
  var mask_graphics_141 = new cjs.Graphics().p("AHsHCIAAuDIXeAAIAAODg");
  var mask_graphics_142 = new cjs.Graphics().p("AG6HCIAAuDIYQAAIAAODg");
  var mask_graphics_143 = new cjs.Graphics().p("AGQHCIAAuDIY6AAIAAODg");
  var mask_graphics_144 = new cjs.Graphics().p("AFtHCIAAuDIZdAAIAAODg");
  var mask_graphics_145 = new cjs.Graphics().p("AFTHCIAAuDIZ3AAIAAODg");
  var mask_graphics_146 = new cjs.Graphics().p("AE/HCIAAuDIaLAAIAAODg");
  var mask_graphics_147 = new cjs.Graphics().p("AE0HCIAAuDIaWAAIAAODg");
  var mask_graphics_148 = new cjs.Graphics().p("AExHCIAAuDIaaAAIAAODg");
  var mask_graphics_209 = new cjs.Graphics().p("Ad7HCIAAuDIBRAAIAAODg");
  var mask_graphics_210 = new cjs.Graphics().p("Ad3HCIAAuDIBVAAIAAODg");
  var mask_graphics_211 = new cjs.Graphics().p("AdrHCIAAuDIBhAAIAAODg");
  var mask_graphics_212 = new cjs.Graphics().p("AdYHCIAAuDIB0AAIAAODg");
  var mask_graphics_213 = new cjs.Graphics().p("Ac9HCIAAuDICPAAIAAODg");
  var mask_graphics_214 = new cjs.Graphics().p("AcbHCIAAuDICxAAIAAODg");
  var mask_graphics_215 = new cjs.Graphics().p("AbxHCIAAuDIDbAAIAAODg");
  var mask_graphics_216 = new cjs.Graphics().p("Aa/HCIAAuDIENAAIAAODg");
  var mask_graphics_217 = new cjs.Graphics().p("AaGHCIAAuDIFFAAIAAODg");
  var mask_graphics_218 = new cjs.Graphics().p("AZFHCIAAuDIGGAAIAAODg");
  var mask_graphics_219 = new cjs.Graphics().p("AX8HCIAAuDIHPAAIAAODg");
  var mask_graphics_220 = new cjs.Graphics().p("AWsHCIAAuDIIfAAIAAODg");
  var mask_graphics_221 = new cjs.Graphics().p("AVUHCIAAuDIJ3AAIAAODg");
  var mask_graphics_222 = new cjs.Graphics().p("AT0HCIAAuDILXAAIAAODg");
  var mask_graphics_223 = new cjs.Graphics().p("ASNHCIAAuDIM+AAIAAODg");
  var mask_graphics_224 = new cjs.Graphics().p("AQeHCIAAuDIOtAAIAAODg");
  var mask_graphics_225 = new cjs.Graphics().p("AO3HCIAAuDIQUAAIAAODg");
  var mask_graphics_226 = new cjs.Graphics().p("ANXHCIAAuDIR0AAIAAODg");
  var mask_graphics_227 = new cjs.Graphics().p("AL/HCIAAuDITMAAIAAODg");
  var mask_graphics_228 = new cjs.Graphics().p("AKvHCIAAuDIUcAAIAAODg");
  var mask_graphics_229 = new cjs.Graphics().p("AJmHCIAAuDIVkAAIAAODg");
  var mask_graphics_230 = new cjs.Graphics().p("AIlHCIAAuDIWlAAIAAODg");
  var mask_graphics_231 = new cjs.Graphics().p("AHsHCIAAuDIXeAAIAAODg");
  var mask_graphics_232 = new cjs.Graphics().p("AG6HCIAAuDIYQAAIAAODg");
  var mask_graphics_233 = new cjs.Graphics().p("AGQHCIAAuDIY6AAIAAODg");
  var mask_graphics_234 = new cjs.Graphics().p("AFtHCIAAuDIZdAAIAAODg");
  var mask_graphics_235 = new cjs.Graphics().p("AFTHCIAAuDIZ3AAIAAODg");
  var mask_graphics_236 = new cjs.Graphics().p("AE/HCIAAuDIaLAAIAAODg");
  var mask_graphics_237 = new cjs.Graphics().p("AE0HCIAAuDIaWAAIAAODg");
  var mask_graphics_238 = new cjs.Graphics().p("AExHCIAAuDIaaAAIAAODg");
  var mask_graphics_294 = new cjs.Graphics().p("Ad7HCIAAuDIBRAAIAAODg");
  var mask_graphics_295 = new cjs.Graphics().p("Ad3HCIAAuDIBVAAIAAODg");
  var mask_graphics_296 = new cjs.Graphics().p("AdrHCIAAuDIBhAAIAAODg");
  var mask_graphics_297 = new cjs.Graphics().p("AdYHCIAAuDIB0AAIAAODg");
  var mask_graphics_298 = new cjs.Graphics().p("Ac9HCIAAuDICPAAIAAODg");
  var mask_graphics_299 = new cjs.Graphics().p("AcbHCIAAuDICxAAIAAODg");
  var mask_graphics_300 = new cjs.Graphics().p("AbxHCIAAuDIDbAAIAAODg");
  var mask_graphics_301 = new cjs.Graphics().p("Aa/HCIAAuDIENAAIAAODg");
  var mask_graphics_302 = new cjs.Graphics().p("AaGHCIAAuDIFFAAIAAODg");
  var mask_graphics_303 = new cjs.Graphics().p("AZFHCIAAuDIGGAAIAAODg");
  var mask_graphics_304 = new cjs.Graphics().p("AX8HCIAAuDIHPAAIAAODg");
  var mask_graphics_305 = new cjs.Graphics().p("AWsHCIAAuDIIfAAIAAODg");
  var mask_graphics_306 = new cjs.Graphics().p("AVUHCIAAuDIJ3AAIAAODg");
  var mask_graphics_307 = new cjs.Graphics().p("AT0HCIAAuDILXAAIAAODg");
  var mask_graphics_308 = new cjs.Graphics().p("ASNHCIAAuDIM+AAIAAODg");
  var mask_graphics_309 = new cjs.Graphics().p("AQeHCIAAuDIOtAAIAAODg");
  var mask_graphics_310 = new cjs.Graphics().p("AO3HCIAAuDIQUAAIAAODg");
  var mask_graphics_311 = new cjs.Graphics().p("ANXHCIAAuDIR0AAIAAODg");
  var mask_graphics_312 = new cjs.Graphics().p("AL/HCIAAuDITMAAIAAODg");
  var mask_graphics_313 = new cjs.Graphics().p("AKvHCIAAuDIUcAAIAAODg");
  var mask_graphics_314 = new cjs.Graphics().p("AJmHCIAAuDIVkAAIAAODg");
  var mask_graphics_315 = new cjs.Graphics().p("AIlHCIAAuDIWlAAIAAODg");
  var mask_graphics_316 = new cjs.Graphics().p("AHsHCIAAuDIXeAAIAAODg");
  var mask_graphics_317 = new cjs.Graphics().p("AG6HCIAAuDIYQAAIAAODg");
  var mask_graphics_318 = new cjs.Graphics().p("AGQHCIAAuDIY6AAIAAODg");
  var mask_graphics_319 = new cjs.Graphics().p("AFtHCIAAuDIZdAAIAAODg");
  var mask_graphics_320 = new cjs.Graphics().p("AFTHCIAAuDIZ3AAIAAODg");
  var mask_graphics_321 = new cjs.Graphics().p("AE/HCIAAuDIaLAAIAAODg");
  var mask_graphics_322 = new cjs.Graphics().p("AE0HCIAAuDIaWAAIAAODg");
  var mask_graphics_323 = new cjs.Graphics().p("AExHCIAAuDIaaAAIAAODg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 199.5812,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 199.5805,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 199.5786,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 199.5755,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 199.571,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 199.5653,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 199.5583,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 199.55,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 199.5405,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 199.5297,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 199.5177,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 199.5043,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 199.4897,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 199.4738,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 199.4982,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 199.4874,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 199.4774,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 199.4681,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 199.4595,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 199.4517,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 199.4446,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 199.4383,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 199.4327,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 199.4279,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 199.4238,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 199.4204,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 199.4178,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 199.416,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 199.4149,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 199.499,
   y: 45.0012
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 199.5812,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 199.5805,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 199.5786,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 199.5755,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 199.571,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 199.5653,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 199.5583,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 199.55,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 199.5405,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 199.5297,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 199.5177,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 199.5043,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 199.4897,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 199.4738,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 199.4982,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 199.4874,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 199.4774,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 199.4681,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 199.4595,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 199.4517,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 199.4446,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 199.4383,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 199.4327,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 199.4279,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 199.4238,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 199.4204,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 199.4178,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 199.416,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 199.4149,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 199.499,
   y: 45.0012
  }).wait(61).to({
   graphics: mask_graphics_209,
   x: 199.5812,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 199.5805,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 199.5786,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 199.5755,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 199.571,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 199.5653,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 199.5583,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 199.55,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 199.5405,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 199.5297,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 199.5177,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 199.5043,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 199.4897,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 199.4738,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 199.4982,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 199.4874,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 199.4774,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 199.4681,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 199.4595,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 199.4517,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 199.4446,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 199.4383,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 199.4327,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 199.4279,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 199.4238,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 199.4204,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 199.4178,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 199.416,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 199.4149,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 199.499,
   y: 45.0012
  }).wait(56).to({
   graphics: mask_graphics_294,
   x: 199.5812,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 199.5805,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 199.5786,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 199.5755,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 199.571,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 199.5653,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 199.5583,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 199.55,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 199.5405,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 199.5297,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 199.5177,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 199.5043,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 199.4897,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 199.4738,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 199.4982,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 199.4874,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 199.4774,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 199.4681,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 199.4595,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 199.4517,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 199.4446,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 199.4383,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 199.4327,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 199.4279,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 199.4238,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 199.4204,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_320,
   x: 199.4178,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_321,
   x: 199.416,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_322,
   x: 199.4149,
   y: 45.0012
  }).wait(1).to({
   graphics: mask_graphics_323,
   x: 199.499,
   y: 45.0012
  }).wait(62));
  this.instance_15 = new lib.bg1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(339.9, 197, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_16.setTransform(319.9, 197, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_17.setTransform(319.9, 197, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_18.setTransform(339.9, 197, 1, 1, 0, 0, 0, 150, 197);
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
 p.nominalBounds = new cjs.Rectangle(-10.7, -0.2, 738.7, 123.7);
 (lib.toyota_468x90 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(221.8, 43.6, 506.2, 79.9);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 468,
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