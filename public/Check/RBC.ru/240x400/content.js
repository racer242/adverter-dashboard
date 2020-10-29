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
 p.nominalBounds = new cjs.Rectangle(0, 0, 300, 312);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 300, 312);
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
  this.shape.setTransform(161.2, 99.95, 1, 1, 0, 0, 0, -0.1, 0.2);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(160.8, 100.75, 1, 1, 0, 0, 0, -0.2, 0.1);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(94, 70, 134.1, 61.400000000000006), null);
 (lib.t03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAqBAIgQgpIg0AAIgQApIgNAAIAxh/IANAAIAxB/gAAXALIgXg6IgVA6IAsAAg");
  this.shape.setTransform(150.9, 122.9);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAIgEAHQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGgBAFgDQAGgDADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_1.setTransform(140.575, 122.9);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AghA5QgPgIgJgPQgJgPAAgTQAAgSAJgPQAJgPAPgIQAPgJASAAQATAAAPAJQAPAIAIAPQAKAPgBASQABATgKAPQgIAOgPAJQgPAIgTABQgSgBgPgIgAgagtQgMAHgHAMQgHALAAAPQAAAPAHAMQAHAMAMAHQAMAHAOAAQAPAAAMgHQAMgHAHgMQAHgMAAgPQAAgPgHgLQgHgMgMgHQgMgHgPAAQgOAAgMAHg");
  this.shape_2.setTransform(127.55, 122.925);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgbA8QgLgFgGgHIAHgLIAJAIQAGAEAGACQAIACAIABQAOgBAJgGQAIgHABgMQgBgNgKgGQgLgGgVAAIAAgLQAOAAAJgEQAIgDAEgGQACgFAAgGQABgKgIgFQgGgGgNAAQgJAAgJAEQgIAEgGAFIgGgKQAHgGAKgFQAJgEAMAAQAMAAAJAEQAJAEAFAHQAFAHAAAKQgBAMgGAIQgIAHgLADQAOACAIAHQAJAIAAAOQAAALgFAJQgGAIgKAFQgKAFgOAAQgPAAgMgGg");
  this.shape_3.setTransform(115, 122.925);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgiBAIgJgDIADgMIAHADIAIABQAIAAAFgFQAFgEAEgKIgyhiIAPAAIApBUIAlhUIAOAAIgrBiQgEAJgFAHQgDAHgGAEQgHAEgKAAIgKgBg");
  this.shape_4.setTransform(105.275, 123);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_5.setTransform(95.525, 122.925);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_6.setTransform(79.025, 122.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAmBQIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/gAgThAQgHgFAAgKIAJAAQABAGAFADQAFACAGAAQAIAAAFgCQAEgDABgGIAKAAQgBAKgIAFQgHAFgMAAQgMAAgHgFg");
  this.shape_7.setTransform(66.025, 121.275);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAqBAIgPgpIg1AAIgQApIgNAAIAxh/IANAAIAxB/gAAWALIgWg6IgWA6IAsAAg");
  this.shape_8.setTransform(53.85, 122.9);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgaA8QgLgFgHgHIAHgLIAJAIQAGAEAGACQAIACAIABQAOgBAIgGQAJgHAAgMQAAgNgLgGQgKgGgVAAIAAgLQAOAAAIgEQAJgDAEgGQADgFAAgGQAAgKgIgFQgGgGgNAAQgKAAgHAEQgJAEgGAFIgGgKQAHgGAKgFQAKgEAMAAQALAAAJAEQAJAEAFAHQAFAHAAAKQgBAMgGAIQgIAHgMADQAPACAIAHQAJAIAAAOQAAALgGAJQgEAIgLAFQgKAFgOAAQgPAAgLgGg");
  this.shape_9.setTransform(43.15, 122.925);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAmBAIAAhqIhLBqIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_10.setTransform(31.875, 122.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEAAADgFQADgDADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBANgDAHQgDAIgDACIA7AAIAAhnIgpAAg");
  this.shape_11.setTransform(19.425, 124.4);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAmBQIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/gAgThAQgHgFAAgKIAJAAQABAGAFADQAFACAGAAQAIAAAFgCQAEgDABgGIAKAAQgBAKgIAFQgHAFgMAAQgMAAgHgFg");
  this.shape_12.setTransform(133.175, 98.125);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAOAAIAAB/gAg9BAIAAh/IAOAAIAAA3IAcAAQAUAAAKAJQAKAJAAARQAAALgEAIQgFAJgJAEQgIAFgOAAgAgvA0IAaAAQAPAAAGgGQAIgHAAgMQgBgNgHgFQgHgHgOAAIgaAAg");
  this.shape_13.setTransform(118.975, 99.75);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_14.setTransform(104.925, 99.75);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgGBAIAAhzIgkAAIAAgMIBVAAIAAAMIgkAAIAABzg");
  this.shape_15.setTransform(94.2, 99.75);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_16.setTransform(85.325, 99.75);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARABALAIQAKAJAAAOQAAAKgEAGQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAEQgJAFgMAAgAgbA0IAbAAQAOAAAGgGQAHgHABgLQgBgLgGgGQgHgGgLAAIgeAAgAgbgFIAYAAQAGAAAFgDQAGgEADgFQADgGAAgGQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_17.setTransform(75.575, 99.75);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAsBPIAAgeIhjAAIAAh/IANAAIAABzIBGAAIAAhzIAOAAIAABzIAOAAIAAAqg");
  this.shape_18.setTransform(64.175, 101.25);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AAkBAIgkg2IgjA2IgQAAIAshAIgrg/IAQAAIAiA1IAkg1IAOAAIgqA/IAsBAg");
  this.shape_19.setTransform(51.6, 99.75);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgiBAIgJgDIADgMIAHADIAIABQAIAAAFgFQAFgFAEgIIgyhjIAPAAIApBUIAlhUIAOAAIgrBiQgEAJgFAHQgDAHgGAEQgHAEgKAAIgKgBg");
  this.shape_20.setTransform(40.875, 99.85);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARABALAIQAKAJAAAOQAAAKgEAGQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAEQgJAFgMAAgAgbA0IAbAAQAOAAAGgGQAHgHABgLQgBgLgGgGQgHgGgLAAIgeAAgAgbgFIAYAAQAGAAAFgDQAGgEADgFQADgGAAgGQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_21.setTransform(30.875, 99.75);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEgBADgEQADgDADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBAMgDAIQgDAIgDACIA7AAIAAhnIgpAAg");
  this.shape_22.setTransform(19.425, 101.25);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAmBQIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/gAgThAQgHgFAAgKIAJAAQABAGAFADQAFACAGAAQAIAAAFgCQAEgDABgGIAKAAQgBAKgIAFQgHAFgMAAQgMAAgHgFg");
  this.shape_23.setTransform(157.575, 74.975);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAOAAIAAB/gAg9BAIAAh/IAOAAIAAA3IAcAAQAUAAAKAJQAKAJAAARQAAAKgEAJQgFAJgJAEQgIAFgOAAgAgvA0IAaAAQAPAAAGgGQAIgHAAgMQgBgMgHgGQgHgHgOABIgaAAg");
  this.shape_24.setTransform(143.375, 76.6);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_25.setTransform(129.325, 76.6);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IAOAAIAAA3IAbAAQAWAAAJAJQALAJAAARQAAAKgFAJQgFAJgIAEQgKAFgOAAgAgbA0IAbAAQANAAAHgGQAIgHAAgMQgBgMgHgGQgIgHgMABIgbAAg");
  this.shape_26.setTransform(118.3, 76.6);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgtBAIgEgCIACgMIAEACIAEAAQAFAAADgEQACgEABgIIAJhkIBFAAIAAB/IgNAAIAAhyIgrAAIgJBbQgCAMgFAGQgFAGgLABIgHgBg");
  this.shape_27.setTransform(106.2, 76.675);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAANIg3AAIAAAtIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_28.setTransform(96.975, 76.6);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgFBAIAAhyIgkAAIAAgNIBTAAIAAANIgjAAIAAByg");
  this.shape_29.setTransform(87.65, 76.6);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAmBAIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_30.setTransform(76.775, 76.6);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgaA8QgLgFgHgHIAHgLIAJAIQAGAEAHACQAHACAIABQAOgBAIgGQAJgHAAgMQAAgNgLgGQgKgGgWAAIAAgLQAPAAAIgEQAKgDACgGQAEgFAAgGQAAgKgIgFQgHgGgMAAQgJAAgIAEQgJAEgGAFIgGgKQAHgGAKgFQAKgEAMAAQAMAAAIAEQAJAEAFAHQAFAHAAAKQAAAMgIAIQgGAHgNADQAPACAJAHQAHAIABAOQAAALgGAJQgEAIgLAFQgKAFgOAAQgPAAgLgGg");
  this.shape_31.setTransform(65.1, 76.625);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgPAqIgOAAIAxh/IANAAIAxB/gAAXAMIgXg8IgVA8IAsAAg");
  this.shape_32.setTransform(54.8, 76.6);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANAAAKAFQAJAFAFAJQAFAIAAANQAAAKgFAJQgFAJgJAGQgKAFgNAAIgWAAIAAAwgAgZAEIAVAAQAHAAAHgDQAHgCAEgHQAEgGAAgJQAAgLgEgGQgEgGgHgDQgHgCgHAAIgVAAg");
  this.shape_33.setTransform(44.825, 76.6);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAOAAIAAB/gAg9BAIAAh/IAOAAIAAA3IAcAAQAUAAAKAJQAKAJAAARQAAAKgEAJQgFAJgJAEQgIAFgOAAgAgvA0IAaAAQAPAAAGgGQAIgHAAgMQgBgMgHgGQgHgHgOABIgaAAg");
  this.shape_34.setTransform(31.825, 76.6);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAOQAAAJgEAIQgEAHgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAEQgJAFgMAAgAgbA0IAbAAQAOAAAGgGQAHgHABgLQgBgLgGgGQgHgFgLgBIgeAAgAgbgFIAYAAQAGgBAFgCQAGgEADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_35.setTransform(19.475, 76.6);
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
 }).prototype = getMCSymbolPrototype(lib.t03, new cjs.Rectangle(11.5, 60, 181.5, 76), null);
 (lib.t02a = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAmCgQgTgZAAgtQAAgrATgYQAUgYAjAAQAjAAATAYQAUAYAAArQAAAtgUAZQgTAYgjAAQgjAAgUgYgAA8ApQgLAQAAAhQAAAiALARQALARAWAAQAWAAALgRQAKgRAAgiQAAghgKgQQgLgQgWAAQgWAAgLAQgAh6C1IDVlpIAgAAIjVFpgAiSgVQgUgZAAgtQAAgrAUgZQATgYAjAAQAjAAAUAYQATAZABArQgBAtgTAZQgUAWgjABQgjgBgTgWgAh8iMQgLAQAAAiQAAAhALARQAKAQAWAAQAWAAALgQQALgRAAgiQAAgggLgRQgLgQgWAAQgWAAgKAQg");
  this.shape.setTransform(212.725, 110.85);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAkC1IAAhRIiiAAIAAgYICtkAIAbAAIAAD3IA1AAIAAAhIg1AAIAABRgAhUBDIB4AAIAAi0g");
  this.shape_1.setTransform(183.975, 110.85);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(167.5, 67.4, 181.39999999999998, 76.79999999999998), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape.setTransform(159.575, 122.9);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANABAKAEQAJAFAFAIQAFAJAAAMQAAALgFAKQgFAIgJAFQgKAGgNABIgWAAIAAAvgAgZAFIAVAAQAHAAAHgEQAHgDAEgGQAEgHAAgJQAAgKgEgGQgEgGgHgCQgHgDgHAAIgVAAg");
  this.shape_1.setTransform(150.175, 122.9);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IBCAAIAAAMIg1AAIAAArIAbAAQAWAAAKAIQAKAKAAARQgBALgEAIQgEAIgJAGQgKAEgOAAgAgbA0IAaAAQAOAAAIgHQAHgGAAgMQAAgNgIgGQgIgFgNgBIgaAAg");
  this.shape_2.setTransform(140.2, 122.9);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAfBAIAAg2IgYAAIgBAAIgCAAIgfA2IgRAAIAkg4QgLgEgGgJQgGgJgBgMQABgRALgKQAKgKASAAIAlAAIAAB/gAgEgwQgFACgFAFQgDAGAAAJQAAAJADAGQAEAGAGADQAFACAHAAIAXAAIAAgzIgWAAQgHAAgGADg");
  this.shape_3.setTransform(128.65, 122.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AghA5QgPgIgJgPQgJgPAAgTQAAgSAJgPQAJgPAPgIQAPgJASAAQATAAAPAJQAPAIAJAPQAJAPAAASQAAATgJAPQgJAOgPAJQgPAIgTABQgSgBgPgIgAgbgtQgLAHgHAMQgHALAAAPQAAAPAHAMQAHAMALAHQAMAHAPAAQAPAAAMgHQAMgHAHgMQAHgMgBgPQABgPgHgLQgHgMgMgHQgMgHgPAAQgPAAgMAHg");
  this.shape_4.setTransform(116.55, 122.925);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_5.setTransform(102.675, 122.9);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAIgEAHQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGgBAFgDQAGgDADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_6.setTransform(87.625, 122.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAqBAIgPgpIg1AAIgPApIgOAAIAxh/IANAAIAxB/gAAWALIgWg6IgWA6IAsAAg");
  this.shape_7.setTransform(72.55, 122.9);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_8.setTransform(62.475, 122.925);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAIgEAHQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGgBAFgDQAGgDADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_9.setTransform(51.575, 122.9);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAqBAIgQgpIg0AAIgPApIgOAAIAxh/IANAAIAxB/gAAXALIgXg6IgVA6IAsAAg");
  this.shape_10.setTransform(40.4, 122.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgFBAIAAhzIgkAAIAAgMIBTAAIAAAMIgjAAIAABzg");
  this.shape_11.setTransform(30.5, 122.9);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgWA5QgQgIgIgPQgJgPAAgTQAAgTAJgOQAIgPAQgIQAOgJATAAQAMAAALAEQALAEAIAGIgEANQgIgGgKgEQgKgEgKAAQgPAAgLAHQgMAHgHALQgGAMAAAPQAAAPAGAMQAHAMAMAHQAMAHAOAAQAMAAAKgEQAKgEAIgHIAFANQgLAHgLAEQgLAEgMAAQgTgBgOgIg");
  this.shape_12.setTransform(20.25, 122.925);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAfBAIAAg2IgYAAIgCAAIgBAAIggA2IgPAAIAjg4QgLgFgGgIQgGgJAAgMQAAgRAKgKQALgJASgBIAkAAIAAB/gAgEgxQgFADgEAFQgEAGgBAJQAAAKAEAFQAEAGAGACQAFADAHAAIAXAAIAAgzIgVAAQgIAAgGACg");
  this.shape_13.setTransform(105.75, 99.75);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAqBAIgPgqIg1AAIgPAqIgOAAIAxh/IANAAIAxB/gAAWALIgWg7IgWA7IAsAAg");
  this.shape_14.setTransform(95.5, 99.75);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_15.setTransform(83.475, 99.75);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgGBAIAAhzIgkAAIAAgMIBVAAIAAAMIgkAAIAABzg");
  this.shape_16.setTransform(72.75, 99.75);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AAmBAIAAhqIhLBqIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_17.setTransform(61.875, 99.75);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEgBADgEQADgDADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBAMgDAIQgDAIgDACIA7AAIAAhnIgpAAg");
  this.shape_18.setTransform(49.425, 101.25);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_19.setTransform(39.325, 99.75);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANAAAKAFQAJAFAFAJQAFAIAAAMQAAAMgFAIQgFAJgJAFQgKAGgNABIgWAAIAAAvgAgZAEIAVAAQAHABAHgEQAHgCAEgHQAEgGAAgKQAAgKgEgGQgEgGgHgDQgHgCgHAAIgVAAg");
  this.shape_20.setTransform(29.925, 99.75);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_21.setTransform(20.075, 99.775);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAfBAIAAg1IgYAAIgCAAIgBAAIggA1IgQAAIAkg4QgLgEgGgJQgGgJAAgMQAAgRAKgKQALgKASAAIAkAAIAAB/gAgDgxQgHADgDAFQgFAGAAAJQAAAJAEAGQAEAGAGACQAFADAHAAIAXAAIAAgzIgWAAQgHAAgFACg");
  this.shape_22.setTransform(135.8, 76.6);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgPAqIgOAAIAxh/IANAAIAxB/gAAXAMIgXg8IgWA8IAtAAg");
  this.shape_23.setTransform(125.55, 76.6);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_24.setTransform(113.525, 76.6);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IANAAIAAA3IAbAAQAVAAALAJQAKAJAAARQgBAKgEAJQgEAJgKAEQgJAFgOAAgAgbA0IAaAAQAOAAAIgGQAHgHAAgMQAAgMgIgGQgHgHgOABIgaAAg");
  this.shape_25.setTransform(102.5, 76.6);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgtBAIgFgCIADgMIADACIAGAAQAEAAACgEQADgEABgIIAKhkIBFAAIAAB/IgOAAIAAhyIgsAAIgJBbQAAAMgGAGQgFAGgKABIgIgBg");
  this.shape_26.setTransform(90.4, 76.675);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgQAqIgNAAIAxh/IANAAIAxB/gAAXAMIgXg8IgVA8IAsAAg");
  this.shape_27.setTransform(80.15, 76.6);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAmBAIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_28.setTransform(67.975, 76.6);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAsBPIAAgeIhjAAIAAh/IANAAIAABzIBGAAIAAhzIAOAAIAABzIAOAAIAAAqg");
  this.shape_29.setTransform(55.575, 78.1);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAANIg3AAIAAAtIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_30.setTransform(43.925, 76.6);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAjBAIAAhyIhFAAIAAByIgOAAIAAh/IBhAAIAAB/g");
  this.shape_31.setTransform(32.525, 76.6);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgWA5QgQgIgIgPQgJgPAAgTQAAgTAJgOQAIgPAQgIQAOgJATAAQAMAAALAEQALAEAIAGIgEANQgIgGgKgEQgKgEgKAAQgPAAgLAHQgMAHgHALQgGAMAAAPQAAAPAGAMQAHAMAMAHQAMAHAOAAQAMAAAKgEQAKgEAIgHIAFANQgLAHgLAEQgLAEgMAAQgTgBgOgIg");
  this.shape_32.setTransform(20.25, 76.625);
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
 }).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(11.5, 60, 181.5, 76), null);
 (lib.t01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.style();
  this.instance.parent = this;
  this.instance.setTransform(65, 31, 0.6639, 0.6634);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(65, 31, 79, 27.200000000000003), null);
 (lib.t01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAJBHIAAgcIg8AAIAAgRIA9hgIAZAAIAABbIARAAIAAAWIgRAAIAAAcgAgaAVIAjAAIAAg3g");
  this.shape.setTransform(57.475, 43.7);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgOBHIgziNIAdAAIAkBtIAlhtIAdAAIgzCNg");
  this.shape_1.setTransform(45.625, 43.7);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAnBHIgOgoIgyAAIgOAoIgbAAIA0iNIAdAAIA0CNgAARAJIgRgyIgRAyIAiAAg");
  this.shape_2.setTransform(32.525, 43.7);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAXBHIggg3IgSAAIAAA3IgbAAIAAiNIAyAAQAOAAALAGQAKAFAGAJQAFAKAAAMQAAANgHAKQgGAKgNAGIAnA8gAgbgFIATAAQAGAAAEgCQAGgDADgEQADgFAAgHQAAgLgHgGQgGgEgJAAIgTAAg");
  this.shape_3.setTransform(20.175, 43.7);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAnBHIgOgoIgyAAIgOAoIgbAAIA0iNIAdAAIA0CNgAARAJIgRgyIgRAyIAiAAg");
  this.shape_4.setTransform(85.125, 20.2);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgNBHIAAh1IglAAIAAgYIBlAAIAAAYIglAAIAAB1g");
  this.shape_5.setTransform(73.1, 20.2);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AglBAQgRgKgJgQQgKgQAAgWQAAgVAKgQQAJgRARgJQARgJAUAAQAWAAAQAJQARAJAKARQAJAQAAAVQAAAVgJARQgKAQgRAJQgQAKgWAAQgUAAgRgJgAgXgpQgLAHgFAKQgGALAAANQAAAOAGALQAFAKALAHQAKAFANAAQAOAAAKgFQALgHAFgKQAHgLgBgOQABgNgHgLQgFgKgLgHQgKgFgOAAQgNAAgKAFg");
  this.shape_6.setTransform(59.7, 20.2);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgMBHIAAg3IgwhWIAeAAIAfA9IAhg9IAbAAIgwBWIAAA3g");
  this.shape_7.setTransform(45.8, 20.2);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AglBAQgRgKgKgQQgJgQgBgWQABgVAJgQQAKgRARgJQAQgJAVAAQAVAAASAJQAQAJAKARQAKAQAAAVQAAAVgKARQgKAQgQAJQgSAKgVAAQgVAAgQgJgAgXgpQgLAHgFAKQgGALAAANQAAAOAGALQAFAKALAHQALAFAMAAQAOAAAKgFQAKgHAHgKQAFgLABgOQgBgNgFgLQgHgKgKgHQgKgFgOAAQgMAAgLAFg");
  this.shape_8.setTransform(31.85, 20.2);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgMBHIAAh1IgmAAIAAgYIBlAAIAAAYIglAAIAAB1g");
  this.shape_9.setTransform(18.5, 20.2);
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
 }).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(11, 2, 181.5, 56), null);
 (lib.snoska3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
  this.shape.setTransform(158.025, 386.775);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgBAUIAQgUIgQgTIAHAAIARATIgRAUgAgWAUIARgUIgRgTIAIAAIAQATIgQAUg");
  this.shape_1.setTransform(154.325, 384.6);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIAOAAQAHAAAEADQAGADAAAHQgBAFgCADQgCAEgEABQgDACgFAAgAgTATIAOAAQAFAAACgCQACgDAAgEQAAgFgCgCQgDgCgFAAIgNAAg");
  this.shape_2.setTransform(148.5, 384.7);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_3.setTransform(142.175, 385.7);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQAEgGAFgDQAFgDAHAAQAGAAAGADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAGAGQAEAEAIAAQAGAAAFgBQAEgCADgEIACAHQgDADgFACQgGACgGAAQgHAAgGgEgAARgEQgBgEgCgEQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCAEAAAEIAgAAIAAAAg");
  this.shape_4.setTransform(136.2, 384.7);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_5.setTransform(131.225, 384.7);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_6.setTransform(125.525, 384.7);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgIAWQgGgCgEgHQgCgFAAgIQAAgHACgGQAEgGAGgDQAFgDAHAAQAFAAAFABIAHAEIgDAGQgCgCgEgBQgEgCgEABQgEgBgFADQgEACgCAFQgDAEAAAFQAAAGADAEQACAEAEADQAEADAEgBQAFABAEgCIAIgEIABAGQgDADgEACQgFABgGAAQgGAAgFgEg");
  this.shape_7.setTransform(120.2, 384.7);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgEgHQgCgFAAgIQAAgHACgGQAEgGAFgDQAHgDAGAAQAFAAAFABIAHAEIgDAGQgCgCgEgBQgEgCgEABQgEgBgEADQgFACgCAFQgCAEAAAFQAAAGACAEQACAEAEADQAEADAFgBIAJgBIAHgEIACAGQgEADgEACQgFABgGAAQgGAAgGgEg");
  this.shape_8.setTransform(115.35, 384.7);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_9.setTransform(109.925, 384.7);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_10.setTransform(104.125, 385.7);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AALAZIgVgYIgCAAIAAAYIgHAAIAAgxIAHAAIAAAVIADAAIATgVIAJAAIgXAYIAYAZg");
  this.shape_11.setTransform(98.925, 384.7);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgGAGgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAEAGQAFAEAJAAQAFAAAFgBQAEgCAEgEIACAHQgDADgGACQgFACgHAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDAEAAAEIAgAAIAAAAg");
  this.shape_12.setTransform(91.25, 384.7);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAFADQAEADAAAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGAAACgCQADgDAAgEQgBgFgDgCQgBgCgHAAIgMAAg");
  this.shape_13.setTransform(85.1, 384.7);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_14.setTransform(78.725, 384.7);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIADAAQAEAAACgDQADgEAAgGIAEgeIAeAAIAAArIAIAAIAAAUgAgIAAIgBAHQgBADgCACIAYAAIAAglIgRAAg");
  this.shape_15.setTransform(72.95, 385.425);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_16.setTransform(67.225, 384.7);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_17.setTransform(62.025, 384.7);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_18.setTransform(56.275, 384.7);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_19.setTransform(50.375, 385.7);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AAOAZIAAgrIgbAAIAAArIgHAAIAAgxIApAAIAAAxg");
  this.shape_20.setTransform(44.225, 384.7);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_21.setTransform(38.375, 384.7);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_22.setTransform(32.525, 384.7);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_23.setTransform(26.375, 384.725);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_24.setTransform(20.975, 384.7);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AAOAZIAAgrIgbAAIAAArIgHAAIAAgxIApAAIAAAxg");
  this.shape_25.setTransform(15.175, 384.7);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgGAGgDQAGgDAFAAQAIAAAFADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAGAGQAFAEAHAAQAGAAAFgBQAEgCADgEIADAHQgDADgGACQgGACgGAAQgHAAgGgEgAARgEQgBgEgCgEQgCgDgEgCQgDgCgFAAQgCAAgEACQgEACgCADQgDAEgBAEIAhAAIAAAAg");
  this.shape_26.setTransform(228.65, 373.45);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAUAZIAAgxIAHAAIAAAxgAgaAZIAAgxIAHAAIAAAVIANAAQAIAAAEADQAGADgBAHQAAAFgCADQgCAEgEABQgDACgFAAgAgTATIANAAQAGAAACgCQADgDgBgEQAAgFgCgCQgDgCgFAAIgNAAg");
  this.shape_27.setTransform(222.5, 373.45);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_28.setTransform(216.125, 373.45);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_29.setTransform(210.375, 374.45);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgGAGgDQAFgDAHAAQAGAAAGADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAIAAQAFAAAFgBQAFgCADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCAEAAAEIAgAAIAAAAg");
  this.shape_30.setTransform(204.4, 373.45);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAVAZIAAgnIgTAgIgEAAIgSggIAAAnIgHAAIAAgxIAIAAIATAiIAUgiIAIAAIAAAxg");
  this.shape_31.setTransform(198.15, 373.45);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgMAZIgIgFIACgGQADACAEACQAFACAGgBQAGAAADgBQAEgCAAgFQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQgBgCgFgCIgLgBIAAgFQAJAAAEgCQAEgCAAgEQAAgEgDgCQgDgCgFAAQgEAAgDACIgIACIgCgFIAIgEIAJgBQAJAAAEADQAFADAAAGQAAAGgDACQgDAEgGABIAHAAQAEACACADQACACAAAEQAAAGgDACQgDAEgEACQgFABgGAAQgHAAgFgBg");
  this.shape_32.setTransform(192.025, 373.45);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_33.setTransform(186.925, 373.45);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_34.setTransform(181.475, 374.45);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgGAGgDQAFgDAHAAQAGAAAGADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAEAGQAGAEAIAAQAFAAAFgBQAFgCADgEIACAHQgDADgGACQgFACgHAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgEAAQgEAAgDACQgEACgDADQgCAEAAAEIAgAAIAAAAg");
  this.shape_35.setTransform(175.5, 373.45);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_36.setTransform(169.875, 373.45);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgGAAIAAgUIACAAQAEAAACgDQADgEAAgGIAEgeIAfAAIAAArIAIAAIAAAUgAgIAAIgBAHQgCADgCACIAZAAIAAglIgRAAg");
  this.shape_37.setTransform(164.1, 374.175);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQAEgGAFgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAEAGQAFAEAJAAQAFAAAFgBQAFgCADgEIACAHQgDADgGACQgGACgGAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDAEgBAEIAhAAIAAAAg");
  this.shape_38.setTransform(158.65, 373.45);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_39.setTransform(153.075, 374.45);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgIAAgLQAAgKAFgIQAFgIAIgFQAIgEAKgBQAHAAAGACQAGADAFADIgDAIQgEgEgFgCQgGgCgGgBQgHAAgHAEQgGAEgEAHQgEAHAAAHQAAAIAEAHQAEAHAGADQAHAEAHABQAHAAAGgDQAFgCAFgDIACAGQgGAFgGABQgGACgHAAQgKAAgIgEg");
  this.shape_40.setTransform(146.375, 372.4);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAOAUIgPgUIAPgTIAJAAIgRATIARAUgAgFAUIgRgUIARgTIAHAAIgQATIAQAUg");
  this.shape_41.setTransform(140.425, 373.35);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_42.setTransform(132.775, 373.45);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_43.setTransform(126.725, 373.45);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AASAgIAAgOIgqAAIAAgxIAHAAIAAArIAbAAIAAgrIAHAAIAAArIAIAAIAAAUg");
  this.shape_44.setTransform(121.075, 374.175);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_45.setTransform(114.975, 373.45);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_46.setTransform(109.475, 373.45);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_47.setTransform(103.575, 373.45);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#FFFFFF").s().p("AAVAZIAAgnIgSAgIgFAAIgSggIAAAnIgHAAIAAgxIAHAAIAUAiIAUgiIAIAAIAAAxg");
  this.shape_48.setTransform(97, 373.45);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_49.setTransform(90.475, 373.45);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_50.setTransform(84.625, 373.45);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_51.setTransform(77.225, 373.45);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#FFFFFF").s().p("AgSAZIAAgxIAHAAIAAAVIAMAAQAJAAAEADQAFADAAAHQAAAFgCADQgCAEgEABQgEACgFAAgAgLATIAMAAQAGAAADgCQACgDAAgEQAAgFgDgCQgDgCgGAAIgLAAg");
  this.shape_52.setTransform(70.025, 373.45);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_53.setTransform(64.075, 373.475);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgGAGgDQAFgDAHAAQAGAAAGADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAEAGQAGAEAIAAQAFAAAFgBQAFgCADgEIACAHQgDADgGACQgFACgHAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgEAAQgEAAgDACQgEACgDADQgCAEAAAEIAgAAIAAAAg");
  this.shape_54.setTransform(58.95, 373.45);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_55.setTransform(54.125, 373.45);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_56.setTransform(49.025, 373.45);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgHAAIAAgUIAEAAQADAAACgDQACgEABgGIAEgeIAfAAIAAArIAHAAIAAAUgAgIAAIgCAHQgBADgBACIAZAAIAAglIgSAAg");
  this.shape_57.setTransform(43.1, 374.175);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQAEgGAFgDQAFgDAHAAQAGAAAGADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAGAGQAEAEAIAAQAGAAAFgBQAEgCADgEIACAHQgDADgFACQgGACgGAAQgHAAgGgEgAARgEQgBgEgCgEQgCgDgDgCQgEgCgEAAQgDAAgEACQgEACgDADQgCAEAAAEIAgAAIAAAAg");
  this.shape_58.setTransform(37.65, 373.45);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#FFFFFF").s().p("AgJAlQgEgCgEgEQgEgEgCgIQgCgHAAgMQAAgKACgIQADgHAGgEQAGgFAJgBIAEgBIADAAIAGgBIAEAAIADgBIABAHIgHABIgGAAIgDABIgDAAQgGABgFACQgEADgDAGQgCAFgBAKQADgEAGgDQAEgDAHAAQAHAAAFADQAGADADAGQADAFAAAIQAAAHgDAGQgDAGgGADQgGAEgIAAIgJgCgAgHgEQgDACgEACIgEAFQAAALADAGQADAGAEACQAEACAEAAQAGAAAEgCQAEgDADgEQABgFAAgGQAAgFgBgFQgDgDgEgCQgEgDgFAAQgEAAgEACg");
  this.shape_59.setTransform(32, 372.175);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_60.setTransform(26.025, 373.45);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#FFFFFF").s().p("AATAjIAAg/IgmAAIAAA/IgHAAIAAhGIA1AAIAABGg");
  this.shape_61.setTransform(19.5, 372.4);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_62.setTransform(14.075, 370.425);
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
 }).prototype = getMCSymbolPrototype(lib.snoska3, new cjs.Rectangle(10.1, 362.3, 229.8, 29.5), null);
 (lib.snoska2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape.setTransform(43.225, 373.475);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_1.setTransform(37.775, 372.325);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_2.setTransform(31.925, 373.45);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_3.setTransform(27.225, 373.45);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgIAAgLQAAgKAFgIQAFgIAIgFQAIgEAKgBQAHAAAGACQAGADAFADIgDAIQgEgEgFgCQgGgCgGgBQgHAAgHAEQgGAEgEAHQgEAHAAAHQAAAIAEAHQAEAHAGADQAHAEAHABQAHAAAGgDQAFgCAFgDIACAGQgGAFgGABQgGACgHAAQgKAAgIgEg");
  this.shape_4.setTransform(21.725, 372.4);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_5.setTransform(14.075, 370.425);
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
 }).prototype = getMCSymbolPrototype(lib.snoska2, new cjs.Rectangle(10.1, 362.3, 229.8, 18.30000000000001), null);
 (lib.snoska = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgBAUIAQgUIgQgTIAHAAIARATIgRAUgAgWAUIARgUIgRgTIAIAAIAQATIgQAUg");
  this.shape.setTransform(92.525, 384.6);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AALAZIgVgYIgCAAIAAAYIgHAAIAAgxIAHAAIAAAVIADAAIATgVIAJAAIgXAYIAYAZg");
  this.shape_1.setTransform(88.225, 384.7);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_2.setTransform(82.575, 384.7);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_3.setTransform(76.875, 384.7);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgWAjIAAhGIAlAAIAAAHIgeAAIAAAYIAPAAQAMAAAFAEQAGAFAAAKQAAAGgDAEQgCAFgFADQgFADgIgBgAgPAdIAPAAQAHAAAEgEQAEgEABgGQgBgHgEgDQgEgDgHgBIgPAAg");
  this.shape_4.setTransform(71.7, 383.65);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_5.setTransform(63.475, 384.7);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_6.setTransform(58.775, 384.7);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_7.setTransform(53.725, 384.7);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_8.setTransform(47.775, 383.575);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_9.setTransform(41.775, 384.7);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AgCAjIAAg/IgVAAIAAgHIAvAAIAAAHIgUAAIAAA/g");
  this.shape_10.setTransform(36.4, 383.65);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAOAUIgPgUIAPgTIAJAAIgRATIARAUgAgFAUIgRgUIARgTIAHAAIgQATIAQAUg");
  this.shape_11.setTransform(31.575, 384.6);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgSAgQgIgFgFgIQgFgIAAgLQAAgKAFgIQAFgIAIgFQAIgEAKgBQALAAAIAGQAJAEAEAIQAFAIAAAKQAAALgFAIQgEAIgJAFQgIAEgLAAQgKAAgIgEgAgOgZQgGAEgFAHQgDAHgBAHQABAIADAHQAFAHAGADQAHAEAHABQAIgBAHgEQAHgDADgHQAEgHABgIQgBgHgEgHQgDgHgHgEQgHgEgIAAQgHAAgHAEg");
  this.shape_12.setTransform(22.75, 383.65);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAXAjIgIgWIgdAAIgJAWIgHAAIAbhGIAHAAIAbBGgAAMAGIgMggIgMAgIAYAAg");
  this.shape_13.setTransform(15.425, 383.65);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AANAZIAAgVIgMAAIgNAVIgHAAIAOgWQgFgBgDgCQgDgEAAgFQAAgFACgEQACgDAEgBQAEgCAEAAIAUAAIAAAxgAgGgQQgDACAAAFQAAAEADACQACADAFAAIAMAAIAAgTIgMAAQgFAAgCADg");
  this.shape_14.setTransform(198.125, 373.425);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgEgHQgCgFAAgIQAAgHACgGQAEgGAFgDQAGgDAHAAQAFAAAFABIAHAEIgDAGQgCgCgEgBQgEgCgEABQgEgBgFADQgEACgCAFQgDAEAAAFQAAAGADAEQACAEAEADQAEADAEgBQAFABAEgCIAIgEIABAGQgDADgEACQgFABgGAAQgGAAgGgEg");
  this.shape_15.setTransform(193.55, 373.45);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_16.setTransform(188.975, 373.45);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQAEgGAFgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAFAGQAFAEAHAAQAGAAAFgBQAEgCADgEIADAHQgEADgFACQgGACgGAAQgHAAgGgEgAARgEQgBgEgCgEQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDAEgBAEIAhAAIAAAAg");
  this.shape_17.setTransform(184.2, 373.45);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AANAZIAAgVIgMAAIgNAVIgHAAIAOgWQgFgBgDgCQgDgEAAgFQAAgFACgEQACgDAEgBQAEgCAEAAIAUAAIAAAxgAgGgQQgDACAAAFQAAAEADACQACADAFAAIAMAAIAAgTIgMAAQgFAAgCADg");
  this.shape_18.setTransform(178.775, 373.425);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_19.setTransform(173.325, 373.475);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_20.setTransform(168.625, 373.45);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_21.setTransform(163.775, 373.45);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgEgHQgDgFAAgIQAAgHADgGQAEgGAFgDQAHgDAGAAQAFAAAEABIAIAEIgCAGQgDgCgEgBQgDgCgFABQgFgBgDADQgFACgCAFQgDAEABAFQgBAGADAEQACAEAEADQAEADAFgBQAEABAFgCIAHgEIACAGQgEADgFACQgEABgGAAQgGAAgGgEg");
  this.shape_22.setTransform(159.3, 373.45);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQAEgGAFgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAEAGQAFAEAJAAQAFAAAFgBQAFgCADgEIACAHQgDADgGACQgGACgGAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDAEgBAEIAhAAIAAAAg");
  this.shape_23.setTransform(154.15, 373.45);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAgAgIAAgOIhGAAIAAgxIAHAAIAAArIAYAAIAAgrIAHAAIAAArIAYAAIAAgrIAHAAIAAArIAIAAIAAAUg");
  this.shape_24.setTransform(147.475, 374.175);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgTAkIgDgBIABgGIACAAIABAAQAEAAAEgCQADgCACgGIAEgHIgWgvIAHAAIARAmIAPgmIAIAAIgYA4QgCAIgEADQgEAEgHAAIgCAAg");
  this.shape_25.setTransform(140.55, 374.525);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgEgHQgDgFAAgIQAAgHADgGQAEgGAFgDQAHgDAGAAQAFAAAEABIAIAEIgCAGQgDgCgEgBQgDgCgFABQgFgBgDADQgFACgCAFQgDAEABAFQgBAGADAEQACAEAEADQAEADAFgBQAEABAFgCIAHgEIACAGQgEADgFACQgEABgGAAQgGAAgGgEg");
  this.shape_26.setTransform(135.9, 373.45);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_27.setTransform(130.475, 373.45);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgGAGgDQAFgDAHAAQAGAAAGADQAFADADAGQADAGAAAHIAAAAIgoAAQAAAJAFAGQAGAEAHAAQAGAAAFgBQAFgCADgEIABAHQgDADgFACQgGACgGAAQgHAAgGgEgAARgEQgBgEgCgEQgCgDgDgCQgEgCgEAAQgEAAgDACQgEACgDADQgCAEAAAEIAgAAIAAAAg");
  this.shape_28.setTransform(122.6, 373.45);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_29.setTransform(116.875, 373.45);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgbAAIAAAXIgHAAIAAgxIAHAAIAAAWIAbAAIAAgWIAHAAIAAAxg");
  this.shape_30.setTransform(110.925, 373.45);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_31.setTransform(105.225, 373.45);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIASAAQAIAAAEADQAFAEAAAFQAAAEgDADQgCAEgEABQAGAAADACQADADABAGQgBAEgCAEQgCADgEACQgEABgFAAgAgMATIANAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgCgGgBIgMAAgAgMgDIALAAIAGgBIADgDIABgEQAAgEgDgCQgDgBgEAAIgLAAg");
  this.shape_32.setTransform(100.375, 373.45);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#FFFFFF").s().p("AgNAWQgGgCgDgHQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHAAQAIAAAGADQAGADADAGQADAGAAAHQAAAIgDAFQgDAHgGACQgGAEgIAAQgHAAgGgEgAgJgQQgEACgDAFQgCAEAAAFQAAAFACAFQADAEAEADQAEADAFgBQAGAAAEgCQAEgDADgEQACgFAAgFQAAgFgCgEQgDgFgEgCQgEgDgGABQgFgBgEADg");
  this.shape_33.setTransform(94.675, 373.45);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_34.setTransform(89.625, 373.45);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#FFFFFF").s().p("AAQAZIAAgoIgfAoIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxg");
  this.shape_35.setTransform(84.525, 373.45);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#FFFFFF").s().p("AAVAgIAAgOIgpAAIAAAOIgGAAIAAgUIACAAQAEAAACgDQACgEABgGIAEgeIAeAAIAAArIAJAAIAAAUgAgIAAIgBAHQgCADgCACIAZAAIAAglIgRAAg");
  this.shape_36.setTransform(78.6, 374.175);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgDgGQgDgGAAgHQAAgGADgHQAEgGAFgDQAGgDAFAAQAIAAAFADQAGADACAGQADAGAAAHIAAAAIgoAAQABAJAEAGQAFAEAJAAQAFAAAFgBQAFgCADgEIACAHQgDADgGACQgGACgGAAQgHAAgGgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgDACQgEACgCADQgDAEgBAEIAhAAIAAAAg");
  this.shape_37.setTransform(73.15, 373.45);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAHAAIAAAKQADgFAFgEQAFgCAFAAQAHAAAGADQAFADADAGQADAGAAAIQAAAIgDAEQgDAGgGADQgFAEgHAAIgHgBIgGgEIgFgGIAAAfgAgJgaQgEACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAFgBQAFAAAEgCQAEgDADgEQACgEAAgFQAAgFgCgFQgCgEgEgDQgEgDgGABQgEgBgFADg");
  this.shape_38.setTransform(67.575, 374.45);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AARAjIgcggIgHAAIAAAgIgHAAIAAhGIAHAAIAAAhIAGAAIAaghIAJAAIgcAjIAfAjg");
  this.shape_39.setTransform(61.775, 372.4);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_40.setTransform(54.175, 370.425);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_41.setTransform(50.525, 370.425);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AgWAZIgCgBIABgGIACAAIACABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCABgFIAEgiIAhAAIAAAxIgHAAIAAgrIgUAAIgEAeQAAAHgDADQgDADgGAAIgEAAg");
  this.shape_42.setTransform(43.225, 373.475);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AAQAkIAAgnIgfAnIgHAAIAAgxIAHAAIAAAnIAfgnIAHAAIAAAxgAgKgZQgEgEAAgGIAFAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEADgHAAQgGAAgEgDg");
  this.shape_43.setTransform(37.775, 372.325);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AgQAWQgEgEAAgHQAAgGADgDQAEgDAHgBQAHgCANAAIAAgBQAAgHgDgDQgEgEgHAAIgGABIgFACIgEADIgCgGIAIgFQAFgBAFAAQAKAAAFAFQAFAEAAALIAAAeIgHAAIAAgJQgCAFgFACQgFADgFAAQgJAAgEgEgAgCABQgGACgDACQgCACAAAEQAAAEADADQADACAFAAQADABAEgCIAHgFQACgEAAgFIAAgFIgQABg");
  this.shape_44.setTransform(31.925, 373.45);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgQAAIAAgGIAnAAIAAAGIgRAAIAAArg");
  this.shape_45.setTransform(27.225, 373.45);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgMAgQgIgFgFgIQgFgIAAgLQAAgKAFgIQAFgIAIgFQAIgEAKgBQAHAAAGACQAGADAFADIgDAIQgEgEgFgCQgGgCgGgBQgHAAgHAEQgGAEgEAHQgEAHAAAHQAAAIAEAHQAEAHAGADQAHAEAHABQAHAAAGgDQAFgCAFgDIACAGQgGAFgGABQgGACgHAAQgKAAgIgEg");
  this.shape_46.setTransform(21.725, 372.4);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AAAAFIgGALIgFgEIAIgKIgNgCIADgHIAMAFIgBgNIAGAAIgCANIANgFIACAHIgNACIAJAKIgGAEg");
  this.shape_47.setTransform(14.075, 370.425);
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
 }).prototype = getMCSymbolPrototype(lib.snoska, new cjs.Rectangle(10.1, 362.3, 229.8, 29.5), null);
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
 p.nominalBounds = new cjs.Rectangle(0, 0, 215, 390);
 (lib.legal_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_01_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(13, 50, 0.5, 0.5);
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
   y: -280
  }, 0).to({
   alpha: 1
  }, 5).wait(120).to({
   alpha: 0
  }, 5).to({
   y: -610
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(122.25, 215, 2.185, 3.3);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_01, new cjs.Rectangle(11, 48, 218.5, 339.7), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(32, -20, 0.67, 0.67);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(32, -20, 319.6, 176.9), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
  this.shape.setTransform(120, 200);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 240, 400), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(40, 0, 200.1, 208.1), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(40, 0, 200.1, 208.1), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(40, 0, 200, 208), null);
 (lib.bg_01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#282830").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
  this.shape.setTransform(120, 200);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0, 0, 240, 400), null);
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
   regX: 161,
   regY: 100.7,
   x: 178.2,
   y: 100.7,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 175.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 173.3,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 171.2,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 169.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 167.5,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 166,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 164.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 163.55,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 162.6,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 161.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 161.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 161.1,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(94, 70, 154.1, 61.400000000000006);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AtPGzIAAjpIafAAIAADpg");
  mask.setTransform(84.753, 43.4873);
  this.instance = new lib.t03();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 88.2,
   regY: 99.6,
   x: 71,
   y: 99.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 73.55,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 75.9,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 78,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 79.95,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81.7,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 83.2,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 84.55,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 85.65,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 86.6,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 87.3,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 87.8,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 88.1,
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
  mask_1.graphics.p("AtPInIAAjpIafAAIAADpg");
  mask_1.setTransform(84.753, 55.1373);
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
   regX: 88.2,
   regY: 99.6,
   x: 71,
   y: 99.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 73.55,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 75.9,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 78,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 79.95,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81.7,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 83.2,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 84.55,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 85.65,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 86.6,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 87.3,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 87.8,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 88.1,
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
  mask_2.graphics.p("AtPKcIAAjpIafAAIAADpg");
  mask_2.setTransform(84.753, 66.7873);
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
   regX: 88.2,
   regY: 99.6,
   x: 71,
   y: 99.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 73.55,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 75.9,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 78,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 79.95,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81.7,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 83.2,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 84.55,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 85.65,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 86.6,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 87.3,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 87.8,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 88.1,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(11));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 63.7, 169.5, 69.89999999999999);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AtPHCIAAjaIafAAIAADag");
  mask.setTransform(84.753, 45.0205);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 88.9,
   regY: 99.8,
   x: 71.7,
   y: 99.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 74.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 76.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 78.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 80.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 82.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 83.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 85.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 86.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 87.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 88,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 88.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 88.8,
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
  mask_1.graphics.p("AtPIvIAAjaIafAAIAADag");
  mask_1.setTransform(84.753, 55.9205);
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
   regX: 88.9,
   regY: 99.8,
   x: 71.7,
   y: 99.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 74.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 76.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 78.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 80.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 82.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 83.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 85.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 86.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 87.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 88,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 88.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 88.8,
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
  mask_2.graphics.p("AtPKcIAAjaIafAAIAADag");
  mask_2.setTransform(84.753, 66.7955);
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
   regX: 88.9,
   regY: 99.8,
   x: 71.7,
   y: 99.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 74.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 76.6,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 78.7,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 80.65,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 82.4,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 83.9,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 85.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 86.35,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 87.3,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 88,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 88.5,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 88.8,
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
  mask_3.graphics.p("AG/KMIAAowIMhAAIAAIwg");
  mask_3.setTransform(124.7521, 65.2106);
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
   regX: 200.3,
   regY: 110.8,
   x: 183.1,
   y: 110.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 185.65,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 188,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 190.1,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 192.05,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 193.8,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 195.3,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 196.65,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 197.75,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 198.7,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 199.4,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 199.9,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 200.2,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 68.3, 249.5, 65.3);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvQElIAAkNIehAAIAAENg");
  mask.setTransform(97.6929, 29.3081);
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
   regX: 104.5,
   regY: 44.6,
   x: 87.3,
   y: 44.6,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 89.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 92.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 94.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 96.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 98,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 99.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 100.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 101.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 102.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 103.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 104.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 104.4,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 144, 58.2);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvQCgIAAk1IehAAIAAE1g");
  mask.setTransform(97.6929, 16.0113);
  this.instance = new lib.t01();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 52.6,
   regY: 31.8,
   x: 35.4,
   y: 31.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 37.95,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 40.3,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 42.4,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 44.35,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 46.1,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 47.6,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 48.95,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 50.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 51,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 51.7,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 52.2,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 52.5,
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
  mask_1.graphics.p("AvQElIAAkNIehAAIAAENg");
  mask_1.setTransform(97.6929, 29.3081);
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
   regX: 52.6,
   regY: 31.8,
   x: 35.4,
   y: 31.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 37.95,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 40.3,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 42.4,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 44.35,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 46.1,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 47.6,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 48.95,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 50.05,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 51,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 51.7,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 52.2,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 52.5,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 2, 192.5, 56);
 (lib.t04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF2C1B").s().p("AgLCjIAAgaIgdARIgMgUIApgYIAAgjIgwAbIgCg2IgcAPIgCAwIgXgBIABghIgXAMIgMgVIAXgNIgdgRIAMgUIApAYIAcgPIgrgZIAsgcIgZgPIgqAYIgLgUIAdgRIgagPIAMgVIAZAPIAAgiIAYAAIABAvIAbAQIAAg2IAvAZIAAgfIgpgXIAMgVIAdARIAAgdIAXAAIAAAdIAdgRIAMAVIgpAXIAAAgIAvgaIACA1IAagPIABgvIAYABIAAAhIAagOIALAVIgaAOIAdASIgMAUIgpgZIgZAPIAuAaIgtAcIAbAQIApgYIAMAVIgdARIAWANIgLAUIgXgMIAAAiIgXAAIgBgwIgegRIAAA3IgwgYIAAAfIApAYIgMAUIgdgRIAAAagAAMAzIAaANIABgcIgbgPgAgmAjIABAcIAagMIAAgfgAAYAAIAaAPIAZgPIgYgOgAhHABIAVANIAagOIgYgMgAglgiIAaAPIAAgdIgZgOgAAMgxIAAAeIAagPIgBgcg");
  this.shape.setTransform(41.55, 99.6);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AhwDxIAJgTQAyAXA1AAQBBAAA5ghIALASQg9AkhIAAQg8AAg0gZgAjfCPQgkg3gFhBIAVgCQAFA8AgAzQAgAyA0AeIgKATQg4ghgjg3gACMDJQAxgiAcg1QAcg2AAg8IAAAAIAVAAIAAAAQAABBgfA6QgeA6g1AlgAkJAAQAAhAAeg6QAeg5A2gmIAMARQgxAjgcA1QgcA1AAA7gADOiCQgggzg0geIAKgSQA5AgAjA3QAjA3AGBBIgVACQgFg8ghgygAiEjlQA9gkBHAAQA7AAA1AZIgIATQgygXg2AAQhBAAg5Ahg");
  this.shape_1.setTransform(41.575, 99.575);
  this.instance = new lib.ClipGroup();
  this.instance.parent = this;
  this.instance.setTransform(41.55, 99.55, 1, 1, 0, 0, 0, 22.3, 22.8);
  this.instance_1 = new lib.ClipGroup_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(41.55, 99.55, 1, 1, 0, 0, 0, 22.3, 22.8);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#D6D6D6").s().p("AiWCYQg/hAAAhYQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/BAQg+A+hZAAQhYAAg+g+g");
  this.shape_2.setTransform(41.55, 99.6);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgHA1IAAhcIgdAAIAAgNIBJAAIAAANIgdAAIAABcg");
  this.shape_3.setTransform(166.675, 116.175);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AghA1IAAhpIAgAAQALAAAIAEQAIAEAEAIQAEAHAAAKQAAAJgEAIQgEAHgIAFQgIAEgLABIgRAAIAAAmgAgSACIAPAAQAFAAAFgCQAFgCADgFQADgFAAgHQAAgHgDgFQgDgEgFgCQgFgCgFAAIgPAAg");
  this.shape_4.setTransform(158.175, 116.175);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgcAwQgMgHgHgNQgIgMAAgQQAAgPAIgMQAHgNAMgHQANgHAPAAQAQAAANAHQAMAHAHANQAIAMAAAPQAAAQgIAMQgHANgMAHQgNAHgQAAQgPAAgNgHgAgUgiQgIAFgFAJQgGAJAAALQAAAMAGAJQAFAJAIAFQAJAFALAAQAMAAAJgFQAJgFAEgJQAGgJAAgMQAAgLgGgJQgEgJgJgFQgJgFgMAAQgLAAgJAFg");
  this.shape_5.setTransform(146.35, 116.175);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgGA3IAAgLQgPgBgMgGQgLgFgGgKQgGgJgBgNQABgMAGgJQAGgKALgFQAMgGAPgBIAAgLIAOAAIAAALQAPABALAGQALAFAHAKQAGAJAAAMQAAANgGAJQgHAKgLAFQgLAGgPABIAAALgAAIAfQAQgBAJgJQAKgIAAgNQAAgMgKgIQgJgJgQgBgAgggUQgJAIAAAMQAAANAJAIQAKAJAQABIAAg9QgQABgKAJg");
  this.shape_6.setTransform(132.975, 116.175);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAlA1IAAhUIggAwIgKAAIgegwIAABUIgQAAIAAhpIATAAIAgA0IAhg0IATAAIAABpg");
  this.shape_7.setTransform(119.45, 116.175);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AgcAwQgMgHgHgNQgHgMgBgQQABgPAHgMQAHgNAMgHQANgHAPAAQAQAAAMAHQANAHAIANQAGAMAAAPQAAAQgGAMQgIANgNAHQgMAHgQAAQgPAAgNgHgAgTgiQgJAFgGAJQgEAJAAALQAAAMAEAJQAGAJAJAFQAJAFAKAAQAMAAAIgFQAKgFAEgJQAGgJAAgMQAAgLgGgJQgEgJgKgFQgIgFgMAAQgKAAgJAFg");
  this.shape_8.setTransform(105.9, 116.175);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAXA1IgngvIgKAAIAAAvIgPAAIAAhpIAPAAIAAAvIAJAAIAlgvIARAAIgoAzIAtA2g");
  this.shape_9.setTransform(94.75, 116.175);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAdBDIAAhSIg5BSIgPAAIAAhpIAPAAIAABTIA5hTIAPAAIAABpgAgRg0QgGgFAAgKIAKAAQABAFADADQAEACAFAAQAGAAAEgDQADgBABgGIAKAAQAAAKgHAFQgGAEgLAAQgLAAgGgEg");
  this.shape_10.setTransform(155.125, 100.65);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AAdA1IAAhSIg5BSIgPAAIAAhpIAPAAIAABSIA5hSIAPAAIAABpg");
  this.shape_11.setTransform(142.775, 102.075);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AAbA1IAAguIg2AAIAAAuIgPAAIAAhpIAPAAIAAAuIA2AAIAAguIAQAAIAABpg");
  this.shape_12.setTransform(130.575, 102.075);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAlA1IAAhUIggAwIgKAAIgegwIAABUIgQAAIAAhpIATAAIAgA0IAhg0IATAAIAABpg");
  this.shape_13.setTransform(117.55, 102.075);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAdA1IAAhSIg5BSIgPAAIAAhpIAPAAIAABSIA5hSIAPAAIAABpg");
  this.shape_14.setTransform(104.425, 102.075);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgXAzQgJgEgGgGIAIgMQAFAFAHAEQAHADALAAQAKAAAHgFQAGgFAAgJQAAgJgIgEQgJgFgRAAIAAgLQAMAAAGgDQAHgDADgEQACgEAAgEQAAgHgFgEQgFgEgJAAQgIAAgHADQgGADgFAEIgHgMQAGgFAJgDQAIgEALAAQAPAAAJAHQAJAHABANQgBAKgFAGQgGAHgKACQAMACAHAFQAGAHABALQAAAKgFAHQgFAHgIAEQgJAEgMAAQgNAAgKgEg");
  this.shape_15.setTransform(93.375, 102.075);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AApBLIgPgrIg0AAIgPArIgdAAIA4iVIAdAAIA4CVgAASAKIgSg0IgSA0IAkAAg");
  this.shape_16.setTransform(163.475, 81.8);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AgNBLIAAh8IgoAAIAAgZIBrAAIAAAZIgnAAIAAB8g");
  this.shape_17.setTransform(151.125, 81.8);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AgnBDQgSgJgKgRQgKgSAAgXQAAgWAKgRQAKgRASgKQARgJAWAAQAXAAARAJQASAKAKARQAKARAAAWQAAAXgKARQgKARgSAKQgRAKgXAAQgWAAgRgKgAgYgqQgLAGgGALQgGAMAAANQAAAPAGALQAGALALAGQALAHANAAQAOAAALgHQALgGAGgLQAHgLAAgPQAAgNgHgMQgGgLgLgGQgLgHgOAAQgNAAgLAHg");
  this.shape_18.setTransform(137.325, 81.8);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgNBLIAAg7IgzhaIAfAAIAiBAIAjhAIAcAAIgyBaIAAA7g");
  this.shape_19.setTransform(123, 81.8);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgnBDQgSgJgKgRQgKgSAAgXQAAgWAKgRQAKgRASgKQARgJAWAAQAXAAARAJQASAKAKARQAKARAAAWQAAAXgKARQgKARgSAKQgRAKgXAAQgWAAgRgKgAgYgqQgLAGgGALQgGAMAAANQAAAPAGALQAGALALAGQALAHANAAQAOAAALgHQALgGAGgLQAHgLAAgPQAAgNgHgMQgGgLgLgGQgLgHgOAAQgNAAgLAHg");
  this.shape_20.setTransform(108.625, 81.8);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AgNBLIAAh8IgoAAIAAgZIBrAAIAAAZIgnAAIAAB8g");
  this.shape_21.setTransform(94.875, 81.8);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("AAAj8IAAH5");
  this.shape_22.setTransform(78.35, 99.275);
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
 }).prototype = getMCSymbolPrototype(lib.t04, new cjs.Rectangle(15, 62.8, 162.4, 64.60000000000001), null);
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
   regX: 92.8,
   regY: 99.6,
   x: 75.6,
   y: 99.6,
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
 p.nominalBounds = new cjs.Rectangle(-5, 62.8, 182.4, 64.60000000000001);
 (lib.content = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1: 69,
   cvr_frame2_1: 149,
   cvr_frame3_2: 273,
   "cvr_frame#4_1": 345,
   cvr_stay: 355
  });
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(187, 13);
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
  this.instance_13 = new lib.car_1();
  this.instance_13.parent = this;
  this.instance_13.setTransform(87.2, 281, 1, 1, 0, 0, 0, 120.2, 75);
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(104).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(169).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(76));
  this.instance_14 = new lib.red_line();
  this.instance_14.parent = this;
  this.instance_14.setTransform(-101, 350.5, 1, 1, 0, 0, 180, 100, 1.5);
  this.instance_14._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({
   _off: false
  }, 0).to({
   x: -31
  }, 30, cjs.Ease.get(1)).wait(321));
  this.instance_15 = new lib.red_line();
  this.instance_15.parent = this;
  this.instance_15.setTransform(340, 153.5, 1, 1, 0, 0, 0, 100, 1.5);
  this.instance_15._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({
   _off: false
  }, 0).to({
   x: 140
  }, 30, cjs.Ease.get(1)).wait(321));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("AhKcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_1 = new cjs.Graphics().p("AhNcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_2 = new cjs.Graphics().p("AhUcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_3 = new cjs.Graphics().p("AhhcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_4 = new cjs.Graphics().p("AhycSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_5 = new cjs.Graphics().p("AiJcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_6 = new cjs.Graphics().p("AilcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_7 = new cjs.Graphics().p("AjGcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_8 = new cjs.Graphics().p("AjrcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_9 = new cjs.Graphics().p("AkWcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_10 = new cjs.Graphics().p("AlGcTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_11 = new cjs.Graphics().p("Al7cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_12 = new cjs.Graphics().p("Am1cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_13 = new cjs.Graphics().p("An0cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_14 = new cjs.Graphics().p("Ao4cSMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_15 = new cjs.Graphics().p("Ap9cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_16 = new cjs.Graphics().p("Aq8cSMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_17 = new cjs.Graphics().p("Ar3cSMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_18 = new cjs.Graphics().p("AsucSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_19 = new cjs.Graphics().p("AtfcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_20 = new cjs.Graphics().p("AuMcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_21 = new cjs.Graphics().p("Au0cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_22 = new cjs.Graphics().p("AvXcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_23 = new cjs.Graphics().p("Av2cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_24 = new cjs.Graphics().p("AwQcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_25 = new cjs.Graphics().p("AwlcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_26 = new cjs.Graphics().p("Aw2cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_27 = new cjs.Graphics().p("AxCcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_28 = new cjs.Graphics().p("AxJcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_29 = new cjs.Graphics().p("AxLcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_119 = new cjs.Graphics().p("AhKcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_120 = new cjs.Graphics().p("AhNcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_121 = new cjs.Graphics().p("AhUcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_122 = new cjs.Graphics().p("AhhcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_123 = new cjs.Graphics().p("AhycSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_124 = new cjs.Graphics().p("AiJcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_125 = new cjs.Graphics().p("AilcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_126 = new cjs.Graphics().p("AjGcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_127 = new cjs.Graphics().p("AjrcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_128 = new cjs.Graphics().p("AkWcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_129 = new cjs.Graphics().p("AlGcTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_130 = new cjs.Graphics().p("Al7cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_131 = new cjs.Graphics().p("Am1cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_132 = new cjs.Graphics().p("An0cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_133 = new cjs.Graphics().p("Ao4cSMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_134 = new cjs.Graphics().p("Ap5cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_135 = new cjs.Graphics().p("Aq1cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_136 = new cjs.Graphics().p("ArtcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_137 = new cjs.Graphics().p("AshcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_138 = new cjs.Graphics().p("AtQcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_139 = new cjs.Graphics().p("At8cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_140 = new cjs.Graphics().p("AujcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_141 = new cjs.Graphics().p("AvGcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_142 = new cjs.Graphics().p("AvlcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_143 = new cjs.Graphics().p("AwAcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_144 = new cjs.Graphics().p("AwXcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_145 = new cjs.Graphics().p("AwqcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_146 = new cjs.Graphics().p("Aw4cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_147 = new cjs.Graphics().p("AxDcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_148 = new cjs.Graphics().p("AxJcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_149 = new cjs.Graphics().p("AxLcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_209 = new cjs.Graphics().p("AhKcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_210 = new cjs.Graphics().p("AhNcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_211 = new cjs.Graphics().p("AhUcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_212 = new cjs.Graphics().p("AhhcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_213 = new cjs.Graphics().p("AhycSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_214 = new cjs.Graphics().p("AiJcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_215 = new cjs.Graphics().p("AilcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_216 = new cjs.Graphics().p("AjGcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_217 = new cjs.Graphics().p("AjrcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_218 = new cjs.Graphics().p("AkWcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_219 = new cjs.Graphics().p("AlGcTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_220 = new cjs.Graphics().p("Al7cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_221 = new cjs.Graphics().p("Am1cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_222 = new cjs.Graphics().p("An0cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_223 = new cjs.Graphics().p("Ao4cSMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_224 = new cjs.Graphics().p("Ap5cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_225 = new cjs.Graphics().p("Aq1cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_226 = new cjs.Graphics().p("ArtcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_227 = new cjs.Graphics().p("AshcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_228 = new cjs.Graphics().p("AtQcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_229 = new cjs.Graphics().p("At8cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_230 = new cjs.Graphics().p("AujcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_231 = new cjs.Graphics().p("AvGcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_232 = new cjs.Graphics().p("AvlcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_233 = new cjs.Graphics().p("AwAcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_234 = new cjs.Graphics().p("AwXcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_235 = new cjs.Graphics().p("AwqcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_236 = new cjs.Graphics().p("Aw4cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_237 = new cjs.Graphics().p("AxDcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_238 = new cjs.Graphics().p("AxJcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_239 = new cjs.Graphics().p("AxLcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_289 = new cjs.Graphics().p("AhKcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_290 = new cjs.Graphics().p("AhNcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_291 = new cjs.Graphics().p("AhUcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_292 = new cjs.Graphics().p("AhhcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_293 = new cjs.Graphics().p("AhycSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_294 = new cjs.Graphics().p("AiJcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_295 = new cjs.Graphics().p("AilcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_296 = new cjs.Graphics().p("AjGcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_297 = new cjs.Graphics().p("AjrcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_298 = new cjs.Graphics().p("AkWcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_299 = new cjs.Graphics().p("AlGcTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_300 = new cjs.Graphics().p("Al7cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_301 = new cjs.Graphics().p("Am1cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_302 = new cjs.Graphics().p("An0cTMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_303 = new cjs.Graphics().p("Ao4cSMAAAggVMAomAAAMAAAAgVg");
  var mask_graphics_304 = new cjs.Graphics().p("Ap5cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_305 = new cjs.Graphics().p("Aq1cSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_306 = new cjs.Graphics().p("ArtcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_307 = new cjs.Graphics().p("AshcSMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_308 = new cjs.Graphics().p("AtQcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_309 = new cjs.Graphics().p("At8cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_310 = new cjs.Graphics().p("AujcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_311 = new cjs.Graphics().p("AvGcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_312 = new cjs.Graphics().p("AvlcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_313 = new cjs.Graphics().p("AwAcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_314 = new cjs.Graphics().p("AwXcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_315 = new cjs.Graphics().p("AwqcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_316 = new cjs.Graphics().p("Aw4cRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_317 = new cjs.Graphics().p("AxDcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_318 = new cjs.Graphics().p("AxJcRMAAAggVMAonAAAMAAAAgVg");
  var mask_graphics_319 = new cjs.Graphics().p("AxLcSMAAAggVMAonAAAMAAAAgVg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 252.4988,
   y: 181.0038
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 252.2465,
   y: 181.0043
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 251.4895,
   y: 181.0058
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 250.2279,
   y: 181.0083
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 248.4617,
   y: 181.0118
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 246.1908,
   y: 181.0163
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 243.4153,
   y: 181.0218
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 240.1351,
   y: 181.0282
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 236.3503,
   y: 181.0357
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 232.0609,
   y: 181.0442
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 227.2669,
   y: 181.0537
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 221.9681,
   y: 181.0642
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 216.1648,
   y: 181.0756
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 209.8568,
   y: 181.0881
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 203.0442,
   y: 180.9981
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 196.2072,
   y: 180.9855
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 189.8418,
   y: 180.9737
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 183.9478,
   y: 180.9629
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 178.5254,
   y: 180.9529
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 173.5745,
   y: 180.9438
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 169.0951,
   y: 180.9355
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 165.0873,
   y: 180.9281
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 161.5509,
   y: 180.9216
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 158.486,
   y: 180.9159
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 155.8927,
   y: 180.9112
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 153.7709,
   y: 180.9072
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 152.1206,
   y: 180.9042
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 150.9418,
   y: 180.902
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 150.2345,
   y: 180.9007
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 149.9988,
   y: 181.0038
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 252.4988,
   y: 181.0038
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 252.2465,
   y: 181.0043
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 251.4895,
   y: 181.0058
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 250.2279,
   y: 181.0083
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 248.4617,
   y: 181.0118
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 246.1908,
   y: 181.0163
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 243.4153,
   y: 181.0218
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 240.1351,
   y: 181.0282
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 236.3503,
   y: 181.0357
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 232.0609,
   y: 181.0442
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 227.2669,
   y: 181.0537
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 221.9681,
   y: 181.0642
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 216.1648,
   y: 181.0756
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 209.8568,
   y: 181.0881
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 203.0442,
   y: 180.9981
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 196.6207,
   y: 180.9862
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 190.6117,
   y: 180.9752
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 185.017,
   y: 180.9648
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 179.8368,
   y: 180.9553
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 175.071,
   y: 180.9465
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 170.7196,
   y: 180.9385
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 166.7827,
   y: 180.9312
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 163.2601,
   y: 180.9247
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 160.152,
   y: 180.919
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 157.4583,
   y: 180.914
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 155.179,
   y: 180.9098
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 153.3141,
   y: 180.9064
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 151.8637,
   y: 180.9037
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 150.8276,
   y: 180.9018
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 150.206,
   y: 180.9007
  }).wait(1).to({
   graphics: mask_graphics_149,
   x: 149.9988,
   y: 181.0038
  }).wait(60).to({
   graphics: mask_graphics_209,
   x: 252.4988,
   y: 181.0038
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 252.2465,
   y: 181.0043
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 251.4895,
   y: 181.0058
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 250.2279,
   y: 181.0083
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 248.4617,
   y: 181.0118
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 246.1908,
   y: 181.0163
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 243.4153,
   y: 181.0218
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 240.1351,
   y: 181.0282
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 236.3503,
   y: 181.0357
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 232.0609,
   y: 181.0442
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 227.2669,
   y: 181.0537
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 221.9681,
   y: 181.0642
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 216.1648,
   y: 181.0756
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 209.8568,
   y: 181.0881
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 203.0442,
   y: 180.9981
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 196.6207,
   y: 180.9862
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 190.6117,
   y: 180.9752
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 185.017,
   y: 180.9648
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 179.8368,
   y: 180.9553
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 175.071,
   y: 180.9465
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 170.7196,
   y: 180.9385
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 166.7827,
   y: 180.9312
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 163.2601,
   y: 180.9247
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 160.152,
   y: 180.919
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 157.4583,
   y: 180.914
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 155.179,
   y: 180.9098
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 153.3141,
   y: 180.9064
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 151.8637,
   y: 180.9037
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 150.8276,
   y: 180.9018
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 150.206,
   y: 180.9007
  }).wait(1).to({
   graphics: mask_graphics_239,
   x: 149.9988,
   y: 181.0038
  }).wait(50).to({
   graphics: mask_graphics_289,
   x: 252.4988,
   y: 181.0038
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 252.2465,
   y: 181.0043
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 251.4895,
   y: 181.0058
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 250.2279,
   y: 181.0083
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 248.4617,
   y: 181.0118
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 246.1908,
   y: 181.0163
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 243.4153,
   y: 181.0218
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 240.1351,
   y: 181.0282
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 236.3503,
   y: 181.0357
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 232.0609,
   y: 181.0442
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 227.2669,
   y: 181.0537
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 221.9681,
   y: 181.0642
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 216.1648,
   y: 181.0756
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 209.8568,
   y: 181.0881
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 203.0442,
   y: 180.9981
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 196.6207,
   y: 180.9862
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 190.6117,
   y: 180.9752
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 185.017,
   y: 180.9648
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 179.8368,
   y: 180.9553
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 175.071,
   y: 180.9465
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 170.7196,
   y: 180.9385
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 166.7827,
   y: 180.9312
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 163.2601,
   y: 180.9247
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 160.152,
   y: 180.919
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 157.4583,
   y: 180.914
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 155.179,
   y: 180.9098
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 153.3141,
   y: 180.9064
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 151.8637,
   y: 180.9037
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 150.8276,
   y: 180.9018
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 150.206,
   y: 180.9007
  }).wait(1).to({
   graphics: mask_graphics_319,
   x: 149.9988,
   y: 181.0038
  }).wait(61));
  this.instance_16 = new lib.bg1();
  this.instance_16.parent = this;
  this.instance_16.setTransform(150, 351, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_17.setTransform(150, 351, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_18.setTransform(150, 351, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_19.setTransform(150, 351, 1, 1, 0, 0, 0, 150, 197);
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
 p.nominalBounds = new cjs.Rectangle(-241, 0, 721, 400);
 (lib.toyota_240x400 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(111, 200, 394, 200);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 240,
  height: 400,
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