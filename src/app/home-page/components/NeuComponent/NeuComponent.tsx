import "./style.css";

export type NeuComponentProps = {
    name: string;
    children: React.ReactNode;
}

export default function NeuComponent(props: NeuComponentProps) {
    return (
        <div className="neu-component">
            <h1>{props.name}</h1>
            {props.children}
        </div>
    )
}