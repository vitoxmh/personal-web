import "./Heroe.scss"
import Button from "../Button/Button";

interface HeroeProps {
  text: string;
  title: string;
  
}

function Heroe({text,title}: HeroeProps) {


    return (
        <section className="heroe">
                <div className="section-container">
                    <h1 className="heroe-title">{title}</h1>
                    <p className="heroe-text">{text}</p>
                    <Button text="Descargar PDF" clase="btn-white" type="link" link="/archivo.pdf" icon={<span className='material-symbols-outlined text-[18px]'>download</span>}></Button>
                </div>
        </section>
    )

  
}

export default Heroe
