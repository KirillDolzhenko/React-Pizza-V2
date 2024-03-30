import qs from 'qs'

function makeUrl(obj: any): string {
    let objFinal: any = {};

    for (let i = 0; i < Object.keys(obj).length; i++) {
        let key = Object.keys(obj)[i];

        if (String(obj[key])) {
            objFinal[key] = obj[key];
        }
    }

    let stringFinal = qs.stringify(objFinal);

    console.log(stringFinal)

    return stringFinal;
}

export default makeUrl