const axios = require('axios')
const arrayObject = require('@ziro/array-object')
const getSheet = require('../utils/getSheet')

const {SHEET_URL:baseUrl, SHEET_AUTH:sheetAuth, SHEET_ORIGIN:sheetOrigin} = require('../../credentials')

const get = async (sheetId, rangeGet) => {
    if(baseUrl || sheetAuth || sheetOrigin){
        try {
            const requestSheet = await axios(getSheet([rangeGet], baseUrl, sheetId, sheetAuth, sheetOrigin))
            const objectSheet = await arrayObject(requestSheet.data.valueRanges[0])
            return objectSheet
        } catch (error) {
            console.log(error.response.data)
        }
    }else{
        console.log('Insira os campos certos no credentials.json')
    }
}

module.exports = get