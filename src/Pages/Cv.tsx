import "./Cv.scss"
import Heroe from "../components/Heroe/Heore";
import Tag from "../components/Cards/Tag/Tag";

export default function Cv() {

    return (
        <>
            <Heroe title="Curriculum Vitae" text=" comprehensive overview of my professional journey, blending technical expertise with a keen eye for design and user experience. I build systems that are both robust and beautiful. "></Heroe>
            <section className="cv__experience">
                <div className="section-container cv__experience--container">
                    <aside className="cv__experience-aside">
                        <div className="cv__experience-technical-skills">
                            <h2 className="cv__experience-technical-skills-title"><span className="material-symbols-outlined">code</span>Technical Skills </h2>
                            <div>
                                <h3 className="cv__experience-technical-skills-skill-title">Frontend</h3>
                                <div className="cv__experience-technical-skills-container">
                                    <Tag text="HTML"></Tag>
                                    <Tag text="CSS3"></Tag>
                                    <Tag text="JavaScript"></Tag>
                                    <Tag text="React"></Tag>
                                    <Tag text="Angular"></Tag>
                                    <Tag text="Figma"></Tag>
                                    <Tag text="FrameWork"></Tag>
                                    <Tag text="Adobe XD"></Tag>
                                </div>
                                <h3 className="cv__experience-technical-skills-skill-title">Backend & Tools</h3>
                                <div className="cv__experience-technical-skills-container">
                                    <Tag text="PHP"></Tag>
                                    <Tag text="Node.js"></Tag>
                                    <Tag text="Mysql"></Tag>
                                    <Tag text="PostgreSQL"></Tag>
                                    <Tag text="SQLite"></Tag>
                                    <Tag text="Python"></Tag>
                                    <Tag text="Git"></Tag>
                                </div>
                            </div>
                        </div>
                        <div className="cv__experience-education">
                            <h2 className="cv__experience-title">Education</h2>
                            <div className="cv__experience-education-container">
                                <h3 className="cv__experience-education-grade">M.S. Computer Science</h3>
                                <div className="cv__experience-education-grade-container">
                                    <span className="cv__experience-education-grade-institute">Stanford University</span> <span className="cv__experience-education-grade-period">2018 - 2020</span>
                                </div>
                                <p className="cv__experience-education-specialty">Specialization in Human-Computer Interaction.</p>
                            </div>
                            <div className="cv__experience-education-container">
                                <h3 className="cv__experience-education-grade">M.S. Computer Science</h3>
                                <div className="cv__experience-education-grade-container">
                                    <span className="cv__experience-education-grade-institute">Stanford University</span> <span className="cv__experience-education-grade-period">2018 - 2020</span>
                                </div>
                                <p className="cv__experience-education-specialty">Specialization in Human-Computer Interaction.</p>
                            </div>
                        </div>
                    </aside>
                    <div className="cv__experience-main">
                        <h2 className="cv__experience-title">Professional Experience</h2>
                    </div>
                </div>
            </section>
        </>
    );

}