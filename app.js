const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class App
{
    runApplication()
    {
        this.drawSky()
        this.drawStreet(20)
        this.drawStreet(1200)
        this.drawTree(60, 40)
        this.drawWalkway()
        this.renderStickman()   
    }
    
    drawSky()
    {
        
        ctx.fillStyle = "#002266";
        ctx.fillRect(0, 0, 1700, 1700);
        ctx.fillStyle = "#14141f";
        ctx.fillRect(0, 0, 1700, 60);
    }

    drawStreet(x)
    {
        let theloop = x
        for(let i = 0; i < 3; i++)
        {
         this. drawBuildings(theloop, 10)
         theloop+=160
        }
    }

    drawTree(x, y)
    {
        ctx.fillStyle = "#331a00";
        ctx.fillRect(x+675, y+375, 215, 235);
        ctx.beginPath();
        ctx.fillStyle = "#003300";
        ctx.beginPath();
        ctx.moveTo(x+500,y+475);
        ctx.lineTo(x+780,y+250);
        ctx.lineTo(x+1065,y+475);
        ctx.fill();
        ctx.fillStyle = "#004d00";
        ctx.beginPath();
        ctx.moveTo(x+550,y+350);
        ctx.lineTo(x+780,y+125);
        ctx.lineTo(x+1015,y+350);
        ctx.fill();
        ctx.fillStyle = "#006600";
        ctx.beginPath();
        ctx.moveTo(x+600,y+225);
        ctx.lineTo(x+780,y+25);
        ctx.lineTo(x+965,y+225);
        ctx.fill();
        ctx.fillStyle = "#e6e600";
        ctx.beginPath();
        ctx.moveTo(x+780,y+150);
        ctx.lineTo(x+870,y+40);
        ctx.lineTo(x+695,y+40);
        ctx.fill();
        ctx.fillStyle = "#e6e600";
        ctx.beginPath();
        ctx.moveTo(x+780,y+0);
        ctx.lineTo(x+870,y+115);
        ctx.lineTo(x+695,y+115);
        ctx.fill();
    }

    drawBuildings(x, y)
    {
        ctx.fillStyle = "#999966";
        ctx.fillRect(x+20, y+300, 120, 340);
        ctx.beginPath();
        ctx.fillStyle = "#b3b300";
        ctx.fillRect(x+30, y+525, 80, 60);
        ctx.beginPath();
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(x+45, y+425, 80, 60);
        ctx.beginPath();
        ctx.fillStyle = "#e6b800";
        ctx.fillRect(x+30, y+325, 80, 60);
        ctx.fillStyle = "#660000";
        ctx.beginPath();
        ctx.moveTo(x+20,y+300);
        ctx.lineTo(x+80,y+250);
        ctx.lineTo(x+140,y+300);
        ctx.fill();
    }

    drawWalkway()
    {
        ctx.fillStyle = "#29293d";
        ctx.fillRect(0, 650, 1700, 110);
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(0, 695, 0,30 );
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(0, 695, 0,30 );
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(100, 695, 0,30 );
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(500, 695, 0,30 );
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(900, 695, 0,30 );
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(1300, 695, 1700,30 );
    }

    renderStickman()
    {

    }

}

let app = new App
app.runApplication()