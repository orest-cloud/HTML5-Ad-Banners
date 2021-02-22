(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"160x600_CDI_Banner_1_atlas_", frames: [[0,540,153,96],[0,0,54,538]]}
];


// symbols:



(lib.CDI_Logo_153x96 = function() {
	this.spriteSheet = ss["160x600_CDI_Banner_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Lantuspsd = function() {
	this.spriteSheet = ss["160x600_CDI_Banner_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.WhiteRectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApyDVIAAmpITlAAIAAGpg");
	this.shape.setTransform(62.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,42.6);


(lib.PurpleRectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B82D9").s().p("ApyDVIAAmpITlAAIAAGpg");
	this.shape.setTransform(62.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,42.6);


(lib.LantusImagecopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(92,362);

	// Layer 3
	this.instance = new lib.Lantuspsd();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LantusImagecopy2, new cjs.Rectangle(12,62,42,476), null);


(lib.CTAAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white rect
	this.instance = new lib.WhiteRectangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.6,21.3,1,1,0,0,0,62.6,21.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(1));

	// purp rect
	this.instance_1 = new lib.PurpleRectangle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.6,-342.5,1,0.072,0,0,0,62.6,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:21.2,scaleY:9.09,y:-151.4},4).to({regY:21.3,scaleY:1,y:21.3},4).to({_off:true},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-344,125.4,386.6);


(lib.CDIBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.WhiteRectangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(74.8,47.2,1.265,2.452,0,0,0,62.6,21);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.CDI_Logo_153x96();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,0);

	this.instance_2 = new lib.WhiteRectangle("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.8,47.2,1.265,2.452,0,0,0,62.6,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,153,96);


(lib.Btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAwIgXhBIAAAAIgTBBIgaAAIghhfIAaAAIAVBCIABAAIAThCIAZAAIAUBCIABAAIAUhCIAYAAIghBfg");
	this.shape.setTransform(101.9,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAsQgLgGgHgMQgHgLAAgPQAAgOAHgMQAHgLALgGQAMgHAOABQAPgBALAHQAMAGAHALQAHAMAAAOQAAAPgHALQgHAMgMAGQgLAGgPABQgOgBgMgGgAgOgYQgHAEgDAHQgDAHAAAGQAAAHADAHQADAGAHAFQAGAEAIAAQAJAAAGgEQAHgFADgGQADgHAAgHQAAgGgDgHQgDgHgHgEQgGgEgJAAQgIAAgGAEg");
	this.shape_1.setTransform(87.8,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBHIhFhsIgBAAIAABsIgZAAIAAiNIAhAAIBEBoIAAhoIAaAAIAACNg");
	this.shape_2.setTransform(73.8,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgIgMQgGgLgBgPQABgOAGgMQAIgLALgGQAMgHANABQAOAAAKAFQAKAHAGALQAFAMAAAQIAAAGIhIAAQACALAHAGQAHAGAJAAQAJAAAHgEQAGgDAEgGIARANQgJALgJAEQgLAEgMABQgNgBgMgGgAAYgJQABgLgHgGQgGgFgMAAQgKgBgGAHQgGAGgCAKIAwAAIAAAAg");
	this.shape_3.setTransform(54.2,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAwIgnhfIAaAAIAZBCIAAAAIAahCIAYAAIglBfg");
	this.shape_4.setTransform(43.2,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAvQgIgDgFgHQgFgGAAgJQAAgMAGgGQAGgHAJgDQAJgDALgBIASgBIAGAAIAAgCQAAgKgGgEQgGgFgKABQgGAAgHADQgGACgFAFIgNgNQAIgIALgEQAKgEALABQAPAAAJAEQAIAFAEAHQAEAHAAAHIABANIAAA2IgWAAIAAgNIAAAAQgFAIgIADQgIAFgJAAQgJgBgIgDgAAFAGIgLABQgGABgDAEQgEADAAAFQAAAFADACQACADAEABIAIACQALAAAGgHQAGgFAAgLIAAgFIgFAAIgLABg");
	this.shape_5.setTransform(32.4,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBGQgNgFgIgKIASgSQAGAHAHAEQAHAEAIAAQAFAAAHgDQAFgCAEgEQADgEAAgHQAAgHgEgFQgFgEgIgDIgPgFIgQgHQgIgEgFgHQgEgIAAgNQAAgOAHgKQAIgJAMgFQALgEANAAQAKgBALAEQALADAIAIIgSAUQgFgGgGgDQgHgDgHAAQgFAAgGACQgEACgEAEQgDAEAAAHQAAAGAEAEQAGAFAHACIAPAGQAJACAHAFQAIADAFAIQAEAIABAMQAAAPgIAKQgGAKgMAFQgMAFgNAAQgNAAgMgEg");
	this.shape_6.setTransform(21.4,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 1
	this.instance = new lib.PurpleRectangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.6,21.3,1,1,0,0,0,62.6,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8BA8E8").s().p("ApyDVIAAmpITlAAIAAGpg");
	this.shape_7.setTransform(62.7,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,42.6);


// stage content:
(lib._160x600_CDI_Banner_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Low U.S. Shipping 100% Canadian Sourced 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAmQgGgDgEgGQgDgGAAgIQAAgIADgGQAEgFAGgEQAGgDAHAAQAGAAAEACQAFADADAEIABAAIAAgnIAIAAIAABSIgIAAIAAgJIgBAAQgCAEgFADQgFADgGAAQgIAAgFgEgAgIgBQgEACgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAEAAQAGAAAEgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgCQgEgCgGAAQgEAAgEACg");
	this.shape.setTransform(151.4,482.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAXQgGgDgDgGQgDgGgBgIQABgHADgGQADgGAHgEQAFgDAHAAQAIAAAFADQAFADADAGQAEAGAAAIIAAADIgpAAQABAEABAEQADAEADACQAEACADAAQAGAAAEgCQAEgCADgEIAHAFQgFAGgGADQgFACgIAAQgHAAgFgEgAAQgEQAAgGgEgEQgEgEgIAAQgFAAgFAEQgEAEgBAGIAfAAIAAAAg");
	this.shape_1.setTransform(144.9,484);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAYQgGgEgEgGQgDgGAAgIQAAgHADgGQAEgGAGgEQAGgDAHAAQAFAAAFACQAFACAEAEIgHAGQgCgDgDgCIgHgBQgFAAgEACQgEADgCAEQgCAFAAAEQAAAFACAFQACAEAEADQAEACAFAAQAEAAADgBQADgCADgDIAGAGQgEAEgFACQgFACgFAAQgIAAgFgDg");
	this.shape_2.setTransform(139.1,484);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAbIAAgnIAAgGIgBgGIAJAAIAAAEIAAAFIAAAAIAEgGIAEgDIAIgBIACAAIACAAIgBAJIgCAAIgDAAQgHAAgDAEQgEAGAAAIIAAAZg");
	this.shape_3.setTransform(134.6,484);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAXQgFgCgCgFQgCgFAAgGIAAgfIAJAAIAAAfQAAAGADADQADAEAGAAQAHABAEgGQAEgFAAgJIAAgZIAIAAIAAAnIAAAHIABAFIgIAAIgBgEIAAgFIgDAGIgGADQgEABgDAAQgHAAgEgDg");
	this.shape_4.setTransform(129.1,484.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAYQgGgEgEgGQgEgGAAgIQAAgHAEgGQAEgGAGgEQAGgDAHAAQAIAAAHADQAFAEAEAGQADAGAAAHQAAAIgDAGQgEAGgFAEQgHADgIAAQgHAAgGgDgAgJgQQgDADgDAEQgCAFAAAEQAAAGACAEQADAEADADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEgBgGQABgEgDgFQgCgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_5.setTransform(122.5,484);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAoQgEgBgEgCIgHgHIAIgHQADAFAEACQAFACAFAAQADAAAEgBQAEgBACgDQADgDAAgFQAAgFgCgDQgCgCgFgCIgKgEQgGgBgEgCQgFgDgCgEQgDgEAAgGQAAgIAEgFQAEgFAGgCQAGgDAGAAQAGAAAGACQAFACAEAFIgHAHQgCgEgEgCQgEgCgEAAIgHACQgEACgCADQgDACAAAFQAAADACADQABADAEACIAIADIAMAEQAFACADAFQAEAEAAAHQAAAIgEAFQgEAFgGACQgGADgHAAIgJgBg");
	this.shape_6.setTransform(115.8,482.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAbIAAgfQAAgGgDgEQgDgDgGAAQgHgBgEAGQgEAFAAAJIAAAZIgIAAIAAgnIAAgGIgBgGIAJAAIAAAEIAAAFIAAAAIAEgGIAFgDIAHgBQAHAAAEACQAFADACAFQACAFAAAFIAAAgg");
	this.shape_7.setTransform(106.2,484);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAZQgEgBgDgEQgDgDAAgFQABgHADgDQADgDAFgCIAKgCIAKAAIADAAIAAgCQAAgFgDgDQgEgDgGAAIgHABIgHAEIgFgFQAEgEAFgCQAFgCAFAAQAMAAAFAFQAFAGAAALIAAAVIAAAEIABAFIgJAAIAAgEIAAgEQgDAEgEADQgFACgEAAQgGAAgEgCgAgHADQgFADAAAFQAAAFADACQADACAFAAQAEAAADgCQAEgCABgEQACgDAAgFIAAgDIgIAAQgIAAgEACg");
	this.shape_8.setTransform(100,484);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDAnIAAgzIAHAAIAAAzgAgEgbQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_9.setTransform(95.7,482.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAmQgGgDgEgGQgDgGAAgIQAAgIADgGQAEgFAGgEQAGgDAHAAQAGAAAEACQAFADADAEIABAAIAAgnIAIAAIAABSIgIAAIAAgJIgBAAQgCAEgFADQgFADgGAAQgIAAgFgEgAgIgBQgEACgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAEAAQAGAAAEgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_10.setTransform(90.6,482.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAZQgEgBgDgEQgDgDAAgFQABgHADgDQADgDAFgCIAKgCIAKAAIADAAIAAgCQAAgFgDgDQgEgDgGAAIgHABIgHAEIgFgFQAEgEAFgCQAFgCAFAAQAMAAAFAFQAFAGAAALIAAAVIAAAEIABAFIgJAAIAAgEIAAgEQgDAEgEADQgFACgEAAQgGAAgEgCgAgHADQgFADAAAFQAAAFADACQADACAFAAQAEAAADgCQAEgCABgEQACgDAAgFIAAgDIgIAAQgIAAgEACg");
	this.shape_11.setTransform(84.2,484);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOAbIAAgfQAAgGgDgEQgDgDgGAAQgHgBgEAGQgEAFAAAJIAAAZIgIAAIAAgnIAAgGIgBgGIAJAAIAAAEIAAAFIAAAAIAEgGIAFgDIAHgBQAHAAAEACQAFADACAFQACAFAAAFIAAAgg");
	this.shape_12.setTransform(78.1,484);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMAZQgEgBgDgEQgDgDAAgFQABgHADgDQADgDAFgCIAKgCIAKAAIADAAIAAgCQAAgFgDgDQgEgDgGAAIgHABIgHAEIgFgFQAEgEAFgCQAFgCAFAAQAMAAAFAFQAFAGAAALIAAAVIAAAEIABAFIgJAAIAAgEIAAgEQgDAEgEADQgFACgEAAQgGAAgEgCgAgHADQgFADAAAFQAAAFADACQADACAFAAQAEAAADgCQAEgCABgEQACgDAAgFIAAgDIgIAAQgIAAgEACg");
	this.shape_13.setTransform(71.9,484);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAkQgJgGgFgJQgFgJgBgMQABgLAFgIQAFgKAIgFQAKgGAKAAQAIAAAHADQAIADAEAHIgHAFQgEgFgFgCQgFgCgGgBQgHABgHAFQgHAEgDAHQgFAIAAAHQAAAJAFAIQADAGAHAFQAHAFAHgBQAHAAAGgDQAGgCAEgGIAHAHQgGAGgHADQgHAEgKAAQgKAAgJgFg");
	this.shape_14.setTransform(65.1,482.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAnIAwhRIAGAEIgwBRgAANAmQgFgDgCgEQgDgFAAgFQAAgGADgEQACgEAFgDQAEgCAFAAQAGAAAEACQAFADACAEQADAEAAAGQAAAFgDAFQgCAEgFADQgEACgGAAQgFAAgEgCgAARALIgEAFQgCACAAADIACAGIAEAEQACABADAAQAEAAACgBIAEgEIACgGQAAgDgCgCIgEgFIgGgBIgFABgAgfgEQgEgCgDgEQgDgFAAgFQAAgFADgFQADgEAEgCQAEgDAGAAQAFAAAEADQAFACACAEQADAFAAAFQAAAFgDAFQgCAEgFACQgEADgFABQgGgBgEgDgAgbgeIgEAFQgCACAAADQAAADACACIAEAFQADABADABQADgBACgBQADgCABgDIACgFIgCgFIgEgFQgCgBgDgBQgDABgDABg");
	this.shape_15.setTransform(53,482.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAkQgFgDgDgGQgDgGgBgHIgCgOIACgNQABgHADgGQADgGAFgEQAFgDAHAAQAIAAAGADQAEAEAEAGIAEANIAAANIAAAOIgEANQgEAGgEADQgGAEgIAAQgHAAgFgEgAgIgcQgEADgBAFIgDALIAAAJIAAAKIADAKQABAFAEAEQADADAFAAQAGAAADgDQAEgEACgFIABgKIABgKIgBgJIgBgLQgCgFgEgDQgDgDgGgBQgFABgDADg");
	this.shape_16.setTransform(45.2,482.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAkQgGgDgCgGQgDgGgBgHIgBgOIABgNQABgHADgGQACgGAGgEQAFgDAHAAQAIAAAFADQAFAEAEAGIADANIACANIgCAOIgDANQgEAGgFADQgFAEgIAAQgHAAgFgEgAgIgcQgDADgDAFIgBALIgBAJIABAKIABAKQADAFADAEQADADAFAAQAGAAADgDQADgEACgFIACgKIABgKIgBgJIgCgLQgCgFgDgDQgDgDgGgBQgFABgDADg");
	this.shape_17.setTransform(38.8,482.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAGAnIAAhBIgBAAIgNAMIgGgHIAVgRIAIAAIAABNg");
	this.shape_18.setTransform(31.9,482.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAlQgHgCgFgFIAGgHQAEAEAFADQAEACAGAAQAHAAAEgDQAEgDACgFQACgFAAgFIAAgHIgBAAQgDAFgFADQgEACgGAAQgHAAgGgEQgGgDgEgGQgDgFAAgHQAAgJADgGQAEgGAGgDQAGgDAHgBIAHACIAHADQADACABAEIABAAIAAgJIAIAAIAAAwQAAAOgHAHQgHAIgNAAQgHAAgGgDgAgIgcQgEACgDAFQgCAEAAAGQAAAFADAEQACADAEADQAEACAEAAQAGAAAEgDQAEgCADgDQACgFAAgFQAAgFgDgFQgCgEgEgCQgEgDgGAAQgEAAgEADg");
	this.shape_19.setTransform(151.4,470.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOAaIAAgdQAAgHgDgDQgDgFgGAAQgHAAgEAGQgEAGAAAIIAAAYIgIAAIAAgmIAAgHIgBgFIAJAAIAAAEIAAAFIAAAAIAEgGIAFgDIAHgCQAHABAEADQAFACACAFQACAEAAAHIAAAeg");
	this.shape_20.setTransform(144.8,468.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDAnIAAgzIAHAAIAAAzgAgEgbQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_21.setTransform(140.2,467.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAnIAAhMIAJAAIAAAIQADgEAFgDQAFgCAEAAQAIAAAGADQAHAEADAGQADAGAAAIQAAAIgDAFQgEAGgFAEQgGADgHABQgGgBgGgCQgFgEgCgEIAAAigAgJgcQgEADgCAFQgCAEAAAFQAAAGACAEQACADAEADQAEADAFgBQAFABAEgDQAFgDACgDQACgEAAgGQAAgFgCgEQgCgFgFgDQgEgCgFAAQgFAAgEACg");
	this.shape_22.setTransform(135.4,470.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAnIAAhMIAJAAIAAAIQADgEAFgDQAFgCAEAAQAIAAAGADQAHAEADAGQADAGAAAIQAAAIgDAFQgEAGgFAEQgGADgHABQgGgBgGgCQgFgEgCgEIAAAigAgJgcQgEADgCAFQgCAEAAAFQAAAGACAEQACADAEADQAEADAFgBQAFABAEgDQAFgDACgDQACgEAAgGQAAgFgCgEQgCgFgFgDQgEgCgFAAQgFAAgEACg");
	this.shape_23.setTransform(128.5,470.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDAnIAAgzIAHAAIAAAzgAgEgbQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_24.setTransform(123.4,467.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAOApIAAgeQAAgHgDgDQgDgEgGAAQgHAAgEAFQgEAGAAAJIAAAYIgJAAIAAhSIAJAAIAAAnIAAAAIAEgEIAFgDIAHgCQAGABAFADQAFACACAFQABADAAAHIAAAfg");
	this.shape_25.setTransform(118.8,467.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAoQgEgBgEgCIgHgHIAIgHQADAFAEACQAFADAFgBQADABAEgCQAEgBACgEQADgDAAgEQAAgFgCgCQgCgDgFgCIgKgEQgGgBgEgDQgFgCgCgEQgDgEAAgHQAAgHAEgFQAEgFAGgDQAGgCAGAAQAGAAAGACQAFADAEAEIgHAHQgCgEgEgCQgEgBgEAAIgHABQgEABgCAEQgDACAAAFQAAADACADQABACAEADIAIADIAMAEQAFACADAEQAEAFAAAHQAAAIgEAFQgEAFgGADQgGACgHAAIgJgBg");
	this.shape_26.setTransform(112.4,467.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAFQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAAAQACgCACgBQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgCAAgCgCg");
	this.shape_27.setTransform(104.3,470.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKAoQgEgBgEgCIgHgHIAIgHQADAFAEACQAFADAFgBQADABAEgCQAEgBACgEQADgDAAgEQAAgFgCgCQgCgDgFgCIgKgEQgGgBgEgDQgFgCgCgEQgDgEAAgHQAAgHAEgFQAEgFAGgDQAGgCAGAAQAGAAAGACQAFADAEAEIgHAHQgCgEgEgCQgEgBgEAAIgHABQgEABgCAEQgDACAAAFQAAADACADQABACAEADIAIADIAMAEQAFACADAEQAEAFAAAHQAAAIgEAFQgEAFgGADQgGACgHAAIgJgBg");
	this.shape_28.setTransform(99.4,467.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAFQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAAAQACgCACgBQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABABQAAAAAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgCAAgCgCg");
	this.shape_29.setTransform(94.7,470.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAkQgHgFgDgHQgCgHAAgIIAAgwIAJAAIAAAuQAAAGACAGQABAGAFADQAEADAHAAQAIAAAEgDQAFgDABgGQACgGAAgGIAAguIAJAAIAAAwQAAAIgCAHQgDAHgHAFQgGAEgLAAQgKAAgGgEg");
	this.shape_30.setTransform(89,467.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOAaIgOgnIAAAAIgNAnIgIAAIgRgzIAJAAIAMAnIAOgnIAIAAIANAnIAMgnIAJAAIgQAzg");
	this.shape_31.setTransform(77.5,468.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgNAYQgGgEgDgGQgFgGAAgIQAAgHAFgGQADgGAGgEQAGgDAHAAQAIAAAHADQAFAEAEAGQAEAGgBAHQABAIgEAGQgEAGgFAEQgHADgIAAQgHAAgGgDgAgJgQQgDADgDAEQgCAFAAAEQAAAGACAEQADAEADADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEgBgGQABgEgDgFQgCgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_32.setTransform(69.9,468.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAnIAAhNIAKAAIAABFIAiAAIAAAIg");
	this.shape_33.setTransform(64.1,467.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

	// Layer 2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvgEgMVAuuIYrAAMAAAhdbI4rAAg");
	this.shape_34.setTransform(80.1,300.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(21));

	// Layer 3
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_35.setTransform(152.5,88);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATBCIAAhRIgBgKIgCgGQgDgFgHAAQgGAAgGADQgHADgFAGIAABaIgjAAIAAiBIAhAAIAAALQAIgGAJgDQAIgEAKAAQAKAAAIADQAHAEAFAGQAEAGADAIQACAIAAAKIAABWg");
	this.shape_36.setTransform(142.1,83.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQBaIAAiBIAiAAIAACBgAgQg4IAAgiIAhAAIAAAig");
	this.shape_37.setTransform(132.2,80.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRBZIAAixIAjAAIAACxg");
	this.shape_38.setTransform(126.1,81);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgfA/QgIgDgEgGQgFgGgDgIQgCgIAAgKIAAhXIAjAAIAABTQAAALADAEQADAEAHAAQAGAAAHgDQAGgDAFgFIAAhbIAjAAIAACBIghAAIAAgLQgIAFgJAEQgHAEgLAAQgKAAgHgDg");
	this.shape_39.setTransform(116,83.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYA+QgHgDgGgGQgFgFgHgJIAZgSIAEAHIAHAGQAEADAEABQADACAFAAIAEgBIAGgBIADgDQACgDAAgDQAAgFgFgDIgIgDIgLgGQgOgEgLgIQgNgJAAgSQAAgKAEgHQAEgHAGgGQAGgFAHgCQAJgCAIgBQAPABALAFQALAFAKAMIgXAUIgKgKQgGgFgGAAIgKABQgEADAAAFQAAAFAGADQAGAEAGACIAMAEQAGACAHAEQAFAEAFAEQAJALAAARQAAAQgOALQgNAKgVAAQgNABgNgGg");
	this.shape_40.setTransform(103.9,83.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AATBCIAAhRIgBgKIgCgGQgDgFgHAAQgGAAgGADQgHADgFAGIAABaIgjAAIAAiBIAhAAIAAALQAIgGAJgDQAIgEAKAAQAKAAAIADQAHAEAFAGQAEAGADAIQACAIAAAKIAABWg");
	this.shape_41.setTransform(92,83.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSBZIAAixIAlAAIAACxg");
	this.shape_42.setTransform(82,81);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATBCIAAhRIgBgKIgCgGQgDgFgHAAQgGAAgGADQgHADgFAGIAABaIgjAAIAAiBIAhAAIAAALQAIgGAJgDQAIgEAKAAQAKAAAIADQAHAEAFAGQAEAGADAIQACAIAAAKIAABWg");
	this.shape_43.setTransform(64.1,83.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgpAxQgPgTAAgeQAAgdAPgTQAQgSAZgBQAaABAQASQAPATAAAdQAAAegPATQgQASgaAAQgZAAgQgSgAgLghQgEAEgCAFQgDAGAAAHIgBALIABAMQAAAHADAFQACAGAEAFQAEADAHAAQAHAAAFgDQAEgFACgFQADgGAAgHIABgMQAAgSgGgKQgFgJgLAAQgHAAgEAEg");
	this.shape_44.setTransform(51.4,83.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpAxQgPgTAAgeQAAgdAPgTQAQgSAZgBQAaABAQASQAPATAAAdQAAAegPATQgQATgaAAQgZAAgQgTgAgLghQgEAEgCAGQgDAFAAAHIgBALIABAMQAAAHADAFQACAHAEADQAEAEAHAAQAHAAAFgEQAEgEACgFQADgGAAgGIABgNQAAgSgGgKQgFgJgLAAQgHAAgEAEg");
	this.shape_45.setTransform(150.3,17.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAMBXQgOAAgJgIQgJgHAAgQIAAhHIgSAAIAAgeIASAAIAAgpIAiAAIAAApIAYAAIAAAeIgYAAIAABDQAAAEACABIAGAAIAIAAIAIgDIAAAeIgHACIgFAAIgGABIgIAAg");
	this.shape_46.setTransform(140.2,15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag5BZIAAivIAiAAIAAAJQAGgFAHgDQAIgDAHAAQAZAAAOAUQAOATAAAfQAAAbgPASQgPATgWAAQgHAAgIgDQgHgDgGgFIAAA2gAgNg4IgJAHIAAA4IAJAHQAGACAFAAQAHAAAFgDQAFgEADgFQADgFABgHIABgNQAAgJgCgHQgCgHgDgFQgGgKgLAAQgHAAgFADg");
	this.shape_47.setTransform(122.7,19.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgfA/QgIgDgEgGQgFgGgDgIQgCgIAAgKIAAhXIAjAAIAABTQAAALADAEQADAEAHAAQAGAAAHgDQAGgDAFgFIAAhbIAjAAIAACBIghAAIAAgLQgIAFgJAEQgHAEgLAAQgKAAgHgDg");
	this.shape_48.setTransform(109,17.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYA+QgLgGgGgJQgHgJgDgNQgEgMAAgNQAAgMAEgMQADgNAHgJQAHgJAKgGQALgFAOgBQAXAAAPARQAHAIAEALQAFAKAAANIAAAPIhLAAIACAMQABAGADAEQACAEAFACQAEADAGAAQAJAAAGgEQAHgFAFgGIAaAQQgGAIgGAGQgGAFgHADQgMAHgTAAQgOgBgKgFgAAWgRQgBgJgFgHQgGgGgJAAQgFAAgDABQgEADgDADQgCACgBAFIgCAIIApAAIAAAAg");
	this.shape_49.setTransform(88.9,17.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRBBIgkiBIAjAAIASBMIAThMIAkAAIgmCBg");
	this.shape_50.setTransform(77.7,17.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AggBBQgGgDgFgEQgFgFgCgHQgDgGAAgIQAAgUAOgMQALgIAMgDIAXgGIAKgCIAAgHQAAgHgEgDQgFgDgGAAQgJAAgGAFQgGAEgFAIIgXgSQAIgNANgHQANgGAPgBQAbAAAMANQAMANAAAcIAAA8IABAKQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAAABIAAAFIggAAIgBgIQgKAFgIADQgIACgLABQgIgBgHgCgAAHAIIgLAEQgGADgEAEQgEADAAAHQAAAFADADQADADAGAAQAGAAAGgDIAMgIIAAgXIgLACg");
	this.shape_51.setTransform(65.9,17.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgjBRQgKgFgHgIQgHgIgGgNIAggOIAGALIAIAJQAEAEAGACQAFACAHAAIAKgBQAEgBAEgDQAEgCACgEQACgEAAgGQAAgJgJgGQgKgGgNgGQgcgKgOgLQgOgMAAgVQAAgWARgOQAQgOAaAAQAUAAAQALQAJAFAGAIQAHAIAFAMIgjALQgEgLgHgGQgHgGgLAAIgHAAIgIADQgDACgCADQgCADAAAFQAAADACAEQADADAFADQAMAHANAFQAUAHARALQARANAAAYQAAAagRAPQgRAOgeAAQgTAAgSgLg");
	this.shape_52.setTransform(52.8,14.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ah6CxIDFlhIAzAAIjGFhgABICmQgQgHgNgMQgLgNgIgQQgHgQAAgTQAAgSAIgQQAHgQAMgMQAMgMAQgGQARgGASAAQARAAARAGQARAGALANQANAMAHAQQAHARAAASQAAAkgbAaQgbAagjAAQgTAAgQgHgABUA9QgKAKAAAOQAAAOAKAJQAJAKAOAAQANAAALgKQAJgKAAgOQAAgNgJgKQgLgJgNAAQgOAAgJAJgAiMgBQgRgHgMgMQgMgNgHgQQgHgQAAgTQAAgSAHgQQAIgQAMgLQAMgMAQgHQAQgHASAAQATAAAPAHQARAHAMAMQAMAMAIARQAGAQAAASQAAAkgaAaQgaAZglAAQgSAAgQgGgAiBhqQgJAKAAAOQgBAOALAKQAKAJANAAQANAAAKgKQAJgKAAgOQAAgNgJgKQgKgKgNAAQgOAAgKAKg");
	this.shape_53.setTransform(135.7,48.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag+ChQgYgPgOgaQgPgZgFggQgGgfAAggQAAgeAGggQAFgfAPgaQAOgZAYgQQAZgQAlAAQAmAAAYAQQAZAQAOAZQAPAaAGAfQAFAgAAAeQAABTgfAvQggAvhAAAQglAAgZgQgAgqhXQgOAfABA4QgBA6AOAeQANAdAdAAQAeAAANgdQANgeAAg6QAAg4gNgfQgNgdgeAAQgdAAgNAdg");
	this.shape_54.setTransform(100.9,48.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhYCKQgSgUgJgeQgIgdAAgoQAAhaAog0QApg1BEAAQAYAAAWAHQAWAIAUANIgfA7QgMgMgPgIQgOgHgRAAQghABgXAeQgOASgGAlQAOgLARgFQARgFARAAQAaAAAUAJQAUAJAPAPQAOAPAIAVQAHAVAAAZQAAAygiAgQgjAfg2AAQg2AAgjgngAgfASQgNAKgJAQIAFAbQADANAHAKQAGALALAGQALAGAQAAQAXAAANgPQAMgPAAgXQAAgbgNgOQgHgHgKgEQgJgEgOAAQgSAAgOAKg");
	this.shape_55.setTransform(72.5,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(21));

	// Save Now
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAXAwIgXhBIAAAAIgTBBIgaAAIghhfIAaAAIAVBCIABAAIAThCIAZAAIAUBCIABAAIAUhCIAYAAIghBfg");
	this.shape_56.setTransform(136.6,363.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgaAsQgLgGgHgMQgHgLAAgPQAAgOAHgMQAHgLALgGQANgHANABQAOgBAMAHQAMAGAHALQAHAMAAAOQAAAPgHALQgHAMgMAGQgMAGgOABQgNgBgNgGgAgOgYQgGAFgEAGQgDAHAAAGQAAAHADAHQAEAHAGAEQAGAEAIAAQAJAAAGgEQAHgEADgHQADgHAAgHQAAgGgDgHQgDgGgHgFQgGgEgJAAQgIAAgGAEg");
	this.shape_57.setTransform(122.6,363.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAgBHIhFhsIgBAAIAABsIgZAAIAAiNIAhAAIBEBoIAAhoIAaAAIAACNg");
	this.shape_58.setTransform(108.5,361.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgIgMQgGgLgBgPQABgOAGgMQAIgLALgGQAMgHANABQAOAAAKAFQAKAHAGALQAGAMgBAQIAAAGIhIAAQABALAIAGQAHAGAJAAQAJAAAHgEQAFgDAFgGIARANQgJAKgJAFQgLAEgMABQgNgBgMgGgAAZgJQAAgKgHgHQgGgFgMAAQgJgBgHAHQgGAGgCAKIAxAAIAAAAg");
	this.shape_59.setTransform(89,363.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgLAwIgnhfIAaAAIAZBCIAAAAIAahCIAYAAIglBfg");
	this.shape_60.setTransform(78,363.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgZAvQgIgDgFgHQgFgGAAgJQAAgMAGgGQAGgHAJgDQAJgDALgBIASgBIAGAAIAAgCQAAgKgGgEQgGgFgKABQgGAAgHADQgGACgFAFIgNgNQAIgIALgEQAKgDALAAQAPAAAJAEQAIAFAEAHQAEAHAAAHIABANIAAA2IgWAAIAAgNIAAAAQgFAIgIADQgIAFgJAAQgJgBgIgDgAAFAGIgLACQgGAAgDADQgEADAAAGQAAAEADADQACADAEABIAIACQALAAAGgHQAGgFAAgLIAAgFIgFAAIgLABg");
	this.shape_61.setTransform(67.2,363.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgbBGQgMgFgJgKIASgSQAGAHAHAEQAHAEAJAAQAEAAAHgDQAFgCAEgEQADgEAAgHQAAgHgEgFQgFgEgIgDIgPgFIgQgHQgIgEgFgHQgEgIAAgNQAAgOAHgKQAIgJAMgFQALgEANAAQAKgBALAEQALADAIAIIgSAUQgFgGgGgDQgHgDgHAAQgFAAgGACQgEACgEAEQgDAEAAAHQAAAGAEAEQAGAFAHACIAQAGQAIACAHAFQAIADAFAIQAFAIAAAMQAAAPgIAKQgGAKgMAFQgMAFgNAAQgNAAgMgEg");
	this.shape_62.setTransform(56.1,361.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},14).wait(7));

	// CTA Anim
	this.instance = new lib.CTAAnimation("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(97.4,361.9,1,1,0,0,0,62.6,21.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},19).wait(1));

	// purp rect
	this.btn1 = new lib.Btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(97.4,361.9,1,1,0,0,0,62.6,21.3);
	this.btn1._off = true;
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Btn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(20).to({_off:false},0).wait(1));

	// Lantus Image copy 2
	this.instance_1 = new lib.LantusImagecopy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.1,269.1,1,1,0,0,0,86,331);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// CDI Btn
	this.cdi_btn = new lib.CDIBtn();
	this.cdi_btn.parent = this;
	this.cdi_btn.setTransform(80.1,544.3,1,1,0,0,0,75,47.8);
	new cjs.ButtonHelper(this.cdi_btn, 0, 1, 2, false, new lib.CDIBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cdi_btn).wait(21));

	// Layer 9
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#6ACADA","#5DBBD2"],[0,1],0,246,0,-246).s().p("EgMfAmcMAAAhM3IY/AAMAAABM3g");
	this.shape_63.setTransform(80.1,246.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(21));

	// Layer 10
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5DBBD2").s().p("EgMfAmcMAAAhM3IY/AAMAAABM3g");
	this.shape_64.setTransform(80.1,246.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.1,238.1,197,662);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/160x600_CDI_Banner_1_atlas_.png?1485284831154", id:"160x600_CDI_Banner_1_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;