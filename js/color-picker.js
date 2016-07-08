(function($){
  var mainHtml = '<div class="wrap"><section id="main_pane"></section></div>'
  var flatPicker = {
    template : `
      <div class="color_panel" style="background-color: rgb(0, 149, 255);">
        <div class="color_panel_overlay1">
            <div class="color_panel_overlay2">
                <div class="colpick_selector_outer" style="left: 156px; top: 0px;">
                    <div class="colpick_selector_inner"></div>
                </div>
            </div>
        </div>
      </div>
      <div class="band_pane">
        <div class="color_bands">
          <div class="color_band">
            <span id="color_band_select"></span>
          </div>
          <div class="opacity_band">
            <span id="opacity_band_select"></span>
          </div>
        </div>
        <div id="color_preview"></div>
      </div>
      <div class="value_pane">
        <div class="color_value Hex_value">
          <input type="text" maxlength="6" size="8" value="2253BB">
          <label for="">Hex</label>
        </div>
        <div class="color_value r_value">
          <input type="text" maxlength="6" size="3" value="34">
          <label for="">R</label>
        </div>
        <div class="color_value g_value">
          <input type="text" maxlength="6" size="3" value="83">
          <label for="">G</label>
        </div>
        <div class="color_value b_value">
          <input type="text" maxlength="6" size="3" value="187">
          <label for="">B</label>
        </div>
        <div class="color_value a_value">
          <input type="text" maxlength="6" size="3" value="100">
          <label for="">A</label>
        </div>
      </div>
    `,
    //initial flatPicker when flat mode is choosed
    init(options){
      this.initDom(options);
      this.pane = $('#main_pane')
      this.colorBand = this.pane.find('.color_band');
      this.colorBandWidth = this.colorBand.width();
      this.opacityBand = this.pane.find('.opacity_band');
      
      this.colorBtn = $('#color_band_select');
      this.colorBtnWidth = this.colorBtn.width();
      this.opacityBtn = $('#opacity_band_select');

      this.initEvent();
      this.renderColBand(options.colBandValue || 0);
    },
    initDom(){
      //create a dom node in memory rather than page by template
      var tpl = $(this.template);
      //do sth. on template by options
      // tpl.find().html('123123123123')
      
      //fill tab content with new template
      $('#main_pane').html(tpl)
    },
    initEvent(){
      var pane = $('#main_pane')
      var col_select = pane.find('.color_band');
      var opc_select = pane.find('#opacity_band_select');
      this.colorBand.mousedown(this.downColBand.bind(this));
      this.opacityBand.mousedown(this.downOpaBand.bind(this));
      opc_select.mousedown(function(event) {
        console.log("msg2")
      });
    },
    renderColBand(offsetX){
      // 入口判断,发生变化再render
      // options里 关于色带,存left就可以了,内部再计算
      if(offsetX != this.colBandValue){
        this.colBandValue = offsetX;
        this.colorBtn.css('left', offsetX);
        var percent = 360 - 360 * offsetX / (this.colorBandWidth - this.colorBtnWidth);
        console.log(percent)
      }
      
    },
    downColBand(e){
      $(document).mousemove(this.moveColBand.bind(this));
      $(document).one('mouseup',this.upColBand.bind(this));
    },
    moveColBand(e){
      var pageX = e.pageX;
      var left = this.colorBand.offset().left;
      var offsetX = pageX - left;
      if(offsetX <= 0){
        offsetX = 0;
      }else if(offsetX + this.colorBtnWidth > this.colorBandWidth){
        offsetX = this.colorBandWidth - this.colorBtnWidth;
      }

      this.renderColBand(offsetX);
    },
    upColBand(e){
      $(document).off('mousemove');
      console.log('cancel');
    },
    downOpaBand(){},
    //destroy flatPicker when other mode is choosed
    destroy(){

    }
  }
  var linearPicker = {
    template : `
      <div style="height:200px;font-size:14px;">
        <span id="test2">22222</span>
      </div>
    `,
    //initial linearPicker when linearPicker mode is choosed
    init(options){
      this.initDom(options);
      this.initEvent();
    },
    initDom(){
      //create a dom node in memory rather than page by template
      var tpl = $(this.template);
      //do sth. on template by options
      // tpl.find().html('123123123123'
      
      //fill tab content with new template
      $('#main_pane').html(tpl)
    },
    initEvent(){

    },
    //destroy linearPicker when other mode is choosed
    destroy(){

    }
  }
  var radialPicker = {
    template : `
      <div style="height:200px;font-size:14px;">
        <span id="test3">3333</span>
      </div>
    `,
    //initial radialPicker when radialPicker mode is choosed
    init(options){
      this.initDom(options);
      this.initEvent();
    },
    initDom(){
      //create a dom node in memory rather than page by template
      var tpl = $(this.template);
      //do sth. on template by options
      // tpl.find().html('123123123123'
      
      //fill tab content with new template
      $('#main_pane').html(tpl)
    },
    initEvent(){

    },
    //destroy radialPicker when other mode is choosed
    destroy(){

    }
  }
  var availableMode = [flatPicker, linearPicker, radialPicker];
  
  var colorPicker = function(){
    return {
      //render view by options
      init: function(options){
        //boundary treatment
        var options = options || {};
        this.modeNum = options.modeNum || 0;
        this.history = options.history || [
          // flat
          {

          },
          // linear
          {

          },
          // radial
          {

          }
        ]
        
        this.currentMode = availableMode[this.modeNum];
        this.initDom();
        this.initEvent();
      },
      initDom: function(){
        var colorPicker = $(mainHtml)
        $(document.body).append(colorPicker)
        this.currentMode.init(this.history[this.modeNum]);
      },
      initEvent: function(){
        var modeBtns = $('.color_mode')
        var main_pane = $('#main_pane')
        //bind click event on mode buttons
        modeBtns.each(function(modeNum, el) {
          
          $(el).on('click', function(event) {
            //change className of buttons
            modeBtns.each(function(index, el) {
              $(el).removeClass('active')
            });
            $(el).addClass('active')
            
            //changeMode
            //destroy last mode
            this.currentMode.destroy();
            //change current mode
            this.modeNum = modeNum;
            this.currentMode = availableMode[modeNum];
            //init new mode
            this.currentMode.init(this.history[modeNum]);
            
            // console.log(modeTabs[modeNum])
          }.bind(this));

        }.bind(this));
      },
    }
	}
  
  $.fn.colorPick = function(){
    var picker = new colorPicker();
    picker.init();
    return picker;
  }

  //Color space convertions
  var hexToRgb = function (hex) {
    var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
    return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
  };
  var hexToHsb = function (hex) {
    return rgbToHsb(hexToRgb(hex));
  };
  var rgbToHsb = function (rgb) {
    var hsb = {h: 0, s: 0, b: 0};
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
      else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
      else hsb.h = 4 + (rgb.r - rgb.g) / delta;
    } else hsb.h = -1;
    hsb.h *= 60;
    if (hsb.h < 0) hsb.h += 360;
    hsb.s *= 100/255;
    hsb.b *= 100/255;
    return hsb;
  };
  var hsbToRgb = function (hsb) {
    var rgb = {};
    var h = hsb.h;
    var s = hsb.s*255/100;
    var v = hsb.b*255/100;
    if(s == 0) {
      rgb.r = rgb.g = rgb.b = v;
    } else {
      var t1 = v;
      var t2 = (255-s)*v/255;
      var t3 = (t1-t2)*(h%60)/60;
      if(h==360) h = 0;
      if(h<60) {rgb.r=t1; rgb.b=t2; rgb.g=t2+t3}
      else if(h<120) {rgb.g=t1; rgb.b=t2; rgb.r=t1-t3}
      else if(h<180) {rgb.g=t1; rgb.r=t2; rgb.b=t2+t3}
      else if(h<240) {rgb.b=t1; rgb.r=t2; rgb.g=t1-t3}
      else if(h<300) {rgb.b=t1; rgb.g=t2; rgb.r=t2+t3}
      else if(h<360) {rgb.r=t1; rgb.g=t2; rgb.b=t1-t3}
      else {rgb.r=0; rgb.g=0; rgb.b=0}
    }
    return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
  };
  var rgbToHex = function (rgb) {
    var hex = [
      rgb.r.toString(16),
      rgb.g.toString(16),
      rgb.b.toString(16)
    ];
    $.each(hex, function (nr, val) {
      if (val.length == 1) {
        hex[nr] = '0' + val;
      }
    });
    return hex.join('');
  };
  var hsbToHex = function (hsb) {
    return rgbToHex(hsbToRgb(hsb));
  };
  
}(jQuery))
  
})