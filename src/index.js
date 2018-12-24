'use strict'
//Instanciando los objetos app y BrowserWindow
const{app, BrowserWindow}=require('electron')

//Listener del objeto principal APP
//console.dir(app)

//Ejecutando ordenes antes de salir
app.on('before-quit',()=>{
    console.log('Saliendo..')
})

//Ejecutando ordenes cuando la aplicacion esta lista
app.on('ready',()=>{
    //Creando una ventana
    let win = new BrowserWindow({
        width: 800,
        height: 610,
        title: 'Aplicacion Platzi',
        center: true,
        maximizable: false,
        show: false,
        menubar: false
    })
    win.once('ready-to-show',()=>{
        win.show()
    })
    // //Detectando el movimiento de la ventana
    // win.on('move',()=>{
    //     const position = win.getPosition()
    //     console.log(`La posicion es ${position}`)
    // })
    //Detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed',()=>{
        win=null
        app.quit()
    })
    win.loadURL(`file://${__dirname}/renderer/index.html`)
})

