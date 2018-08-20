function delay (word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('hello' + word)
        }, 2000)
    })
}

async function start() {
    const word1 = await delay('孙悟空')
    console.log(word1)
    const word2 = await delay('猪八戒')
    console.log(word2)
    const word3 = await delay('沙悟净')
    console.log(word3)
}
start()