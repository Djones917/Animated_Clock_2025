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
    ctx.restore();

    ctx.restore(); // RESTORE THE DEFAULT STATE

}
  

clock();