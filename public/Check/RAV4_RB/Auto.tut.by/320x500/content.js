(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 532, 498);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 532, 498);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 532, 498);
 (lib.car = function() {
  this.initialize(img.car);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 606, 448);
 (lib.style = function() {
  this.initialize(img.style);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 184, 51);

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
  this.shape.setTransform(222.2, 122.2, 1.2083, 1.2082, 0, 0, 0, 0.3, 0.2);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(221.75, 123.4, 1.2083, 1.2082, 0, 0, 0, 0.2, 0.3);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(140.5, 86, 162.10000000000002, 74.19999999999999), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhIIgbBIIA2AAg");
  this.shape.setTransform(189.075, 177.1);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAARQAAALgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgOQAAgNgIgGQgIgIgOAAIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgIQgIgHgPAAIgaAAg");
  this.shape_1.setTransform(176.125, 177.1);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgpBGQgSgLgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSALQgTAKgXAAQgWAAgTgKgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAPAPAIQAOAJASgBQATABAOgJQAPgIAIgPQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_2.setTransform(159.975, 177.1);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AggBKQgOgGgIgJIAIgOIAMAKQAGAFAJACQAIADALABQARAAALgJQAKgIABgPQAAgQgOgHQgNgIgaABIAAgOQASAAAKgEQALgFAEgHQAEgGgBgHQAAgMgIgHQgJgGgPAAQgMAAgKAEQgKAFgHAGIgIgNQAJgHAMgFQAMgFAPgBQAOABALAFQALAEAGAIQAGAJAAAMQAAAPgJAJQgJAKgOADQASACAKAJQAKAKAAARQAAAOgHAKQgGAKgMAHQgNAFgRAAQgTAAgNgGg");
  this.shape_3.setTransform(144.325, 177.1);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgqBOQgGgBgGgDIAFgOQAEACAEABIALABQAJAAAHgFQAGgGAFgLIg+h4IASAAIAzBnIAshnIASAAIg1B3IgKAUQgEAIgJAFQgHAFgNAAIgMgBg");
  this.shape_4.setTransform(132.2, 177.225);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAmBOIhAhIIgOAAIAABIIgRAAIAAibIARAAIAABGIANAAIA7hGIATAAIhABMIBHBPg");
  this.shape_5.setTransform(120.05, 177.1);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_6.setTransform(99.325, 177.1);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAvBiIAAiBIhdCBIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbgAgXhOQgJgGgBgNIANAAQAAAIAGADQAGADAJAAQAJAAAFgDQAGgDABgIIAMAAQgBANgJAGQgJAGgPAAQgPAAgIgGg");
  this.shape_7.setTransform(83.175, 175.075);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhIIgbBIIA2AAg");
  this.shape_8.setTransform(68.025, 177.1);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AggBKQgOgGgIgJIAIgOIAMAKQAGAFAJACQAIADALABQARAAALgJQAKgIABgPQAAgQgOgHQgNgIgaABIAAgOQASAAAKgEQALgFAEgHQAEgGgBgHQAAgMgIgHQgJgGgPAAQgMAAgKAEQgKAFgHAGIgIgNQAJgHAMgFQAMgFAPgBQAOABALAFQALAEAGAIQAGAJAAAMQAAAPgJAJQgJAKgOADQASACAKAJQAKAKAAARQAAAOgHAKQgGAKgMAHQgNAFgRAAQgTAAgNgGg");
  this.shape_9.setTransform(54.625, 177.1);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAvBOIAAiCIhdCCIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbg");
  this.shape_10.setTransform(40.575, 177.1);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_11.setTransform(25.025, 178.925);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAvBiIAAiBIhdCBIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbgAgXhOQgJgGgBgNIANAAQAAAIAGADQAGADAJAAQAJAAAFgDQAGgDABgIIAMAAQgBANgJAGQgJAGgPAAQgPAAgIgGg");
  this.shape_12.setTransform(166.925, 147.625);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AA7BOIAAibIAQAAIAACbgAhLBOIAAibIARAAIAABDIAjAAQAZgBAMALQANAMAAAUQgBAOgFAKQgGAKgLAGQgKAGgRAAgAg6A/IAhAAQARAAAJgIQAJgIAAgPQgBgPgJgHQgIgHgRAAIghAAg");
  this.shape_13.setTransform(149.25, 149.65);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_14.setTransform(131.775, 149.65);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgHBOIAAiNIgsAAIAAgOIBnAAIAAAOIgrAAIAACNg");
  this.shape_15.setTransform(118.45, 149.65);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_16.setTransform(107.325, 149.65);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAASQAAAKgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgNQAAgOgIgGQgIgIgOABIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgHQgIgIgPAAIgaAAg");
  this.shape_17.setTransform(95.075, 149.65);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA1BgIAAgkIh5AAIAAibIARAAIAACMIBVAAIAAiMIAQAAIAACMIATAAIAAAzg");
  this.shape_18.setTransform(80.9, 151.475);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAsBOIgshCIgsBCIgSAAIA1hOIgzhNIATAAIAqBAIAqhAIASAAIg0BMIA2BPg");
  this.shape_19.setTransform(65.25, 149.65);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgqBOQgGgBgGgDIAFgOQAEACAEABIALABQAJAAAGgFQAGgGAGgLIg9h4IARAAIAzBnIAshnIARAAIg0B3IgKAUQgEAIgJAFQgIAFgMAAIgMgBg");
  this.shape_20.setTransform(51.9, 149.775);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAASQAAAKgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgNQAAgOgIgGQgIgIgOABIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgHQgIgIgPAAIgaAAg");
  this.shape_21.setTransform(39.325, 149.65);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_22.setTransform(25.025, 151.475);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAvBiIAAiBIhdCBIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbgAgXhOQgJgGgBgNIANAAQAAAIAGADQAGADAJAAQAJAAAFgDQAGgDABgIIAMAAQgBANgJAGQgJAGgPAAQgPAAgIgGg");
  this.shape_23.setTransform(197.325, 120.175);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AA7BOIAAibIAQAAIAACbgAhLBOIAAibIARAAIAABCIAjAAQAYAAANALQANAMAAAUQAAAOgGAKQgFAKgMAGQgKAGgRAAgAg6A/IAhAAQARAAAJgIQAIgIABgPQgBgPgJgHQgJgHgQAAIghAAg");
  this.shape_24.setTransform(179.65, 122.2);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_25.setTransform(162.175, 122.2);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgyBOIAAibIAQAAIAABCIAjAAQAZAAAMALQANAMAAAUQAAAOgFAKQgGAKgLAGQgMAGgQAAgAgiA/IAhAAQARAAAJgIQAJgIAAgPQgBgPgIgHQgKgHgQAAIghAAg");
  this.shape_26.setTransform(148.45, 122.2);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("Ag3BOIgGgCIADgPIAFACIAFABQAGAAADgFQADgFABgKIAMh6IBVAAIAACbIgRAAIAAiMIg1AAIgLBwQgBAPgHAHQgGAIgNAAIgJgBg");
  this.shape_27.setTransform(133.325, 122.275);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_28.setTransform(121.775, 122.2);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgHBOIAAiNIgsAAIAAgOIBnAAIAAAOIgrAAIAACNg");
  this.shape_29.setTransform(110.15, 122.2);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAvBOIAAiCIhdCCIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbg");
  this.shape_30.setTransform(96.575, 122.2);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AggBKQgOgGgIgJIAIgOIAMAKQAGAFAJACQAIADALABQARAAALgJQAKgIABgPQAAgQgOgHQgNgIgaABIAAgOQASAAAKgEQALgFAEgHQAEgGgBgHQAAgMgIgHQgJgGgPAAQgMAAgKAEQgKAEgHAHIgIgNQAJgHAMgFQAMgFAPgBQAOABALAFQALAEAGAIQAGAJAAAMQAAAPgJAJQgJAKgOADQASACAKAJQAKAKAAARQAAAOgHAKQgGAKgMAHQgNAFgRAAQgTAAgNgGg");
  this.shape_31.setTransform(81.975, 122.2);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhIIgbBIIA2AAg");
  this.shape_32.setTransform(69.125, 122.2);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgvBOIAAibIArAAQAQAAAMAGQAMAFAGALQAGALAAAPQAAANgGAMQgGAJgMAIQgMAGgQAAIgbAAIAAA7gAgfAFIAaAAQAKAAAIgEQAIgDAFgIQAFgIAAgLQAAgMgFgIQgFgHgIgDQgIgEgKAAIgaAAg");
  this.shape_33.setTransform(56.7, 122.2);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AA7BOIAAibIARAAIAACbgAhLBOIAAibIARAAIAABCIAjAAQAZAAAMALQAMAMAAAUQABAOgGAKQgFAKgLAGQgLAGgRAAgAg6A/IAhAAQARAAAJgIQAIgIABgPQgBgPgJgHQgJgHgQAAIghAAg");
  this.shape_34.setTransform(40.5, 122.2);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAARQAAALgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgNQAAgOgIgGQgIgIgOAAIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgIQgIgHgPAAIgaAAg");
  this.shape_35.setTransform(25.075, 122.2);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(15.8, 102.4, 201.6, 90.19999999999999), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape.setTransform(154.025, 182.85);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAvBOIAAiCIhdCCIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbg");
  this.shape_1.setTransform(138.075, 182.85);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AglAHIAAgNIBLAAIAAANg");
  this.shape_2.setTransform(125.55, 184.675);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_3.setTransform(113.825, 184.675);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAvBiIAAiBIhdCBIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbgAgXhOQgJgGgBgNIANAAQAAAIAGADQAGADAJAAQAJAAAFgDQAGgDABgIIAMAAQgBANgJAGQgJAGgPAAQgPAAgIgGg");
  this.shape_4.setTransform(98.975, 180.825);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_5.setTransform(85.275, 182.85);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgvBOIAAibIArAAQARAAAMAGQALAFAGAMQAGAKAAAPQAAANgGAMQgGAJgLAIQgMAGgRAAIgbAAIAAA7gAgfAFIAZAAQAKAAAJgEQAIgDAFgIQAFgIAAgLQAAgMgFgIQgFgHgIgEQgJgDgKAAIgZAAg");
  this.shape_6.setTransform(73.75, 182.85);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgHBOIAAiNIgsAAIAAgOIBnAAIAAAOIgrAAIAACNg");
  this.shape_7.setTransform(61.9, 182.85);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgpBGQgSgLgLgRQgKgTAAgXQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKARAAAXQAAAXgKATQgLARgSALQgTAKgXAAQgWAAgTgKgAggg3QgPAIgIAOQgIAPAAASQAAASAIAPQAIAOAPAJQAOAJASgBQATABAOgJQAPgJAIgOQAJgPAAgSQAAgSgJgPQgIgOgPgIQgOgJgTAAQgSAAgOAJg");
  this.shape_8.setTransform(42.675, 182.85);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AArBOIAAiNIhVAAIAACNIgRAAIAAibIB3AAIAACbg");
  this.shape_9.setTransform(25.725, 182.85);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AA0BVIhmiNIAACNIgSAAIAAipIASAAIBlCNIAAiNIASAAIAACpg");
  this.shape_10.setTransform(212.45, 123.475);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgIBVIAAhEIg8hlIATAAIAyBUIAxhUIATAAIg8BlIAABEg");
  this.shape_11.setTransform(196.75, 123.475);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("Ag2BVIAAipIAwAAQAXAAANAMQAOALAAAUQAAAMgGAKQgFAJgNAHQAQADAKAKQAJALAAAQQAAAPgHALQgFAKgNAGQgLAGgRAAgAgjBFIAkAAQARAAAKgJQAJgIAAgPQAAgPgJgHQgJgIgPAAIgnAAgAgjgHIAeAAQAJAAAHgFQAIgEADgHQAFgIAAgIQgBgOgIgHQgKgIgPAAIgcAAg");
  this.shape_12.setTransform(183.45, 123.475);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AhhDaQgjghgOg4QgOg5ABhGQAAhHANg5QAPg5AighQAjgjA+AAQA/AAAjAjQAjAhAOA5QAOA5gBBHQAABGgOA5QgOA4gjAiQgjAgg+ABQg+AAgjgigAhFivQgYAcgIAuQgHAvAAA4QAAA4AHAtQAIAuAYAcQAYAcAtAAQAvAAAXgdQAYgbAIgvQAIgugBg3QABg3gJgvQgIgugXgcQgYgdguAAQgtAAgYAdg");
  this.shape_13.setTransform(151.0475, 139.05);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AhhDaQgjghgOg4QgOg5ABhGQAAhHANg5QAPg5AighQAjgjA+AAQA/AAAjAjQAjAhAOA5QAOA5gBBHQAABGgOA5QgOA4gjAiQgjAgg+ABQg+AAgjgigAhFivQgYAcgIAuQgHAvAAA4QAAA4AHAtQAIAuAYAcQAYAcAtAAQAvAAAXgdQAYgbAIgvQAIgugBg3QABg3gJgvQgIgugXgcQgYgdguAAQgtAAgYAdg");
  this.shape_14.setTransform(112.8975, 139.05);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AhODjQgmgYgYguQgXgvAAhGQgBg7ARg0QAPg0AjgpQAigoA4gWQA2gXBPAAIALArQhUAAg1AaQg0AagbAsQgbAugHA6QAVgbAhgRQAhgSAqAAQArABAiATQAhAUATAjQATAjABAvQgBAsgVAlQgUAlgkAVQgjAVgtABQguAAgngXgAgugOQgZALgRARQgTASgJAVQACAzAQAiQARAiAbARQAbAQAgABQAhgBAZgPQAYgQAOgaQAOgZABgiQgBgigNgaQgNgagYgOQgZgOggAAQgdAAgZALg");
  this.shape_15.setTransform(74.6993, 139.25);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AhHDzQgdgKgWgQQgWgPgOgTIAagqQAXAdAeASQAfASArAAQAzAAAfgcQAegbABguQAAgigTgWQgSgWghgLQgggKgpAAIAAgqQAqgBAbgOQAcgOAMgVQAOgVAAgYQgBghgXgUQgXgUgpgBQgnABgeAQQgdARgWAXIgYgqQAQgPAVgOQAVgOAbgJQAbgJAhAAQApAAAeAPQAfAOARAbQARAaAAAiQAAAogYAeQgYAegvAPQA6AOAdAgQAeAhAAAxQgBApgUAhQgVAgglATQglATgwAAQgkAAgegJg");
  this.shape_16.setTransform(36.175, 139.075);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgpBFQgSgKgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSAKQgTALgXAAQgWAAgTgLgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAPAPAIQAOAJASgBQATABAOgJQAPgIAIgPQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_17.setTransform(239.575, 93.85);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_18.setTransform(223.175, 95.675);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhIIgbBIIA2AAg");
  this.shape_19.setTransform(204.725, 93.85);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_20.setTransform(190.575, 95.675);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgpBFQgSgKgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSAKQgTALgXAAQgWAAgTgLgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAPAPAIQAOAJASgBQATABAOgJQAPgIAIgPQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_21.setTransform(174.675, 93.85);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgqBOIAAibIBVAAIAAAPIhFAAIAACMg");
  this.shape_22.setTransform(161.175, 93.85);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AA7BOIAAibIAQAAIAACbgAhLBOIAAibIARAAIAABCIAjAAQAZAAAMALQANAMAAAUQgBAOgFAKQgGAKgLAGQgKAGgRAAgAg6A/IAhAAQARAAAJgIQAJgIAAgPQgBgPgJgHQgIgHgRAAIghAAg");
  this.shape_23.setTransform(145.65, 93.85);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAASQAAAKgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgOQAAgNgIgGQgIgIgOABIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgIQgIgHgPAAIgaAAg");
  this.shape_24.setTransform(130.425, 93.85);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_25.setTransform(113.175, 93.85);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgvBOIAAibIArAAQARAAAMAGQALAFAGALQAGALAAAPQAAANgGAMQgGAJgLAIQgMAGgRAAIgbAAIAAA7gAgfAFIAZAAQAKAAAJgEQAIgDAFgIQAFgIAAgLQAAgMgFgIQgFgHgIgDQgJgEgKAAIgZAAg");
  this.shape_26.setTransform(101.65, 93.85);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgyBOIAAibIBSAAIAAAPIhCAAIAAAzIAjAAQAZAAAMALQANAMAAAUQAAAOgFAKQgGAKgLAGQgMAGgQAAgAgiA/IAhAAQARAAAJgIQAJgIAAgPQgBgPgIgHQgKgHgQAAIghAAg");
  this.shape_27.setTransform(89.4, 93.85);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAmBOIAAhBIgdAAIgCAAIgCAAIgnBBIgTAAIArhFQgOgFgHgLQgHgKgBgPQABgVANgMQANgMAWAAIAsAAIAACbgAgEg8QgIADgFAHQgFAHAAALQAAALAFAIQAEAHAIADQAGACAJAAIAcAAIAAg+IgbAAIgCAAQgIAAgFADg");
  this.shape_28.setTransform(75.225, 93.85);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgpBFQgSgKgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSAKQgTALgXAAQgWAAgTgLgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAPAPAIQAOAJASgBQATABAOgJQAPgIAIgPQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_29.setTransform(60.375, 93.85);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_30.setTransform(43.325, 93.85);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAASQAAAKgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgOQAAgNgIgGQgIgIgOABIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgIQgIgHgPAAIgaAAg");
  this.shape_31.setTransform(24.775, 93.85);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(14.5, 74, 414.5, 124.4), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(64, 34, 0.5, 0.4996);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(64, 34, 92, 25.5), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AALBVIAAghIhJAAIAAgVIBKhzIAeAAIAABuIAVAAIAAAaIgVAAIAAAhgAgfAaIAqAAIAAhDg");
  this.shape.setTransform(70.625, 55.175);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgRBVIg9ipIAjAAIArCDIAtiDIAiAAIg9Cpg");
  this.shape_1.setTransform(56.325, 55.175);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAvBVIgRgwIg8AAIgRAwIghAAIBAipIAhAAIBACpgAAVAMIgVg9IgVA9IAqAAg");
  this.shape_2.setTransform(40.525, 55.175);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAbBVIgnhCIgUAAIAABCIghAAIAAipIA8AAQARAAANAGQAMAHAHALQAHALAAAPQAAAQgJAMQgIAMgPAHIAvBIgAgggGIAWAAQAHAAAGgDQAGgCAEgGQAEgGAAgJQgBgNgHgGQgIgGgLAAIgWAAg");
  this.shape_3.setTransform(25.625, 55.175);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAvBVIgRgwIg8AAIgRAwIghAAIBAipIAhAAIBACpgAAVAMIgVg9IgVA9IAqAAg");
  this.shape_4.setTransform(104.025, 26.975);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgPBVIAAiNIgtAAIAAgcIB5AAIAAAcIgtAAIAACNg");
  this.shape_5.setTransform(89.525, 26.975);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgtBNQgUgLgLgUQgMgUAAgaQAAgZAMgUQALgUAUgKQAUgLAZgBQAaABAUALQAUAKALAUQAMAUAAAZQAAAagMAUQgLATgUALQgUALgaABQgZAAgUgLgAgcgxQgMAIgIANQgGAMgBAQQABARAGANQAIAMAMAIQANAHAPAAQAQAAANgHQAMgIAIgMQAGgNABgRQgBgQgGgMQgIgNgMgIQgNgHgQAAQgPAAgNAHg");
  this.shape_6.setTransform(73.35, 26.975);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgPBVIAAhCIg5hnIAjAAIAnBJIAnhJIAhAAIg6BnIAABCg");
  this.shape_7.setTransform(56.55, 26.975);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgtBNQgUgLgLgUQgMgUgBgaQABgZAMgUQALgUAUgKQAUgLAZgBQAZABAVALQAUAKAMAUQALAUAAAZQAAAagLAUQgMATgUALQgVALgZABQgZAAgUgLgAgcgxQgMAIgHANQgIAMABAQQgBARAIANQAHAMAMAIQAMAHAQAAQAQAAANgHQAMgIAIgMQAGgNAAgRQAAgQgGgMQgIgNgMgIQgNgHgQAAQgQAAgMAHg");
  this.shape_8.setTransform(39.75, 26.975);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgPBVIAAiNIgtAAIAAgcIB5AAIAAAcIgtAAIAACNg");
  this.shape_9.setTransform(23.625, 26.975);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(15, 5.5, 181.5, 66.4), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
  this.shape.setTransform(209.675, 584.225);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgCAaIAVgaIgVgZIAKAAIAWAZIgWAagAgdAaIAXgaIgXgZIALAAIAVAZIgVAag");
  this.shape_1.setTransform(204.775, 581.35);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAaAhIAAhBIAJAAIAABBgAgiAhIAAhBIAJAAIAAAcIASAAQAKAAAGAEQAGAEAAAJQAAAHgDAEQgDAEgFACQgEADgGAAgAgZAaIASAAQAHAAADgEQADgDAAgFQAAgGgEgDQgDgDgIAAIgQAAg");
  this.shape_2.setTransform(197.025, 581.475);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AggAvIAAhcIAJAAIAAANQAEgHAIgEQAGgDAGAAQAKAAAHAEQAHAFAEAIQAEAHAAAKQAAAJgEAIQgEAHgIAFQgHAEgJAAQgEAAgFgCQgEgBgEgDQgEgEgDgEIAAAogAgLgiQgGADgDAFQgEAHAAAHQABAHADAFQADAFAGAEQAFADAGAAQAHAAAGgDQAEgEADgFQAEgEAAgIQgBgHgCgGQgDgGgFgDQgFgEgIABQgFgBgGAEg");
  this.shape_3.setTransform(188.7, 582.8);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgPAdQgHgEgEgIQgEgIAAgJQAAgJAEgHQAEgIAHgFQAIgEAIAAQAJAAAHAEQAHAFAEAHQADAIAAAJIAAABIg0AAQAAALAHAHQAHAHAKgBQAIAAAGgCQAGgDAEgEIACAIQgEAEgHADQgHADgJAAQgJAAgIgFgAAWgFQgBgHgDgDQgCgFgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAGIArAAIAAAAg");
  this.shape_4.setTransform(180.775, 581.5);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgZAhIAAhBIAYAAQALABAFAEQAGAEAAAHQgBAGgDAEQgDAEgEABQAHABAEADQAFAEAAAHQAAAHgEAEQgDAEgFACQgFACgHAAgAgQAaIARAAQAIAAADgEQAEgDAAgFQAAgGgEgDQgEgDgIAAIgQAAgAgQgEIAPAAQAEAAADgBQADgCABgCIACgFQAAgFgEgDQgDgCgGAAIgPAAg");
  this.shape_5.setTransform(174.075, 581.475);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgRAeQgIgFgDgHQgFgIAAgKQAAgJAFgIQADgHAIgFQAIgEAJAAQAKAAAIAEQAIAFAEAHQAEAIAAAJQAAAKgEAIQgEAHgIAFQgIAEgKAAQgJAAgIgEgAgMgVQgFADgDAFQgEAHAAAGQAAAHAEAGQADAGAFADQAGADAGAAQAIAAAFgDQAFgEAEgFQADgFAAgIQAAgGgDgHQgEgFgFgDQgFgEgIABQgGgBgGAEg");
  this.shape_6.setTransform(166.55, 581.5);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgMAeQgHgEgEgIQgEgIAAgKQAAgJAEgIQAFgHAGgFQAIgEAJAAQAHAAAGACIAKAFIgEAIQgDgDgGgCQgEgBgGAAQgGAAgFACQgFAEgEAFQgCAGgBAHQAAAHADAGQADAGAGADQAFADAFAAIAMgCQAFgCAFgDIACAJQgEADgGABQgHADgHAAQgIAAgIgEg");
  this.shape_7.setTransform(159.5, 581.5);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgLAeQgIgEgEgIQgEgIAAgKQAAgJAEgIQAEgHAIgFQAHgEAJAAQAHAAAGACIAJAFIgCAIQgFgDgEgCQgFgBgFAAQgHAAgGACQgEAEgEAFQgDAGAAAHQAAAHADAGQADAGAFADQAGADAGAAIALgCQAGgCAEgDIACAJQgEADgGABQgGADgIAAQgJAAgGgEg");
  this.shape_8.setTransform(153.05, 581.5);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgRAeQgIgFgDgHQgFgIAAgKQAAgJAFgIQADgHAIgFQAIgEAJAAQAKAAAIAEQAIAFAEAHQAEAIAAAJQAAAKgEAIQgEAHgIAFQgIAEgKAAQgJAAgIgEgAgMgVQgFADgDAFQgEAHAAAGQAAAHAEAGQADAGAFADQAGADAGAAQAIAAAFgDQAFgEAEgFQADgFAAgIQAAgGgDgHQgEgFgFgDQgFgEgIABQgGgBgGAEg");
  this.shape_9.setTransform(145.85, 581.5);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AggAvIAAhcIAJAAIAAANQAEgHAIgEQAGgDAGAAQAKAAAHAEQAHAFAEAIQAEAHAAAKQAAAJgEAIQgEAHgIAFQgHAEgJAAQgEAAgFgCQgEgBgEgDQgEgEgDgEIAAAogAgLgiQgGADgDAFQgEAHAAAHQAAAHAEAFQADAFAGAEQAFADAGAAQAHAAAFgDQAGgEACgFQAEgEAAgIQAAgHgDgGQgDgGgFgDQgFgEgIABQgFgBgGAEg");
  this.shape_10.setTransform(138.2, 582.8);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAOAhIgbgfIgDAAIAAAfIgJAAIAAhBIAJAAIAAAcIADAAIAagcIAMAAIgfAfIAgAig");
  this.shape_11.setTransform(131.25, 581.475);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgPAdQgHgEgEgIQgEgIAAgJQAAgJAEgHQAEgIAHgFQAIgEAIAAQAJAAAHAEQAHAFAEAHQADAIAAAJIAAABIg0AAQAAALAHAHQAHAHAKgBQAIAAAGgCQAGgDAEgEIACAIQgEAEgHADQgHADgJAAQgJAAgIgFgAAWgFQgBgHgDgDQgCgFgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAGIArAAIAAAAg");
  this.shape_12.setTransform(120.925, 581.5);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAaAhIAAhBIAJAAIAABBgAgiAhIAAhBIAJAAIAAAcIASAAQAKAAAGAEQAGAEAAAJQAAAHgDAEQgDAEgFACQgEADgGAAgAgZAaIASAAQAHAAADgEQADgDAAgFQAAgGgEgDQgDgDgIAAIgQAAg");
  this.shape_13.setTransform(112.725, 581.475);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AATAhIAAgdIglAAIAAAdIgJAAIAAhBIAJAAIAAAdIAlAAIAAgdIAJAAIAABBg");
  this.shape_14.setTransform(104.3, 581.475);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAbAqIAAgTIg1AAIAAATIgJAAIAAgbIAEAAQAFAAADgEQACgEABgIIAFgoIApAAIAAA4IAKAAIAAAbgAgKAAIgCAJQgCAEgCACIAhAAIAAgwIgYAAg");
  this.shape_15.setTransform(96.675, 582.425);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgRAeQgHgFgFgHQgEgIAAgKQAAgJAEgIQAFgHAHgFQAIgEAJAAQAKAAAIAEQAIAFAEAHQAEAIAAAJQAAAKgEAIQgEAHgIAFQgIAEgKAAQgJAAgIgEgAgMgVQgGADgDAFQgDAHAAAGQAAAHADAGQADAGAGADQAFADAHAAQAIAAAFgDQAGgEADgFQADgFAAgIQAAgGgDgHQgDgFgGgDQgFgEgIABQgHgBgFAEg");
  this.shape_16.setTransform(89.1, 581.5);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgZAhIAAhBIAYAAQALABAFAEQAGAEAAAHQgBAGgDAEQgDAEgEABQAHABAEADQAFAEAAAHQAAAHgEAEQgDAEgFACQgFACgHAAgAgQAaIARAAQAIAAADgEQAEgDAAgFQAAgGgEgDQgEgDgIAAIgQAAgAgQgEIAPAAQAEAAADgBQADgCABgCIACgFQAAgFgEgDQgDgCgGAAIgPAAg");
  this.shape_17.setTransform(82.125, 581.475);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAVAhIAAg0IgpA0IgJAAIAAhBIAJAAIAAA0IApg0IAJAAIAABBg");
  this.shape_18.setTransform(74.475, 581.475);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AggAvIAAhcIAJAAIAAANQAFgHAGgEQAHgDAHAAQAJAAAHAEQAHAFAEAIQAEAHAAAKQAAAJgEAIQgEAHgHAFQgIAEgJAAQgDAAgFgCQgFgBgEgDQgEgEgDgEIAAAogAgLgiQgGADgDAFQgDAHAAAHQAAAHACAFQAEAFAFAEQAGADAGAAQAHAAAFgDQAFgEAEgFQACgEAAgIQABgHgDgGQgDgGgFgDQgGgEgGABQgHgBgFAEg");
  this.shape_19.setTransform(66.7, 582.8);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AATAhIAAg5IglAAIAAA5IgJAAIAAhBIA3AAIAABBg");
  this.shape_20.setTransform(58.525, 581.475);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgRAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgHAHgFQAIgEAJAAQAKAAAIAEQAHAFAFAHQAEAIAAAJQAAAKgEAIQgFAHgHAFQgIAEgKAAQgJAAgIgEgAgMgVQgFADgDAFQgEAHAAAGQAAAHAEAGQADAGAFADQAFADAHAAQAHAAAGgDQAFgEAEgFQADgFAAgIQAAgGgDgHQgEgFgFgDQgGgEgHABQgHgBgFAEg");
  this.shape_21.setTransform(50.8, 581.5);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AATAhIAAgdIglAAIAAAdIgJAAIAAhBIAJAAIAAAdIAlAAIAAgdIAJAAIAABBg");
  this.shape_22.setTransform(43.05, 581.475);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgdAhIgDgCIACgIIADABIADABQADAAACgDQACgDABgGIAFgtIAsAAIAABAIgJAAIAAg4IgbAAIgEAoQgBAJgFAEQgEAEgGAAIgGAAg");
  this.shape_23.setTransform(34.85, 581.525);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgRAeQgIgFgEgHQgEgIAAgKQAAgJAEgIQAEgHAIgFQAIgEAJAAQAKAAAIAEQAHAFAFAHQAEAIAAAJQAAAKgEAIQgFAHgHAFQgIAEgKAAQgJAAgIgEgAgMgVQgFADgDAFQgDAHgBAGQABAHADAGQADAGAFADQAGADAGAAQAHAAAGgDQAGgEADgFQADgFAAgIQAAgGgDgHQgDgFgGgDQgGgEgHABQgGgBgGAEg");
  this.shape_24.setTransform(27.7, 581.5);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AATAhIAAg5IglAAIAAA5IgJAAIAAhBIA3AAIAABBg");
  this.shape_25.setTransform(19.975, 581.475);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgPAdQgHgFgEgHQgEgHAAgKQAAgJAEgHQAEgJAHgDQAIgFAIAAQAJAAAHAEQAHAEAEAIQADAHAAAKIAAAAIg0AAQAAAMAHAHQAHAGAKABQAIgBAGgCQAGgDAEgDIACAIQgEAEgHACQgHACgJABQgJgBgIgEgAAWgGQgBgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAFIArAAIAAAAg");
  this.shape_26.setTransform(303.725, 566.95);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAaAhIAAhBIAJAAIAABBgAgiAhIAAhBIAJAAIAAAcIASAAQAKAAAGAEQAGAEAAAJQAAAHgDAEQgDAEgFACQgEADgGAAgAgZAaIASAAQAHAAADgEQADgDAAgFQAAgGgEgDQgDgDgIAAIgQAAg");
  this.shape_27.setTransform(295.525, 566.925);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AATAhIAAgdIglAAIAAAdIgJAAIAAhBIAJAAIAAAdIAlAAIAAgdIAJAAIAABBg");
  this.shape_28.setTransform(287.1, 566.925);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AggAvIAAhcIAJAAIAAAOQAEgIAIgDQAGgEAGAAQAKAAAHAFQAHADAEAJQAEAHAAAKQAAAJgEAIQgEAHgHAEQgIAFgJAAQgEAAgFgCQgEgCgEgCQgEgEgDgFIAAApgAgLgiQgGADgDAFQgEAGAAAIQAAAHAEAFQADAGAGADQAFADAGABQAHgBAFgDQAGgDACgGQAEgFAAgHQAAgIgDgFQgDgGgFgDQgFgDgIgBQgFABgGADg");
  this.shape_29.setTransform(279.5, 568.25);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgPAdQgHgFgEgHQgEgHAAgKQAAgJAEgHQAEgJAHgDQAIgFAIAAQAJAAAHAEQAHAEAEAIQADAHAAAKIAAAAIg0AAQAAAMAHAHQAHAGAKABQAIgBAGgCQAGgDAEgDIACAIQgEAEgHACQgHACgJABQgJgBgIgEgAAWgGQgBgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAFIArAAIAAAAg");
  this.shape_30.setTransform(271.575, 566.95);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAcAhIAAgzIgYAqIgHAAIgYgqIAAAzIgJAAIAAhBIALAAIAZAtIAagtIALAAIAABBg");
  this.shape_31.setTransform(263.25, 566.925);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgQAfQgHgCgDgCIACgJIAKAGQAGACAIAAQAHgBAFgCQAFgDAAgGQAAgDgCgDQgDgCgGgCQgFgBgKAAIAAgHQAMAAAGgDQAFgDAAgFQAAgFgEgDQgDgCgHAAQgFAAgFABIgJAFIgDgIIALgEQAFgCAGAAQALAAAGAFQAHAEAAAIQAAAGgEAEQgFAFgIABQAGAAAEABQAFACACADQADAEAAAFQAAAGgEAFQgDADgGACQgHADgHAAQgJAAgHgDg");
  this.shape_32.setTransform(255.175, 566.95);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgVAcQgFgFgBgIQAAgIAEgFQAGgDAJgCQAKgCAQgBIAAgBQAAgIgEgFQgEgFgKAAIgIABIgHAEIgFADIgDgJQAFgCAGgDQAHgCAGAAQANAAAHAHQAGAGABANIAAAoIgJAAIAAgMQgDAGgGADQgHADgIABQgKgBgGgFgAgCACQgJABgDAEQgDADAAAEQAAAFADAEQAEADAHABQAEAAAGgCQAFgDADgEQADgEAAgHIAAgHQgOABgGABg");
  this.shape_33.setTransform(248.35, 566.95);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AggAvIAAhcIAJAAIAAAOQAEgIAIgDQAGgEAGAAQAKAAAHAFQAHADAEAJQAEAHAAAKQAAAJgEAIQgEAHgHAEQgIAFgJAAQgEAAgEgCQgFgCgEgCQgEgEgDgFIAAApgAgLgiQgGADgDAFQgDAGgBAIQAAAHAEAFQADAGAGADQAFADAGABQAHgBAFgDQAGgDACgGQADgFABgHQAAgIgDgFQgDgGgFgDQgGgDgHgBQgFABgGADg");
  this.shape_34.setTransform(241.15, 568.25);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgPAdQgHgFgEgHQgEgHAAgKQAAgJAEgHQAEgJAHgDQAIgFAIAAQAJAAAHAEQAHAEAEAIQADAHAAAKIAAAAIg0AAQAAAMAHAHQAHAGAKABQAIgBAGgCQAGgDAEgDIACAIQgEAEgHACQgHACgJABQgJgBgIgEgAAWgGQgBgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAFIArAAIAAAAg");
  this.shape_35.setTransform(233.225, 566.95);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AATAhIAAgdIglAAIAAAdIgJAAIAAhBIAJAAIAAAdIAlAAIAAgdIAJAAIAABBg");
  this.shape_36.setTransform(225.75, 566.925);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAbAqIAAgTIg1AAIAAATIgJAAIAAgbIAEAAQAFAAADgEQACgEABgIIAFgoIApAAIAAA4IAKAAIAAAbgAgKAAIgCAJQgCAEgCACIAhAAIAAgwIgYAAg");
  this.shape_37.setTransform(218.125, 567.875);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgPAdQgHgFgEgHQgEgHAAgKQAAgJAEgHQAEgJAHgDQAIgFAIAAQAJAAAHAEQAHAEAEAIQADAHAAAKIAAAAIg0AAQAAAMAHAHQAHAGAKABQAIgBAGgCQAGgDAEgDIACAIQgEAEgHACQgHACgJABQgJgBgIgEgAAWgGQgBgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAFIArAAIAAAAg");
  this.shape_38.setTransform(210.875, 566.95);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AggAvIAAhcIAJAAIAAAOQAFgIAGgDQAHgEAHAAQAJAAAHAFQAHADAEAJQAEAHAAAKQAAAJgEAIQgEAHgHAEQgIAFgJAAQgDAAgFgCQgFgCgEgCQgEgEgDgFIAAApgAgLgiQgGADgDAFQgDAGAAAIQAAAHACAFQAEAGAFADQAGADAGABQAHgBAGgDQAEgDAEgGQACgFAAgHQABgIgDgFQgDgGgFgDQgGgDgGgBQgHABgFADg");
  this.shape_39.setTransform(203.5, 568.25);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgQApQgLgGgFgKQgHgLAAgOQAAgOAHgKQAFgKALgHQALgFANAAQAJAAAIACQAHADAHAFIgEAJQgFgFgHgDQgIgCgHAAQgKAAgJAEQgIAGgFAIQgFAJAAAKQAAAKAFAJQAFAJAIAFQAJAFAKAAQAJAAAHgDQAHgDAGgFIADAJQgHAGgIADQgIACgKAAQgMAAgLgGg");
  this.shape_40.setTransform(194.65, 565.6);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AASAaIgTgaIATgZIALAAIgVAZIAVAagAgHAaIgVgaIAVgZIAJAAIgUAZIAUAag");
  this.shape_41.setTransform(186.8, 566.8);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAVAhIAAg0IgpA0IgJAAIAAhBIAJAAIAAA0IApg0IAJAAIAABBg");
  this.shape_42.setTransform(176.475, 566.925);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAVAhIAAg0IgpA0IgJAAIAAhBIAJAAIAAA0IApg0IAJAAIAABBg");
  this.shape_43.setTransform(168.425, 566.925);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AAYAqIAAgTIg4AAIAAhAIAJAAIAAA4IAlAAIAAg4IAJAAIAAA4IAKAAIAAAbg");
  this.shape_44.setTransform(160.9, 567.875);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgVAcQgFgFgBgIQAAgIAFgFQAFgDAJgCQAKgCAQgBIAAgBQABgIgFgFQgFgFgJAAIgIABIgHAEIgFADIgCgJQAEgCAGgDQAHgCAGAAQANAAAHAHQAHAGAAANIAAAoIgJAAIAAgMQgDAGgHADQgGADgHABQgLgBgGgFgAgCACQgJABgDAEQgDADgBAEQAAAFAFAEQADADAHABQAFAAAEgCQAFgDAEgEQAEgEgBgHIAAgHQgOABgGABg");
  this.shape_45.setTransform(152.8, 566.95);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AATAhIAAgdIglAAIAAAdIgJAAIAAhBIAJAAIAAAdIAlAAIAAgdIAJAAIAABBg");
  this.shape_46.setTransform(145.5, 566.925);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAVAhIAAg0IgpA0IgJAAIAAhBIAJAAIAAA0IApg0IAJAAIAABBg");
  this.shape_47.setTransform(137.625, 566.925);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAcAhIAAgzIgZAqIgGAAIgXgqIAAAzIgJAAIAAhBIAKAAIAZAtIAbgtIAKAAIAABBg");
  this.shape_48.setTransform(128.9, 566.925);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgRAdQgIgEgDgHQgFgIAAgKQAAgJAFgIQADgHAIgEQAIgFAJAAQAKAAAIAFQAIAEAEAHQAEAIAAAJQAAAKgEAIQgEAHgIAEQgIAFgKAAQgJAAgIgFgAgMgVQgFADgDAFQgDAGgBAHQABAHADAGQADAGAFADQAGADAGAAQAHAAAGgDQAGgDADgGQADgGAAgHQAAgGgDgHQgDgFgGgDQgGgDgHgBQgGABgGADg");
  this.shape_49.setTransform(120.3, 566.95);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AATAhIAAgdIglAAIAAAdIgJAAIAAhBIAJAAIAAAdIAlAAIAAgdIAJAAIAABBg");
  this.shape_50.setTransform(112.55, 566.925);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgZAhIAAhBIAYAAQALABAFAEQAGAEAAAHQgBAGgDAEQgDAEgEABQAHABAEADQAFAEAAAHQAAAHgEAEQgDAEgFACQgFACgHAAgAgQAaIARAAQAIAAADgEQAEgDAAgFQAAgGgEgDQgEgDgIAAIgQAAgAgQgEIAPAAQAEAAADgBQADgCABgCIACgFQAAgFgEgDQgDgCgGAAIgPAAg");
  this.shape_51.setTransform(102.525, 566.925);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAJAAIAAAcIARAAQALAAAGAEQAGAEAAAJQAAAHgDAEQgDAEgFACQgFADgGAAgAgPAaIARAAQAHAAAEgEQADgDAAgFQAAgGgEgDQgEgDgIAAIgPAAg");
  this.shape_52.setTransform(92.775, 566.925);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgcAhIgEgCIACgIIACABIADABQAEAAACgDQACgDABgGIAFgtIAsAAIAABAIgJAAIAAg4IgaAAIgGAoQgBAJgDAEQgFAEgGAAIgFAAg");
  this.shape_53.setTransform(84.85, 566.975);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgPAdQgHgFgEgHQgEgHAAgKQAAgJAEgHQAEgJAHgDQAIgFAIAAQAJAAAHAEQAHAEAEAIQADAHAAAKIAAAAIg0AAQAAAMAHAHQAHAGAKABQAIgBAGgCQAGgDAEgDIACAIQgEAEgHACQgHACgJABQgJgBgIgEgAAWgGQgBgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAFIArAAIAAAAg");
  this.shape_54.setTransform(78.025, 566.95);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAhIAAg5IgWAAIAAgIIAzAAIAAAIIgVAAIAAA5g");
  this.shape_55.setTransform(71.575, 566.925);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AAVAhIAAg0IgpA0IgJAAIAAhBIAJAAIAAA0IApg0IAJAAIAABBg");
  this.shape_56.setTransform(64.775, 566.925);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAbAqIAAgTIg1AAIAAATIgJAAIAAgbIAEAAQAFAAADgEQACgEABgIIAFgoIApAAIAAA4IAKAAIAAAbgAgKAAIgCAJQgCAEgCACIAhAAIAAgwIgYAAg");
  this.shape_57.setTransform(56.975, 567.875);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgPAdQgHgFgEgHQgEgHAAgKQAAgJAEgHQAEgJAHgDQAIgFAIAAQAJAAAHAEQAHAEAEAIQADAHAAAKIAAAAIg0AAQAAAMAHAHQAHAGAKABQAIgBAGgCQAGgDAEgDIACAIQgEAEgHACQgHACgJABQgJgBgIgEgAAWgGQgBgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACQgFADgDAEQgEAFgBAFIArAAIAAAAg");
  this.shape_58.setTransform(49.725, 566.95);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgLAwQgHgCgEgGQgFgFgDgKQgDgKAAgPQAAgNAEgKQADgKAIgGQAIgFAMgCIAFgBIADAAIAIgBIAFgBIAEAAIACAIIgJABIgIABIgEAAIgDABQgJABgGAEQgGADgEAHQgDAHAAANQAEgFAHgEQAGgEAJAAQAJAAAHAEQAHAEAEAHQAEAHAAAKQAAAKgEAIQgEAHgIAFQgHAFgLgBQgFABgGgDgAgJgFQgFABgDAEQgEADgCAEQAAAOAEAHQADAIAGADQAFADAFAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgIgDgFQgDgFgFgCQgGgDgGAAQgGAAgFACg");
  this.shape_59.setTransform(42.225, 565.3);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgRAdQgIgEgDgHQgFgIAAgKQAAgJAFgIQADgHAIgEQAIgFAJAAQAKAAAIAFQAIAEAEAHQAEAIAAAJQAAAKgEAIQgEAHgIAEQgIAFgKAAQgJAAgIgFgAgMgVQgFADgDAFQgDAGgBAHQABAHADAGQADAGAFADQAGADAGAAQAIAAAFgDQAGgDADgGQADgGAAgHQAAgGgDgHQgDgFgGgDQgFgDgIgBQgGABgGADg");
  this.shape_60.setTransform(34.35, 566.95);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAZAuIAAhSIgyAAIAABSIgJAAIAAhbIBFAAIAABbg");
  this.shape_61.setTransform(25.725, 565.575);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAGIgIAPIgHgGIALgNIgRgDIADgIIAQAHIgBgSIAIAAIgCASIAQgHIADAIIgRADIALANIgHAGg");
  this.shape_62.setTransform(18.575, 563.025);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(14, 553, 295.4, 37.10000000000002), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgcAhIgEgCIACgIIADABIACABQAEAAACgDQACgDABgGIAGgtIArAAIAABAIgJAAIAAg4IgbAAIgEAoQgBAJgFAEQgEAEgGAAIgFAAg");
  this.shape.setTransform(58.35, 566.775);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAVAvIAAgzIgpAzIgJAAIAAhAIAJAAIAAAzIApgzIAJAAIAABAgAgNghQgFgFgBgIIAIAAQAAAGADACQADADAFAAQAGAAADgDQADgDAAgFIAIAAQgBAIgFAFQgFAEgJABQgIgBgFgEg");
  this.shape_1.setTransform(50.975, 565.275);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgVAdQgFgGgBgJQAAgHAFgEQAFgEAJgCQAKgCAQgBIAAgBQABgIgFgFQgEgFgKAAIgIABIgHADIgFAEIgCgIQAEgDAGgDQAHgCAHAAQAMAAAHAHQAHAGAAANIAAAnIgJAAIAAgLQgDAFgHAEQgGAEgHAAQgLgBgGgEgAgCACQgJACgDACQgEADAAAFQAAAFAFAEQADADAHABQAFAAAEgDQAFgBAEgFQADgEAAgIIAAgFQgNgBgHACg");
  this.shape_2.setTransform(43.1, 566.75);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAhIAAg5IgWAAIAAgIIAzAAIAAAIIgVAAIAAA5g");
  this.shape_3.setTransform(36.725, 566.725);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgQApQgLgGgFgLQgHgKAAgOQAAgNAHgLQAFgKALgHQALgFANgBQAJAAAIADQAHADAHAFIgDAJQgGgFgHgCQgHgDgIgBQgKABgJAEQgIAFgFAJQgFAJAAAKQAAAKAFAKQAFAIAIAFQAJAFAKAAQAJAAAHgDQAHgDAGgEIADAJQgHAFgIADQgIACgKAAQgMAAgLgGg");
  this.shape_4.setTransform(29.35, 565.4);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAGIgIAPIgHgGIALgNIgRgDIADgIIAQAHIgBgSIAIAAIgCASIAQgHIADAIIgRADIALANIgHAGg");
  this.shape_5.setTransform(18.925, 562.825);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(14.4, 552.8, 50.50000000000001, 22.600000000000023), null);
 (lib.red_line = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0022").s().p("AzeAPIAAgdMAm9AAAIAAAdg");
  this.shape.setTransform(124.65, 1.5);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.red_line, new cjs.Rectangle(0, 0, 249.3, 3), null);
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
 p.nominalBounds = new cjs.Rectangle(0, 0, 283, 225);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(18, 62, 0.5, 0.5);
  this.initialize(mode, startPosition, loop, {
   cvr_frame01: 65
  });
  this.frame_start = function() {
   globalStop(false);
   this.gotoAndPlay(1);
  }
  this.frame_finish = function() {
   globalStop(true)
   this.stop()
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_start).wait(130).call(this.frame_finish).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).to({
   alpha: 0
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -328
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(161.5, 257, 2.87, 3.9);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(16, 60, 287, 392), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.5, 0.5);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(0, 0, 303, 224), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EgY/AnEMAAAhOHMAx/AAAMAAABOHg");
  this.shape.setTransform(160, 250);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 320, 500), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.5, 0.5);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(0, 0, 266, 249), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.5, 0.5);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0, 0, 266, 249), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.5, 0.5);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(0, 0, 266, 249), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EgY/AnEMAAAhOHMAx/AAAMAAABOHg");
  this.shape.setTransform(160, 250);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 320, 500), null);
 (lib.arrow1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], 0, 166, 0, -158.1).s().p("ABdYpQFzoQgdnZQgam+l7mTQjwkAhelwQg5jhAGjWIirAAID0j0ID0D0IisAAQgFC+AyDLQBUFVDYDmQDBDOBlD5QBkD3gCEGQgCEKhqD5QhwEDjWDXg");
  this.shape.setTransform(379.9761, 914.575);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], 0, 166, 0, -158.1).s().p("ABdYpQFzoQgcnZQgam+l8mTQjwkAhelwQg5jhAGjWIirAAID1j0ID0D0IitAAQgFC+AyDLQBUFVDYDmQDBDOBlD5QBkD3gCEGQgBEKhrD5QhvEDjXDXg");
  this.shape_1.setTransform(271.6261, 914.575);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.lf(["rgba(255,0,34,0)", "#FF0022"], [0, 1], 0, 166, 0, -158.1).s().p("ABdYpQFzoQgcnZQgbm+l7mTQjwkAhelwQg5jhAGjWIirAAID0j0ID1D0IitAAQgFC+AyDLQBUFVDYDmQDBDOBlD5QBkD3gCEGQgCEKhqD5QhvEDjXDXg");
  this.shape_2.setTransform(169.6761, 914.575);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.arrow1, new cjs.Rectangle(117, 756.5, 315.7, 316.20000000000005), null);
 (lib.txt05 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t05();
  this.instance.parent = this;
  this.instance.setTransform(110.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 221.5,
   regY: 123.1,
   x: 238.7,
   y: 123.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 236.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 233.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 231.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 229.75,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 228,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 226.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 225.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 224.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 223.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 222.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 221.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 221.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(140.5, 86, 182.10000000000002, 74.19999999999999);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Aw7KcIAAkqMAh3AAAIAAEqg");
  mask.setTransform(108.3542, 66.7847);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 110.8,
   regY: 149.4,
   x: 93.6,
   y: 149.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 96.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 98.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 100.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 102.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 104.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 107.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 108.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 109.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 110.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 110.7,
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
  mask_1.graphics.p("Aw7MxIAAkqMAh3AAAIAAEqg");
  mask_1.setTransform(108.3542, 81.6847);
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
   regX: 110.8,
   regY: 149.4,
   x: 93.6,
   y: 149.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 96.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 98.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 100.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 102.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 104.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 107.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 108.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 109.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 110.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 110.7,
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
  mask_2.graphics.p("Aw7PGIAAkqMAh3AAAIAAEqg");
  mask_2.setTransform(108.3542, 96.5847);
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
   regX: 110.8,
   regY: 149.4,
   x: 93.6,
   y: 149.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 96.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 98.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 100.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 102.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 104.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 107.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 108.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 109.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 110.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 110.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 103.8, 216.7, 88.8);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A0OIhIAAkVMAodAAAIAAEVg");
  mask.setTransform(129.4972, 54.4773);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 133.7,
   regY: 140.1,
   x: 116.5,
   y: 140.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 119.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 121.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 123.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 125.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 127.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 128.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 130.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 131.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 132.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 132.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 133.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 133.6,
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
  mask_1.graphics.p("A0ONNIAApYMAodAAAIAAJYg");
  mask_1.setTransform(129.4971, 84.5034);
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
   regX: 133.7,
   regY: 140.1,
   x: 116.5,
   y: 140.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 119.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 121.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 123.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 125.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 127.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 128.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 130.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 131.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 132.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 132.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 133.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 133.6,
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
  mask_2.graphics.p("A0OPWIAAkVMAodAAAIAAEVg");
  mask_2.setTransform(129.4971, 98.1773);
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
   regX: 133.7,
   regY: 140.1,
   x: 116.5,
   y: 140.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 119.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 121.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 123.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 125.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 127.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 128.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 130.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 131.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 132.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 132.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 133.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 133.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 81.3, 259, 115.10000000000001);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvQE4IAAlDIehAAIAAFDg");
  mask.setTransform(97.6925, 31.1783);
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
   regX: 110,
   regY: 46.7,
   x: 92.8,
   y: 46.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 95.35,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 97.7,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 99.8,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 101.75,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 103.5,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 106.35,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 107.45,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 108.4,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.1,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 109.6,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 156, 59.5);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A1EDWIAAmrMAqJAAAIAAGrg");
  mask.setTransform(134.9396, 20.4252);
  this.instance = new lib.t01();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 64.8,
   regY: 41,
   x: 47.6,
   y: 41,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 50.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 52.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 54.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 56.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 58.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 59.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 61.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 62.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 63.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 63.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 64.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 64.7,
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
  mask_1.graphics.p("A1EGJIAAlzMAqJAAAIAAFzg");
  mask_1.setTransform(134.9396, 39.3047);
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
   regX: 64.8,
   regY: 41,
   x: 47.6,
   y: 41,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 50.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 52.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 54.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 56.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 58.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 59.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 61.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 62.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 63.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 63.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 64.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 64.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 5.5, 196.5, 66.4);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(50.8098, 120.9172, 1.1473, 1.1473);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(50.8438, 120.8938, 1.1475, 1.1475);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(51.5, 121.65, 1.1476, 1.1476, 0, 0, 0, 22.9, 23.7);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(51.5, 121.65, 1.1476, 1.1476, 0, 0, 0, 22.9, 23.7);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(50.8151, 120.9225, 1.1475, 1.1475);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIAAhuIgjAAIAAgRIBXAAIAAARIgjAAIAABug");
  this.shape_3.setTransform(200.95, 141.6);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAnAAQANAAAKAFQAKAGAEAJQAFAJAAALQAAALgFAJQgEAJgKAFQgKAHgNAAIgVAAIAAAugAgWACIASAAQAHAAAGgCQAGgDAEgFQADgHAAgIQAAgJgDgFQgEgGgGgCQgGgCgHAAIgSAAg");
  this.shape_4.setTransform(190.8, 141.6);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AghA5QgPgIgJgPQgIgPgBgTQABgTAIgOQAIgPAQgIQAOgJATAAQATAAAPAJQAPAIAJAPQAJAOAAATQAAATgJAPQgJAPgPAIQgPAIgTABQgTgBgOgIgAgXgpQgMAGgFALQgHALAAANQAAAOAHALQAFALAMAGQAKAGANAAQAOAAAKgGQAMgGAFgLQAGgLABgOQgBgNgGgLQgFgLgMgGQgKgGgOAAQgNAAgKAGg");
  this.shape_5.setTransform(176.75, 141.625);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgIBCIAAgNQgSgBgOgHQgNgHgIgLQgHgMAAgPQAAgOAHgLQAIgMANgGQAOgIASgBIAAgOIARAAIAAAOQASACAOAHQANAGAIAMQAHALAAAOQAAAPgHAMQgIALgNAHQgOAGgSACIAAANgAAJAlQAUgBALgKQALgKAAgQQAAgPgLgJQgLgLgUgBgAgmgYQgMAJAAAPQAAAQAMAKQALAKATABIAAhJQgTABgLALg");
  this.shape_6.setTransform(160.775, 141.6);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAsBAIAAhlIgmA6IgMAAIglg6IAABlIgSAAIAAh/IAXAAIAmA/IAog/IAWAAIAAB/g");
  this.shape_7.setTransform(144.625, 141.6);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgiA5QgOgIgJgPQgIgPAAgTQAAgTAIgOQAIgPAPgIQAQgJASAAQATAAAPAJQAPAIAJAPQAJAOAAATQAAATgJAPQgJAPgPAIQgPAIgTABQgSgBgQgIgAgXgpQgMAGgFALQgHALAAANQAAAOAHALQAFALAMAGQAKAGANAAQAOAAAKgGQALgGAHgLQAFgLABgOQgBgNgFgLQgHgLgLgGQgKgGgOAAQgNAAgKAGg");
  this.shape_8.setTransform(128.5, 141.625);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAcBAIgug5IgNAAIAAA5IgTAAIAAh/IATAAIAAA4IALAAIAsg4IAVAAIgxA+IA3BBg");
  this.shape_9.setTransform(115.15, 141.625);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAjBRIAAhjIhFBjIgSAAIAAh/IASAAIAABjIBGhjIARAAIAAB/gAgVg/QgHgGgBgLIANAAQAAAGAFADQAFADAGgBQAIABAEgDQAEgDAAgGIANAAQgBALgHAGQgIAFgNAAQgNAAgIgFg");
  this.shape_10.setTransform(187.75, 121.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAjBAIAAhjIhGBjIgRAAIAAh/IASAAIAABjIBFhjIASAAIAAB/g");
  this.shape_11.setTransform(173.05, 123.6);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAhBAIAAg4IhBAAIAAA4IgSAAIAAh/IASAAIAAA4IBBAAIAAg4IASAAIAAB/g");
  this.shape_12.setTransform(158.475, 123.6);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAsBAIAAhlIgmA6IgMAAIglg6IAABlIgSAAIAAh/IAXAAIAmA/IAog/IAWAAIAAB/g");
  this.shape_13.setTransform(143.025, 123.6);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAjBAIAAhjIhGBjIgRAAIAAh/IASAAIAABjIBFhjIASAAIAAB/g");
  this.shape_14.setTransform(127.4, 123.6);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgbA9QgMgFgGgHIAJgPQAGAHAIAEQAJAEAMAAQANAAAIgGQAIgFAAgLQAAgLgKgGQgKgFgVAAIAAgOQAOAAAIgEQAIgDADgFQADgEAAgGQAAgIgGgFQgHgFgKAAQgKAAgIAEQgIADgGAGIgHgPQAHgGAKgEQAKgEANAAQATAAAKAJQALAIAAAPQAAAMgHAIQgGAHgMADQAOACAIAHQAIAIAAAOQAAALgFAJQgGAIgKAFQgLAFgOAAQgQAAgLgFg");
  this.shape_15.setTransform(114.225, 123.625);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAwBZIgRgyIg+AAIgSAyIgiAAIBCixIAjAAIBCCxgAAWAMIgWg/IgWA/IAsAAg");
  this.shape_16.setTransform(196.825, 101.025);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgQBZIAAiTIgvAAIAAgeIB/AAIAAAeIgvAAIAACTg");
  this.shape_17.setTransform(181.975, 101.025);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgvBQQgVgMgMgUQgMgVAAgbQAAgaAMgVQAMgUAVgMQAVgLAaAAQAbAAAVALQAVAMAMAUQAMAUAAAbQAAAbgMAUQgMAVgVALQgVAMgbAAQgaAAgVgLgAgdgzQgNAIgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAHAQAAQARAAANgHQANgIAHgNQAIgOAAgRQAAgQgIgOQgHgNgNgIQgNgHgRAAQgQAAgNAHg");
  this.shape_18.setTransform(165.425, 101.025);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgQBZIAAhGIg7hrIAlAAIAnBNIAqhNIAiAAIg9BsIAABFg");
  this.shape_19.setTransform(148.2, 101.025);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgvBQQgVgMgMgUQgMgVAAgbQAAgaAMgVQAMgUAVgMQAVgLAaAAQAbAAAVALQAVAMAMAUQAMAUAAAbQAAAbgMAUQgMAVgVALQgVAMgbAAQgaAAgVgLgAgdgzQgNAIgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAHAQAAQARAAANgHQANgIAHgNQAIgOAAgRQAAgQgIgOQgHgNgNgIQgNgHgRAAQgQAAgNAHg");
  this.shape_20.setTransform(130.975, 101.025);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgQBZIAAiTIgvAAIAAgeIB/AAIAAAeIgvAAIAACTg");
  this.shape_21.setTransform(114.425, 101.025);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAktIAAJb");
  this.shape_22.setTransform(95.45, 120.5);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(20.4, 78.7, 188.1, 75.99999999999999), null);
 (lib.arrow = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EAPpC7xIAAlaMA6cAAAIAAFag");
  var mask_graphics_1 = new cjs.Graphics().p("EAPpC7yIAAn6MA6cAAAIAAH6g");
  var mask_graphics_2 = new cjs.Graphics().p("EAPpC7yIAAqZMA6cAAAIAAKZg");
  var mask_graphics_3 = new cjs.Graphics().p("EAPpC7yIAAs3MA6cAAAIAAM3g");
  var mask_graphics_4 = new cjs.Graphics().p("EAPpC7yIAAvWMA6cAAAIAAPWg");
  var mask_graphics_5 = new cjs.Graphics().p("EAPpC7yIAAx1MA6cAAAIAAR1g");
  var mask_graphics_6 = new cjs.Graphics().p("EAPpC7zIAA0VMA6cAAAIAAUVg");
  var mask_graphics_7 = new cjs.Graphics().p("EAPpC7zIAA2zMA6cAAAIAAWzg");
  var mask_graphics_8 = new cjs.Graphics().p("EAPpC7zIAA5SMA6cAAAIAAZSg");
  var mask_graphics_9 = new cjs.Graphics().p("EAPpC7zIAA7xMA6cAAAIAAbxg");
  var mask_graphics_10 = new cjs.Graphics().p("EAPpC7zIAA+PMA6cAAAIAAePg");
  var mask_graphics_11 = new cjs.Graphics().p("EAPpC7zMAAAgguMA6cAAAMAAAAgug");
  var mask_graphics_12 = new cjs.Graphics().p("EAPpC70MAAAgjOMA6cAAAMAAAAjOg");
  var mask_graphics_13 = new cjs.Graphics().p("EAPpC70MAAAglsMA6cAAAMAAAAlsg");
  var mask_graphics_14 = new cjs.Graphics().p("EAPpC70MAAAgoLMA6cAAAMAAAAoLg");
  var mask_graphics_15 = new cjs.Graphics().p("EAPpC70MAAAgqqMA6cAAAMAAAAqqg");
  var mask_graphics_16 = new cjs.Graphics().p("EAPpC70MAAAgtIMA6cAAAMAAAAtIg");
  var mask_graphics_17 = new cjs.Graphics().p("EAPpC71MAAAgvoMA6cAAAMAAAAvog");
  var mask_graphics_18 = new cjs.Graphics().p("EAPpC71MAAAgyHMA6cAAAMAAAAyHg");
  var mask_graphics_19 = new cjs.Graphics().p("EAPpC71MAAAg0lMA6cAAAMAAAA0lg");
  var mask_graphics_20 = new cjs.Graphics().p("EAPpC71MAAAg3EMA6cAAAMAAAA3Eg");
  var mask_graphics_21 = new cjs.Graphics().p("EAPpC7wMAAAg5jMA6cAAAMAAAA5jg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 474.0745,
   y: 1201.7428
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 474.0745,
   y: 1201.7612
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 474.0745,
   y: 1201.7796
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 474.0745,
   y: 1201.798
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 474.0745,
   y: 1201.8164
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 474.0745,
   y: 1201.8348
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 474.0745,
   y: 1201.8532
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 474.0745,
   y: 1201.8716
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 474.0745,
   y: 1201.89
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 474.0745,
   y: 1201.9084
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 474.0745,
   y: 1201.9268
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 474.0745,
   y: 1201.9452
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 474.0745,
   y: 1201.9636
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 474.0745,
   y: 1201.982
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 474.0745,
   y: 1202.0004
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 474.0745,
   y: 1202.0189
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 474.0745,
   y: 1202.0373
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 474.0745,
   y: 1202.0557
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 474.0745,
   y: 1202.0741
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 474.0745,
   y: 1202.0925
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 474.0745,
   y: 1202.1109
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 474.0745,
   y: 1201.5768
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
 p.nominalBounds = new cjs.Rectangle(601.9, 2054, 315.70000000000005, 316.1999999999998);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t04();
  this.instance.parent = this;
  this.instance.setTransform(21, 99.7, 1, 1, 0, 0, 0, 41, 99.7);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 112.8,
   regY: 120.8,
   x: 95.6,
   y: 120.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 98.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 100.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 102.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 104.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 106.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 107.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 109.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 110.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 111.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 111.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 112.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 112.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0.4, 78.7, 208.1, 75.99999999999999);
 (lib.content = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1_4: 69,
   cvr_frame2_1: 149,
   cvr_frame3_2: 273,
   "cvr_frame#4": 345,
   cvr_stay: 355
  });
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(248.9, 16.85, 1.3171, 1.3154);
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
  }, 1).wait(344).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(-1)).wait(6));
  this.instance_3 = new lib.snoska3("synched", 0, false);
  this.instance_3.parent = this;
  this.instance_3.setTransform(0, -100);
  this.instance_3.alpha = 0;
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(76));
  this.instance_4 = new lib.snoska2("synched", 0, false);
  this.instance_4.parent = this;
  this.instance_4.setTransform(0, -100);
  this.instance_4.alpha = 0;
  this.instance_4._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(205).to({
   startPosition: 0
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).wait(91));
  this.instance_5 = new lib.txt05("synched", 0, false);
  this.instance_5.parent = this;
  this.instance_5._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(289).to({
   _off: false
  }, 0).wait(91));
  this.instance_6 = new lib.txt04("synched", 0, false);
  this.instance_6.parent = this;
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(209).to({
   _off: false
  }, 0).wait(65).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).wait(91));
  this.instance_7 = new lib.txt03("synched", 0, false);
  this.instance_7.parent = this;
  this.instance_7.setTransform(0, -28);
  this.instance_7._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({
   _off: false
  }, 0).wait(75).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(170));
  this.instance_8 = new lib.txt02("synched", 0, false);
  this.instance_8.parent = this;
  this.instance_8._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({
   _off: false
  }, 0).wait(80).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_9 = new lib.arrow("synched", 0, false);
  this.instance_9.parent = this;
  this.instance_9.setTransform(25.15, -11.9, 0.1933, 0.1933, 0, 0, 0, 43.2, 122.1);
  this.instance_9._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(226).to({
   _off: false
  }, 0).wait(48).to({
   mode: "single",
   startPosition: 21
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_10 = new lib.txt01_1("synched", 0, false);
  this.instance_10.parent = this;
  this.instance_10.setTransform(17.75, 8.5);
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(274).to({
   startPosition: 29
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_11 = new lib.txt01("synched", 0, false);
  this.instance_11.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(380));
  this.instance_12 = new lib.red_line();
  this.instance_12.parent = this;
  this.instance_12.setTransform(-77, 436, 1, 1, 0, 0, 180, 100, 1.5);
  this.instance_12._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({
   _off: false
  }, 0).to({
   x: -7
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_13 = new lib.red_line();
  this.instance_13.parent = this;
  this.instance_13.setTransform(414, 204.5, 1, 1, 0, 0, 0, 100, 1.5);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({
   _off: false
  }, 0).to({
   regX: 100.2,
   scaleX: 1.083,
   x: 162.5
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_14 = new lib.car_1();
  this.instance_14.parent = this;
  this.instance_14.setTransform(137.2, 318, 1, 1, 0, 0, 0, 120.2, 75);
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(104).to({
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
  var mask_graphics_0 = new cjs.Graphics().p("EAETAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_1 = new cjs.Graphics().p("EAEQAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_2 = new cjs.Graphics().p("EAEGAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_3 = new cjs.Graphics().p("EAD1AkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_4 = new cjs.Graphics().p("EADeAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_5 = new cjs.Graphics().p("EADAAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_6 = new cjs.Graphics().p("EACcAkhMAAAgpZMApzAAAMAAAApZg");
  var mask_graphics_7 = new cjs.Graphics().p("EABxAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_8 = new cjs.Graphics().p("EAA/AkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_9 = new cjs.Graphics().p("EAAHAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_10 = new cjs.Graphics().p("EgA3AkhMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_11 = new cjs.Graphics().p("EgB8AkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_12 = new cjs.Graphics().p("EgDIAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_13 = new cjs.Graphics().p("EgEbAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_14 = new cjs.Graphics().p("EgFxAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_15 = new cjs.Graphics().p("EgHMAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_16 = new cjs.Graphics().p("EgIgAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_17 = new cjs.Graphics().p("EgJuAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_18 = new cjs.Graphics().p("EgK2AkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_19 = new cjs.Graphics().p("EgL4AkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_20 = new cjs.Graphics().p("EgMzAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_21 = new cjs.Graphics().p("EgNoAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_22 = new cjs.Graphics().p("EgOXAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_23 = new cjs.Graphics().p("EgO/AkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_24 = new cjs.Graphics().p("EgPiAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_25 = new cjs.Graphics().p("EgP+AkeMAAAgpZMApyAAAMAAAApZg");
  var mask_graphics_26 = new cjs.Graphics().p("EgQUAkeMAAAgpZMApyAAAMAAAApZg");
  var mask_graphics_27 = new cjs.Graphics().p("EgQjAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_28 = new cjs.Graphics().p("EgQtAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_29 = new cjs.Graphics().p("EgQqAkgMAAAgpYMApxAAAMAAAApYg");
  var mask_graphics_119 = new cjs.Graphics().p("EAETAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_120 = new cjs.Graphics().p("EAEQAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_121 = new cjs.Graphics().p("EAEGAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_122 = new cjs.Graphics().p("EAD1AkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_123 = new cjs.Graphics().p("EADeAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_124 = new cjs.Graphics().p("EADAAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_125 = new cjs.Graphics().p("EACcAkhMAAAgpZMApzAAAMAAAApZg");
  var mask_graphics_126 = new cjs.Graphics().p("EABxAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_127 = new cjs.Graphics().p("EAA/AkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_128 = new cjs.Graphics().p("EAAHAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_129 = new cjs.Graphics().p("EgA3AkhMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_130 = new cjs.Graphics().p("EgB8AkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_131 = new cjs.Graphics().p("EgDIAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_132 = new cjs.Graphics().p("EgEbAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_133 = new cjs.Graphics().p("EgFxAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_134 = new cjs.Graphics().p("EgHGAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_135 = new cjs.Graphics().p("EgIWAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_136 = new cjs.Graphics().p("EgJgAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_137 = new cjs.Graphics().p("EgKlAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_138 = new cjs.Graphics().p("EgLkAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_139 = new cjs.Graphics().p("EgMdAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_140 = new cjs.Graphics().p("EgNSAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_141 = new cjs.Graphics().p("EgOAAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_142 = new cjs.Graphics().p("EgOpAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_143 = new cjs.Graphics().p("EgPNAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_144 = new cjs.Graphics().p("EgPrAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_145 = new cjs.Graphics().p("EgQEAkeMAAAgpZMApyAAAMAAAApZg");
  var mask_graphics_146 = new cjs.Graphics().p("EgQXAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_147 = new cjs.Graphics().p("EgQlAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_148 = new cjs.Graphics().p("EgQtAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_149 = new cjs.Graphics().p("EgQqAkgMAAAgpYMApxAAAMAAAApYg");
  var mask_graphics_209 = new cjs.Graphics().p("EAETAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_210 = new cjs.Graphics().p("EAEQAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_211 = new cjs.Graphics().p("EAEGAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_212 = new cjs.Graphics().p("EAD1AkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_213 = new cjs.Graphics().p("EADeAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_214 = new cjs.Graphics().p("EADAAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_215 = new cjs.Graphics().p("EACcAkhMAAAgpZMApzAAAMAAAApZg");
  var mask_graphics_216 = new cjs.Graphics().p("EABxAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_217 = new cjs.Graphics().p("EAA/AkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_218 = new cjs.Graphics().p("EAAHAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_219 = new cjs.Graphics().p("EgA3AkhMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_220 = new cjs.Graphics().p("EgB8AkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_221 = new cjs.Graphics().p("EgDIAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_222 = new cjs.Graphics().p("EgEbAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_223 = new cjs.Graphics().p("EgFxAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_224 = new cjs.Graphics().p("EgHGAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_225 = new cjs.Graphics().p("EgIWAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_226 = new cjs.Graphics().p("EgJgAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_227 = new cjs.Graphics().p("EgKlAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_228 = new cjs.Graphics().p("EgLkAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_229 = new cjs.Graphics().p("EgMdAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_230 = new cjs.Graphics().p("EgNSAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_231 = new cjs.Graphics().p("EgOAAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_232 = new cjs.Graphics().p("EgOpAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_233 = new cjs.Graphics().p("EgPNAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_234 = new cjs.Graphics().p("EgPrAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_235 = new cjs.Graphics().p("EgQEAkeMAAAgpZMApyAAAMAAAApZg");
  var mask_graphics_236 = new cjs.Graphics().p("EgQXAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_237 = new cjs.Graphics().p("EgQlAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_238 = new cjs.Graphics().p("EgQtAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_239 = new cjs.Graphics().p("EgQqAkgMAAAgpYMApxAAAMAAAApYg");
  var mask_graphics_289 = new cjs.Graphics().p("EAETAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_290 = new cjs.Graphics().p("EAEQAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_291 = new cjs.Graphics().p("EAEGAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_292 = new cjs.Graphics().p("EAD1AkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_293 = new cjs.Graphics().p("EADeAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_294 = new cjs.Graphics().p("EADAAkgMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_295 = new cjs.Graphics().p("EACcAkhMAAAgpZMApzAAAMAAAApZg");
  var mask_graphics_296 = new cjs.Graphics().p("EABxAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_297 = new cjs.Graphics().p("EAA/AkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_298 = new cjs.Graphics().p("EAAHAkhMAAAgpYMApzAAAMAAAApYg");
  var mask_graphics_299 = new cjs.Graphics().p("EgA3AkhMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_300 = new cjs.Graphics().p("EgB8AkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_301 = new cjs.Graphics().p("EgDIAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_302 = new cjs.Graphics().p("EgEbAkiMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_303 = new cjs.Graphics().p("EgFxAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_304 = new cjs.Graphics().p("EgHGAkgMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_305 = new cjs.Graphics().p("EgIWAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_306 = new cjs.Graphics().p("EgJgAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_307 = new cjs.Graphics().p("EgKlAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_308 = new cjs.Graphics().p("EgLkAkfMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_309 = new cjs.Graphics().p("EgMdAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_310 = new cjs.Graphics().p("EgNSAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_311 = new cjs.Graphics().p("EgOAAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_312 = new cjs.Graphics().p("EgOpAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_313 = new cjs.Graphics().p("EgPNAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_314 = new cjs.Graphics().p("EgPrAkeMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_315 = new cjs.Graphics().p("EgQEAkeMAAAgpZMApyAAAMAAAApZg");
  var mask_graphics_316 = new cjs.Graphics().p("EgQXAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_317 = new cjs.Graphics().p("EgQlAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_318 = new cjs.Graphics().p("EgQtAkdMAAAgpYMApyAAAMAAAApYg");
  var mask_graphics_319 = new cjs.Graphics().p("EgQqAkgMAAAgpYMApxAAAMAAAApYg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 294.999,
   y: 233.6047
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 294.6684,
   y: 233.606
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 293.6766,
   y: 233.6099
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 292.0236,
   y: 233.6164
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 289.7095,
   y: 233.6256
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 286.7341,
   y: 233.6373
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 283.0975,
   y: 233.6517
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 278.7997,
   y: 233.6686
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 273.8408,
   y: 233.6882
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 268.2206,
   y: 233.7104
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 261.9393,
   y: 233.7352
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 254.9967,
   y: 233.7626
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 247.393,
   y: 233.7926
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 239.1281,
   y: 233.8252
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 230.4694,
   y: 233.5955
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 221.4143,
   y: 233.5626
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 212.9836,
   y: 233.5319
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 205.1775,
   y: 233.5035
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 197.9958,
   y: 233.4773
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 191.4386,
   y: 233.4534
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 185.506,
   y: 233.4318
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 180.1978,
   y: 233.4125
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 175.5141,
   y: 233.3955
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 171.4549,
   y: 233.3807
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 168.0202,
   y: 233.3682
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 165.21,
   y: 233.358
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 163.0242,
   y: 233.35
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 161.463,
   y: 233.3443
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 160.5263,
   y: 233.3409
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 160.749,
   y: 233.6047
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 294.999,
   y: 233.6047
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 294.6684,
   y: 233.606
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 293.6766,
   y: 233.6099
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 292.0236,
   y: 233.6164
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 289.7095,
   y: 233.6256
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 286.7341,
   y: 233.6373
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 283.0975,
   y: 233.6517
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 278.7997,
   y: 233.6686
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 273.8408,
   y: 233.6882
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 268.2206,
   y: 233.7104
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 261.9393,
   y: 233.7352
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 254.9967,
   y: 233.7626
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 247.393,
   y: 233.7926
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 239.1281,
   y: 233.8252
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 230.4694,
   y: 233.5955
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 221.9619,
   y: 233.5646
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 214.0033,
   y: 233.5356
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 206.5936,
   y: 233.5086
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 199.7327,
   y: 233.4836
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 193.4207,
   y: 233.4607
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 187.6575,
   y: 233.4397
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 182.4433,
   y: 233.4207
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 177.7779,
   y: 233.4037
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 173.6613,
   y: 233.3887
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 170.0937,
   y: 233.3757
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 167.0749,
   y: 233.3647
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 164.605,
   y: 233.3558
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 162.6839,
   y: 233.3488
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 161.3118,
   y: 233.3438
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 160.4884,
   y: 233.3408
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 160.749,
   y: 233.6047
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 294.999,
   y: 233.6047
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 294.6684,
   y: 233.606
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 293.6766,
   y: 233.6099
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 292.0236,
   y: 233.6164
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 289.7095,
   y: 233.6256
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 286.7341,
   y: 233.6373
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 283.0975,
   y: 233.6517
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 278.7997,
   y: 233.6686
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 273.8408,
   y: 233.6882
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 268.2206,
   y: 233.7104
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 261.9393,
   y: 233.7352
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 254.9967,
   y: 233.7626
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 247.393,
   y: 233.7926
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 239.1281,
   y: 233.8252
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 230.4694,
   y: 233.5955
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 221.9619,
   y: 233.5646
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 214.0033,
   y: 233.5356
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 206.5936,
   y: 233.5086
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 199.7327,
   y: 233.4836
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 193.4207,
   y: 233.4607
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 187.6575,
   y: 233.4397
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 182.4433,
   y: 233.4207
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 177.7779,
   y: 233.4037
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 173.6613,
   y: 233.3887
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 170.0937,
   y: 233.3757
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 167.0749,
   y: 233.3647
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 164.605,
   y: 233.3558
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 162.6839,
   y: 233.3488
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 161.3118,
   y: 233.3438
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 160.4884,
   y: 233.3408
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 160.749,
   y: 233.6047
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 294.999,
   y: 233.6047
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 294.6684,
   y: 233.606
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 293.6766,
   y: 233.6099
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 292.0236,
   y: 233.6164
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 289.7095,
   y: 233.6256
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 286.7341,
   y: 233.6373
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 283.0975,
   y: 233.6517
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 278.7997,
   y: 233.6686
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 273.8408,
   y: 233.6882
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 268.2206,
   y: 233.7104
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 261.9393,
   y: 233.7352
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 254.9967,
   y: 233.7626
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 247.393,
   y: 233.7926
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 239.1281,
   y: 233.8252
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 230.4694,
   y: 233.5955
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 221.9619,
   y: 233.5646
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 214.0033,
   y: 233.5356
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 206.5936,
   y: 233.5086
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 199.7327,
   y: 233.4836
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 193.4207,
   y: 233.4607
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 187.6575,
   y: 233.4397
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 182.4433,
   y: 233.4207
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 177.7779,
   y: 233.4037
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 173.6613,
   y: 233.3887
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 170.0937,
   y: 233.3757
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 167.0749,
   y: 233.3647
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 164.605,
   y: 233.3558
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 162.6839,
   y: 233.3488
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 161.3118,
   y: 233.3438
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 160.4884,
   y: 233.3408
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 160.749,
   y: 233.6047
  }).wait(61));
  this.instance_15 = new lib.bg1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(204, 400, 1, 1, 0, 0, 0, 150, 197);
  var maskedShapeInstanceList = [this.instance_15];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_16 = new lib.bg2_1();
  this.instance_16.parent = this;
  this.instance_16.setTransform(204, 400, 1, 1, 0, 0, 0, 150, 197);
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
  }, 1).wait(170));
  this.instance_17 = new lib.bg3_1();
  this.instance_17.parent = this;
  this.instance_17.setTransform(204, 400, 1, 1, 0, 0, 0, 150, 197);
  this.instance_17._off = true;
  var maskedShapeInstanceList = [this.instance_17];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(209).to({
   _off: false
  }, 0).wait(65).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).wait(91));
  this.instance_18 = new lib.bg1();
  this.instance_18.parent = this;
  this.instance_18.setTransform(204, 400, 1, 1, 0, 0, 0, 150, 197);
  this.instance_18._off = true;
  var maskedShapeInstanceList = [this.instance_18];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(289).to({
   _off: false
  }, 0).wait(91));
  this.instance_19 = new lib.bg_01();
  this.instance_19.parent = this;
  this.instance_19.setTransform(120, 200, 1, 1, 0, 0, 0, 120, 200);
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(380));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-226.3, 0, 789.5999999999999, 500);
 (lib.toyota_320x500 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(155, 249, 435, 251);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 320,
  height: 500,
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