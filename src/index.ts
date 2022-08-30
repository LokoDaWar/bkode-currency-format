export interface IProps {
  number: number;
  decimal?: "," | "." | string;
  thousands?: "," | "." | string;
  symbol?: "R$" | "$" | "¥" | string;
  decimalNumbers?: number;
}

export function BkodeCurrencyFormat({
  number,
  decimal,
  thousands,
  symbol,
  decimalNumbers
}: IProps): string {
  number  = number || 0,
  decimal  = decimal || ",",
  thousands  = thousands || ".",
  symbol  = symbol || "",
  decimalNumbers  = decimalNumbers || 2
  const numberString = number.toString();

  if (!numberString.match(".")) {
    return `${numberString}.00`;
  }

  let numberSplit = numberString.split(".");

  if (numberSplit.length != 2) {
    numberSplit = number.toFixed(decimalNumbers).split(".");

    if (numberSplit.length != 2) {
      return "Huston we have a problem!";
    }
  }

  const integer = numberSplit[0].replace(/(.)(?=(\d{3})+$)/g, `$1${thousands}`);

  let decimalValue = numberSplit[1].substring(0, decimalNumbers);

  decimalValue = decimalValue.padEnd(decimalNumbers, "0");

  return `${symbol} ${integer}${decimal}${decimalValue}`;
}

