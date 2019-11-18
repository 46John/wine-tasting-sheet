import React from 'react';
import MaskedInput, { conformToMask } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeperatorSymbol: ',',
    allowDecimal: true,
    decimalLimit: 2,
    requireDecimal: true,
    integerLimit: 7,
    allownegative: false,
    allowLeadingZeroes: false,
}

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
    const currencyMask = createNumberMask({...defaultMaskOptions, ...maskOptions});
    return <MaskedInput mask={currencyMask} {...inputProps} pipe={conformToMask('15.00', currencyMask)} />
}

CurrencyInput.defaultProps = {
    inputMode: 'numeric',
    maskOptions: {}
}

export default CurrencyInput;