import "./collaborate.css";
function List() {
    return (
        <div className="container">
            <div><h2>Let's collaborate</h2></div>
            <ul className="list-group list-group-flush">
                <div className="container">
                    <li className="list-group-item"><h1>AI + RPA is what we<br/> do</h1>
                    <img className="img" src="https://www.xivtech.io./rp2.jpg"></img>
                        <p>Future-Proof your business.<br /> Drive efficiency,<br /> profitability and deliver on customer experience</p>
                        <a className="link" href="/Ai.js" traget="_self">AI + RPA Automation &#x2192;</a>
                    </li>
                    
                </div>
                <div className="container">
                    <li className="list-group-item">
                        <h1>Make Bolder Choices</h1>
                        <img className="img" src="https://www.xivtech.io./p1.png"></img>
                        <p>Digital focused strategies to<br /> realize market-changing<br /> ideas</p>
                        <a className="link" href="/" traget="_self">Build Better Apps &#x2192;</a>
                    </li>
                    
                </div>
                <div className="container">
                    <li className="list-group-item">
                        <h1>Innovate with Speed</h1>
                        <img className="img" src="https://www.xivtech.io./p2.jpg"></img>
                        <p>Create higher quality<br /> software, deliver on<br /> customer expectations and<br /> business goals</p>
                        <a className="link" href="/" traget="_self">DevOps &#x2192;</a>
                    </li>
                    
                </div>
                <div className="container">
                    <li className="list-group-item">
                        <h1>Embrace Cloud</h1>
                        <img className="img" src="https://www.xivtech.io./p3.jpg"></img>
                        <p>With Cloud-First accelerate<br /> innovation and optimize<br /> performance</p>
                        <a className="link" href="/" traget="_self">Cloud Services &#x2192;</a>
                    </li>
                    
                </div>
                <div>
                    <button className="btn">Get in touch</button>
                </div>
            </ul>
        </div>
    );
}

export default List;