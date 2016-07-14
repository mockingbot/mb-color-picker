(function($){
  var mainHtml = `
    <div class="color_picker">
      <section class="mode_pane">
        <span class="color_mode flat_color"></span>
        <span class="color_mode linear_gradient"></span>
        <span class="color_mode radial_gradient"></span>
        <span class="color_mode pattern_fill"></span>
        <span class="color_mode transparent_color"></span>
      </section>
      <section id="main_pane">
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
          <div class="color_preview_layer">
            <div id="color_preview"></div>
          </div>
        </div>
        <div class="value_pane">
          <div class="color_value Hex_value">
            <input type="text" maxlength="6" size="7" value="2253BB">
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
            <input type="text" maxlength="6" size="4" value="100">
            <label for="">A</label>
          </div>
        </div>
      </section>
      <section class="color_bar">
        <div class="history_pane">
          <div class="colpick_prev1 colpick_prev" style="background-color: rgb(98, 0, 255);"></div>
          <div class="colpick_prev2 colpick_prev" style="background-color: rgb(98, 0, 255);"></div>
          <div class="colpick_prev3 colpick_prev" style="background-color: rgb(98, 0, 255);"></div>
          <div class="colpick_prev4 colpick_prev" style="background-color: rgb(98, 0, 255);"></div>
          <div class="colpick_prev5 colpick_prev" style="background-color: rgb(98, 0, 255);"></div>
          <div class="colpick_prev6 colpick_prev" style="background-color: rgb(98, 0, 255);"></div>
          <div id="colpick_transparent" class="colpick_prev"></div>
        </div>
        <div id="colpick_submit" class="colpick_field">OK</div>
      </section>
      <section class="color_show"></section>
    </div>`;

  var flatPicker = {
    //initial flatPicker when flat mode is choosed
    init(options){
      this.state = {
        colBandValue: options.colBandValue || 0,
        opaBandValue: options.opaBandValue || 165,
        panelLeft: options.panelLeft || 202,
        panelTop: options.panelTop || 0
      }
      this.previewPanel = $('color_show');
    },
    render(state){
      console.log(state)
      var cssValue = state.cssValue;
      this.previewPanel.css('backgroundImage', cssValue);
    },
    //destroy flatPicker when other mode is choosed
    destroy(){

    }
  }
  var linearPicker = {
    bandtpl : `
      <div class="linear_band">
        <span class="linear_band_select"></span>
        //这里要将dom与数据互转,注意数据与dom顺序可能不同,数据是升序
      </div>`,
    showtpl : `
      <section class="color_show">
      //这里的dom要做点击/拖动等复杂操作
      </section>
    `,
    //initial linearPicker when linearPicker mode is choosed
    init(options){
      this.state = {
        colBandValue: options.colBandValue || 0,
        opaBandValue: options.opaBandValue || 165,
        panelLeft: options.panelLeft || 202,
        panelTop: options.panelTop || 0
      }
      this.hsb = {};
      this.initDom();
      this.render();
    },
    initDom(){
      this.band = $(this.bandtpl)
      $('.mode_pane').after(this.band)
      $('.color_show').html('我是线性渐变的内容')
    },
    render(state){
      console.log(state)
      // var cssValue = state.cssValue;
      // this.previewPanel.css('backgroundImage', cssValue);
    },
    //destroy flatPicker when other mode is choosed
    destroy(){
      this.band.remove()
    }
  }
  var radialPicker = {
    radialtpl : `
      <div class="linear_band">
        <span class="linear_band_select"></span>
        //这里要将dom与数据互转,注意数据与dom顺序可能不同,数据是升序
      </div>`,
    showtpl : `
      <section class="color_show">
      //这里的dom要做点击/拖动等复杂操作
      </section>
    `,
    //initial linearPicker when linearPicker mode is choosed
    init(options){
      this.state = {
        colBandValue: options.colBandValue || 0,
        opaBandValue: options.opaBandValue || 165,
        panelLeft: options.panelLeft || 202,
        panelTop: options.panelTop || 0
      }
      this.hsb = {};
      this.initDom();
      this.render();
    },
    initDom(){
      this.band = $(this.radialtpl)
      $('.mode_pane').after(this.band)
      $('.color_show').html('我是线性渐变的内容')
    },
    render(state){
      console.log(state)
      // var cssValue = state.cssValue;
      // this.previewPanel.css('backgroundImage', cssValue);
    },
    //destroy flatPicker when other mode is choosed
    destroy(){
      this.band.remove()
    }
  }
  var availableMode = [flatPicker, linearPicker, radialPicker];
  
  var colorPicker = function(){
    return {
      //render view by options
      init: function(options){
        //boundary treatment
        var options = Object.assign({}, {
          modeNum: 0,
          shape: {
            type: 'rect',
            width: 200,
            height: 120
          },
          history: {
            flat: {
              colBandValue: 0,
              opaBandValue: 165,
              panelLeft: 202,
              panelTop: 0
            },
            linear: {
              colBandValue: 0,
              opaBandValue: 165,
              panelLeft: 202,
              panelTop: 0
            },
            radial: {
              colBandValue: 0,
              opaBandValue: 165,
              panelLeft: 202,
              panelTop: 0
            }
          }
        }, options);
        this.modeNum = options.modeNum;
        this.shape = options.shape;
        this.history = [options.history.flat, options.history.linear, options.history.radial];
        
        //使用state存放当前mode将要使用的数据
        this.state = this.history[this.modeNum]
        this.currentMode = availableMode[this.modeNum];
        this.initDom();
        this.initTabEvent();
        this.initEvent();
        this.hsb = {};
        this.render();
        this.currentMode.init(this.state);
      },
      initDom: function(){
        var colorPicker = $(mainHtml)
        this.colorPanel = colorPicker.find('.color_panel');
        this.point = colorPicker.find('#color_point');
        //slide band      
        this.colorBand = colorPicker.find('.color_band');
        this.opacityBand = colorPicker.find('.opacity_band');
        //slide btn
        this.colorBtn = colorPicker.find('#color_band_select');
        this.opacityBtn = colorPicker.find('#opacity_band_select');
        this.preview = colorPicker.find('#color_preview');

        this.hexBox = colorPicker.find('.Hex_value input');
        this.rBox = colorPicker.find('.r_value input');
        this.gBox = colorPicker.find('.g_value input');
        this.bBox = colorPicker.find('.b_value input');
        this.aBox = colorPicker.find('.a_value input');
        this.showPanel = colorPicker.find('.color_show');


        if(this.shape.type === 'rect'){
          colorPicker.find('.color_show').css({
            width: this.shape.width,
            height: this.shape.height
          });
        }
        $(document.body).append(colorPicker)
        //元素的宽高要到添加到dom后再计算
        this.btnWidth = this.colorBtn.width();
        this.bandWidth = this.colorBand.width();
        this.panelWidth = this.colorPanel.width();
        this.panelHeight = this.colorPanel.height();
      },
      initTabEvent: function(){
        var modeBtns = $('.color_mode');
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
            this.currentMode.init(this.state);
            
            // console.log(modeTabs[modeNum])
          }.bind(this));

        }.bind(this));
      },
      initEvent(){
        this.colorBand.mousedown(this.downBand.bind(this, this.colorBand, 'colBandValue'));
        this.opacityBand.mousedown(this.downBand.bind(this, this.opacityBand, 'opaBandValue'));
        this.colorPanel.mousedown(this.downPanel.bind(this));
      },
      render(){
        this.renderColBand();
        this.renderOpaBand();
        this.renderPanel();
        this.renderBox();
        this.currentMode.render(this.state);
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
        var rgb = hsbToRgb(this.hsb);
        var hex = rgbToHex(rgb);
        var rgba = 'rgba('+rgb.r+','+rgb.g+','+rgb.b+','+this.opacity+')';
        var gradient = `linear-gradient(to right, transparent, #${hex})`;
        this.rgb = rgb;
        this.hex = hex;
        this.rgba = rgba;
        console.log(this.opacityBand)
        console.log(gradient)
        this.opacityBand.css('backgroundImage', gradient)
        console.log(rgba)
        this.preview.css('backgroundColor', rgba)
      },
      renderBox(){
        this.hexBox.val(this.hex)
        this.rBox.val(this.rgb.r)
        this.gBox.val(this.rgb.g)
        this.bBox.val(this.rgb.b)
        this.aBox.val(this.opacity)
      },
      //使用bind时event是最后一个参数
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
        //re-render if need
        if(offsetX != this.state[propName]){
          this.state[propName] = offsetX;
          this.render();
        }
      },
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
    }
	}
  
  $.fn.colorPick = function(options){
    var picker = new colorPicker();
    picker.init(options);
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