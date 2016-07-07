(function($){
  var mainHtml = '<div class="wrap"><section id="main_pane"></section></div>'
  var flatPicker = {
    template : '<div style="height:200px;"><span id="test"></span></div>',
    getTemplate: function(options){
      //create a dom node in memory by template
      var tpl = $(this.template);
      //do sth. on template by options
      tpl.find('#test').html('123123123123')
      //return the modified template
      return tpl.html();
    },
    //initial flatPicker when flat mode is choosed
    init(){

    },
    //destroy flatPicker when other mode is choosed
    destroy(){

    }
  }
  var linearPicker = {
    template : '<div style="height:200px;"><span id="test"></span></div>',
    getTemplate: function(options){
      //create a dom node in memory by template
      var tpl = $(this.template);
      //do sth. on template by options
      tpl.find('#test').html('123123123123')
      //return the modified template
      return tpl.html();
    },
    //initial linearPicker when linearPicker mode is choosed
    init(){

    },
    //destroy linearPicker when other mode is choosed
    destroy(){

    }
  }
  var radialPicker = {
    template : '<div style="height:200px;"><span id="test"></span></div>',
    getTemplate: function(options){
      //create a dom node in memory by template
      var tpl = $(this.template);
      //do sth. on template by options
      tpl.find('#test').html('123123123123')
      //return the modified template
      return tpl.html();
    },
    //initial radialPicker when radialPicker mode is choosed
    init(){

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
        console.log(this)
        //boundary treatment
        var options = options || {};
        var modeNum = options.modeNum || 0;
        var history = Object.assign({}, options.history, {
          flat: {},
          linear: {},
          radial: {}
        })
        this.currentMode = availableMode[modeNum];
        console.log(this)
        this.initDom();
        this.initEvent();
      },
      initDom: function(){
        var colorPicker = $(mainHtml)
        $(document.body).append(colorPicker)
        this.currentMode.init();
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
            console.log(this)
            this.currentMode.destroy();
            console.log(modeNum)
            //change current mode
            this.currentMode = availableMode[modeNum];

            this.currentMode.init();
            
            // console.log(modeTabs[modeNum])
          
          }).bind(this);
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