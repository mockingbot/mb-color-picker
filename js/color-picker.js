(function($){
  var mainHtml = '<div class="wrap"><section id="main_pane"></section></div>'
  var flatPicker = {
    template : `
      <div class="color_panel" style="background-color: rgb(0, 149, 255);">
        <div class="color_panel_overlay1">
            <div class="color_panel_overlay2">
                <span id="color_point"></span>
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
      this.pane = $('#main_pane');
      this.colorPanel = this.pane.find('.color_panel');
      this.point = this.pane.find('#color_point');
      //slide band      
      this.colorBand = this.pane.find('.color_band');
      this.opacityBand = this.pane.find('.opacity_band');
      //slide band
      this.colorBtn = $('#color_band_select');
      this.opacityBtn = $('#opacity_band_select');
      this.preview = $('#color_preview')

      this.btnWidth = this.colorBtn.width();
      this.bandWidth = this.colorBand.width();
      this.panelWidth = this.colorPanel.width();
      this.panelHeight = this.colorPanel.height();

      this.initEvent();
      this.state = {
        colBandValue: options.colBandValue || 0,
        opaBandValue: options.opaBandValue || 165,
        panelLeft: options.panelLeft || 202,
        panelTop: options.panelTop || 0
      }
      this.hsb = {};
      this.render();
    },
    initDom(){
      //create a dom node in memory rather than page by template
      var tpl = $(this.template);
      //do sth. on template by options
      
      //fill tab content with new template
      $('#main_pane').html(tpl)
    },
    initEvent(){
      // this.colorBand.mousedown(this.downColBand.bind(this));
      this.colorBand.mousedown(this.downBand.bind(this, this.colorBand, 'colBandValue'));
      this.opacityBand.mousedown(this.downBand.bind(this, this.opacityBand, 'opaBandValue'));
      this.colorPanel.mousedown(this.downPanel.bind(this));
    },
    render(){
      this.renderColBand();
      this.renderOpaBand();
      this.renderPanel();
    },
    renderColBand(){
      var offsetX = this.state.colBandValue;
      this.colorBtn.css('left', offsetX);
      this.hsb.h = 360 - (offsetX * 360 * (1 / (this.bandWidth - this.btnWidth))) >> 0;
      var panelColor = '#' + hsbToHex({
        h: this.hsb.h,
        s: 100,
        b: 100
      });
      this.colorPanel.css('backgroundColor', panelColor);
      // console.log('h: ',this.hsb.h)
    },
    renderOpaBand(){
      var offsetX = this.state.opaBandValue;
      this.opacityBtn.css('left', offsetX);
      this.opacity = (offsetX * (1 / (this.bandWidth - this.btnWidth))).toFixed(2);
      // console.log('opacity: ',this.opacity)
    },
    renderPanel(){
      var offsetX = this.state.panelLeft;
      var offsetY = this.state.panelTop;
      this.point.css({
        left: offsetX,
        top: offsetY
      });
      this.hsb.s = (offsetX * 100 * (1 / this.panelWidth)) >> 0;
      this.hsb.b = 100 - (offsetY * 100 * (1 / this.panelHeight)) >> 0;
      // console.log(this.hsb.s, this.hsb.b)
      // console.log(hsbToRgb(this.hsb))
      var rgb = hsbToRgb(this.hsb);
      var rgba = 'rgba('+rgb.r+','+rgb.g+','+rgb.b+','+this.opacity+')';
      console.log(rgba)
      this.preview.css('backgroundColor', rgba)

    },
    //event是最后一个参数
    downBand(band, propName, e){
      this.moveBand(band, propName, e)

      $(document).mousemove(this.moveBand.bind(this, band, propName));
      $(document).one('mouseup',function(){
        $(document).off('mousemove');
        /* 这里做持久化 */
        // ....
      });
    },
    moveBand(band, propName, e){
      var pageX = e.pageX;
      var left = band.offset().left;
      //小于0, 则置0
      var offsetX = (pageX - left) > 0 ? (pageX - left) : 0;
      //大于band的宽度,则置为band的宽度
      if(offsetX + this.btnWidth > this.bandWidth){
        offsetX = this.bandWidth - this.btnWidth;
      }
      // console.log(offsetX)
      //re-render if need
      if(offsetX != this.state[propName]){
        this.state[propName] = offsetX
        this.render();  
      }
    },
  /*
    downColBand(e){
      $(document).mousemove(this.moveColBand.bind(this));
      $(document).one('mouseup',this.upColBand.bind(this));
    },
    moveColBand(e){
      var pageX = e.pageX;
      var left = this.colorBand.offset().left;
      //小于0, 则置0
      var offsetX = (pageX - left) > 0 ? (pageX - left) : 0;
      //大于band的宽度,则置为band的宽度
      if(offsetX + this.btnWidth > this.bandWidth){
        offsetX = this.bandWidth - this.btnWidth;
      }
      console.log(offsetX)
      //re-render if need
      if(offsetX != this.state.colBandValue){
        this.state.colBandValue = offsetX
        this.render();  
      }
    },
    upColBand(e){
      $(document).off('mousemove');
      console.log('cancel');
    },
    downOpaBand(e){
      $(document).mousemove(this.moveOpaBand.bind(this));
      $(document).one('mouseup',this.upOpaBand.bind(this));
    },
    moveOpaBand(e){
      var pageX = e.pageX;
      var left = this.opacityBand.offset().left;
      var offsetX = pageX - left;
      if(offsetX <= 0){
        offsetX = 0;
      }else if(offsetX + this.opacityBtnWidth > this.opacityBandWidth){
        offsetX = this.opacityBandWidth - this.opacityBtnWidth;
      }
      this.renderOpaBand(offsetX);
    },
    upOpaBand(e){
      $(document).off('mousemove');
      console.log('cancel');
    },
  */
    downPanel(e){
      this.movePanel(e)
      $(document).mousemove(this.movePanel.bind(this));
      $(document).one('mouseup',function(){
        $(document).off('mousemove');
        /* 这里做持久化 */
        // ....
      }.bind(this));
    },
    movePanel(e){
      var pageX = e.pageX;
      var pageY = e.pageY;
      var left = this.colorPanel.offset().left;
      var top = this.colorPanel.offset().top;
      var offsetX = (pageX - left) > 0 ? (pageX - left) : 0;
      var offsetY = (pageY - top) > 0 ? (pageY - top) : 0;
      if(offsetX > this.panelWidth){
        offsetX = this.panelWidth;
      }
      if(offsetY > this.panelHeight){
        offsetY = this.panelHeight;
      }
      if(offsetX != this.state.panelLeft || offsetY != this.state.panelTop){
        this.state.panelLeft = offsetX
        this.state.panelTop = offsetY
        this.render();
      }
    },
    upPanel(e){
      
      console.log('cancel');
    },
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
        $(modeBtns[this.modeNum]).addClass('active')
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