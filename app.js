

const formatMoney = (value) => {
    const currency = document.querySelector('#currency').value;
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    if (currency === 'USD') {
        return "$ " + value;
    } else if (currency === 'EUR') {
        return "€ " + value;
    } else if (currency === 'RUB') {
        return "₽ " + value;
    } else {
        return "₾ " + value;
    }

   // return "₽ " + value;
}

const formatSplit = (value) => {
    if (value === "1") return value + " человека";
    if (value) return value + " человек";
    return value + " человека"
}
const update = () => {
    const bill = Number(document.querySelector('#yourBill').value);
    const tipPercent = document.querySelector('#tipInput').value;
    const split = document.querySelector('#splitInput').value;

    const tipValue = bill * (tipPercent/100);
    const tipEach = tipValue / split;
    const newBillEach = (bill + tipValue) / split;

    document.querySelector('#tipPercent').innerHTML = tipPercent + '%';
    document.querySelector('#tipValue').innerHTML = formatMoney(tipValue);
    document.querySelector('#totalWithTip').innerHTML = formatMoney(bill + tipValue);
    document.querySelector('#splitValue').innerHTML = formatSplit(split);
    document.querySelector('#billEach').innerHTML = formatMoney(newBillEach);
    document.querySelector('#tipEach').innerHTML = formatMoney(tipEach);
}

const container = document.querySelector('#container');
container.addEventListener('input', update);

const buttonThemeLight = document.querySelector('.theme-button-light');
const buttonThemeDark = document.querySelector('.theme-button-dark');

const toggleButtonActive = () => {
    document.querySelector('.theme-button-active');
    buttonThemeDark.classList.toggle('theme-button-active');
    buttonThemeLight.classList.toggle('theme-button-active');
}

const buttonThemeLightHandler = () => {
    toggleButtonActive();
}

const buttonThemeDarkHandler = () => {
    toggleButtonActive();
}

const  init = () => {
    buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
    buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);
};

init();

const toggleButton = document.querySelectorAll('.theme-button');

toggleButton.forEach(function (button) {
    button.addEventListener('click', function () {
            let theme = document.documentElement.getAttribute('data-theme');
            document.documentElement.setAttribute(
                'data-theme',
                theme === 'dark' ? 'light' : 'dark',
            )
        }
    )
})
