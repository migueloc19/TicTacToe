var posiciones = [0,0,0,0,0,0,0,0,0]
var VerificaGanador = function(puntuacion){
        var combGanadoras = [7, 56, 448, 73, 146, 292, 273, 84];
        for (i = 0; i < combGanadoras.length; i += 1) {
            //Bitwise AND
            if ((combGanadoras[i] & puntuacion) === combGanadoras[i]) {
                return true;
            }
        }
        return false;    
    
    };

var reiniciar = function(juego){
        
        var n = 0;
        for(var jugada of juego.jugadas){
                jugada.setVisible(false);
                posiciones[n] = 0;
                this.puntosX = 0;
                this.puntos0 = 0
                n++;
            }
        this.turno = 1;
        return true;
    };

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    jugada1: null,
    jugadas:[],
    
    Posicionamiento: function(location, event){
            
            var ubicacion = location.getLocation();
            var juego = event.getCurrentTarget();
            this.i =0;
    
            for(var jugada of juego.jugadas){
                
                var cuadro = jugada.getBoundingBox();
                if(cc.rectContainsPoint(cuadro,ubicacion)){
                    if (posiciones[this.i] == 0){ 
                        
                        if (this.turno == 0){
                            jugada.setTexture(res.O_png);    
                            this.turno = 1;
                            if (this.puntos0 > 0){
                                this.puntos0 += Math.pow(2,this.i); 
                            }else{
                                this.puntos0=Math.pow(2,this.i);
                            }
                            posiciones[this.i]=1;
                            jugada.setVisible(true);
                            if (VerificaGanador(this.puntos0)){
                                alert("Ganador: O");
                                reiniciar(juego);
                                this.puntosX = 0
                                this.puntos0 = 0
                                this.j =0;
                            }
                        }
                        else{
                            jugada.setTexture(res.X_png);    
                            this.turno = 0;
                            posiciones[this.i]=2;
                            if (this.puntosX > 0){
                                this.puntosX += Math.pow(2,this.i);
                            }else{
                                this.puntosX=Math.pow(2,this.i);
                            }
                            jugada.setVisible(true);
                            if (VerificaGanador(this.puntosX)){
                                alert("Ganador: X");
                                reiniciar(juego);
                                this.puntosX = 0
                                this.puntos0 = 0
                                this.j = 0;
                        
                            }
                        }
                        if(this.j > 0){
                            this.j = this.j + 1;
                        }
                        else{
                            this.j = 1;
                        }
                        
                        if(this.j == 9){
                            reiniciar(juego);
                            this.puntosX = 0
                            this.puntos0 = 0
                            this.j = 0;
                        }
                  
                    } 
     
                }
                this.i += 1;
            }
            
                return true;
        },
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
       
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);
        
        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        
        this.sizetablero = this.sprite.width
        
        //Posicion 1
        this.jugada1 = new cc.Sprite(res.X_png);        
        this.jugada1.attr({
            x: (size.width / 2) - (this.sizetablero / 2) + 60,
            y: (size.height / 2) + 55
        });
        this.addChild(this.jugada1, 1);
        this.jugadas.push(this.jugada1);		
        this.jugada1.setVisible(false);
        
        //Posicion 2
        this.jugada2 = new cc.Sprite(res.X_png);        
        this.jugada2.attr({
            x: this.jugada1.x + this.jugada1.width + 15,
            y: this.jugada1.y
        });
        this.addChild(this.jugada2, 1);
        this.jugadas.push(this.jugada2);		
        this.jugada2.setVisible(false);
        
        //Posicion 3
        this.jugada3 = new cc.Sprite(res.X_png);        
        this.jugada3.attr({
            x: this.jugada2.x + this.jugada2.width + 15,
            y: this.jugada2.y
        });
        this.addChild(this.jugada3, 1);
        this.jugadas.push(this.jugada3);		
        this.jugada3.setVisible(false);
        
        
        //Posicion 4
        this.jugada4 = new cc.Sprite(res.X_png);        
        this.jugada4.attr({
            x: this.jugada1.x,
            y: this.jugada1.y - this.jugada1.height - 10
        });
        this.addChild(this.jugada4, 1);
        this.jugadas.push(this.jugada4);		
        this.jugada4.setVisible(false);
        
        //Posicion 5
        this.jugada5 = new cc.Sprite(res.X_png);        
        this.jugada5.attr({
            x: this.jugada2.x,
            y: this.jugada2.y - this.jugada2.height - 10
        });
        this.addChild(this.jugada5, 1);
        this.jugadas.push(this.jugada5);		
        this.jugada5.setVisible(false);
        
        //Posicion 6
        this.jugada6 = new cc.Sprite(res.X_png);        
        this.jugada6.attr({
            x: this.jugada3.x,
            y: this.jugada3.y - this.jugada3.height - 10
        });
        this.addChild(this.jugada6, 1);
        this.jugadas.push(this.jugada6);		
        this.jugada6.setVisible(false);
        
        //Posicion 7
        this.jugada7 = new cc.Sprite(res.X_png);        
        this.jugada7.attr({
            x: this.jugada4.x,
            y: this.jugada4.y - this.jugada4.height - 10
        });
        this.addChild(this.jugada7, 1);
        this.jugadas.push(this.jugada7);		
        this.jugada7.setVisible(false);
        
        
        //Posicion 8
        this.jugada8 = new cc.Sprite(res.X_png);        
        this.jugada8.attr({
            x: this.jugada5.x,
            y: this.jugada5.y - this.jugada2.height - 10
        });
        this.addChild(this.jugada8, 1);
        this.jugadas.push(this.jugada8);		
        this.jugada8.setVisible(false);
        
        //Posicion 9
        this.jugada9 = new cc.Sprite(res.X_png);        
        this.jugada9.attr({
            x: this.jugada6.x,
            y: this.jugada6.y - this.jugada3.height - 10
        });
        this.addChild(this.jugada9, 1);
        this.jugadas.push(this.jugada9);		
        this.jugada9.setVisible(false);
            
        //Inicializando eventos
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.Posicionamiento,
			
		}, this);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

