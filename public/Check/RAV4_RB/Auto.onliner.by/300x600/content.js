(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 375, 456);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 375, 455);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 377, 456);
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
  this.shape.setTransform(199.4, 124.05, 1.2588, 1.2588, 0, 0, 0, -0.2, 0.2);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(199.05, 125.1, 1.2588, 1.2588, 0, 0, 0, -0.2, 0.1);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(114.9, 86.3, 168.79999999999998, 77.39999999999999), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
  this.shape.setTransform(195.075, 180.825);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_1.setTransform(181.625, 180.825);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgrBJQgSgLgLgTQgMgSAAgZQAAgXAMgUQALgSASgLQAUgLAXAAQAZAAATALQATALALASQALAUAAAXQAAAYgLATQgLATgTALQgUAKgYABQgXgBgUgKgAgig6QgPAJgIAPQgJAPAAATQAAAUAJAPQAIAPAPAIQAQAJASAAQAUAAAPgJQAPgIAJgPQAJgPAAgUQAAgTgJgPQgJgPgPgJQgPgJgUAAQgSAAgQAJg");
  this.shape_2.setTransform(164.75, 180.85);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgiBNQgOgHgJgIIAJgPQAFAGAHAFQAIAEAIADQAJADALABQASgBALgIQALgJABgPQgBgRgOgIQgOgIgbAAIAAgNQATgBALgEQALgFAEgHQAFgHgBgHQAAgMgJgIQgJgGgPgBQgNABgLAFQgKAEgIAHIgHgNQAJgIAMgGQANgFAPAAQAPAAAMAFQAKAFAHAJQAGAJAAAMQAAAQgKAKQgIAKgQADQATACALAKQAKAKABASQAAAOgIALQgGALgNAGQgNAGgSAAQgUgBgOgGg");
  this.shape_3.setTransform(148.5, 180.85);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgsBRIgMgDIAEgPIAJADIALACQAKgBAHgFQAGgGAFgMIhAh+IATAAIA1BsIAuhsIATAAIg4B9QgFALgFAJQgFAJgIAGQgIAFgNAAIgNgCg");
  this.shape_4.setTransform(135.875, 180.95);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAoBSIhDhLIgPAAIAABLIgRAAIAAiiIARAAIAABJIAOAAIA+hJIAUAAIhDBPIBJBTg");
  this.shape_5.setTransform(123.2, 180.85);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAuBSIAAhKIhbAAIAABKIgRAAIAAijIARAAIAABKIBbAAIAAhKIARAAIAACjg");
  this.shape_6.setTransform(101.65, 180.825);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAxBnIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjgAgYhSQgJgHgBgNIAMAAQABAJAGADQAGADAJAAQAKAAAGgDQAGgDABgJIAMAAQgBANgJAHQgKAGgPAAQgPAAgJgGg");
  this.shape_7.setTransform(84.825, 178.75);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
  this.shape_8.setTransform(69.075, 180.825);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgiBNQgOgHgIgIIAJgPQAFAGAGAFQAIAEAIADQAJADALABQASgBALgIQALgJABgPQgBgRgOgIQgOgIgbAAIAAgNQATgBALgEQALgFAEgHQAEgHAAgHQAAgMgJgIQgJgGgQgBQgMABgLAFQgKAEgIAHIgHgNQAIgIANgGQANgFAPAAQAPAAALAFQALAFAHAJQAGAJAAAMQAAAQgJAKQgKAKgPADQATACAKAKQALAKABASQgBAOgGALQgHALgNAGQgNAGgSAAQgUgBgOgGg");
  this.shape_9.setTransform(55.15, 180.85);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAxBSIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjg");
  this.shape_10.setTransform(40.525, 180.825);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AA5BlIAAgmIhxAAIAAAmIgQAAIAAg2IAJAAQAFAAAEgFQAFgGADgIQACgJABgLIANhsIBUAAIAACTIATAAIAAA2gAgaAJQgCAPgDALQgDAJgEADIBLAAIAAiDIg0AAg");
  this.shape_11.setTransform(24.35, 182.75);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAxBnIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjgAgYhSQgJgHgBgNIAMAAQABAJAGADQAGADAJAAQAKAAAGgDQAGgDABgJIAMAAQgBANgJAHQgKAGgPAAQgPAAgJgGg");
  this.shape_12.setTransform(172.075, 149.85);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AA+BSIAAijIARAAIAACjgAhOBSIAAijIASAAIAABGIAkAAQAZAAANAMQANAMABAVQAAAOgHALQgFALgMAGQgKAGgSAAgAg8BDIAiAAQASAAAJgJQAIgIABgQQAAgQgKgHQgJgIgRAAIgiAAg");
  this.shape_13.setTransform(153.65, 151.925);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAvBSIAAhKIhcAAIAABKIgSAAIAAijIASAAIAABKIBcAAIAAhKIARAAIAACjg");
  this.shape_14.setTransform(135.45, 151.925);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgHBSIAAiTIguAAIAAgQIBrAAIAAAQIgtAAIAACTg");
  this.shape_15.setTransform(121.575, 151.925);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgtBSIAAijIBZAAIAAAQIhHAAIAAA6IBFAAIAAAOIhFAAIAAA7IBJAAIAAAQg");
  this.shape_16.setTransform(109.975, 151.925);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_17.setTransform(97.275, 151.925);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA4BlIAAgmIh/AAIAAijIARAAIAACTIBaAAIAAiTIARAAIAACTIATAAIAAA2g");
  this.shape_18.setTransform(82.5, 153.85);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAuBSIguhFIguBFIgTAAIA4hSIg2hRIATAAIAsBDIAthDIATAAIg3BRIA5BSg");
  this.shape_19.setTransform(66.2, 151.925);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgsBRIgMgDIAEgPIAJADIALABQAKAAAHgFQAGgGAFgMIhAh+IATAAIA1BsIAuhsIATAAIg4B9QgFALgFAJQgFAJgIAGQgIAFgNAAIgNgCg");
  this.shape_20.setTransform(52.275, 152.05);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_21.setTransform(39.225, 151.925);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AA5BlIAAgmIhxAAIAAAmIgQAAIAAg2IAJAAQAFAAAEgFQAFgGADgIQACgJABgLIANhsIBUAAIAACTIATAAIAAA2gAgaAJQgCAQgDAKQgDAJgEADIBLAAIAAiDIg0AAg");
  this.shape_22.setTransform(24.35, 153.85);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAxBnIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjgAgYhSQgJgHgBgNIAMAAQABAJAGADQAGADAJAAQAKAAAGgDQAGgDABgJIAMAAQgBANgJAHQgKAGgPABQgPgBgJgGg");
  this.shape_23.setTransform(203.675, 120.95);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AA+BSIAAijIARAAIAACjgAhOBSIAAijIARAAIAABGIAlAAQAZAAANAMQANAMABAVQAAAOgHALQgFALgMAGQgLAGgRAAgAg9BDIAjAAQASAAAJgJQAJgIAAgQQAAgQgKgHQgJgIgRAAIgjAAg");
  this.shape_24.setTransform(185.25, 123.025);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAvBSIAAhKIhcAAIAABKIgRAAIAAijIARAAIAABKIBcAAIAAhKIARAAIAACjg");
  this.shape_25.setTransform(167.05, 123.025);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIARAAIAABGIAkAAQAaAAANAMQANAMAAAVQAAAOgGALQgFALgMAGQgMAGgRAAgAgjBDIAiAAQASAAAJgJQAJgIAAgQQAAgQgJgHQgKgIgRAAIgiAAg");
  this.shape_26.setTransform(152.775, 123.025);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("Ag6BRIgGgCIADgPIAFACIAGABQAGAAADgFQAEgFABgLIAMiAIBZAAIAACjIgSAAIAAiSIg4AAIgLB1QgBAOgHAJQgHAHgOAAIgJgBg");
  this.shape_27.setTransform(137.075, 123.1);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgtBSIAAijIBZAAIAAAQIhHAAIAAA6IBFAAIAAAOIhFAAIAAA7IBJAAIAAAQg");
  this.shape_28.setTransform(125.025, 123.025);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgHBSIAAiTIguAAIAAgQIBrAAIAAAQIgtAAIAACTg");
  this.shape_29.setTransform(112.925, 123.025);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAxBSIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjg");
  this.shape_30.setTransform(98.775, 123.025);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgiBNQgOgHgJgIIAKgOQAEAFAHAFQAIAFAIACQAJADALAAQASAAALgJQALgIABgPQgBgRgOgIQgOgHgbgBIAAgNQATAAALgFQALgFAEgHQAFgGgBgIQAAgNgJgGQgJgIgQAAQgMAAgLAGQgLAEgHAHIgHgOQAJgIAMgFQANgFAPAAQAPAAALAFQALAFAHAJQAGAJAAAMQAAAQgJAKQgKAJgPAEQATADALAJQAKAKABASQAAAOgHALQgHAKgNAHQgNAGgSAAQgUgBgOgGg");
  this.shape_31.setTransform(83.6, 123.05);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
  this.shape_32.setTransform(70.275, 123.025);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgxBSIAAijIAtAAQARABAMAGQANAGAGALQAGALAAAQQAAANgGAMQgGALgNAHQgMAIgRAAIgcAAIAAA9gAggAGIAaAAQAKAAAJgFQAJgDAFgIQAFgJAAgLQAAgNgFgIQgFgIgJgDQgJgDgKAAIgaAAg");
  this.shape_33.setTransform(57.325, 123.025);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AA+BSIAAijIARAAIAACjgAhOBSIAAijIARAAIAABGIAlAAQAaAAANAMQANAMAAAVQAAAOgHALQgFALgMAGQgKAGgSAAgAg9BDIAjAAQASAAAIgJQAKgIgBgQQAAgQgJgHQgJgIgRAAIgjAAg");
  this.shape_34.setTransform(40.45, 123.025);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("Ag0BSIAAijIAuAAQAWABANALQANALAAATQAAALgFAJQgFAKgMAGQAPADAJAKQAIAKABAQQgBAOgGAKQgGAKgLAGQgLAGgQAAgAgiBDIAjAAQAQgBAJgIQAJgIAAgPQAAgNgIgIQgJgHgOAAIgmAAgAgigHIAdAAQAJAAAHgEQAHgEAEgHQADgHAAgJQAAgMgIgIQgJgHgPAAIgbAAg");
  this.shape_35.setTransform(24.425, 123.025);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(14.8, 102.4, 209.6, 94.6), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAsBOIAAhGIhXAAIAABGIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape.setTransform(159.025, 197.85);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAvBOIAAiCIhdCCIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbg");
  this.shape_1.setTransform(142.575, 197.85);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AglAHIAAgNIBLAAIAAANg");
  this.shape_2.setTransform(129.55, 199.675);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_3.setTransform(117.325, 199.675);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAvBiIAAiBIhdCBIgQAAIAAibIARAAIAACBIBciBIAQAAIAACbgAgXhOQgJgGgBgNIANAAQAAAIAGADQAGADAJAAQAJAAAFgDQAGgDABgIIAMAAQgBANgJAGQgJAGgPAAQgPAAgIgGg");
  this.shape_4.setTransform(101.975, 195.825);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAPIhEAAIAAA3IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_5.setTransform(87.775, 197.85);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgvBOIAAibIAsAAQAPAAANAGQALAGAGALQAGAKAAAOQAAAOgGALQgGALgLAGQgNAIgPAAIgbAAIAAA6gAgeAFIAYAAQAKAAAJgEQAIgDAFgIQAFgIAAgMQAAgLgFgIQgFgIgIgDQgJgDgKABIgYAAg");
  this.shape_6.setTransform(75.75, 197.85);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgHBOIAAiMIgsAAIAAgPIBnAAIAAAPIgrAAIAACMg");
  this.shape_7.setTransform(63.4, 197.85);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgpBGQgSgKgLgTQgKgRAAgYQAAgWAKgTQALgSASgKQATgKAWAAQAYAAASAKQASAKALASQAKATAAAWQAAAXgKASQgLATgSAKQgTAKgXABQgWgBgTgKgAggg3QgPAIgIAOQgIAPAAASQAAATAIAOQAIAOAPAJQAOAIASABQATgBAOgIQAPgJAIgOQAJgOAAgTQAAgSgJgPQgIgOgPgIQgOgJgTAAQgSAAgOAJg");
  this.shape_8.setTransform(43.175, 197.85);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AArBOIAAiMIhVAAIAACMIgRAAIAAibIB3AAIAACbg");
  this.shape_9.setTransform(25.725, 197.85);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AA8BkIh2ilIAAClIgVAAIAAjGIAUAAIB2CkIAAikIAVAAIAADGg");
  this.shape_10.setTransform(241.825, 126.75);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgJBkIAAhQIhHh2IAXAAIA6BiIA6hiIAWAAIhHB2IAABQg");
  this.shape_11.setTransform(223.375, 126.75);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("Ag/BkIAAjGIA3AAQAcAAAPANQAQAOAAAXQAAANgHAMQgFAMgPAHQASAEALAMQALAMAAAUQgBARgGAMQgIANgOAGQgOAIgSAAgAgqBRIAqAAQAVAAALgKQALgLAAgRQAAgRgLgIQgKgKgSABIguAAgAgqgIIAkAAQALgBAIgFQAIgFAFgIQAEgJABgKQAAgPgLgJQgLgKgSAAIghAAg");
  this.shape_12.setTransform(207.8, 126.75);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("Ah0EDQgpgogRhDQgQhDABhTQgBhUARhDQARhEApgoQApgpBKgBQBLABApApQAqAoAQBEQARBDgBBUQAABUgQBDQgRBCgpAoQgqAohKABQhKgBgqgogAhSjRQgcAigKA3QgJA4ABBCQgBBCAJA3QAKA3AcAgQAcAhA2ABQA4gBAcghQAcgiAJg3QAJg3gBhCQABhAgKg4QgJg4gcghQgcghg3gBQg2ABgcAhg");
  this.shape_13.setTransform(174.4729, 146.6);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("Ah0EDQgpgogRhDQgQhDABhTQgBhUARhDQARhEApgoQApgpBKgBQBLABApApQAqAoAQBEQARBDgBBUQAABUgQBDQgRBCgpAoQgqAohKABQhKgBgqgogAhSjRQgcAigKA3QgJA4ABBCQgBBCAJA3QAKA3AcAgQAcAhA2ABQA4gBAcghQAcgiAJg3QAJg3gBhCQABhAgKg4QgJg4gcghQgcghg3gBQg2ABgcAhg");
  this.shape_14.setTransform(128.7729, 146.6);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AhdENQgugbgbg4Qgcg3AAhTQgBhGATg/QATg+ApgvQApgwBCgbQBBgbBeAAIANAyQhkABg/AfQg+AeggA2QghA1gIBGQAZggAngUQAngVAygBQA0AAAoAYQAoAYAWApQAXAqAAA3QAAA2gZArQgYArgrAaQgqAZg1ABQg3AAgugcgAg3gRQgdAOgWAUQgVAVgLAZQACA9AUAoQAUApAgATQAgAUAmAAQAmAAAegTQAegSAQgfQARgfAAgnQAAgpgQgeQgQgfgdgRQgcgRgmAAQgjAAgeANg");
  this.shape_15.setTransform(83.0244, 146.825);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AhVEgQgigLgagTQgagSgRgXIAfgxQAbAiAlAVQAkAWAyAAQA+gBAkggQAlghABg2QgBgpgWgaQgWgagmgNQgngMgxAAIAAgyQAygBAhgRQAggQAQgZQAPgaAAgcQAAgogcgYQgbgXgygBQguABgjATQgjAUgaAbIgcgxQASgSAZgQQAZgRAhgLQAggKAogBQAwABAkARQAkARAVAgQAUAeAAApQAAAwgcAkQgdAkg4ARQBFAQAjAnQAjAoAAA5QgBAxgYAnQgZAngsAWQgrAXg7AAQgqAAgkgMg");
  this.shape_16.setTransform(36.875, 146.625);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgpBFQgSgKgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSAKQgTALgXAAQgWAAgTgLgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAOAPAJQAOAJASAAQATAAAOgJQAPgJAIgOQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_17.setTransform(248.075, 94.85);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_18.setTransform(231.175, 96.675);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAzBOIgTgzIhAAAIgTAzIgRAAIA8ibIARAAIA8CbgAAbAOIgbhIIgbBIIA2AAg");
  this.shape_19.setTransform(211.725, 94.85);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AA3BgIAAgkIhtAAIAAAkIgPAAIAAgzIAJAAQAFAAAEgFQAEgFACgIQADgJACgLIALhmIBRAAIAACMIASAAIAAAzgAgYAJQgCAPgDAJQgEAJgEADIBIAAIAAh+IgxAAg");
  this.shape_20.setTransform(197.075, 96.675);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgpBFQgSgKgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSAKQgTALgXAAQgWAAgTgLgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAOAPAJQAOAJASAAQATAAAOgJQAPgJAIgOQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_21.setTransform(180.675, 94.85);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgqBOIAAibIBVAAIAAAPIhFAAIAACMg");
  this.shape_22.setTransform(166.675, 94.85);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AA7BOIAAibIARAAIAACbgAhLBOIAAibIARAAIAABCIAjAAQAZABAMAKQAMAMAAAUQABAOgGAKQgFAKgLAGQgLAGgRAAgAg6A/IAgAAQATAAAHgHQAJgIAAgQQAAgOgJgIQgIgHgSAAIggAAg");
  this.shape_23.setTransform(150.65, 94.85);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAARQAAALgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAAOgFAJQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgOQAAgNgIgGQgIgIgOAAIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgIQgIgGgPgBIgaAAg");
  this.shape_24.setTransform(134.925, 94.85);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgrBOIAAibIBVAAIAAAOIhEAAIAAA4IBCAAIAAAOIhCAAIAAA4IBGAAIAAAPg");
  this.shape_25.setTransform(116.675, 94.85);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgvBOIAAibIAsAAQAPAAAMAGQAMAFAGALQAGALAAAOQAAAOgGAMQgGAJgMAIQgMAGgPABIgbAAIAAA6gAgeAFIAZAAQAJAAAJgEQAIgDAFgIQAFgIAAgMQAAgLgFgIQgFgHgIgDQgJgEgJAAIgZAAg");
  this.shape_26.setTransform(104.65, 94.85);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgyBOIAAibIBSAAIAAAPIhBAAIAAAzIAiAAQAZABANAKQAMAMAAAUQAAAOgFAKQgGAKgLAGQgMAGgQAAgAghA/IAgAAQARAAAJgHQAJgIAAgQQAAgOgKgIQgJgHgQAAIggAAg");
  this.shape_27.setTransform(91.9, 94.85);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAmBOIAAhBIgdAAIgCAAIgCAAIgnBBIgTAAIArhFQgOgFgHgKQgHgLgBgPQABgVANgMQANgMAWAAIAsAAIAACbgAgEg8QgIADgFAHQgFAHAAALQAAALAFAIQAEAGAIAEQAGACAJAAIAcAAIAAg+IgbAAIgCAAQgIAAgFADg");
  this.shape_28.setTransform(77.225, 94.85);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgpBFQgSgKgLgRQgKgSAAgYQAAgXAKgRQALgTASgKQATgKAWgBQAYABASAKQASAKALATQAKASAAAWQAAAXgKATQgLARgSAKQgTALgXAAQgWAAgTgLgAggg4QgPAJgIAPQgIAOAAASQAAASAIAPQAIAOAPAJQAOAJASAAQATAAAOgJQAPgJAIgOQAJgPAAgSQAAgSgJgOQgIgPgPgJQgOgIgTAAQgSAAgOAIg");
  this.shape_29.setTransform(61.875, 94.85);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAsBOIAAhHIhXAAIAABHIgRAAIAAibIARAAIAABGIBXAAIAAhGIARAAIAACbg");
  this.shape_30.setTransform(44.325, 94.85);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgxBOIAAibIAsAAQAVAAAMALQAMALAAARQAAALgFAJQgFAJgLAGQAPADAIAJQAIAKAAAPQAAAOgFAJQgGAKgLAFQgLAGgPAAgAghA/IAiAAQAQABAIgJQAJgIAAgOQAAgNgIgGQgIgIgOAAIglAAgAghgHIAdAAQAIAAAHgEQAGgEAEgGQADgHAAgIQAAgMgIgIQgIgGgPgBIgaAAg");
  this.shape_31.setTransform(24.775, 94.85);
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(11.5, 75, 440.5, 138.4), null);
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
  this.shape.setTransform(71.95, 54.475);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgSBZIhAixIAlAAIAtCJIAviJIAkAAIhBCxg");
  this.shape_1.setTransform(57.025, 54.475);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAwBZIgRgyIg+AAIgSAyIgiAAIBCixIAjAAIBCCxgAAWAMIgWg/IgWA/IAsAAg");
  this.shape_2.setTransform(40.525, 54.475);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAdBZIgphFIgWAAIAABFIghAAIAAixIA+AAQASAAANAHQANAHAHAMQAHALAAAPQAAARgJANQgIAMgQAIIAwBLgAgigGIAXAAQAIAAAGgDQAGgDAEgGQAEgGAAgKQAAgNgIgHQgIgGgLAAIgYAAg");
  this.shape_3.setTransform(24.975, 54.475);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAwBZIgRgyIg+AAIgSAyIgiAAIBCixIAjAAIBCCxgAAWAMIgWg/IgWA/IAsAAg");
  this.shape_4.setTransform(106.775, 24.825);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgQBZIAAiTIgvAAIAAgeIB/AAIAAAeIgvAAIAACTg");
  this.shape_5.setTransform(91.625, 24.825);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgvBQQgVgMgMgUQgMgVAAgbQAAgaAMgVQAMgUAVgMQAVgLAaAAQAbAAAVALQAVAMAMAUQAMAUAAAbQAAAbgMAUQgMAVgVALQgVAMgbAAQgaAAgVgLgAgdgzQgNAIgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAHAQAAQARAAANgHQANgIAHgNQAIgOAAgRQAAgQgIgOQgHgNgNgIQgNgHgRAAQgQAAgNAHg");
  this.shape_6.setTransform(74.775, 24.825);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgQBZIAAhGIg8hrIAlAAIApBNIAphNIAhAAIg8BsIAABFg");
  this.shape_7.setTransform(57.25, 24.825);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgvBQQgVgMgMgUQgMgVAAgbQAAgaAMgVQAMgUAVgMQAVgLAaAAQAbAAAVALQAVAMAMAUQAMAUAAAbQAAAbgMAUQgMAVgVALQgVAMgbAAQgaAAgVgLgAgdgzQgNAIgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAHAQAAQARAAANgHQANgIAHgNQAIgOAAgRQAAgQgIgOQgHgNgNgIQgNgHgRAAQgQAAgNAHg");
  this.shape_8.setTransform(39.725, 24.825);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQBZIAAiTIgvAAIAAgeIB/AAIAAAeIgvAAIAACTg");
  this.shape_9.setTransform(22.875, 24.825);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(14, 2.5, 181.5, 69.3), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
  this.shape.setTransform(195.625, 582.075);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAYIATgYIgTgXIAIAAIAUAXIgUAYgAgaAYIAUgYIgUgXIAKAAIASAXIgSAYg");
  this.shape_1.setTransform(191.025, 579.45);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAggAeIAAg7IAJAAIAAAZIARAAQAIAAAHAEQAFADAAAJQAAAGgDAEQgCAEgFACQgEACgGAAgAgXAYIARAAQAGgBADgDQACgDAAgFQABgFgEgDQgCgCgIgBIgPAAg");
  this.shape_2.setTransform(183.8, 579.55);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEADAHQAEAHAAAJQAAAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFAAAHQAAAHADAEQACAFAGADQAEAEAGAAQAGAAAFgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_3.setTransform(176, 580.725);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_4.setTransform(168.65, 579.525);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAEAAAHQAAAGgDADQgDAEgFACQgFACgGAAgAgOAYIAPAAQAHgBAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgBABgDIABgFQAAgEgDgCQgEgDgFAAIgNAAg");
  this.shape_5.setTransform(162.375, 579.55);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_6.setTransform(155.35, 579.525);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAHgEAHAAQAHAAAFACQAFABAEADIgDAIIgIgFQgEgBgGAAQgFAAgFADQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAEADAGAAQAFAAAFgCIAJgFIADAIQgEADgGABQgFACgIAAQgHAAgGgEg");
  this.shape_7.setTransform(148.8, 579.525);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgKAbQgIgDgDgHQgEgHAAgKQAAgIAEgHQADgHAIgEQAGgEAJAAQAGAAAFACQAFABAEADIgCAIIgIgFQgFgBgFAAQgGAAgFADQgFADgCAFQgEAFAAAGQAAAHAEAFQACAGAFADQAFADAFAAQAGAAAFgCIAJgFIACAIQgEADgGABQgGACgGAAQgIAAgGgEg");
  this.shape_8.setTransform(142.8, 579.525);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_9.setTransform(136.05, 579.525);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAHAEQAGAEADAHQAEAHABAJQgBAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgFADgDAFQgDAFAAAHQAAAHADAEQADAFAFADQAEAEAGAAQAGAAAFgDQAGgDACgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_10.setTransform(128.85, 580.725);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AANAeIgZgcIgCAAIAAAcIgJAAIAAg7IAJAAIAAAZIACAAIAZgZIAKAAIgbAcIAcAfg");
  this.shape_11.setTransform(122.4, 579.55);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAHAEQAGAEADAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAIAAAGgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_12.setTransform(112.8, 579.525);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAIAAIAAA7gAggAeIAAg7IAJAAIAAAZIARAAQAIAAAHAEQAFADAAAJQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAYIARAAQAGgBACgDQADgDAAgFQAAgFgDgDQgDgCgHgBIgPAAg");
  this.shape_13.setTransform(105.15, 579.55);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_14.setTransform(97.325, 579.55);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_15.setTransform(90.175, 580.425);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgDgHQgFgHAAgJQAAgIAFgHQADgHAHgEQAIgEAIAAQAJAAAIAEQAHAEAEAHQADAHAAAIQAAAJgDAHQgEAHgHAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_16.setTransform(83.1, 579.525);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAGQAAAGgDADQgDAEgEABQAHAAAEADQAEAEAAAHQAAAGgDADQgDAEgFACQgFACgGAAgAgOAYIAPAAQAHgBAEgDQADgCAAgGQAAgEgEgEQgEgCgHAAIgOAAgAgOgEIANAAQAEAAADgBQADgBABgDIABgFQAAgEgDgCQgEgDgFAAIgNAAg");
  this.shape_17.setTransform(76.575, 579.55);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AATAeIAAgvIglAvIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_18.setTransform(69.45, 579.55);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEADAHQAEAHAAAJQAAAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFAAAHQAAAHADAEQACAFAGADQAEAEAGAAQAGAAAFgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_19.setTransform(62.15, 580.725);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_20.setTransform(54.525, 579.55);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_21.setTransform(47.3, 579.525);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_22.setTransform(40.075, 579.55);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgbAeIgCgBIABgIIACABIADAAQAEAAACgCQACgCAAgGIAGgqIAnAAIAAA8IgIAAIAAg0IgYAAIgFAkQAAAJgEADQgEAFgGAAIgGgBg");
  this.shape_23.setTransform(32.45, 579.6);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgPAbQgIgEgDgHQgFgHAAgJQAAgIAFgHQADgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAHgHAEQgGAEgKAAQgJAAgGgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_24.setTransform(25.75, 579.525);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AARAeIAAg0IghAAIAAA0IgJAAIAAg7IAzAAIAAA7g");
  this.shape_25.setTransform(18.525, 579.55);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgJAAgGgEgAAUgFQgBgFgCgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_26.setTransform(283.2, 565.425);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAYAeIAAg7IAJAAIAAA7gAgfAeIAAg7IAIAAIAAAZIAQAAQAKAAAFAEQAGAEAAAIQAAAGgDAEQgDAEgEACQgEACgGAAgAgXAYIAQAAQAHAAACgDQAEgEAAgFQgBgFgDgDQgDgDgHAAIgPAAg");
  this.shape_27.setTransform(275.55, 565.45);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_28.setTransform(267.725, 565.45);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAGgDAFAAQAJAAAHAEQAGAEADAHQAEAHAAAJQAAAJgEAGQgDAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgEgDgCgFIAAAlgAgKgfQgGADgCAFQgDAFAAAHQAAAHADAEQACAFAGADQAEAEAGAAQAGAAAFgDQAFgDADgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_29.setTransform(260.6, 566.625);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAGAEQAGAEAEAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAHAAAFgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_30.setTransform(253.25, 565.425);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAaAeIAAgvIgXAnIgFAAIgXgnIAAAvIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_31.setTransform(245.475, 565.45);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgPAdQgGgCgDgCIACgIQADADAGACQAGACAHAAQAHAAAEgDQAFgCAAgGQAAgDgCgCQgDgDgFgBIgOgBIAAgGQALAAAFgDQAFgDAAgFQAAgEgDgCQgEgDgGAAQgFAAgEACIgJAEIgCgIIAKgEQAFgBAFAAQAKAAAGAEQAGAEAAAHQAAAGgEAEQgEAEgHABIAJABQAEACADADQACADAAAFQAAAGgDAEQgEAEgFABQgGACgHAAQgIAAgHgCg");
  this.shape_32.setTransform(237.975, 565.425);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_33.setTransform(231.625, 565.425);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgeArIAAhUIAJAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAHAEQAGAEAEAHQADAHAAAJQAAAJgDAGQgEAHgGAEQgHAEgJAAIgIgBQgEgBgEgDQgDgDgDgFIAAAlgAgKgfQgGADgCAFQgEAFAAAHQAAAHAEAEQACAFAGADQAFAEAFAAQAHAAAEgDQAFgDADgGQADgEAAgHQAAgHgCgFQgDgFgFgDQgFgDgGAAQgGAAgFADg");
  this.shape_34.setTransform(224.85, 566.625);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgFgHQgDgHAAgJQAAgIAEgHQADgHAIgEQAGgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgHADQgGACgIAAQgJAAgGgEgAAUgFQgBgFgDgEQgCgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_35.setTransform(217.5, 565.425);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_36.setTransform(210.525, 565.45);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_37.setTransform(203.375, 566.325);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgNAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQADgHAIgEQAGgEAIAAQAIAAAGAEQAHAEADAHQAEAHAAAIIAAABIgxAAQABAKAGAHQAGAGAKAAQAGAAAGgDQAGgCADgEIADAIQgEADgHADQgGACgIAAQgIAAgHgEgAAUgFQAAgFgEgEQgCgEgEgCQgEgDgFAAQgFAAgEADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_38.setTransform(196.65, 565.425);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgdArIAAhUIAIAAIAAAMQAEgHAHgDQAFgDAGAAQAJAAAGAEQAHAEADAHQAFAHAAAJQAAAJgFAGQgDAHgHAEQgGAEgJAAIgIgBQgEgBgDgDQgEgDgDgFIAAAlgAgKgfQgFADgEAFQgCAFAAAHQAAAHACAEQAEAFAFADQAEAEAGAAQAGAAAGgDQAFgDACgGQADgEAAgHQAAgHgDgFQgDgFgEgDQgFgDgHAAQgFAAgFADg");
  this.shape_39.setTransform(189.7, 566.625);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgPAmQgKgFgFgKQgGgKAAgNQAAgMAGgKQAGgJAJgGQAKgGAMAAQAIAAAIADQAHACAFAFIgCAIQgGgEgGgDQgGgCgIAAQgJAAgIAFQgIAEgEAIQgFAIAAAJQAAAKAFAIQAEAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgHACgJAAQgMAAgKgGg");
  this.shape_40.setTransform(181.5, 564.175);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIAKAAIgUAXIAUAYgAgGAYIgUgYIAUgXIAIAAIgTAXIATAYg");
  this.shape_41.setTransform(174.125, 565.35);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_42.setTransform(164.5, 565.45);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgIAAIAAg7IAIAAIAAAvIAlgvIAJAAIAAA7g");
  this.shape_43.setTransform(157, 565.45);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AAXAnIAAgSIg0AAIAAg7IAIAAIAAA0IAiAAIAAg0IAIAAIAAA0IAKAAIAAAZg");
  this.shape_44.setTransform(150, 566.325);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_45.setTransform(142.475, 565.425);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_46.setTransform(135.675, 565.45);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAUAeIAAgwIgmAwIgIAAIAAg7IAIAAIAAAvIAmgvIAIAAIAAA7g");
  this.shape_47.setTransform(128.35, 565.45);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAaAeIAAgvIgXAnIgFAAIgXgnIAAAvIgIAAIAAg7IAKAAIAXApIAZgpIAJAAIAAA7g");
  this.shape_48.setTransform(120.225, 565.45);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgQAbQgHgEgEgHQgDgHAAgJQAAgIADgHQAEgHAHgEQAIgEAIAAQAJAAAHAEQAIAEADAHQAFAHAAAIQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgGAAgFADg");
  this.shape_49.setTransform(112.2, 565.425);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AASAeIAAgbIgiAAIAAAbIgJAAIAAg7IAJAAIAAAaIAiAAIAAgaIAIAAIAAA7g");
  this.shape_50.setTransform(104.975, 565.45);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAWAAQAKAAAFAEQAFAEAAAHQAAAFgDAEQgDADgEABQAHAAAEAEQAEAEAAAGQAAAGgDAEQgDAEgFABQgFACgGAAgAgOAYIAPAAQAHAAAEgDQADgEAAgEQAAgGgEgCQgEgDgHAAIgOAAgAgOgDIANAAQAEgBADgBQADgBABgDIABgEQAAgFgDgCQgEgCgFAAIgNAAg");
  this.shape_51.setTransform(95.625, 565.45);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAIAAIAAAZIAQAAQAKAAAGAEQAFAEAAAIQAAAGgCAEQgDAEgFACQgEACgGAAgAgOAYIAQAAQAGAAAEgDQADgEAAgFQAAgFgEgDQgDgDgIAAIgOAAg");
  this.shape_52.setTransform(86.575, 565.45);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgbAeIgDgBIACgIIADABIADAAQADAAABgCQADgDAAgFIAFgqIApAAIAAA7IgJAAIAAg0IgZAAIgEAlQgBAIgEAFQgDADgHAAIgFAAg");
  this.shape_53.setTransform(79.2, 565.5);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAIAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgFAAQgEAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_54.setTransform(72.85, 565.425);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_55.setTransform(66.825, 565.45);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AATAeIAAgwIglAwIgJAAIAAg7IAJAAIAAAvIAlgvIAIAAIAAA7g");
  this.shape_56.setTransform(60.45, 565.45);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAZAnIAAgSIgxAAIAAASIgIAAIAAgZIADAAQAFAAADgEQACgDABgIIAFglIAlAAIAAA0IAJAAIAAAZgAgKAAIgBAIIgEAGIAeAAIAAgtIgVAAg");
  this.shape_57.setTransform(53.125, 566.325);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgFgHQgDgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAJAAAHAEQAFAEAEAHQAEAHAAAIIAAABIgwAAQAAAKAGAHQAGAGAJAAQAHAAAHgDQAFgCAEgEIACAIQgEADgGADQgHACgIAAQgIAAgIgEgAAUgFQAAgFgDgEQgDgEgEgCQgEgDgGAAQgDAAgFADQgEACgDAEQgDAEgBAFIAnAAIAAAAg");
  this.shape_58.setTransform(46.4, 565.425);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgLAsQgFgCgFgFQgEgFgDgJQgCgJAAgOQAAgMADgJQADgJAHgFQAHgFAMgCIAEgBIADAAIAHgBIAFgBIAEAAIABAHIgIABIgHABIgEABIgDAAQgHABgGADQgGADgDAHQgDAHgBAMQAEgGAGgDQAHgEAHAAQAJAAAGAEQAHAEADAHQAEAGAAAJQAAAJgEAHQgDAHgHAEQgHAEgKAAIgBAAQgFAAgFgCgAgIgFIgIAFQgEADgCAEQABAMADAHQADAHAFADQAFADAFAAQAHAAAFgDQAFgDADgGQADgFAAgHQAAgHgDgFQgDgEgFgDQgEgDgHAAQgEAAgFACg");
  this.shape_59.setTransform(39.375, 563.9292);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgQAbQgGgEgFgHQgDgHAAgJQAAgIADgHQAFgHAGgEQAIgEAIAAQAJAAAIAEQAGAEAEAHQAEAHABAIQgBAJgEAHQgEAHgGAEQgIAEgJAAQgIAAgIgEgAgLgTQgFADgDAFQgDAFAAAGQAAAHADAFQADAGAFADQAFACAGAAQAHAAAFgDQAFgCADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgGgDgGAAQgGAAgFADg");
  this.shape_60.setTransform(32, 565.425);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AAXAqIAAhLIgtAAIAABLIgKAAIAAhTIBAAAIAABTg");
  this.shape_61.setTransform(23.95, 564.2);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgIIAPAHIgBgQIAHAAIgCAQIAPgHIADAIIgPADIAKAMIgHAFg");
  this.shape_62.setTransform(17.25, 561.85);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(12.9, 552.5, 275.70000000000005, 35.200000000000045), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgbAeIgDgBIACgIIADABIADAAQADAAABgCQADgDAAgFIAFgqIApAAIAAA7IgJAAIAAg0IgZAAIgEAlQgBAIgEAFQgDADgGAAIgGAAg");
  this.shape.setTransform(54.45, 565.95);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAUArIAAgvIgmAvIgIAAIAAg7IAIAAIAAAwIAmgwIAIAAIAAA7gAgMgeQgFgFAAgIIAHAAQAAAGADACQADADAEAAQAGAAADgDQACgCAAgGIAHAAQAAAIgFAFQgFADgIAAQgHAAgFgDg");
  this.shape_1.setTransform(47.55, 564.55);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbQgGgFAAgIQAAgHAEgEQAFgEAJgCIAYgCIAAgBQAAgIgEgEQgEgFgJAAIgHABIgHADIgFAEIgCgIQAEgDAGgCQAGgCAGAAQAMAAAGAGQAHAGAAAMIAAAkIgJAAIAAgKQgCAFgGADQgGADgHAAQgKAAgFgEgAgCACQgIABgDADQgDADAAAEQAAAFADADQAEADAHABQADAAAFgCQAFgCADgEQADgEAAgHIAAgGIgTACg");
  this.shape_2.setTransform(40.225, 565.875);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgUAAIAAgHIAvAAIAAAHIgUAAIAAA0g");
  this.shape_3.setTransform(34.275, 565.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgHgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQAJAAAGADQAIACAGAFIgDAIQgGgEgGgDQgHgCgHAAQgJAAgIAFQgIAEgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAFQAIAEAJAAQAIAAAHgCQAHgDAFgEIADAIQgHAFgHADQgIACgIAAQgMAAgKgGg");
  this.shape_4.setTransform(27.4, 564.625);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIALgMIgQgDIACgIIAPAHIgBgQIAHAAIgCAQIAQgHIACAIIgPADIAKAMIgHAFg");
  this.shape_5.setTransform(17.6, 562.3);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(13.2, 552.9, 229.8, 21.100000000000023), null);
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
 p.nominalBounds = new cjs.Rectangle(0, 0, 266, 240);
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
   y: -418
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(148.05, 302, 2.701, 4.8);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(11, 60, 270.1, 492), null);
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
  this.shape.graphics.f("#282830").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
  this.shape.setTransform(150, 300);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 300, 600), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(48, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(48, 0, 251.5, 304.2), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(49, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(49, 0, 250.10000000000002, 303.5), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(49, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(49, 0, 250, 304), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
  this.shape.setTransform(150, 300);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 300, 600), null);
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
   regX: 199.3,
   regY: 125,
   x: 216.5,
   y: 125,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 213.95,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 211.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 209.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 207.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 205.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 204.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 202.95,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 201.85,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 200.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 200.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 199.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 199.4,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(114.9, 86.3, 188.79999999999998, 77.39999999999999);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Aw7K1IAAkqMAh3AAAIAAEqg");
  mask.setTransform(108.3542, 69.2847);
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
   regY: 151.8,
   x: 96.5,
   y: 151.8,
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
  mask_1.graphics.p("Aw7NKIAAkqMAh3AAAIAAEqg");
  mask_1.setTransform(108.3542, 84.1847);
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
   regY: 151.8,
   x: 96.5,
   y: 151.8,
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
  mask_2.graphics.p("Aw7PfIAAkqMAh3AAAIAAEqg");
  mask_2.setTransform(108.3542, 99.0847);
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
   regY: 151.8,
   x: 96.5,
   y: 151.8,
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
 p.nominalBounds = new cjs.Rectangle(0, 108.8, 216.7, 88.2);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A0OImIAAkVMAodAAAIAAEVg");
  mask.setTransform(129.4972, 54.9773);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 137.1,
   regY: 148.1,
   x: 119.9,
   y: 148.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 122.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 124.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 126.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 128.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 130.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 132.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 133.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 134.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 135.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 136.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 136.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 137,
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
  mask_1.graphics.p("A0OOYIAArkMAodAAAIAALkg");
  mask_1.setTransform(129.4971, 92.006);
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
   regX: 137.1,
   regY: 148.1,
   x: 119.9,
   y: 148.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 122.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 124.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 126.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 128.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 130.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 132.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 133.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 134.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 135.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 136.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 136.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 137,
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
  mask_2.graphics.p("A0OQhIAAkVMAodAAAIAAEVg");
  mask_2.setTransform(129.4971, 105.6773);
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
   regX: 137.1,
   regY: 148.1,
   x: 119.9,
   y: 148.1,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 122.45,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 124.8,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 126.9,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 128.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 130.6,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 132.1,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 133.45,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 134.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 135.5,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 136.2,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 136.7,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 137,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 82.3, 259, 129.10000000000002);
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
   regX: 65.8,
   regY: 39.5,
   x: 48.6,
   y: 39.5,
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
   regX: 65.8,
   regY: 39.5,
   x: 48.6,
   y: 39.5,
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
 p.nominalBounds = new cjs.Rectangle(0, 2.5, 195.5, 69.3);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(51.4117, 123.5234, 1.234, 1.234);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(51.4474, 123.4974, 1.2341, 1.2341);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(51.65, 123.95, 1.2343, 1.2343, 0, 0, 0, 22.4, 23.2);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(51.65, 123.95, 1.2343, 1.2343, 0, 0, 0, 22.4, 23.2);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(51.4166, 123.5283, 1.2341, 1.2341);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgIBDIAAh0IglAAIAAgSIBbAAIAAASIgkAAIAAB0g");
  this.shape_3.setTransform(208.875, 145.45);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgrBDIAAiGIAqAAQAOABAKAFQAKAGAFAJQAGAKAAAMQAAALgGAKQgFAJgKAGQgKAHgOAAIgWAAIAAAwgAgXACIATAAQAHAAAGgCQAHgDAEgHQADgFAAgJQAAgJgDgHQgEgFgHgDQgGgCgHAAIgTAAg");
  this.shape_4.setTransform(198.225, 145.45);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgQQgJgPAAgVQAAgTAJgQQAJgPAQgJQAQgJATAAQAUAAAQAJQAQAJAJAPQAJAQAAATQAAAVgJAPQgJAQgQAIQgQAJgUAAQgTAAgQgJgAgZgrQgLAHgHALQgGALAAAOQAAAPAGAMQAHAKALAIQALAGAOAAQAPAAALgGQALgIAHgKQAGgMAAgPQAAgOgGgLQgHgLgLgHQgLgHgPAAQgOAAgLAHg");
  this.shape_5.setTransform(183.425, 145.45);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgIBGIAAgOQgUgCgOgGQgOgIgIgLQgIgNAAgQQAAgPAIgMQAIgMAOgIQAOgGAUgCIAAgOIARAAIAAAOQAUACAOAHQAOAHAIAMQAIAMAAAPQAAAQgIAMQgIAMgOAHQgOAHgUACIAAAOgAAJAnQAVgBAMgLQAMgKAAgRQAAgPgMgLQgMgLgVgCgAgpgaQgMALAAAPQAAARAMAKQAMALAVABIAAhOQgVACgMALg");
  this.shape_6.setTransform(166.625, 145.45);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAuBDIAAhrIgnA+IgOAAIgng+IAABrIgSAAIAAiGIAYAAIAoBDIArhDIAWAAIAACGg");
  this.shape_7.setTransform(149.55, 145.45);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgQQgJgPAAgVQAAgTAJgQQAJgPAQgJQAQgJATAAQAUAAAQAJQAQAJAJAPQAJAQAAATQAAAVgJAPQgJAQgQAIQgQAJgUAAQgTAAgQgJgAgZgrQgLAHgHALQgGALAAAOQAAAPAGAMQAHAKALAIQALAGAOAAQAPAAALgGQALgIAHgKQAGgMAAgPQAAgOgGgLQgHgLgLgHQgLgHgPAAQgOAAgLAHg");
  this.shape_8.setTransform(132.575, 145.45);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAeBDIgyg8IgNAAIAAA8IgTAAIAAiFIATAAIAAA7IAMAAIAvg7IAWAAIg0BAIA5BFg");
  this.shape_9.setTransform(118.525, 145.475);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAlBVIAAhoIhKBoIgSAAIAAiGIATAAIAABpIBJhpIATAAIAACGgAgWhDQgHgGgBgMIANAAQABAHAEACQAFADAHAAQAIAAAFgDQAEgCABgHIAMAAQAAAMgJAGQgIAGgNAAQgOAAgIgGg");
  this.shape_10.setTransform(194.05, 125.65);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAlBDIAAhoIhKBoIgSAAIAAiGIATAAIAABpIBJhpIATAAIAACGg");
  this.shape_11.setTransform(178.55, 127.45);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAjBDIAAg6IhFAAIAAA6IgTAAIAAiGIATAAIAAA8IBFAAIAAg8IATAAIAACGg");
  this.shape_12.setTransform(163.225, 127.45);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAvBDIAAhrIgoA+IgNAAIgng+IAABrIgUAAIAAiGIAYAAIApBDIAqhDIAXAAIAACGg");
  this.shape_13.setTransform(146.9, 127.45);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAlBDIAAhoIhJBoIgTAAIAAiGIATAAIAABpIBJhpIATAAIAACGg");
  this.shape_14.setTransform(130.45, 127.45);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgdBBQgLgGgIgHIAKgPQAGAGAJAFQAJAEAOAAQANABAIgHQAIgGAAgLQAAgMgKgGQgKgFgXgBIAAgPQAPAAAIgDQAJgEADgFQAEgEAAgGQgBgJgGgGQgHgEgLAAQgKAAgIADQgJAEgHAGIgIgPQAIgHAKgEQALgEAOAAQAUAAAMAJQAKAJABAPQAAANgHAIQgIAIgMADQAPACAIAIQAJAIAAAPQAAAMgGAIQgFAJgLAGQgLAEgQAAQgRAAgMgEg");
  this.shape_15.setTransform(116.5, 127.45);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AAyBcIgSg0IhBAAIgSA0IgkAAIBFi3IAlAAIBFC3gAAWAMIgWhBIgXBBIAtAAg");
  this.shape_16.setTransform(204.375, 101.825);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgRBcIAAiZIgwAAIAAgeICDAAIAAAeIgwAAIAACZg");
  this.shape_17.setTransform(188.95, 101.825);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgxBTQgVgMgNgVQgNgVAAgdQAAgbANgWQAMgVAWgMQAWgLAbgBQAcABAWALQAWAMAMAVQANAVAAAcQAAAcgNAVQgMAWgWAMQgWAMgcAAQgbAAgWgMgAgeg0QgOAHgHAOQgIAOAAARQAAASAIAOQAHAOAOAIQANAIARAAQASAAANgIQAOgIAHgOQAIgOAAgSQAAgRgIgOQgHgOgOgHQgNgJgSABQgRgBgNAJg");
  this.shape_18.setTransform(171.725, 101.8);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgRBcIAAhIIg+hvIAnAAIAqBPIArhPIAjAAIg/BwIAABHg");
  this.shape_19.setTransform(153.8, 101.825);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgxBTQgVgMgNgVQgNgVAAgdQAAgbANgWQAMgVAWgMQAWgLAbgBQAcABAWALQAWAMAMAVQANAVAAAcQAAAcgNAVQgMAWgWAMQgWAMgcAAQgbAAgWgMgAgeg0QgOAHgHAOQgIAOAAARQAAASAIAOQAHAOAOAIQANAIARAAQASAAANgIQAOgIAHgOQAIgOAAgSQAAgRgIgOQgHgOgOgHQgNgJgSABQgRgBgNAJg");
  this.shape_20.setTransform(135.875, 101.8);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgRBcIAAiZIgxAAIAAgeICFAAIAAAeIgxAAIAACZg");
  this.shape_21.setTransform(118.7, 101.825);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAktIAAJb");
  this.shape_22.setTransform(98.45, 122.5);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(18.7, 78.7, 197.9, 80.39999999999999), null);
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
   regX: 116.1,
   regY: 123.5,
   x: 98.9,
   y: 123.5,
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
 p.nominalBounds = new cjs.Rectangle(-1.3, 78.7, 217.9, 80.39999999999999);
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
  this.instance.setTransform(233, 16, 1.25, 1.25);
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
  this.instance_9.setTransform(9.55, -1.45, 0.23, 0.23, 0, 0, 0, 41.6, 124.2);
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
  this.instance_12 = new lib.car_1();
  this.instance_12.parent = this;
  this.instance_12.setTransform(93.2, 397, 1, 1, 0, 0, 0, 120.2, 75);
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(169).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(76));
  this.instance_13 = new lib.red_line();
  this.instance_13.parent = this;
  this.instance_13.setTransform(-83, 508, 1, 1, 0, 0, 180, 100, 1.5);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({
   _off: false
  }, 0).to({
   x: -13
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_14 = new lib.red_line();
  this.instance_14.parent = this;
  this.instance_14.setTransform(350.75, 221.5, 1, 1, 0, 0, 0, 100, 1.5);
  this.instance_14._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({
   _off: false
  }, 0).to({
   scaleX: 0.9988,
   x: 150.85
  }, 30, cjs.Ease.get(1)).wait(321));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("EACoAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_1 = new cjs.Graphics().p("EAClAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_2 = new cjs.Graphics().p("EACcAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_3 = new cjs.Graphics().p("EACNAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_4 = new cjs.Graphics().p("EAB4Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_5 = new cjs.Graphics().p("EABdAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_6 = new cjs.Graphics().p("EAA9Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_7 = new cjs.Graphics().p("EAAWAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_8 = new cjs.Graphics().p("EgAWAo3MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_9 = new cjs.Graphics().p("EgBIAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_10 = new cjs.Graphics().p("EgCAAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_11 = new cjs.Graphics().p("EgC/Ao4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_12 = new cjs.Graphics().p("EgEDAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_13 = new cjs.Graphics().p("EgFNAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_14 = new cjs.Graphics().p("EgGdAo3MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_15 = new cjs.Graphics().p("EgHvAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_16 = new cjs.Graphics().p("EgI6Ao3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_17 = new cjs.Graphics().p("EgKAAo2MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_18 = new cjs.Graphics().p("EgLBAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_19 = new cjs.Graphics().p("EgL8Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_20 = new cjs.Graphics().p("EgMxAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_21 = new cjs.Graphics().p("EgNhAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_22 = new cjs.Graphics().p("EgOLAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_23 = new cjs.Graphics().p("EgOvAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_24 = new cjs.Graphics().p("EgPOAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_25 = new cjs.Graphics().p("EgPnAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_26 = new cjs.Graphics().p("EgP7Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_27 = new cjs.Graphics().p("EgQJAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_28 = new cjs.Graphics().p("EgQRAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_29 = new cjs.Graphics().p("EgQUAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_119 = new cjs.Graphics().p("EACoAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_120 = new cjs.Graphics().p("EAClAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_121 = new cjs.Graphics().p("EACcAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_122 = new cjs.Graphics().p("EACNAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_123 = new cjs.Graphics().p("EAB4Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_124 = new cjs.Graphics().p("EABdAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_125 = new cjs.Graphics().p("EAA9Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_126 = new cjs.Graphics().p("EAAWAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_127 = new cjs.Graphics().p("EgAWAo3MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_128 = new cjs.Graphics().p("EgBIAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_129 = new cjs.Graphics().p("EgCAAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_130 = new cjs.Graphics().p("EgC/Ao4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_131 = new cjs.Graphics().p("EgEDAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_132 = new cjs.Graphics().p("EgFNAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_133 = new cjs.Graphics().p("EgGdAo3MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_134 = new cjs.Graphics().p("EgHqAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_135 = new cjs.Graphics().p("EgIxAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_136 = new cjs.Graphics().p("EgJ0Ao2MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_137 = new cjs.Graphics().p("EgKxAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_138 = new cjs.Graphics().p("EgLqAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_139 = new cjs.Graphics().p("EgMeAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_140 = new cjs.Graphics().p("EgNMAo2MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_141 = new cjs.Graphics().p("EgN2Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_142 = new cjs.Graphics().p("EgObAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_143 = new cjs.Graphics().p("EgO7Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_144 = new cjs.Graphics().p("EgPWAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_145 = new cjs.Graphics().p("EgPtAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_146 = new cjs.Graphics().p("EgP+Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_147 = new cjs.Graphics().p("EgQKAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_148 = new cjs.Graphics().p("EgQSAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_149 = new cjs.Graphics().p("EgQUAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_209 = new cjs.Graphics().p("EACoAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_210 = new cjs.Graphics().p("EAClAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_211 = new cjs.Graphics().p("EACcAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_212 = new cjs.Graphics().p("EACNAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_213 = new cjs.Graphics().p("EAB4Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_214 = new cjs.Graphics().p("EABdAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_215 = new cjs.Graphics().p("EAA9Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_216 = new cjs.Graphics().p("EAAWAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_217 = new cjs.Graphics().p("EgAWAo3MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_218 = new cjs.Graphics().p("EgBIAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_219 = new cjs.Graphics().p("EgCAAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_220 = new cjs.Graphics().p("EgC/Ao4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_221 = new cjs.Graphics().p("EgEDAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_222 = new cjs.Graphics().p("EgFNAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_223 = new cjs.Graphics().p("EgGdAo3MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_224 = new cjs.Graphics().p("EgHqAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_225 = new cjs.Graphics().p("EgIxAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_226 = new cjs.Graphics().p("EgJ0Ao2MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_227 = new cjs.Graphics().p("EgKxAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_228 = new cjs.Graphics().p("EgLqAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_229 = new cjs.Graphics().p("EgMeAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_230 = new cjs.Graphics().p("EgNMAo2MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_231 = new cjs.Graphics().p("EgN2Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_232 = new cjs.Graphics().p("EgObAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_233 = new cjs.Graphics().p("EgO7Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_234 = new cjs.Graphics().p("EgPWAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_235 = new cjs.Graphics().p("EgPtAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_236 = new cjs.Graphics().p("EgP+Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_237 = new cjs.Graphics().p("EgQKAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_238 = new cjs.Graphics().p("EgQSAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_239 = new cjs.Graphics().p("EgQUAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_289 = new cjs.Graphics().p("EACoAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_290 = new cjs.Graphics().p("EAClAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_291 = new cjs.Graphics().p("EACcAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_292 = new cjs.Graphics().p("EACNAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_293 = new cjs.Graphics().p("EAB4Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_294 = new cjs.Graphics().p("EABdAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_295 = new cjs.Graphics().p("EAA9Ao3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_296 = new cjs.Graphics().p("EAAWAo3MAAAgvVMAooAAAMAAAAvVg");
  var mask_graphics_297 = new cjs.Graphics().p("EgAWAo3MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_298 = new cjs.Graphics().p("EgBIAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_299 = new cjs.Graphics().p("EgCAAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_300 = new cjs.Graphics().p("EgC/Ao4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_301 = new cjs.Graphics().p("EgEDAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_302 = new cjs.Graphics().p("EgFNAo4MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_303 = new cjs.Graphics().p("EgGdAo3MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_304 = new cjs.Graphics().p("EgHqAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_305 = new cjs.Graphics().p("EgIxAo3MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_306 = new cjs.Graphics().p("EgJ0Ao2MAAAgvUMAonAAAMAAAAvUg");
  var mask_graphics_307 = new cjs.Graphics().p("EgKxAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_308 = new cjs.Graphics().p("EgLqAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_309 = new cjs.Graphics().p("EgMeAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_310 = new cjs.Graphics().p("EgNMAo2MAAAgvVMAomAAAMAAAAvVg");
  var mask_graphics_311 = new cjs.Graphics().p("EgN2Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_312 = new cjs.Graphics().p("EgObAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_313 = new cjs.Graphics().p("EgO7Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_314 = new cjs.Graphics().p("EgPWAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_315 = new cjs.Graphics().p("EgPtAo2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_316 = new cjs.Graphics().p("EgP+Ao2MAAAgvVMAonAAAMAAAAvVg");
  var mask_graphics_317 = new cjs.Graphics().p("EgQKAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_318 = new cjs.Graphics().p("EgQSAo2MAAAgvWMAonAAAMAAAAvWg");
  var mask_graphics_319 = new cjs.Graphics().p("EgQUAo3MAAAgvVMAonAAAMAAAAvVg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 276.7488,
   y: 261.5018
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 276.4518,
   y: 261.5026
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 275.5609,
   y: 261.5047
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 274.0761,
   y: 261.5083
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 271.9974,
   y: 261.5134
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 269.3247,
   y: 261.5199
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 266.0581,
   y: 261.5278
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 262.1976,
   y: 261.5371
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 257.7432,
   y: 261.5479
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 252.6948,
   y: 261.5602
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 247.0526,
   y: 261.5739
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 240.8164,
   y: 261.589
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 233.9862,
   y: 261.6056
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 226.5622,
   y: 261.6236
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 218.5442,
   y: 261.4915
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 210.4183,
   y: 261.4733
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 202.8529,
   y: 261.4564
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 195.8478,
   y: 261.4407
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 189.4032,
   y: 261.4263
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 183.519,
   y: 261.4131
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 178.1951,
   y: 261.4012
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 173.4317,
   y: 261.3905
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 169.2287,
   y: 261.3811
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 165.586,
   y: 261.3729
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 162.5038,
   y: 261.366
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 159.982,
   y: 261.3604
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 158.0206,
   y: 261.356
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 156.6196,
   y: 261.3529
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 155.779,
   y: 261.351
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 155.4988,
   y: 261.5018
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 276.7488,
   y: 261.5018
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 276.4518,
   y: 261.5026
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 275.5609,
   y: 261.5047
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 274.0761,
   y: 261.5083
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 271.9974,
   y: 261.5134
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 269.3247,
   y: 261.5199
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 266.0581,
   y: 261.5278
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 262.1976,
   y: 261.5371
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 257.7432,
   y: 261.5479
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 252.6948,
   y: 261.5602
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 247.0526,
   y: 261.5739
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 240.8164,
   y: 261.589
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 233.9862,
   y: 261.6056
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 226.5622,
   y: 261.6236
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 218.5442,
   y: 261.4915
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 210.9098,
   y: 261.4744
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 203.7679,
   y: 261.4585
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 197.1186,
   y: 261.4436
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 190.9618,
   y: 261.4298
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 185.2976,
   y: 261.4171
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 180.1259,
   y: 261.4055
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 175.4467,
   y: 261.395
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 171.2601,
   y: 261.3856
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 167.5661,
   y: 261.3774
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 164.3645,
   y: 261.3702
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 161.6556,
   y: 261.3641
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 159.4391,
   y: 261.3592
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 157.7152,
   y: 261.3553
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 156.4839,
   y: 261.3526
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 155.7451,
   y: 261.3509
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 155.4988,
   y: 261.5018
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 276.7488,
   y: 261.5018
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 276.4518,
   y: 261.5026
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 275.5609,
   y: 261.5047
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 274.0761,
   y: 261.5083
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 271.9974,
   y: 261.5134
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 269.3247,
   y: 261.5199
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 266.0581,
   y: 261.5278
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 262.1976,
   y: 261.5371
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 257.7432,
   y: 261.5479
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 252.6948,
   y: 261.5602
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 247.0526,
   y: 261.5739
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 240.8164,
   y: 261.589
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 233.9862,
   y: 261.6056
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 226.5622,
   y: 261.6236
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 218.5442,
   y: 261.4915
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 210.9098,
   y: 261.4744
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 203.7679,
   y: 261.4585
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 197.1186,
   y: 261.4436
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 190.9618,
   y: 261.4298
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 185.2976,
   y: 261.4171
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 180.1259,
   y: 261.4055
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 175.4467,
   y: 261.395
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 171.2601,
   y: 261.3856
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 167.5661,
   y: 261.3774
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 164.3645,
   y: 261.3702
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 161.6556,
   y: 261.3641
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 159.4391,
   y: 261.3592
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 157.7152,
   y: 261.3553
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 156.4839,
   y: 261.3526
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 155.7451,
   y: 261.3509
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 155.4988,
   y: 261.5018
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 276.7488,
   y: 261.5018
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 276.4518,
   y: 261.5026
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 275.5609,
   y: 261.5047
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 274.0761,
   y: 261.5083
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 271.9974,
   y: 261.5134
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 269.3247,
   y: 261.5199
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 266.0581,
   y: 261.5278
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 262.1976,
   y: 261.5371
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 257.7432,
   y: 261.5479
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 252.6948,
   y: 261.5602
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 247.0526,
   y: 261.5739
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 240.8164,
   y: 261.589
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 233.9862,
   y: 261.6056
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 226.5622,
   y: 261.6236
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 218.5442,
   y: 261.4915
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 210.9098,
   y: 261.4744
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 203.7679,
   y: 261.4585
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 197.1186,
   y: 261.4436
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 190.9618,
   y: 261.4298
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 185.2976,
   y: 261.4171
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 180.1259,
   y: 261.4055
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 175.4467,
   y: 261.395
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 171.2601,
   y: 261.3856
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 167.5661,
   y: 261.3774
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 164.3645,
   y: 261.3702
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 161.6556,
   y: 261.3641
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 159.4391,
   y: 261.3592
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 157.7152,
   y: 261.3553
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 156.4839,
   y: 261.3526
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 155.7451,
   y: 261.3509
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 155.4988,
   y: 261.5018
  }).wait(61));
  this.instance_15 = new lib.bg1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(150.65, 417, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_16.setTransform(152, 417, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_17.setTransform(152, 417, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_18.setTransform(152, 415.6, 1, 1, 0, 0, 0, 150, 197);
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
 p.nominalBounds = new cjs.Rectangle(-232.3, 0, 732.4000000000001, 600);
 (lib.toyota_300x600 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(144, 299, 409.5, 301);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 300,
  height: 600,
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