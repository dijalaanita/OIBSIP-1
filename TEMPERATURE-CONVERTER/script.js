function convertTemperature() {
    const temperature = document.getElementById('Degree').value;
    const unit = document.getElementById('Type').value;
    const convert = document.querySelector('input[name="convert"]:checked').value;

    let result;

    if (unit === 'Celsius' && convert === 'Fahrenheit')
    {
        result = (temperature * 9 / 5) + 32;
        document.getElementById('result').innerText = `${temperature} Celsius is ${result.toFixed(2)}Fº`;
    }
    else if (unit === 'Fahrenheit' && convert === 'Celsius')
    {
        result = (temperature - 32) * 5 / 9;
        document.getElementById('result').innerText = `${temperature} Fahrenheit is ${result.toFixed(2)}Cº`;
    }
    else if (unit === 'Celsius' && convert === 'Kelvin')
    {
    result = temperature + 273.15;
    document.getElementById('result').innerText = `${temperature} Celsius is ${result}Kº`;
    }
    else if (unit === 'Kelvin' && convert === 'Celsius')
    {
        result = temperature - 273.15;
        document.getElementById('result').innerText = `${temperature} Kelvin is ${result}Cº`;
    }
    else if (unit === 'Fahrenheit' && convert === 'Kelvin'){
    result = (temperature - 32) * 5 / 9 + 273.15;
    document.getElementById('result').innerText = `${temperature} Fahrenheit is ${result}Kº`;
    }
    else if (unit === 'Kelvin' && convert === 'Fahrenheit'){
    result = (temperature - 273.15) * 9 / 5 + 32;
    document.getElementById('result').innerText = `${temperature} Kelvin is ${result}Fº`;
    }
    else if (unit === 'Celsius' && convert === 'Celsius'){
        result = temperature;
        document.getElementById('result').innerText = `${temperature} Celsius is ${result}Cº`;
        }
   else if (unit === 'Fahrenheit' && convert === 'Fahrenheit'){
    result = temperature;
    document.getElementById('result').innerText = `${temperature} Fahrenheit is ${result}Fº`;
    }
    else if (unit === 'Kelvin' && convert === 'Kelvin'){
        result = temperature;
        document.getElementById('result').innerText = `${temperature} Kelvin is ${result}Kº`;
        }
}
