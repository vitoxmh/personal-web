import "./CardBlog.scss"
import Tag from "../Tag/Tag"


export default function CardBlog() {


  return (
       <article className="CardBlog">
            <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Gjz2kvkLcer8KUdcn2sD9tkWCedn2qM4wvzJsrWd3NcQjNJ436zVJ7lQc-QQJ5PdGvv4EXXHvrhSVm3FZt9_pBLl_0o0JFaJfkvv-oXR2CALPfn4utr2lKW3a4G3W3XUU8RDfsmmmByu7hYHxGrYiacKpT0FP6472ChgHWClKhnw-QiyrRprPBK5phgyG0seAX7PB4k4IgXlCiDA8Qp2WnHf5AQIMgSeFTtWAUuxFKvacONOKjzzysT0O7uv5Zu7WDxxV9wiPxGh"></img>
            </div>
            <div className="CardBlog-info">
                <div className="CardBlog-tags">
                    <Tag text="JavaScript" />
                    <Tag text="Python"/>
                    <Tag text="HTML"/>
                </div>
                <h2 className="CardBlog-title">TITULO A PRIMERA</h2>
                <p className="CardBlog-text">A high-performance in-browser compiler designed for creative coding. Built with rigorous attention to memory management and zero-latency feedback loops, wrapped in a minimalist editorial interface.</p>
                <a href="" className="CardBlog-link">Explore Project arrow_forward</a>
            </div>
       </article>
    )
}
