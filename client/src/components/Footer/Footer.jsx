import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>

            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stories</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>

            <div className="item">
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, architecto ipsa velit quidem perferendis odio eligendi fugit! Aspernatur, est perferendis sint at voluptas omnis sit fuga placeat numquam vitae fugiat maiores itaque voluptatum autem.
                </span>
            </div>

            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores itaque eligendi, obcaecati voluptatem id debitis illum nulla libero at cum ex eum corrupti reprehenderit rem expedita. Illum voluptatum, necessitatibus odit tenetur nisi provident.
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="logo">React-Store</div>
                <div className="copyright">@ Copyright 2023. All Rihts Reserved</div>
            </div>

            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer