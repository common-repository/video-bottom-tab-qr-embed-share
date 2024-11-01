jQuery(document).ready(function ($) {
  var useragent = "api";


  var html = '<div id="qrmodal" class="modalsharesocial"><div class="modalsharesocial-content "> <span class="closesharesocial">×</span><div id="vbtabcontent" ></div></div></div>';
  $("body").append(html);


  var f = navigator.userAgent.search("Firefox");
  if (f > -1) {
    useragent = "web";
  }

  $("video").each(function (index, element) {


    var heightv = $(this).height();
    var title = $("h1").text();
    var link = $(this).find('Source:first').attr('src');

    var html = '<div class="vbtab"   > ';

    html += "<ul class='vbtabul'>";
    html += "<li   class='vbtabli qrcode' data-link='" + link + "'    class='qrcode'><i class='qrcodei'></i><span>qr-code</span></li>";
    html += "<li  class='vbtabli vediocode' data-link='" + link + "'  class='vediocode'><i class='code'></i><span>Embed</span></li>";
    html += "<li class='vbtabli vbtabshare dropdown'   class='dropdown'><i class='share'></i><span>Share </span> ";

    html += "<ul class='dropdown-content'>";
    html += "<li><a rel='nofollow' target='_blank' href='https://telegram.me/share/url?url=" + link + "'><i class='telegram'></i>Telegram  </a></li>";
    html += "<li><a rel='nofollow' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=" + link + "'><i class='facebook'></i>Facebook   </a></li>";
    html += "<li><a rel='nofollow' target='_blank' href='http://www.twitter.com/share?url=" + link + " '><i class='twitter'></i>twitter </a></li>";

    html += "<li><a rel='nofollow' target='_blank' href='https://plus.google.com/share?url=" + link + "'><i class='googleplus'></i> google-plus  </a></li>";

    html += "</li>";
    html += '<li><a rel="nofollow" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=' + link + '&title=' + title + '"><i class="linkedin"></i>linkedin</a> </li>';

    html += '<li><a rel="nofollow" target="_blank" href="https://' + useragent + '.whatsapp.com/send?text=' + link + '"><i class="whatsapp"></i> whatsapp</a></li>';

    html += "</ul>";
    html += "</li>";

    html += "</ul>";

    html += '</div>';


    $(html).insertAfter(element)
    //$(element).append(html)


  });


  $("body").on("click", '.qrcode', function () {

    var link = $(this).attr("data-link");
    $("#vbtabcontent").html('<img  src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + link + '&choe=UTF-8"/>');

    $("#qrmodal").css({
      display: "block"
    });

  });


  $("body").on("click", '.closesharesocial', function () {


    $(".modalsharesocial").css({
      display: "none"
    });

  });

  $("body").on("click", '.vediocode', function () {

    var link = $(this).attr("data-link");


    var html = '<div class="vbtabrow">';
    html += ' <div class="vbtabmd-6 vbtabxs-12">';
    html += ' <label >Display size   </label>';
    html += ' <select data-link="' + link + '" class="vbtabformcontrol" id="embedFrameSize" autofocus="autofocus">';
    html += '   <option value="640,360">640 × 360</option>';
    html += '  <option value="569,320">569 × 320</option>';
    html += '  <option value="480,270">480 × 270</option>';
    html += '  <option value="240,135">240 × 135</option>';
    html += ' <option value="responsive" selected="selected"> Responsive</option>';
    html += '  <option value="custom">Custom size</option>';
    html += ' </select>';

    html += '  </div>';
    html += '  <div class="vbtabxs-12 vbtabmd-5" id="embedCustomSize" ">';
    html += '   <div class="row pull-right-child text-center-all">';
    html += '    <div class="vbtabxs-5 no-padding-left ltr">';
    html += '    <label class="control-label">height</label>';
    html += '    <input class="vbtabformcontrol"  id="embedWidth" type="number" value="640">';

    html += '   </div>';
    html += '   <div class="vbtabxs-2 no-padding">';
    html += '     <i class="fa fa-close"></i>';
    html += '  </div>';
    html += '  <div class="form-group vbtabxs-5 no-padding-right ltr">';
    html += '    <label class="control-label">width</label>';
    html += '   <input class="vbtabformcontrol" autofocus="" id="embedHeight" type="number" value="340">';
    html += '   <p class="form-alert"></p>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    html += ' </div>';
    html += ' <br/>';
    html += '  <textarea id="embedClipboard" class="vbtabformcontrol m5top" rows="8"><style>.video_embed_frame {position: relative;}.video_embed_frame iframe {position: absolute; top: 0;left: 0;width: 100%;height: 100%;}</style><div class="video_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="' + link + '" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"> </iframe> </div> </textarea>';
    html += '  <p class="btndiv "> <br/>';
    html += '    <button class="vbtabbtn" type="button" id="embedClipboardcopy">';
    html += '       Save to clipboard ';
    html += '   </button>';
    html += ' </p>';
    html += ' </div>';
    $("#vbtabcontent").html(html);
    $("#qrmodal").css({
      display: "block"
    });

  });


  $("body").on("change", '#embedWidth', function () {


    var w = $(this).val();
    var h = $("#embedHeight").val();
    var link = $("#embedFrameSize").attr("data-link");
    var html = '<iframe src="' + link + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="' + w + '" height="' + h + '"></iframe>';
    $("#embedClipboard").val(html);
  })


  $("body").on("change", '#embedHeight', function () {


    var h = $(this).val();
    var w = $("#embedWidth").val();
    var link = $("#embedFrameSize").attr("data-link");
    var html = '<iframe src="' + link + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="' + w + '" height="' + h + '"></iframe>';
    $("#embedClipboard").val(html);
  })


  $("body").on("change", '#embedFrameSize', function () {


    $("#embedCustomSize").css({
      display: "none"
    });


    var val = $(this).val();
    var link = $(this).attr("data-link");
    if (val == "responsive") {

      var html = ' <style>.video_embed_frame{position:relative;}.video_embed_frame iframe {position:absolute;top:0;left:0;width:100%; height:100%;}</style><div class="video_embed_frame"><span style="display: block;padding-top: 57%"></span>';
      html += '<iframe src="' + link + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="100%" height="100%"></iframe></div>';
      $("#embedClipboard").val(html);

      return true;

    }

    if (val == "custom") {
      var w = $("#embedWidth").val();
      var h = $("#embedHeight").val();

      $("#embedCustomSize").css({
        display: "block"
      });
      var html = '<iframe src="' + link + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="' + w + '" height="' + h + '"></iframe>';
      $("#embedClipboard").val(html);
      return true;
    }


    var dim = val.split(",");
    var w = dim[0];
    var h = dim[1];

    var html = '<iframe src="' + link + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="' + w + '" height="' + h + '"></iframe>';
    $("#embedClipboard").val(html);


  });


  $("body").on("click", '#embedClipboardcopy', function () {


    $("#embedClipboard").select();
    document.execCommand("copy");

  });


});