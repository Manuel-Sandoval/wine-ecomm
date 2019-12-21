import { ChangeEvent } from "react";

export default interface IProps{
    brandName: string;
    select: (event: ChangeEvent<HTMLInputElement>) => void;
}