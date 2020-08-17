const axios = require('axios')
const arrayObject = require('@ziro/array-object')
const getSheet = require('../utils/getSheet')
const postSheet = require('../utils/postSheet')
const dataPostBatch = require('../utils/dataPostBatch')

const {SHEET_URL:baseUrl, SHEET_AUTH:sheetAuth, SHEET_ORIGIN:sheetOrigin} = require('../../credentials')

const update = async (sheetId, rangeGet,paramWhere, valueWhere, updateObj) => {
    if(baseUrl || sheetAuth || sheetOrigin){
        try {
            if(rangeGet.includes('!')){
                const aba = rangeGet.split('!')[0]
                const requestSheet = await axios(getSheet([rangeGet], baseUrl, sheetId, sheetAuth, sheetOrigin))
                const objectSheet = await arrayObject(requestSheet.data.valueRanges[0])
                const arrayUpdate = dataPostBatch(objectSheet, paramWhere, valueWhere, updateObj, aba)
                await axios(postSheet(baseUrl, sheetId, sheetAuth, sheetOrigin, arrayUpdate))
                return arrayUpdate
            }else{
                console.log('Digite corretamente o range')
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }else{
        console.log('Insira os campos certos no credentials.json')
    }
}

module.exports = update