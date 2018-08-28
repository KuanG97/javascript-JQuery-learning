function UploadImg(file) {
      var MAXWIDTH = 260;
      var MAXHEIGHT = 180;
      var div = document.getElementById('preview');
      if (file.files && file.files[0]) {
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
        img.onload = function () {
          var rect = clacImg(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
          img.width = rect.width;
          img.height = rect.height;
          // img.style.marginLeft = rect.left+'px';
          img.style.marginTop = rect.top + 'px';
        }
        var reader = new FileReader();
        reader.onload = function (e) { img.src = e.target.result; }
        reader.readAsDataURL(file.files[0]);
      }
    }
    function clacImg(maxWidth, maxHeight, width, height) {
      var param = { top: 0, left: 0, width: width, height: height };
      if (width > maxWidth || height > maxHeight) {
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;
        if (rateWidth > rateHeight) {
          param.width = maxWidth;
          param.height = Math.round(height / rateWidth);
        } else {
          param.width = Math.round(width / rateHeight);
          param.height = maxHeight;
        }
      }
      param.left = Math.round((maxWidth - param.width) / 2);
      param.top = Math.round((maxHeight - param.height) / 2);
      return param;
    }