import "./Button.scss"

interface botonProps {
  text: string;
  clase: string;
  type: string;
  link: string;
  icon?: React.ReactNode;
  
}

function Button({text,clase,type, link, icon}: botonProps) {

        if(type == 'button'){
            
            return (
                <button className={`btn ${clase}`}></button>
            )
        }


    return (
        <a className={`btn ${clase}`} href={link}>{icon}{text}</a>
    )

  
}

export default Button
