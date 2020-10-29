(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 618, 525);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 618, 525);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 618, 525);
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
  this.shape.setTransform(108.8, 155.5, 1.2502, 1.2502, 0, 0, 0, -0.3, 0.2);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(108.3, 156.55, 1.2502, 1.2502, 0, 0, 0, -0.4, 0.1);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(25, 118, 167.7, 76.80000000000001), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape.setTransform(217.825, 192.625);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAyAAQAYABANAMQAOAMABAUQgBAMgFALQgGAKgNAHQARADAJALQAKALAAARQAAAPgHALQgGALgNAGQgLAHgSAAgAgmBIIAnAAQASAAAKgJQAJgJAAgQQAAgPgJgIQgJgHgQgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAEgHQAFgIAAgJQAAgOgKgIQgJgIgRAAIgeAAg");
  this.shape_1.setTransform(203.15, 192.625);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgvBPQgVgLgMgVQgMgUAAgbQAAgaAMgUQAMgVAVgLQAWgMAZAAQAbAAAVAMQAUALAMAVQAMAUABAaQgBAagMAVQgMAVgUALQgVAMgbAAQgaAAgVgMgAglg/QgRAKgJAQQgKARAAAUQAAAVAKARQAJAQARAKQAQAJAVAAQAVAAAQgJQARgKAJgQQAKgRAAgVQAAgUgKgRQgJgQgRgKQgQgJgVgBQgVABgQAJg");
  this.shape_2.setTransform(184.75, 192.625);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AglBUQgPgHgJgLIAJgOQAGAGAHAEQAIAGAJADQAKADAMAAQAUAAAMgJQAMgJAAgSQAAgRgPgJQgPgJgfABIAAgPQAVgBAMgFQAMgFAFgHQAEgIAAgIQAAgNgKgIQgKgHgRgBQgNAAgMAFQgMAGgIAHIgIgPQAKgIANgFQAOgHARABQAQAAANAFQAMAFAHAKQAGAKAAAOQAAAQgKALQgKAKgQAEQAUADAMAKQALALAAAUQAAAPgHAMQgHAMgOAGQgOAHgUAAQgWAAgPgHg");
  this.shape_3.setTransform(166.975, 192.65);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgwBZIgNgEIAFgQQAEACAGABQAFABAGAAQALABAHgHQAHgGAGgOIhFiIIATAAIA6B1IAzh1IATAAIg7CHQgGAOgFAJQgFAKgJAGQgKAFgOAAIgOgBg");
  this.shape_4.setTransform(153.15, 192.75);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AArBZIhIhRIgRAAIAABRIgTAAIAAixIATAAIAABQIAQAAIBChQIAXAAIhJBXIBQBag");
  this.shape_5.setTransform(139.3, 192.65);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhkAAIAABRIgSAAIAAixIASAAIAABQIBkAAIAAhQIATAAIAACxg");
  this.shape_6.setTransform(115.7, 192.625);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AA1BwIAAiUIhqCUIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxgAgbhZQgKgHgBgPIAOAAQABAKAHADQAGADAKABQALgBAGgDQAGgEABgJIAOAAQgBAPgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_7.setTransform(97.325, 190.35);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_8.setTransform(80.075, 192.625);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AglBUQgPgHgJgLIAJgOQAGAGAHAEQAIAGAJADQAKADAMAAQAUAAAMgJQAMgJAAgSQAAgRgPgJQgPgJgfABIAAgPQAVgBAMgFQAMgFAFgHQAEgIAAgIQAAgNgKgIQgKgHgRgBQgNAAgMAFQgMAGgIAHIgIgPQAKgIANgFQAOgHARABQAQAAANAFQAMAFAHAKQAGAKAAAOQAAAQgKALQgKAKgQAEQAUADAMAKQALALAAAUQAAAPgHAMQgHAMgOAGQgOAHgUAAQgWAAgPgHg");
  this.shape_9.setTransform(64.875, 192.65);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_10.setTransform(48.925, 192.625);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AA+BtIAAgpIh7AAIAAApIgSAAIAAg6IAMAAQAEAAAFgFQAEgGADgKQAEgJABgMIANh1IBcAAIAACfIAUAAIAAA6gAgcAKQgBARgFAKQgDALgFADIBSAAIAAiOIg5AAg");
  this.shape_11.setTransform(31.2, 194.7);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AA1BvIAAiSIhqCSIgRAAIAAiwIASAAIAACTIBpiTIASAAIAACwgAgbhZQgKgHgBgOIAOAAQABAIAHAEQAGADAKAAQALAAAGgDQAGgEABgIIAOAAQgBAOgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_12.setTransform(192.675, 160.7);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_13.setTransform(172.575, 162.975);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhjAAIAABRIgTAAIAAixIATAAIAABQIBjAAIAAhQIATAAIAACxg");
  this.shape_14.setTransform(152.7, 162.975);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_15.setTransform(137.5, 162.975);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgxBZIAAixIBgAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBPAAIAAARg");
  this.shape_16.setTransform(124.85, 162.975);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgeAAg");
  this.shape_17.setTransform(110.95, 162.975);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA9BuIAAgqIiKAAIAAixIASAAIAACgIBhAAIAAigIATAAIAACgIAVAAIAAA7g");
  this.shape_18.setTransform(94.825, 165.05);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAyBZIgyhLIgyBLIgVAAIA9hZIg7hYIAWAAIAvBJIAxhJIAUAAIg7BXIA+Bag");
  this.shape_19.setTransform(76.975, 162.975);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgwBZIgNgEIAEgRQAFADAFABQAGABAGABQALgBAHgGQAHgHAGgNIhGiIIAVAAIA5B2IAzh2IAUAAIg9CIQgFAMgGAKQgEAKgKAFQgJAGgOAAIgOgBg");
  this.shape_20.setTransform(61.75, 163.1);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgeAAg");
  this.shape_21.setTransform(47.5, 162.975);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AA+BuIAAgqIh7AAIAAAqIgSAAIAAg7IAMAAQAEAAAFgGQAEgFADgJQAEgKABgNIANh1IBcAAIAACgIAUAAIAAA7gAgcAKQgBARgFALQgDAKgFADIBSAAIAAiPIg5AAg");
  this.shape_22.setTransform(31.2, 165.05);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AA1BvIAAiSIhqCSIgRAAIAAiwIASAAIAACTIBpiTIASAAIAACwgAgbhZQgKgHgBgPIAOAAQABAKAHADQAGADAKAAQALAAAGgDQAGgEABgJIAOAAQgBAPgKAHQgLAHgQAAQgRAAgKgHg");
  this.shape_23.setTransform(227.175, 131.05);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_24.setTransform(207.075, 133.325);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhjAAIAABRIgTAAIAAixIATAAIAABQIBjAAIAAhQIATAAIAACxg");
  this.shape_25.setTransform(187.2, 133.325);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANABAXQAAAPgHAMQgFAMgOAGQgMAHgTAAgAgmBIIAlAAQATAAALgJQAKgJAAgRQgBgRgKgIQgLgJgSABIglAAg");
  this.shape_26.setTransform(171.55, 133.325);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("Ag/BYIgGgCIADgRIAFADIAHABQAHAAADgGQADgFABgMIAOiLIBgAAIAACxIgTAAIAAigIg9AAIgMCAQgBAQgIAJQgHAIgPABIgKgCg");
  this.shape_27.setTransform(154.375, 133.425);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgxBZIAAixIBgAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBPAAIAAARg");
  this.shape_28.setTransform(141.25, 133.325);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_29.setTransform(128, 133.325);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_30.setTransform(112.575, 133.325);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AglBUQgPgHgJgKIAJgPQAGAFAHAFQAIAGAJADQAKADAMAAQAUAAAMgJQAMgJAAgSQAAgRgPgJQgPgJgfABIAAgPQAVAAAMgGQAMgFAFgHQAEgIAAgIQAAgNgKgIQgKgHgRgBQgNAAgMAFQgMAGgIAHIgIgPQAKgIANgFQAOgHARAAQAQABANAFQAMAGAHAJQAGAKAAAOQAAAQgKALQgKAKgQAFQAUACAMAKQALAMAAATQAAAPgHAMQgHAMgOAHQgOAGgUAAQgWAAgPgHg");
  this.shape_31.setTransform(95.975, 133.35);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_32.setTransform(81.375, 133.325);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("Ag1BZIAAixIAwAAQATAAAOAHQAMAHAIAMQAHAMAAARQAAAPgHANQgIALgMAIQgOAIgTAAIgeAAIAABDgAgjAGIAdAAQALAAAJgFQAJgDAGgJQAGgJAAgNQAAgOgGgJQgGgIgJgEQgJgDgLAAIgdAAg");
  this.shape_33.setTransform(67.25, 133.325);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("ABDBZIAAixIATAAIAACxgAhVBZIAAixIATAAIAABMIAnAAQAcAAAOANQAOANAAAXQAAAPgGAMQgGAMgNAGQgLAHgUAAgAhCBIIAlAAQAUAAAJgJQAKgJAAgRQAAgRgKgIQgKgJgTABIglAAg");
  this.shape_34.setTransform(48.825, 133.325);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAxAAQAZABAOAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgGALQgHALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAJgJQAKgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAFgHQADgIAAgJQAAgOgJgIQgKgIgQAAIgeAAg");
  this.shape_35.setTransform(31.3, 133.325);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(21, 111, 228.8, 99), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAxDLQgZgfAAg4QAAg4AZgfQAYgeAugBQAsABAZAeQAZAfAAA4QAAA4gZAfQgZAfgsABQgugBgYgfgABMA0QgNAWAAAqQAAAqANAWQAOAVAdAAQAbAAAOgVQAOgWAAgqQAAgqgOgWQgOgVgbAAQgdAAgOAVgAicDnIEQnNIAoAAIkPHNgAi7gcQgYgfgBg4QABg4AYgfQAYgfAugBQAsABAZAfQAZAfAAA4QAAA4gZAfQgZAegsABQgugBgYgegAifizQgOAVAAArQAAAqAOAWQAOAVAcAAQAbAAAOgVQAOgWABgqQgBgrgOgVQgOgVgbAAQgcAAgOAVg");
  this.shape.setTransform(299.9, 176.675);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAuDnIAAhoIjPAAIAAgeIDdlHIAjAAIAAE7IBDAAIAAAqIhDAAIAABogAhrBVICZAAIAAjlg");
  this.shape_1.setTransform(261.95, 176.675);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(241.5, 121.9, 79.19999999999999, 96.69999999999999), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgwBZIAAixIBgAAIAAARIhOAAIAAA/IBLAAIAAAQIhLAAIAABAIBQAAIAAARg");
  this.shape.setTransform(227.6, 191.125);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BZIAAixIAyAAQASAAANAHQANAHAIAMQAGAMAAARQAAAPgGANQgIALgNAIQgNAIgSAAIgfAAIAABDgAgjAGIAcAAQAMAAAJgFQAKgDAFgJQAGgJAAgNQAAgOgGgJQgFgIgKgEQgJgDgMAAIgcAAg");
  this.shape_1.setTransform(214.45, 191.125);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIBeAAIAAARIhLAAIAAA7IAnAAQAdAAAOANQAOANgBAXQABAPgHAMQgGAMgNAGQgMAHgTAAgAgmBIIAlAAQATAAALgJQAKgJAAgRQAAgRgLgIQgLgJgSABIglAAg");
  this.shape_2.setTransform(200.45, 191.125);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AArBZIAAhKIghAAIgDAAIgCgBIgsBLIgWAAIAxhOQgPgGgJgMQgIgNAAgRQAAgYAPgNQAPgNAZgBIAzAAIAACxgAgFhEQgJADgFAIQgGAIAAANQAAAMAFAIQAFAIAJAEQAHAEAKAAIAgAAIAAhHIgeAAQgKAAgIADg");
  this.shape_3.setTransform(184.325, 191.125);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgvBPQgVgLgLgVQgMgUgBgbQABgaAMgUQALgVAVgLQAWgMAZAAQAaAAAWAMQAUALAMAVQAMAUABAaQgBAagMAVQgMAVgUALQgWAMgaAAQgaAAgVgMgAglg/QgQAKgKAQQgKARAAAUQAAAVAKARQAKAQAQAKQAQAJAVAAQAVAAARgJQAQgKAKgQQAJgRABgVQgBgUgJgRQgKgQgQgKQgRgJgVgBQgVABgQAJg");
  this.shape_4.setTransform(167.4, 191.125);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhkAAIAABRIgSAAIAAixIASAAIAABQIBkAAIAAhQIATAAIAACxg");
  this.shape_5.setTransform(148, 191.125);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAyAAQAXABAPAMQANAMAAAUQABAMgGALQgFAKgOAHQARADAKALQAJALAAARQAAAPgHALQgGALgMAGQgNAHgRAAgAgmBIIAmAAQATAAAKgJQAJgJAAgQQAAgPgJgIQgKgHgPgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAEgHQAEgIAAgJQABgOgKgIQgKgIgQAAIgeAAg");
  this.shape_6.setTransform(126.8, 191.125);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_7.setTransform(105.625, 191.125);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AArBYIhIhRIgRAAIAABRIgTAAIAAivIATAAIAABPIAPAAIBEhPIAVAAIhIBVIBPBag");
  this.shape_8.setTransform(91.55, 191.15);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIAyAAQAYABANAMQAOAMABAUQgBAMgFALQgGAKgNAHQARADAKALQAJALAAARQAAAPgHALQgGALgNAGQgLAHgSAAgAgmBIIAnAAQASAAAKgJQAJgJAAgQQAAgPgJgIQgJgHgQgBIgqAAgAgmgIIAhAAQAJAAAIgEQAHgFAEgHQAFgIAAgJQAAgOgKgIQgJgIgRAAIgeAAg");
  this.shape_9.setTransform(76.25, 191.125);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_10.setTransform(60.625, 191.125);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_11.setTransform(46.8, 191.125);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AggBPQgUgLgMgVQgMgVAAgaQAAgaAMgVQAMgUAUgMQAVgLAaAAQARAAAPAFQAPAFAMAJIgGASQgLgJgNgFQgOgFgPAAQgUAAgRAJQgQAKgJAQQgJAQAAAVQAAAVAJAQQAJARAQAKQARAJAUAAQARAAAOgFQAOgGAMgJIAFASQgOAKgPAFQgPAFgSAAQgaAAgVgMg");
  this.shape_12.setTransform(32.35, 191.125);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AArBZIAAhKIghAAIgDAAIgCgBIgsBLIgWAAIAxhOQgPgGgJgMQgIgNAAgRQAAgYAPgNQAPgNAZgBIAzAAIAACxgAgFhEQgJADgFAIQgGAIAAANQAAAMAFAIQAFAIAJAEQAHAEAKAAIAgAAIAAhHIgeAAQgKAAgIADg");
  this.shape_13.setTransform(152.125, 161.475);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_14.setTransform(137.775, 161.475);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhjAAIAABRIgTAAIAAixIATAAIAABQIBjAAIAAhQIATAAIAACxg");
  this.shape_15.setTransform(120.95, 161.475);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgIBZIAAigIgyAAIAAgRIB1AAIAAARIgxAAIAACgg");
  this.shape_16.setTransform(105.95, 161.475);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_17.setTransform(90.725, 161.475);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA/BuIAAgqIh8AAIAAAqIgSAAIAAg7IALAAQAGAAADgFQAFgGADgKQADgJACgMIANh1IBcAAIAACfIAVAAIAAA7gAgcAKQgCARgEALQgDAKgFADIBSAAIAAiPIg4AAg");
  this.shape_18.setTransform(73.2, 163.55);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgwBZIAAixIBfAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBQAAIAAARg");
  this.shape_19.setTransform(59.1, 161.475);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BZIAAixIAxAAQATAAANAHQAOAHAGAMQAIAMgBARQABAPgIANQgGALgOAIQgNAIgTAAIgeAAIAABDgAgjAGIAcAAQALAAAKgFQAJgDAGgJQAGgJAAgNQAAgOgGgJQgGgIgJgEQgKgDgLAAIgcAAg");
  this.shape_20.setTransform(45.95, 161.475);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AArBZIhIhRIgRAAIAABRIgTAAIAAixIATAAIAABQIAPAAIBEhQIAVAAIhIBXIBQBag");
  this.shape_21.setTransform(32.15, 161.5);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AArBZIAAhKIghAAIgDAAIgCgBIgsBLIgWAAIAxhOQgPgGgJgMQgIgNAAgRQAAgYAPgNQAPgNAZgBIAzAAIAACxgAgFhEQgJADgFAIQgGAIAAANQAAAMAFAIQAFAIAJAEQAHAEAKAAIAgAAIAAhHIgeAAQgKAAgIADg");
  this.shape_22.setTransform(194.175, 131.825);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_23.setTransform(179.825, 131.825);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAyBZIAAhRIhkAAIAABRIgSAAIAAixIASAAIAABQIBkAAIAAhQIATAAIAACxg");
  this.shape_24.setTransform(163, 131.825);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("Ag4BZIAAixIASAAIAABMIAmAAQAeAAAOANQANANAAAXQAAAPgFAMQgHAMgMAGQgNAHgUAAgAgmBIIAlAAQATAAAKgJQALgJgBgRQABgRgLgIQgLgJgSABIglAAg");
  this.shape_25.setTransform(147.55, 131.825);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("Ag/BYIgGgCIADgRIAFADIAHABQAHAAADgGQADgFABgMIAOiLIBgAAIAACxIgTAAIAAigIg9AAIgMCAQgBAQgIAJQgHAIgPABIgKgCg");
  this.shape_26.setTransform(130.575, 131.925);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AA6BZIgVg6IhJAAIgWA6IgTAAIBEixIATAAIBECxgAAfAQIgfhSIgeBSIA9AAg");
  this.shape_27.setTransform(116.225, 131.825);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AA1BZIAAiTIhqCTIgRAAIAAixIASAAIAACTIBpiTIASAAIAACxg");
  this.shape_28.setTransform(99.225, 131.825);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AA9BtIAAgpIiKAAIAAixIASAAIAACgIBhAAIAAigIATAAIAACgIAVAAIAAA6g");
  this.shape_29.setTransform(81.875, 133.9);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgxBZIAAixIBgAAIAAARIhNAAIAAA/IBLAAIAAAQIhLAAIAABAIBPAAIAAARg");
  this.shape_30.setTransform(65.55, 131.825);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAxBZIAAigIhhAAIAACgIgTAAIAAixICHAAIAACxg");
  this.shape_31.setTransform(49.625, 131.825);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AggBPQgUgLgMgVQgMgVAAgaQAAgaAMgVQAMgUAUgMQAVgLAaAAQARAAAPAFQAPAFAMAJIgGASQgLgJgNgFQgOgFgPAAQgUAAgRAJQgQAKgJAQQgJAQAAAVQAAAVAJAQQAJARAQAKQARAJAUAAQARAAAOgFQAOgGAMgJIAFASQgOAKgPAFQgPAFgSAAQgaAAgVgMg");
  this.shape_32.setTransform(32.35, 131.825);
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(21, 109.5, 214.7, 99), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(97, 46, 0.6156, 0.6152);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(97, 46, 162.5, 57.2), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAOBuIAAgrIheAAIAAgbIBgiVIAmAAIAACOIAbAAIAAAiIgbAAIAAArgAgpAhIA3AAIAAhWg");
  this.shape.setTransform(93.9, 75.6);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgWBuIhPjbIAtAAIA4CqIA6iqIAtAAIhQDbg");
  this.shape_1.setTransform(75.3, 75.6);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AA8BuIgWg+IhOAAIgVA+IgrAAIBSjbIAsAAIBSDbgAAbAPIgbhOIgbBOIA2AAg");
  this.shape_2.setTransform(54.75, 75.6);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAkBuIgzhWIgbAAIAABWIgqAAIAAjbIBNAAQAXAAAQAIQAQAJAJAOQAIAPAAASQAAAVgKARQgLAOgUAKIA9BdgAgqgIIAdAAQAKAAAHgEQAIgDAFgHQAEgIABgMQgBgRgKgIQgKgIgOAAIgdAAg");
  this.shape_3.setTransform(35.375, 75.6);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(22.3, 9.3, 134, 87.4), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
  this.shape.setTransform(201.725, 320.175);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAYIATgYIgTgXIAIAAIAUAXIgUAYgAgaAYIAUgYIgUgXIAKAAIASAXIgSAYg");
  this.shape_1.setTransform(197.525, 317.55);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAgfAeIAAg7IAIAAIAAAZIARAAQAIAAAGAEQAGADAAAJQAAAGgCAEQgEAEgEACQgEACgFAAgAgXAYIARAAQAGgBADgDQADgDAAgFQgBgFgDgDQgDgCgHgBIgPAAg");
  this.shape_2.setTransform(190.7, 317.65);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAGAEQAHAEADAHQAEAHABAJQgBAJgEAGQgDAHgHAEQgGAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgFADgEAFQgCAFAAAHQAAAHACAEQAEAFAFADQAEAEAGAAQAGAAAFgDQAGgDACgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_3.setTransform(183.3, 318.825);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_4.setTransform(176.35, 317.625);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAEAAAHQAAAGgDADQgDAEgFACQgFACgGAAgAgOAYIAPAAQAHgBAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgCABgCIABgFQAAgEgDgCQgEgDgFAAIgNAAg");
  this.shape_5.setTransform(170.475, 317.65);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_6.setTransform(163.85, 317.625);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAIgEAHAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAFADAFAAQAFAAAFgCIAJgFIADAIQgEADgGABQgFACgIAAQgHAAgHgEg");
  this.shape_7.setTransform(157.7, 317.625);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAHgEAJAAQAGAAAFACQAFABAEADIgDAIIgIgFQgEgBgFAAQgGAAgFADQgFADgCAFQgDAFAAAGQAAAHADAFQACAGAFADQAFADAFAAQAGAAAEgCIAJgFIADAIQgEADgGABQgGACgGAAQgIAAgHgEg");
  this.shape_8.setTransform(152.1, 317.625);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgEgHQgEgHgBgJQABgIAEgHQAEgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAFAHQADAHAAAIQAAAJgDAHQgFAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_9.setTransform(145.75, 317.625);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAHgDAGAAQAIAAAGAEQAHAEADAHQAFAHAAAJQAAAJgFAGQgDAHgHAEQgGAEgJAAIgHgBQgFgBgDgDQgEgDgDgFIAAAlgAgLgfQgFADgDAFQgCAFAAAHQAAAHACAEQADAFAFADQAFAEAGAAQAGAAAGgDQAFgDACgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgHAAQgFAAgGADg");
  this.shape_10.setTransform(138.95, 318.825);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAOAeIgZgcIgEAAIAAAcIgIAAIAAg7IAIAAIAAAZIAEAAIAYgZIAKAAIgbAcIAcAfg");
  this.shape_11.setTransform(132.9, 317.65);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_12.setTransform(124.1, 317.625);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAggAeIAAg7IAJAAIAAAZIAQAAQAJAAAHAEQAFADAAAJQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAYIAQAAQAHgBACgDQADgDAAgFQAAgFgDgDQgDgCgHgBIgPAAg");
  this.shape_13.setTransform(116.85, 317.65);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_14.setTransform(109.425, 317.65);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_15.setTransform(102.675, 318.525);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAIAEQAHAEADAHQAFAHAAAIQAAAJgFAHQgDAHgHAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_16.setTransform(96, 317.625);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAEAAAHQAAAGgDADQgDAEgFACQgFACgGAAgAgOAYIAPAAQAHgBAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgCABgCIABgFQAAgEgDgCQgEgDgFAAIgNAAg");
  this.shape_17.setTransform(89.875, 317.65);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAUAeIAAgvIgmAvIgJAAIAAg7IAJAAIAAAvIAmgvIAHAAIAAA7g");
  this.shape_18.setTransform(83.15, 317.65);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAGgDAHAAQAIAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgHgBQgFgBgEgDQgDgDgDgFIAAAlgAgLgfQgEADgDAFQgEAFAAAHQAAAHAEAEQADAFAEADQAGAEAFAAQAHAAAFgDQAEgDADgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgGAAQgGAAgGADg");
  this.shape_19.setTransform(76.25, 318.825);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_20.setTransform(69.025, 317.65);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_21.setTransform(62.2, 317.625);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_22.setTransform(55.375, 317.65);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgbAeIgDgBIACgIIADABIADAAQADAAABgCQADgCAAgGIAFgqIApAAIAAA8IgJAAIAAg0IgZAAIgEAkQgBAJgEADQgDAFgHAAIgFgBg");
  this.shape_23.setTransform(48.15, 317.7);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgFgHQgEgHABgJQgBgIAEgHQAFgHAHgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_24.setTransform(41.85, 317.625);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_25.setTransform(35.025, 317.65);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgDgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAGAAAGgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgIAAgIgEgAAUgFQAAgFgEgEQgCgEgEgCQgEgDgFAAQgFAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_26.setTransform(279.1, 305.525);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAJAAIAAA7gAggAeIAAg7IAJAAIAAAZIAQAAQAKAAAFAEQAGAEAAAIQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAXIAQAAQAHAAACgCQAEgDAAgGQAAgFgEgDQgCgCgIAAIgPAAg");
  this.shape_27.setTransform(271.85, 305.55);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_28.setTransform(264.425, 305.55);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAHgDQAFgDAHAAQAIAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgDgDgDgFIAAAlgAgKgfQgGADgCAFQgEAFAAAHQAAAHAEAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgDgFQgCgFgFgDQgFgDgGAAQgGAAgFADg");
  this.shape_29.setTransform(257.7, 306.725);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAGgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAGAAAGgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgIAAgHgEgAAUgFQAAgFgEgEQgCgEgEgCQgEgDgFAAQgFAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_30.setTransform(250.75, 305.525);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAaAeIAAguIgXAmIgFAAIgXgmIAAAuIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_31.setTransform(243.375, 305.55);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgPAdQgGgCgDgCIACgIQADADAGACQAGACAHAAQAHAAAEgDQAFgCAAgGQAAgDgCgCQgDgDgFgBIgOgBIAAgGQALAAAFgDQAFgDAAgFQAAgEgDgCQgEgDgGAAQgFAAgEACIgJAEIgCgIIAKgEQAFgBAFAAQAKAAAGAEQAGAEAAAHQAAAGgEAEQgEAEgHABIAJABQAEACADADQACADAAAFQAAAGgDAEQgEAEgFABQgGACgHAAQgIAAgHgCg");
  this.shape_32.setTransform(236.275, 305.525);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_33.setTransform(230.325, 305.525);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgDgDgDgFIAAAlgAgKgfQgGADgCAFQgEAFAAAHQAAAHAEAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgDgFQgCgFgFgDQgFgDgGAAQgGAAgFADg");
  this.shape_34.setTransform(223.95, 306.725);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAGgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAGAAAGgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgIAAgHgEgAAUgFQAAgFgEgEQgCgEgEgCQgEgDgFAAQgFAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_35.setTransform(217, 305.525);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_36.setTransform(210.425, 305.55);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_37.setTransform(203.675, 306.425);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAKAAQAHAAAFgDQAGgCAEgEIACAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_38.setTransform(197.35, 305.525);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAHgDAGAAQAIAAAGAEQAHAEADAHQAFAHAAAJQAAAJgFAGQgDAHgHAEQgGAEgJAAIgHgBQgFgBgDgDQgFgDgCgFIAAAlgAgLgfQgEADgEAFQgCAFAAAHQAAAHACAEQAEAFAEADQAGAEAFAAQAGAAAGgDQAEgDADgGQADgEAAgHQAAgHgCgFQgEgFgEgDQgFgDgGAAQgGAAgGADg");
  this.shape_39.setTransform(190.8, 306.725);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgHgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQAJAAAGADQAIACAGAFIgEAIQgFgEgGgDQgGgCgIAAQgJAAgIAFQgIAEgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgIACgIAAQgMAAgKgGg");
  this.shape_40.setTransform(183, 304.275);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIAKAAIgUAXIAUAYgAgGAYIgUgYIAUgXIAIAAIgTAXIATAYg");
  this.shape_41.setTransform(176.025, 305.45);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_42.setTransform(167.2, 305.55);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAUAeIAAgwIgmAwIgJAAIAAg7IAJAAIAAAvIAmgvIAHAAIAAA7g");
  this.shape_43.setTransform(160.1, 305.55);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AAXAnIAAgSIg0AAIAAg7IAIAAIAAA0IAhAAIAAg0IAJAAIAAA0IAJAAIAAAZg");
  this.shape_44.setTransform(153.5, 306.425);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_45.setTransform(146.375, 305.525);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_46.setTransform(139.975, 305.55);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgIAAIAAg7IAIAAIAAAvIAlgvIAJAAIAAA7g");
  this.shape_47.setTransform(133.05, 305.55);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAaAeIAAguIgXAmIgFAAIgXgmIAAAuIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_48.setTransform(125.325, 305.55);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_49.setTransform(117.7, 305.525);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_50.setTransform(110.875, 305.55);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAHQAAAFgDAEQgDADgEABQAHAAAEAEQAEAEAAAGQAAAGgDADQgDAEgFACQgFACgGAAgAgOAXIAPAAQAHAAAEgCQADgDAAgFQAAgFgEgEQgEgCgHAAIgOAAgAgOgDIANAAQAEgBADgBQADgCABgCIABgEQAAgFgDgDQgEgBgFAAIgNAAg");
  this.shape_51.setTransform(102.325, 305.55);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAIAAIAAAZIAQAAQAKAAAGAEQAFAEAAAIQAAAGgCAEQgDAEgFACQgEACgGAAgAgOAXIAQAAQAGAAAEgCQADgDAAgGQAAgFgEgDQgDgCgIAAIgOAAg");
  this.shape_52.setTransform(94.075, 305.55);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgbAeIgCgBIABgIIACABIAEABQADAAABgDQACgDABgFIAFgpIApAAIAAA6IgJAAIAAg0IgYAAIgFAmQgBAHgDAEQgEAEgGAAIgGAAg");
  this.shape_53.setTransform(87.1, 305.6);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_54.setTransform(81.15, 305.525);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_55.setTransform(75.525, 305.55);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_56.setTransform(69.55, 305.55);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_57.setTransform(62.625, 306.425);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_58.setTransform(56.3, 305.525);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgLAsQgFgCgFgFQgEgFgDgJQgCgJAAgOQAAgMADgJQADgJAHgFQAHgFAMgCIAEgBIADAAIAHgBIAFgBIAEAAIABAHIgIABIgHABIgEABIgDAAQgHABgGADQgGADgDAHQgDAHgBAMQAEgGAGgDQAHgEAHAAQAJAAAGAEQAHAEADAHQAEAGAAAJQAAAJgEAHQgDAHgHAEQgHAEgKAAIgBAAQgFAAgFgCgAgIgFIgIAFQgEADgCAEQABAMADAHQADAHAFADQAFADAFAAQAHAAAFgDQAFgDADgGQADgFAAgHQAAgHgDgFQgDgEgFgDQgEgDgHAAQgEAAgFACg");
  this.shape_59.setTransform(49.675, 304.0292);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgEgHQgEgHgBgJQABgIAEgHQAEgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAFAHQADAHAAAIQAAAJgDAHQgFAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_60.setTransform(42.7, 305.525);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAYAqIAAhLIgvAAIAABLIgJAAIAAhTIBBAAIAABTg");
  this.shape_61.setTransform(35.05, 304.3);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAFIgIAOIgGgFIAKgMIgPgDIACgIIAPAGIgBgPIAHAAIgCAPIAQgGIACAIIgQADIALAMIgHAFg");
  this.shape_62.setTransform(28.75, 301.95);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(24.4, 292.6, 259.70000000000005, 33.19999999999999), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgYAbIgDgBIACgHIACABIACAAQAEAAABgCQACgCAAgFIAFgmIAlAAIAAA2IgIAAIAAgvIgWAAIgEAiQgBAGgDAEQgEAEgFAAIgFgBg");
  this.shape.setTransform(60.175, 305.6);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AARAoIAAgsIgiAsIgHAAIAAg2IAHAAIAAArIAigrIAIAAIAAA2gAgLgcQgEgEgBgHIAGAAQAAAFADACQADACAEAAQAFABACgDQADgDAAgEIAGAAQAAAHgFAEQgDAEgIAAQgHAAgEgEg");
  this.shape_1.setTransform(54.15, 304.3);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYQgFgEgBgIQAAgGAEgEQAEgCAJgCQAHgCAPAAIAAgCQAAgGgEgFQgEgEgIAAIgHABIgGADIgEADIgCgHQADgDAGgCIALgCQALAAAGAGQAFAFABALIAAAiIgIAAIAAgKQgCAFgGADQgGADgGAAQgJAAgEgFgAgCACQgHABgDADQgCACgBAEQAAAFAEADQADACAGAAQADABAFgCQAEgCACgDQAEgEAAgGIAAgGIgSACg");
  this.shape_2.setTransform(47.65, 305.525);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAcIAAgwIgSAAIAAgHIArAAIAAAHIgSAAIAAAwg");
  this.shape_3.setTransform(42.425, 305.55);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgOAjQgJgFgFgKQgFgIAAgMQAAgLAFgJQAGgJAJgFQAJgFAKAAQAIAAAHACQAGACAGAEIgDAIQgFgEgGgCQgGgCgHgBQgIABgHAEQgHAEgEAHQgEAIgBAIQABAJAEAIQAEAGAHAFQAHAEAIAAQAIAAAGgCIALgHIADAIQgGAEgHADQgHACgIAAQgKAAgKgFg");
  this.shape_4.setTransform(36.425, 304.4);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAFIgHANIgFgFIAJgLIgOgCIACgHIAOAFIgCgOIAGAAIgBAOIAOgFIACAHIgOACIAKALIgGAFg");
  this.shape_5.setTransform(27.95, 302.25);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(23.8, 293.5, 229.7, 19.69999999999999), null);
 (lib.snoska = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgBAYIATgYIgTgXIAIAAIAUAXIgUAYgAgaAYIAUgYIgUgXIAKAAIASAXIgSAYg");
  this.shape.setTransform(301.225, 318.05);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAOAeIgZgcIgEAAIAAAcIgIAAIAAg7IAIAAIAAAZIAEAAIAYgZIAKAAIgbAcIAcAfg");
  this.shape_1.setTransform(296.25, 318.15);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_2.setTransform(289.675, 318.15);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_3.setTransform(283.025, 318.125);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIAsAAIAAAIIgjAAIAAAcIASAAQAOAAAHAFQAHAHAAALQAAAHgDAFQgDAGgGAEQgHACgJAAgAgSAiIASAAQAJABAEgFQAFgEAAgIQAAgIgFgFQgFgDgIAAIgSAAg");
  this.shape_4.setTransform(276.975, 316.9);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_5.setTransform(267.475, 318.125);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_6.setTransform(262.025, 318.15);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_7.setTransform(256.15, 318.125);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAUArIAAgvIgmAvIgIAAIAAg6IAIAAIAAAuIAmguIAIAAIAAA6gAgMgfQgFgEAAgHIAHAAQAAAFADACQADACAEABQAGgBADgCQACgCAAgFIAHAAQAAAHgFAEQgFAEgIAAQgHAAgFgEg");
  this.shape_8.setTransform(249.15, 316.8);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_9.setTransform(242.15, 318.125);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgDAqIAAhLIgYAAIAAgIIA3AAIAAAIIgXAAIAABLg");
  this.shape_10.setTransform(235.925, 316.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIAKAAIgUAXIAUAYgAgGAYIgUgYIAUgXIAIAAIgTAXIATAYg");
  this.shape_11.setTransform(230.325, 318.05);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgFgKQgGgKAAgNQAAgMAGgKQAFgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgRgeQgIAFgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAKAAAIgEQAIgFAFgIQAEgIAAgKQAAgJgEgIQgFgIgIgFQgIgEgKAAQgJAAgIAEg");
  this.shape_12.setTransform(220.125, 316.875);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAcAqIgLgbIgiAAIgLAbIgJAAIAihTIAHAAIAiBTgAAPAHIgPgnIgOAnIAdAAg");
  this.shape_13.setTransform(211.5, 316.9);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAQAeIAAgZIgPAAIgPAZIgJAAIARgaQgGgBgEgEQgEgEAAgHQAAgFADgEQADgEAEgCQAFgCAFAAIAYAAIAAA7gAgIgUQgDADAAAGQAAAFADADQAEACAFAAIAPAAIAAgVIgPAAQgFAAgEACg");
  this.shape_14.setTransform(202.125, 318.125);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAIgEAIAAQAGAAAFACQAFABAEADIgCAIIgIgFQgFgBgFAAQgGAAgFADQgFADgCAFQgEAFAAAGQAAAHAEAFQACAGAFADQAEADAGAAQAGAAAFgCIAJgFIACAIQgEADgGABQgGACgGAAQgIAAgHgEg");
  this.shape_15.setTransform(196.9, 318.125);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_16.setTransform(191.575, 318.15);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_17.setTransform(186.05, 318.125);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAQAeIAAgZIgPAAIgPAZIgJAAIARgaQgGgBgEgEQgEgEAAgHQAAgFADgEQADgEAEgCQAFgCAFAAIAYAAIAAA7gAgIgUQgDADAAAGQAAAFADADQAEACAFAAIAPAAIAAgVIgPAAQgFAAgEACg");
  this.shape_18.setTransform(179.675, 318.125);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgaAeIgDgBIABgIIACABIADABQAEAAABgDQADgDAAgFIAGgpIAnAAIAAA6IgIAAIAAg0IgYAAIgFAmQAAAHgEAFQgEADgGAAIgFAAg");
  this.shape_19.setTransform(173.3, 318.2);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAHQAAAFgDAEQgDADgEABQAHAAAEAEQAEAEAAAGQAAAGgDADQgDAEgFACQgFACgGAAgAgOAXIAPAAQAHAAAEgCQADgDAAgFQAAgFgEgDQgEgDgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgCABgCIABgEQAAgFgDgDQgEgBgFAAIgNAAg");
  this.shape_20.setTransform(167.775, 318.15);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_21.setTransform(162.175, 318.15);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAHgEAIAAQAHAAAFACQAFABAEADIgCAIIgJgFQgEgBgGAAQgFAAgFADQgFADgCAFQgDAFAAAGQAAAHADAFQACAGAFADQAFADAFAAQAGAAAEgCIAJgFIADAIQgEADgGABQgGACgGAAQgIAAgHgEg");
  this.shape_22.setTransform(157.05, 318.125);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAHAEQAGAEADAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAIAAAGgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_23.setTransform(151.05, 318.125);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAnAnIAAgSIhVAAIAAg7IAJAAIAAA0IAdAAIAAg0IAIAAIAAA0IAdAAIAAg0IAIAAIAAA0IAKAAIAAAZg");
  this.shape_24.setTransform(143.175, 319.025);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgXArIgEgBIACgIIACABIACAAQAFAAAEgCQADgDADgHIAEgJIgag4IAJAAIAUAuIATguIAJAAIgcBEQgDAIgFAEQgFAFgIAAIgDAAg");
  this.shape_25.setTransform(135.075, 319.45);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAGgEAJAAQAGAAAFACQAFABAEADIgCAIIgIgFQgFgBgFAAQgGAAgFADQgFADgCAFQgEAFAAAGQAAAHAEAFQACAGAFADQAFADAFAAQAGAAAFgCIAJgFIACAIQgEADgGABQgGACgGAAQgIAAgGgEg");
  this.shape_26.setTransform(129.75, 318.125);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_27.setTransform(123.4, 318.125);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_28.setTransform(114.35, 318.125);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_29.setTransform(107.6, 318.15);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_30.setTransform(100.675, 318.15);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_31.setTransform(94.025, 318.125);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAHQAAAFgDAEQgDADgEABQAHAAAEAEQAEAEAAAGQAAAGgDADQgDAEgFACQgFACgGAAgAgOAXIAPAAQAHAAAEgCQADgDAAgFQAAgFgEgDQgEgDgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgCABgCIABgEQAAgFgDgDQgEgBgFAAIgNAAg");
  this.shape_32.setTransform(88.325, 318.15);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_33.setTransform(81.7, 318.125);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_34.setTransform(75.825, 318.15);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AAUAeIAAgwIgmAwIgIAAIAAg7IAIAAIAAAvIAmgvIAIAAIAAA7g");
  this.shape_35.setTransform(69.85, 318.15);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_36.setTransform(62.925, 319.025);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_37.setTransform(56.6, 318.125);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAGgDAHAAQAIAAAGAEQAHAEAEAHQAEAHgBAJQABAJgEAGQgEAHgHAEQgGAEgJAAIgHgBQgFgBgDgDQgEgDgDgFIAAAlgAgLgfQgEADgEAFQgDAFAAAHQAAAHADAEQAEAFAEADQAGAEAFAAQAHAAAFgDQAEgDADgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgGAAQgGAAgGADg");
  this.shape_38.setTransform(50.05, 319.325);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AAVAqIgjgmIgIAAIAAAmIgJAAIAAhTIAJAAIAAAmIAIAAIAggmIAKAAIgiApIAlAqg");
  this.shape_39.setTransform(43.3, 316.9);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AAAAFIgIAOIgGgFIAKgMIgPgDIACgIIAPAGIgBgPIAHAAIgCAPIAQgGIACAIIgQADIALAMIgHAFg");
  this.shape_40.setTransform(34.6, 314.55);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAAAFIgIAOIgGgFIALgMIgQgDIACgIIAPAGIgBgPIAHAAIgBAPIAOgGIADAIIgPADIAKAMIgHAFg");
  this.shape_41.setTransform(30.4, 314.55);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AgYAbIgDgBIACgHIACABIACAAQAEAAABgCQACgCAAgFIAFgmIAlAAIAAA2IgIAAIAAgvIgWAAIgEAiQgBAGgDAEQgEAEgFAAIgFgBg");
  this.shape_42.setTransform(60.025, 305.7);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AARAoIAAgsIgiAsIgHAAIAAg2IAHAAIAAArIAigrIAIAAIAAA2gAgLgcQgFgEAAgHIAGAAQAAAFAEACQACACAEAAQAEAAADgCQADgDABgEIAFAAQAAAHgEAEQgFAEgHAAQgHAAgEgEg");
  this.shape_43.setTransform(54, 304.4);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AgSAYQgEgEAAgIQgBgGAEgEQAEgCAJgCQAHgCAPAAIAAgCQAAgGgEgFQgEgEgIAAIgHABIgFADIgFADIgCgHQADgDAGgCIALgCQALAAAFAGQAHAFAAALIAAAiIgIAAIAAgKQgDAFgFADQgGADgGAAQgIAAgGgFgAgCACQgHABgDADQgCACAAAEQAAAFADADQADACAGAAQADABAFgCQAEgCADgDQADgEAAgGIAAgGIgSACg");
  this.shape_44.setTransform(47.5, 305.625);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgDAcIAAgwIgSAAIAAgGIArAAIAAAGIgSAAIAAAwg");
  this.shape_45.setTransform(42.275, 305.65);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgOAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAGgJAJgFQAJgFAKAAQAIAAAHACQAGACAGAEIgDAIQgFgEgGgCQgGgCgHgBQgIABgHAEQgHAEgEAHQgEAHgBAJQABAJAEAIQAEAGAHAFQAHAEAIAAQAIAAAGgDIALgGIADAIQgGAEgHADQgHACgIAAQgKAAgKgFg");
  this.shape_46.setTransform(36.275, 304.5);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAAAFIgGANIgGgFIAJgLIgPgCIADgIIANAGIgBgOIAHAAIgBAOIANgGIACAIIgOACIAKALIgHAFg");
  this.shape_47.setTransform(27.8, 302.35);
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
 }).prototype = getMCSymbolPrototype(lib.snoska, new cjs.Rectangle(23.6, 293.6, 282.29999999999995, 32.69999999999999), null);
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
 p.nominalBounds = new cjs.Rectangle(0, 0, 861, 135);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(27.05, 15.05, 0.5, 0.5);
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
   y: -284.95
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(459.65, 165.05, 8.652, 3);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(25.1, 13.1, 865.1999999999999, 313), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(53, 32, 0.6635, 0.6635);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(53, 32, 532.8, 278.7), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EhNVAbWMAAAg2rMCarAAAMAAAA2rg");
  this.shape.setTransform(495, 175);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 990, 350), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(62, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(62, 0, 412.2, 350.2), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(60, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(60, 0, 412.2, 350.2), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(60, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(60, 0, 412, 350), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EhNVAbWMAAAg2rMCarAAAMAAAA2rg");
  this.shape.setTransform(495, 175);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 990, 350), null);
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
   regY: 156.4,
   x: 126,
   y: 156.4,
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
 p.nominalBounds = new cjs.Rectangle(25, 118, 187.7, 76.80000000000001);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AzgLiIAAk2MAnBAAAIAAE2g");
  mask.setTransform(124.8684, 73.8491);
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
   regY: 162.8,
   x: 111.6,
   y: 162.8,
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
  mask_1.graphics.p("AzgN+IAAk3MAnBAAAIAAE3g");
  mask_1.setTransform(124.8684, 89.3741);
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
   regY: 162.8,
   x: 111.6,
   y: 162.8,
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
  mask_2.graphics.p("AzgQZIAAk3MAnBAAAIAAE3g");
  mask_2.setTransform(124.8684, 104.8991);
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
   regY: 162.8,
   x: 111.6,
   y: 162.8,
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
 p.nominalBounds = new cjs.Rectangle(1, 116.6, 248.8, 93.20000000000002);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Ay2LkIAAkqMAltAAAIAAEqg");
  mask.setTransform(120.7092, 73.9773);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 128.6,
   regY: 161.5,
   x: 111.4,
   y: 161.5,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 113.95,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116.3,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.4,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.35,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 122.1,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.6,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 124.95,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 126.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 127,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.7,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 128.2,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.5,
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
  mask_1.graphics.p("Ay2N5IAAkqMAltAAAIAAEqg");
  mask_1.setTransform(120.7092, 88.8773);
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
   regX: 128.6,
   regY: 161.5,
   x: 111.4,
   y: 161.5,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 113.95,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116.3,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.4,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.35,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 122.1,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.6,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 124.95,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 126.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 127,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.7,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 128.2,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.5,
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
  mask_2.graphics.p("Ay2QNIAAkpMAltAAAIAAEpg");
  mask_2.setTransform(120.7092, 103.7273);
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
   regX: 128.6,
   regY: 161.5,
   x: 111.4,
   y: 161.5,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 113.95,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 116.3,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 118.4,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 120.35,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 122.1,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 123.6,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 124.95,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 126.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 127,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 127.7,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 128.2,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 128.5,
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
  mask_3.graphics.p("AJyQIIAAowIPxAAIAAIwg");
  mask_3.setTransform(163.5234, 103.2106);
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
   regX: 283.5,
   regY: 176.7,
   x: 266.3,
   y: 176.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 268.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 271.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 273.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 275.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 277,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 278.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 279.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 280.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 281.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 282.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 283.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 283.4,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(1, 118.2, 319.7, 89.3);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A7dHrIAAmzMA27AAAIAAGzg");
  mask.setTransform(175.824, 49.1363);
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
   regX: 178.3,
   regY: 74.6,
   x: 161.1,
   y: 74.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 163.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 166,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 168.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 170.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 171.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 173.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 174.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 175.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 176.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 177.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 177.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 178.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 259.5, 98.3);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AyUIWIAAoQMAkpAAAIAAIQg");
  mask.setTransform(117.3477, 53.3535);
  this.instance = new lib.t01();
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
   regX: 86.3,
   regY: 55.8,
   x: 69.1,
   y: 55.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 71.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 74,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 76.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 78.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 79.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 81.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 82.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 83.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 84.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 85.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 85.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 86.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("AyUENIAAoPMAkpAAAIAAIPg");
  mask_1.setTransform(117.3477, 26.8535);
  this.instance_1 = new lib.t01();
  this.instance_1.parent = this;
  this.instance_1.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance_1.alpha = 0;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
   regX: 86.3,
   regY: 55.8,
   x: 69.1,
   y: 55.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 71.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 74,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 76.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 78.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 79.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 81.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 82.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 83.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 84.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 85.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 85.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 86.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(16));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(2.3, 9.3, 154, 87.4);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(77.7926, 171.4422, 1.9922, 1.9922);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(77.8537, 171.3037, 1.9926, 1.9926);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(78.6, 172.15, 1.9933, 1.9933, 0, 0, 0, 22.7, 23.3);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(78.6, 172.15, 1.9933, 1.9933, 0, 0, 0, 22.7, 23.3);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(77.8039, 171.3536, 1.9926, 1.9926);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgOBuIAAi/Ig9AAIAAgcICXAAIAAAcIg8AAIAAC/g");
  this.shape_3.setTransform(324.975, 214.15);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AhGBuIAAjbIBDAAQAYAAAQAJQARAJAIAPQAJAPAAAVQAAASgJAQQgIAQgRAKQgQAKgYAAIgjAAIAABQgAgmADIAeAAQANABAKgFQALgFAGgKQAGgKAAgOQAAgPgGgKQgGgJgLgEQgKgFgNABIgeAAg");
  this.shape_4.setTransform(308.425, 214.15);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BjQgZgOgPgaQgQgZAAgiQAAggAQgaQAOgZAagOQAagPAgAAQAiAAAZAPQAaAOAPAZQAPAaAAAgQAAAhgPAaQgPAZgaAPQgaAOghAAQggAAgagOgAgqhHQgSALgKASQgLATAAAXQAAAYALATQAKATASAKQATALAXAAQAYAAASgLQATgKALgTQAKgTABgYQgBgXgKgTQgLgSgTgLQgSgLgYAAQgXAAgTALg");
  this.shape_5.setTransform(285.05, 214.125);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgOBzIAAgYQgggDgXgLQgXgMgNgTQgNgUAAgaQAAgZANgUQANgTAXgMQAXgLAggDIAAgYIAdAAIAAAYQAgADAXALQAXAMANATQANAUAAAZQAAAagNATQgNAUgXALQgXAMggADIAAAYgAAPBAQAigDATgRQATgRABgbQgBgbgTgQQgTgRgigDgAhDgrQgTAQgBAbQABAbATARQATARAiADIAAh/QgiADgTARg");
  this.shape_6.setTransform(258.475, 214.15);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("ABLBuIAAiwIhABmIgXAAIg/hmIAACwIgfAAIAAjbIAnAAIBDBtIBFhtIAmAAIAADbg");
  this.shape_7.setTransform(231.5, 214.15);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("Ag6BjQgagOgPgaQgPgZAAgiQAAggAPgaQAPgZAagOQAagPAgAAQAhAAAaAPQAaAOAOAZQAQAaAAAgQAAAhgQAaQgOAZgaAPQgaAOghAAQggAAgagOgAgphHQgTALgLASQgKATAAAXQAAAYAKATQALATATAKQASALAXAAQAYAAATgLQASgKAKgTQALgTAAgYQAAgXgLgTQgKgSgSgLQgTgLgYAAQgXAAgSALg");
  this.shape_8.setTransform(204.55, 214.125);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAwBuIhRhiIgVAAIAABiIggAAIAAjbIAgAAIAABhIASAAIBOhhIAkAAIhWBqIBfBxg");
  this.shape_9.setTransform(182.5, 214.175);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("ABFCdIAAjBIiJDBIgiAAIAAj3IAjAAIAADBICIjBIAiAAIAAD3gAgph9QgOgLgBgUIAYAAQABALAJAFQAJAFANAAQAOAAAJgFQAJgFABgLIAYAAQgCAUgOALQgQAMgZAAQgaAAgPgMg");
  this.shape_10.setTransform(318.65, 175.025);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("ABFB8IAAjBIiIDBIgjAAIAAj3IAjAAIAADBICIjBIAiAAIAAD3g");
  this.shape_11.setTransform(291.4, 178.325);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("ABAB8IAAhsIh/AAIAABsIgkAAIAAj3IAkAAIAABsIB/AAIAAhsIAkAAIAAD3g");
  this.shape_12.setTransform(264.475, 178.325);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("ABWB8IAAjHIhJBzIgaAAIhHhzIAADHIgkAAIAAj3IAtAAIBLB7IBNh7IAsAAIAAD3g");
  this.shape_13.setTransform(235.7, 178.325);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("ABEB8IAAjBIiHDBIgjAAIAAj3IAjAAIAADBICHjBIAjAAIAAD3g");
  this.shape_14.setTransform(206.65, 178.325);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("Ag2B2QgWgJgNgNIASgdQALAMARAJQARAIAYAAQAaAAAPgLQAPgMAAgVQABgVgUgLQgUgLgpAAIAAgcQAcAAAQgGQAPgHAGgJQAGgJgBgLQABgQgMgKQgNgJgUAAQgUAAgQAHQgPAHgMAKIgPgbQAOgMAUgHQAUgJAZAAQAlABAWAQQAUAQABAdQAAAXgOAPQgOAPgVAFQAcAFAOAOQAQAPAAAbQAAAWgKAQQgLARgVAJQgUAKgcAAQgggBgWgJg");
  this.shape_15.setTransform(182.3, 178.35);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("ABOCOIgchQIhlAAIgcBQIg3AAIBqkbIA5AAIBqEbgAAjATIgjhlIgkBlIBHAAg");
  this.shape_16.setTransform(315.675, 132.25);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgaCOIAAjsIhLAAIAAgvIDLAAIAAAvIhLAAIAADsg");
  this.shape_17.setTransform(291.5, 132.25);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AhMB/QghgSgTggQgUghAAgsQAAgrAUghQATghAhgRQAigTAqAAQArAAAhATQAiARATAhQATAhABArQgBArgTAhQgTAggiATQghATgrAAQgqAAgigTgAgvhRQgVALgMAWQgLAVAAAbQAAAcALAVQAMAVAVAMQAUANAbAAQAbAAAVgNQAVgMAMgVQAMgVgBgcQABgbgMgVQgMgWgVgLQgVgMgbgBQgbABgUAMg");
  this.shape_18.setTransform(264.55, 132.25);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgaCOIAAhvIhgisIA8AAIBBB7IBCh7IA2AAIhhCsIAABvg");
  this.shape_19.setTransform(236.525, 132.25);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AhLB/QgigSgTggQgUghAAgsQAAgrAUghQASghAjgRQAggTArAAQArAAAiATQAhARATAhQATAhABArQgBArgTAhQgTAgghATQgjATgqAAQgrAAgggTgAgvhRQgVALgMAWQgLAVAAAbQAAAcALAVQAMAVAVAMQAUANAbAAQAbAAAVgNQAVgMALgVQAMgVAAgcQAAgbgMgVQgLgWgVgLQgVgMgbgBQgbABgUAMg");
  this.shape_20.setTransform(208.5, 132.25);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgaCOIAAjsIhLAAIAAgvIDLAAIAAAvIhLAAIAADsg");
  this.shape_21.setTransform(181.6, 132.25);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAoJIABQT");
  this.shape_22.setTransform(157.75, 170.175);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(24.9, 97.8, 310.6, 137.39999999999998), null);
 (lib.right = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(911.65, 14.7, 1.2671, 1.2654);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#00CC00").s().p("AgxAyIAAhjIBjAAIAABjg");
  this.shape.setTransform(45, -15);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(40, -20, 922.7, 67.6), null);
 (lib.fade = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(344).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 990, 350);
 (lib.background = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.instance.setTransform(485, 125, 1, 1, 0, 0, 0, 485, 125);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0, 0, 990, 350), null);
 (lib.arrow = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("ECr2Bs6IAAiKMBEFAAAIAACKg");
  var mask_graphics_1 = new cjs.Graphics().p("ECr2Bs6IAAlPMBEFAAAIAAFPg");
  var mask_graphics_2 = new cjs.Graphics().p("ECr2Bs5IAAoTMBEFAAAIAAITg");
  var mask_graphics_3 = new cjs.Graphics().p("ECr2Bs5IAArYMBEFAAAIAALYg");
  var mask_graphics_4 = new cjs.Graphics().p("ECr2Bs5IAAudMBEFAAAIAAOdg");
  var mask_graphics_5 = new cjs.Graphics().p("ECr2Bs5IAAxiMBEFAAAIAARig");
  var mask_graphics_6 = new cjs.Graphics().p("ECr2Bs5IAA0nMBEFAAAIAAUng");
  var mask_graphics_7 = new cjs.Graphics().p("ECr2Bs5IAA3tMBEFAAAIAAXtg");
  var mask_graphics_8 = new cjs.Graphics().p("ECr2Bs5IAA6yMBEFAAAIAAayg");
  var mask_graphics_9 = new cjs.Graphics().p("ECr2Bs5IAA93MBEFAAAIAAd3g");
  var mask_graphics_10 = new cjs.Graphics().p("ECr2Bs5MAAAgg8MBEFAAAMAAAAg8g");
  var mask_graphics_11 = new cjs.Graphics().p("ECr2Bs5MAAAgkBMBEFAAAMAAAAkBg");
  var mask_graphics_12 = new cjs.Graphics().p("ECr2Bs5MAAAgnGMBEFAAAMAAAAnGg");
  var mask_graphics_13 = new cjs.Graphics().p("ECr2Bs4MAAAgqKMBEFAAAMAAAAqKg");
  var mask_graphics_14 = new cjs.Graphics().p("ECr2Bs4MAAAgtPMBEFAAAMAAAAtPg");
  var mask_graphics_15 = new cjs.Graphics().p("ECr2Bs4MAAAgwUMBEFAAAMAAAAwUg");
  var mask_graphics_16 = new cjs.Graphics().p("ECr2Bs4MAAAgzZMBEFAAAMAAAAzZg");
  var mask_graphics_17 = new cjs.Graphics().p("ECr2Bs4MAAAg2eMBEFAAAMAAAA2eg");
  var mask_graphics_18 = new cjs.Graphics().p("ECr2Bs4MAAAg5jMBEFAAAMAAAA5jg");
  var mask_graphics_19 = new cjs.Graphics().p("ECr2Bs4MAAAg8oMBEFAAAMAAAA8og");
  var mask_graphics_20 = new cjs.Graphics().p("ECr2Bs4MAAAg/tMBEFAAAMAAAA/tg");
  var mask_graphics_21 = new cjs.Graphics().p("ECr2Bs4MAAAhCyMBEFAAAMAAABCyg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 1535.473,
   y: 696.9674
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 1535.473,
   y: 696.958
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 1535.473,
   y: 696.9486
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 1535.473,
   y: 696.9392
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 1535.473,
   y: 696.9298
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 1535.473,
   y: 696.9203
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 1535.473,
   y: 696.9109
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 1535.473,
   y: 696.9015
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 1535.473,
   y: 696.8921
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 1535.473,
   y: 696.8827
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 1535.473,
   y: 696.8733
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 1535.473,
   y: 696.8639
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 1535.473,
   y: 696.8545
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 1535.473,
   y: 696.8451
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 1535.473,
   y: 696.8356
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 1535.473,
   y: 696.8262
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 1535.473,
   y: 696.8168
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 1535.473,
   y: 696.8074
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 1535.473,
   y: 696.798
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 1535.473,
   y: 696.7886
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 1535.473,
   y: 696.7792
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 1535.473,
   y: 696.7698
  }).wait(1));
  this.instance = new lib.arrow1();
  this.instance.parent = this;
  this.instance.setTransform(2775.55, 1112.25, 1, 1, 0, 0, 0, 123.9, 124);
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 3039.7, 1376.8);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t04();
  this.instance.parent = this;
  this.instance.setTransform(21, 99.7, 1, 1, 0, 0, 0, 41, 99.7);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 178.7,
   regY: 171.6,
   x: 161.5,
   y: 171.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 164.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 166.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 168.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 170.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 172.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 173.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 175.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 176.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 177.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 177.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 178.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 178.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(4.9, 97.8, 330.6, 137.39999999999998);
 (lib.left = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1: 69,
   cvr_frame2_1: 149,
   cvr_frame3_2: 273,
   "cvr_frame#4_1": 345,
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
  this.instance_2.alpha = 0;
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(155).to({
   startPosition: 0
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(6));
  this.instance_3 = new lib.snoska("synched", 0, false);
  this.instance_3.parent = this;
  this.instance_3.alpha = 0;
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({
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
  this.instance_4 = new lib.txt05("synched", 0, false);
  this.instance_4.parent = this;
  this.instance_4._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(289).to({
   _off: false
  }, 0).to({
   _off: true
  }, 85).wait(6));
  this.instance_5 = new lib.txt04("synched", 0, false);
  this.instance_5.parent = this;
  this.instance_5._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(209).to({
   _off: false
  }, 0).wait(65).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(6));
  this.instance_6 = new lib.txt03("synched", 0, false);
  this.instance_6.parent = this;
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(170));
  this.instance_7 = new lib.txt02("synched", 0, false);
  this.instance_7.parent = this;
  this.instance_7._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({
   _off: false
  }, 0).wait(80).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_8 = new lib.txt01_1("synched", 0, false);
  this.instance_8.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(274).to({
   startPosition: 29
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_9 = new lib.txt01("synched", 0, false);
  this.instance_9.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_9).to({
   _off: true
  }, 374).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -20, 890.3, 346.3);
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
  this.instance.setTransform(9.55, 28.55, 0.23, 0.23, 0, 0, 0, 41.5, 124.2);
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
  this.instance_1.setTransform(358.95, 346.25, 0.0325, 1, 0, 0, 180, 100, 1.5);
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({
   _off: false
  }, 0).to({
   scaleX: 0.3241,
   x: 452.85
  }, 30, cjs.Ease.get(1)).to({
   _off: true
  }, 315).wait(6));
  this.instance_2 = new lib.red_line();
  this.instance_2.parent = this;
  this.instance_2.setTransform(842.3, 1.65, 0.0398, 1, 0, 0, 0, 100.6, 1.6);
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({
   _off: false
  }, 0).to({
   regX: 100,
   scaleX: 0.9966,
   x: 544.25
  }, 30, cjs.Ease.get(1)).to({
   _off: true
  }, 315).wait(6));
  this.instance_3 = new lib.car_1();
  this.instance_3.parent = this;
  this.instance_3.setTransform(440.2, 113.5, 1, 1, 0, 0, 0, 120.2, 75);
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
  var mask_graphics_0 = new cjs.Graphics().p("EAieAbWMAAAg2rMBAqAAAMAAAA2rg");
  var mask_graphics_1 = new cjs.Graphics().p("EAiYAbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_2 = new cjs.Graphics().p("EAiJAbWMAAAg2rMBAqAAAMAAAA2rg");
  var mask_graphics_3 = new cjs.Graphics().p("EAhuAbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_4 = new cjs.Graphics().p("EAhJAbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_5 = new cjs.Graphics().p("EAgZAbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_6 = new cjs.Graphics().p("AffbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_7 = new cjs.Graphics().p("AeabWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_8 = new cjs.Graphics().p("AdLbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_9 = new cjs.Graphics().p("AbxbWMAAAg2rMBArAAAMAAAA2rg");
  var mask_graphics_10 = new cjs.Graphics().p("AaNbWMAAAg2rMBAqAAAMAAAA2rg");
  var mask_graphics_11 = new cjs.Graphics().p("AYebXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_12 = new cjs.Graphics().p("AWkbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_13 = new cjs.Graphics().p("AUgbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_14 = new cjs.Graphics().p("ASTbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_15 = new cjs.Graphics().p("AQNbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_16 = new cjs.Graphics().p("AORbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_17 = new cjs.Graphics().p("AMebXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_18 = new cjs.Graphics().p("AK0bXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_19 = new cjs.Graphics().p("AJUbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_20 = new cjs.Graphics().p("AH8bXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_21 = new cjs.Graphics().p("AGubXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_22 = new cjs.Graphics().p("AFpbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_23 = new cjs.Graphics().p("AEtbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_24 = new cjs.Graphics().p("AD7bXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_25 = new cjs.Graphics().p("ADRbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_26 = new cjs.Graphics().p("ACxbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_27 = new cjs.Graphics().p("ACabXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_28 = new cjs.Graphics().p("ACMbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_29 = new cjs.Graphics().p("ACIbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_119 = new cjs.Graphics().p("EAieAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_120 = new cjs.Graphics().p("EAiYAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_121 = new cjs.Graphics().p("EAiJAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_122 = new cjs.Graphics().p("EAhuAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_123 = new cjs.Graphics().p("EAhJAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_124 = new cjs.Graphics().p("EAgaAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_125 = new cjs.Graphics().p("AfgbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_126 = new cjs.Graphics().p("AebbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_127 = new cjs.Graphics().p("AdMbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_128 = new cjs.Graphics().p("AbybXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_129 = new cjs.Graphics().p("AaObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_130 = new cjs.Graphics().p("AYfbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_131 = new cjs.Graphics().p("AWlbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_132 = new cjs.Graphics().p("AUhbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_133 = new cjs.Graphics().p("ASTbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_134 = new cjs.Graphics().p("AQVbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_135 = new cjs.Graphics().p("AOgbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_136 = new cjs.Graphics().p("AMzbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_137 = new cjs.Graphics().p("ALObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_138 = new cjs.Graphics().p("AJxbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_139 = new cjs.Graphics().p("AIcbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_140 = new cjs.Graphics().p("AHPbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_141 = new cjs.Graphics().p("AGLbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_142 = new cjs.Graphics().p("AFObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_143 = new cjs.Graphics().p("AEZbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_144 = new cjs.Graphics().p("ADtbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_145 = new cjs.Graphics().p("ADIbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_146 = new cjs.Graphics().p("ACsbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_147 = new cjs.Graphics().p("ACYbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_148 = new cjs.Graphics().p("ACMbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_149 = new cjs.Graphics().p("ACIbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_209 = new cjs.Graphics().p("EAiZAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_210 = new cjs.Graphics().p("EAiTAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_211 = new cjs.Graphics().p("EAiEAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_212 = new cjs.Graphics().p("EAhpAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_213 = new cjs.Graphics().p("EAhFAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_214 = new cjs.Graphics().p("EAgVAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_215 = new cjs.Graphics().p("AfcbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_216 = new cjs.Graphics().p("AeXbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_217 = new cjs.Graphics().p("AdIbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_218 = new cjs.Graphics().p("AbvbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_219 = new cjs.Graphics().p("AaLbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_220 = new cjs.Graphics().p("AYdbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_221 = new cjs.Graphics().p("AWkbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_222 = new cjs.Graphics().p("AUhbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_223 = new cjs.Graphics().p("ASTbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_224 = new cjs.Graphics().p("AQVbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_225 = new cjs.Graphics().p("AOgbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_226 = new cjs.Graphics().p("AMzbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_227 = new cjs.Graphics().p("ALObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_228 = new cjs.Graphics().p("AJxbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_229 = new cjs.Graphics().p("AIcbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_230 = new cjs.Graphics().p("AHPbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_231 = new cjs.Graphics().p("AGLbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_232 = new cjs.Graphics().p("AFObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_233 = new cjs.Graphics().p("AEZbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_234 = new cjs.Graphics().p("ADtbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_235 = new cjs.Graphics().p("ADIbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_236 = new cjs.Graphics().p("ACsbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_237 = new cjs.Graphics().p("ACYbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_238 = new cjs.Graphics().p("ACMbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_239 = new cjs.Graphics().p("ACIbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_289 = new cjs.Graphics().p("EAieAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_290 = new cjs.Graphics().p("EAiYAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_291 = new cjs.Graphics().p("EAiJAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_292 = new cjs.Graphics().p("EAhuAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_293 = new cjs.Graphics().p("EAhJAbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_294 = new cjs.Graphics().p("EAgZAbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_295 = new cjs.Graphics().p("AffbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_296 = new cjs.Graphics().p("AeabXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_297 = new cjs.Graphics().p("AdKbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_298 = new cjs.Graphics().p("AbwbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_299 = new cjs.Graphics().p("AaLbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_300 = new cjs.Graphics().p("AYcbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_301 = new cjs.Graphics().p("AWibXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_302 = new cjs.Graphics().p("AUdbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_303 = new cjs.Graphics().p("ASObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_304 = new cjs.Graphics().p("AQRbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_305 = new cjs.Graphics().p("AOcbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_306 = new cjs.Graphics().p("AMwbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_307 = new cjs.Graphics().p("ALLbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_308 = new cjs.Graphics().p("AJvbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_309 = new cjs.Graphics().p("AIabXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_310 = new cjs.Graphics().p("AHObXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_311 = new cjs.Graphics().p("AGJbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_312 = new cjs.Graphics().p("AFNbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_313 = new cjs.Graphics().p("AEZbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_314 = new cjs.Graphics().p("ADsbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_315 = new cjs.Graphics().p("ADIbXMAAAg2tMBArAAAMAAAA2tg");
  var mask_graphics_316 = new cjs.Graphics().p("ACsbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_317 = new cjs.Graphics().p("ACYbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_318 = new cjs.Graphics().p("ACMbXMAAAg2tMBAqAAAMAAAA2tg");
  var mask_graphics_319 = new cjs.Graphics().p("ACIbXMAAAg2tMBAqAAAMAAAA2tg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 634.4244,
   y: 174.9805
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 633.8953,
   y: 174.9794
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 632.308,
   y: 174.976
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 629.6624,
   y: 174.9703
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 625.9586,
   y: 174.9623
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 621.1965,
   y: 174.952
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 615.3762,
   y: 174.9395
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 608.4977,
   y: 174.9247
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 600.561,
   y: 174.9075
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 591.566,
   y: 174.8882
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 581.5127,
   y: 174.8665
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 570.4013,
   y: 174.8425
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 558.2316,
   y: 174.8163
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 545.0037,
   y: 174.7878
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 530.9244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 517.5844,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 505.1644,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 493.6644,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 483.0844,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 473.4244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 464.6844,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 456.8644,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 449.9644,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 443.9844,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 438.9244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 434.7844,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 431.5644,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 429.2644,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 427.8844,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 427.4244,
   y: 175.1072
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 634.4244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 633.8964,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 632.3122,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 629.6719,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 625.9755,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 621.2229,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 615.4142,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 608.5494,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 600.6285,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 591.6515,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 581.6183,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 570.529,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 558.3836,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 545.1821,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 530.9244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 518.3912,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 506.6666,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 495.7506,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 485.6432,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 476.3444,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 467.8541,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 460.1725,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 453.2994,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 447.235,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 441.9791,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 437.5319,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 433.8932,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 431.0631,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 429.0416,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 427.8287,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 427.4244,
   y: 175.1072
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 633.9244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 633.3989,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 631.8224,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 629.1948,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 625.5163,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 620.7867,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 615.0061,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 608.1744,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 600.2918,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 591.3581,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 581.3734,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 570.3377,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 558.251,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 545.1132,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 530.9244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 518.3912,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 506.6666,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 495.7506,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 485.6432,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 476.3444,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 467.8541,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 460.1725,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 453.2994,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 447.235,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 441.9791,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 437.5319,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 433.8932,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 431.0631,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 429.0416,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 427.8287,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 427.4244,
   y: 175.1072
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 634.4244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 633.8938,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 632.302,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 629.6489,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 625.9346,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 621.1591,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 615.3224,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 608.4244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 600.4653,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 591.4448,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 581.3632,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 570.2204,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 558.0163,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 544.751,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 530.4244,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 517.9518,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 506.2838,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 495.4205,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 485.3619,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 476.108,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 467.6588,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 460.0143,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 453.1744,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 447.1393,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 441.9088,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 437.483,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 433.8619,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 431.0455,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 429.0338,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 427.8268,
   y: 175.1072
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 427.4244,
   y: 175.1072
  }).wait(55).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(6));
  this.instance_4 = new lib.bg1();
  this.instance_4.parent = this;
  this.instance_4.setTransform(531.65, 197, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_5.setTransform(531.6, 196.9, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_6.setTransform(531, 198, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_7.setTransform(531.65, 197, 1, 1, 0, 0, 0, 150, 197);
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
 p.nominalBounds = new cjs.Rectangle(0, -20, 990, 370.2);
 (lib.Toyota_100Px350_990 = function(mode, startPosition, loop) {
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
  mask.graphics.p("EhNVAbWMAAAg2rMCarAAAMAAAA2rg");
  mask.setTransform(495, 175);
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
 p.nominalBounds = new cjs.Rectangle(495, 175, 495, 175);
 lib.properties = {
  id: 'E3CCC2B2DA6EFF40AA7B189F6C5C7189',
  width: 990,
  height: 350,
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