const configPost = (baseUrl, sheetBaseId, sheetAuth, sheetOrigin,arrayUpdate) => {
    return {
        method: 'POST',
        url: baseUrl,
        data:{
            "apiResource": "values",
            "apiMethod": "batchUpdate",
            "spreadsheetId": sheetBaseId,
            "resource": {
                "data": arrayUpdate
            },
            "valueInputOption": "user_entered"
        },
        headers: {
            'Authorization': `Basic ${sheetAuth}`,
            'Content-Type': 'application/json',
            'Origin': sheetOrigin
        }
    }
}

module.exports = configPost