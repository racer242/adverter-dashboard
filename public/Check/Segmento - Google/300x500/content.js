(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 300, 312);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 377, 393);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 377, 393);
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
  this.shape.graphics.f("#FF0022").s().p("ACJDQQgPgPAAgaQAAgjATgXQAWgaAjAAQAbABAOAPQAPAPAAAZQAAAkgTAXQgWAZgiAAQgdAAgNgPgACvCAIgEAaIgCAUQAAATANgBQANABAFgOQADgIADgRIABgXQAAgRgNgBQgNAAgGAPgAhxDQQgPgPAAgaQAAgjAUgXQAVgaAjAAQAbABAPAPQANAPAAAZQAAAkgSAXQgWAZgiAAQgcAAgOgPgAhKCAQgDAFgCAVIgCAUQAAATANgBQANABAFgOQADgIADgRIACgXQAAgRgOgBQgNAAgFAPgAHSDcIAFAAQAFgBAAgBIAAgGQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgDAAIACgEQADgDgBgLQgBgJgDgBQgFgCACgHIALgYQAGgOABgLQAAgGAHgSQAGgPgDgLQgCgEACgOQAAgLAGgVQAHgWABgJQABgHgCgJIgDgOIABgDIgBADQgBAFgDgDIgBgBIAEAFIABAIQABAGAAAOIgBACIgEgEIgCgCQgBgEgDAAIACAEIABAAIAAABIgEAKIgDABIgDgBQgIgDADgMIAFgNQACgHAHgEIAAgCIgGgDIgFgEIAFgBIAHgDIAHAAQgFgCgFACIgIADIgCAAIgBAAIAAgBQAHgMAEgPQABgKACgUQABgZABgMQAEgUALgOIAFgJIAAgCIgDAAQAAACgLANQgGAJgBAIQgFAqgBAWQAAAIgFAKIgIAQIgBACIgDgCIgCgDIgBACQgBADgFABIgCgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgTQgBgFACgMIABgRQgBgdgCgMQgCgXgIgSIgHgJIgBgCQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIADADIAFAHIAAABIgBAAQgFgDgCgGIgCgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIADgDQAHgDAJgCIANgBIADAAIgjAAIABABIAIAAIgHADQgOAGAAAIIAEgDIABABIgCAHIgDgCQABAFADAGIAGANIACAFIgCgHIAAgBIABABQAGARgCARIgBAZQACgagEgZQAAAFgDAHQgDAJAAAEIgCAQIgCAPQgBAFgBAhIAAADIACAAQABgHACgCIACgKQAAgfAGgdQABAfgEAXQgFAdgPAXIgBADQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEIABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAEgEIACgHIgBgDIgBACQgBAAgBAAQAAAAAAAAQgBABAAABQAAAAAAABQAAABAAABQAAAAAAAAQgBAAgBAAQAAgBgBgBIgBAAIgBABIgDAEIgCgTIAAgEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAgBIAFgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgEgEABQAAABgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAgCIAAADIgBgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgCABIgBABIgBgGIACAAIAEgBIABgFIgEgCIgDAAIAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAgBgBQgFgCACgDQABgCAFgDIACgDIgDgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIAAgEIABgZQAAgPgIgKQgDgEgHgEIgCgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQADgHAHgDQAFgDALgBIABgBICiAAIg/G6gAGbhEQAAABAAABQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgCQAAgEgEABIgCAAIABADgAHzi9QAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAEAAIAIABIADgBIgEAAIgFAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAFgBIAFAAIAHgCQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIADgEIgEAEQgDAEgGgBIgLgBQgGABAAAFgAHzjMQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAFAAIAUAAIACAAIgCAAQgPABgGgCIgCgBIACgCIAXgBIAAgCIgVgBQgJABABAFgAEMDcIA+m6IBVAAIgRADQgKADgFAGIgCAEIADgBIABABIAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAIAbQACARAAAMQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgXgHgaAOQgDABgCAGQAAAAABABQAAAAAAABQABAAABAAQABAAABABIAAAAIAAABIgBABQAAABgBAAQAAAAAAAAQAAAAAAABQABAAAAAAIACADQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQAGgDAHACIANACQAGAAgBAHQgSBPAQA7IAAABIgBAAIgBgCIAAAEIACALIACAKQAOAlADAOQAIAdABAYIABAMQAAAHgEAFQgDADgBAIQAAALADADIABAFIgDABIgCgBIgCgDIgBADIAAAEIAAAFIACAAgAACDcIAEgkIArgWQAYgPAAgQQAAgIgIgFQgGgDgKAAQgQAAgOAFIAEghQAYgDASgBQA2ABAAAlQAAAVgRARQgMAMgYAMIgLAHIAAAAIA3AAIgFAegAj5DcIAGgkIAqgWQAXgPAAgQQAAgIgHgFQgGgDgKAAQgQAAgPAFIAEghQAZgDASgBQA2ABAAAlQAAAVgRARQgMAMgYAMIgLAHIAAAAIA3AAIgEAegAGYDUQgDAAgDgDIABAAIANACIgCABIgGAAgAHGDHQADgEgDgFQgEgDgHACQgEAAgJgCQgBgBAAgHIAAgQIACADQAAgFACgGIALgiQAIgUAGgOQACgEABgMQgBgNACgFIACgPIACgCIABABQALAWABAZQgBAqgUAtQgEAHgHAAQgFgBgIgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAADQgBAGAEAAIAHABIALACQgCABgDAAIgGAAIgBABIACAEIACAAIAGgBIgGAAQADgBAIABQAFgDABgGQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAIACACIgCACIAAABIACABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBAAIgDABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDADAFACQADABgBAHIgCABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgIABQgEAAAEgJgAGWDOQgFgBABgGIAAgIQgBgEACAAIAJAAIAKACIgCAAQgEgBgBACIAAAHIgBAJQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgFgBgAGkC3IACgCQACgEAAgGIAAgLIAAgEIABAFIABAEIgBAQQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAIgDgBgAGYCyIgBgCIABgLIACAIIAAgBIADgYQgDgJgBgTIgCgdIgCgJIAAgUIADAIIACAHIAJAtQAFAbgCATQgCAFgEACIgHADIgBAAgAHKCwIAAgCIACgGQAPgpAEgdIABgPIAAAEIABgCIAAgBIAAgDIAAACQAAAWgHAYQgDAQgKAcIgCADIgBAAgAGxCBQAHgdABgJQAGgbgFgSIABgDIAFAbQgCAagNAiIAAABgAGwB5IABgWIgBgJIgCgJIABgRIAAgMQgBgEADgCIAFgBQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAEQADAQgDATQgCAPgGAUIAAABgAkaBVIAQgbIgYhKIAdAAIANAsIATgsIAcAAIgzBlgAl6BVIAMhHIgBAAQgGAFgIAMQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAgBIgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAKgWAMgJIAEgXIAbAAIgCAKQAGgBAJAAQAPgBAJALQAHAIABAQQAAAXgPAPQgMAMgWgBIgKgBIgDAUgAlSAEIgHApIAGABQALAAAGgJQAGgIAAgLQAAgHgEgEQgEgEgGgBQgFAAgDACgAGeBKQgGgNABgHIABgCIAGASIAAAEIAAAJIgCgJgAh0A2QgIgJAAgOQABgWALgNQAMgOAWAAQAWgBAHASQAIALgEAVIgzAAQAAARASAAQAQAAANgIIgDAVQgNAHgTgBQgXAAgJgNgAhfARIAZAAQACgRgMAAQgNAAgCARgAjdAuQAJgCACgBQAEgDACgEQAEgGAGgcIAFgSIBBAAIgNBRIgaAAIAJg9IgPAAIgGAXQgEASgGAIQgKAMgVACgAnjAkQABgaAQgOQAPgOAZABQAOAAAQABIgOBRIgZAAIABgJIgBAAQgHALgOAAQgbABAAgggAnAALQgGAKgBALQgBAGADAFQADADAEAAQAJAAAFgGIAGglIgDgBQgMAAgHAJgAo/A6IADgYQASAJARAAQATAAgBgNQAAgLgQAAIgRAAIADgXIAQAAQAUAAAAgMQgBgJgRAAQgRAAgQAJIAEgaQARgGAWAAQAOAAAKAGQAMAHABAQQAAATgSAFQAHAEADAHQAEAFAAAIQAAAUgPAJQgNAJgUAAQgYAAgPgJgAAmBBIABgqIgYAqIgMAAIgMgqIgKAqIgZAAIAUhRIAbAAIANAnIAVgnIAcAAIAABRgAHfA8IgGgaIAAgBIAAABIAHAYIAAADgAGoA4IgFgDIgBgFIABgMQABgHgCgDQgBgDgBgEIgBgGQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABgDADgBQAEgBAEAFIAEAEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIAAAAIAAAAIgBAIQgCAEgGgFIgBAAIAAAAIAAADIAAgBIABAFIADAOQABAIgEAGQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAIAAgBgAGJAvIgHgEQgEgBgCgFQACgIgBgIIAAgBIABABQAFAMAKACQAEABgCAHQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEgBgAGvArIACgCIAdgKIAAAAIAFgCIgHAEQgTAKgIABgAGuAlIALgDIAKgCIgSAIIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAgAHRAVQABAAAAAAQABAAAAgBQAAAAABgBQAAAAABgBIABgFIAAABIAAAHQAAAFgDABgAF1AJQgHgZAAgZQAAggALgmIABgCIABADIgHAnQgEAYABAQQACAbAEAMIAAADgAHHABIgCgBIAAgEIABgFIATgWIACAAQgCACAHAAQAGAAgHAEQgGAEgCAHIgCALIgCADIAAABgAGLglQgFgWAAgMIAAgVIABgVIAAgBQAJgHgFgBIgHABQgKgDADgIQABgEAIABIADABIgDgBIgEgBQgHAAgEAHQAAAEgGgBIgHgBQgFABgEAAQgDAAgCgGIAAgCIACAAIABACIgBgDQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAQAbgLAgALIABACIgBABQgPAAAEAPQAFAYgBALQgCAHABAOIACALIADAMQAAAAAAABQAAAAABAAQAAAAABABQAAAAABABQADABgEADIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAQgIgCgBgIgAGdgeIAAgBQAHgHAGgNIgGANIAAABQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIACAAIgEAFIgFAFgAD6giIAKhAIgcBAIgyAAIAPhZIAeAAIgLA+IAag+IAzAAIgOBZgABSgiIAOhZIA6AAQANAAAIAHQAKAHgDAQQgCASgLAHQgKAIgOAAIgYAAIgFAagAB6hPIAIAAQARAAABgNQACgLgRAAIgHAAgAAjgiIALg/IgXAAIgLA/IghAAIAPhZIBZAAIgOBZgAhsgiIAEghIgXAAIgEAhIgjAAIAOhZIAiAAIgEAeIAWAAIAFgeIAiAAIgOBZgAjOgiIgDgTIgcAAIgJATIghAAIAthZIAvAAIASBZgAjlhLIATAAIgEgdIgBAAgAlngiIAOhZIA6AAQANAAAIAHQAJAHgCAQQgDASgLAHQgKAIgOAAIgYAAIgEAagAk/hPIAHAAQARAAACgNQACgLgSAAIgGAAgAm9giIAQhZIBLAAIgDAaIgsAAIgJA/gAg9g5IADgWIAjAAIgEAWgAGHiQIAAgJIAAAAIgBgWIAAgBIAAABQADAOAAARIgBACg");
  this.shape.setTransform(198.5, 124.75, 1.2588, 1.2588, 0, 0, 0, -0.2, 0.2);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(198, 125.9, 1.2588, 1.2588, 0, 0, 0, -0.3, 0.2);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(114, 87, 168.8, 77.4), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
  this.shape.setTransform(195.075, 153.325);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_1.setTransform(181.625, 153.325);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgrBJQgSgLgLgTQgMgTAAgYQAAgYAMgSQALgUASgLQAUgKAXAAQAZAAATALQATALALATQALATAAAXQAAAYgLATQgLATgTALQgUALgYAAQgXAAgUgLgAgig6QgPAJgIAPQgJAPAAATQAAATAJAPQAIAPAPAKQAQAIASABQAUgBAPgIQAPgKAJgPQAJgPAAgTQAAgTgJgPQgJgPgPgJQgPgJgUAAQgSAAgQAJg");
  this.shape_2.setTransform(164.75, 153.35);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgiBNQgOgGgJgKIAJgNQAFAFAHAFQAIAEAIAEQAJACALAAQASABALgJQALgJABgQQgBgQgOgIQgOgHgbAAIAAgOQATgBALgEQALgFAEgHQAFgHgBgHQAAgNgJgGQgJgIgPAAQgNAAgLAFQgKAFgIAHIgHgOQAJgHAMgFQANgGAPAAQAPAAAMAFQAKAFAHAJQAGAJAAAMQAAAQgKAJQgIALgQADQATADALAIQAKALABASQAAAOgIALQgGAKgNAHQgNAGgSAAQgUAAgOgHg");
  this.shape_3.setTransform(148.5, 153.35);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgsBSIgMgEIAEgPIAJAEIALAAQAKABAHgHQAGgFAFgMIhAh+IATAAIA1BsIAuhsIATAAIg4B9QgFAMgFAJQgFAIgIAFQgIAFgNABIgNgBg");
  this.shape_4.setTransform(135.875, 153.45);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAoBRIhDhKIgPAAIAABKIgRAAIAAiiIARAAIAABKIAOAAIA+hKIAUAAIhDBPIBJBTg");
  this.shape_5.setTransform(123.2, 153.35);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAuBSIAAhKIhbAAIAABKIgRAAIAAijIARAAIAABKIBbAAIAAhKIARAAIAACjg");
  this.shape_6.setTransform(101.65, 153.325);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAxBmIAAiHIhhCHIgRAAIAAiiIASAAIAACHIBgiHIARAAIAACigAgYhSQgJgGgBgNIAMAAQABAHAGAEQAGADAJAAQAKAAAGgDQAGgEABgHIAMAAQgBANgJAGQgKAHgPAAQgPAAgJgHg");
  this.shape_7.setTransform(84.825, 151.25);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
  this.shape_8.setTransform(69.075, 153.325);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgiBNQgOgGgIgKIAJgNQAFAFAGAFQAIAEAIAEQAJACALAAQASABALgJQALgJABgQQgBgQgOgIQgOgHgbAAIAAgOQATgBALgEQALgFAEgHQAEgHAAgHQAAgNgJgGQgJgIgQAAQgMAAgLAFQgKAFgIAHIgHgOQAIgHANgFQANgGAPAAQAPAAALAFQALAFAHAJQAGAJAAAMQAAAQgJAJQgKALgPADQATADAKAIQALALABASQgBAOgGALQgHAKgNAHQgNAGgSAAQgUAAgOgHg");
  this.shape_9.setTransform(55.15, 153.35);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAxBSIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjg");
  this.shape_10.setTransform(40.525, 153.325);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AA5BlIAAgnIhxAAIAAAnIgQAAIAAg2IAJAAQAFAAAEgGQAFgEADgJQACgJABgLIANhsIBUAAIAACTIATAAIAAA2gAgaAJQgCAQgDAJQgDAKgEADIBLAAIAAiDIg0AAg");
  this.shape_11.setTransform(24.35, 155.25);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAxBmIAAiHIhhCHIgRAAIAAiiIASAAIAACHIBgiHIARAAIAACigAgYhSQgJgGgBgNIAMAAQABAHAGAEQAGADAJAAQAKAAAGgDQAGgEABgHIAMAAQgBANgJAGQgKAHgPgBQgPABgJgHg");
  this.shape_12.setTransform(172.075, 122.35);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AA+BSIAAijIARAAIAACjgAhOBSIAAijIASAAIAABGIAkAAQAZAAANAMQANAMABAVQAAAOgHALQgFALgMAGQgKAGgSAAgAg8BDIAiAAQASAAAJgJQAIgIABgQQAAgQgKgHQgJgIgRAAIgiAAg");
  this.shape_13.setTransform(153.65, 124.425);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAvBSIAAhKIhcAAIAABKIgSAAIAAijIASAAIAABKIBcAAIAAhKIARAAIAACjg");
  this.shape_14.setTransform(135.45, 124.425);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgHBSIAAiTIguAAIAAgQIBrAAIAAAQIgtAAIAACTg");
  this.shape_15.setTransform(121.575, 124.425);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgtBSIAAijIBZAAIAAAQIhHAAIAAA6IBFAAIAAAOIhFAAIAAA7IBJAAIAAAQg");
  this.shape_16.setTransform(109.975, 124.425);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_17.setTransform(97.275, 124.425);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA4BlIAAgnIh/AAIAAiiIARAAIAACTIBaAAIAAiTIARAAIAACTIATAAIAAA2g");
  this.shape_18.setTransform(82.5, 126.35);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAuBSIguhFIguBFIgTAAIA4hSIg2hRIATAAIAsBDIAthDIATAAIg3BRIA5BSg");
  this.shape_19.setTransform(66.2, 124.425);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgsBRIgMgDIAEgPIAJAEIALABQAKAAAHgHQAGgFAFgMIhAh+IATAAIA1BsIAuhsIATAAIg4B9QgFAMgFAIQgFAKgIAFQgIAEgNABQgHAAgGgCg");
  this.shape_20.setTransform(52.275, 124.55);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_21.setTransform(39.225, 124.425);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AA5BlIAAgnIhxAAIAAAnIgQAAIAAg2IAJAAQAFAAAEgFQAFgFADgJQACgJABgLIANhsIBUAAIAACTIATAAIAAA2gAgaAJQgCAPgDAKQgDAKgEADIBLAAIAAiDIg0AAg");
  this.shape_22.setTransform(24.35, 126.35);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAxBmIAAiHIhhCHIgRAAIAAiiIASAAIAACHIBgiHIARAAIAACigAgYhSQgJgGgBgOIAMAAQABAJAGADQAGADAJAAQAKAAAGgDQAGgDABgJIAMAAQgBAOgJAGQgKAHgPgBQgPABgJgHg");
  this.shape_23.setTransform(203.675, 93.45);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AA+BSIAAijIARAAIAACjgAhOBSIAAijIARAAIAABGIAlAAQAZAAANAMQANAMABAVQAAAOgHALQgFALgMAGQgLAGgRAAgAg9BDIAjAAQASAAAJgJQAJgIAAgQQAAgQgKgHQgJgIgRAAIgjAAg");
  this.shape_24.setTransform(185.25, 95.525);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAvBSIAAhKIhcAAIAABKIgRAAIAAijIARAAIAABKIBcAAIAAhKIARAAIAACjg");
  this.shape_25.setTransform(167.05, 95.525);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIARAAIAABGIAkAAQAaAAANAMQANAMAAAVQAAAOgGALQgFALgMAGQgMAGgRAAgAgjBDIAiAAQASAAAJgJQAJgIAAgQQAAgQgJgHQgKgIgRAAIgiAAg");
  this.shape_26.setTransform(152.775, 95.525);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("Ag6BSIgGgCIADgQIAFACIAGABQAGAAADgFQAEgFABgLIAMh/IBZAAIAACiIgSAAIAAiTIg4AAIgLB1QgBAQgHAHQgHAJgOAAIgJgBg");
  this.shape_27.setTransform(137.075, 95.6);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgtBSIAAijIBZAAIAAAQIhHAAIAAA6IBFAAIAAAOIhFAAIAAA7IBJAAIAAAQg");
  this.shape_28.setTransform(125.025, 95.525);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgHBSIAAiTIguAAIAAgQIBrAAIAAAQIgtAAIAACTg");
  this.shape_29.setTransform(112.925, 95.525);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAxBSIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjg");
  this.shape_30.setTransform(98.775, 95.525);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgiBNQgOgGgJgKIAKgOQAEAGAHAFQAIAEAIADQAJAEALAAQASgBALgIQALgJABgQQgBgQgOgIQgOgIgbABIAAgOQATgBALgEQALgFAEgHQAFgGgBgIQAAgMgJgIQgJgGgQgBQgMABgLAEQgLAFgHAHIgHgNQAJgIAMgGQANgFAPAAQAPAAALAFQALAFAHAJQAGAJAAAMQAAAQgJAJQgKALgPADQATACALAJQAKALABASQAAAOgHALQgHALgNAGQgNAGgSAAQgUAAgOgHg");
  this.shape_31.setTransform(83.6, 95.55);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
  this.shape_32.setTransform(70.275, 95.525);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgxBSIAAijIAtAAQARABAMAGQANAGAGALQAGALAAAQQAAANgGAMQgGALgNAHQgMAIgRAAIgcAAIAAA9gAggAGIAaAAQAKAAAJgFQAJgDAFgIQAFgJAAgLQAAgNgFgIQgFgIgJgDQgJgDgKAAIgaAAg");
  this.shape_33.setTransform(57.325, 95.525);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AA+BSIAAijIARAAIAACjgAhOBSIAAijIARAAIAABGIAlAAQAaAAANAMQANAMAAAVQAAAOgHALQgFALgMAGQgKAGgSAAgAg9BDIAjAAQASAAAIgJQAKgIgBgQQAAgQgJgHQgJgIgRAAIgjAAg");
  this.shape_34.setTransform(40.45, 95.525);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_35.setTransform(24.425, 95.525);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(14.8, 74.9, 209.6, 94.6), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAvDCQgYgdAAg3QAAg1AYgdQAXgdArAAQArAAAXAdQAYAdAAA1QAAA3gYAdQgXAegrAAQgrAAgXgegABJAyQgNAUAAAoQAAApANAVQANAUAbAAQAaAAAOgUQANgVAAgpQAAgogNgUQgOgUgaAAQgbAAgNAUgAiUDcIEDm3IAmAAIkDG3gAiygaQgYgeAAg2QAAg1AYgeQAXgdArgBQArABAXAdQAYAeABA1QgBA2gYAeQgXAcgrABQgrgBgXgcgAiYiqQgNAUAAAoQAAApANAUQAOAUAaAAQAaAAAOgUQANgUAAgpQAAgogNgUQgOgUgaAAQgaAAgOAUg");
  this.shape.setTransform(265.075, 140.225);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAsDcIAAhjIjFAAIAAgdIDSk3IAhAAIAAEsIBAAAIAAAoIhAAAIAABjgAhmBRICSAAIAAjbg");
  this.shape_1.setTransform(229.1, 140.25);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(209.5, 87.9, 181.39999999999998, 92.4), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape.setTransform(197.825, 153.05);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgvBOIAAibIAsAAQAPAAAMAGQAMAFAGAMQAGAKAAAPQAAANgGALQgGALgMAGQgMAIgPgBIgbAAIAAA7gAgeAFIAZAAQAJAAAJgEQAIgDAFgIQAFgIAAgLQAAgMgFgIQgFgHgIgEQgJgDgJAAIgZAAg");
  this.shape_1.setTransform(186.2, 153.05);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgyBOIAAibIBTAAIAAAPIhDAAIAAA0IAiAAQAagBAMALQANAMAAAUQAAAOgGAKQgFALgLAFQgMAGgRAAgAgiA/IAhAAQARABAJgJQAJgHAAgQQAAgPgJgHQgKgHgQAAIghAAg");
  this.shape_2.setTransform(173.85, 153.05);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAmBOIAAhCIgdAAIgCAAIgCAAIgnBCIgTAAIArhFQgOgFgHgLQgHgLgBgPQABgUANgMQANgMAWAAIAsAAIAACbgAgEg8QgIADgFAHQgFAHAAALQAAAMAFAGQAEAHAIAEQAGADAJAAIAcAAIAAg/IgbAAIgCAAQgIAAgFADg");
  this.shape_3.setTransform(159.575, 153.05);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgpBGQgSgLgLgRQgKgTAAgXQAAgWAKgTQALgRASgLQATgKAWgBQAYABASAKQASALALARQAKATAAAWQAAAXgKATQgLARgSALQgTAKgXAAQgWAAgTgKgAggg3QgPAIgIAOQgIAPAAASQAAASAIAPQAIAOAPAJQAOAIASAAQATAAAOgIQAPgJAIgOQAJgPAAgSQAAgSgJgPQgIgOgPgIQgOgJgTAAQgSAAgOAJg");
  this.shape_4.setTransform(144.625, 153.05);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAsBOIAAhGIhXAAIAABGIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_5.setTransform(127.475, 153.05);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMAKAAATQAAAKgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQAAAIgIQAJgIAAgNQAAgOgIgGQgIgIgOABIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgHQgIgIgPAAIgaAAg");
  this.shape_6.setTransform(108.725, 153.05);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhJIgbBJIA2AAg");
  this.shape_7.setTransform(90.025, 153.05);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAmBOIg/hHIgQAAIAABHIgQAAIAAibIAQAAIAABGIAOAAIA7hGIATAAIhABMIBHBPg");
  this.shape_8.setTransform(77.6, 153.05);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMAKAAATQAAAKgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAANgFAKQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQAAAIgIQAJgIAAgNQAAgOgIgGQgIgIgOABIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgHQgIgIgPAAIgaAAg");
  this.shape_9.setTransform(64.025, 153.05);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhJIgbBJIA2AAg");
  this.shape_10.setTransform(50.225, 153.05);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgHBOIAAiNIgsAAIAAgOIBnAAIAAAOIgrAAIAACNg");
  this.shape_11.setTransform(38, 153.05);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgcBGQgSgLgKgRQgLgTAAgXQAAgXALgSQAKgSASgKQATgKAWgBQAPABAOAEQANAFAKAIIgFAQQgKgJgMgEQgMgEgNAAQgSgBgOAJQgOAIgJAOQgIAPAAASQAAASAIAPQAJAOAOAJQAOAIASAAQAPAAANgEQAMgGAKgHIAFAQQgMAJgOADQgNAGgQgBQgXAAgSgKg");
  this.shape_12.setTransform(25.225, 153.05);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAmBOIAAhBIgdAAIgCAAIgCAAIgnBBIgTAAIArhEQgOgGgHgKQgHgLgBgPQABgVANgMQANgMAWAAIAsAAIAACbgAgEg8QgIADgFAHQgFAHAAALQAAALAFAIQAEAGAIADQAGADAJAAIAcAAIAAg+IgbAAIgCAAQgIAAgFADg");
  this.shape_13.setTransform(131.075, 124.2);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAzBOIgTgyIhAAAIgTAyIgRAAIA8ibIARAAIA8CbgAAbAOIgbhIIgbBIIA2AAg");
  this.shape_14.setTransform(118.375, 124.2);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_15.setTransform(103.475, 124.2);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgHBOIAAiNIgsAAIAAgOIBnAAIAAAOIgrAAIAACNg");
  this.shape_16.setTransform(90.25, 124.2);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AAvBOIAAiBIhdCBIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbg");
  this.shape_17.setTransform(76.775, 124.2);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_18.setTransform(61.325, 126.025);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_19.setTransform(48.825, 124.2);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgvBOIAAibIArAAQARAAAMAGQALAGAGAKQAGALAAAOQAAAOgGAMQgGAJgLAIQgMAGgRABIgbAAIAAA6gAgfAFIAZAAQAKAAAJgEQAIgDAFgIQAFgIAAgMQAAgMgFgHQgFgHgIgDQgJgEgKAAIgZAAg");
  this.shape_20.setTransform(37.2, 124.2);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AAlBOIg+hIIgQAAIAABIIgQAAIAAibIAQAAIAABHIAOAAIA7hHIAUAAIhBBMIBHBPg");
  this.shape_21.setTransform(25.05, 124.2);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAmBOIAAhCIgdAAIgCAAIgCAAIgnBCIgTAAIArhFQgOgFgHgLQgHgLgBgPQABgUANgMQANgMAWAAIAsAAIAACbgAgEg8QgIADgFAHQgFAHAAALQAAAMAFAGQAEAIAIACQAGAEAJAAIAcAAIAAg+IgbAAIgCgBQgIAAgFADg");
  this.shape_22.setTransform(168.325, 95.35);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbANIgbhIIgbBIIA2AAg");
  this.shape_23.setTransform(155.625, 95.35);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAsBOIAAhGIhXAAIAABGIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_24.setTransform(140.725, 95.35);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgyBOIAAibIARAAIAABDIAiAAQAZAAAMALQANALAAAUQAAAOgFAKQgGAKgLAGQgLAGgRAAgAghA/IAgAAQARABAJgJQAJgHAAgQQAAgPgKgHQgJgHgQAAIggAAg");
  this.shape_25.setTransform(127.1, 95.35);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("Ag3BOIgGgCIADgPIAFACIAFABQAGAAADgFQADgFABgKIAMh6IBVAAIAACbIgRAAIAAiMIg1AAIgLBwQgBAPgHAHQgGAIgNAAIgJgBg");
  this.shape_26.setTransform(112.075, 95.425);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbANIgbhIIgbBIIA2AAg");
  this.shape_27.setTransform(99.375, 95.35);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAvBOIAAiCIhdCCIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbg");
  this.shape_28.setTransform(84.325, 95.35);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AA1BgIAAgkIh5AAIAAibIAQAAIAACMIBWAAIAAiMIARAAIAACMIASAAIAAAzg");
  this.shape_29.setTransform(69, 97.175);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAPIhEAAIAAA3IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_30.setTransform(54.575, 95.35);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AArBOIAAiMIhVAAIAACMIgRAAIAAibIB3AAIAACbg");
  this.shape_31.setTransform(40.475, 95.35);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgcBGQgSgLgKgRQgLgTAAgXQAAgXALgSQAKgSASgKQATgKAWgBQAPABAOAEQANAFAKAIIgFAQQgKgJgMgEQgMgFgNABQgSgBgOAJQgOAIgJAOQgIAPAAASQAAASAIAPQAJAOAOAJQAOAIASAAQAPAAANgEQAMgGAKgHIAFAQQgMAJgOADQgNAGgQAAQgXgBgSgKg");
  this.shape_32.setTransform(25.225, 95.35);
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(15, 75.5, 190.3, 93.1), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(64, 29, 0.8237, 0.8231);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(64, 29, 98, 33.8), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AALBZIAAgjIhLAAIAAgWIBMh4IAgAAIAABzIAVAAIAAAbIgVAAIAAAjgAghAbIAsAAIAAhFg");
  this.shape.setTransform(71.95, 57.475);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgSBZIhAixIAlAAIAtCJIAviJIAkAAIhBCxg");
  this.shape_1.setTransform(57.025, 57.475);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAwBZIgRgyIg+AAIgSAyIgiAAIBCixIAjAAIBCCxgAAWAMIgWg/IgWA/IAsAAg");
  this.shape_2.setTransform(40.525, 57.475);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAdBZIgphFIgWAAIAABFIghAAIAAixIA+AAQASAAANAHQANAHAHAMQAHALAAAPQAAARgJANQgIAMgQAIIAwBLgAgigGIAXAAQAIAAAGgDQAGgDAEgGQAEgGAAgKQAAgNgIgHQgIgGgLAAIgYAAg");
  this.shape_3.setTransform(24.975, 57.475);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAwBZIgRgyIg+AAIgSAyIgiAAIBCixIAjAAIBCCxgAAWAMIgWg/IgWA/IAsAAg");
  this.shape_4.setTransform(106.775, 26.825);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgQBZIAAiTIgvAAIAAgeIB/AAIAAAeIgvAAIAACTg");
  this.shape_5.setTransform(91.625, 26.825);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgvBQQgVgMgMgUQgMgVAAgbQAAgaAMgVQAMgUAVgMQAVgLAaAAQAbAAAVALQAVAMAMAUQAMAUAAAbQAAAbgMAUQgMAVgVALQgVAMgbAAQgaAAgVgLgAgdgzQgNAIgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAHAQAAQARAAANgHQANgIAHgNQAIgOAAgRQAAgQgIgOQgHgNgNgIQgNgHgRAAQgQAAgNAHg");
  this.shape_6.setTransform(74.775, 26.825);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgQBZIAAhGIg8hrIAlAAIApBNIAphNIAhAAIg8BsIAABFg");
  this.shape_7.setTransform(57.25, 26.825);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgvBQQgVgMgMgUQgMgVAAgbQAAgaAMgVQAMgUAVgMQAVgLAaAAQAbAAAVALQAVAMAMAUQAMAUAAAbQAAAbgMAUQgMAVgVALQgVAMgbAAQgaAAgVgLgAgdgzQgNAIgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAHAQAAQARAAANgHQANgIAHgNQAIgOAAgRQAAgQgIgOQgHgNgNgIQgNgHgRAAQgQAAgNAHg");
  this.shape_8.setTransform(39.725, 26.825);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQBZIAAiTIgvAAIAAgeIB/AAIAAAeIgvAAIAACTg");
  this.shape_9.setTransform(22.875, 26.825);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(14, 4.5, 181.5, 70.3), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
  this.shape.setTransform(195.625, 482.075);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAYIATgYIgTgXIAIAAIAUAXIgUAYgAgaAYIAUgYIgUgXIAKAAIASAXIgSAYg");
  this.shape_1.setTransform(191.025, 479.45);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAggAeIAAg7IAJAAIAAAZIARAAQAIAAAHAEQAFADAAAJQAAAGgDAEQgCAEgFACQgEACgGAAgAgXAXIARAAQAGAAADgDQACgDAAgFQABgFgEgDQgCgCgIgBIgPAAg");
  this.shape_2.setTransform(183.8, 479.55);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEADAHQAEAHAAAJQAAAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFAAAHQAAAHADAEQACAFAGADQAEAEAGAAQAGAAAFgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_3.setTransform(176, 480.725);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_4.setTransform(168.65, 479.525);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHABAEACQAEAEAAAHQAAAGgDADQgDAFgFABQgFACgGAAgAgOAXIAPAAQAHAAAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgBABgDIABgFQAAgEgDgDQgEgCgFAAIgNAAg");
  this.shape_5.setTransform(162.375, 479.55);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_6.setTransform(155.35, 479.525);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAHgEAHAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAEADAGAAQAFAAAFgCIAJgFIADAIQgEADgGABQgFACgIAAQgHAAgGgEg");
  this.shape_7.setTransform(148.8, 479.525);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAGgEAJAAQAGAAAFACQAFABAEADIgCAIIgIgFQgFgBgFAAQgGAAgFADQgFADgCAFQgEAFAAAGQAAAHAEAFQACAGAFADQAFADAFAAQAGAAAFgCIAJgFIACAIQgEADgGABQgGACgGAAQgIAAgGgEg");
  this.shape_8.setTransform(142.8, 479.525);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_9.setTransform(136.05, 479.525);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAHAEQAGAEADAHQAEAHABAJQgBAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgFADgDAFQgDAFAAAHQAAAHADAEQADAFAFADQAEAEAGAAQAGAAAFgDQAGgDACgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_10.setTransform(128.85, 480.725);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AANAeIgZgcIgCAAIAAAcIgJAAIAAg7IAJAAIAAAZIACAAIAZgZIAKAAIgbAcIAcAfg");
  this.shape_11.setTransform(122.4, 479.55);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAHAEQAGAEADAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAIAAAGgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_12.setTransform(112.8, 479.525);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAggAeIAAg7IAJAAIAAAZIARAAQAIAAAHAEQAFADAAAJQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAXIARAAQAGAAACgDQADgDAAgFQAAgFgDgDQgDgCgHgBIgPAAg");
  this.shape_13.setTransform(105.15, 479.55);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_14.setTransform(97.325, 479.55);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_15.setTransform(90.175, 480.425);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgDgHQgFgHAAgJQAAgIAFgHQADgHAHgEQAIgEAIAAQAJAAAIAEQAHAEAEAHQADAHAAAIQAAAJgDAHQgEAHgHAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_16.setTransform(83.1, 479.525);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHABAEACQAEAEAAAHQAAAGgDADQgDAFgFABQgFACgGAAgAgOAXIAPAAQAHAAAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgBABgDIABgFQAAgEgDgDQgEgCgFAAIgNAAg");
  this.shape_17.setTransform(76.575, 479.55);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AATAeIAAgvIglAvIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_18.setTransform(69.45, 479.55);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEADAHQAEAHAAAJQAAAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFAAAHQAAAHADAEQACAFAGADQAEAEAGAAQAGAAAFgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_19.setTransform(62.15, 480.725);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_20.setTransform(54.525, 479.55);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_21.setTransform(47.3, 479.525);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_22.setTransform(40.075, 479.55);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgbAeIgCgBIABgIIACABIADABQAEgBACgCQACgCAAgGIAGgqIAnAAIAAA8IgIAAIAAg0IgYAAIgFAkQAAAJgEADQgEAFgGAAIgGgBg");
  this.shape_23.setTransform(32.45, 479.6);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_24.setTransform(25.75, 479.525);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_25.setTransform(18.525, 479.55);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgJAAgGgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_26.setTransform(283.2, 465.425);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAJAAIAAA7gAgfAeIAAg7IAIAAIAAAZIAQAAQAKAAAFAEQAGADAAAJQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAYIAQAAQAHAAACgEQAEgDAAgFQgBgFgDgDQgDgDgHAAIgPAAg");
  this.shape_27.setTransform(275.55, 465.45);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_28.setTransform(267.725, 465.45);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEADAHQAEAHAAAJQAAAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFAAAHQAAAHADAEQACAFAGADQAEAEAGAAQAGAAAFgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_29.setTransform(260.6, 466.625);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_30.setTransform(253.25, 465.425);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAaAeIAAgvIgXAnIgFAAIgXgnIAAAvIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_31.setTransform(245.475, 465.45);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgPAdQgGgCgDgCIACgIQADADAGACQAGACAHAAQAHAAAEgDQAFgCAAgGQAAgDgCgCQgDgDgFgBIgOgBIAAgGQALAAAFgDQAFgDAAgFQAAgEgDgCQgEgDgGAAQgFAAgEACIgJAEIgCgIIAKgEQAFgBAFAAQAKAAAGAEQAGAEAAAHQAAAGgEAEQgEAEgHABIAJABQAEACADADQACADAAAFQAAAGgDAEQgEAEgFABQgGACgHAAQgIAAgHgCg");
  this.shape_32.setTransform(237.975, 465.425);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_33.setTransform(231.625, 465.425);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgDgDgDgFIAAAlgAgKgfQgGADgCAFQgEAFAAAHQAAAHAEAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgGAAQgGAAgFADg");
  this.shape_34.setTransform(224.85, 466.625);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_35.setTransform(217.5, 465.425);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_36.setTransform(210.525, 465.45);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_37.setTransform(203.375, 466.325);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAGAAAGgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgIAAgHgEgAAUgFQAAgFgEgEQgCgEgEgCQgEgDgFAAQgFAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_38.setTransform(196.65, 465.425);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAGAEQAHAEADAHQAFAHAAAJQAAAJgFAGQgDAHgHAEQgGAEgJAAIgIgBQgEgBgDgDQgEgDgDgFIAAAlgAgKgfQgFADgEAFQgCAFAAAHQAAAHACAEQAEAFAFADQAEAEAGAAQAGAAAGgDQAFgDACgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_39.setTransform(189.7, 466.625);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgPAmQgKgFgFgKQgGgKAAgNQAAgMAGgKQAGgJAJgGQAKgGAMAAQAIAAAIADQAHACAFAFIgCAIQgGgEgGgDQgGgCgIAAQgJAAgIAFQgIAEgEAIQgFAIAAAJQAAAKAFAIQAEAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgHACgJAAQgMAAgKgGg");
  this.shape_40.setTransform(181.5, 464.175);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIAKAAIgUAXIAUAYgAgGAYIgUgYIAUgXIAIAAIgTAXIATAYg");
  this.shape_41.setTransform(174.125, 465.35);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_42.setTransform(164.5, 465.45);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgIAAIAAg7IAIAAIAAAvIAlgvIAJAAIAAA7g");
  this.shape_43.setTransform(157, 465.45);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AAXAnIAAgSIg0AAIAAg7IAIAAIAAA0IAiAAIAAg0IAIAAIAAA0IAKAAIAAAZg");
  this.shape_44.setTransform(150, 466.325);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_45.setTransform(142.475, 465.425);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_46.setTransform(135.675, 465.45);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAUAeIAAgwIgmAwIgIAAIAAg7IAIAAIAAAvIAmgvIAIAAIAAA7g");
  this.shape_47.setTransform(128.35, 465.45);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAaAeIAAgvIgXAnIgFAAIgXgnIAAAvIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_48.setTransform(120.225, 465.45);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_49.setTransform(112.2, 465.425);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_50.setTransform(104.975, 465.45);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAFAAAGQAAAGgDAEQgDAEgFABQgFACgGAAgAgOAYIAPAAQAHAAAEgEQADgDAAgEQAAgGgEgCQgEgDgHAAIgOAAgAgOgDIANAAQAEAAADgCQADgBABgDIABgEQAAgFgDgCQgEgCgFAAIgNAAg");
  this.shape_51.setTransform(95.625, 465.45);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAIAAIAAAZIAQAAQAKAAAGAEQAFADAAAJQAAAGgCAEQgDAEgFACQgEACgGAAgAgOAYIAQAAQAGAAAEgEQADgDAAgFQAAgFgEgDQgDgDgIAAIgOAAg");
  this.shape_52.setTransform(86.575, 465.45);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgbAeIgDgBIACgIIADABIADAAQADABABgDQADgDAAgFIAFgqIApAAIAAA7IgJAAIAAg0IgZAAIgEAlQgBAIgEAFQgDADgHAAIgFAAg");
  this.shape_53.setTransform(79.2, 465.5);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_54.setTransform(72.85, 465.425);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_55.setTransform(66.825, 465.45);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_56.setTransform(60.45, 465.45);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_57.setTransform(53.125, 466.325);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_58.setTransform(46.4, 465.425);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgLAsQgFgCgFgFQgEgFgDgJQgCgJAAgOQAAgMADgJQADgJAHgFQAHgFAMgCIAEgBIADAAIAHgBIAFgBIAEAAIABAHIgIABIgHABIgEABIgDAAQgHABgGADQgGADgDAHQgDAHgBAMQAEgGAGgDQAHgEAHAAQAJAAAGAEQAHAEADAHQAEAGAAAJQAAAJgEAHQgDAHgHAEQgHAEgKAAIgBAAQgFAAgFgCgAgIgFIgIAFQgEADgCAEQABAMADAHQADAHAFADQAFADAFAAQAHAAAFgDQAFgDADgGQADgFAAgHQAAgHgDgFQgDgEgFgDQgEgDgHAAQgEAAgFACg");
  this.shape_59.setTransform(39.375, 463.9292);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_60.setTransform(32, 465.425);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAXAqIAAhMIgtAAIAABMIgKAAIAAhTIBAAAIAABTg");
  this.shape_61.setTransform(23.95, 464.2);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgIIAPAHIgBgQIAHAAIgCAQIAPgHIADAIIgPADIAKAMIgHAFg");
  this.shape_62.setTransform(17.25, 461.85);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(12.9, 452.5, 275.70000000000005, 35.19999999999999), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgbAeIgDgBIACgIIADABIADAAQADABABgDQADgDAAgFIAFgqIApAAIAAA7IgJAAIAAg0IgZAAIgEAlQgBAIgEAFQgDADgGAAIgGAAg");
  this.shape.setTransform(54.45, 465.95);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAUArIAAgvIgmAvIgIAAIAAg7IAIAAIAAAwIAmgwIAIAAIAAA7gAgMgeQgFgFAAgIIAHAAQAAAFADADQADACAEAAQAGAAADgCQACgDAAgFIAHAAQAAAIgFAFQgFADgIAAQgHAAgFgDg");
  this.shape_1.setTransform(47.55, 464.55);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_2.setTransform(40.225, 465.875);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_3.setTransform(34.275, 465.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgHgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQAJAAAGADQAIACAGAFIgDAIQgGgEgGgDQgHgCgHAAQgJAAgIAFQgIAEgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgIACgIAAQgMAAgKgGg");
  this.shape_4.setTransform(27.4, 464.625);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgIIAPAHIgBgQIAHAAIgCAQIAQgHIACAIIgPADIAKAMIgHAFg");
  this.shape_5.setTransform(17.6, 462.3);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(13.2, 452.9, 229.8, 21.100000000000023), null);
 (lib.snoska = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgBAYIATgYIgTgXIAIAAIAUAXIgUAYgAgaAYIAUgYIgUgXIAKAAIASAXIgSAYg");
  this.shape.setTransform(116.575, 479.8);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AANAeIgYgcIgEAAIAAAcIgIAAIAAg7IAIAAIAAAZIAEAAIAXgZIALAAIgcAcIAdAfg");
  this.shape_1.setTransform(111.1, 479.9);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_2.setTransform(104.025, 479.9);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_3.setTransform(96.875, 479.875);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgbArIAAhVIAsAAIAAAIIgjAAIAAAcIASAAQAOABAHAFQAHAHAAALQAAAHgDAFQgDAGgGADQgHADgJABgAgSAjIASAAQAJAAAEgFQAFgEAAgIQAAgIgFgFQgFgEgIAAIgSAAg");
  this.shape_4.setTransform(90.325, 478.65);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_5.setTransform(79.825, 479.875);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_6.setTransform(73.875, 479.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgFgHQgDgHgBgJQABgIADgHQAFgHAHgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQAEAHAAAIQAAAJgEAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_7.setTransform(67.5, 479.875);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AATAsIAAgwIglAwIgJAAIAAg7IAJAAIAAAuIAlguIAIAAIAAA7gAgMgfQgFgEAAgHIAHAAQAAAEADADQADACAEAAQAFAAADgCQADgDAAgEIAHAAQAAAHgFAEQgFAEgIABQgHgBgFgEg");
  this.shape_8.setTransform(60, 478.55);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgDgHQgFgHAAgJQAAgIAFgHQADgHAHgEQAIgEAIAAQAJAAAIAEQAHAEAEAHQADAHAAAIQAAAJgDAHQgEAHgHAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_9.setTransform(52.5, 479.875);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgDArIAAhNIgYAAIAAgIIA3AAIAAAIIgXAAIAABNg");
  this.shape_10.setTransform(45.775, 478.65);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIAKAAIgUAXIAUAYgAgGAYIgUgYIAUgXIAIAAIgTAXIATAYg");
  this.shape_11.setTransform(39.675, 479.8);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgFgKQgGgKAAgNQAAgMAGgKQAFgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgRgeQgIAFgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAKAAAIgEQAIgFAFgIQAEgIAAgKQAAgJgEgIQgFgIgIgFQgIgEgKAAQgJAAgIAEg");
  this.shape_12.setTransform(28.475, 478.625);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAcArIgLgcIgiAAIgLAcIgJAAIAhhVIAIAAIAiBVgAAPAIIgPgoIgOAoIAdAAg");
  this.shape_13.setTransform(19.35, 478.65);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAQAeIAAgZIgPAAIgPAZIgJAAIARgaQgGgBgEgEQgEgEAAgHQAAgFADgEQADgEAEgCQAFgCAFAAIAYAAIAAA7gAgIgUQgDADAAAGQAAAFADADQAEACAFAAIAPAAIAAgVIgPAAQgFAAgEACg");
  this.shape_14.setTransform(250.275, 465.775);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAIgEAHAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAFADAFAAQAFAAAFgCIAJgFIADAIQgEADgGABQgFACgIAAQgHAAgHgEg");
  this.shape_15.setTransform(244.55, 465.775);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_16.setTransform(238.725, 465.8);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_17.setTransform(232.7, 465.775);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAQAeIAAgZIgPAAIgPAZIgJAAIARgaQgGgBgEgEQgEgEAAgHQAAgFADgEQADgEAEgCQAFgCAFAAIAYAAIAAA7gAgIgUQgDADAAAGQAAAFADADQAEACAFAAIAPAAIAAgVIgPAAQgFAAgEACg");
  this.shape_18.setTransform(225.825, 465.775);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgbAeIgCgBIABgIIACABIAEAAQADABABgDQACgCABgGIAFgqIApAAIAAA8IgJAAIAAg1IgYAAIgFAlQgBAIgDAFQgEADgGAAIgGAAg");
  this.shape_19.setTransform(218.95, 465.85);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAEAAAHQAAAGgDAEQgDAEgFABQgFACgGAAgAgOAYIAPAAQAHAAAEgEQADgCAAgGQAAgEgEgDQgEgDgHAAIgOAAgAgOgDIANAAQAEAAADgCQADgBABgDIABgFQAAgEgDgCQgEgCgFgBIgNAAg");
  this.shape_20.setTransform(212.925, 465.8);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_21.setTransform(206.825, 465.8);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAGgEAJAAQAGAAAFACQAFABAEADIgCAIIgIgFQgFgBgFAAQgGAAgFADQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFADAFAAQAFAAAGgCIAJgFIACAIQgEADgGABQgFACgIAAQgHAAgGgEg");
  this.shape_22.setTransform(201.2, 465.775);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAHAEQAGAEADAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAIAAAGgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_23.setTransform(194.7, 465.775);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAnAnIAAgSIhVAAIAAg7IAJAAIAAA0IAdAAIAAg0IAIAAIAAA0IAdAAIAAg0IAIAAIAAA0IAKAAIAAAZg");
  this.shape_24.setTransform(186.325, 466.675);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgXAqIgEAAIACgIIACAAIACABQAFAAAEgDQADgCADgHIAEgJIgag4IAJAAIAUAuIATguIAJAAIgcBDQgDAJgFAFQgFAEgIAAIgDgBg");
  this.shape_25.setTransform(177.725, 467.1);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgEgHQgEgHAAgKQAAgIAEgHQAEgHAGgEQAIgEAHAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgCAFQgDAFAAAGQAAAHADAFQACAGAFADQAFADAFAAQAGAAAEgCIAJgFIADAIQgEADgGABQgGACgGAAQgIAAgHgEg");
  this.shape_26.setTransform(171.9, 465.775);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgFgHQgDgHAAgJQAAgIADgHQAFgHAHgEQAGgEAJAAQAKAAAGAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_27.setTransform(165.05, 465.775);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_28.setTransform(155, 465.775);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_29.setTransform(147.75, 465.8);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_30.setTransform(140.325, 465.8);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_31.setTransform(133.175, 465.775);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAEAAAHQAAAGgDAEQgDAEgFABQgFACgGAAgAgOAYIAPAAQAHAAAEgEQADgCAAgGQAAgEgEgDQgEgDgHAAIgOAAgAgOgDIANAAQAEAAADgCQADgBABgDIABgFQAAgEgDgCQgEgCgFgBIgNAAg");
  this.shape_32.setTransform(126.975, 465.8);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAIAEQAHAEADAHQAFAHAAAIQAAAJgFAHQgDAHgHAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_33.setTransform(119.85, 465.775);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_34.setTransform(113.475, 465.8);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AAUAeIAAgwIgmAwIgJAAIAAg7IAJAAIAAAvIAmgvIAHAAIAAA7g");
  this.shape_35.setTransform(107, 465.8);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_36.setTransform(99.575, 466.675);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_37.setTransform(92.75, 465.775);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAGgDQAGgDAHAAQAIAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgHgBQgFgBgDgDQgEgDgDgFIAAAlgAgLgfQgEADgDAFQgEAFAAAHQAAAHAEAEQADAFAEADQAGAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgGAAQgGAAgGADg");
  this.shape_38.setTransform(85.7, 466.975);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AAUArIghgnIgIAAIAAAnIgJAAIAAhVIAJAAIAAAnIAGAAIAggnIALAAIgjAqIAnArg");
  this.shape_39.setTransform(78.45, 464.55);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgIIAPAHIgBgQIAHAAIgBAQIAOgHIADAIIgPADIAJAMIgGAFg");
  this.shape_40.setTransform(68.75, 462.2);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgIIAPAHIgBgQIAHAAIgCAQIAPgHIADAIIgPADIAKAMIgHAFg");
  this.shape_41.setTransform(64.05, 462.2);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AgbAeIgCgBIABgIIACABIAEAAQADABABgDQACgCABgGIAFgqIApAAIAAA8IgJAAIAAg1IgYAAIgFAlQAAAIgEAFQgEADgGAAIgGAAg");
  this.shape_42.setTransform(54.6, 465.85);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAUAsIAAgwIgmAwIgJAAIAAg8IAJAAIAAAwIAmgwIAIAAIAAA8gAgMgeQgFgFAAgIIAGAAQABAFADADQADACAEAAQAFAAADgCQADgDABgFIAGAAQAAAIgFAFQgFADgIAAQgIAAgEgDg");
  this.shape_43.setTransform(47.7, 464.45);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_44.setTransform(40.375, 465.775);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_45.setTransform(34.425, 465.8);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgHgKQgFgKAAgNQAAgMAFgKQAHgJAKgGQAJgGAMAAQAJAAAGADQAIACAGAFIgEAIQgFgEgGgDQgHgCgHAAQgJAAgIAFQgIAEgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgHACgJAAQgMAAgKgGg");
  this.shape_46.setTransform(27.55, 464.525);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAAAGIgHANIgHgFIAKgMIgPgDIADgIIAOAHIgBgQIAHAAIgBAQIAPgHIACAIIgQADIAKAMIgGAFg");
  this.shape_47.setTransform(17.75, 462.2);
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
 }).prototype = getMCSymbolPrototype(lib.snoska, new cjs.Rectangle(13.4, 452.8, 242.5, 35.19999999999999), null);
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
 p.nominalBounds = new cjs.Rectangle(0, 0, 266, 330);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(13, 62, 0.5, 0.5);
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
   y: -268
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(148.05, 227, 2.701, 3.3);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(11, 60, 270.1, 339.7), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(25, -19, 0.8377, 0.8377);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(25, -19, 399.6, 221.2), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EgXbAnEMAAAhOHMAu3AAAMAAABOHg");
  this.shape.setTransform(150, 250);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 300, 500), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(49, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(49, 0, 251.5, 262.2), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(49, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(49, 0, 251.5, 262.2), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(49, 0, 0.8378, 0.8398);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(49, 0, 251.39999999999998, 262), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EgXbAnEMAAAhOHMAu3AAAMAAABOHg");
  this.shape.setTransform(150, 250);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 300, 500), null);
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
   regX: 198.4,
   regY: 125.7,
   x: 215.6,
   y: 125.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 213.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 210.7,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 208.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 206.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 204.9,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 203.4,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 202.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 200.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 200,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 199.3,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 198.8,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 198.5,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(114, 87, 188.8, 77.4);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Aw7IpIAAkqMAh3AAAIAAEqg");
  mask.setTransform(108.3542, 55.2847);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 113.7,
   regY: 124.3,
   x: 96.5,
   y: 124.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 99.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 101.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 103.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 105.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 107.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 108.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 110.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 112.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 112.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 113.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 113.6,
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
  mask_1.graphics.p("Aw7K+IAAkqMAh3AAAIAAEqg");
  mask_1.setTransform(108.3542, 70.1847);
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
   regX: 113.7,
   regY: 124.3,
   x: 96.5,
   y: 124.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 99.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 101.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 103.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 105.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 107.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 108.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 110.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 112.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 112.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 113.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 113.6,
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
  mask_2.graphics.p("Aw7NTIAAkqMAh3AAAIAAEqg");
  mask_2.setTransform(108.3542, 85.0847);
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
   regX: 113.7,
   regY: 124.3,
   x: 96.5,
   y: 124.3,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 99.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 101.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 103.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 105.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 107.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 108.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 110.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 111.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 112.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 112.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 113.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 113.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 80.8, 216.7, 88.7);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Aw1ItIAAkVMAhrAAAIAAEVg");
  mask.setTransform(107.7541, 55.7273);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 110.3,
   regY: 124.2,
   x: 93.1,
   y: 124.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 95.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 98,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 100.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 102.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 103.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 106.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 107.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 108.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 110.2,
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
  mask_1.graphics.p("Aw1K4IAAkVMAhrAAAIAAEVg");
  mask_1.setTransform(107.7541, 69.6023);
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
   regX: 110.3,
   regY: 124.2,
   x: 93.1,
   y: 124.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 95.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 98,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 100.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 102.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 103.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 106.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 107.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 108.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 110.2,
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
  mask_2.graphics.p("Aw1NCIAAkVMAhrAAAIAAEVg");
  mask_2.setTransform(107.7541, 83.4273);
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
   regX: 110.3,
   regY: 124.2,
   x: 93.1,
   y: 124.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 95.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 98,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 100.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 102.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 103.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 105.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 106.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 107.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 108.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 109.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 109.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 110.2,
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
  mask_3.graphics.p("AKCNSIAAoxIMhAAIAAIxg");
  mask_3.setTransform(144.2521, 84.9606);
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
   regX: 249.5,
   regY: 140.2,
   x: 232.3,
   y: 140.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 234.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 237.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 239.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 241.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 243,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 244.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 245.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 246.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 247.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 248.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 249.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 249.4,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 83.8, 288.5, 86.10000000000001);
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
   regX: 113,
   regY: 45.9,
   x: 95.8,
   y: 45.9,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 98.35,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 100.7,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 102.8,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 104.75,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 106.5,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 108,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 109.35,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 110.45,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 111.4,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 112.1,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 112.6,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 112.9,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 162, 62.4);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A1EDbIAAmrMAqJAAAIAAGrg");
  mask.setTransform(134.9396, 21.9252);
  this.instance = new lib.t01();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 65.8,
   regY: 42,
   x: 48.6,
   y: 42,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 51.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 53.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 55.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 57.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 59.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 60.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 62.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 63.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 64.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 64.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 65.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 65.7,
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
  mask_1.graphics.p("A1EGTIAAlzMAqJAAAIAAFzg");
  mask_1.setTransform(134.9396, 40.3047);
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
   regX: 65.8,
   regY: 42,
   x: 48.6,
   y: 42,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 51.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 53.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 55.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 57.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 59.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 60.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 62.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 63.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 64.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 64.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 65.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 65.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 4.5, 195.5, 70.3);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(51.4069, 124.9685, 1.2338, 1.2338);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(51.4442, 124.9442, 1.234, 1.234);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(51.65, 125.45, 1.2343, 1.2343, 0, 0, 0, 22.4, 23.2);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(51.65, 125.45, 1.2343, 1.2343, 0, 0, 0, 22.4, 23.2);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(51.4133, 124.975, 1.234, 1.234);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgIBEIAAh1IglAAIAAgRIBbAAIAAARIgkAAIAAB1g");
  this.shape_3.setTransform(208.875, 146.95);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgrBEIAAiGIAqAAQAOgBAKAGQAKAFAFAKQAGAJAAANQAAAMgGAJQgFAJgKAGQgKAHgOgBIgWAAIAAAygAgXACIATAAQAHAAAGgCQAHgDAEgHQADgFAAgJQAAgKgDgFQgEgGgHgCQgGgDgHAAIgTAAg");
  this.shape_4.setTransform(198.225, 146.95);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgjA9QgQgKgJgPQgJgQAAgUQAAgUAJgPQAJgQAQgIQAQgJATAAQAUAAAQAJQAQAIAJAQQAJAPAAAUQAAAUgJAQQgJAPgQAKQgQAJgUgBQgTABgQgJgAgZgrQgLAHgHAKQgGAMAAAOQAAAPAGALQAHAMALAGQALAHAOAAQAPAAALgHQALgGAHgMQAGgLAAgPQAAgOgGgMQgHgKgLgHQgLgHgPAAQgOAAgLAHg");
  this.shape_5.setTransform(183.425, 146.95);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgIBGIAAgPQgUgBgOgGQgOgIgIgMQgIgLAAgRQAAgPAIgMQAIgMAOgIQAOgGAUgCIAAgOIARAAIAAAOQAUACAOAHQAOAHAIAMQAIAMAAAPQAAAQgIAMQgIAMgOAHQgOAHgUABIAAAPgAAJAoQAVgCAMgLQAMgKAAgRQAAgPgMgLQgMgLgVgBgAgpgaQgMALAAAPQAAARAMAKQAMALAVACIAAhOQgVABgMALg");
  this.shape_6.setTransform(166.625, 146.95);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAuBEIAAhsIgnA+IgOAAIgng+IAABsIgSAAIAAiGIAYAAIAoBCIArhCIAWAAIAACGg");
  this.shape_7.setTransform(149.55, 146.95);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgjA9QgQgKgJgPQgJgQAAgUQAAgUAJgPQAJgQAQgIQAQgJATAAQAUAAAQAJQAQAIAJAQQAJAPAAAUQAAAUgJAQQgJAPgQAKQgQAJgUgBQgTABgQgJgAgZgrQgLAHgHAKQgGAMAAAOQAAAPAGALQAHAMALAGQALAHAOAAQAPAAALgHQALgGAHgMQAGgLAAgPQAAgOgGgMQgHgKgLgHQgLgHgPAAQgOAAgLAHg");
  this.shape_8.setTransform(132.575, 146.95);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAeBDIgyg8IgNAAIAAA8IgTAAIAAiFIATAAIAAA7IAMAAIAvg7IAWAAIg0BAIA5BFg");
  this.shape_9.setTransform(118.525, 146.975);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAlBWIAAhpIhKBpIgSAAIAAiGIATAAIAABoIBJhoIATAAIAACGgAgWhDQgHgGgBgLIANAAQABAGAEADQAFACAHAAQAIAAAFgCQAEgDABgGIAMAAQAAALgJAGQgIAGgNAAQgOAAgIgGg");
  this.shape_10.setTransform(194.05, 127.15);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAlBEIAAhpIhKBpIgSAAIAAiGIATAAIAABoIBJhoIATAAIAACGg");
  this.shape_11.setTransform(178.55, 128.95);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAjBEIAAg8IhFAAIAAA8IgTAAIAAiGIATAAIAAA6IBFAAIAAg6IATAAIAACGg");
  this.shape_12.setTransform(163.225, 128.95);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAvBEIAAhsIgoA+IgNAAIgng+IAABsIgUAAIAAiGIAYAAIApBCIAqhCIAXAAIAACGg");
  this.shape_13.setTransform(146.9, 128.95);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAlBEIAAhpIhJBpIgTAAIAAiGIATAAIAABoIBJhoIATAAIAACGg");
  this.shape_14.setTransform(130.45, 128.95);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgdBAQgLgFgIgHIAKgQQAGAHAJAFQAJAEAOAAQANAAAIgGQAIgGAAgMQAAgLgKgGQgKgFgXAAIAAgQQAPAAAIgDQAJgEADgEQAEgFAAgGQgBgKgGgFQgHgEgLgBQgKABgIAEQgJADgHAGIgIgQQAIgFAKgFQALgEAOAAQAUAAAMAJQAKAJABAPQAAANgHAIQgIAIgMADQAPADAIAHQAJAIAAAPQAAALgGAKQgFAJgLAEQgLAGgQgBQgRABgMgGg");
  this.shape_15.setTransform(116.5, 128.95);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAyBcIgSg0IhBAAIgSA0IgkAAIBFi3IAlAAIBFC3gAAWAMIgWhBIgXBBIAtAAg");
  this.shape_16.setTransform(204.375, 103.325);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgRBcIAAiZIgwAAIAAgeICDAAIAAAeIgwAAIAACZg");
  this.shape_17.setTransform(188.95, 103.325);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgxBTQgVgLgNgWQgNgVAAgdQAAgcANgUQAMgWAWgMQAWgMAbAAQAcAAAWAMQAWAMAMAWQANAUAAAcQAAAcgNAWQgMAVgWAMQgWAMgcAAQgbAAgWgMgAgeg1QgOAJgHANQgIAOAAARQAAASAIAOQAHAOAOAIQANAIARAAQASAAANgIQAOgIAHgOQAIgOAAgSQAAgRgIgOQgHgNgOgJQgNgHgSgBQgRABgNAHg");
  this.shape_18.setTransform(171.725, 103.3);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgRBcIAAhIIg+hvIAnAAIAqBPIArhPIAjAAIg/BwIAABHg");
  this.shape_19.setTransform(153.8, 103.325);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgxBTQgVgLgNgWQgNgVAAgdQAAgcANgUQAMgWAWgMQAWgMAbAAQAcAAAWAMQAWAMAMAWQANAUAAAcQAAAcgNAWQgMAVgWAMQgWAMgcAAQgbAAgWgMgAgeg1QgOAJgHANQgIAOAAARQAAASAIAOQAHAOAOAIQANAIARAAQASAAANgIQAOgIAHgOQAIgOAAgSQAAgRgIgOQgHgNgOgJQgNgHgSgBQgRABgNAHg");
  this.shape_20.setTransform(135.875, 103.3);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgRBcIAAiZIgxAAIAAgeICFAAIAAAeIgxAAIAACZg");
  this.shape_21.setTransform(118.7, 103.325);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAktIAAJb");
  this.shape_22.setTransform(98.45, 124);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(18.7, 80.2, 197.9, 80.39999999999999), null);
 (lib.arrow = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EAPpCaKIAAlbMA6cAAAIAAFbg");
  var mask_graphics_1 = new cjs.Graphics().p("EAPpCaKIAAn6MA6cAAAIAAH6g");
  var mask_graphics_2 = new cjs.Graphics().p("EAPpCaKIAAqZMA6cAAAIAAKZg");
  var mask_graphics_3 = new cjs.Graphics().p("EAPpCaKIAAs3MA6cAAAIAAM3g");
  var mask_graphics_4 = new cjs.Graphics().p("EAPpCaKIAAvWMA6cAAAIAAPWg");
  var mask_graphics_5 = new cjs.Graphics().p("EAPpCaLIAAx2MA6cAAAIAAR2g");
  var mask_graphics_6 = new cjs.Graphics().p("EAPpCaLIAA0UMA6cAAAIAAUUg");
  var mask_graphics_7 = new cjs.Graphics().p("EAPpCaLIAA2zMA6cAAAIAAWzg");
  var mask_graphics_8 = new cjs.Graphics().p("EAPpCaLIAA5SMA6cAAAIAAZSg");
  var mask_graphics_9 = new cjs.Graphics().p("EAPpCaLIAA7wMA6cAAAIAAbwg");
  var mask_graphics_10 = new cjs.Graphics().p("EAPpCaMIAA+QMA6cAAAIAAeQg");
  var mask_graphics_11 = new cjs.Graphics().p("EAPpCaMMAAAggvMA6cAAAMAAAAgvg");
  var mask_graphics_12 = new cjs.Graphics().p("EAPpCaMMAAAgjNMA6cAAAMAAAAjNg");
  var mask_graphics_13 = new cjs.Graphics().p("EAPpCaMMAAAglsMA6cAAAMAAAAlsg");
  var mask_graphics_14 = new cjs.Graphics().p("EAPpCaMMAAAgoLMA6cAAAMAAAAoLg");
  var mask_graphics_15 = new cjs.Graphics().p("EAPpCaMMAAAgqpMA6cAAAMAAAAqpg");
  var mask_graphics_16 = new cjs.Graphics().p("EAPpCaNMAAAgtJMA6cAAAMAAAAtJg");
  var mask_graphics_17 = new cjs.Graphics().p("EAPpCaNMAAAgvoMA6cAAAMAAAAvog");
  var mask_graphics_18 = new cjs.Graphics().p("EAPpCaNMAAAgyGMA6cAAAMAAAAyGg");
  var mask_graphics_19 = new cjs.Graphics().p("EAPpCaNMAAAg0lMA6cAAAMAAAA0lg");
  var mask_graphics_20 = new cjs.Graphics().p("EAPpCaNMAAAg3EMA6cAAAMAAAA3Eg");
  var mask_graphics_21 = new cjs.Graphics().p("EAPpCaIMAAAg5jMA6cAAAMAAAA5jg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 474.0741,
   y: 986.5678
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 474.0741,
   y: 986.5862
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 474.0741,
   y: 986.6046
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 474.0741,
   y: 986.623
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 474.0741,
   y: 986.6414
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 474.0741,
   y: 986.6598
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 474.0741,
   y: 986.6782
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 474.0741,
   y: 986.6966
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 474.0741,
   y: 986.715
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 474.0741,
   y: 986.7334
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 474.0741,
   y: 986.7518
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 474.0741,
   y: 986.7702
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 474.0741,
   y: 986.7886
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 474.0741,
   y: 986.807
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 474.0741,
   y: 986.8255
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 474.0741,
   y: 986.8439
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 474.0741,
   y: 986.8623
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 474.0741,
   y: 986.8807
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 474.0741,
   y: 986.8991
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 474.0741,
   y: 986.9175
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 474.0741,
   y: 986.9359
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 474.0741,
   y: 986.4018
  }).wait(1));
  this.instance = new lib.arrow1();
  this.instance.parent = this;
  this.instance.setTransform(608.8, 991.15, 1, 1, 0, 0, 0, 123.9, 124);
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(601.9, 1623.7, 315.70000000000005, 316.0999999999999);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.t04();
  this.instance.parent = this;
  this.instance.setTransform(21, 99.7, 1, 1, 0, 0, 0, 41, 99.7);
  this.instance.alpha = 0;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 116.1,
   regY: 124.9,
   x: 98.9,
   y: 124.9,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 101.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 103.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 105.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 107.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 109.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 111.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 112.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 113.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 114.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 115.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 115.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 116,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 41,
   regY: 99.7,
   x: 41,
   y: 99.7,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-1.3, 80.2, 217.9, 80.39999999999999);
 (lib.content = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1: 69,
   cvr_frame2_1: 149,
   cvr_frame3_1: 273,
   "cvr_frame#4_1": 345,
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
  this.instance.setTransform(229, 14, 1.25, 1.25);
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
  this.instance_10.setTransform(9.55, 28.55, 0.23, 0.23, 0, 0, 0, 41.5, 124.2);
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
  this.instance_11.setTransform(17.75, 9.5);
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
  this.instance_13.setTransform(-82, 437, 1, 1, 0, 0, 180, 100, 1.5);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({
   _off: false
  }, 0).to({
   x: -12
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_14 = new lib.red_line();
  this.instance_14.parent = this;
  this.instance_14.setTransform(350.75, 190.5, 1, 1, 0, 0, 0, 100, 1.5);
  this.instance_14._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({
   _off: false
  }, 0).to({
   scaleX: 1.0108,
   x: 150.1
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_15 = new lib.car_1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(96.2, 327, 1, 1, 0, 0, 0, 120.2, 75);
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
  var mask_graphics_0 = new cjs.Graphics().p("EAD4AjaMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_1 = new cjs.Graphics().p("EAD0AjaMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_2 = new cjs.Graphics().p("EADrAjaMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_3 = new cjs.Graphics().p("EADaAjaMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_4 = new cjs.Graphics().p("EADEAjaMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_5 = new cjs.Graphics().p("EACnAjbMAAAgpSMAooAAAMAAAApSg");
  var mask_graphics_6 = new cjs.Graphics().p("EACDAjbMAAAgpSMAooAAAMAAAApSg");
  var mask_graphics_7 = new cjs.Graphics().p("EABaAjbMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_8 = new cjs.Graphics().p("EAApAjbMAAAgpSMAooAAAMAAAApSg");
  var mask_graphics_9 = new cjs.Graphics().p("EgANAjbMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_10 = new cjs.Graphics().p("EgBKAjbMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_11 = new cjs.Graphics().p("EgCOAjbMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_12 = new cjs.Graphics().p("EgDYAjcMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_13 = new cjs.Graphics().p("EgEoAjcMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_14 = new cjs.Graphics().p("EgF/AjbMAAAgpRMAomAAAMAAAApRg");
  var mask_graphics_15 = new cjs.Graphics().p("EgHXAjbMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_16 = new cjs.Graphics().p("EgIpAjaMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_17 = new cjs.Graphics().p("EgJ0AjaMAAAgpRMAomAAAMAAAApRg");
  var mask_graphics_18 = new cjs.Graphics().p("EgK6AjaMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_19 = new cjs.Graphics().p("EgL6AjaMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_20 = new cjs.Graphics().p("EgMzAjaMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_21 = new cjs.Graphics().p("EgNmAjaMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_22 = new cjs.Graphics().p("EgOUAjZMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_23 = new cjs.Graphics().p("EgO7AjZMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_24 = new cjs.Graphics().p("EgPcAjZMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_25 = new cjs.Graphics().p("EgP4AjZMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_26 = new cjs.Graphics().p("EgQNAjZMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_27 = new cjs.Graphics().p("EgQcAjZMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_28 = new cjs.Graphics().p("EgQlAjZMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_29 = new cjs.Graphics().p("EgQoAjaMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_119 = new cjs.Graphics().p("EAD4AjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_120 = new cjs.Graphics().p("EAD0AjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_121 = new cjs.Graphics().p("EADrAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_122 = new cjs.Graphics().p("EADaAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_123 = new cjs.Graphics().p("EADEAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_124 = new cjs.Graphics().p("EACnAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_125 = new cjs.Graphics().p("EACDAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_126 = new cjs.Graphics().p("EABaAjeMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_127 = new cjs.Graphics().p("EAApAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_128 = new cjs.Graphics().p("EgANAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_129 = new cjs.Graphics().p("EgBKAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_130 = new cjs.Graphics().p("EgCOAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_131 = new cjs.Graphics().p("EgDYAjfMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_132 = new cjs.Graphics().p("EgEoAjfMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_133 = new cjs.Graphics().p("EgF/AjeMAAAgpRMAomAAAMAAAApRg");
  var mask_graphics_134 = new cjs.Graphics().p("EgHSAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_135 = new cjs.Graphics().p("EgIfAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_136 = new cjs.Graphics().p("EgJnAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_137 = new cjs.Graphics().p("EgKpAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_138 = new cjs.Graphics().p("EgLmAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_139 = new cjs.Graphics().p("EgMeAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_140 = new cjs.Graphics().p("EgNRAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_141 = new cjs.Graphics().p("EgN+AjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_142 = new cjs.Graphics().p("EgOmAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_143 = new cjs.Graphics().p("EgPIAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_144 = new cjs.Graphics().p("EgPmAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_145 = new cjs.Graphics().p("EgP9AjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_146 = new cjs.Graphics().p("EgQQAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_147 = new cjs.Graphics().p("EgQdAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_148 = new cjs.Graphics().p("EgQlAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_149 = new cjs.Graphics().p("EgQoAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_209 = new cjs.Graphics().p("EAD4AjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_210 = new cjs.Graphics().p("EAD0AjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_211 = new cjs.Graphics().p("EADrAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_212 = new cjs.Graphics().p("EADaAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_213 = new cjs.Graphics().p("EADEAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_214 = new cjs.Graphics().p("EACnAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_215 = new cjs.Graphics().p("EACDAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_216 = new cjs.Graphics().p("EABaAjeMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_217 = new cjs.Graphics().p("EAApAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_218 = new cjs.Graphics().p("EgANAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_219 = new cjs.Graphics().p("EgBKAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_220 = new cjs.Graphics().p("EgCOAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_221 = new cjs.Graphics().p("EgDYAjfMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_222 = new cjs.Graphics().p("EgEoAjfMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_223 = new cjs.Graphics().p("EgF/AjeMAAAgpRMAomAAAMAAAApRg");
  var mask_graphics_224 = new cjs.Graphics().p("EgHSAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_225 = new cjs.Graphics().p("EgIfAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_226 = new cjs.Graphics().p("EgJnAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_227 = new cjs.Graphics().p("EgKpAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_228 = new cjs.Graphics().p("EgLmAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_229 = new cjs.Graphics().p("EgMeAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_230 = new cjs.Graphics().p("EgNRAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_231 = new cjs.Graphics().p("EgN+AjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_232 = new cjs.Graphics().p("EgOmAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_233 = new cjs.Graphics().p("EgPIAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_234 = new cjs.Graphics().p("EgPmAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_235 = new cjs.Graphics().p("EgP9AjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_236 = new cjs.Graphics().p("EgQQAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_237 = new cjs.Graphics().p("EgQdAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_238 = new cjs.Graphics().p("EgQlAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_239 = new cjs.Graphics().p("EgQoAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_289 = new cjs.Graphics().p("EAD4AjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_290 = new cjs.Graphics().p("EAD0AjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_291 = new cjs.Graphics().p("EADrAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_292 = new cjs.Graphics().p("EADaAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_293 = new cjs.Graphics().p("EADEAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_294 = new cjs.Graphics().p("EACnAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_295 = new cjs.Graphics().p("EACDAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_296 = new cjs.Graphics().p("EABaAjeMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_297 = new cjs.Graphics().p("EAApAjeMAAAgpRMAooAAAMAAAApRg");
  var mask_graphics_298 = new cjs.Graphics().p("EgANAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_299 = new cjs.Graphics().p("EgBKAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_300 = new cjs.Graphics().p("EgCOAjfMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_301 = new cjs.Graphics().p("EgDYAjfMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_302 = new cjs.Graphics().p("EgEoAjfMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_303 = new cjs.Graphics().p("EgF/AjeMAAAgpRMAomAAAMAAAApRg");
  var mask_graphics_304 = new cjs.Graphics().p("EgHSAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_305 = new cjs.Graphics().p("EgIfAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_306 = new cjs.Graphics().p("EgJnAjeMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_307 = new cjs.Graphics().p("EgKpAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_308 = new cjs.Graphics().p("EgLmAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_309 = new cjs.Graphics().p("EgMeAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_310 = new cjs.Graphics().p("EgNRAjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_311 = new cjs.Graphics().p("EgN+AjdMAAAgpRMAonAAAMAAAApRg");
  var mask_graphics_312 = new cjs.Graphics().p("EgOmAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_313 = new cjs.Graphics().p("EgPIAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_314 = new cjs.Graphics().p("EgPmAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_315 = new cjs.Graphics().p("EgP9AjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_316 = new cjs.Graphics().p("EgQQAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_317 = new cjs.Graphics().p("EgQdAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_318 = new cjs.Graphics().p("EgQlAjdMAAAgpSMAonAAAMAAAApSg");
  var mask_graphics_319 = new cjs.Graphics().p("EgQoAjeMAAAgpSMAonAAAMAAAApSg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 284.7488,
   y: 226.6255
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 284.4263,
   y: 226.6265
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 283.4589,
   y: 226.6296
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 281.8465,
   y: 226.6347
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 279.5892,
   y: 226.6418
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 276.687,
   y: 226.651
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 273.1398,
   y: 226.6623
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 268.9476,
   y: 226.6755
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 264.1105,
   y: 226.6909
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 258.6285,
   y: 226.7082
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 252.5015,
   y: 226.7276
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 245.7296,
   y: 226.7491
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 238.3128,
   y: 226.7726
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 230.251,
   y: 226.7981
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 221.5442,
   y: 226.6936
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 212.7739,
   y: 226.6678
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 204.6085,
   y: 226.6438
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 197.0478,
   y: 226.6215
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 190.0921,
   y: 226.601
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 183.7412,
   y: 226.5824
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 177.9951,
   y: 226.5654
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 172.8539,
   y: 226.5503
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 168.3176,
   y: 226.537
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 164.386,
   y: 226.5254
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 161.0594,
   y: 226.5156
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 158.3376,
   y: 226.5076
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 156.2206,
   y: 226.5014
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 154.7085,
   y: 226.4969
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 153.8012,
   y: 226.4942
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 153.4988,
   y: 226.6255
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 284.7488,
   y: 227.0005
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 284.4263,
   y: 227.0011
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 283.4589,
   y: 227.003
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 281.8465,
   y: 227.0062
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 279.5892,
   y: 227.0107
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 276.687,
   y: 227.0164
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 273.1398,
   y: 227.0235
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 268.9476,
   y: 227.0318
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 264.1105,
   y: 227.0414
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 258.6285,
   y: 227.0522
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 252.5015,
   y: 227.0644
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 245.7296,
   y: 227.0778
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 238.3128,
   y: 227.0925
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 230.251,
   y: 227.1085
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 221.5442,
   y: 226.9936
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 213.3043,
   y: 226.9784
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 205.5961,
   y: 226.9642
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 198.4194,
   y: 226.951
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 191.7743,
   y: 226.9388
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 185.6609,
   y: 226.9276
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 180.079,
   y: 226.9173
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 175.0288,
   y: 226.908
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 170.5101,
   y: 226.8997
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 166.5231,
   y: 226.8923
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 163.0677,
   y: 226.886
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 160.1438,
   y: 226.8806
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 157.7516,
   y: 226.8762
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 155.891,
   y: 226.8728
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 154.562,
   y: 226.8703
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 153.7646,
   y: 226.8688
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 153.4988,
   y: 227.0005
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 284.7488,
   y: 227.0005
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 284.4263,
   y: 227.0011
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 283.4589,
   y: 227.003
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 281.8465,
   y: 227.0062
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 279.5892,
   y: 227.0107
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 276.687,
   y: 227.0164
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 273.1398,
   y: 227.0235
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 268.9476,
   y: 227.0318
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 264.1105,
   y: 227.0414
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 258.6285,
   y: 227.0522
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 252.5015,
   y: 227.0644
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 245.7296,
   y: 227.0778
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 238.3128,
   y: 227.0925
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 230.251,
   y: 227.1085
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 221.5442,
   y: 226.9936
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 213.3043,
   y: 226.9784
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 205.5961,
   y: 226.9642
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 198.4194,
   y: 226.951
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 191.7743,
   y: 226.9388
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 185.6609,
   y: 226.9276
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 180.079,
   y: 226.9173
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 175.0288,
   y: 226.908
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 170.5101,
   y: 226.8997
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 166.5231,
   y: 226.8923
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 163.0677,
   y: 226.886
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 160.1438,
   y: 226.8806
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 157.7516,
   y: 226.8762
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 155.891,
   y: 226.8728
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 154.562,
   y: 226.8703
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 153.7646,
   y: 226.8688
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 153.4988,
   y: 227.0005
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 284.7488,
   y: 227.0005
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 284.4263,
   y: 227.0011
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 283.4589,
   y: 227.003
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 281.8465,
   y: 227.0062
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 279.5892,
   y: 227.0107
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 276.687,
   y: 227.0164
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 273.1398,
   y: 227.0235
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 268.9476,
   y: 227.0318
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 264.1105,
   y: 227.0414
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 258.6285,
   y: 227.0522
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 252.5015,
   y: 227.0644
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 245.7296,
   y: 227.0778
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 238.3128,
   y: 227.0925
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 230.251,
   y: 227.1085
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 221.5442,
   y: 226.9936
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 213.3043,
   y: 226.9784
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 205.5961,
   y: 226.9642
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 198.4194,
   y: 226.951
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 191.7743,
   y: 226.9388
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 185.6609,
   y: 226.9276
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 180.079,
   y: 226.9173
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 175.0288,
   y: 226.908
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 170.5101,
   y: 226.8997
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 166.5231,
   y: 226.8923
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 163.0677,
   y: 226.886
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 160.1438,
   y: 226.8806
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 157.7516,
   y: 226.8762
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 155.891,
   y: 226.8728
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 154.562,
   y: 226.8703
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 153.7646,
   y: 226.8688
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 153.4988,
   y: 227.0005
  }).wait(61));
  this.instance_16 = new lib.bg1();
  this.instance_16.parent = this;
  this.instance_16.setTransform(150, 388, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_17.setTransform(150, 389, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_18.setTransform(150, 388, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_19.setTransform(150, 388, 1, 1, 0, 0, 0, 150, 197);
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
 p.nominalBounds = new cjs.Rectangle(-231.3, 0, 731.4000000000001, 500);
 (lib.toyota_300x500 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(144, 250, 425.5, 250);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 300,
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