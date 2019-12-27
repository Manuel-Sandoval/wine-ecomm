export default interface IProps {
    currentStep: number;
    setAdvanceText: (text: string) => void;
    setDisable: (disable: boolean) => void;
}