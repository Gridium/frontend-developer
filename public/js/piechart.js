function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var colors = ['#2E9598', '#F7DB69', '#F26A44', '#EC1B4B', '#A8216B'];
    var angles = [Math.PI * 1.0, Math.PI *.18,Math.PI * 0.2, Math.PI * 0.6, Math.PI * 0.02];
    var offset = 0;
    var beginAngle = 0;
    var endAngle = 0;
    var offsetX, offsetY, offsetC, medianAngle;
    
    for(var i = 0; i < angles.length; i = i + 1) {
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      medianAngle = (endAngle + beginAngle) / 2;
      
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      offsetC = 150;
      
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(offsetC + offsetX, offsetC + offsetY);
      ctx.arc(offsetC + offsetX, offsetC + offsetY, 120, beginAngle, endAngle);
      ctx.lineTo(offsetC + offsetX, offsetC + offsetY);
      ctx.stroke();
      ctx.fill();
    }
  }
  
  window.onload = draw();