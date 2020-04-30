export function getJsonFrom(dataString) {
    const dataJson = JSON.parse(dataString);
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
    }
}