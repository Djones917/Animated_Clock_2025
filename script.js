function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // SET UP CANVAS
    ctx.save(); // SAVE THE DEFAULT STATE
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);
    ctx.rotate(-Math.PI / 2);

    ctx.restore(); // RESTORE THE DEFAULT STATE

}
  

clock();