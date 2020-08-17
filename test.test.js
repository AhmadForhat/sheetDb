const dbSheet = require('./index')

const testUpdate = async () => {
    try {
        console.log('Teste Update')
        const updateObj = {
            razao:'test'
        }
        await dbSheet.update('1VsUvKif1vMRr91rMbRtgME0vxlIaJH2DTortkuBYr90','Página2!A:W','cnpj','11.430.252/0001-77',updateObj)
        console.log('Teste Update realizado com sucesso!')
    } catch (error) {
        console.log('Teste Update falhado')
    }
}

const testGet = async () => {
    try {
        console.log('Teste GET')
        const request = await dbSheet.get('1VsUvKif1vMRr91rMbRtgME0vxlIaJH2DTortkuBYr90','Página2!A1:W')
        console.log(request)
    } catch (error) {
        console.log('Teste GET falhado')
    }
}

const test = async () => {
    // await testUpdate()
    await testGet()
}
test()