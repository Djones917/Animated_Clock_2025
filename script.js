function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // SET UP CANVAS
    ctx.save(); // SAVE THE DEFAULT STATE
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250); // PUT 0,0 IN THE MIDDLE
    ctx.rotate(-Math.PI / 2); // ROTATE CLOCK -90DEG

    // DEFAULT STYLES
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';


    // DRAW CLOCK
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#800000'
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    // CLOCK 12 MARKS
    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }    
    ctx.restore();

    // CLOCK MIN MARKS
    ctx.save();
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
           ctx.beginPath();          
           ctx.moveTo(117, 0);
           ctx.lineTo(120, 0);
           ctx.stroke();
        }    
         ctx.rotate(Math.PI / 30);    
    }    
    ctx.restore();

    // Get Current Time
    const hr = now.getHours() % 12
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hr}:${min}:${sec}`);

    // Draw Hour Hand
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // Draw Min Hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();
    ctx.restore();

    // Draw Sec Hand
    ctx.save();
    ctx.rotate((sec * Math.PI / 30));
    ctx.strokeStyle = '#3774f8ff';
    ctx.fillStyle = '#3774f8ff';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();


    ctx.restore(); // RESTORE THE DEFAULT STATE

    requestAnimationFrame(clock);

}
  

requestAnimationFrame(clock);