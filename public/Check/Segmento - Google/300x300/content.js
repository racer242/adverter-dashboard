(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 351, 204);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 352, 204);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 352, 204);
 (lib.car = function() {
  this.initialize(img.car);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 393, 186);
 (lib.style = function() {
  this.initialize(img.style);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 115, 32);

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
  this.shape.graphics.f("#FF0022").s().p("ACJDQQgPgPAAgaQAAgjATgXQAWgaAjAAQAbABAOAPQAPAPAAAZQAAAkgTAXQgWAZgiAAQgdAAgNgPgACvCAIgEAaIgCAUQAAATANgBQANABAFgOQADgIADgRIABgXQAAgRgNgBQgNAAgGAPgAhxDQQgPgPAAgaQAAgjAUgXQAVgaAjAAQAbABAPAPQANAPAAAZQAAAkgSAXQgWAZgiAAQgcAAgOgPgAhKCAQgDAFgCAVIgCAUQAAATANgBQANABAFgOQADgIADgRIACgXQAAgRgOgBQgNAAgFAPgAHSDcIAFAAQAFgBAAgBIAAgGQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgDAAIACgEQADgDgBgLQgBgJgDgBQgFgCACgHIALgYQAGgOABgLQAAgGAHgSQAGgPgDgLQgCgEACgOQAAgLAGgVQAHgWABgJQABgHgCgJIgDgOIABgDIgBADQgBAFgDgDIgBgBIAEAFIABAIQABAGAAAOIgBACIgEgEIgCgCQgBgEgDAAIACAEIABAAIAAABIgEAKIgDABIgDgBQgIgDADgMIAFgNQACgHAHgEIAAgCIgGgDIgFgEIAFgBIAHgDIAHAAQgFgCgFACIgIADIgCAAIgBAAIAAgBQAHgMAEgPQABgKACgUQABgZABgMQAEgUALgOIAFgJIAAgCIgDAAQAAACgLANQgGAJgBAIQgFAqgBAWQAAAIgFAKIgIAQIgBACIgDgCIgCgDIgBACQgBADgFABIgCgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgTQgBgFACgMIABgRQgBgdgCgMQgCgXgIgSIgHgJIgBgCQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIADADIAFAHIAAABIgBAAQgFgDgCgGIgCgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIADgDQAHgDAJgCIANgBIADAAIgjAAIABABIAIAAIgHADQgOAGAAAIIAEgDIABABIgCAHIgDgCQABAFADAGIAGANIACAFIgCgHIAAgBIABABQAGARgCARIgBAZQACgagEgZQAAAFgDAHQgDAJAAAEIgCAQIgCAPQgBAFgBAhIAAADIACAAQABgHACgCIACgKQAAgfAGgdQABAfgEAXQgFAdgPAXIgBADQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEIABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAEgEIACgHIgBgDIgBACQgBAAgBAAQAAAAAAAAQgBABAAABQAAAAAAABQAAABAAABQAAAAAAAAQgBAAgBAAQAAgBgBgBIgBAAIgBABIgDAEIgCgTIAAgEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAgBIAFgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgEgEABQAAABgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAgCIAAADIgBgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgCABIgBABIgBgGIACAAIAEgBIABgFIgEgCIgDAAIAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAgBgBQgFgCACgDQABgCAFgDIACgDIgDgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIAAgEIABgZQAAgPgIgKQgDgEgHgEIgCgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQADgHAHgDQAFgDALgBIABgBICiAAIg/G6gAGbhEQAAABAAABQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgCQAAgEgEABIgCAAIABADgAHzi9QAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAEAAIAIABIADgBIgEAAIgFAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAFgBIAFAAIAHgCQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIADgEIgEAEQgDAEgGgBIgLgBQgGABAAAFgAHzjMQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAFAAIAUAAIACAAIgCAAQgPABgGgCIgCgBIACgCIAXgBIAAgCIgVgBQgJABABAFgAEMDcIA+m6IBVAAIgRADQgKADgFAGIgCAEIADgBIABABIAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAIAbQACARAAAMQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgXgHgaAOQgDABgCAGQAAAAABABQAAAAAAABQABAAABAAQABAAABABIAAAAIAAABIgBABQAAABgBAAQAAAAAAAAQAAAAAAABQABAAAAAAIACADQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQAGgDAHACIANACQAGAAgBAHQgSBPAQA7IAAABIgBAAIgBgCIAAAEIACALIACAKQAOAlADAOQAIAdABAYIABAMQAAAHgEAFQgDADgBAIQAAALADADIABAFIgDABIgCgBIgCgDIgBADIAAAEIAAAFIACAAgAACDcIAEgkIArgWQAYgPAAgQQAAgIgIgFQgGgDgKAAQgQAAgOAFIAEghQAYgDASgBQA2ABAAAlQAAAVgRARQgMAMgYAMIgLAHIAAAAIA3AAIgFAegAj5DcIAGgkIAqgWQAXgPAAgQQAAgIgHgFQgGgDgKAAQgQAAgPAFIAEghQAZgDASgBQA2ABAAAlQAAAVgRARQgMAMgYAMIgLAHIAAAAIA3AAIgEAegAGYDUQgDAAgDgDIABAAIANACIgCABIgGAAgAHGDHQADgEgDgFQgEgDgHACQgEAAgJgCQgBgBAAgHIAAgQIACADQAAgFACgGIALgiQAIgUAGgOQACgEABgMQgBgNACgFIACgPIACgCIABABQALAWABAZQgBAqgUAtQgEAHgHAAQgFgBgIgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAADQgBAGAEAAIAHABIALACQgCABgDAAIgGAAIgBABIACAEIACAAIAGgBIgGAAQADgBAIABQAFgDABgGQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAIACACIgCACIAAABIACABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBAAIgDABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDADAFACQADABgBAHIgCABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgIABQgEAAAEgJgAGWDOQgFgBABgGIAAgIQgBgEACAAIAJAAIAKACIgCAAQgEgBgBACIAAAHIgBAJQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgFgBgAGkC3IACgCQACgEAAgGIAAgLIAAgEIABAFIABAEIgBAQQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAIgDgBgAGYCyIgBgCIABgLIACAIIAAgBIADgYQgDgJgBgTIgCgdIgCgJIAAgUIADAIIACAHIAJAtQAFAbgCATQgCAFgEACIgHADIgBAAgAHKCwIAAgCIACgGQAPgpAEgdIABgPIAAAEIABgCIAAgBIAAgDIAAACQAAAWgHAYQgDAQgKAcIgCADIgBAAgAGxCBQAHgdABgJQAGgbgFgSIABgDIAFAbQgCAagNAiIAAABgAGwB5IABgWIgBgJIgCgJIABgRIAAgMQgBgEADgCIAFgBQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAEQADAQgDATQgCAPgGAUIAAABgAkaBVIAQgbIgYhKIAdAAIANAsIATgsIAcAAIgzBlgAl6BVIAMhHIgBAAQgGAFgIAMQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAgBIgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAKgWAMgJIAEgXIAbAAIgCAKQAGgBAJAAQAPgBAJALQAHAIABAQQAAAXgPAPQgMAMgWgBIgKgBIgDAUgAlSAEIgHApIAGABQALAAAGgJQAGgIAAgLQAAgHgEgEQgEgEgGgBQgFAAgDACgAGeBKQgGgNABgHIABgCIAGASIAAAEIAAAJIgCgJgAh0A2QgIgJAAgOQABgWALgNQAMgOAWAAQAWgBAHASQAIALgEAVIgzAAQAAARASAAQAQAAANgIIgDAVQgNAHgTgBQgXAAgJgNgAhfARIAZAAQACgRgMAAQgNAAgCARgAjdAuQAJgCACgBQAEgDACgEQAEgGAGgcIAFgSIBBAAIgNBRIgaAAIAJg9IgPAAIgGAXQgEASgGAIQgKAMgVACgAnjAkQABgaAQgOQAPgOAZABQAOAAAQABIgOBRIgZAAIABgJIgBAAQgHALgOAAQgbABAAgggAnAALQgGAKgBALQgBAGADAFQADADAEAAQAJAAAFgGIAGglIgDgBQgMAAgHAJgAo/A6IADgYQASAJARAAQATAAgBgNQAAgLgQAAIgRAAIADgXIAQAAQAUAAAAgMQgBgJgRAAQgRAAgQAJIAEgaQARgGAWAAQAOAAAKAGQAMAHABAQQAAATgSAFQAHAEADAHQAEAFAAAIQAAAUgPAJQgNAJgUAAQgYAAgPgJgAAmBBIABgqIgYAqIgMAAIgMgqIgKAqIgZAAIAUhRIAbAAIANAnIAVgnIAcAAIAABRgAHfA8IgGgaIAAgBIAAABIAHAYIAAADgAGoA4IgFgDIgBgFIABgMQABgHgCgDQgBgDgBgEIgBgGQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABgDADgBQAEgBAEAFIAEAEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIAAAAIAAAAIgBAIQgCAEgGgFIgBAAIAAAAIAAADIAAgBIABAFIADAOQABAIgEAGQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAIAAgBgAGJAvIgHgEQgEgBgCgFQACgIgBgIIAAgBIABABQAFAMAKACQAEABgCAHQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEgBgAGvArIACgCIAdgKIAAAAIAFgCIgHAEQgTAKgIABgAGuAlIALgDIAKgCIgSAIIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAgAHRAVQABAAAAAAQABAAAAgBQAAAAABgBQAAAAABgBIABgFIAAABIAAAHQAAAFgDABgAF1AJQgHgZAAgZQAAggALgmIABgCIABADIgHAnQgEAYABAQQACAbAEAMIAAADgAHHABIgCgBIAAgEIABgFIATgWIACAAQgCACAHAAQAGAAgHAEQgGAEgCAHIgCALIgCADIAAABgAGLglQgFgWAAgMIAAgVIABgVIAAgBQAJgHgFgBIgHABQgKgDADgIQABgEAIABIADABIgDgBIgEgBQgHAAgEAHQAAAEgGgBIgHgBQgFABgEAAQgDAAgCgGIAAgCIACAAIABACIgBgDQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAQAbgLAgALIABACIgBABQgPAAAEAPQAFAYgBALQgCAHABAOIACALIADAMQAAAAAAABQAAAAABAAQAAAAABABQAAAAABABQADABgEADIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAQgIgCgBgIgAGdgeIAAgBQAHgHAGgNIgGANIAAABQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIACAAIgEAFIgFAFgAD6giIAKhAIgcBAIgyAAIAPhZIAeAAIgLA+IAag+IAzAAIgOBZgABSgiIAOhZIA6AAQANAAAIAHQAKAHgDAQQgCASgLAHQgKAIgOAAIgYAAIgFAagAB6hPIAIAAQARAAABgNQACgLgRAAIgHAAgAAjgiIALg/IgXAAIgLA/IghAAIAPhZIBZAAIgOBZgAhsgiIAEghIgXAAIgEAhIgjAAIAOhZIAiAAIgEAeIAWAAIAFgeIAiAAIgOBZgAjOgiIgDgTIgcAAIgJATIghAAIAthZIAvAAIASBZgAjlhLIATAAIgEgdIgBAAgAlngiIAOhZIA6AAQANAAAIAHQAJAHgCAQQgDASgLAHQgKAIgOAAIgYAAIgEAagAk/hPIAHAAQARAAACgNQACgLgSAAIgGAAgAm9giIAQhZIBLAAIgDAaIgsAAIgJA/gAg9g5IADgWIAjAAIgEAWgAGHiQIAAgJIAAAAIgBgWIAAgBIAAABQADAOAAARIgBACg");
  this.shape.setTransform(73.9, 75.6, 0.7832, 0.7833, 0, 0, 0, -1, -0.9);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(73.6, 76.4, 0.7832, 0.7833, 0, 0, 0, -1.1, -0.8);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(22, 53, 105, 48.2), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape.setTransform(132.275, 80.275);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAcAAQANAAAHAHQAJAHgBAMQAAAGgCAGQgEAGgHAEQAJABAFAGQAGAGAAAKQAAAIgEAGQgDAHgIADQgGAEgKAAgAgUApIAUAAQALgBAFgFQAGgFAAgJQAAgIgGgEQgFgFgJAAIgWAAgAgUgEIASAAQAEAAAFgCQADgDADgEQACgEABgFQgBgIgFgFQgFgEgJAAIgQAAg");
  this.shape_1.setTransform(123.9, 80.275);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgZAsQgMgGgHgMQgGgLgBgPQABgOAGgLQAHgMAMgGQALgHAOAAQAPAAAMAHQALAGAHAMQAHALAAAOQAAAPgHALQgHAMgLAGQgMAHgPAAQgOAAgLgHgAgUgjQgJAGgFAJQgGAJAAALQAAAMAGAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAKgGAFgJQAFgJAAgMQAAgLgFgJQgFgJgKgGQgJgFgMAAQgLAAgJAFg");
  this.shape_2.setTransform(113.425, 80.275);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgUAvQgJgEgFgFIAGgJIAHAGQAEADAFACQAGACAGAAQALAAAHgGQAHgFAAgJQAAgKgJgFQgIgFgQAAIAAgIQALAAAGgDQAHgDADgEQACgEAAgEQgBgIgFgEQgFgFgJAAQgIAAgHADQgGADgFAEIgEgIQAFgFAIgDQAHgDAKAAQAJAAAHADQAHADAEAFQADAGAAAHQAAAKgFAGQgGAGgJACQALACAGAFQAHAGAAALQAAAJgEAGQgEAHgIADQgIAEgLAAQgLAAgJgEg");
  this.shape_3.setTransform(103.35, 80.275);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgaAyIgIgCIADgJIAFACIAHAAQAGAAAEgEQAEgDADgIIgnhLIALAAIAgBBIAdhBIALAAIgiBLQgDAHgDAGQgDAFgFAEQgFADgIAAIgHgBg");
  this.shape_4.setTransform(95.475, 80.35);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAYAyIgoguIgJAAIAAAuIgLAAIAAhjIALAAIAAAtIAIAAIAlgtIANAAIgpAxIAtAyg");
  this.shape_5.setTransform(87.575, 80.275);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAcAyIAAgtIg3AAIAAAtIgLAAIAAhjIALAAIAAAtIA3AAIAAgtIALAAIAABjg");
  this.shape_6.setTransform(74.05, 80.275);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAdA+IAAhSIg6BSIgKAAIAAhiIAKAAIAABSIA7hSIAKAAIAABigAgPgxQgFgFgBgIIAIAAQAAAGAFABQADACAFAAQAGAAAEgCQADgBAAgGIAIAAQgBAIgFAFQgGADgJAAQgJAAgGgDg");
  this.shape_7.setTransform(63.65, 79);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_8.setTransform(53.875, 80.275);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgUAvQgIgEgGgFIAFgJIAIAGQAEADAFACQAGACAGAAQALAAAHgGQAHgFgBgJQABgKgJgFQgIgFgQAAIAAgIQALAAAGgDQAHgDADgEQACgEAAgEQgBgIgFgEQgGgFgIAAQgIAAgHADQgGADgEAEIgFgIQAFgFAIgDQAIgDAJAAQAJAAAHADQAGADAFAFQADAGAAAHQAAAKgFAGQgGAGgJACQALACAHAFQAGAGAAALQAAAJgEAGQgEAHgIADQgIAEgLAAQgLAAgJgEg");
  this.shape_9.setTransform(45.2, 80.275);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAdAyIAAhSIg6BSIgKAAIAAhjIALAAIAABSIA6hSIAKAAIAABjg");
  this.shape_10.setTransform(36.15, 80.275);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAjA9IAAgXIhFAAIAAAXIgJAAIAAggIAFAAQADAAADgEQACgDACgFQACgGABgGIAHhBIAzAAIAABZIALAAIAAAggAgPAFIgEAQQgBAGgDACIAuAAIAAhQIggAAg");
  this.shape_11.setTransform(26.1, 81.45);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAeA+IAAhRIg7BRIgKAAIAAhiIAKAAIAABSIA7hSIAKAAIAABigAgOgyQgGgDgBgJIAIAAQAAAFAEADQAEABAFAAQAGAAAEgBQADgDABgFIAHAAQgBAJgFADQgGAFgJAAQgJAAgFgFg");
  this.shape_12.setTransform(245.7, 63.05);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAmAyIAAhjIAKAAIAABjgAgvAyIAAhjIALAAIAAArIAVAAQAQAAAIAGQAHAIABAMQAAAJgEAHQgDAGgIAEQgFAEgMAAgAgkApIAUAAQAMAAAEgGQAGgFAAgJQAAgKgGgEQgFgFgLAAIgUAAg");
  this.shape_13.setTransform(234.3, 64.325);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAcAyIAAgtIg3AAIAAAtIgLAAIAAhjIALAAIAAAtIA3AAIAAgtIALAAIAABjg");
  this.shape_14.setTransform(223, 64.325);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgEAyIAAhZIgcAAIAAgKIBBAAIAAAKIgbAAIAABZg");
  this.shape_15.setTransform(214.35, 64.325);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA2AAIAAAKIgrAAIAAAjIApAAIAAAIIgpAAIAAAkIAsAAIAAAKg");
  this.shape_16.setTransform(207.125, 64.325);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAbAAQANAAAJAHQAHAHABAMQAAAGgEAGQgDAGgHAEQAJABAGAGQAFAGAAAKQAAAIgEAGQgEAHgGADQgHAEgKAAgAgVApIAWAAQAKgBAFgFQAGgFgBgJQABgIgGgEQgFgFgJAAIgXAAgAgVgEIASAAQAFAAAFgCQAEgDACgEQADgEAAgFQAAgIgGgFQgFgEgJAAIgRAAg");
  this.shape_17.setTransform(199.2, 64.325);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAiA9IAAgXIhNAAIAAhjIALAAIAABZIA2AAIAAhZIAKAAIAABZIAMAAIAAAhg");
  this.shape_18.setTransform(190.025, 65.5);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAcAyIgcgqIgbAqIgMAAIAigyIghgxIAMAAIAaApIAcgpIALAAIghAxIAiAyg");
  this.shape_19.setTransform(179.875, 64.325);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgaAyIgIgDIADgJIAFADIAHAAQAGAAAEgEQAEgDADgIIgnhMIALAAIAgBCIAdhCIALAAIgiBMQgDAIgDAEQgDAGgFADQgFAEgIAAIgHgBg");
  this.shape_20.setTransform(171.225, 64.4);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAbAAQANAAAJAHQAHAHABAMQgBAGgDAGQgDAGgHAEQAJABAGAGQAFAGAAAKQAAAIgEAGQgEAHgGADQgHAEgKAAgAgVApIAWAAQAKgBAFgFQAFgFAAgJQAAgIgFgEQgFgFgJAAIgXAAgAgVgEIASAAQAFAAAEgCQAEgDADgEQACgEAAgFQABgIgGgFQgFgEgJAAIgRAAg");
  this.shape_21.setTransform(163.1, 64.325);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAjA9IAAgXIhFAAIAAAXIgKAAIAAghIAHAAQACAAACgDQADgDACgFQACgGAAgGIAIhCIAzAAIAABZIAMAAIAAAhgAgPAGIgDAPQgCAGgDABIAtAAIAAhPIgfAAg");
  this.shape_22.setTransform(153.85, 65.5);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAdA+IAAhRIg6BRIgKAAIAAhiIAKAAIAABSIA7hSIAKAAIAABigAgPgyQgFgDgBgJIAIAAQAAAFAFADQADABAFAAQAGAAAEgBQADgDAAgFIAIAAQgBAJgFADQgGAFgJAAQgJAAgGgFg");
  this.shape_23.setTransform(137.45, 63.05);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAlAyIAAhjIALAAIAABjgAgvAyIAAhjIALAAIAAArIAVAAQAQAAAIAGQAIAIAAAMQgBAJgDAHQgDAGgIAEQgFAEgMAAgAgkApIAUAAQAMAAAEgGQAGgFAAgJQgBgKgFgEQgFgFgLAAIgUAAg");
  this.shape_24.setTransform(126.05, 64.325);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAcAyIAAgtIg3AAIAAAtIgLAAIAAhjIALAAIAAAtIA3AAIAAgtIALAAIAABjg");
  this.shape_25.setTransform(114.75, 64.325);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAKAAIAAArIAVAAQARAAAHAGQAIAIAAAMQAAAJgDAHQgEAGgHAEQgHAEgLAAgAgVApIAVAAQAKAAAGgGQAGgFAAgJQgBgKgFgEQgGgFgKAAIgVAAg");
  this.shape_26.setTransform(105.925, 64.325);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgjAyIgDgCIACgJIACABIAEABQAEAAACgDQACgDAAgHIAIhNIA1AAIAABiIgKAAIAAhZIgiAAIgHBHQAAAKgFAEQgEAFgIAAIgGAAg");
  this.shape_27.setTransform(96.175, 64.375);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA2AAIAAAKIgrAAIAAAjIApAAIAAAIIgpAAIAAAkIAsAAIAAAKg");
  this.shape_28.setTransform(88.675, 64.325);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgEAyIAAhZIgcAAIAAgKIBBAAIAAAKIgcAAIAABZg");
  this.shape_29.setTransform(81.1, 64.325);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAeAyIAAhSIg7BSIgKAAIAAhjIAKAAIAABSIA7hSIAKAAIAABjg");
  this.shape_30.setTransform(72.35, 64.325);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgUAvQgJgEgFgFIAFgJIAIAGQAEADAFACQAGACAGAAQALAAAHgGQAGgFAAgJQAAgKgIgFQgIgFgRAAIAAgIQALAAAHgDQAHgDACgEQADgEAAgEQgBgIgFgEQgGgFgJAAQgHAAgGADQgHADgEAEIgFgIQAFgFAIgDQAIgDAIAAQAKAAAGADQAIADADAFQAEAGAAAHQAAAKgGAGQgFAGgJACQALACAHAFQAGAGAAALQAAAJgEAGQgEAHgIADQgIAEgLAAQgMAAgIgEg");
  this.shape_31.setTransform(62.9, 64.325);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_32.setTransform(54.625, 64.325);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIAcAAQAKAAAHAEQAIAEAEAHQADAHAAAJQAAAIgDAHQgEAHgIAEQgHAEgKABIgRAAIAAAlgAgTADIAQAAQAGAAAFgCQAGgCADgFQADgFAAgHQAAgIgDgFQgDgEgGgCQgFgCgGAAIgQAAg");
  this.shape_33.setTransform(46.55, 64.325);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AAmAyIAAhjIAKAAIAABjgAgvAyIAAhjIAKAAIAAArIAXAAQAPAAAIAGQAHAIAAAMQAAAJgDAHQgEAGgGAEQgHAEgKAAgAglApIAVAAQAMAAAEgGQAGgFAAgJQAAgKgGgEQgFgFgLAAIgVAAg");
  this.shape_34.setTransform(36.1, 64.325);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAcAAQAMAAAIAHQAJAHAAAMQAAAGgDAGQgEAGgHAEQAJABAFAGQAGAGAAAKQAAAIgEAGQgEAHgHADQgGAEgKAAgAgUApIAUAAQALgBAFgFQAGgFgBgJQABgIgGgEQgFgFgJAAIgWAAgAgUgEIASAAQAEAAAFgCQAEgDACgEQACgEABgFQgBgIgFgFQgFgEgJAAIgQAAg");
  this.shape_35.setTransform(26.15, 64.325);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(19.5, 51, 257.5, 39.900000000000006), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAcB0QgOgSgBggQABggAOgRQAOgRAZAAQAaAAAOARQAOARAAAgQAAAggOASQgOASgaAAQgZAAgOgSgAArAeQgHAMAAAYQAAAYAHAMQAIAMAQABQAQgBAIgMQAIgMAAgYQAAgYgIgMQgIgMgQAAQgQAAgIAMgAhYCEICakGIAXAAIiaEGgAhqgQQgOgRAAggQAAggAOgSQAOgRAZgBQAaABAOARQAOASAAAgQAAAggOARQgOASgagBQgZABgOgSgAhahlQgIAMAAAYQAAAYAIANQAIAMAPgBQAQABAIgMQAIgNAAgYQAAgYgIgMQgIgMgQAAQgPAAgIAMg");
  this.shape.setTransform(238.825, 72.5);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAaCDIAAg7Ih1AAIAAgRIB9i5IAUAAIAACyIAmAAIAAAYIgmAAIAAA7gAg9AwIBXAAIAAiCg");
  this.shape_1.setTransform(218.525, 72.525);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(206, 40.5, 181.5, 56.8), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA2AAIAAAKIgrAAIAAAjIApAAIAAAIIgpAAIAAAkIAsAAIAAAKg");
  this.shape.setTransform(140.025, 80.275);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIAcAAQAKAAAHAEQAIAEAEAHQAEAHgBAJQABAIgEAHQgEAHgIAEQgHAEgKABIgRAAIAAAlgAgTADIAQAAQAGAAAFgCQAFgCADgFQAEgFAAgHQAAgIgEgFQgDgEgFgCQgFgCgGAAIgQAAg");
  this.shape_1.setTransform(132.4, 80.275);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIA0AAIAAAKIgqAAIAAAhIAVAAQARAAAHAGQAIAIAAAMQAAAJgDAHQgEAGgHAEQgHAEgLAAgAgVApIAVAAQAKAAAGgGQAGgFAAgJQgBgKgFgEQgGgFgKAAIgVAAg");
  this.shape_2.setTransform(124.375, 80.275);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAYAyIAAgqIgTAAIgBAAIgBAAIgYAqIgNAAIAcgsQgJgDgEgHQgFgHAAgJQAAgNAIgIQAJgIANAAIAdAAIAABjgAgCgmQgFACgDAFQgDAEAAAHQAAAHADAFQACAEAFACQAEACAFAAIASAAIAAgnIgRAAQgFAAgEABg");
  this.shape_3.setTransform(115.075, 80.275);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgZAsQgMgGgHgMQgGgLgBgPQABgOAGgLQAHgMAMgGQALgHAOAAQAPAAAMAHQALAGAHAMQAHALAAAOQAAAPgHALQgHAMgLAGQgMAHgPAAQgOAAgLgHgAgUgjQgJAGgFAJQgGAJAAALQAAAMAGAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAKgGAFgJQAFgJAAgMQAAgLgFgJQgFgJgKgGQgJgFgMAAQgLAAgJAFg");
  this.shape_4.setTransform(105.325, 80.275);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAcAyIAAgtIg3AAIAAAtIgKAAIAAhjIAKAAIAAAtIA3AAIAAgtIAKAAIAABjg");
  this.shape_5.setTransform(94.2, 80.275);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAbAAQANAAAJAHQAHAHABAMQAAAGgEAGQgDAGgHAEQAJABAGAGQAFAGAAAKQAAAIgEAGQgEAHgGADQgHAEgKAAgAgUApIAVAAQAKgBAFgFQAGgFgBgJQABgIgGgEQgFgFgJAAIgWAAgAgUgEIASAAQAEAAAFgCQAEgDACgEQADgEAAgFQAAgIgGgFQgFgEgJAAIgQAAg");
  this.shape_6.setTransform(81.85, 80.275);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_7.setTransform(69.525, 80.275);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAYAyIgoguIgJAAIAAAuIgLAAIAAhjIALAAIAAAtIAIAAIAlgtIANAAIgpAxIAtAyg");
  this.shape_8.setTransform(61.375, 80.275);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAcAAQANAAAHAHQAJAHgBAMQAAAGgCAGQgEAGgHAEQAJABAFAGQAGAGAAAKQAAAIgEAGQgDAHgIADQgGAEgKAAgAgVApIAVAAQAKgBAGgFQAFgFABgJQgBgIgFgEQgFgFgJAAIgXAAgAgVgEIATAAQAEAAAEgCQAEgDADgEQADgEgBgFQAAgIgFgFQgFgEgJAAIgRAAg");
  this.shape_9.setTransform(52.55, 80.275);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_10.setTransform(43.575, 80.275);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgEAyIAAhZIgcAAIAAgKIBBAAIAAAKIgcAAIAABZg");
  this.shape_11.setTransform(35.55, 80.275);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgRAsQgMgGgGgMQgHgLAAgPQAAgOAHgMQAGgLAMgHQALgGAOAAQAKAAAJADQAIADAHAFIgEAKQgGgFgHgDQgIgDgIAAQgMAAgJAFQgJAGgFAJQgFAJAAALQAAAMAFAJQAFAJAJAGQAKAFALAAQAJAAAIgDQAIgDAGgFIADAKQgHAGgJACQgJADgKAAQgOAAgLgHg");
  this.shape_12.setTransform(27.225, 80.275);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAYAyIAAgqIgTAAIgBAAIgBAAIgYAqIgNAAIAcgsQgJgDgEgHQgFgHAAgJQAAgNAIgIQAJgIANAAIAdAAIAABjgAgCgmQgFACgDAFQgDAEAAAHQAAAHADAFQACAEAFACQAEACAFAAIASAAIAAgnIgRAAQgFAAgEABg");
  this.shape_13.setTransform(202.575, 64.325);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_14.setTransform(194.325, 64.325);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAcAyIAAgtIg3AAIAAAtIgLAAIAAhjIALAAIAAAtIA3AAIAAgtIALAAIAABjg");
  this.shape_15.setTransform(184.6, 64.325);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgEAyIAAhZIgcAAIAAgKIBBAAIAAAKIgcAAIAABZg");
  this.shape_16.setTransform(175.95, 64.325);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AAeAyIAAhSIg7BSIgKAAIAAhjIALAAIAABSIA6hSIAKAAIAABjg");
  this.shape_17.setTransform(167.2, 64.325);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAjA9IAAgXIhFAAIAAAXIgJAAIAAghIAFAAQAEAAACgDQACgDACgFQACgGABgGIAHhCIAzAAIAABZIAMAAIAAAhgAgPAGIgEAPQgBAGgDABIAtAAIAAhPIgfAAg");
  this.shape_18.setTransform(157.15, 65.5);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA2AAIAAAKIgrAAIAAAjIApAAIAAAIIgpAAIAAAkIAsAAIAAAKg");
  this.shape_19.setTransform(148.975, 64.325);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIAbAAQAKAAAIAEQAHAEADAHQAEAHAAAJQAAAIgEAHQgDAHgHAEQgIAEgKABIgRAAIAAAlgAgTADIAQAAQAGAAAFgCQAGgCADgFQACgFAAgHQAAgIgCgFQgDgEgGgCQgFgCgGAAIgQAAg");
  this.shape_20.setTransform(141.35, 64.325);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AAYAyIgoguIgJAAIAAAuIgLAAIAAhjIALAAIAAAtIAIAAIAlgtIANAAIgpAxIAtAyg");
  this.shape_21.setTransform(133.375, 64.325);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAYAyIAAgqIgTAAIgBAAIgBAAIgYAqIgNAAIAcgsQgJgDgEgHQgFgHAAgJQAAgNAIgIQAJgIANAAIAdAAIAABjgAgCgmQgFACgDAFQgDAEAAAHQAAAHADAFQACAEAFACQAEACAFAAIASAAIAAgnIgRAAQgFAAgEABg");
  this.shape_22.setTransform(120.275, 64.325);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_23.setTransform(112.025, 64.325);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAcAyIAAgtIg3AAIAAAtIgKAAIAAhjIAKAAIAAAtIA3AAIAAgtIAKAAIAABjg");
  this.shape_24.setTransform(102.3, 64.325);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAKAAIAAArIAVAAQARAAAHAGQAIAIAAAMQAAAJgDAHQgEAGgHAEQgHAEgLAAgAgVApIAVAAQAKAAAGgGQAGgFAAgJQgBgKgFgEQgGgFgKAAIgVAAg");
  this.shape_25.setTransform(93.475, 64.325);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgjAyIgDgCIACgJIACABIAEABQAEAAACgDQACgDAAgHIAIhNIA1AAIAABiIgKAAIAAhZIgiAAIgHBHQAAAKgFAEQgEAFgIAAIgGAAg");
  this.shape_26.setTransform(83.725, 64.375);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAhAyIgNggIgoAAIgMAgIgLAAIAmhjIAKAAIAnBjgAARAJIgRguIgRAuIAiAAg");
  this.shape_27.setTransform(75.475, 64.325);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAeAyIAAhSIg7BSIgKAAIAAhjIAKAAIAABSIA7hSIAKAAIAABjg");
  this.shape_28.setTransform(65.7, 64.325);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAiA9IAAgXIhNAAIAAhjIALAAIAABZIA2AAIAAhZIAKAAIAABZIAMAAIAAAhg");
  this.shape_29.setTransform(55.725, 65.5);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA2AAIAAAKIgrAAIAAAjIApAAIAAAIIgpAAIAAAkIAsAAIAAAKg");
  this.shape_30.setTransform(46.325, 64.325);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAbAyIAAhZIg2AAIAABZIgKAAIAAhjIBLAAIAABjg");
  this.shape_31.setTransform(37.15, 64.325);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgRAsQgMgGgGgMQgHgLAAgPQAAgOAHgMQAGgLAMgHQALgGAOAAQAKAAAJADQAIADAHAFIgEAKQgGgFgHgDQgIgDgIAAQgMAAgJAFQgJAGgFAJQgFAJAAALQAAAMAFAJQAFAJAJAGQAKAFALAAQAJAAAIgDQAIgDAGgFIADAKQgHAGgJACQgJADgKAAQgOAAgLgHg");
  this.shape_32.setTransform(27.225, 64.325);
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(20, 51, 210, 39.900000000000006), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(144, 19, 0.6639, 0.6634);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(144, 19, 76.4, 21.299999999999997), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAJBEIAAgbIg6AAIAAgRIA7haIAXAAIAABWIARAAIAAAVIgRAAIAAAbgAgZAUIAiAAIAAg0g");
  this.shape.setTransform(136.425, 28.95);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgNBEIgxiGIAcAAIAiBnIAkhnIAbAAIgxCGg");
  this.shape_1.setTransform(125.775, 28.95);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAlBEIgNgnIgvAAIgOAnIgaAAIAyiGIAbAAIAyCGgAAQAJIgQgvIgQAvIAgAAg");
  this.shape_2.setTransform(113.95, 28.95);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAWBEIgfg1IgQAAIAAA1IgaAAIAAiGIAvAAQAOgBAKAGQAKAFAFAJQAFAJAAALQAAAMgGALQgHAJgMAFIAlA6gAgZgEIARAAQAGgBAEgCQAFgCADgEQADgFAAgHQAAgLgGgEQgGgFgJAAIgRAAg");
  this.shape_3.setTransform(102.925, 28.95);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAlBEIgNgnIgwAAIgMAnIgbAAIAziGIAaAAIAyCGgAARAJIgRgvIgQAvIAhAAg");
  this.shape_4.setTransform(87.35, 28.95);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgMBEIAAhwIgkAAIAAgWIBgAAIAAAWIgjAAIAABwg");
  this.shape_5.setTransform(76.6, 28.95);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgkA9QgPgJgKgQQgIgPgBgVQABgUAIgQQAKgPAPgJQAQgIAUgBQAUABAQAIQAQAJAKAPQAJAQAAAUQAAAVgJAPQgKAPgQAKQgPAJgVAAQgTAAgRgJgAgWgmQgKAGgFAKQgGAKAAAMQAAAOAGAKQAFAKAKAGQAKAFAMAAQANAAAKgFQAKgGAFgKQAGgKAAgOQAAgMgGgKQgFgKgKgGQgKgGgNAAQgMAAgKAGg");
  this.shape_6.setTransform(64.5, 28.95);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgMBEIAAg1IgthRIAcAAIAeA6IAgg6IAZAAIgtBRIAAA1g");
  this.shape_7.setTransform(51.875, 28.95);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgkA9QgPgJgKgQQgIgPgBgVQABgUAIgQQAKgPAPgJQAQgIAUgBQAUABAQAIQAQAJAKAPQAJAQAAAUQAAAVgJAPQgKAPgQAKQgPAJgVAAQgTAAgRgJgAgWgmQgKAGgFAKQgGAKAAAMQAAAOAGAKQAFAKAKAGQAKAFAMAAQANAAAKgFQAKgGAFgKQAGgKAAgOQAAgMgGgKQgFgKgKgGQgKgGgNAAQgMAAgKAGg");
  this.shape_8.setTransform(39.3, 28.95);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgMBEIAAhwIgjAAIAAgWIBgAAIAAAWIgkAAIAABwg");
  this.shape_9.setTransform(27.25, 28.95);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(20, 11.5, 181.5, 31.1), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
  this.shape.setTransform(179.525, 288.775);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAUIAQgUIgQgTIAHAAIARATIgRAUgAgWAUIARgUIgRgTIAIAAIAQATIgQAUg");
  this.shape_1.setTransform(175.575, 286.6);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQABAFgDADQgCAEgEABQgDACgFAAgAgTATIANAAQAGABACgDQACgDAAgEQAAgEgDgDQgCgCgGAAIgMAAg");
  this.shape_2.setTransform(169.5, 286.7);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_3.setTransform(162.925, 287.7);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgCQAFgBADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_4.setTransform(156.7, 286.7);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_5.setTransform(151.475, 286.7);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_6.setTransform(145.525, 286.7);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgEgFQgDgGAAgIQAAgHADgFQAEgHAFgDQAHgDAGAAQAFAAAFABIAHAEIgCAGQgDgCgEgBQgDgCgFABQgFgBgDADQgFADgCAEQgDAEABAFQgBAGADAEQACAEAEADQAEADAFgBIAJgBIAHgEIACAGQgEADgEACQgFABgGAAQgGAAgGgDg");
  this.shape_7.setTransform(139.95, 286.7);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgIAXQgGgEgDgFQgDgGgBgIQABgHADgFQADgHAGgDQAFgDAHAAQAFAAAEABIAIAEIgCAGQgDgCgEgBQgEgCgEABQgEgBgFADQgEADgCAEQgCAEgBAFQABAGACAEQACAEAEADQAEADAEgBIAJgBIAIgEIABAGQgCADgGACQgEABgGAAQgGAAgFgDg");
  this.shape_8.setTransform(134.85, 286.7);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_9.setTransform(129.175, 286.7);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_10.setTransform(123.125, 287.7);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AALAZIgVgYIgCAAIAAAYIgHAAIAAgxIAHAAIAAAVIADAAIATgVIAJAAIgXAYIAYAZg");
  this.shape_11.setTransform(117.675, 286.7);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgCQAEgBADgEIADAHQgEADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_12.setTransform(109.5, 286.7);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGABACgDQADgDAAgEQgBgEgDgDQgBgCgHAAIgMAAg");
  this.shape_13.setTransform(103.1, 286.7);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_14.setTransform(96.475, 286.7);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIAEAAQADAAACgDQACgEABgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgCAHQgBADgCACIAaAAIAAglIgSAAg");
  this.shape_15.setTransform(90.45, 287.425);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_16.setTransform(84.475, 286.7);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_17.setTransform(79.025, 286.7);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_18.setTransform(73.025, 286.7);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_19.setTransform(66.875, 287.7);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AAOAZIAAgrIgbAAIAAArIgHAAIAAgxIApAAIAAAxg");
  this.shape_20.setTransform(60.475, 286.7);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_21.setTransform(54.375, 286.7);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_22.setTransform(48.275, 286.7);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_23.setTransform(41.875, 286.725);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_24.setTransform(36.225, 286.7);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAOAZIAAgrIgbAAIAAArIgHAAIAAgxIApAAIAAAxg");
  this.shape_25.setTransform(30.175, 286.7);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAEAGQAFAEAJAAQAFAAAFgCQAFgBADgEIACAHQgDADgGACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_26.setTransform(250.9, 275.45);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGABACgDQADgDAAgEQAAgEgEgDQgBgCgHAAIgMAAg");
  this.shape_27.setTransform(244.5, 275.45);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_28.setTransform(237.875, 275.45);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_29.setTransform(231.875, 276.45);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAFAEAIAAQAGAAAFgCQAFgBACgEIACAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgEAAgDACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_30.setTransform(225.65, 275.45);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAVAZIAAgnIgSAgIgFAAIgTggIAAAnIgGAAIAAgxIAHAAIAUAiIAUgiIAIAAIAAAxg");
  this.shape_31.setTransform(219.15, 275.45);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgMAZIgIgFIACgGQADACAEACQAFACAGgBQAGAAADgCQAEgCAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBgCgFgCIgLgBIAAgFQAJAAAEgCQAEgCAAgEQAAgEgDgCQgDgCgFAAQgEAAgDACIgIACIgCgFIAIgEIAJgBQAJAAAEADQAFADAAAHQAAAEgDADQgDAEgGABIAHAAQAEACACADQACACAAAEQAAAGgDACQgDAEgEACQgFABgGAAQgHAAgFgBg");
  this.shape_32.setTransform(212.775, 275.45);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_33.setTransform(207.425, 275.45);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_34.setTransform(201.725, 276.45);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgCQAFgBADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgEAAgDACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_35.setTransform(195.5, 275.45);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_36.setTransform(189.625, 275.45);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIAEAAQADAAACgDQACgEABgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgCAHQgBADgBACIAZAAIAAglIgSAAg");
  this.shape_37.setTransform(183.6, 276.175);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgCQAEgBADgEIADAHQgEADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_38.setTransform(177.9, 275.45);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_39.setTransform(172.075, 276.45);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAIgFAKAAQAHAAAGADQAGACAFADIgDAIQgEgEgFgCQgGgCgGgBQgHAAgHAFQgGADgEAHQgEAHAAAHQAAAJAEAGQAEAGAGAEQAHAFAHAAQAHAAAGgDQAFgCAFgDIACAHQgGADgGACQgGACgHAAQgKAAgIgEg");
  this.shape_40.setTransform(165.125, 274.4);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAOAUIgPgUIAPgTIAJAAIgRATIARAUgAgFAUIgRgUIARgTIAHAAIgQATIAQAUg");
  this.shape_41.setTransform(158.925, 275.35);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_42.setTransform(150.775, 275.45);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_43.setTransform(144.475, 275.45);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AASAgIAAgOIgqAAIAAgxIAHAAIAAArIAbAAIAAgrIAHAAIAAArIAIAAIAAAUg");
  this.shape_44.setTransform(138.575, 276.175);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_45.setTransform(132.225, 275.45);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_46.setTransform(126.475, 275.45);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_47.setTransform(120.325, 275.45);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAVAZIAAgnIgSAgIgFAAIgTggIAAAnIgGAAIAAgxIAHAAIAUAiIAUgiIAIAAIAAAxg");
  this.shape_48.setTransform(113.5, 275.45);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_49.setTransform(106.725, 275.45);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_50.setTransform(100.625, 275.45);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_51.setTransform(92.725, 275.45);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgSAZIAAgxIAHAAIAAAVIAMAAQAJAAAEADQAFADAAAHQAAAFgCADQgCAEgEABQgEACgFAAgAgLATIAMAAQAGABADgDQACgDAAgEQAAgEgDgDQgDgCgGAAIgLAAg");
  this.shape_52.setTransform(85.025, 275.45);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_53.setTransform(78.825, 275.475);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgCQAFgBADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_54.setTransform(73.45, 275.45);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_55.setTransform(68.375, 275.45);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_56.setTransform(63.025, 275.45);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIADAAQAEAAACgDQADgEAAgGIAEgeIAeAAIAAArIAIAAIAAAUgAgIAAIgCAHQAAADgCACIAZAAIAAglIgSAAg");
  this.shape_57.setTransform(56.85, 276.175);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAGAGQAEAEAIAAQAGAAAFgCQAEgBADgEIACAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_58.setTransform(51.15, 275.45);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgJAlQgFgCgDgEQgEgEgCgIQgCgHAAgMQAAgKADgIQACgHAGgEQAGgFAJgBIAEgBIACAAIAHgBIADAAIAEgBIABAHIgHABIgGAAIgDABIgDAAQgGABgFACQgFADgCAGQgCAFgBAKQADgEAFgDQAFgDAHAAQAHAAAFADQAGADADAGQADAFAAAIQAAAHgDAGQgDAGgGADQgGAEgIAAIgJgCgAgHgEQgEACgCACIgFAFQAAALAEAGQACAGAEACQAEACAEAAQAGAAAEgCQAEgDACgEQACgFAAgGQAAgFgCgFQgCgDgEgCQgEgDgFAAQgEAAgEACg");
  this.shape_59.setTransform(45.25, 274.175);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_60.setTransform(39.025, 275.45);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAUAjIAAg/IgmAAIAAA/IgIAAIAAhGIA1AAIAABGg");
  this.shape_61.setTransform(32.25, 274.4);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_62.setTransform(24.075, 272.425);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(20.1, 264.3, 247.9, 29.5), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape.setTransform(52.825, 275.475);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_1.setTransform(47.275, 274.325);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_2.setTransform(41.325, 275.45);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_3.setTransform(36.525, 275.45);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAIgFAKAAQAHAAAGADQAGACAFADIgDAIQgEgEgFgCQgGgCgGgBQgHAAgHAFQgGADgEAHQgEAHAAAHQAAAJAEAGQAEAGAGAEQAHAFAHAAQAHAAAGgDQAFgCAFgDIACAHQgGADgGACQgGACgHAAQgKAAgIgEg");
  this.shape_4.setTransform(30.925, 274.4);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_5.setTransform(23.075, 272.425);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(19.1, 264.3, 295.9, 18.30000000000001), null);
 (lib.snoska = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgBAUIAQgUIgQgTIAHAAIARATIgRAUgAgWAUIARgUIgRgTIAIAAIAQATIgQAUg");
  this.shape.setTransform(260.475, 286.6);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AALAZIgVgYIgCAAIAAAYIgHAAIAAgxIAHAAIAAAVIADAAIATgVIAJAAIgXAYIAYAZg");
  this.shape_1.setTransform(256.075, 286.7);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_2.setTransform(250.325, 286.7);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_3.setTransform(244.525, 286.7);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgWAjIAAhGIAkAAIAAAHIgdAAIAAAYIAPAAQAMAAAGAEQAFAFAAAKQAAAGgDAEQgCAFgFADQgFACgIAAgAgPAdIAPAAQAHAAAEgEQAFgEAAgGQgBgHgEgDQgFgDgGAAIgPAAg");
  this.shape_4.setTransform(239.25, 285.65);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_5.setTransform(230.825, 286.7);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_6.setTransform(226.025, 286.7);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_7.setTransform(220.875, 286.7);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_8.setTransform(214.825, 285.575);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_9.setTransform(208.725, 286.7);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgDAjIAAg/IgUAAIAAgHIAuAAIAAAHIgTAAIAAA/g");
  this.shape_10.setTransform(203.25, 285.65);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAOAUIgPgUIAPgTIAJAAIgRATIARAUgAgFAUIgRgUIARgTIAHAAIgQATIAQAUg");
  this.shape_11.setTransform(198.325, 286.6);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgSAgQgIgFgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAJgFAJAAQALAAAIAGQAJAEAEAIQAFAIAAAKQAAAKgFAJQgEAIgJAFQgIAEgLAAQgJAAgJgEgAgOgYQgHADgEAHQgDAHAAAHQAAAJADAGQAEAGAHAEQAHAFAHAAQAJAAAGgFQAHgEAEgGQADgGAAgJQAAgHgDgHQgEgHgHgDQgGgFgJAAQgHAAgHAFg");
  this.shape_12.setTransform(189.3, 285.65);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAXAjIgIgWIgdAAIgJAWIgHAAIAbhGIAHAAIAbBGgAAMAGIgMggIgMAgIAYAAg");
  this.shape_13.setTransform(181.875, 285.65);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AANAZIAAgVIgMAAIgNAVIgHAAIAOgWQgFgBgDgCQgDgEAAgFQAAgFACgEQACgDAEgBQAEgCAEAAIAUAAIAAAxgAgGgQQgDACAAAFQAAAEADACQACADAFAAIAMAAIAAgTIgMAAQgFAAgCADg");
  this.shape_14.setTransform(173.575, 286.675);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgEgFQgCgGAAgIQAAgHACgFQAEgHAFgDQAHgDAGAAQAFAAAFABIAHAEIgDAGQgCgCgEgBQgEgCgEABQgEgBgEADQgFADgCAEQgCAEAAAFQAAAGACAEQACAEAEADQAEADAFgBIAJgBIAHgEIACAGQgEADgEACQgFABgGAAQgGAAgGgDg");
  this.shape_15.setTransform(168.9, 286.7);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_16.setTransform(164.225, 286.7);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAGgDAFAAQAIAAAFADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAGAGQAFAEAHAAQAGAAAFgCQAEgBADgEIADAHQgDADgGACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgEgCQgDgCgFAAQgCAAgEACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_17.setTransform(159.35, 286.7);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AANAZIAAgVIgMAAIgNAVIgHAAIAOgWQgFgBgDgCQgDgEAAgFQAAgFACgEQACgDAEgBQAEgCAEAAIAUAAIAAAxgAgGgQQgDACAAAFQAAAEADACQACADAFAAIAMAAIAAgTIgMAAQgFAAgCADg");
  this.shape_18.setTransform(153.825, 286.675);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_19.setTransform(148.275, 286.725);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_20.setTransform(143.475, 286.7);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_21.setTransform(138.525, 286.7);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgIAXQgGgEgDgFQgDgGgBgIQABgHADgFQADgHAGgDQAFgDAHAAQAFAAAEABIAIAEIgCAGQgDgCgEgBQgEgCgEABQgEgBgFADQgEADgCAEQgCAEgBAFQABAGACAEQACAEAEADQAEADAEgBIAJgBIAIgEIABAGQgCADgGACQgEABgGAAQgGAAgFgDg");
  this.shape_22.setTransform(133.95, 286.7);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQADgHAGgDQAFgDAHAAQAGAAAGADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAEAGQAGAEAIAAQAFAAAFgCQAFgBADgEIABAHQgCADgGACQgFACgHAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgEgCQgDgCgEAAQgEAAgDACQgEACgDADQgCADAAAFIAgAAIAAAAg");
  this.shape_23.setTransform(128.7, 286.7);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAgAgIAAgOIhGAAIAAgxIAHAAIAAArIAYAAIAAgrIAHAAIAAArIAYAAIAAgrIAHAAIAAArIAIAAIAAAUg");
  this.shape_24.setTransform(121.925, 287.425);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgTAkIgDgBIABgGIACAAIABAAQAEAAAEgCQADgCACgGIAEgHIgWgvIAHAAIARAmIAPgmIAIAAIgYA4QgCAIgEADQgEAEgHAAIgCAAg");
  this.shape_25.setTransform(114.9, 287.775);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgEgFQgDgGAAgIQAAgHADgFQAEgHAFgDQAHgDAGAAQAFAAAFABIAHAEIgDAGQgCgCgEgBQgDgCgFABQgEgBgEADQgFADgCAEQgDAEABAFQgBAGADAEQACAEAEADQAEADAFgBIAJgBIAHgEIACAGQgDADgFACQgFABgGAAQgGAAgGgDg");
  this.shape_26.setTransform(110.15, 286.7);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_27.setTransform(104.625, 286.7);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAGgDAFAAQAIAAAFADQAGAEACAFQADAGAAAHIAAAAIgoAAQABAJAFAGQAEAEAJAAQAFAAAFgCQAFgBADgEIACAHQgDADgGACQgGACgGAAQgHAAgGgDgAARgEQAAgFgDgDQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDADgBAFIAhAAIAAAAg");
  this.shape_28.setTransform(96.55, 286.7);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_29.setTransform(90.725, 286.7);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_30.setTransform(84.675, 286.7);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_31.setTransform(78.875, 286.7);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFABADgDQADgCAAgFQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_32.setTransform(73.925, 286.7);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgDgFQgDgHAAgHQAAgHADgFQADgHAGgDQAGgDAHAAQAIAAAGADQAGADADAHQADAFAAAHQAAAHgDAHQgDAFgGAEQgGADgIAAQgHAAgGgDgAgJgQQgEADgDAEQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGABAEgDQAEgDADgEQACgFAAgFQAAgFgCgEQgDgEgEgDQgEgDgGABQgFgBgEADg");
  this.shape_33.setTransform(68.125, 286.7);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_34.setTransform(62.975, 286.7);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_35.setTransform(57.775, 286.7);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIAEAAQADAAACgDQACgEABgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgCAHQgBADgCACIAaAAIAAglIgSAAg");
  this.shape_36.setTransform(51.75, 287.425);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AgLAXQgGgEgDgGQgDgGAAgHQAAgHADgFQAEgHAFgDQAFgDAHAAQAGAAAGADQAFAEADAFQADAGAAAHIAAAAIgoAAQAAAJAGAGQAEAEAIAAQAGAAAFgCQAEgBADgEIACAHQgDADgFACQgGACgGAAQgHAAgGgDgAARgEQgBgFgCgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCADgBAFIAhAAIAAAAg");
  this.shape_37.setTransform(46.2, 286.7);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgGAFgDQAFgCAFAAQAHAAAGADQAFADADAHQADAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEADgCAEQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFABAEgDQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_38.setTransform(40.525, 287.7);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AARAjIgcggIgHAAIAAAgIgHAAIAAhGIAHAAIAAAgIAGAAIAaggIAJAAIgcAjIAfAjg");
  this.shape_39.setTransform(34.625, 285.65);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_40.setTransform(26.825, 283.675);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_41.setTransform(23.075, 283.675);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_42.setTransform(52.825, 275.475);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_43.setTransform(47.275, 274.325);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAFAAAKIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGABgDADQgCACAAAEQAAAEADACQADADAFAAQADABAEgCIAHgFQACgDAAgGIAAgFIgQABg");
  this.shape_44.setTransform(41.325, 275.45);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_45.setTransform(36.525, 275.45);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgJAAgKQAAgKAFgIQAFgIAIgFQAIgFAKAAQAHAAAGADQAGACAFADIgDAIQgEgEgFgCQgGgCgGgBQgHAAgHAFQgGADgEAHQgEAHAAAHQAAAJAEAGQAEAGAGAEQAHAFAHAAQAHAAAGgDQAFgCAFgDIACAHQgGADgGACQgGACgHAAQgKAAgIgEg");
  this.shape_46.setTransform(30.925, 274.4);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_47.setTransform(23.075, 272.425);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.snoska, new cjs.Rectangle(19.1, 264.3, 295.9, 29.5), null);
 (lib.red_line = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0022").s().p("AyvAPIAAgdMAlfAAAIAAAdg");
  this.shape.setTransform(120, 1.5);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.red_line, new cjs.Rectangle(0, 0, 240, 3), null);
 (lib.logo_s = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiNBbQg6gmAAg1QAAg1A6glQA7gmBSAAQBTAAA6AmQA7AlAAA1QAAA1g7AmQg6AmhTAAQhSAAg7gmgACUg9QAAAbgrASQgZALgfAFIAAAEQAAAwgOAiQgJAUgLAIQA8gEAtgeQAZgQANgXQANgWABgXQgBgYgMgUQgEgJgHgHIAAADgAifgwQgLAUAAAYQAAAXAMAWQAOAXAYAQQAaARAdAJQAYAGAaACQgLgIgIgUQgPgiAAgwIAAgEQgegFgZgLQgsgSAAgbIAAgCIgLAPgAgVAzQAJAWAMAAQAMAAAJgWQAJgVAAgdQgOABgQAAQgPAAgPgBQABAdAIAVgAgVg5QgEAMgCAPIAbABIAdgBQgDgPgFgMQgJgXgMAAQgMAAgJAXgAAjhMQAIAUAEAYQATgEAQgFQAhgMAAgRQAAgRghgMQgNgFgPgDIgNgCIgmgCIgDAAIgDAAIgtADIgJACIgXAHQgiAMAAARQAAARAiAMQAQAGASADQAEgYAIgUQAPghATAAQAVAAAOAhg");
  this.shape.setTransform(20, 12.925);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.logo_s, new cjs.Rectangle(0, 0, 40, 25.9), null);
 (lib.legal_01_d1 = function() {
  this.initialize(img.legal_01_d1);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 257, 273);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(22, 68, 0.5, 0.5);
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
   y: -153
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -374
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(152.5, 178.5, 2.61, 2.21);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(20, 66, 261, 221), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(66, 122, 0.67, 0.67);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(66, 122, 263.3, 124.6), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
  this.shape.setTransform(150, 150);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 300, 300), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(102, 110, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(102, 110, 234.8, 136.1), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(102, 110, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(102, 110, 234.8, 136.1), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(102, 110, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(102, 110, 234, 136), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
  this.shape.setTransform(150, 150);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 300, 300), null);
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
  this.instance.setTransform(110.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 74.5,
   regY: 77.1,
   x: 91.7,
   y: 77.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 89.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 86.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 84.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 82.75,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 79.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 78.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 77.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 76.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 75.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 74.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 74.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(22, 53, 125, 48.2);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A0JFoIAAixMAoTAAAIAACxg");
  mask.setTransform(128.9936, 35.9633);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 135.7,
   regY: 72.2,
   x: 118.5,
   y: 72.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 121.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 123.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 125.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 127.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 129.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 130.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 132.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 133.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 134.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 134.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 135.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 135.6,
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
  mask_1.graphics.p("A0JHAIAAixMAoTAAAIAACxg");
  mask_1.setTransform(128.9936, 44.7633);
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
   regX: 135.7,
   regY: 72.2,
   x: 118.5,
   y: 72.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 121.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 123.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 125.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 127.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 129.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 130.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 132.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 133.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 134.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 134.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 135.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 135.6,
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
  mask_2.graphics.p("A0JIYIAAixMAoTAAAIAACxg");
  mask_2.setTransform(128.9936, 53.6133);
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
   regX: 135.7,
   regY: 72.2,
   x: 118.5,
   y: 72.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 121.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 123.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 125.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 127.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 129.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 130.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 132.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 133.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 134.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 134.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 135.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 135.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 54.3, 258, 36.60000000000001);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AwKFjIAAjaMAgVAAAIAADag");
  mask.setTransform(103.495, 35.5205);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 114.5,
   regY: 72.3,
   x: 97.3,
   y: 72.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 99.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 102.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 104.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 106.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 108,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 109.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 110.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 112.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 113.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 114.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 114.4,
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
  mask_1.graphics.p("AwKHQIAAjaMAgVAAAIAADag");
  mask_1.setTransform(103.495, 46.4205);
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
   regX: 114.5,
   regY: 72.3,
   x: 97.3,
   y: 72.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 99.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 102.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 104.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 106.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 108,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 109.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 110.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 112.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 113.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 114.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 114.4,
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
  mask_2.graphics.p("AwKI9IAAjaMAgVAAAIAADag");
  mask_2.setTransform(103.495, 57.2955);
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
   regX: 114.5,
   regY: 72.3,
   x: 97.3,
   y: 72.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 99.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 102.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 104.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 106.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 108,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 109.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 110.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 112.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 113.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 114.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 114.4,
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
  mask_3.graphics.p("AJ9H7IAAovIMhAAIAAIvg");
  mask_3.setTransform(143.7521, 50.7106);
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
   regX: 230.1,
   regY: 72.5,
   x: 212.9,
   y: 72.5,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 215.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 217.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 219.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 221.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 223.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 225.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 226.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 227.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 228.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 229.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 229.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 230,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 45.4, 287.5, 51.9);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AylDdIAAkMMAlLAAAIAAEMg");
  mask.setTransform(118.9911, 22.0581);
  this.instance = new lib.t01_1();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  this.instance._off = true;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({
   _off: false
  }, 0).wait(1).to({
   regX: 182.2,
   regY: 29.6,
   x: 165,
   y: 29.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 167.55,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 169.9,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 172,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 173.95,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 175.7,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 177.2,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 178.55,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 179.65,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 180.6,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 181.3,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 181.8,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 182.1,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 220.4, 40.3);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AzlDNIAAmQMAnLAAAIAAGQg");
  mask.setTransform(125.4173, 20.5496);
  this.instance = new lib.t01();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 81.9,
   regY: 28.9,
   x: 64.7,
   y: 28.9,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 67.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 69.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 71.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 73.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 75.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 76.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 78.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 79.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 80.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 81,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 81.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 81.8,
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
  mask_1.graphics.p("AzlF2IAAlcMAnLAAAIAAFcg");
  mask_1.setTransform(125.4173, 37.4303);
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
   regX: 81.9,
   regY: 28.9,
   x: 64.7,
   y: 28.9,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 67.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 69.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 71.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 73.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 75.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 76.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 78.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 79.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 80.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 81,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 81.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 81.8,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 11.5, 201.5, 31.1);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(45.2723, 77.2165, 0.8841, 0.8841);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(45.2956, 77.1956, 0.8841, 0.8841);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(45.85, 77.8, 0.8841, 0.8841, 0, 0, 0, 22.9, 23.4);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(45.85, 77.8, 0.8841, 0.8841, 0, 0, 0, 22.9, 23.4);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(45.2735, 77.2177, 0.8841, 0.8841);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgGAyIAAhWIgbAAIAAgNIBDAAIAAANIgaAAIAABWg");
  this.shape_3.setTransform(160.425, 93.325);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAeAAQAKAAAIAEQAIAEADAHQAEAHAAAJQAAAJgEAHQgDAGgIAFQgIAFgKAAIgPAAIAAAkgAgQACIANAAQAFAAAFgCQAEgCADgFQADgEABgHQgBgHgDgEQgDgEgEgCQgFgCgFABIgNAAg");
  this.shape_4.setTransform(152.65, 93.325);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgaAtQgLgHgHgLQgHgMAAgPQAAgOAHgMQAHgLALgGQAMgHAOAAQAPAAAMAHQALAGAHALQAHAMAAAOQAAAPgHALQgHAMgLAGQgMAHgPAAQgOAAgMgGgAgSggQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAFAKAAQALAAAIgFQAJgFAEgJQAFgIAAgLQAAgKgFgIQgEgJgJgFQgIgEgLAAQgKAAgIAEg");
  this.shape_5.setTransform(141.775, 93.325);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgGA0IAAgLQgOgBgLgFQgKgFgGgJQgGgJAAgMQAAgLAGgJQAGgJAKgFQALgFAOgBIAAgLIANAAIAAALQAOABALAFQAKAFAGAJQAGAJAAALQAAAMgGAJQgGAJgKAFQgLAFgOABIAAALgAAHAdQAPgBAJgIQAIgIABgMQgBgLgIgIQgJgHgPgCgAgegTQgJAIAAALQAAAMAJAIQAJAIAPABIAAg5QgPACgJAHg");
  this.shape_6.setTransform(129.525, 93.325);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAiAyIAAhPIgdAtIgKAAIgcgtIAABPIgOAAIAAhjIARAAIAeAxIAfgxIARAAIAABjg");
  this.shape_7.setTransform(117.025, 93.325);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgaAtQgLgHgHgLQgHgMAAgPQAAgOAHgMQAHgLALgGQAMgHAOAAQAPAAAMAHQALAGAHALQAHAMAAAOQAAAPgHALQgHAMgLAGQgMAHgPAAQgOAAgMgGgAgSggQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAFAKAAQALAAAIgFQAJgFAEgJQAFgIAAgLQAAgKgFgIQgEgJgJgFQgIgEgLAAQgKAAgIAEg");
  this.shape_8.setTransform(104.525, 93.325);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAWAyIgkgsIgKAAIAAAsIgOAAIAAhjIAOAAIAAAsIAIAAIAjgsIAQAAIgmAwIAqAzg");
  this.shape_9.setTransform(94.275, 93.325);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAcA/IAAhMIg2BMIgOAAIAAhjIAOAAIAABOIA2hOIANAAIAABjgAgQgxQgFgFgBgIIAKAAQABAFADACQADACAFgBQAGABADgDQADgCABgEIAJAAQAAAIgGAFQgGAFgKgBQgKABgGgFg");
  this.shape_10.setTransform(149.5, 79);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAbAyIAAhNIg2BNIgNAAIAAhjIANAAIAABNIA2hNIAOAAIAABjg");
  this.shape_11.setTransform(138.2, 80.325);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAaAyIAAgsIgyAAIAAAsIgPAAIAAhjIAPAAIAAAsIAyAAIAAgsIAOAAIAABjg");
  this.shape_12.setTransform(127.025, 80.325);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAiAyIAAhPIgdAtIgKAAIgcgtIAABPIgOAAIAAhjIARAAIAeAxIAfgxIARAAIAABjg");
  this.shape_13.setTransform(115.125, 80.325);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAbAyIAAhNIg2BNIgNAAIAAhjIANAAIAABNIA2hNIAOAAIAABjg");
  this.shape_14.setTransform(103.1, 80.325);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgVAvQgJgDgFgGIAHgLQAEAFAHADQAHADAKABQAJAAAHgFQAFgFAAgIQABgJgJgEQgHgEgQAAIAAgLQALAAAGgCQAGgDADgEQACgDAAgEQAAgHgGgEQgEgEgIAAQgHAAgHADQgGADgFAEIgGgLQAGgFAIgDQAIgDAKAAQAOAAAIAHQAJAGAAAMQAAAJgFAGQgGAGgJACQAMACAFAFQAHAGAAALQAAAJgFAGQgDAHgJADQgIAEgLAAQgMAAgJgEg");
  this.shape_15.setTransform(93, 80.325);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAlBDIgNglIgwAAIgMAlIgbAAIAyiGIAbAAIAyCGgAARAJIgRgwIgQAwIAhAAg");
  this.shape_16.setTransform(157.35, 60.95);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgMBDIAAhvIgkAAIAAgXIBgAAIAAAXIgjAAIAABvg");
  this.shape_17.setTransform(146, 60.95);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgPQgKgQAAgVQAAgUAKgPQAIgQARgJQAQgIATgBQAUABARAIQAQAJAIAQQAKAPAAAUQAAAUgKAQQgJAQgPAIQgRAJgUAAQgUAAgPgJgAgWgmQgJAFgHAKQgFALAAAMQAAAOAFAJQAHALAJAFQAKAGAMAAQANAAAKgGQAKgFAGgLQAFgJAAgOQAAgMgFgLQgGgKgKgFQgKgGgNAAQgMAAgKAGg");
  this.shape_18.setTransform(133.3, 60.95);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgMBDIAAg1IgthRIAcAAIAeA7IAgg7IAZAAIgtBSIAAA0g");
  this.shape_19.setTransform(120.075, 60.95);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgkA8QgPgIgKgPQgIgQgBgVQABgUAIgPQAKgQAPgJQAQgIAUgBQAUABAQAIQARAJAIAQQAKAPAAAUQAAAUgKAQQgJAQgQAIQgPAJgVAAQgUAAgQgJgAgWgmQgJAFgHAKQgFALAAAMQAAAOAFAJQAHALAJAFQAKAGAMAAQANAAAKgGQAKgFAGgLQAFgJAAgOQAAgMgFgLQgGgKgKgFQgKgGgNAAQgMAAgKAGg");
  this.shape_20.setTransform(106.9, 60.95);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgMBDIAAhvIgkAAIAAgXIBgAAIAAAXIgjAAIAABvg");
  this.shape_21.setTransform(94.25, 60.95);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAjeIAAG9");
  this.shape_22.setTransform(79.85, 76.775);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(21.8, 43.5, 155.5, 60.5), null);
 (lib.arrow = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EApvBQXIAAkQMAt5AAAIAAEQg");
  var mask_graphics_1 = new cjs.Graphics().p("EApvBQYIAAmNMAt5AAAIAAGNg");
  var mask_graphics_2 = new cjs.Graphics().p("EApvBQYIAAoKMAt5AAAIAAIKg");
  var mask_graphics_3 = new cjs.Graphics().p("EApvBQYIAAqHMAt5AAAIAAKHg");
  var mask_graphics_4 = new cjs.Graphics().p("EApvBQYIAAsDMAt5AAAIAAMDg");
  var mask_graphics_5 = new cjs.Graphics().p("EApvBQZIAAuBMAt5AAAIAAOBg");
  var mask_graphics_6 = new cjs.Graphics().p("EApvBQZIAAv9MAt5AAAIAAP9g");
  var mask_graphics_7 = new cjs.Graphics().p("EApvBQZIAAx6MAt5AAAIAAR6g");
  var mask_graphics_8 = new cjs.Graphics().p("EApvBQZIAAz2MAt5AAAIAAT2g");
  var mask_graphics_9 = new cjs.Graphics().p("EApvBQZIAA1zMAt5AAAIAAVzg");
  var mask_graphics_10 = new cjs.Graphics().p("EApvBQaIAA3wMAt5AAAIAAXwg");
  var mask_graphics_11 = new cjs.Graphics().p("EApvBQaIAA5tMAt5AAAIAAZtg");
  var mask_graphics_12 = new cjs.Graphics().p("EApvBQaIAA7pMAt5AAAIAAbpg");
  var mask_graphics_13 = new cjs.Graphics().p("EApvBQaIAA9mMAt5AAAIAAdmg");
  var mask_graphics_14 = new cjs.Graphics().p("EApvBQaIAA/jMAt5AAAIAAfjg");
  var mask_graphics_15 = new cjs.Graphics().p("EApvBQbMAAAghgMAt5AAAMAAAAhgg");
  var mask_graphics_16 = new cjs.Graphics().p("EApvBQbMAAAgjdMAt5AAAMAAAAjdg");
  var mask_graphics_17 = new cjs.Graphics().p("EApvBQbMAAAglZMAt5AAAMAAAAlZg");
  var mask_graphics_18 = new cjs.Graphics().p("EApvBQbMAAAgnWMAt5AAAMAAAAnWg");
  var mask_graphics_19 = new cjs.Graphics().p("EApvBQbMAAAgpSMAt5AAAMAAAApSg");
  var mask_graphics_20 = new cjs.Graphics().p("EApvBQcMAAAgrQMAt5AAAMAAAArQg");
  var mask_graphics_21 = new cjs.Graphics().p("EApvBQWMAAAgtMMAt5AAAMAAAAtMg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 560.8248,
   y: 514.3442
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 560.8248,
   y: 514.3656
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 560.8248,
   y: 514.3869
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 560.8248,
   y: 514.4082
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 560.8248,
   y: 514.4295
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 560.8248,
   y: 514.4509
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 560.8248,
   y: 514.4722
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 560.8248,
   y: 514.4935
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 560.8248,
   y: 514.5149
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 560.8248,
   y: 514.5362
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 560.8248,
   y: 514.5575
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 560.8248,
   y: 514.5788
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 560.8248,
   y: 514.6002
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 560.8248,
   y: 514.6215
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 560.8248,
   y: 514.6428
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 560.8248,
   y: 514.6641
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 560.8248,
   y: 514.6855
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 560.8248,
   y: 514.7068
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 560.8248,
   y: 514.7281
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 560.8248,
   y: 514.7495
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 560.8248,
   y: 514.7708
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 560.8248,
   y: 514.2137
  }).wait(1));
  this.instance = new lib.arrow1();
  this.instance.parent = this;
  this.instance.setTransform(963.4, 877.75, 1, 1, 0, 0, 0, 123.9, 124);
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(839.5, 753.8, 247.79999999999995, 248);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t04();
  this.instance.parent = this;
  this.instance.setTransform(21, 99.7, 1, 1, 0, 0, 0, 41, 99.7);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 92.8,
   regY: 77.2,
   x: 75.6,
   y: 77.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 78.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 80.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 82.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 84.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 86.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 87.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 89.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 90.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 91.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 91.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 92.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 92.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(1.8, 43.5, 175.5, 60.5);
 (lib.content = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1_4: 69,
   cvr_frame2_1: 149,
   cvr_frame3_2: 273,
   "cvr_frame#4": 345,
   cvr_stay: 355
  });
  this.frame_355 = function() {
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
  this.timeline.addTween(cjs.Tween.get(this).wait(355).call(this.frame_355));
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(238, 22);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(380));
  this.instance_1 = new lib.legal_01();
  this.instance_1.parent = this;
  this.instance_1.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(374).to({
   _off: false
  }, 0).to({
   _off: true
  }, 1).wait(5));
  this.instance_2 = new lib.black_plate();
  this.instance_2.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(349).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 10, cjs.Ease.get(1)).wait(6));
  this.instance_3 = new lib.snoska3("synched", 0, false);
  this.instance_3.parent = this;
  this.instance_3.alpha = 0;
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({
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
  }, 15, cjs.Ease.get(1)).wait(155).to({
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
  }, 1).wait(260));
  this.instance_6 = new lib.txt05("synched", 0, false);
  this.instance_6.parent = this;
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(289).to({
   _off: false
  }, 0).wait(91));
  this.instance_7 = new lib.txt04("synched", 0, false);
  this.instance_7.parent = this;
  this.instance_7._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(209).to({
   _off: false
  }, 0).wait(65).to({
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
  }, 1).wait(170));
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
  }, 1).wait(260));
  this.instance_10 = new lib.arrow("synched", 0, false);
  this.instance_10.parent = this;
  this.instance_10.setTransform(-23.45, 38.55, 0.23, 0.23, 0, 0, 0, 41.6, 124.2);
  this.instance_10._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(226).to({
   _off: false
  }, 0).wait(48).to({
   mode: "single",
   startPosition: 21
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_11 = new lib.txt01_1("synched", 0, false);
  this.instance_11.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(274).to({
   startPosition: 29
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_12 = new lib.txt01("synched", 0, false);
  this.instance_12.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(380));
  this.instance_13 = new lib.red_line();
  this.instance_13.parent = this;
  this.instance_13.setTransform(-108, 245.5, 1, 1, 0, 0, 180, 100, 1.5);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({
   _off: false
  }, 0).to({
   x: 12
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_14 = new lib.red_line();
  this.instance_14.parent = this;
  this.instance_14.setTransform(414, 118.5, 1, 1, 0, 0, 0, 100, 1.5);
  this.instance_14._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({
   _off: false
  }, 0).to({
   x: 184
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_15 = new lib.car_1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(102.2, 85, 1, 1, 0, 0, 0, 120.2, 75);
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(169).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(76));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("AEnZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_1 = new cjs.Graphics().p("AEkZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_2 = new cjs.Graphics().p("AEbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_3 = new cjs.Graphics().p("AEMZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_4 = new cjs.Graphics().p("AD2ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_5 = new cjs.Graphics().p("ADbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_6 = new cjs.Graphics().p("AC6ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_7 = new cjs.Graphics().p("ACSZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_8 = new cjs.Graphics().p("ABlZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_9 = new cjs.Graphics().p("AAxZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_10 = new cjs.Graphics().p("AgHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_11 = new cjs.Graphics().p("AhHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_12 = new cjs.Graphics().p("AiNZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_13 = new cjs.Graphics().p("AjZZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_14 = new cjs.Graphics().p("AkqZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_15 = new cjs.Graphics().p("Al1ZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_16 = new cjs.Graphics().p("Am7ZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_17 = new cjs.Graphics().p("An7ZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_18 = new cjs.Graphics().p("Ao3ZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_19 = new cjs.Graphics().p("AptZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_20 = new cjs.Graphics().p("AqeZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_21 = new cjs.Graphics().p("ArKZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_22 = new cjs.Graphics().p("ArxZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_23 = new cjs.Graphics().p("AsSZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_24 = new cjs.Graphics().p("AsuZiMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_25 = new cjs.Graphics().p("AtGZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_26 = new cjs.Graphics().p("AtYZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_27 = new cjs.Graphics().p("AtlZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_28 = new cjs.Graphics().p("AtsZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_29 = new cjs.Graphics().p("AtvZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_119 = new cjs.Graphics().p("AEnZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_120 = new cjs.Graphics().p("AEkZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_121 = new cjs.Graphics().p("AEbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_122 = new cjs.Graphics().p("AEMZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_123 = new cjs.Graphics().p("AD2ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_124 = new cjs.Graphics().p("ADbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_125 = new cjs.Graphics().p("AC6ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_126 = new cjs.Graphics().p("ACSZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_127 = new cjs.Graphics().p("ABlZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_128 = new cjs.Graphics().p("AAxZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_129 = new cjs.Graphics().p("AgHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_130 = new cjs.Graphics().p("AhHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_131 = new cjs.Graphics().p("AiNZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_132 = new cjs.Graphics().p("AjZZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_133 = new cjs.Graphics().p("AkqZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_134 = new cjs.Graphics().p("AlxZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_135 = new cjs.Graphics().p("AmzZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_136 = new cjs.Graphics().p("AnwZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_137 = new cjs.Graphics().p("AooZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_138 = new cjs.Graphics().p("ApdZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_139 = new cjs.Graphics().p("AqMZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_140 = new cjs.Graphics().p("Aq3ZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_141 = new cjs.Graphics().p("AreZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_142 = new cjs.Graphics().p("AsAZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_143 = new cjs.Graphics().p("AsdZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_144 = new cjs.Graphics().p("As2ZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_145 = new cjs.Graphics().p("AtLZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_146 = new cjs.Graphics().p("AtbZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_147 = new cjs.Graphics().p("AtmZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_148 = new cjs.Graphics().p("AttZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_149 = new cjs.Graphics().p("AtvZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_209 = new cjs.Graphics().p("AEnZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_210 = new cjs.Graphics().p("AEkZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_211 = new cjs.Graphics().p("AEbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_212 = new cjs.Graphics().p("AEMZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_213 = new cjs.Graphics().p("AD2ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_214 = new cjs.Graphics().p("ADbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_215 = new cjs.Graphics().p("AC6ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_216 = new cjs.Graphics().p("ACSZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_217 = new cjs.Graphics().p("ABlZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_218 = new cjs.Graphics().p("AAxZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_219 = new cjs.Graphics().p("AgHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_220 = new cjs.Graphics().p("AhHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_221 = new cjs.Graphics().p("AiNZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_222 = new cjs.Graphics().p("AjZZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_223 = new cjs.Graphics().p("AkqZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_224 = new cjs.Graphics().p("AlxZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_225 = new cjs.Graphics().p("AmzZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_226 = new cjs.Graphics().p("AnwZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_227 = new cjs.Graphics().p("AooZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_228 = new cjs.Graphics().p("ApdZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_229 = new cjs.Graphics().p("AqMZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_230 = new cjs.Graphics().p("Aq3ZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_231 = new cjs.Graphics().p("AreZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_232 = new cjs.Graphics().p("AsAZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_233 = new cjs.Graphics().p("AsdZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_234 = new cjs.Graphics().p("As2ZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_235 = new cjs.Graphics().p("AtLZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_236 = new cjs.Graphics().p("AtbZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_237 = new cjs.Graphics().p("AtmZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_238 = new cjs.Graphics().p("AttZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_239 = new cjs.Graphics().p("AtvZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_289 = new cjs.Graphics().p("AEnZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_290 = new cjs.Graphics().p("AEkZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_291 = new cjs.Graphics().p("AEbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_292 = new cjs.Graphics().p("AEMZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_293 = new cjs.Graphics().p("AD2ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_294 = new cjs.Graphics().p("ADbZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_295 = new cjs.Graphics().p("AC6ZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_296 = new cjs.Graphics().p("ACSZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_297 = new cjs.Graphics().p("ABlZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_298 = new cjs.Graphics().p("AAxZjMAAAggVMAooAAAMAAAAgVg");
  var mask_graphics_299 = new cjs.Graphics().p("AgHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_300 = new cjs.Graphics().p("AhHZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_301 = new cjs.Graphics().p("AiNZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_302 = new cjs.Graphics().p("AjZZkMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_303 = new cjs.Graphics().p("AkqZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_304 = new cjs.Graphics().p("AlxZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_305 = new cjs.Graphics().p("AmzZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_306 = new cjs.Graphics().p("AnwZjMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_307 = new cjs.Graphics().p("AooZjMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_308 = new cjs.Graphics().p("ApdZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_309 = new cjs.Graphics().p("AqMZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_310 = new cjs.Graphics().p("Aq3ZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_311 = new cjs.Graphics().p("AreZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_312 = new cjs.Graphics().p("AsAZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_313 = new cjs.Graphics().p("AsdZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_314 = new cjs.Graphics().p("As2ZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_315 = new cjs.Graphics().p("AtLZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_316 = new cjs.Graphics().p("AtbZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_317 = new cjs.Graphics().p("AtmZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_318 = new cjs.Graphics().p("AttZiMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_319 = new cjs.Graphics().p("AtvZjMAAAggVMAonAAAMAAAAgVg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 289.4988,
   y: 163.5038
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 289.1954,
   y: 163.5043
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 288.2854,
   y: 163.5058
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 286.7687,
   y: 163.5083
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 284.6453,
   y: 163.5118
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 281.9153,
   y: 163.5163
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 278.5786,
   y: 163.5218
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 274.6351,
   y: 163.5282
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 270.085,
   y: 163.5357
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 264.9283,
   y: 163.5442
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 259.1648,
   y: 163.5537
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 252.7947,
   y: 163.5642
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 245.8179,
   y: 163.5756
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 238.2344,
   y: 163.5881
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 230.0442,
   y: 163.4981
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 222.5628,
   y: 163.4855
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 215.5973,
   y: 163.4737
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 209.1478,
   y: 163.4629
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 203.2143,
   y: 163.4529
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 197.7967,
   y: 163.4438
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 192.8951,
   y: 163.4355
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 188.5095,
   y: 163.4281
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 184.6398,
   y: 163.4216
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 181.286,
   y: 163.4159
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 178.4483,
   y: 163.4112
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 176.1265,
   y: 163.4072
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 174.3206,
   y: 163.4042
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 173.0307,
   y: 163.402
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 172.2568,
   y: 163.4007
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 171.9988,
   y: 163.5038
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 289.4988,
   y: 163.5038
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 289.1954,
   y: 163.5043
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 288.2854,
   y: 163.5058
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 286.7687,
   y: 163.5083
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 284.6453,
   y: 163.5118
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 281.9153,
   y: 163.5163
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 278.5786,
   y: 163.5218
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 274.6351,
   y: 163.5282
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 270.085,
   y: 163.5357
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 264.9283,
   y: 163.5442
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 259.1648,
   y: 163.5537
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 252.7947,
   y: 163.5642
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 245.8179,
   y: 163.5756
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 238.2344,
   y: 163.5881
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 230.0442,
   y: 163.4981
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 223.0153,
   y: 163.4862
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 216.4398,
   y: 163.4752
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 210.3178,
   y: 163.4648
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 204.6493,
   y: 163.4553
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 199.4343,
   y: 163.4465
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 194.6728,
   y: 163.4385
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 190.3647,
   y: 163.4312
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 186.5101,
   y: 163.4247
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 183.109,
   y: 163.419
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 180.1614,
   y: 163.414
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 177.6673,
   y: 163.4098
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 175.6266,
   y: 163.4064
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 174.0394,
   y: 163.4037
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 172.9057,
   y: 163.4018
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 172.2255,
   y: 163.4007
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 171.9988,
   y: 163.5038
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 289.4988,
   y: 163.5038
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 289.1954,
   y: 163.5043
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 288.2854,
   y: 163.5058
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 286.7687,
   y: 163.5083
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 284.6453,
   y: 163.5118
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 281.9153,
   y: 163.5163
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 278.5786,
   y: 163.5218
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 274.6351,
   y: 163.5282
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 270.085,
   y: 163.5357
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 264.9283,
   y: 163.5442
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 259.1648,
   y: 163.5537
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 252.7947,
   y: 163.5642
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 245.8179,
   y: 163.5756
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 238.2344,
   y: 163.5881
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 230.0442,
   y: 163.4981
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 223.0153,
   y: 163.4862
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 216.4398,
   y: 163.4752
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 210.3178,
   y: 163.4648
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 204.6493,
   y: 163.4553
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 199.4343,
   y: 163.4465
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 194.6728,
   y: 163.4385
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 190.3647,
   y: 163.4312
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 186.5101,
   y: 163.4247
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 183.109,
   y: 163.419
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 180.1614,
   y: 163.414
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 177.6673,
   y: 163.4098
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 175.6266,
   y: 163.4064
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 174.0394,
   y: 163.4037
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 172.9057,
   y: 163.4018
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 172.2255,
   y: 163.4007
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 171.9988,
   y: 163.5038
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 289.4988,
   y: 163.5038
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 289.1954,
   y: 163.5043
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 288.2854,
   y: 163.5058
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 286.7687,
   y: 163.5083
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 284.6453,
   y: 163.5118
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 281.9153,
   y: 163.5163
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 278.5786,
   y: 163.5218
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 274.6351,
   y: 163.5282
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 270.085,
   y: 163.5357
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 264.9283,
   y: 163.5442
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 259.1648,
   y: 163.5537
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 252.7947,
   y: 163.5642
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 245.8179,
   y: 163.5756
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 238.2344,
   y: 163.5881
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 230.0442,
   y: 163.4981
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 223.0153,
   y: 163.4862
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 216.4398,
   y: 163.4752
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 210.3178,
   y: 163.4648
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 204.6493,
   y: 163.4553
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 199.4343,
   y: 163.4465
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 194.6728,
   y: 163.4385
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 190.3647,
   y: 163.4312
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 186.5101,
   y: 163.4247
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 183.109,
   y: 163.419
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 180.1614,
   y: 163.414
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 177.6673,
   y: 163.4098
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 175.6266,
   y: 163.4064
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 174.0394,
   y: 163.4037
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 172.9057,
   y: 163.4018
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 172.2255,
   y: 163.4007
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 171.9988,
   y: 163.5038
  }).wait(61));
  this.instance_16 = new lib.bg1();
  this.instance_16.parent = this;
  this.instance_16.setTransform(132, 207, 1, 1, 0, 0, 0, 150, 197);
  var maskedShapeInstanceList = [this.instance_16];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_17 = new lib.bg2_1();
  this.instance_17.parent = this;
  this.instance_17.setTransform(132, 207, 1, 1, 0, 0, 0, 150, 197);
  this.instance_17._off = true;
  var maskedShapeInstanceList = [this.instance_17];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(170));
  this.instance_18 = new lib.bg3_1();
  this.instance_18.parent = this;
  this.instance_18.setTransform(117, 207, 1, 1, 0, 0, 0, 150, 197);
  this.instance_18._off = true;
  var maskedShapeInstanceList = [this.instance_18];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(209).to({
   _off: false
  }, 0).wait(65).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).wait(91));
  this.instance_19 = new lib.bg1();
  this.instance_19.parent = this;
  this.instance_19.setTransform(132, 207, 1, 1, 0, 0, 0, 150, 197);
  this.instance_19._off = true;
  var maskedShapeInstanceList = [this.instance_19];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(289).to({
   _off: false
  }, 0).wait(91));
  this.instance_20 = new lib.bg_01();
  this.instance_20.parent = this;
  this.instance_20.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(380));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-248, 0, 802, 300);
 (lib.toyota_300x300 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(150, 150, 429, 177);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 300,
  height: 300,
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