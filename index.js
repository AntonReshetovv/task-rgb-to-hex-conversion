// === Мое решение ===

function rgb(r, g, b) {
    let value = '' + checkValue(r) + checkValue(g) + checkValue(b)
    return value.toUpperCase()
}

function formatValue(value) {
    let numb;
    if (value <= 0) {
        value = 0;
        return numb = ('0' + value).toString(16)
    }
    if (value >= 0 && value < 10) {
        return numb = ('0' + value).toString(16)
    }

    if (value >= 255) {
        value = 255;
        return numb = value.toString(16)
    }

    return numb = value.toString(16)
}


function checkValue(value) {
    let hex = formatValue(value)
    if (hex.length < 2) {
        return '0' + hex;
    }
    return hex
}

// === / Мое решение ===


// === Решение, которое мне больше всего понравилось, но оно не моё, увидел уже после своего

function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);   - не моё решение
    }).join('').toUpperCase();
}