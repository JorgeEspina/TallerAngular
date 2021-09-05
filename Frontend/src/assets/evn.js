let api_url_g1 =  'http://busg1.us-e2.cloudhub.io/';//ya todo comprobado solo compra tiene clavo
let api_url_g2 =  '/';//'http://'+window.location.hostname;//localhost';
let api_url_g3 =  'http://35.206.98.190/';//'http://'+window.location.hostname;//localhost';
let api_url_g4 =  'http://esb4.djgg.ml:3030/';//'http://'+window.location.hostname;//localhost';
let api_url_g5 =  'http://34.123.238.63:8280/services/integrador/';//todo bieen
let api_url_g6 =  'http://35.184.63.236:3004/';//'http://'+window.location.hostname;//localhost';
let api_url_g7 =  'http://68.183.102.104:3000/';//'http://'+window.location.hostname;//localhost';
let api_url_g8 =  'http://35.232.242.252:9999/';//'http://'+window.location.hostname;//localhost';
let api_url_g9 =  'http://sa-g9.us-e2.cloudhub.io/';//'http://'+window.location.hostname;//localhost';
let api_url_g10 = 'http://34.73.157.172:5005/';//'http://'+window.location.hostname;//localhost';
let api_url_g11 = 'http://soagrupo11.us-e2.cloudhub.io/';//'http://'+window.location.hostname;//localhost';
let api_url_g12 = '/';//'http://'+window.location.hostname;//localhost';
let api_url_g13 = 'http://www.sa-proyecto.tk/';//'http://'+window.location.hostname;//localhost';
let api_url_g14 = 'http://35.226.247.82:8080/';//'http://'+window.location.hostname;//localhost';
let api_url_g15 = 'http://34.73.17.174:4000/';//'http://'+window.location.hostname;//localhost';
let api_url_g16 = '/';//'http://'+window.location.hostname;//localhost';
let api_url_g17 = '/';//'http://'+window.location.hostname;//localhost';


let usuario = 'http://3.15.182.157:3000/';
let producto = 'http://3.15.182.157:3001/';
let factura = 'http://3.15.182.157:3002/';
let subasta = 'http://3.15.182.157:3003/';


export function getUrl(){    
    let user_string = localStorage.getItem("Grupo");    
    if(user_string != null){
        console.log(JSON.parse(user_string).id);
        if(JSON.parse(user_string).id==1){
            return api_url_g1;
        }else if (JSON.parse(user_string).id==2){
            return api_url_g2;
        }else if (JSON.parse(user_string).id==3){
            return api_url_g3;
        }else if (JSON.parse(user_string).id==4){
            return api_url_g4;

        }else if (JSON.parse(user_string).id==5){
            return api_url_g5;

        }else if (JSON.parse(user_string).id==6){
            return api_url_g6;

        }else if (JSON.parse(user_string).id==7){
            return api_url_g7;

        }else if (JSON.parse(user_string).id==8){
            return api_url_g8;

        }else if (JSON.parse(user_string).id==9){
            return api_url_g9;

        }else if (JSON.parse(user_string).id==10){
            return api_url_g10;

        }else if (JSON.parse(user_string).id==11){
            return api_url_g11;

        }else if (JSON.parse(user_string).id==12){
            return api_url_g12;

        }else if (JSON.parse(user_string).id==13){
            return api_url_g13;

        }else if (JSON.parse(user_string).id==14){
            return api_url_g14;

        }else if (JSON.parse(user_string).id==15){
            return api_url_g15;

        }else if (JSON.parse(user_string).id==16){
            return api_url_g16;

        }else if (JSON.parse(user_string).id==17){
            return api_url_g17;

        }

      //console.log(this.usuario+'ya dentro')
    }else{
      return this.usuario;
    }
    return api_url_g11;
}
export function getUrlUsuario(){
    return getUrl();//+':3000/';
}
export function getUrlProducto(){
    return getUrl();//+':4000/';
}

export function getUrlFactura(){
    return getUrl();//+':2100/';
}

export function getUrlSubasta(){
    return getUrl();//+':4002/';
}
/*no estandarizado */
export function getUrlUsuario1(){
    return usuario;//+':3000/';
}
export function getUrlProducto1(){
    return producto;//+':4000/';
}

export function getUrlFactura1(){
    return factura;//+':2100/';
}

export function getUrlSubasta1(){
    return subasta;//+':4002/';
}