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
        console.log(offsetX)
        this.colorBtn.css('left', offsetX);  
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
  
}(jQuery))

$(function(){
  
})