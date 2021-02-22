(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x600_CDI_Banner_2_atlas_", frames: [[58,168,124,84],[58,82,148,84],[0,0,56,558],[58,0,286,80]]}
];


// symbols:



(lib.Path_0 = function() {
	this.spriteSheet = ss["300x600_CDI_Banner_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_0 = function() {
	this.spriteSheet = ss["300x600_CDI_Banner_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Lantuspsd = function() {
	this.spriteSheet = ss["300x600_CDI_Banner_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Logo_286x80 = function() {
	this.spriteSheet = ss["300x600_CDI_Banner_2_atlas_"];
	this.gotoAndStop(3);
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


(lib.whiterect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AspETIAAolIZTAAIAAIlg");
	this.shape.setTransform(81,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,55);


(lib.SaveNowbtn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA+IgdhUIAAAAIgaBUIggAAIgrh7IAiAAIAaBWIAAAAIAahWIAhAAIAbBWIAAAAIAZhWIAgAAIgqB7g");
	this.shape.setTransform(131.5,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA5QgOgIgKgPQgIgOgBgUQABgTAIgPQAKgOAOgIQAQgIASAAQATAAAPAIQAPAIAJAOQAJAPAAATQAAAUgJAOQgJAPgPAIQgPAIgTAAQgSAAgQgIgAgSgfQgJAFgEAJQgEAIAAAJQAAAKAEAJQAEAIAJAFQAIAFAKAAQALAAAIgFQAJgFAEgIQAEgJAAgKQAAgJgEgIQgEgJgJgFQgIgFgLAAQgKAAgIAFg");
	this.shape_1.setTransform(113.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApBbIhaiLIAAAAIAACLIggAAIAAi2IAqAAIBYCHIAAAAIAAiHIAiAAIAAC2g");
	this.shape_2.setTransform(95.2,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFBBQgSAAgQgIQgPgIgJgPQgJgPAAgTQAAgTAJgPQAJgOAPgIQAQgIASAAQARAAANAHQANAIAHAPQAIAPAAAVIAAAJIheAAQACANAJAIQAJAIAMAAQAMAAAIgFQAIgEAGgIIAWARQgLANgNAGQgNAGgNAAIgCAAgAAggMQAAgNgJgIQgIgIgPAAQgNAAgIAIQgIAIgCANIA/AAIAAAAg");
	this.shape_3.setTransform(69.8,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA+Igyh7IAhAAIAhBWIAAAAIAhhWIAgAAIgxB7g");
	this.shape_4.setTransform(55.7,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA9QgKgEgGgJQgHgIAAgMQAAgPAIgJQAHgHAMgFQAMgEAOgBQAMgBAMAAIAIAAIAAgDQAAgMgIgGQgIgGgMAAQgJAAgJAEQgIADgHAGIgQgQQALgLANgFQAOgEAOAAQATAAALAGQALAGAFAJQAFAJABAJQABAKAAAHIAABGIgcAAIAAgRIgBAAQgHAKgKAGQgKAEgMAAQgLAAgLgEgAAGAHQgHAAgHACQgHACgFAEQgFAEAAAHQAAAFAEAEQADAEAFABQAFACAFAAQAPAAAHgIQAIgHAAgOIAAgGIgGAAIgPAAg");
	this.shape_5.setTransform(41.7,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBbQgPgGgMgNIAZgYQAGAJAKAFQAKAFAKAAQAHAAAIgDQAGgDAFgFQAFgGABgIQgBgKgGgGQgHgFgJgEIgUgHQgLgDgKgGQgKgFgGgKQgGgJAAgRQAAgSAJgNQAKgMAQgGQAPgGAQAAQAOAAAOAEQAOAFAKAKIgXAZQgGgHgIgEQgJgEgKAAQgGAAgHADQgGACgFAFQgFAGABAIQAAAJAGAFQAGAGAKADIAUAHQALADAKAGQAKAFAGAKQAGAKAAAQQAAAUgJANQgJANgPAGQgQAGgRAAIgCAAQgQAAgPgFg");
	this.shape_6.setTransform(27.4,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B82D9").s().p("AspETIAAolIZTAAIAAIlg");
	this.shape_7.setTransform(81,27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8BA8E8").s().p("AspETIAAolIZTAAIAAIlg");
	this.shape_8.setTransform(81,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,55);


(lib.purplerect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B82D9").s().p("AspETIAAolIZTAAIAAIlg");
	this.shape.setTransform(81,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,55);


(lib.Logobtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("A3RG4IAAtvIdwAAIAAHuIQzAAIAAGBg");
	this.shape.setTransform(149,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("A3RG4IAAtvMAujAAAIAANvg");
	this.shape_1.setTransform(149,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,148,84), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,124,84), null);


(lib.LantusImagecopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,338);

	// Layer 3
	this.instance = new lib.Logo_286x80();
	this.instance.parent = this;
	this.instance.setTransform(7,521);

	this.instance_1 = new lib.Lantuspsd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234,0);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(255,551,1,1,0,0,0,62,42);

	this.instance_3 = new lib.Path_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(243,551,1,1,0,0,0,74,42);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LantusImagecopy6, new cjs.Rectangle(7,38,293,563.1), null);


// stage content:
(lib._300x600_CDI_Banner_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo btn
	this.logobtn = new lib.Logobtn();
	this.logobtn.parent = this;
	this.logobtn.setTransform(150,523,1,1,0,0,0,149,44);
	new cjs.ButtonHelper(this.logobtn, 0, 1, 2, false, new lib.Logobtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.logobtn).wait(21));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3D9AB2").p("AAAAyIAAhj");
	this.shape.setTransform(150,583.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C2329").s().p("AgSAjQgIgIAAgMQAAgMAIgGQAHgIALAAQAKAAAJAJIAAgnIAIAAIAABSIgIAAIAAgJQgHAKgMAAQgMAAgGgHgAgMACQgFAFAAAIQAAAJAFAFQAFAGAIAAQAHAAAFgGQAGgFAAgJQAAgIgGgFQgFgFgHAAQgIAAgFAFg");
	this.shape_1.setTransform(287.9,583.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C2329").s().p("AgRATQgHgIAAgLQAAgLAHgIQAIgHAKAAQALAAAHAHQAGAHAAAMIAAADIgoAAQABAHAEAFQAFAEAGAAQAKAAAGgHIAHAEQgIALgPAAQgLAAgHgIgAgPgDIAfAAQgBgPgOAAQgPAAgBAPg");
	this.shape_2.setTransform(281.3,584.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C2329").s().p("AgPATQgHgHAAgMQAAgKAHgJQAIgHAKAAQANAAAHAIIgHAHQgFgHgIAAQgQAAAAASQAAAIAFAGQAFAFAGAAQAJABAFgHIAGAGQgIAIgMAAQgKAAgIgIg");
	this.shape_3.setTransform(275.5,584.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C2329").s().p("AgNAbIgBgzIAJAAIAAAJQAFgLALABIAEAAIgBAJIgFgBQgOAAAAATIAAAZg");
	this.shape_4.setTransform(270.9,584.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C2329").s().p("AgWAFIAAgeIAJAAIAAAeQAAAOAMAAQAPAAAAgTIAAgZIAIAAIABAyIgIAAIgBgIQgEAJgMAAQgUAAAAgVg");
	this.shape_5.setTransform(265.4,584.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C2329").s().p("AgTATQgHgHgBgMQABgLAHgIQAIgHALAAQAMAAAIAHQAIAIAAALQAAAMgIAHQgIAIgMAAQgLAAgIgIgAgMgMQgFAFAAAHQAAAIAFAGQAFAGAHgBQAIABAGgGQAEgGABgIQgBgHgEgFQgGgGgIAAQgHAAgFAGg");
	this.shape_6.setTransform(258.8,584.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C2329").s().p("AgZAeIAIgHQAGAJALAAQAFAAAFgDQAGgEAAgGQAAgHgFgDQgDgCgLgEQgUgFAAgPQAAgLAIgGQAIgGAKAAQANAAAJAJIgIAHQgFgIgJAAQgGAAgEAEQgGADAAAHQAAAFAEADQADADAJADQALAEAFACQAHAGAAAKQAAALgJAHQgHAFgLAAQgQAAgIgLg");
	this.shape_7.setTransform(252.1,583.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C2329").s().p("AAOAbIAAgfQAAgNgMAAQgPgBAAAUIAAAZIgIAAIgBgzIAIAAIABAJQAFgLALABQAUAAAAAUIAAAgg");
	this.shape_8.setTransform(242.4,584.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C2329").s().p("AgPAYQgHgFABgHQAAgRAfAAIAEAAIAAgCQgBgLgNAAQgHAAgGAGIgGgGQAHgIAMAAQAWAAAAAWIABAeIgJAAIAAgIIAAAAQgGAJgKAAQgJAAgEgDgAgMALQAAAJALAAQAOAAABgPIAAgEIgJAAQgRAAAAAKg");
	this.shape_9.setTransform(236.2,584.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C2329").s().p("AgDAnIAAgzIAIAAIAAAzgAgGggQAAgGAGAAQAGAAABAGQgBAHgGAAQgGAAAAgHg");
	this.shape_10.setTransform(231.8,583.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C2329").s().p("AgTAjQgHgIAAgMQAAgLAHgHQAIgIALAAQALAAAHAJIABAAIAAgnIAIAAIAABSIgIAAIAAgJIgBAAQgFAKgNAAQgLAAgIgHgAgMACQgFAFAAAIQAAAJAFAFQAFAGAHAAQAIAAAGgGQAFgFAAgJQAAgIgFgFQgGgFgIAAQgHAAgFAFg");
	this.shape_11.setTransform(226.7,583.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C2329").s().p("AgQAYQgGgFAAgHQAAgRAgAAIADAAIAAgCQAAgLgNAAQgHAAgHAGIgFgGQAIgIALAAQAWAAAAAWIAAAVIABAJIgJAAIAAgIQgGAJgKAAQgJAAgFgDgAgMALQAAAJALAAQANAAABgPIAAgEIgIAAQgRAAAAAKg");
	this.shape_12.setTransform(220.3,584.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C2329").s().p("AAOAbIAAgfQAAgNgMAAQgPgBAAAUIAAAZIgJAAIAAgzIAIAAIAAAJIABAAQAEgLAMABQATAAAAAUIAAAgg");
	this.shape_13.setTransform(214.2,584.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C2329").s().p("AgWAMQABgRAfAAIADAAIAAgCQAAgLgMAAQgIAAgHAGIgGgGQAJgIALAAQAWAAAAAWIAAAeIgIAAIgBgIQgFAJgLAAQgSAAgBgPgAgMALQgBAJAMAAQAOAAAAgPIAAgEIgJAAQgQAAAAAKg");
	this.shape_14.setTransform(207.9,584.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C2329").s().p("AgWAdQgMgLAAgSQAAgQALgMQAMgMAQAAQASAAAKAMIgIAGQgIgKgMAAQgMABgIAJQgJAKAAAMQAAANAJAKQAIAKAMgBQAOAAAJgLIAHAGQgLAOgTAAQgQAAgLgMg");
	this.shape_15.setTransform(201.1,583.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C2329").s().p("AgaAnIAwhRIAGAEIgwBRgAAJAjQgGgGAAgIQAAgIAGgGQAFgFAIgBQAJABAFAFQAGAGAAAIQAAAIgGAGQgGAFgIAAQgIAAgFgFgAAOANQgDADAAAFQAAAEADAEQAEADAEAAQAFAAADgDQAEgEAAgEQAAgFgEgDQgDgEgFABQgEgBgEAEgAgjgHQgGgFAAgIQAAgIAGgGQAGgGAIAAQAIAAAFAGQAGAGAAAIQAAAIgGAFQgFAGgIAAQgIAAgGgGgAgdgcQgEADAAAFQAAAFAEADQADADAFAAQAEAAAEgDQADgDAAgFQAAgFgDgDQgEgEgEAAQgFAAgDAEg");
	this.shape_16.setTransform(188.9,583.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C2329").s().p("AgZAAQAAgnAZAAQAbAAAAAnQAAAogbAAQgZAAAAgogAgQAAQAAAhAQAAQARAAAAghQAAgfgRAAQgQAAAAAfg");
	this.shape_17.setTransform(181,583.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C2329").s().p("AgZAAQAAgnAZAAQAaAAAAAnQAAAogaAAQgZAAAAgogAgQAAQAAAhAQAAQARAAAAghQAAgfgRAAQgQAAAAAfg");
	this.shape_18.setTransform(174.6,583.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C2329").s().p("AAFAnIAAhBIgNALIgFgGIATgRIAIAAIAABNg");
	this.shape_19.setTransform(167.7,583.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1C2329").s().p("AgTARIAHgEQAFAGAHAAQALAAAAgHQAAgGgLgDQgIgCgEgBQgFgEAAgHQAAgHAGgEQAFgEAHAAQANAAAFAJIgHAFQgFgGgGAAQgJAAAAAHQAAAGALACQARADAAALQAAAIgGAFQgGADgIAAQgNAAgGgKg");
	this.shape_20.setTransform(132.5,584.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C2329").s().p("AgRATQgHgIAAgLQAAgLAHgIQAHgHALAAQALAAAHAHQAGAHAAAMIAAADIgoAAQAAAHAFAFQAFAEAGAAQAJAAAHgHIAHAEQgJALgOAAQgLAAgHgIgAgPgDIAfAAQgBgPgOAAQgPAAgBAPg");
	this.shape_21.setTransform(126.9,584.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C2329").s().p("AgDAdQgDgDAAgJIAAgcIgLAAIAAgHIALAAIAAgPIAIAAIAAAPIAPAAIAAAHIgPAAIAAAZQAAAHABACQACADAFAAQADAAAEgCIABAIIgKACQgIAAgDgFg");
	this.shape_22.setTransform(121.6,584.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C2329").s().p("AgQAYQgFgFAAgHQAAgRAfAAIAEAAIAAgCQgBgLgNAAQgHAAgHAGIgFgGQAHgIAMAAQAWAAAAAWIABAeIgIAAIgBgIIAAAAQgGAJgLAAQgIAAgFgDgAgMALQAAAJALAAQAOAAABgPIAAgEIgJAAQgRAAAAAKg");
	this.shape_23.setTransform(116.5,584.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C2329").s().p("AAQAnIgVgjIgLAAIAAAjIgKAAIAAhNIAUAAQAOAAAGAEQAKAEAAAOQAAAQgTADIAWAkgAgQgEIAIAAQAKAAAEgBQAIgDAAgIQAAgOgRAAIgNAAg");
	this.shape_24.setTransform(110.3,583.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C2329").s().p("AgZAeIAGgHQAJAJAKAAQASAAAAgVIAAgHQgFAKgNAAQgLAAgHgIQgIgGAAgMQAAgMAIgHQAHgIALAAQANAAAFAKIAAgIIAJAAIAAAwQAAAdgbAAQgPAAgKgKgAgMgZQgFAFAAAIQAAAIAGAEQAEAGAHAAQAIAAAGgGQAFgEgBgIQAAgIgEgFQgGgGgIAAQgHAAgFAGg");
	this.shape_25.setTransform(99.6,586.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C2329").s().p("AAOAbIAAgfQAAgNgMAAQgPgBAAAUIAAAZIgIAAIgBgzIAIAAIABAJQAFgLALABQATAAAAAUIAAAgg");
	this.shape_26.setTransform(93,584.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1C2329").s().p("AgDAnIAAgzIAHAAIAAAzgAgFggQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_27.setTransform(88.4,583.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C2329").s().p("AgaAnIAAhMIAJAAIAAAIQAIgJAJAAQAMAAAIAHQAHAIAAAMQAAALgHAHQgIAIgLAAQgNAAgFgLIAAAjgAgNgYQgEAFAAAIQAAAIAEAFQAGAGAHgBQAHABAGgGQAFgFAAgIQAAgIgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_28.setTransform(83.6,586);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C2329").s().p("AgaAnIAAhMIAIAAIAAAIQAJgJAJAAQAMAAAHAHQAIAIAAAMQAAALgIAHQgGAIgMAAQgNAAgGgLIAAAjgAgMgYQgGAFAAAIQAAAIAGAFQAEAGAIgBQAIABAFgGQAFgFAAgIQAAgIgFgFQgFgGgIAAQgIAAgEAGg");
	this.shape_29.setTransform(76.6,586);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C2329").s().p("AgDAnIAAgzIAHAAIAAAzgAgFggQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_30.setTransform(71.5,583.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1C2329").s().p("AAOAqIAAgfQAAgNgMAAQgPAAAAATIAAAZIgJAAIAAhTIAJAAIAAAnQAGgIAKAAQATAAAAAUIAAAgg");
	this.shape_31.setTransform(66.8,583.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1C2329").s().p("AgZAeIAIgHQAFAJAMAAQAGAAAEgDQAGgEAAgGQAAgHgFgDQgDgCgLgEQgUgFAAgPQAAgLAIgGQAIgGAJAAQAOAAAJAJIgIAHQgFgIgKAAQgFAAgFAEQgFADAAAHQAAAFAEADQADADAIADQAMAEAEACQAIAGAAAKQAAALgJAHQgHAFgKAAQgRAAgIgLg");
	this.shape_32.setTransform(60.4,583.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C2329").s().p("AgEAFQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgGAGABQAHgBAAAGQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgDgBg");
	this.shape_33.setTransform(52.2,586.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1C2329").s().p("AgZAeIAIgHQAGAJALAAQAGAAAEgDQAGgEAAgGQAAgHgFgDQgDgCgLgEQgUgFAAgPQAAgLAIgGQAIgGAJAAQAOAAAJAJIgIAHQgFgIgKAAQgFAAgFAEQgFADAAAHQAAAFAEADQADADAIADQAMAEAEACQAIAGAAAKQAAALgJAHQgHAFgKAAQgRAAgIgLg");
	this.shape_34.setTransform(47.3,583.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1C2329").s().p("AgGAAQABgGAFABQAHgBgBAGQABAGgHAAQgFAAgBgGg");
	this.shape_35.setTransform(42.5,586.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C2329").s().p("AgWAeQgGgIAAgOIAAgvIAJAAIAAAuQAAAYATAAQAUAAAAgYIAAguIAJAAIAAAvQAAAggdAAQgOAAgIgKg");
	this.shape_36.setTransform(36.8,583.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1C2329").s().p("AAOAaIgOgnIAAAAIgNAnIgJAAIgQgzIAJAAIAMAnIAOgnIAIAAIANAnIAMgnIAJAAIgQAzg");
	this.shape_37.setTransform(25.3,584.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1C2329").s().p("AgTATQgHgHAAgMQAAgLAHgIQAIgHALAAQAMAAAIAHQAIAIAAALQAAAMgIAHQgIAIgMAAQgLAAgIgIgAgMgMQgFAFAAAHQAAAIAFAGQAFAGAHgBQAIABAFgGQAFgGABgIQgBgHgFgFQgFgGgIAAQgHAAgFAGg");
	this.shape_38.setTransform(17.7,584.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1C2329").s().p("AgVAnIAAhNIAJAAIAABEIAiAAIAAAJg");
	this.shape_39.setTransform(11.8,583.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(21));

	// Layer 4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgXRAuuMAujAAAMAAAhdbMgujAAAg");
	this.shape_40.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(21));

	// Layer 5
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgjAmIAAhLIBIAAIAABLg");
	this.shape_41.setTransform(218.9,169.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAjB/IAAidQABgKgCgJIgDgMQgGgJgNABQgNgBgMAHQgNAFgJAKIAACvIhDAAIAAj5IA+AAIAAAVQAQgKARgIQARgHATAAQATAAAOAHQAOAGAKAMQAIAMAFAPQAEAQABASIAACng");
	this.shape_42.setTransform(199.2,160.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghCtIAAj3IBDAAIAAD3gAghhtIAAg/IBBAAIAAA/g");
	this.shape_43.setTransform(180,155.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AghCrIAAlVIBDAAIAAFVg");
	this.shape_44.setTransform(168.2,156);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag8B4QgPgGgKgLQgJgMgEgPQgEgPgBgSIAAipIBEAAIAACgQAAAVAGAIQAEAIAPAAQANAAAMgHQAMgGAJgJIAAivIBDAAIAAD4Ig+AAIAAgVQgQALgQAHQgQAIgVAAQgTAAgNgHg");
	this.shape_45.setTransform(149.1,160.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgvB2QgNgGgLgKQgLgKgMgRIAugjIAKAOIAMALQAHAGAIADQAIADAIAAIAKgBQAGgBAEgDQAEgCADgEQACgFAAgFQABgKgKgFIgPgIIgXgJQgagKgXgPQgWgRAAgkQAAgSAHgOQAGgOANgJQALgJAPgFQAPgFARAAQAcAAAWAKQAVAKATAWIgrAmQgJgKgLgJQgLgJgNAAQgJAAgJAEQgIADgBAMQAAAIAMAHQALAGALAEIAZAJQAMAEAMAHQAKAGAKAJQAQAWABAfQAAAhgaAVQgaATgoAAQgaAAgZgLg");
	this.shape_46.setTransform(125.7,160.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAkB/IAAidQgBgKgBgJIgEgMQgFgJgNABQgNgBgMAHQgNAFgJAKIAACvIhDAAIAAj5IA+AAIAAAVQAPgKASgIQAQgHAUAAQATAAAOAHQAOAGAKAMQAIAMAFAPQAFAQAAASIAACng");
	this.shape_47.setTransform(103.1,160.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkCrIAAlVIBJAAIAAFVg");
	this.shape_48.setTransform(84,156);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAkB/IAAidQAAgKgCgJIgEgMQgFgJgNABQgNgBgMAHQgMAFgKAKIAACvIhEAAIAAj5IA/AAIAAAVQAQgKARgIQARgHATAAQAUAAAOAHQANAGAJAMQAKAMAEAPQAEAQAAASIAACng");
	this.shape_49.setTransform(49.6,160.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhPBdQgdgjgBg6QABg5AdgjQAdgkAyAAQAyAAAeAkQAdAjAAA5QAAA6gdAjQgeAkgyAAQgyAAgdgkgAgVhAQgJAHgFALQgDALgBANIgCAWIACAXQABANADALQAFALAJAIQAHAHAOAAQAOAAAJgHQAHgIAFgLQAFgLABgMIABgYQAAgkgLgSQgKgSgVAAQgOAAgHAIg");
	this.shape_50.setTransform(25.4,160.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhPBdQgdgjgBg6QABg5AdgjQAegkAxAAQAyAAAeAkQAeAjAAA5QAAA6geAjQgeAkgyAAQgxAAgegkgAgVhAQgJAHgFALQgEALAAANIgCAWIACAXQAAANAEALQAFALAJAIQAHAHAOAAQAOAAAJgHQAHgIAFgLQAEgLACgMIAAgYQAAgkgKgSQgJgSgWAAQgOAAgHAIg");
	this.shape_51.setTransform(214.6,33.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAXCmQgcAAgRgOQgSgPAAgeIAAiJIghAAIAAg4IAhAAIAAhPIBDAAIAABPIAvAAIAAA4IgvAAIAACBQAAAIAEABQAEACAHAAQAIAAAHgCIARgEIAAA6IgOACIgKACIgMAAIgPAAg");
	this.shape_52.setTransform(195.1,29.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhuCrIAAlQIBBAAIAAAQQAMgKAOgFQAOgGAPAAQAwAAAaAmQAbAlAAA8QAAA0gcAjQgdAkgrAAQgOAAgOgGQgOgFgLgKIAABogAgZhtQgIAFgJAJIAABtQAIAHAJAFQAKAGALAAQAOAAAKgHQAJgHAFgLQAFgKACgNQACgMAAgMQAAgSgDgOQgDgNgHgKQgLgSgWAAQgNAAgJAEg");
	this.shape_53.setTransform(161.7,37.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag8B4QgPgGgJgLQgKgMgEgPQgEgPAAgSIAAipIBDAAIAACgQAAAVAGAIQAFAIAOAAQANAAAMgHQAMgGAIgJIAAivIBFAAIAAD4Ig/AAIAAgVQgQALgRAHQgPAIgVAAQgTAAgNgHg");
	this.shape_54.setTransform(135.4,33.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvB3QgVgLgNgSQgMgSgHgXQgGgYAAgZQAAgZAGgXQAHgYANgRQANgSAVgLQAUgKAcAAQAsAAAcAgQAOAPAIAUQAJAUAAAYIAAAfIiQAAIAEAWQACALAFAIQAFAIAIAFQAIAFANAAQARAAAMgIQAMgJAKgNIAyAfQgLARgMAKQgLAKgNAHQgYALgkAAQgbAAgUgKgAAqghQgCgTgKgMQgKgMgTAAQgJAAgHADQgIAEgEAFQgFAGgCAIIgEARIBQAAIAAAAg");
	this.shape_55.setTransform(96.8,33.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgiB8IhFj3IBEAAIAjCSIAkiSIBEAAIhHD3g");
	this.shape_56.setTransform(75.3,33.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag9B8QgNgFgJgJQgJgJgFgMQgGgNAAgPQAAgmAcgXQAUgPAXgHQAWgHAXgEIAVgDIAAgOQAAgOgJgGQgJgGgMAAQgSAAgLAJQgMAIgJAPIgtgiQAQgaAZgMQAZgMAdAAQA0AAAXAZQAWAYAAA0IAAB0QAAANACAIQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgBACIAAAKIg8AAIgDgRQgSALgRAFQgQAFgUAAQgQAAgMgFgAANAQQgMACgKAFQgLAEgHAIQgIAHAAANQAAAKAGAGQAFAGALAAQANAAAMgIIAWgOIAAgsIgVAFg");
	this.shape_57.setTransform(52.8,33.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhECcQgSgKgOgQQgPgQgKgZIA9gaIAMAWQAHAKAIAGQAIAHALAEQALAEANAAQAKAAAJgCQAJgBAHgFQAHgEAEgIQAFgHgBgMQABgRgTgLQgTgNgagLQg1gUgbgUQgbgYAAgpQAAgpAggbQAhgbAwAAQAoAAAfAUQAQAKANAPQANAPAKAYIhEAUQgJgTgMgNQgNgMgWAAIgPACQgHABgGAEQgHADgDAHQgFAGAAAIQABAHAEAHQAEAGALAGQAWANAbAJQAmAOAgAWQAgAZAAAuQAAAzggAbQggAbg6AAQgkAAgkgUg");
	this.shape_58.setTransform(27.6,28.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AjsFUIF8qnIBiAAIl9KngACKE+QgfgNgXgYQgYgXgNgfQgNggAAgkQAAgiANgfQAOgfAYgWQAXgYAfgNQAfgMAjAAQAiAAAfAMQAgANAXAYQAYAYANAfQAOAgAAAjQAABFgzAyQg0AyhEgBQgkAAgfgNgACgB2QgTASAAAcQAAAaATASQAUASAaAAQAZAAATgTQATgUAAgaQAAgagTgSQgUgSgYAAQgbAAgTATgAkPgDQgfgOgXgXQgXgYgNgeQgOggAAgjQAAgkAOgeQAOgeAXgXQAYgYAfgNQAfgNAiAAQAjAAAfANQAfAOAYAXQAYAYANAgQANAeAAAjQAABHgzAwQgyAyhGAAQgjAAgggNgAj4jMQgTAUAAAaQAAAbATASQATATAaAAQAaAAATgUQASgUAAgaQAAgZgSgTQgTgTgaAAQgbAAgSATg");
	this.shape_59.setTransform(162.4,93.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ah3E2QgvgfgcgxQgcgxgKg8QgLg8AAg8QAAg8ALg9QAKg8AcgxQAcgxAvgeQAvgfBIAAQBJAAAvAfQAvAeAcAxQAbAxALA8QALA9AAA8QAACeg9BZQg9Bch6AAQhIAAgvgegAhRinQgbA5AABvQAABvAbA4QAZA4A4ABQA5gBAZg4QAag4AAhvQAAhvgag5QgZg4g5AAQg4AAgZA4g");
	this.shape_60.setTransform(95.6,93.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AirEIQghgngRg4QgQg5AAhLQgBiuBOhkQBOhmCDAAQAvAAAqAOQAqAOAnAbIg8BvQgYgVgbgQQgcgOggABQhBAAgsA7QgbAigMBHQAcgVAhgJQAhgKAhABQAwAAAoAQQAnARAbAeQAcAdAPAnQAPApAAAwQgBBghDA+QhBA8hnAAQhpAAhFhMgAg8AiQgaASgRAgQADAaAHAaQAGAZANAUQAMATAVAMQAUANAgAAQAtgBAYgdQAXgcABgsQgBg0gZgbQgOgOgSgHQgSgHgaAAQgkAAgaASg");
	this.shape_61.setTransform(41.2,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(21));

	// 
	this.text = new cjs.Text("", "12px 'AvenirLTStd-Heavy'");
	this.text.lineHeight = 19;
	this.text.parent = this;
	this.text.setTransform(21.6,101.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(21));

	// White box
	this.instance = new lib.whiterect("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(118,299.9,1,1,0,0,0,81,27.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).wait(2));

	// Save Now
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAdA+IgdhUIAAAAIgaBUIggAAIgrh7IAhAAIAbBWIAAAAIAahWIAhAAIAbBWIAAAAIAahWIAfAAIgqB7g");
	this.shape_62.setTransform(168.6,301.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgiA5QgPgIgIgPQgJgOAAgUQAAgSAJgPQAIgPAPgIQAQgIASAAQATAAAPAIQAPAIAJAPQAJAPABASQgBAUgJAOQgJAPgPAIQgPAIgTAAQgSAAgQgIgAgSgfQgJAFgEAJQgEAIgBAJQABAKAEAJQAEAHAJAGQAIAFAKABQALgBAIgFQAJgGAEgHQAEgJAAgKQAAgJgEgIQgEgJgJgFQgIgFgLAAQgKAAgIAFg");
	this.shape_63.setTransform(150.5,301.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AApBbIhaiLIAAAAIAACLIggAAIAAi1IArAAIBXCHIAAAAIAAiHIAhAAIAAC1g");
	this.shape_64.setTransform(132.3,298.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAFBBQgSAAgQgIQgPgIgJgPQgJgPAAgTQAAgTAJgPQAJgOAPgIQAQgIASAAQARAAANAHQANAIAHAPQAIAPAAAVIAAAJIheAAQACANAJAIQAJAIAMAAQAMAAAIgFQAIgEAGgIIAWARQgLANgNAGQgNAGgNAAIgCAAgAAggMQAAgNgJgIQgIgIgPAAQgNAAgIAIQgIAIgCANIA/AAIAAAAg");
	this.shape_65.setTransform(106.9,301.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgPA+Igyh7IAhAAIAhBWIAAAAIAhhWIAgAAIgxB7g");
	this.shape_66.setTransform(92.8,301.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AghA9QgKgEgGgJQgHgIAAgMQAAgPAIgJQAHgHAMgFQAMgEAOgBQAMgBAMAAIAIAAIAAgDQAAgMgIgGQgIgGgMAAQgJAAgJADQgIAEgHAGIgQgQQALgLANgFQAOgEAOAAQATAAALAGQALAGAFAJQAFAJABAKQABAJAAAHIAABGIgcAAIAAgRIgBAAQgHALgKAEQgKAFgMAAQgLAAgLgEgAAGAHQgHABgHACQgHABgFAEQgFAEAAAHQAAAGAEADQADADAFACIAKACQAPAAAHgIQAIgIAAgNIAAgHIgGAAIgPABg");
	this.shape_67.setTransform(78.8,301.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgjBbQgQgGgLgNIAYgYQAGAJAJAFQALAFAKAAQAHAAAHgDQAIgDAEgFQAFgGABgIQgBgKgGgGQgGgFgKgEIgUgHQgLgEgKgFQgKgFgGgKQgGgJgBgRQABgSAJgNQAKgMAPgGQAPgGARAAQAOAAAOAEQANAFAMAKIgYAZQgFgHgJgEQgJgEgKAAQgGAAgHADQgGACgFAFQgEAGgBAIQABAJAGAFQAGAGAKADIAUAHQALADAKAGQAKAFAGAKQAGAKABAQQgBAUgJANQgJANgPAGQgPAGgSAAIgCAAQgQAAgOgFg");
	this.shape_68.setTransform(64.5,298.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},14).wait(7));

	// purple rect
	this.instance_1 = new lib.purplerect("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118,1.5,1,0.018,0,0,0,81,27.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:27.6,scaleY:5.94,y:165},4).to({regY:27.4,scaleY:1,y:299.9},4).to({startPosition:0},5).to({startPosition:0},5).to({_off:true},1).wait(1));

	// btn 1
	this.btn1 = new lib.SaveNowbtn1();
	this.btn1.parent = this;
	this.btn1.setTransform(118,299.9,1,1,0,0,0,81,27.4);
	this.btn1._off = true;
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.SaveNowbtn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(20).to({_off:false},0).wait(1));

	// Lantus Image copy 6
	this.instance_2 = new lib.LantusImagecopy6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158.5,281,1,1,0,0,0,158.5,318.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	// Layer 10
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("A3bH+IAAv7MAu3AAAIAAP7g");
	this.shape_69.setTransform(150,525);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(21));

	// Layer 11
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#6ACADA","#40B1CD"],[0,1],0,252.5,0,-252.5).s().p("EgXbAndMAAAhO5MAu3AAAMAAABO5g");
	this.shape_70.setTransform(150,252.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(21));

	// Layer 12
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5DBBD2").s().p("EgMfAmcMAAAhM3IY/AAMAAABM3g");
	this.shape_71.setTransform(80,246);

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,262.1,317,638);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_CDI_Banner_2_atlas_.png?1485211907174", id:"300x600_CDI_Banner_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;