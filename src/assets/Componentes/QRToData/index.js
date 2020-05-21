import api from '../../../services/api';

export function getJsonFrom(dataString) {
    var cantgo = false;
    var data;

    api.get('compra_do_qr', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            'qrcode': dataString
        }
    }).then(response => {
        data = {
            place: response.place,
            value: response.value,
           method: response.method,
          parcels: response.parcels
        }
    })

    while(cantgo) {}
    return data;

    /*
    const dataJson = JSON.parse(dataString);
    console.log(dataJson);
    console.log(dataString);

    const place    = dataJson.ESTABELECIMENTO        || null;
    const value    = dataJson.VALOR                  || null;
    const method   = dataJson.METODO                 || null;
    const parcels  = dataJson.QUANTIDADE_DE_PARCELAS || null;

    if(
        place === null 
    ||  value === null
    || method === null
    ){
        return false;
    } else {
        return {
              place: place,
              value: value,
             method: method,
            parcels: parcels
        }
    }*/
}