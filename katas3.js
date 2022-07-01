const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let resultado = []
    for (let i = 1; i <= 25; i++) {
        resultado.push(i)
    }
    return resultado
}

function kata2() {
    let resultado = []
    for (let i = 25; i > 0; i--) {
        resultado.push(i)
    }
    return resultado
}

function kata3() {
    let resultado = []
    for (let i = -25; i < 0; i++) {
        resultado.push(i)
    }
    return resultado.reverse()
}

function kata4() {
    let resultado = []
    for (let i = -25; i < 0; i++) {
        resultado.push(i)
    }
    return resultado
}

function kata5() {
    let resultado = []
    for (let i = -25; i <= 25; i++) {
        if (i % 2 !== 0) {
            resultado.push(i)
        }
    }
    return resultado
}

function kata6() {
    let resultado = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            resultado.push(i)
        }
    }
    return resultado
}

function kata7() {
    let resultado = []
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            resultado.push(i)
        }
    }
    return resultado
}

function kata8() {
    let resultado = []
    for (let i = 100; i > 0; i--) {
        if (i % 3 === 0 || i % 7 === 0) {
            resultado.push(i)
        }
    }
    return resultado
}

function kata9() {
    let resultado = []
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            resultado.push(i)
        }
    }
    return resultado
}

function kata10(sampleArray) {
    return sampleArray
}

function kata11(sampleArray) {
    let resultado = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

function kata12(sampleArray) {
    let resultado = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

function kata13(sampleArray) {
    let resultado = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

function kata14(sampleArray) {
    let resultado = []
    for (let i = 0; i < sampleArray.length; i++) {
        resultado.push(sampleArray[i] * sampleArray[i])
    }
    return resultado
}

function kata15() {
    let resultado = 0
    for (let i = 1; i <= 20; i++) {
        resultado += i
    }
    return resultado
}

function kata16(sampleArray) {
    let resultado = 0
    for (let i = 0; i < sampleArray.length; i++) {
        resultado += sampleArray[i]
    }
    return resultado
}

function kata17(sampleArray) {
    return sampleArray.sort((a, b) => a - b)[0]
}

function kata18(sampleArray) {
    return sampleArray.sort((a, b) => a - b).reverse()[0]
}