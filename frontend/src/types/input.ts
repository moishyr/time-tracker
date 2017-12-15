interface InputProps {
    id: string;
    name: string;
    label: string;
    type: string;
}

interface InputState {
    value: string;
}

export {
    InputProps,
    InputState
}