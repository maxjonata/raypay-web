import api from '../../../services/api';

export function getJsonFrom(dataString) {
    return api.get('', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            'qrcode': dataString
        }
    }).then(response => {
        return {
            place: response.place,
            value: response.value,
           method: response.method,
          parcels: response.parcels
        }
    })

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