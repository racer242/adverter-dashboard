(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bg = function() {
  this.initialize(img.bg);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 721, 435);
 (lib.bg2 = function() {
  this.initialize(img.bg2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 721, 435);
 (lib.bg3 = function() {
  this.initialize(img.bg3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 721, 435);
 (lib.car = function() {
  this.initialize(img.car);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 768, 387);
 (lib.style = function() {
  this.initialize(img.style);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 183, 51);

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
  this.shape.setTransform(153.8, 96.6, 0.8875, 0.8883, 0, 0, 0, 1, 1.1);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AqdEzIAAplIU8AAIAAJlg");
  this.shape_1.setTransform(153.3, 97.4, 0.8875, 0.8883, 0, 0, 0, 0.8, 1.1);
  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t05, new cjs.Rectangle(93.2, 69.2, 118.99999999999999, 54.5), null);
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
  this.shape.graphics.f("#FFFFFF").s().p("AAmCfQgTgYAAgsQAAgsATgZQAUgXAjAAQAjAAATAXQAUAZAAAsQAAAsgUAYQgTAYgjABQgjgBgUgYgAA8ApQgLAQAAAiQAAAhALARQALAQAWAAQAWAAALgQQAKgRAAghQAAgigKgQQgLgRgWAAQgWAAgLARgAh6C1IDVlpIAgAAIjVFpgAiSgWQgUgYAAgtQAAgrAUgYQATgZAjAAQAjAAAUAZQATAYABArQgBAtgTAYQgUAYgjAAQgjAAgTgYgAh8iMQgLARAAAhQAAAhALARQAKARAWAAQAWAAALgRQALgRAAgiQAAgggLgRQgLgRgWAAQgWAAgKARg");
  this.shape.setTransform(57.125, 156.15);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AAkC1IAAhRIiiAAIAAgYICtkAIAbAAIAAD3IA1AAIAAAhIg1AAIAABRgAhUBDIB4AAIAAi0g");
  this.shape_1.setTransform(28.375, 156.15);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t02a, new cjs.Rectangle(11.9, 112.7, 181.4, 76.8), null);
 (lib.t02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape.setTransform(156.775, 122.9);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANABAKAEQAJAFAFAIQAFAJAAAMQAAALgFAKQgFAIgJAFQgKAGgNABIgWAAIAAAvgAgZAFIAVAAQAHAAAHgEQAHgDAEgGQAEgHAAgJQAAgKgEgGQgEgGgHgCQgHgDgHAAIgVAAg");
  this.shape_1.setTransform(147.575, 122.9);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IBEAAIAAAMIg2AAIAAArIAcAAQAUAAAKAIQALAKgBARQABALgFAIQgEAIgKAGQgIAEgOAAgAgbA0IAaAAQAOAAAIgHQAHgGAAgMQAAgNgIgGQgHgFgOgBIgaAAg");
  this.shape_2.setTransform(137.8, 122.9);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAfBAIAAg2IgYAAIgCAAIgBAAIggA2IgPAAIAjg4QgLgEgGgJQgGgJAAgMQAAgRAKgKQALgKASAAIAkAAIAAB/gAgEgwQgFACgEAFQgEAGgBAJQAAAJAEAGQAEAGAGADQAFACAHAAIAXAAIAAgzIgVAAQgIAAgGADg");
  this.shape_3.setTransform(126.45, 122.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgiA5QgOgIgJgPQgIgPAAgTQAAgSAIgPQAJgPAPgIQAOgJATAAQATAAAPAJQAPAIAJAPQAIAPABASQgBATgIAPQgJAOgPAJQgPAIgTABQgSgBgQgIgAgbgtQgLAHgHAMQgHALAAAPQAAAPAHAMQAHAMALAHQANAHAOAAQAPAAAMgHQAMgHAHgMQAGgMAAgPQAAgPgGgLQgHgMgMgHQgMgHgPAAQgOAAgNAHg");
  this.shape_4.setTransform(114.55, 122.925);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_5.setTransform(100.875, 122.9);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAIgEAHQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGgBAFgDQAGgDADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_6.setTransform(86.225, 122.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAqBAIgQgpIg0AAIgPApIgOAAIAxh/IANAAIAxB/gAAWALIgWg6IgWA6IAsAAg");
  this.shape_7.setTransform(71.55, 122.9);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_8.setTransform(61.675, 122.925);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgoBAIAAh/IAjAAQARAAALAJQAKAJAAAPQAAAIgEAHQgEAIgKAFQAMACAHAIQAHAIAAAMQAAALgFAIQgEAIgJAFQgJAEgMAAgAgbA0IAbAAQAOAAAGgHQAHgGABgMQgBgKgGgGQgHgGgLABIgeAAgAgbgFIAYAAQAGgBAFgDQAGgDADgFQADgFAAgHQAAgKgHgGQgHgGgLAAIgWAAg");
  this.shape_9.setTransform(50.975, 122.9);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAqBAIgPgpIg1AAIgQApIgNAAIAxh/IANAAIAxB/gAAWALIgWg6IgWA6IAsAAg");
  this.shape_10.setTransform(40, 122.9);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgGBAIAAhzIgkAAIAAgMIBVAAIAAAMIgkAAIAABzg");
  this.shape_11.setTransform(30.3, 122.9);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgWA5QgQgIgIgPQgJgPAAgTQAAgTAJgOQAIgPAQgIQAOgJATAAQAMAAALAEQALAEAIAGIgEANQgIgGgKgEQgKgEgKAAQgPAAgLAHQgMAHgHALQgGAMAAAPQAAAPAGAMQAHAMAMAHQAMAHAOAAQAMAAAKgEQAKgEAIgHIAFANQgLAHgLAEQgLAEgMAAQgTgBgOgIg");
  this.shape_12.setTransform(20.25, 122.925);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AAfBAIAAg2IgYAAIgCAAIgBAAIgfA2IgQAAIAjg4QgLgFgGgIQgGgJgBgMQABgRAKgKQALgJASgBIAlAAIAAB/gAgEgxQgGADgEAFQgDAGAAAJQgBAKAEAFQAEAGAGACQAFADAHAAIAXAAIAAgzIgVAAQgIAAgGACg");
  this.shape_13.setTransform(104.15, 99.75);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AAqBAIgPgqIg1AAIgQAqIgNAAIAxh/IANAAIAxB/gAAXALIgXg7IgVA7IAsAAg");
  this.shape_14.setTransform(94.1, 99.75);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_15.setTransform(82.275, 99.75);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("AgGBAIAAhzIgkAAIAAgMIBUAAIAAAMIgjAAIAABzg");
  this.shape_16.setTransform(71.75, 99.75);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#FFFFFF").s().p("AAmBAIAAhqIhLBqIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_17.setTransform(61.075, 99.75);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#FFFFFF").s().p("AAtBPIAAgeIhZAAIAAAeIgMAAIAAgqIAHAAQAEgBADgEQADgDADgHIADgQIAJhUIBCAAIAABzIAPAAIAAAqgAgUAHQgBAMgDAIQgDAIgDACIA7AAIAAhnIgpAAg");
  this.shape_18.setTransform(48.825, 101.25);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAAMIg3AAIAAAuIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_19.setTransform(38.925, 99.75);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#FFFFFF").s().p("AgmBAIAAh/IAjAAQANAAAKAFQAJAFAFAJQAFAIAAAMQAAAMgFAIQgFAJgJAFQgKAGgNABIgWAAIAAAvgAgZAEIAVAAQAHABAHgEQAHgCAEgHQAEgGAAgKQAAgKgEgGQgEgGgHgDQgHgCgHAAIgVAAg");
  this.shape_20.setTransform(29.725, 99.75);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#FFFFFF").s().p("AAfBAIg0g7IgMAAIAAA7IgNAAIAAh/IANAAIAAA6IALAAIAwg6IAQAAIg0A+IA5BBg");
  this.shape_21.setTransform(20.075, 99.775);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#FFFFFF").s().p("AAfBAIAAg1IgYAAIgBAAIgCAAIggA1IgQAAIAkg4QgLgEgGgJQgGgJAAgMQAAgRALgKQAKgKASAAIAkAAIAAB/gAgDgxQgHADgDAFQgFAGAAAJQABAJADAGQAEAGAGACQAFADAHAAIAXAAIAAgzIgWAAQgHAAgFACg");
  this.shape_22.setTransform(133.8, 76.6);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#FFFFFF").s().p("AAqBAIgQgqIg0AAIgPAqIgOAAIAxh/IANAAIAxB/gAAXAMIgXg8IgWA8IAtAAg");
  this.shape_23.setTransform(123.75, 76.6);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AAkBAIAAg6IhHAAIAAA6IgOAAIAAh/IAOAAIAAA6IBHAAIAAg6IAOAAIAAB/g");
  this.shape_24.setTransform(111.925, 76.6);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IAOAAIAAA3IAcAAQAVAAAJAJQAKAJAAARQABAKgFAJQgEAJgKAEQgIAFgOAAgAgbA0IAbAAQANAAAHgGQAIgHAAgMQgBgMgHgGQgHgHgNABIgbAAg");
  this.shape_25.setTransform(101.1, 76.6);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AgtBAIgEgCIACgMIAEACIAEAAQAFAAACgEQADgEABgIIAJhkIBFAAIAAB/IgNAAIAAhyIgrAAIgJBbQgCAMgFAGQgFAGgLABIgHgBg");
  this.shape_26.setTransform(89.2, 76.675);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAqBAIgPgqIg1AAIgQAqIgNAAIAxh/IANAAIAxB/gAAWAMIgWg8IgWA8IAsAAg");
  this.shape_27.setTransform(79.15, 76.6);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AAmBAIAAhpIhLBpIgNAAIAAh/IANAAIAABqIBMhqIAMAAIAAB/g");
  this.shape_28.setTransform(67.175, 76.6);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AAsBPIAAgeIhjAAIAAh/IANAAIAABzIBGAAIAAhzIAOAAIAABzIAOAAIAAAqg");
  this.shape_29.setTransform(54.975, 78.1);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#FFFFFF").s().p("AgjBAIAAh/IBFAAIAAANIg3AAIAAAtIA2AAIAAALIg2AAIAAAuIA5AAIAAAMg");
  this.shape_30.setTransform(43.525, 76.6);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#FFFFFF").s().p("AAjBAIAAhyIhFAAIAAByIgOAAIAAh/IBhAAIAAB/g");
  this.shape_31.setTransform(32.325, 76.6);
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
 }).prototype = getMCSymbolPrototype(lib.t01_1, new cjs.Rectangle(65, 31, 121.5, 33.900000000000006), null);
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
  this.shape.graphics.f("#FFFFFF").s().p("AiCBVQg2gkAAgxQAAgxA2giQA2gkBMAAQBNAAA2AkQA2AiAAAxQAAAxg2AkQg2AihNABQhMgBg2gigACJg4QAAAYgoASQgXAJgdAEIAAAFQABAsgNAfQgJATgJAHQA2gDAqgcQAXgPAMgVQANgUAAgVQAAgXgMgTQgEgHgHgHIABADgAiSgtQgMATAAAXQAAAVANAUQAMAVAXAPQAXAPAbAJQAXAGAXABQgJgHgJgTQgNgfAAgsIAAgFQgcgEgXgJQgogSAAgYIAAgCIgKANgAgTAvQAJAVAKAAQALAAAJgVQAIgTAAgbQgNACgPAAQgOAAgNgCQAAAbAIATgAgTg1QgFAMgCANIAaABIAagBQgCgNgEgMQgJgVgLAAQgKAAgJAVgAAhhGQAHASAEAWQAQgDAPgFQAggLAAgPQAAgRgggLQgMgEgNgDIgMgCIgkgCIgCAAIgCAAIgyAEIgWAHQggALAAARQAAAPAgALQAPAGAQACQAEgWAHgSQAOgfASAAQATAAAOAfg");
  this.shape.setTransform(18.5, 11.95);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.logo_s, new cjs.Rectangle(0, 0, 37, 23.9), null);
 (lib.legal_02_d1 = function() {
  this.initialize(img.legal_02_d1);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 542, 180);
 (lib.legal_02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_d1 = new lib.legal_02_d1();
  this.cvr_d1.name = "cvr_d1";
  this.cvr_d1.parent = this;
  this.cvr_d1.setTransform(41, 69, 0.5, 0.5);
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
   y: -216
  }, 0).wait(1));
  var mask_cvr_d1 = new cjs.Shape();
  mask_cvr_d1._off = true;
  mask_cvr_d1.graphics.p("AnzH0IAAvnIPnAAIAAPng");
  mask_cvr_d1.setTransform(314, 211.5, 5.46, 2.85);
  this.cvr_d1.mask = mask_cvr_d1
  this.timeline.addTween(cjs.Tween.get(this.cvr_d1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.legal_02, new cjs.Rectangle(39, 67, 546, 289), null);
 (lib.car_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.car();
  this.instance.parent = this;
  this.instance.setTransform(32, -20, 0.67, 0.67);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(32, -20, 514.6, 259.3), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#272930").s().p("EhLxAfQMAAAg+fMCXjAAAMAAAA+fg");
  this.shape.setTransform(300.002, 200, 0.6186, 1);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 600, 400), null);
 (lib.bg3_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg3();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(40, 0, 480.9, 290.2), null);
 (lib.bg2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg2();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(40, 0, 480.9, 290.2), null);
 (lib.bg1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bg();
  this.instance.parent = this;
  this.instance.setTransform(40, 0, 0.6667, 0.6667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(40, 0, 480.70000000000005, 290), null);
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
   regX: 152.6,
   regY: 96.4,
   x: 169.8,
   y: 96.4,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 167.25,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 164.9,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 162.8,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 160.85,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 159.1,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 157.6,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 156.25,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 155.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 154.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 153.5,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 153,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 152.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(93.2, 69.2, 139, 54.5);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvdGzIAAjpIe7AAIAADpg");
  mask.setTransform(83.1005, 43.4873);
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
  mask_1.graphics.p("AvdInIAAjpIe7AAIAADpg");
  mask_1.setTransform(83.1005, 55.1373);
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
  mask_2.graphics.p("AvdKcIAAjpIe7AAIAADpg");
  mask_2.setTransform(83.1005, 66.7873);
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
 p.nominalBounds = new cjs.Rectangle(-8.5, 63.7, 190.6, 69.89999999999999);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvsHCIAAjaIfZAAIAADag");
  mask.setTransform(79.3455, 45.0205);
  this.instance = new lib.t02();
  this.instance.parent = this;
  this.instance.setTransform(70.7, 22.3, 1, 1, 0, 0, 0, 90.7, 22.3);
  this.instance.alpha = 0;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
   regX: 87.5,
   regY: 99.8,
   x: 70.3,
   y: 99.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 72.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 75.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 77.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 79.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 82.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 83.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 84.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 85.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 86.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 87.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 87.4,
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
  mask_1.graphics.p("AvsIvIAAjaIfZAAIAADag");
  mask_1.setTransform(79.3455, 55.9205);
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
   regX: 87.5,
   regY: 99.8,
   x: 70.3,
   y: 99.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 72.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 75.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 77.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 79.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 82.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 83.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 84.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 85.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 86.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 87.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 87.4,
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
  mask_2.graphics.p("AvsKcIAAjaIfZAAIAADag");
  mask_2.setTransform(79.3455, 66.7955);
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
   regX: 87.5,
   regY: 99.8,
   x: 70.3,
   y: 99.8,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 72.85,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 75.2,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 77.3,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 79.25,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 81,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 82.5,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 83.85,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 84.95,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 85.9,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 86.6,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 87.1,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 87.4,
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
  mask_3.graphics.p("AnfOsIAAowIO/AAIAAIwg");
  mask_3.setTransform(30.3423, 94.0106);
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
   regX: 44.8,
   regY: 156.2,
   x: 27.6,
   y: 156.2,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 30.15,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 32.5,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 34.6,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 36.55,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 38.3,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 39.8,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 41.15,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 42.25,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 43.2,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 43.9,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 44.4,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 44.7,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-8.5, 68.3, 188.4, 119.7);
 (lib.txt01_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A2KFQIAAmFMAsVAAAIAAGFg");
  mask.setTransform(141.8892, 33.6114);
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
   regX: 125.7,
   regY: 47.9,
   x: 108.5,
   y: 47.9,
   alpha: 0.1378
  }, 0).wait(1).to({
   x: 111.05,
   alpha: 0.2653
  }, 0).wait(1).to({
   x: 113.4,
   alpha: 0.3827
  }, 0).wait(1).to({
   x: 115.5,
   alpha: 0.4898
  }, 0).wait(1).to({
   x: 117.45,
   alpha: 0.5867
  }, 0).wait(1).to({
   x: 119.2,
   alpha: 0.6735
  }, 0).wait(1).to({
   x: 120.7,
   alpha: 0.75
  }, 0).wait(1).to({
   x: 122.05,
   alpha: 0.8163
  }, 0).wait(1).to({
   x: 123.15,
   alpha: 0.8724
  }, 0).wait(1).to({
   x: 124.1,
   alpha: 0.9184
  }, 0).wait(1).to({
   x: 124.8,
   alpha: 0.9541
  }, 0).wait(1).to({
   x: 125.3,
   alpha: 0.9796
  }, 0).wait(1).to({
   x: 125.6,
   alpha: 0.9949
  }, 0).wait(1).to({
   regX: 90.7,
   regY: 22.3,
   x: 90.7,
   y: 22.3,
   alpha: 1
  }, 0).wait(12));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 186.5, 64.9);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AvQCgIAAk1IehAAIAAE1g");
  mask.setTransform(73.0925, 16.0113);
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
  mask_1.setTransform(73.0925, 29.3081);
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
 p.nominalBounds = new cjs.Rectangle(-9, 2, 179.8, 56);
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
 (lib.right = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#00CC00").s().p("AgxAyIAAhjIBjAAIAABjg");
  this.shape.setTransform(45, -15);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  this.instance = new lib.logo_s();
  this.instance.parent = this;
  this.instance.setTransform(533.3, 20.1, 1.2973, 1.2971, 0, 0, 0, -0.1, -0.1);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(40, -20, 541.5, 71.3), null);
 (lib.fade = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(346).to({
   alpha: 1
  }, 13, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 0, 600, 400);
 (lib.background = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.instance.setTransform(485, 125, 1, 1, 0, 0, 0, 485, 125);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0, 0, 600, 400), null);
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
 (lib.left = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1: 69,
   cvr_frame2_1: 149,
   cvr_frame3_1: 273,
   "cvr_frame#4_2": 345,
   cvr_stay: 355
  });
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0000").s().p("AgxAyIAAhjIBjAAIAABjg");
  this.shape.setTransform(5, -15);
  this.timeline.addTween(cjs.Tween.get(this.shape).to({
   _off: true
  }, 1).wait(379));
  this.instance = new lib.legal_02();
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
  this.instance_1.setTransform(28, -6);
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
  this.instance_2.setTransform(28, -6);
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
  this.instance_3.setTransform(28, -6);
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
  this.instance_4.setTransform(-93.2, 70.1, 1.4317, 1.4304, 0, 0, 0, 0.6, -0.8);
  this.instance_4._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(289).to({
   _off: false
  }, 0).to({
   _off: true
  }, 85).wait(6));
  this.instance_5 = new lib.txt04("synched", 0, false);
  this.instance_5.parent = this;
  this.instance_5.setTransform(20.9, 83.9, 1.2442, 1.2439, 0, 0, 0, -0.3, 1.2);
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
  this.instance_6.setTransform(20.6, 87.05, 1.1965, 1.1953, 0, 0, 0, -0.5, -0.3);
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
  this.instance_7.setTransform(22.6, 87.5, 1.1807, 1.1798, 0, 0, 0, 0.1, -0.4);
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
  this.instance_8.setTransform(60, 71);
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(274).to({
   startPosition: 29
  }, 0).to({
   alpha: 0
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(90));
  this.instance_9 = new lib.txt01("synched", 0, false);
  this.instance_9.parent = this;
  this.instance_9.setTransform(19.15, 50.6, 1.593, 1.5928, 0, 0, 0, 0.1, 0.1);
  this.timeline.addTween(cjs.Tween.get(this.instance_9).to({
   _off: true
  }, 374).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -20, 585, 405.8);
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
  this.instance.setTransform(200.45, -232.55, 0.4157, 0.4156, 0, 0, 0, 45.5, 121);
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
  this.instance_1.setTransform(2, 346, 0.0583, 1.3333);
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({
   _off: false
  }, 0).to({
   scaleX: 1.8833
  }, 30, cjs.Ease.get(1)).to({
   _off: true
  }, 315).wait(6));
  this.instance_2 = new lib.red_line();
  this.instance_2.parent = this;
  this.instance_2.setTransform(593.85, 73, 0.0417, 1.3333, 0, 0, 0, 100.8, 1.5);
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({
   _off: false
  }, 0).to({
   regX: 99.9,
   scaleX: 1.3791,
   x: 406.75
  }, 30, cjs.Ease.get(1)).to({
   _off: true
  }, 315).wait(6));
  this.instance_3 = new lib.car_1();
  this.instance_3.parent = this;
  this.instance_3.setTransform(294.1, 226.15, 0.8279, 0.8278, 0, 0, 0, 121, 76.3);
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
  var mask_graphics_0 = new cjs.Graphics().p("EAo9AcNMAAAgtdIF8AAMAAAAtdg");
  var mask_graphics_1 = new cjs.Graphics().p("EAo3AcNMAAAgtdIGCAAMAAAAtdg");
  var mask_graphics_2 = new cjs.Graphics().p("EAokAcNMAAAgtdIGVAAMAAAAtdg");
  var mask_graphics_3 = new cjs.Graphics().p("EAoGAcNMAAAgtdIGzAAMAAAAtdg");
  var mask_graphics_4 = new cjs.Graphics().p("EAnbAcNMAAAgtdIHeAAMAAAAtdg");
  var mask_graphics_5 = new cjs.Graphics().p("EAmlAcNMAAAgtdIIUAAMAAAAtdg");
  var mask_graphics_6 = new cjs.Graphics().p("EAliAcNMAAAgtdIJXAAMAAAAtdg");
  var mask_graphics_7 = new cjs.Graphics().p("EAkTAcNMAAAgtdIKmAAMAAAAtdg");
  var mask_graphics_8 = new cjs.Graphics().p("EAi4AcNMAAAgtdIMCAAMAAAAtdg");
  var mask_graphics_9 = new cjs.Graphics().p("EAhQAcNMAAAgtdINqAAMAAAAtdg");
  var mask_graphics_10 = new cjs.Graphics().p("AfdcNMAAAgtdIPdAAMAAAAtdg");
  var mask_graphics_11 = new cjs.Graphics().p("AddcNMAAAgtdIRdAAMAAAAtdg");
  var mask_graphics_12 = new cjs.Graphics().p("AbScNMAAAgtdIToAAMAAAAtdg");
  var mask_graphics_13 = new cjs.Graphics().p("AY6cNMAAAgtdIWAAAMAAAAtdg");
  var mask_graphics_14 = new cjs.Graphics().p("AWVcNMAAAgtdIYkAAMAAAAtdg");
  var mask_graphics_15 = new cjs.Graphics().p("AS1cNMAAAgtdIcEAAMAAAAtdg");
  var mask_graphics_16 = new cjs.Graphics().p("APkcNMAAAgtdIfUAAMAAAAtdg");
  var mask_graphics_17 = new cjs.Graphics().p("AMicNMAAAgtdMAiWAAAMAAAAtdg");
  var mask_graphics_18 = new cjs.Graphics().p("AJwcNMAAAgtdMAlIAAAMAAAAtdg");
  var mask_graphics_19 = new cjs.Graphics().p("AHOcNMAAAgtdMAnpAAAMAAAAtdg");
  var mask_graphics_20 = new cjs.Graphics().p("AE7cNMAAAgtdMAp8AAAMAAAAtdg");
  var mask_graphics_21 = new cjs.Graphics().p("AC3cNMAAAgtdMAsAAAAMAAAAtdg");
  var mask_graphics_22 = new cjs.Graphics().p("ABDcNMAAAgtdMAt0AAAMAAAAtdg");
  var mask_graphics_23 = new cjs.Graphics().p("AggcNMAAAgtdMAvXAAAMAAAAtdg");
  var mask_graphics_24 = new cjs.Graphics().p("Ah1cNMAAAgtdMAwrAAAMAAAAtdg");
  var mask_graphics_25 = new cjs.Graphics().p("Ai7cNMAAAgtdMAxxAAAMAAAAtdg");
  var mask_graphics_26 = new cjs.Graphics().p("AjxcNMAAAgtdMAynAAAMAAAAtdg");
  var mask_graphics_27 = new cjs.Graphics().p("AkYcNMAAAgtdMAzOAAAMAAAAtdg");
  var mask_graphics_28 = new cjs.Graphics().p("AkvcNMAAAgtdMAzlAAAMAAAAtdg");
  var mask_graphics_29 = new cjs.Graphics().p("Ak1cNMAAAgtdMAztAAAMAAAAtdg");
  var mask_graphics_119 = new cjs.Graphics().p("EAo9AcNMAAAgtdIF8AAMAAAAtdg");
  var mask_graphics_120 = new cjs.Graphics().p("EAo3AcNMAAAgtdIGCAAMAAAAtdg");
  var mask_graphics_121 = new cjs.Graphics().p("EAokAcNMAAAgtdIGVAAMAAAAtdg");
  var mask_graphics_122 = new cjs.Graphics().p("EAoGAcNMAAAgtdIGzAAMAAAAtdg");
  var mask_graphics_123 = new cjs.Graphics().p("EAnbAcNMAAAgtdIHeAAMAAAAtdg");
  var mask_graphics_124 = new cjs.Graphics().p("EAmlAcNMAAAgtdIIUAAMAAAAtdg");
  var mask_graphics_125 = new cjs.Graphics().p("EAliAcNMAAAgtdIJXAAMAAAAtdg");
  var mask_graphics_126 = new cjs.Graphics().p("EAkTAcNMAAAgtdIKmAAMAAAAtdg");
  var mask_graphics_127 = new cjs.Graphics().p("EAi4AcNMAAAgtdIMCAAMAAAAtdg");
  var mask_graphics_128 = new cjs.Graphics().p("EAhQAcNMAAAgtdINqAAMAAAAtdg");
  var mask_graphics_129 = new cjs.Graphics().p("AfdcNMAAAgtdIPdAAMAAAAtdg");
  var mask_graphics_130 = new cjs.Graphics().p("AddcNMAAAgtdIRdAAMAAAAtdg");
  var mask_graphics_131 = new cjs.Graphics().p("AbScNMAAAgtdIToAAMAAAAtdg");
  var mask_graphics_132 = new cjs.Graphics().p("AY6cNMAAAgtdIWAAAMAAAAtdg");
  var mask_graphics_133 = new cjs.Graphics().p("AWVcNMAAAgtdIYkAAMAAAAtdg");
  var mask_graphics_134 = new cjs.Graphics().p("AS1cNMAAAgtdIcEAAMAAAAtdg");
  var mask_graphics_135 = new cjs.Graphics().p("APkcNMAAAgtdIfUAAMAAAAtdg");
  var mask_graphics_136 = new cjs.Graphics().p("AMicNMAAAgtdMAiWAAAMAAAAtdg");
  var mask_graphics_137 = new cjs.Graphics().p("AJwcNMAAAgtdMAlIAAAMAAAAtdg");
  var mask_graphics_138 = new cjs.Graphics().p("AHOcNMAAAgtdMAnpAAAMAAAAtdg");
  var mask_graphics_139 = new cjs.Graphics().p("AE7cNMAAAgtdMAp8AAAMAAAAtdg");
  var mask_graphics_140 = new cjs.Graphics().p("AC3cNMAAAgtdMAsAAAAMAAAAtdg");
  var mask_graphics_141 = new cjs.Graphics().p("ABDcNMAAAgtdMAt0AAAMAAAAtdg");
  var mask_graphics_142 = new cjs.Graphics().p("AggcNMAAAgtdMAvXAAAMAAAAtdg");
  var mask_graphics_143 = new cjs.Graphics().p("Ah1cNMAAAgtdMAwrAAAMAAAAtdg");
  var mask_graphics_144 = new cjs.Graphics().p("Ai7cNMAAAgtdMAxxAAAMAAAAtdg");
  var mask_graphics_145 = new cjs.Graphics().p("AjxcNMAAAgtdMAynAAAMAAAAtdg");
  var mask_graphics_146 = new cjs.Graphics().p("AkYcNMAAAgtdMAzOAAAMAAAAtdg");
  var mask_graphics_147 = new cjs.Graphics().p("AkvcNMAAAgtdMAzlAAAMAAAAtdg");
  var mask_graphics_148 = new cjs.Graphics().p("Ak1cNMAAAgtdMAztAAAMAAAAtdg");
  var mask_graphics_209 = new cjs.Graphics().p("EAo9AcNMAAAgtdIF8AAMAAAAtdg");
  var mask_graphics_210 = new cjs.Graphics().p("EAo3AcNMAAAgtdIGCAAMAAAAtdg");
  var mask_graphics_211 = new cjs.Graphics().p("EAokAcNMAAAgtdIGVAAMAAAAtdg");
  var mask_graphics_212 = new cjs.Graphics().p("EAoGAcNMAAAgtdIGzAAMAAAAtdg");
  var mask_graphics_213 = new cjs.Graphics().p("EAnbAcNMAAAgtdIHeAAMAAAAtdg");
  var mask_graphics_214 = new cjs.Graphics().p("EAmlAcNMAAAgtdIIUAAMAAAAtdg");
  var mask_graphics_215 = new cjs.Graphics().p("EAliAcNMAAAgtdIJXAAMAAAAtdg");
  var mask_graphics_216 = new cjs.Graphics().p("EAkTAcNMAAAgtdIKmAAMAAAAtdg");
  var mask_graphics_217 = new cjs.Graphics().p("EAi4AcNMAAAgtdIMCAAMAAAAtdg");
  var mask_graphics_218 = new cjs.Graphics().p("EAhQAcNMAAAgtdINqAAMAAAAtdg");
  var mask_graphics_219 = new cjs.Graphics().p("AfdcNMAAAgtdIPdAAMAAAAtdg");
  var mask_graphics_220 = new cjs.Graphics().p("AddcNMAAAgtdIRdAAMAAAAtdg");
  var mask_graphics_221 = new cjs.Graphics().p("AbScNMAAAgtdIToAAMAAAAtdg");
  var mask_graphics_222 = new cjs.Graphics().p("AY6cNMAAAgtdIWAAAMAAAAtdg");
  var mask_graphics_223 = new cjs.Graphics().p("AWVcNMAAAgtdIYkAAMAAAAtdg");
  var mask_graphics_224 = new cjs.Graphics().p("AS1cNMAAAgtdIcEAAMAAAAtdg");
  var mask_graphics_225 = new cjs.Graphics().p("APkcNMAAAgtdIfUAAMAAAAtdg");
  var mask_graphics_226 = new cjs.Graphics().p("AMicNMAAAgtdMAiWAAAMAAAAtdg");
  var mask_graphics_227 = new cjs.Graphics().p("AJwcNMAAAgtdMAlIAAAMAAAAtdg");
  var mask_graphics_228 = new cjs.Graphics().p("AHOcNMAAAgtdMAnpAAAMAAAAtdg");
  var mask_graphics_229 = new cjs.Graphics().p("AE7cNMAAAgtdMAp8AAAMAAAAtdg");
  var mask_graphics_230 = new cjs.Graphics().p("AC3cNMAAAgtdMAsAAAAMAAAAtdg");
  var mask_graphics_231 = new cjs.Graphics().p("ABDcNMAAAgtdMAt0AAAMAAAAtdg");
  var mask_graphics_232 = new cjs.Graphics().p("AggcNMAAAgtdMAvXAAAMAAAAtdg");
  var mask_graphics_233 = new cjs.Graphics().p("Ah1cNMAAAgtdMAwrAAAMAAAAtdg");
  var mask_graphics_234 = new cjs.Graphics().p("Ai7cNMAAAgtdMAxxAAAMAAAAtdg");
  var mask_graphics_235 = new cjs.Graphics().p("AjxcNMAAAgtdMAynAAAMAAAAtdg");
  var mask_graphics_236 = new cjs.Graphics().p("AkYcNMAAAgtdMAzOAAAMAAAAtdg");
  var mask_graphics_237 = new cjs.Graphics().p("AkvcNMAAAgtdMAzlAAAMAAAAtdg");
  var mask_graphics_238 = new cjs.Graphics().p("Ak1cNMAAAgtdMAztAAAMAAAAtdg");
  var mask_graphics_289 = new cjs.Graphics().p("EAo9AcNMAAAgtdIF8AAMAAAAtdg");
  var mask_graphics_290 = new cjs.Graphics().p("EAo3AcNMAAAgtdIGCAAMAAAAtdg");
  var mask_graphics_291 = new cjs.Graphics().p("EAokAcNMAAAgtdIGVAAMAAAAtdg");
  var mask_graphics_292 = new cjs.Graphics().p("EAoGAcNMAAAgtdIGzAAMAAAAtdg");
  var mask_graphics_293 = new cjs.Graphics().p("EAnbAcNMAAAgtdIHeAAMAAAAtdg");
  var mask_graphics_294 = new cjs.Graphics().p("EAmlAcNMAAAgtdIIUAAMAAAAtdg");
  var mask_graphics_295 = new cjs.Graphics().p("EAliAcNMAAAgtdIJXAAMAAAAtdg");
  var mask_graphics_296 = new cjs.Graphics().p("EAkTAcNMAAAgtdIKmAAMAAAAtdg");
  var mask_graphics_297 = new cjs.Graphics().p("EAi4AcNMAAAgtdIMCAAMAAAAtdg");
  var mask_graphics_298 = new cjs.Graphics().p("EAhQAcNMAAAgtdINqAAMAAAAtdg");
  var mask_graphics_299 = new cjs.Graphics().p("AfdcNMAAAgtdIPdAAMAAAAtdg");
  var mask_graphics_300 = new cjs.Graphics().p("AddcNMAAAgtdIRdAAMAAAAtdg");
  var mask_graphics_301 = new cjs.Graphics().p("AbScNMAAAgtdIToAAMAAAAtdg");
  var mask_graphics_302 = new cjs.Graphics().p("AY6cNMAAAgtdIWAAAMAAAAtdg");
  var mask_graphics_303 = new cjs.Graphics().p("AWVcNMAAAgtdIYkAAMAAAAtdg");
  var mask_graphics_304 = new cjs.Graphics().p("AS1cNMAAAgtdIcEAAMAAAAtdg");
  var mask_graphics_305 = new cjs.Graphics().p("APkcNMAAAgtdIfUAAMAAAAtdg");
  var mask_graphics_306 = new cjs.Graphics().p("AMicNMAAAgtdMAiWAAAMAAAAtdg");
  var mask_graphics_307 = new cjs.Graphics().p("AJwcNMAAAgtdMAlIAAAMAAAAtdg");
  var mask_graphics_308 = new cjs.Graphics().p("AHOcNMAAAgtdMAnpAAAMAAAAtdg");
  var mask_graphics_309 = new cjs.Graphics().p("AE7cNMAAAgtdMAp8AAAMAAAAtdg");
  var mask_graphics_310 = new cjs.Graphics().p("AC3cNMAAAgtdMAsAAAAMAAAAtdg");
  var mask_graphics_311 = new cjs.Graphics().p("ABDcNMAAAgtdMAt0AAAMAAAAtdg");
  var mask_graphics_312 = new cjs.Graphics().p("AggcNMAAAgtdMAvXAAAMAAAAtdg");
  var mask_graphics_313 = new cjs.Graphics().p("Ah1cNMAAAgtdMAwrAAAMAAAAtdg");
  var mask_graphics_314 = new cjs.Graphics().p("Ai7cNMAAAgtdMAxxAAAMAAAAtdg");
  var mask_graphics_315 = new cjs.Graphics().p("AjxcNMAAAgtdMAynAAAMAAAAtdg");
  var mask_graphics_316 = new cjs.Graphics().p("AkYcNMAAAgtdMAzOAAAMAAAAtdg");
  var mask_graphics_317 = new cjs.Graphics().p("AkvcNMAAAgtdMAzlAAAMAAAAtdg");
  var mask_graphics_318 = new cjs.Graphics().p("Ak1cNMAAAgtdMAztAAAMAAAAtdg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: mask_graphics_0,
   x: 300.1327,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_1,
   x: 300.133,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_2,
   x: 300.1338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_3,
   x: 300.1352,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_4,
   x: 300.1373,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_5,
   x: 300.1398,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_6,
   x: 300.143,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_7,
   x: 300.1467,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_8,
   x: 300.151,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_9,
   x: 300.1559,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_10,
   x: 300.1613,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_11,
   x: 300.1673,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_12,
   x: 300.1739,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_13,
   x: 300.1811,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_14,
   x: 300.1102,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_15,
   x: 300.0707,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_16,
   x: 300.0338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_17,
   x: 299.9997,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_18,
   x: 299.9684,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_19,
   x: 299.9397,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_20,
   x: 299.9138,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_21,
   x: 299.8906,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_22,
   x: 299.8701,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_23,
   x: 299.8524,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_24,
   x: 299.8374,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_25,
   x: 299.8251,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_26,
   x: 299.8156,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_27,
   x: 299.8087,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_28,
   x: 299.8046,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_29,
   x: 299.9688,
   y: 180.4737
  }).wait(90).to({
   graphics: mask_graphics_119,
   x: 300.1327,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_120,
   x: 300.133,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_121,
   x: 300.1338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_122,
   x: 300.1352,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_123,
   x: 300.1373,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_124,
   x: 300.1398,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_125,
   x: 300.143,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_126,
   x: 300.1467,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_127,
   x: 300.151,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_128,
   x: 300.1559,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_129,
   x: 300.1613,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_130,
   x: 300.1673,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_131,
   x: 300.1739,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_132,
   x: 300.1811,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_133,
   x: 300.1102,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_134,
   x: 300.0707,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_135,
   x: 300.0338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_136,
   x: 299.9997,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_137,
   x: 299.9684,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_138,
   x: 299.9397,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_139,
   x: 299.9138,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_140,
   x: 299.8906,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_141,
   x: 299.8701,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_142,
   x: 299.8524,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_143,
   x: 299.8374,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_144,
   x: 299.8251,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_145,
   x: 299.8156,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_146,
   x: 299.8087,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_147,
   x: 299.8046,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_148,
   x: 299.9688,
   y: 180.4737
  }).wait(61).to({
   graphics: mask_graphics_209,
   x: 300.1327,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_210,
   x: 300.133,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_211,
   x: 300.1338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_212,
   x: 300.1352,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_213,
   x: 300.1373,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_214,
   x: 300.1398,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_215,
   x: 300.143,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_216,
   x: 300.1467,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 300.151,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 300.1559,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 300.1613,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 300.1673,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 300.1739,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 300.1811,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 300.1102,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 300.0707,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 300.0338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 299.9997,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 299.9684,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 299.9397,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 299.9138,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 299.8906,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_231,
   x: 299.8701,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_232,
   x: 299.8524,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_233,
   x: 299.8374,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_234,
   x: 299.8251,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_235,
   x: 299.8156,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_236,
   x: 299.8087,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_237,
   x: 299.8046,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_238,
   x: 299.9688,
   y: 180.4737
  }).wait(51).to({
   graphics: mask_graphics_289,
   x: 300.1327,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_290,
   x: 300.133,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_291,
   x: 300.1338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_292,
   x: 300.1352,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_293,
   x: 300.1373,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_294,
   x: 300.1398,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_295,
   x: 300.143,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_296,
   x: 300.1467,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_297,
   x: 300.151,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_298,
   x: 300.1559,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_299,
   x: 300.1613,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_300,
   x: 300.1673,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 300.1739,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 300.1811,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 300.1102,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 300.0707,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 300.0338,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 299.9997,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 299.9684,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 299.9397,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 299.9138,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 299.8906,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 299.8701,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 299.8524,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 299.8374,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 299.8251,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_315,
   x: 299.8156,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_316,
   x: 299.8087,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_317,
   x: 299.8046,
   y: 180.4737
  }).wait(1).to({
   graphics: mask_graphics_318,
   x: 299.9688,
   y: 180.4737
  }).wait(56).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(6));
  this.instance_4 = new lib.bg1();
  this.instance_4.parent = this;
  this.instance_4.setTransform(379, 268, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_5.setTransform(309, 268, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_6.setTransform(309, 268, 1, 1, 0, 0, 0, 150, 197);
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
  this.instance_7.setTransform(379, 268, 1, 1, 0, 0, 0, 150, 197);
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
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -20, 646.4, 381.1);
 (lib.Toyota_100Px400_600 = function(mode, startPosition, loop) {
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
  mask.graphics.p("Egu3AfQMAAAg+fMBdvAAAMAAAA+fg");
  mask.setTransform(300.002, 200);
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
 p.nominalBounds = new cjs.Rectangle(300, 200, 300, 200);
 lib.properties = {
  id: 'E3CCC2B2DA6EFF40AA7B189F6C5C7189',
  width: 600,
  height: 400,
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
   src: "legal_02_d1.png",
   id: "legal_02_d1"
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