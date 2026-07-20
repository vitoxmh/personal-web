import "./Tag.scss"

interface tagProps {
  text: string;
}

export default function Tag({text = 'texto'}: tagProps) {

    return (
        <span className="tag">{text}</span>
    );

}