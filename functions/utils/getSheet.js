const configGet = (ranges, baseUrl, sheetBaseId, sheetAuth, sheetOrigin) => {
    return {
        method: 'GET',
        url: baseUrl,
        data: {
            'apiResource': 'values',
            'apiMethod': 'batchGet',
            'spreadsheetId': sheetBaseId,
            'ranges': ranges
        },
        headers: {
            'Authorization': `Basic ${sheetAuth}`,
            'Content-Type': 'application/json',
            'Origin': "https://ziro.app"
        }
    }
}

module.exports = configGet