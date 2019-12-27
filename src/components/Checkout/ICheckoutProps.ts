export default interface IProps {
    modalOpen: boolean;
    currentStep: number;
    totalSteps: number;
    cancel: () => void;
    backStep: () => void;
    advanceStep: () => void;
}