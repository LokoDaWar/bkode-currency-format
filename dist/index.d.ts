export interface IProps {
    number: number;
    decimal?: "," | "." | string;
    thousands?: "," | "." | string;
    symbol?: "R$" | "$" | "¥" | string;
    decimalNumbers?: number;
}
export declare function BkodeCurrencyFormat({ number, decimal, thousands, symbol, decimalNumbers }: IProps): string;
