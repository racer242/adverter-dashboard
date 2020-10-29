(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 620, 375);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 620, 375);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 620, 375);
 (lib.car = function() {
  this.initialize(img.car);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 803, 420);
 (lib.style = function() {
  this.initialize(img.style);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 264, 93);

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
  this.shape.setTransform(108.95, 111.4, 1.2502, 1.2502, 0, 0, 0, -0.2, 0.1);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(108.4, 112.55, 1.2502, 1.2502, 0, 0, 0, -0.3, 0.1);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(25, 74, 167.7, 76.80000000000001), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape.setTransform(217.825, 141.125);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAyAAQAYABANAMQAOAMABAUQgBAMgFALQgGAKgNAHQARADAJALQAKALAAARQAAAPgHALQgGALgNAGQgLAHgSAAgAgmBIIAnAAQASAAAKgJQAJgJAAgQQAAgPgJgIQgJgHgQgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAEgHQAFgIAAgJQAAgOgKgIQgJgIgRAAIgeAAg");
  this.shape_1.setTransform(203.15, 141.125);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgvBPQgVgLgMgVQgMgUAAgbQAAgaAMgUQAMgVAVgLQAWgMAZAAQAbAAAVAMQAUALAMAVQAMAUABAaQgBAagMAVQgMAVgUALQgVAMgbAAQgaAAgVgMgAglg/QgRAKgJAQQgKARAAAUQAAAVAKARQAJAQARAKQAQAJAVAAQAVAAAQgJQARgKAJgQQAKgRAAgVQAAgUgKgRQgJgQgRgKQgQgJgVgBQgVABgQAJg");
  this.shape_2.setTransform(184.75, 141.125);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AglBUQgPgHgJgLIAJgOQAGAFAHAGQAIAFAJADQAKADAMAAQAUAAAMgJQAMgKAAgRQAAgSgPgIQgPgIgfAAIAAgPQAVgBAMgEQAMgFAFgJQAEgHAAgIQAAgOgKgHQgKgIgRAAQgNABgMAEQgMAGgIAHIgIgOQAKgJANgGQAOgFARAAQAQgBANAGQAMAGAHAJQAGAKAAAOQAAAQgKALQgKALgQADQAUADAMALQALAKAAAUQAAAPgHAMQgHAMgOAGQgOAHgUABQgWgBgPgHg");
  this.shape_3.setTransform(166.975, 141.15);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgwBZIgNgEIAFgQQAEACAGABQAFACAGgBQALAAAHgGQAHgHAGgNIhFiIIATAAIA6B1IAzh1IATAAIg7CHQgGANgFAKQgFAKgJAFQgKAGgOAAIgOgBg");
  this.shape_4.setTransform(153.15, 141.25);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AArBZIhIhRIgRAAIAABRIgTAAIAAiwIATAAIAABQIAQAAIBChQIAXAAIhJBWIBQBag");
  this.shape_5.setTransform(139.3, 141.15);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhkAAIAABRIgSAAIAAixIASAAIAABQIBkAAIAAhQIATAAIAACxg");
  this.shape_6.setTransform(115.7, 141.125);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AA1BwIAAiUIhqCUIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxgAgbhZQgKgHgBgOIAOAAQABAJAHADQAGAEAKAAQALAAAGgEQAGgEABgIIAOAAQgBAOgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_7.setTransform(97.325, 138.85);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_8.setTransform(80.075, 141.125);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AglBUQgPgHgJgLIAJgOQAGAFAHAGQAIAFAJADQAKADAMAAQAUAAAMgJQAMgKAAgRQAAgSgPgIQgPgIgfAAIAAgPQAVgBAMgEQAMgFAFgJQAEgHAAgIQAAgOgKgHQgKgIgRAAQgNABgMAEQgMAGgIAHIgIgOQAKgJANgGQAOgFARAAQAQgBANAGQAMAGAHAJQAGAKAAAOQAAAQgKALQgKALgQADQAUADAMALQALAKAAAUQAAAPgHAMQgHAMgOAGQgOAHgUABQgWgBgPgHg");
  this.shape_9.setTransform(64.875, 141.15);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_10.setTransform(48.925, 141.125);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AA+BuIAAgqIh7AAIAAAqIgSAAIAAg7IAMAAQAEAAAFgFQAEgGADgJQAEgKABgMIANh2IBcAAIAACgIAUAAIAAA7gAgcAKQgBARgFALQgDAKgFADIBSAAIAAiPIg5AAg");
  this.shape_11.setTransform(31.2, 143.2);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AA1BvIAAiSIhqCSIgRAAIAAiwIASAAIAACTIBpiTIASAAIAACwgAgbhZQgKgHgBgPIAOAAQABAKAHADQAGAEAKgBQALABAGgEQAGgEABgJIAOAAQgBAPgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_12.setTransform(192.675, 109.2);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_13.setTransform(172.575, 111.475);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhjAAIAABRIgTAAIAAixIATAAIAABQIBjAAIAAhQIATAAIAACxg");
  this.shape_14.setTransform(152.7, 111.475);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_15.setTransform(137.5, 111.475);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgxBZIAAixIBgAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBPAAIAAARg");
  this.shape_16.setTransform(124.85, 111.475);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgeAAg");
  this.shape_17.setTransform(110.95, 111.475);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA9BtIAAgpIiKAAIAAixIASAAIAACgIBhAAIAAigIATAAIAACgIAVAAIAAA6g");
  this.shape_18.setTransform(94.825, 113.55);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAyBZIgyhLIgyBLIgVAAIA9hZIg7hYIAWAAIAvBJIAxhJIAUAAIg7BXIA+Bag");
  this.shape_19.setTransform(76.975, 111.475);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgwBZIgNgEIAEgRQAFADAFABQAGACAGAAQALAAAHgHQAHgGAGgNIhGiJIAVAAIA5B2IAzh2IAUAAIg9CIQgFANgGAJQgEAKgKAGQgJAFgOAAIgOgBg");
  this.shape_20.setTransform(61.75, 111.6);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgeAAg");
  this.shape_21.setTransform(47.5, 111.475);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AA+BtIAAgpIh7AAIAAApIgSAAIAAg6IAMAAQAEAAAFgGQAEgFADgJQAEgKABgNIANh1IBcAAIAACgIAUAAIAAA6gAgcAKQgBARgFAKQgDALgFADIBSAAIAAiOIg5AAg");
  this.shape_22.setTransform(31.2, 113.55);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AA1BwIAAiUIhqCUIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxgAgbhZQgKgHgBgOIAOAAQABAJAHADQAGADAKABQALgBAGgDQAGgEABgIIAOAAQgBAOgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_23.setTransform(227.175, 79.55);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_24.setTransform(207.075, 81.825);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhjAAIAABRIgTAAIAAixIATAAIAABQIBjAAIAAhQIATAAIAACxg");
  this.shape_25.setTransform(187.2, 81.825);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANABAXQAAAPgHAMQgFAMgOAGQgMAHgTAAgAgmBIIAlAAQATAAALgJQAKgJAAgRQgBgRgKgIQgLgJgSABIglAAg");
  this.shape_26.setTransform(171.55, 81.825);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("Ag/BYIgGgCIADgRIAFADIAHABQAHAAADgGQADgFABgMIAOiLIBgAAIAACxIgTAAIAAigIg9AAIgMCAQgBAQgIAJQgHAIgPABIgKgCg");
  this.shape_27.setTransform(154.375, 81.925);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgxBZIAAixIBgAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBPAAIAAARg");
  this.shape_28.setTransform(141.25, 81.825);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_29.setTransform(128, 81.825);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_30.setTransform(112.575, 81.825);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AglBUQgPgHgJgLIAJgOQAGAGAHAFQAIAFAJADQAKADAMAAQAUAAAMgJQAMgKAAgRQAAgSgPgIQgPgJgfABIAAgPQAVgBAMgFQAMgEAFgIQAEgIAAgIQAAgNgKgIQgKgIgRAAQgNABgMAEQgMAGgIAHIgIgPQAKgIANgGQAOgFARAAQAQgBANAGQAMAFAHAKQAGAKAAAOQAAAQgKALQgKALgQADQAUADAMALQALAKAAAUQAAAPgHAMQgHAMgOAGQgOAHgUAAQgWAAgPgHg");
  this.shape_31.setTransform(95.975, 81.85);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_32.setTransform(81.375, 81.825);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("Ag1BZIAAixIAwAAQATAAAOAHQAMAHAIAMQAHAMAAARQAAAPgHANQgIALgMAIQgOAIgTAAIgeAAIAABDgAgjAGIAdAAQALAAAJgFQAJgDAGgJQAGgJAAgNQAAgOgGgJQgGgIgJgEQgJgDgLAAIgdAAg");
  this.shape_33.setTransform(67.25, 81.825);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_34.setTransform(48.825, 81.825);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgeAAg");
  this.shape_35.setTransform(31.3, 81.825);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(21, 59.5, 228.8, 99), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhkAAIAABRIgSAAIAAixIASAAIAABQIBkAAIAAhQIATAAIAACxg");
  this.shape.setTransform(335.2, 142.325);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_1.setTransform(316.425, 142.325);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgqAIIAAgPIBVAAIAAAPg");
  this.shape_2.setTransform(301.525, 144.4);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AA+BtIAAgpIh7AAIAAApIgRAAIAAg6IALAAQAFAAAEgGQAEgFAEgKQADgJABgMIANh1IBcAAIAACfIAUAAIAAA6gAgcAKQgBARgEAKQgEALgFADIBSAAIAAiOIg4AAg");
  this.shape_3.setTransform(287.55, 144.4);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AA1BvIAAiSIhqCSIgRAAIAAiwIASAAIAACTIBpiTIASAAIAACwgAgbhZQgKgHgBgPIAOAAQABAKAHADQAGADAKAAQALAAAGgDQAGgEABgJIAOAAQgBAPgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_4.setTransform(270.075, 140.05);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgwBZIAAixIBfAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBQAAIAAARg");
  this.shape_5.setTransform(253.85, 142.325);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BZIAAixIAyAAQASAAANAHQANAHAIAMQAGAMAAARQAAAPgGANQgIALgNAIQgNAIgSAAIgfAAIAABDgAgjAGIAcAAQAMAAAJgFQAKgDAFgJQAGgJAAgNQAAgOgGgJQgFgIgKgEQgJgDgMAAIgcAAg");
  this.shape_6.setTransform(240.1, 142.325);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_7.setTransform(225.95, 142.325);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgvBPQgVgLgMgVQgMgUAAgbQAAgaAMgUQAMgVAVgLQAWgMAZAAQAbAAAVAMQAUALAMAVQAMAUABAaQgBAagMAVQgMAVgUALQgVAMgbAAQgaAAgVgMgAglg/QgRAKgJAQQgKARAAAUQAAAVAKARQAJAQARAKQAQAJAVAAQAVAAAQgJQARgKAJgQQAKgRAAgVQAAgUgKgRQgJgQgRgKQgQgJgVgBQgVABgQAJg");
  this.shape_8.setTransform(202.75, 142.325);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAxBZIAAigIhhAAIAACgIgTAAIAAixICHAAIAACxg");
  this.shape_9.setTransform(182.875, 142.325);
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
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(171.5, 120, 255.5, 39.69999999999999), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AA8BjIh2ikIAACkIgVAAIAAjGIAUAAIB2ClIAAilIAVAAIAADGg");
  this.shape.setTransform(215.825, 112.75);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgJBjIAAhPIhHh3IAXAAIA6BjIA6hjIAWAAIhHB3IAABPg");
  this.shape_1.setTransform(197.375, 112.75);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BjIAAjGIA4AAQAbABAPAOQAQANAAAYQAAAMgHAMQgFALgPAJQASADALAMQALANAAASQgBARgGANQgIAMgOAIQgOAGgSAAgAgqBRIArAAQAUAAALgLQAKgKABgRQgBgRgKgJQgKgIgSgBIguAAgAgqgJIAkAAQALAAAIgFQAJgFAEgJQAEgIABgKQAAgQgLgJQgLgIgSgBIghAAg");
  this.shape_2.setTransform(181.8, 112.75);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AheDUQgigggOg3QgNg3ABhFQgBhDANg4QAPg3AhghQAighA8gBQA9ABAiAhQAiAhAOA3QANA4gBBDQAABFgNA3QgOA3ghAgQgjAgg8ABQg8gBgigggAhDiqQgXAbgIAtQgIAuABA1QgBA3AIAsQAIAtAXAbQAXAaAsABQAtgBAYgbQAWgbAIgtQAHgtAAg1QABg2gJgtQgHgtgXgcQgXgbgtAAQgsAAgXAcg");
  this.shape_3.setTransform(150, 127.425);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AheDUQgigggOg3QgNg3ABhFQgBhDANg4QAPg3AhghQAighA8gBQA9ABAiAhQAiAhAOA3QANA4gBBDQAABFgNA3QgOA3ghAgQgjAgg8ABQg9gBghgggAhDiqQgXAbgIAtQgIAuABA1QgBA3AIAsQAIAtAXAbQAXAaAsABQAtgBAYgbQAWgbAIgtQAHgtAAg1QABg2gJgtQgIgtgWgcQgXgbgtAAQgsAAgXAcg");
  this.shape_4.setTransform(113, 127.425);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AhMDcQglgWgXguQgWgtgBhEQAAg5AQgzQAPgzAhgmQAigoA2gVQA0gXBNAAIALAqQhSAAgzAZQgyAZgbAsQgaArgHA6QAUgaAggRQAggRApgBQAqAAAhAUQAgATATAiQASAiABAtQgBAsgUAjQgUAjgjAWQgiAUgsABQgsAAgmgXgAgtgNQgYAKgRARQgSARgJAUQACAyAQAhQAQAhAbARQAaAPAfAAQAfAAAYgOQAZgPANgaQAOgZAAggQAAgigNgZQgNgZgYgNQgXgOgfgBQgcABgZALg");
  this.shape_5.setTransform(75.9742, 127.6);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AhFDsQgcgKgWgPQgUgQgOgSIAZgoQAWAcAeASQAeARApAAQAygBAegaQAegaAAgtQAAgigTgUQgRgWgfgLQgggJgogBIAAgoQApgBAagNQAbgOAMgVQANgUAAgYQAAgggXgTQgXgUgoAAQglABgcAPQgdARgWAVIgWgnQAOgPAVgNQAUgOAbgJQAagJAhAAQAnABAdAOQAeAOAQAZQARAZAAAiQAAAngXAdQgYAdgtAOQA4AOAcAfQAdAgAAAvQAAApgUAfQgUAggkATQgjARgwABQgjgBgdgIg");
  this.shape_6.setTransform(38.6, 127.45);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AguBPQgWgLgMgVQgMgUABgbQgBgaAMgUQAMgVAWgLQAUgMAaAAQAbAAAUAMQAVALAMAVQAMAUAAAaQAAAagMAVQgMAVgVALQgUAMgbAAQgaAAgUgMgAglg/QgRAKgJAQQgKARABAUQgBAVAKARQAJAQARAKQARAJAUAAQAVAAAQgJQARgKAJgQQAKgRAAgVQAAgUgKgRQgJgQgRgKQgQgJgVgBQgUABgRAJg");
  this.shape_7.setTransform(285.45, 82.325);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AA/BtIAAgpIh8AAIAAApIgRAAIAAg6IAKAAQAFAAAEgGQAFgFAEgJQACgKACgNIANh1IBcAAIAACgIAVAAIAAA6gAgcAKQgCARgDAKQgEALgFADIBSAAIAAiOIg4AAg");
  this.shape_8.setTransform(266.15, 84.4);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_9.setTransform(243.875, 82.325);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AA+BtIAAgpIh7AAIAAApIgRAAIAAg6IALAAQAEAAAFgGQAEgFAEgJQADgKABgNIANh1IBcAAIAACgIAUAAIAAA6gAgcAKQgBARgEAKQgEALgFADIBSAAIAAiOIg5AAg");
  this.shape_10.setTransform(227.15, 84.4);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgvBPQgUgLgMgVQgNgUAAgbQAAgaANgUQAMgVAUgLQAWgMAZAAQAaAAAWAMQAUALAMAVQAMAUABAaQgBAagMAVQgMAVgUALQgWAMgaAAQgaAAgVgMgAglg/QgQAKgKAQQgKARAAAUQAAAVAKARQAKAQAQAKQARAJAUAAQAWAAAQgJQAQgKAKgQQAJgRABgVQgBgUgJgRQgKgQgQgKQgQgJgWgBQgUABgRAJg");
  this.shape_11.setTransform(208.45, 82.325);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgwBZIAAixIBhAAIAAARIhPAAIAACgg");
  this.shape_12.setTransform(192.45, 82.325);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_13.setTransform(174.175, 82.325);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAyAAQAYABANAMQAOAMABAUQAAAMgGALQgGAKgNAHQARADAKALQAJALAAARQAAAPgHALQgGALgNAGQgLAHgSAAgAgmBIIAnAAQASAAAKgJQAJgJAAgQQAAgPgJgIQgJgHgQgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAEgHQAFgIAAgJQAAgOgKgIQgKgIgQAAIgeAAg");
  this.shape_14.setTransform(156.25, 82.325);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgxBZIAAixIBgAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBPAAIAAARg");
  this.shape_15.setTransform(135.3, 82.325);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BZIAAixIAxAAQATAAANAHQAOAHAGAMQAIAMgBARQABAPgIANQgGALgOAIQgNAIgTAAIgeAAIAABDgAgjAGIAcAAQALAAAKgFQAJgDAGgJQAGgJAAgNQAAgOgGgJQgGgIgJgEQgKgDgLAAIgcAAg");
  this.shape_16.setTransform(121.55, 82.325);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIBeAAIAAARIhLAAIAAA7IAnAAQAdAAAOANQAOANgBAXQAAAPgFAMQgHAMgNAGQgMAHgTAAgAgmBIIAlAAQATAAAKgJQALgJgBgRQABgRgLgIQgLgJgSABIglAAg");
  this.shape_17.setTransform(106.95, 82.325);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AArBZIAAhKIghAAIgDAAIgCgBIgsBLIgWAAIAxhOQgPgGgJgMQgIgNAAgRQAAgYAPgNQAPgNAZgBIAzAAIAACxgAgFhEQgJADgFAIQgGAIAAANQAAAMAFAIQAFAIAJAEQAHAEAKAAIAgAAIAAhHIgeAAQgKAAgIADg");
  this.shape_18.setTransform(90.225, 82.325);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgvBPQgVgLgMgVQgMgUABgbQgBgaAMgUQAMgVAVgLQAWgMAZAAQAbAAAVAMQAUALAMAVQAMAUABAaQgBAagMAVQgMAVgUALQgVAMgbAAQgaAAgVgMgAglg/QgRAKgJAQQgKARAAAUQAAAVAKARQAJAQARAKQAQAJAVAAQAVAAAQgJQARgKAJgQQAKgRAAgVQAAgUgKgRQgJgQgRgKQgQgJgVgBQgVABgQAJg");
  this.shape_19.setTransform(72.7, 82.325);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhkAAIAABRIgSAAIAAixIASAAIAABQIBkAAIAAhQIATAAIAACxg");
  this.shape_20.setTransform(52.7, 82.325);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAJALQAKALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAglBIIAlAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgpAAgAglgIIAgAAQAJAAAHgEQAIgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgdAAg");
  this.shape_21.setTransform(30.3, 82.325);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(17.5, 60, 408.5, 110.6), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(220, 8, 0.6156, 0.6152);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(220, 8, 162.5, 57.2), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAOBuIAAgsIheAAIAAgbIBgiUIAmAAIAACPIAbAAIAAAgIgbAAIAAAsgAgpAiIA3AAIAAhXg");
  this.shape.setTransform(223.7, 36.4);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgWBuIhQjbIAtAAIA5CqIA6iqIAtAAIhQDbg");
  this.shape_1.setTransform(205.1, 36.4);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AA8BuIgWg+IhNAAIgWA+IgrAAIBTjbIAsAAIBSDbgAAaAPIgahOIgbBOIA1AAg");
  this.shape_2.setTransform(184.55, 36.4);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAkBuIgzhWIgbAAIAABWIgqAAIAAjbIBNAAQAXAAAQAJQAQAHAJAPQAIAPAAATQAAAUgKAQQgLAQgUAJIA9BdgAgqgIIAdAAQAKAAAHgDQAIgEAFgIQAEgHABgMQgBgRgKgIQgKgHgOAAIgdAAg");
  this.shape_3.setTransform(165.175, 36.4);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AA8BuIgVg+IhPAAIgVA+IgqAAIBRjbIAtAAIBRDbgAAaAPIgahOIgcBOIA2AAg");
  this.shape_4.setTransform(137.25, 36.4);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgUBuIAAi2Ig6AAIAAglICdAAIAAAlIg6AAIAAC2g");
  this.shape_5.setTransform(118.375, 36.4);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BjQgagOgPgZQgPgagBgiQABghAPgZQAPgaAagOQAagOAgAAQAhAAAbAOQAaAOAOAaQAPAZABAhQgBAhgPAaQgOAZgaAPQgbAOghAAQggAAgagOgAgkg/QgQAKgKAQQgIARgBAUQABAWAIAQQAKARAQAJQAQAKAUAAQAVAAAQgKQARgJAIgRQAKgQAAgWQAAgUgKgRQgIgQgRgKQgQgJgVAAQgUAAgQAJg");
  this.shape_6.setTransform(97.35, 36.375);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgUBuIAAhWIhKiFIAuAAIAyBfIAzhfIAqAAIhLCGIAABVg");
  this.shape_7.setTransform(75.575, 36.4);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("Ag6BjQgagOgPgZQgPgagBgiQABghAPgZQAPgaAagOQAagOAgAAQAhAAAbAOQAaAOAOAaQAPAZAAAhQAAAhgPAaQgOAZgaAPQgbAOghAAQggAAgagOgAgkg/QgQAKgKAQQgIARgBAUQABAWAIAQQAKARAQAJQAQAKAUAAQAVAAAQgKQARgJAIgRQAKgQAAgWQAAgUgKgRQgIgQgRgKQgQgJgVAAQgUAAgQAJg");
  this.shape_8.setTransform(53.7, 36.375);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgUBuIAAi2Ig6AAIAAglICdAAIAAAlIg6AAIAAC2g");
  this.shape_9.setTransform(32.775, 36.4);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(22.3, 9.3, 212.39999999999998, 48.2), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
  this.shape.setTransform(202.725, 234.175);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAYIATgYIgTgXIAIAAIAUAXIgUAYgAgaAYIAUgYIgUgXIAKAAIASAXIgSAYg");
  this.shape_1.setTransform(198.525, 231.55);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAgfAeIAAg7IAIAAIAAAZIARAAQAIAAAGAEQAGAEAAAIQAAAGgCAEQgDAEgFACQgEACgFAAgAgXAXIARAAQAGAAADgCQACgEAAgFQAAgFgDgDQgCgCgIAAIgPAAg");
  this.shape_2.setTransform(191.7, 231.65);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAGgDQAGgDAGAAQAJAAAGAEQAHAEADAHQAFAHAAAJQAAAJgFAGQgDAHgHAEQgGAEgJAAIgIgBQgEgBgDgDQgEgDgDgFIAAAlgAgLgfQgEADgEAFQgCAFAAAHQAAAHACAEQAEAFAEADQAFAEAGAAQAGAAAGgDQAFgDACgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgGADg");
  this.shape_3.setTransform(184.3, 232.825);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_4.setTransform(177.35, 231.625);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAHQAAAFgDAEQgDADgEABQAHAAAEAEQAEAEAAAGQAAAGgDAEQgDADgFACQgFACgGAAgAgOAXIAPAAQAHAAAEgCQADgEAAgEQAAgGgEgCQgEgDgHAAIgOAAgAgOgDIANAAQAEgBADgBQADgCABgCIABgEQAAgFgDgDQgEgBgFAAIgNAAg");
  this.shape_5.setTransform(171.475, 231.65);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAIAEQAHAEADAHQAFAHAAAIQAAAJgFAHQgDAHgHAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_6.setTransform(164.85, 231.625);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAHgEAHAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAEADAGAAQAFAAAFgCIAJgFIADAIQgEADgGABQgFACgIAAQgHAAgGgEg");
  this.shape_7.setTransform(158.7, 231.625);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAHgEAIAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAFADAFAAQAGAAAEgCIAJgFIADAIQgEADgGABQgGACgHAAQgHAAgHgEg");
  this.shape_8.setTransform(153.1, 231.625);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_9.setTransform(146.75, 231.625);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAHgDAGAAQAIAAAGAEQAHAEADAHQAFAHAAAJQAAAJgFAGQgDAHgHAEQgGAEgJAAIgHgBQgFgBgDgDQgFgDgCgFIAAAlgAgLgfQgEADgEAFQgDAFAAAHQAAAHADAEQAEAFAEADQAGAEAFAAQAGAAAGgDQAEgDADgGQADgEAAgHQAAgHgCgFQgEgFgEgDQgFgDgGAAQgGAAgGADg");
  this.shape_10.setTransform(139.95, 232.825);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAOAeIgZgcIgDAAIAAAcIgJAAIAAg7IAJAAIAAAZIADAAIAYgZIAKAAIgbAcIAcAfg");
  this.shape_11.setTransform(133.9, 231.65);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAGAAAGgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgIAAgHgEgAAUgFQAAgFgEgEQgCgEgEgCQgEgDgFAAQgFAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_12.setTransform(125.1, 231.625);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAJAAIAAA7gAggAeIAAg7IAJAAIAAAZIAQAAQAJAAAHAEQAFAEAAAIQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAXIAQAAQAHAAACgCQADgEABgFQAAgFgEgDQgDgCgHAAIgPAAg");
  this.shape_13.setTransform(117.85, 231.65);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_14.setTransform(110.425, 231.65);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_15.setTransform(103.675, 232.525);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_16.setTransform(97, 231.625);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAHQAAAFgDAEQgDADgEABQAHAAAEAEQAEAEAAAGQAAAGgDAEQgDADgFACQgFACgGAAgAgOAXIAPAAQAHAAAEgCQADgEAAgEQAAgGgEgCQgEgDgHAAIgOAAgAgOgDIANAAQAEgBADgBQADgCABgCIABgEQAAgFgDgDQgEgBgFAAIgNAAg");
  this.shape_17.setTransform(90.875, 231.65);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAUAeIAAgwIgmAwIgJAAIAAg7IAJAAIAAAvIAmgvIAIAAIAAA7g");
  this.shape_18.setTransform(84.15, 231.65);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAHgDQAFgDAHAAQAIAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgDgDgDgFIAAAlgAgKgfQgGADgCAFQgEAFAAAHQAAAHAEAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgDgFQgCgFgFgDQgFgDgGAAQgGAAgFADg");
  this.shape_19.setTransform(77.25, 232.825);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_20.setTransform(70.025, 231.65);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAHgEAIAAQAJAAAIAEQAGAEAFAHQADAHAAAIQAAAJgDAHQgFAHgGAEQgIAEgJAAQgIAAgHgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_21.setTransform(63.2, 231.625);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_22.setTransform(56.375, 231.65);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgaAeIgEgBIACgIIADABIACAAQAEAAACgCQABgDABgFIAFgpIApAAIAAA6IgJAAIAAg0IgZAAIgEAmQAAAIgFAEQgDADgHAAIgEAAg");
  this.shape_23.setTransform(49.15, 231.7);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_24.setTransform(42.85, 231.625);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_25.setTransform(36.025, 231.65);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_26.setTransform(280.1, 219.525);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAJAAIAAA7gAgfAeIAAg7IAIAAIAAAZIAQAAQAKAAAFAEQAGADAAAJQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAYIAQAAQAHgBACgDQAEgDAAgFQgBgFgDgDQgDgCgHgBIgPAAg");
  this.shape_27.setTransform(272.85, 219.55);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_28.setTransform(265.425, 219.55);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFgBAHQABAHADAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgGAAQgGAAgFADg");
  this.shape_29.setTransform(258.7, 220.725);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_30.setTransform(251.75, 219.525);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAaAeIAAguIgXAlIgFAAIgXglIAAAuIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_31.setTransform(244.375, 219.55);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgPAdQgGgCgDgCIACgIQADADAGACQAGACAHAAQAHAAAEgDQAFgCAAgGQAAgDgCgCQgDgDgFgBIgOgBIAAgGQALAAAFgDQAFgDAAgFQAAgEgDgCQgEgDgGAAQgFAAgEACIgJAEIgCgIIAKgEQAFgBAFAAQAKAAAGAEQAGAEAAAHQAAAGgEAEQgEAEgHABIAJABQAEACADADQACADAAAFQAAAGgDAEQgEAEgFABQgGACgHAAQgIAAgHgCg");
  this.shape_32.setTransform(237.275, 219.525);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_33.setTransform(231.325, 219.525);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFgBAHQABAHADAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgGAAQgGAAgFADg");
  this.shape_34.setTransform(224.95, 220.725);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_35.setTransform(218, 219.525);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_36.setTransform(211.425, 219.55);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_37.setTransform(204.675, 220.425);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_38.setTransform(198.35, 219.525);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAGgDAHAAQAIAAAGAEQAHAEAEAHQADAHAAAJQAAAJgDAGQgEAHgHAEQgGAEgJAAIgHgBQgFgBgDgDQgEgDgDgFIAAAlgAgLgfQgEADgEAFQgDAFAAAHQAAAHADAEQAEAFAEADQAGAEAFAAQAHAAAFgDQAEgDADgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgGAAQgGAAgGADg");
  this.shape_39.setTransform(191.8, 220.725);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgHgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQAJAAAGADQAIACAGAFIgDAIQgGgEgGgDQgHgCgHAAQgJAAgIAFQgIAEgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgIACgIAAQgMAAgKgGg");
  this.shape_40.setTransform(184, 218.275);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIAKAAIgUAXIAUAYgAgGAYIgUgYIAUgXIAIAAIgTAXIATAYg");
  this.shape_41.setTransform(177.025, 219.45);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAUAeIAAgvIgmAvIgJAAIAAg7IAJAAIAAAvIAmgvIAHAAIAAA7g");
  this.shape_42.setTransform(168.2, 219.55);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAUAeIAAgvIgmAvIgJAAIAAg7IAJAAIAAAvIAmgvIAIAAIAAA7g");
  this.shape_43.setTransform(161.1, 219.55);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AAXAnIAAgSIg0AAIAAg7IAIAAIAAA0IAiAAIAAg0IAIAAIAAA0IAKAAIAAAZg");
  this.shape_44.setTransform(154.5, 220.425);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_45.setTransform(147.375, 219.525);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_46.setTransform(140.975, 219.55);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AATAeIAAgvIglAvIgIAAIAAg7IAIAAIAAAvIAlgvIAJAAIAAA7g");
  this.shape_47.setTransform(134.05, 219.55);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAaAeIAAguIgXAlIgFAAIgXglIAAAuIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_48.setTransform(126.325, 219.55);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgFgHQgDgHAAgJQAAgIADgHQAFgHAHgEQAGgEAJAAQAKAAAGAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_49.setTransform(118.7, 219.525);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_50.setTransform(111.875, 219.55);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAFAAAGQAAAGgDADQgDAEgFACQgFACgGAAgAgOAYIAPAAQAHgBAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgBABgDIABgFQAAgEgDgCQgEgDgFAAIgNAAg");
  this.shape_51.setTransform(103.325, 219.55);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAIAAIAAAZIAQAAQAKAAAGAEQAFADAAAJQAAAGgCAEQgDAEgFACQgEACgGAAgAgOAYIAQAAQAGgBAEgDQADgDAAgFQAAgFgEgDQgDgCgIgBIgOAAg");
  this.shape_52.setTransform(95.075, 219.55);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgbAeIgDgBIACgIIACABIAEAAQADAAABgCQACgCABgGIAFgqIApAAIAAA8IgJAAIAAg0IgYAAIgFAkQgBAJgEADQgDAFgGAAIgGgBg");
  this.shape_53.setTransform(88.1, 219.6);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_54.setTransform(82.15, 219.525);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_55.setTransform(76.525, 219.55);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AAUAeIAAgvIgmAvIgJAAIAAg7IAJAAIAAAvIAmgvIAHAAIAAA7g");
  this.shape_56.setTransform(70.55, 219.55);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_57.setTransform(63.625, 220.425);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgJAAgGgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_58.setTransform(57.3, 219.525);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgLAsQgFgCgFgFQgEgFgDgJQgCgJAAgOQAAgMADgJQADgJAHgFQAHgFAMgCIAEgBIADAAIAHgBIAFgBIAEAAIABAHIgIABIgHABIgEABIgDAAQgHABgGADQgGADgDAHQgDAHgBAMQAEgGAGgDQAHgEAHAAQAJAAAGAEQAHAEADAHQAEAGAAAJQAAAJgEAHQgDAHgHAEQgHAEgKAAIgBAAQgFAAgFgCgAgIgFIgIAFQgEADgCAEQABAMADAHQADAHAFADQAFADAFAAQAHAAAFgDQAFgDADgGQADgFAAgHQAAgHgDgFQgDgEgFgDQgEgDgHAAQgEAAgFACg");
  this.shape_59.setTransform(50.675, 218.0292);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_60.setTransform(43.7, 219.525);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAYArIAAhNIgvAAIAABNIgJAAIAAhVIBBAAIAABVg");
  this.shape_61.setTransform(36.05, 218.3);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgHIAPAGIgBgQIAHAAIgCAQIAQgGIACAHIgPADIAKAMIgHAFg");
  this.shape_62.setTransform(29.75, 215.95);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(25.4, 206.6, 487.6, 33.20000000000002), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgYAcIgDgBIACgIIACABIACABQAEAAABgCQACgDAAgFIAFgmIAlAAIAAA2IgIAAIAAgwIgWAAIgEAiQgBAIgDADQgEAEgFAAIgFAAg");
  this.shape.setTransform(62.425, 230.95);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AARAoIAAgrIgiArIgHAAIAAg2IAHAAIAAArIAigrIAIAAIAAA2gAgLgcQgEgEgBgHIAGAAQAAAFADADQADACAEAAQAFgBACgCQADgCAAgFIAGAAQAAAHgFAEQgDAEgIAAQgHAAgEgEg");
  this.shape_1.setTransform(56.4, 229.65);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYQgFgEgBgIQAAgGAEgEQAEgCAJgCQAHgCAPAAIAAgCQAAgGgEgFQgEgEgIAAIgHABIgGADIgEADIgCgHQADgDAGgCIALgCQALAAAGAGQAFAFABALIAAAiIgIAAIAAgKQgCAFgGADQgGADgGAAQgJAAgEgFgAgCACQgHABgDADQgCACgBAEQAAAFAEADQADACAGAAQADABAFgCQAEgCACgDQAEgEAAgGIAAgGIgSACg");
  this.shape_2.setTransform(49.9, 230.875);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAbIAAgvIgSAAIAAgHIArAAIAAAHIgSAAIAAAvg");
  this.shape_3.setTransform(44.675, 230.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgOAjQgJgGgFgIQgFgKAAgLQAAgLAFgJQAGgJAJgFQAJgFAKAAQAIAAAHACQAGACAGAFIgDAIQgFgFgGgCQgGgCgHAAQgIgBgHAFQgHAEgEAHQgEAIgBAIQABAJAEAHQAEAIAHAEQAHAEAIAAQAIAAAGgCIALgGIADAHQgGAFgHACQgHACgIAAQgKAAgKgFg");
  this.shape_4.setTransform(38.675, 229.75);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAFIgHAMIgFgEIAJgLIgOgDIACgHIAOAGIgCgPIAGAAIgBAPIAOgGIACAHIgOADIAKALIgGAEg");
  this.shape_5.setTransform(30.2, 227.6);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(26, 217.7, 44.599999999999994, 21.100000000000023), null);
 (lib.red_line = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0022").s().p("EggOAAdIAAg5MBAdAAAIAAA5g");
  this.shape.setTransform(204.75, 2.425);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.red_line, new cjs.Rectangle(-1.5, -0.5, 412.5, 5.9), null);
 (lib.logo_s = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiNBcQg7gmAAg2QAAg1A7gmQA6gmBTAAQBUAAA6AmQA7AmAAA1QAAA2g7AmQg6AmhUAAQhTAAg6gmgACVg9QAAAagrATQgZALgfAFIAAAEQAAAxgPAhQgJAVgKAIQA7gEAugeQAZgRANgWQAOgWAAgYQAAgYgNgVQgEgIgHgHIAAADgAifgxQgNAVAAAYQAAAYAOAWQANAWAZARQAZAQAeAKQAYAGAaACQgLgIgIgVQgPghAAgxIAAgEQgegFgagLQgrgTAAgaIAAgCIgLAOgAgVAzQAJAXAMgBQANABAJgXQAIgVABgdQgPACgQgBQgPABgPgCQABAdAIAVgAgVg6QgFANgCAOIAcACIAdgCQgCgOgFgNQgJgWgNAAQgMAAgJAWgAAjhMQAIATAEAYQATgDAQgGQAigMAAgRQAAgRgigMQgNgEgPgDIgNgCIgmgDIgDAAIgDAAIgtAEIgJABIgYAHQgiAMAAARQAAARAiAMQAQAHATACQADgYAJgTQAOgiAUAAQAVAAAOAig");
  this.shape.setTransform(20.125, 13);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.logo_s, new cjs.Rectangle(0, 0, 40.3, 26), null);
 (lib.legal_01_d1 = function() {
  this.initialize(img.legal_01_d1);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 804, 120);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(34, 24, 0.5, 0.5);
  this.initialize(mode, startPosition, loop, {
   cvr_frame01: 81
  });
  this.frame_start = function() {
   globalStop(false);
   this.gotoAndPlay(1);
  }
  this.frame_finish = function() {
   globalStop(true)
   this.stop()
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_start).wait(162).call(this.frame_finish).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).to({
   alpha: 0
  }, 0).to({
   alpha: 1
  }, 6).wait(150).to({
   alpha: 0
  }, 6).to({
   y: -126
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(438, 99, 8.08, 1.5);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(32, 22, 808, 153.6), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.6635, 0.6635);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(0, 0, 532.8, 278.7), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EhLxAPoIAA/PMCXjAAAIAAfPg");
  this.shape.setTransform(485, 100);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 970, 200), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(40, 0, 413.4, 250), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(40, 0, 413.4, 250), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(40, 0, 413.4, 250), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EhLxAPoIAA/PMCXjAAAIAAfPg");
  this.shape.setTransform(485, 100);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 970, 200), null);
 (lib.arrow1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], -0.1, 204, -0.1, -194.3).s().p("AByeTQHIqJgjpHQggojnTnwQknk6hznFQhGkUAHkHIjSAAIEsksIEsEsIjUAAQgGDqA+D6QBnGiEKEbQDtD8B8EzQB6EwgBFCQgCFHiDExQiJFAkIEHg");
  this.shape.setTransform(64.8009, 194.25);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], -0.1, 204, -0.1, -194.3).s().p("ABzeTQHGqJgipHQggojnTnwQknk6hznFQhGkUAHkHIjSAAIEtksIEsEsIjVAAQgGDqA+D6QBnGiEJEbQDuD8B8EzQB7EwgCFCQgDFHiCExQiJFAkHEHg");
  this.shape_1.setTransform(190.1016, 194.25);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], -0.1, 204, -0.1, -194.3).s().p("AByeTQHIqJgjpHQggojnTnwQknk6hznFQhHkUAIkHIjSAAIEsksIEsEsIjUAAQgGDqA+D6QBnGiEKEbQDtD8B8EzQB6EwgBFCQgDFHiCExQiJFAkIEHg");
  this.shape_2.setTransform(323.2509, 194.25);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.arrow1, new cjs.Rectangle(0, 0, 388.1, 388.5), null);
 (lib.txt05 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t05();
  this.instance.parent = this;
  this.instance.setTransform(110.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 108.8,
   regY: 112.4,
   x: 126,
   y: 112.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 123.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 121.1,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 119,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 117.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 115.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 113.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 112.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 110.4,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.7,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 109.2,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 108.9,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(25, 74, 187.7, 76.80000000000001);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AzgHZIAAk2MAnBAAAIAAE2g");
  mask.setTransform(124.8684, 47.3491);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 128.8,
   regY: 111.3,
   x: 111.6,
   y: 111.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 114.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 122.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 125.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 126.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 127.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 128.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.7,
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
  mask_1.graphics.p("AzgJ1IAAk3MAnBAAAIAAE3g");
  mask_1.setTransform(124.8684, 62.8741);
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
   regX: 128.8,
   regY: 111.3,
   x: 111.6,
   y: 111.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 114.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 122.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 125.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 126.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 127.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 128.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.7,
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
  mask_2.graphics.p("AzgMQIAAk3MAnBAAAIAAE3g");
  mask_2.setTransform(124.8684, 78.3991);
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
   regX: 128.8,
   regY: 111.3,
   x: 111.6,
   y: 111.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 114.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 122.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 125.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 126.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 127.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 128.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(1, 63.6, 248.8, 93.20000000000002);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A3gHqIAAkqMAvBAAAIAAEqg");
  mask.setTransform(150.4948, 48.9773);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 158.9,
   regY: 112.6,
   x: 141.7,
   y: 112.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 144.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 146.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 148.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 150.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 152.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 153.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 155.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 156.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 157.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 158,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 158.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 158.8,
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
  mask_1.graphics.p("A3gMYIAApjMAvBAAAIAAJjg");
  mask_1.setTransform(150.4948, 79.1546);
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
   regX: 158.9,
   regY: 112.6,
   x: 141.7,
   y: 112.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 144.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 146.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 148.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 150.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 152.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 153.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 155.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 156.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 157.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 158,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 158.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 158.8,
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
  mask_2.graphics.p("AhlM7IAAowIdXAAIAAIwg");
  mask_2.setTransform(177.7581, 82.7106);
  this.instance_2 = new lib.t02a();
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
   regX: 259.1,
   regY: 142.1,
   x: 241.9,
   y: 142.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 244.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 246.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 248.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 250.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 252.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 254.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 255.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 256.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 257.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 258.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 258.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 259,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 68.2, 355.5, 91.49999999999999);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A5vEtIAAmyMA27AAAIAAGyg");
  mask.setTransform(186.824, 30.1363);
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
   regX: 301.3,
   regY: 36.6,
   x: 284.1,
   y: 36.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 286.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 289,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 291.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 293.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 294.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 296.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 297.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 298.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 299.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 300.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 300.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 301.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 373.7, 60.3);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AyUENIAAoPMAkpAAAIAAIPg");
  mask.setTransform(117.3477, 26.8535);
  this.instance = new lib.t01();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 128.3,
   regY: 36.4,
   x: 111.1,
   y: 36.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 113.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 121.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 124.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 125.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 126.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 127.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(16));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(2.3, 9.3, 232.39999999999998, 44.400000000000006);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(57.2296, 109.5904, 1.2158, 1.2158);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(57.2649, 109.5649, 1.216, 1.216);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(57.6, 110.1, 1.2164, 1.2164, 0, 0, 0, 22.6, 23.2);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(57.6, 110.1, 1.2164, 1.2164, 0, 0, 0, 22.6, 23.2);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(57.2345, 109.5953, 1.216, 1.216);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgJBHIAAh7IgnAAIAAgSIBhAAIAAASIgnAAIAAB7g");
  this.shape_3.setTransform(218.3, 131.2);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIArAAQAQAAAKAGQALAFAFALQAGAKAAAMQAAANgGAKQgFAKgLAGQgKAGgQAAIgWAAIAAA0gAgYADIATAAQAIAAAHgDQAHgEAEgGQADgHAAgJQAAgJgDgGQgEgHgHgCQgHgDgIAAIgTAAg");
  this.shape_4.setTransform(207.55, 131.2);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AglA/QgRgIgKgRQgJgRAAgVQAAgVAJgQQAKgRARgJQAQgJAVAAQAVAAARAJQAQAJALARQAJAQAAAVQAAAVgJAQQgLARgQAJQgRAKgVAAQgVAAgQgKgAgbguQgMAIgGALQgHANAAAOQAAAPAHAMQAGANAMAGQANAIAOgBQAQABALgIQANgGAGgNQAHgMAAgPQAAgOgHgNQgGgLgNgIQgLgGgQgBQgOABgNAGg");
  this.shape_5.setTransform(192.5, 131.2);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgIBKIAAgPQgVgCgPgHQgPgHgJgNQgIgNAAgRQAAgQAIgNQAJgMAPgIQAPgHAVgBIAAgQIASAAIAAAQQAUABAPAIQAPAGAIAOQAJAMAAAQQAAARgJANQgIAMgPAIQgPAHgUACIAAAPgAAKAqQAVgCANgMQAMgKAAgSQAAgRgMgLQgNgLgVgBgAgrgcQgMALAAARQAAASAMAKQAMAMAXACIAAhSQgXABgMALg");
  this.shape_6.setTransform(175.35, 131.2);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAxBHIAAhxIgqBBIgOAAIgphBIAABxIgUAAIAAiNIAaAAIAqBGIAshGIAZAAIAACNg");
  this.shape_7.setTransform(157.95, 131.2);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AglA/QgRgIgJgRQgKgRAAgVQAAgVAKgQQAJgRARgJQARgJAUAAQAWAAAQAJQARAJAKARQAJAQAAAVQAAAVgJAQQgKARgRAJQgQAKgWAAQgUAAgRgKgAgaguQgMAIgHALQgHANAAAOQAAAPAHAMQAHANAMAGQAMAIAOgBQAPABANgIQAMgGAGgNQAHgMAAgPQAAgOgHgNQgGgLgMgIQgNgGgPgBQgOABgMAGg");
  this.shape_8.setTransform(140.6, 131.2);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAfBHIg0g/IgOAAIAAA/IgUAAIAAiNIAUAAIAAA/IAMAAIAyg/IAXAAIg3BEIA9BJg");
  this.shape_9.setTransform(126.375, 131.2);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAnBaIAAhuIhNBuIgUAAIAAiNIAUAAIAABuIBNhuIAUAAIAACNgAgXhGQgIgHgBgMIAOAAQABAHAFADQAFACAHAAQAIAAAFgCQAFgDABgHIANAAQAAAMgJAHQgIAFgPABQgPgBgIgFg");
  this.shape_10.setTransform(202.275, 111.7);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAnBHIAAhuIhNBuIgUAAIAAiNIAUAAIAABuIBNhuIAUAAIAACNg");
  this.shape_11.setTransform(186.725, 113.6);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAkBHIAAg+IhIAAIAAA+IgUAAIAAiNIAUAAIAAA+IBIAAIAAg+IAVAAIAACNg");
  this.shape_12.setTransform(171.35, 113.6);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAxBHIAAhxIgqBBIgOAAIgphBIAABxIgUAAIAAiNIAZAAIArBGIAshGIAZAAIAACNg");
  this.shape_13.setTransform(154.95, 113.6);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAnBHIAAhuIhNBuIgUAAIAAiNIAUAAIAABuIBNhuIAUAAIAACNg");
  this.shape_14.setTransform(138.375, 113.6);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgeBDQgNgFgHgHIAKgRQAGAHAKAFQAJAFAOAAQAPAAAIgHQAIgGABgMQAAgNgLgFQgMgGgWgBIAAgPQAPAAAJgEQAJgEADgFQAEgFgBgGQABgJgIgGQgGgFgMAAQgLAAgJAEQgJAEgHAFIgIgQQAIgGAMgFQAKgEAPAAQAVAAAMAKQAMAJAAARQAAANgIAIQgHAJgNACQAPADAJAIQAKAJgBAPQABAMgHAKQgGAJgMAGQgLAFgQAAQgSAAgMgGg");
  this.shape_15.setTransform(124.55, 113.6);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAyBcIgSg0IhBAAIgSA0IgkAAIBFi3IAlAAIBFC3gAAWAMIgWhBIgXBBIAtAAg");
  this.shape_16.setTransform(211.925, 87.875);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgQBcIAAiZIgyAAIAAgeICEAAIAAAeIgwAAIAACZg");
  this.shape_17.setTransform(196.5, 87.875);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgxBTQgVgMgNgVQgNgVAAgdQAAgbANgWQAMgVAWgMQAWgLAbgBQAcABAWALQAWAMAMAVQANAVAAAcQAAAcgNAVQgMAWgWAMQgWAMgcAAQgbAAgWgMgAgeg0QgOAHgHAOQgIAOAAARQAAASAIAOQAHAOAOAIQANAIARAAQASAAANgIQAOgIAHgOQAIgOAAgSQAAgRgIgOQgHgOgOgHQgNgJgSABQgRgBgNAJg");
  this.shape_18.setTransform(179.275, 87.85);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgRBcIAAhIIg+hvIAnAAIApBPIAshPIAjAAIg/BwIAABHg");
  this.shape_19.setTransform(161.35, 87.875);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgxBTQgVgMgNgVQgNgVAAgdQAAgbANgWQAMgVAWgMQAWgLAbgBQAcABAWALQAWAMAMAVQANAVAAAcQAAAcgNAVQgMAWgWAMQgWAMgcAAQgbAAgWgMgAgeg0QgOAHgHAOQgIAOAAARQAAASAIAOQAHAOAOAIQANAIARAAQASAAANgIQAOgIAHgOQAIgOAAgSQAAgRgIgOQgHgOgOgHQgNgJgSABQgRgBgNAJg");
  this.shape_20.setTransform(143.425, 87.85);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgRBcIAAiZIgwAAIAAgeICEAAIAAAeIgxAAIAACZg");
  this.shape_21.setTransform(126.25, 87.875);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAk+IAAJ9");
  this.shape_22.setTransform(105.95, 108.775);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(25, 64.8, 200.9, 80.7), null);
 (lib.right = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(891.65, 14.7, 1.2671, 1.2654);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#00CC00").s().p("AgxAyIAAhjIBjAAIAABjg");
  this.shape.setTransform(45, -15);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(40, -20, 902.7, 67.6), null);
 (lib.fade = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(345).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 970, 200);
 (lib.background = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.instance.setTransform(485, 125, 1, 1, 0, 0, 0, 485, 125);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0, 0, 970, 200), null);
 (lib.arrow = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EClIBUQIAAiKMBEEAAAIAACKg");
  var mask_graphics_1 = new cjs.Graphics().p("EClIBUPIAAlEMBEEAAAIAAFEg");
  var mask_graphics_2 = new cjs.Graphics().p("EClIBUPIAAn/MBEEAAAIAAH/g");
  var mask_graphics_3 = new cjs.Graphics().p("EClIBUPIAAq5MBEEAAAIAAK5g");
  var mask_graphics_4 = new cjs.Graphics().p("EClIBUPIAAt0MBEEAAAIAAN0g");
  var mask_graphics_5 = new cjs.Graphics().p("EClIBUPIAAwvMBEEAAAIAAQvg");
  var mask_graphics_6 = new cjs.Graphics().p("EClIBUPIAAzpMBEEAAAIAATpg");
  var mask_graphics_7 = new cjs.Graphics().p("EClIBUOIAA2jMBEEAAAIAAWjg");
  var mask_graphics_8 = new cjs.Graphics().p("EClIBUOIAA5eMBEEAAAIAAZeg");
  var mask_graphics_9 = new cjs.Graphics().p("EClIBUOIAA8ZMBEEAAAIAAcZg");
  var mask_graphics_10 = new cjs.Graphics().p("EClIBUOIAA/TMBEEAAAIAAfTg");
  var mask_graphics_11 = new cjs.Graphics().p("EClIBUOMAAAgiOMBEEAAAMAAAAiOg");
  var mask_graphics_12 = new cjs.Graphics().p("EClIBUNMAAAglIMBEEAAAMAAAAlIg");
  var mask_graphics_13 = new cjs.Graphics().p("EClIBUNMAAAgoDMBEEAAAMAAAAoDg");
  var mask_graphics_14 = new cjs.Graphics().p("EClIBUNMAAAgq9MBEEAAAMAAAAq9g");
  var mask_graphics_15 = new cjs.Graphics().p("EClIBUNMAAAgt4MBEEAAAMAAAAt4g");
  var mask_graphics_16 = new cjs.Graphics().p("EClIBUNMAAAgwzMBEEAAAMAAAAwzg");
  var mask_graphics_17 = new cjs.Graphics().p("EClIBUMMAAAgzsMBEEAAAMAAAAzsg");
  var mask_graphics_18 = new cjs.Graphics().p("EClIBUMMAAAg2nMBEEAAAMAAAA2ng");
  var mask_graphics_19 = new cjs.Graphics().p("EClIBUMMAAAg5iMBEEAAAMAAAA5ig");
  var mask_graphics_20 = new cjs.Graphics().p("EClIBUMMAAAg8dMBEEAAAMAAAA8dg");
  var mask_graphics_21 = new cjs.Graphics().p("EClIBUOMAAAg/XMBEEAAAMAAAA/Xg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 1492.423,
   y: 539.1674
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 1492.423,
   y: 539.1484
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 1492.423,
   y: 539.1294
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 1492.423,
   y: 539.1105
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 1492.423,
   y: 539.0915
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 1492.423,
   y: 539.0725
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 1492.423,
   y: 539.0535
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 1492.423,
   y: 539.0345
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 1492.423,
   y: 539.0156
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 1492.423,
   y: 538.9966
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 1492.423,
   y: 538.9776
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 1492.423,
   y: 538.9586
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 1492.423,
   y: 538.9397
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 1492.423,
   y: 538.9207
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 1492.423,
   y: 538.9017
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 1492.423,
   y: 538.8827
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 1492.423,
   y: 538.8637
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 1492.423,
   y: 538.8448
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 1492.423,
   y: 538.8258
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 1492.423,
   y: 538.8068
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 1492.423,
   y: 538.7878
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 1492.423,
   y: 538.9716
  }).wait(1));
  this.instance = new lib.arrow1();
  this.instance.parent = this;
  this.instance.setTransform(2689.45, 806.2, 1, 1, 0, 0, 0, 123.9, 124);
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(2565.6, 682.2, 388, 388.5);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t04();
  this.instance.parent = this;
  this.instance.setTransform(21, 99.7, 1, 1, 0, 0, 0, 41, 99.7);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 124.1,
   regY: 109.4,
   x: 106.9,
   y: 109.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 109.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 111.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 113.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 115.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 117.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 119.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 120.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 121.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 122.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 123.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 123.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 124,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(5, 64.8, 220.9, 80.7);
 (lib.left = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1_4: 69,
   cvr_frame2_1: 149,
   cvr_frame3_1: 273,
   "cvr_frame#4_1": 344,
   cvr_stay: 355
  });
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0000").s().p("AgxAyIAAhjIBjAAIAABjg");
  this.shape.setTransform(5, -15);
  this.timeline.addTween(cjs.Tween.get(this.shape).to({
   _off: true
  }, 1).wait(379));
  this.instance = new lib.legal_01();
  this.instance.parent = this;
  this.instance.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  this.instance._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(375).to({
   _off: false
  }, 0).to({
   _off: true
  }, 1).wait(4));
  this.instance_1 = new lib.snoska3("synched", 0, false);
  this.instance_1.parent = this;
  this.instance_1.setTransform(0, -50);
  this.instance_1.alpha = 0;
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 70).wait(6));
  this.instance_2 = new lib.snoska2("synched", 0, false);
  this.instance_2.parent = this;
  this.instance_2.setTransform(0, -50);
  this.instance_2.alpha = 0;
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(205).to({
   startPosition: 0
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(6));
  this.instance_3 = new lib.txt05("synched", 0, false);
  this.instance_3.parent = this;
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({
   _off: false
  }, 0).to({
   _off: true
  }, 85).wait(6));
  this.instance_4 = new lib.txt04("synched", 0, false);
  this.instance_4.parent = this;
  this.instance_4._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({
   _off: false
  }, 0).wait(65).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(6));
  this.instance_5 = new lib.txt03("synched", 0, false);
  this.instance_5.parent = this;
  this.instance_5._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(170));
  this.instance_6 = new lib.txt02("synched", 0, false);
  this.instance_6.parent = this;
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({
   _off: false
  }, 0).wait(80).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_7 = new lib.txt01_1("synched", 0, false);
  this.instance_7.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(274).to({
   startPosition: 29
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_8 = new lib.txt01("synched", 0, false);
  this.instance_8.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_8).to({
   _off: true
  }, 374).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -20, 840, 209.8);
 (lib.center = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0000FF").s().p("AgxAyIAAhjIBjAAIAABjg");
  this.shape.setTransform(25, -15);
  this.timeline.addTween(cjs.Tween.get(this.shape).to({
   _off: true
  }, 1).wait(379));
  this.instance = new lib.arrow("synched", 0, false);
  this.instance.parent = this;
  this.instance.setTransform(121.95, 23.35, 0.1837, 0.1835, 0, 0, 0, 47.1, 127.2);
  this.instance._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({
   _off: false
  }, 0).wait(48).to({
   mode: "single",
   startPosition: 21
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_1 = new lib.red_line();
  this.instance_1.parent = this;
  this.instance_1.setTransform(371.45, 197, 0.0325, 1, 0, 0, 180, 100, 1.5);
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({
   _off: false
  }, 0).to({
   scaleX: 0.3308,
   x: 464.2
  }, 30, cjs.Ease.get(1)).to({
   _off: true
  }, 315).wait(6));
  this.instance_2 = new lib.red_line();
  this.instance_2.parent = this;
  this.instance_2.setTransform(768.9, 1.6, 0.0388, 1, 0, 0, 0, 100.5, 1.6);
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({
   _off: false
  }, 0).to({
   regX: 100.1,
   regY: 1.5,
   scaleX: 0.8048,
   x: 531.55,
   y: 1.5
  }, 30, cjs.Ease.get(1)).to({
   _off: true
  }, 315).wait(6));
  this.instance_3 = new lib.car_1();
  this.instance_3.parent = this;
  this.instance_3.setTransform(476.25, 73.85, 0.7177, 0.7177, 0, 0, 0, 120.2, 75);
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(169).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 70).wait(6));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EAjLAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_1 = new cjs.Graphics().p("EAjHAPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_2 = new cjs.Graphics().p("EAi6APoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_3 = new cjs.Graphics().p("EAilAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_4 = new cjs.Graphics().p("EAiHAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_5 = new cjs.Graphics().p("EAhhAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_6 = new cjs.Graphics().p("EAgzAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_7 = new cjs.Graphics().p("Af8PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_8 = new cjs.Graphics().p("Ae8PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_9 = new cjs.Graphics().p("Ad0PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_10 = new cjs.Graphics().p("AckPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_11 = new cjs.Graphics().p("AbLPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_12 = new cjs.Graphics().p("AZqPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_13 = new cjs.Graphics().p("AYAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_14 = new cjs.Graphics().p("AWOPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_15 = new cjs.Graphics().p("AUkPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_16 = new cjs.Graphics().p("ATAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_17 = new cjs.Graphics().p("ARkPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_18 = new cjs.Graphics().p("AQQPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_19 = new cjs.Graphics().p("APDPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_20 = new cjs.Graphics().p("AN9PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_21 = new cjs.Graphics().p("AM+PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_22 = new cjs.Graphics().p("AMHPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_23 = new cjs.Graphics().p("ALXPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_24 = new cjs.Graphics().p("AKvPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_25 = new cjs.Graphics().p("AKOPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_26 = new cjs.Graphics().p("AJ0PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_27 = new cjs.Graphics().p("AJiPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_28 = new cjs.Graphics().p("AJXPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_29 = new cjs.Graphics().p("AJTPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_119 = new cjs.Graphics().p("EAjLAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_120 = new cjs.Graphics().p("EAjHAPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_121 = new cjs.Graphics().p("EAi6APoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_122 = new cjs.Graphics().p("EAilAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_123 = new cjs.Graphics().p("EAiHAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_124 = new cjs.Graphics().p("EAhiAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_125 = new cjs.Graphics().p("EAgzAPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_126 = new cjs.Graphics().p("Af9PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_127 = new cjs.Graphics().p("Ae9PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_128 = new cjs.Graphics().p("Ad2PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_129 = new cjs.Graphics().p("AcmPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_130 = new cjs.Graphics().p("AbOPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_131 = new cjs.Graphics().p("AZtPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_132 = new cjs.Graphics().p("AYEPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_133 = new cjs.Graphics().p("AWSPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_134 = new cjs.Graphics().p("AUtPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_135 = new cjs.Graphics().p("ATPPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_136 = new cjs.Graphics().p("AR4PoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_137 = new cjs.Graphics().p("AQnPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_138 = new cjs.Graphics().p("APcPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_139 = new cjs.Graphics().p("AOYPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_140 = new cjs.Graphics().p("ANaPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_141 = new cjs.Graphics().p("AMjPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_142 = new cjs.Graphics().p("ALzPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_143 = new cjs.Graphics().p("ALIPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_144 = new cjs.Graphics().p("AKlPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_145 = new cjs.Graphics().p("AKHPoIAA/PMAzxAAAIAAfPg");
  var mask_graphics_146 = new cjs.Graphics().p("AJxPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_147 = new cjs.Graphics().p("AJhPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_148 = new cjs.Graphics().p("AJXPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_149 = new cjs.Graphics().p("AJSPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_209 = new cjs.Graphics().p("EAjKAPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_210 = new cjs.Graphics().p("EAjFAPoIAA/PMAzxAAAIAAfPg");
  var mask_graphics_211 = new cjs.Graphics().p("EAi5APoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_212 = new cjs.Graphics().p("EAijAPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_213 = new cjs.Graphics().p("EAiFAPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_214 = new cjs.Graphics().p("EAhfAPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_215 = new cjs.Graphics().p("EAgvAPoIAA/PMAzxAAAIAAfPg");
  var mask_graphics_216 = new cjs.Graphics().p("Af4PoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_217 = new cjs.Graphics().p("Ae3PoIAA/PMAzxAAAIAAfPg");
  var mask_graphics_218 = new cjs.Graphics().p("AdvPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_219 = new cjs.Graphics().p("AcdPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_220 = new cjs.Graphics().p("AbDPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_221 = new cjs.Graphics().p("AZhPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_222 = new cjs.Graphics().p("AX1PoIAA/PMAzxAAAIAAfPg");
  var mask_graphics_223 = new cjs.Graphics().p("AWCPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_224 = new cjs.Graphics().p("AUfPoIAA/PMAzwAAAIAAfPg");
  var mask_graphics_225 = new cjs.Graphics().p("ATDPoIAA/PMAzvAAAIAAfPg");
  var mask_graphics_226 = new cjs.Graphics().p("ARuPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_227 = new cjs.Graphics().p("AQfPoIAA/PMAzuAAAIAAfPg");
  var mask_graphics_228 = new cjs.Graphics().p("APWPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_229 = new cjs.Graphics().p("AOTPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_230 = new cjs.Graphics().p("ANXPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_231 = new cjs.Graphics().p("AMhPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_232 = new cjs.Graphics().p("ALxPoIAA/PMAztAAAIAAfPg");
  var mask_graphics_233 = new cjs.Graphics().p("ALIPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_234 = new cjs.Graphics().p("AKlPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_235 = new cjs.Graphics().p("AKJPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_236 = new cjs.Graphics().p("AJyPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_237 = new cjs.Graphics().p("AJjPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_238 = new cjs.Graphics().p("AJZPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_239 = new cjs.Graphics().p("AJUPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_289 = new cjs.Graphics().p("EAjMAPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_290 = new cjs.Graphics().p("EAjIAPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_291 = new cjs.Graphics().p("EAi7APoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_292 = new cjs.Graphics().p("EAimAPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_293 = new cjs.Graphics().p("EAiIAPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_294 = new cjs.Graphics().p("EAhiAPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_295 = new cjs.Graphics().p("EAgzAPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_296 = new cjs.Graphics().p("Af8PoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_297 = new cjs.Graphics().p("Ae9PoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_298 = new cjs.Graphics().p("Ad0PoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_299 = new cjs.Graphics().p("AckPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_300 = new cjs.Graphics().p("AbLPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_301 = new cjs.Graphics().p("AZpPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_302 = new cjs.Graphics().p("AX/PoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_303 = new cjs.Graphics().p("AWLPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_304 = new cjs.Graphics().p("AUnPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_305 = new cjs.Graphics().p("ATKPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_306 = new cjs.Graphics().p("ARzPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_307 = new cjs.Graphics().p("AQiPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_308 = new cjs.Graphics().p("APYPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_309 = new cjs.Graphics().p("AOVPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_310 = new cjs.Graphics().p("ANXPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_311 = new cjs.Graphics().p("AMhPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_312 = new cjs.Graphics().p("ALwPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_313 = new cjs.Graphics().p("ALHPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_314 = new cjs.Graphics().p("AKjPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_315 = new cjs.Graphics().p("AKGPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_316 = new cjs.Graphics().p("AJwPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_317 = new cjs.Graphics().p("AJfPoIAA/PMAzsAAAIAAfPg");
  var mask_graphics_318 = new cjs.Graphics().p("AJWPoIAA/PMAzrAAAIAAfPg");
  var mask_graphics_319 = new cjs.Graphics().p("AJUPoIAA/PMAzsAAAIAAfPg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 556.0699,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 555.6472,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 554.3791,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 552.2656,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 549.3067,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 545.5023,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 540.8526,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 535.3574,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 529.0169,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 521.8309,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 513.7995,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 504.9227,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 495.2005,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 484.6329,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 473.2199,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 462.5576,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 452.6306,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 443.4389,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 434.9826,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 427.2616,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 420.2759,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 414.0256,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 408.5106,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 403.7309,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 399.6866,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 396.3776,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 393.8039,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 391.9656,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 390.8626,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 390.4949,
   y: 99.9935
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 556.0699,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 555.6491,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 554.3868,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 552.2828,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 549.3373,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 545.5501,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 540.9214,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 535.4512,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 529.1393,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 521.9859,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 513.9908,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 505.1542,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 495.476,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 484.9563,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 473.5949,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 463.5658,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 454.1838,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 445.4488,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 437.3609,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 429.9199,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 423.126,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 416.9792,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 411.4794,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 406.6266,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 402.4209,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 398.8622,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 395.9505,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 393.6859,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 392.0683,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 391.0977,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 390.6086,
   y: 99.9935
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 556.1836,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 555.755,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 554.4693,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 552.3265,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 549.3265,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 545.4693,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 540.755,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 535.1836,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 528.755,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 521.4693,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 513.3265,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 504.3265,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 494.4693,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 483.755,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 472.1836,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 462.2976,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 453.0494,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 444.439,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 436.4664,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 429.1316,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 422.4347,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 416.3755,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 410.9541,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 406.1706,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 402.0249,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 398.5169,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 395.6468,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 393.4145,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 391.8199,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 390.8632,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 390.379,
   y: 99.9935
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 555.954,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 555.5299,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 554.2578,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 552.1377,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 549.1695,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 545.3532,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 540.6889,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 535.1765,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 528.8161,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 521.6076,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 513.5511,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 504.6465,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 494.8938,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 484.2931,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 472.679,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 462.6929,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 453.3511,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 444.6536,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 436.6003,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 429.1913,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 422.4266,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 416.3061,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 410.8299,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 405.998,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 401.8103,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 398.2668,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 395.3677,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 393.1127,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 391.5021,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 390.5357,
   y: 99.9935
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 390.379,
   y: 99.9935
  }).wait(55).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(6));
  this.instance_4 = new lib.bg1();
  this.instance_4.parent = this;
  this.instance_4.setTransform(539.45, 157.15, 0.7995, 0.7997, 0, 0, 0, 151.4, 196.5);
  var maskedShapeInstanceList = [this.instance_4];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_5 = new lib.bg2_1();
  this.instance_5.parent = this;
  this.instance_5.setTransform(539.45, 157.15, 0.7995, 0.7997, 0, 0, 0, 151.4, 196.5);
  this.instance_5._off = true;
  var maskedShapeInstanceList = [this.instance_5];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(170));
  this.instance_6 = new lib.bg3_1();
  this.instance_6.parent = this;
  this.instance_6.setTransform(539, 157.15, 0.7995, 0.7997, 0, 0, 0, 151.5, 196.5);
  this.instance_6._off = true;
  var maskedShapeInstanceList = [this.instance_6];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(209).to({
   _off: false
  }, 0).wait(65).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(6));
  this.instance_7 = new lib.bg1();
  this.instance_7.parent = this;
  this.instance_7.setTransform(539.45, 157.15, 0.7995, 0.7997, 0, 0, 0, 151.4, 196.5);
  this.instance_7._off = true;
  var maskedShapeInstanceList = [this.instance_7];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(289).to({
   _off: false
  }, 0).to({
   _off: true
  }, 85).wait(6));
  this.instance_8 = new lib.bg_01();
  this.instance_8.parent = this;
  this.instance_8.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  var maskedShapeInstanceList = [this.instance_8];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_8).to({
   _off: true
  }, 374).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -20, 970, 240);
 (lib.Toyota_100Px200_970 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.frame_0 = function() {
   if (!this.initialized) {
    this.initialized = true;
    this.resizeHandler = function() {
     var minWidth = banner_root_object.nativeWidth;
     var currentWidth = minWidth;
     if (window.innerWidth > minWidth) {
      currentWidth = window.innerWidth;
     }
     banner_root_object.mask.scaleX = (currentWidth + 1) / banner_root_object.mask.nativeWidth;
     banner_root_object.mask.x = Math.floor(currentWidth / 2);
     banner_root_object.background.scaleX = currentWidth / banner_root_object.background.nominalBounds.width;
     banner_root_object.fade.scaleX = currentWidth / banner_root_object.fade.nominalBounds.width;
     banner_root_object.centerSide.x = Math.round((currentWidth - banner_root_object.nativeWidth) / 2);
     banner_root_object.rightSide.x = currentWidth - banner_root_object.nativeWidth;
     updateStretchLayout(true);
    };
    banner_root_object = this;
    banner_root_object.mask = banner_root_object.fade.mask;
    banner_root_object.mask.nativeWidth = banner_root_object.mask.x * 2;
    banner_root_object.mask.nativeHeight = banner_root_object.mask.y * 2;
    banner_root_object.nativeWidth = banner_root_object.mask.nativeWidth;
    window.addEventListener("resize", this.resizeHandler);
    this.resizeHandler();
   }
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("EhLxAPoIAA/PMCXjAAAIAAfPg");
  mask.setTransform(485, 100);
  this.rightSide = new lib.right();
  this.rightSide.name = "rightSide";
  this.rightSide.parent = this;
  var maskedShapeInstanceList = [this.rightSide];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.rightSide).wait(1));
  this.fade = new lib.fade();
  this.fade.name = "fade";
  this.fade.parent = this;
  var maskedShapeInstanceList = [this.fade];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.fade).wait(1));
  this.leftSide = new lib.left();
  this.leftSide.name = "leftSide";
  this.leftSide.parent = this;
  var maskedShapeInstanceList = [this.leftSide];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.leftSide).wait(1));
  this.centerSide = new lib.center();
  this.centerSide.name = "centerSide";
  this.centerSide.parent = this;
  var maskedShapeInstanceList = [this.centerSide];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.centerSide).wait(1));
  this.background = new lib.background();
  this.background.name = "background";
  this.background.parent = this;
  var maskedShapeInstanceList = [this.background];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.background).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(485, 100, 485, 100);
 lib.properties = {
  id: 'E3CCC2B2DA6EFF40AA7B189F6C5C7189',
  width: 970,
  height: 200,
  fps: 30,
  color: "#666666",
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
 an.compositions['E3CCC2B2DA6EFF40AA7B189F6C5C7189'] = {
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