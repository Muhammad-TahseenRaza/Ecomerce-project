const footerHtml = 
    `<footer class="section-footer">
        <div class="footer-container container grid grid-four--cols">
            <div class="content_1">
                <img src="public/images/logo.png" alt="logo">
                <p>Welcome to ecomstore, your ultimate destination for cutting-edge gadgets!</p>
            </div>
            <div class="content_2">
                <h4>Shopping</h4>
                <a href="#">Computer Store</a>
                <a href="#">Computer Store</a>
                <a href="#">Computer Store</a>
                <a href="#">Computer Store</a>
            </div>
            <div class="content_3">
                <h4>Experince</h4>
                <a href="#">Computer Store</a>
                <a href="#">Computer Store</a>
                <a href="#">Computer Store</a>
                <a href="#">Computer Store</a>
            </div>
            <div class="content_4">
                <h4>Newspaper</h4>
                <p>Be the first to know about new email</p>
                <div class="f-email">
                    <input type="email" placeholder="your email">
                </div>
            </div>
        </div>
    </footer>`;

const footerElem = document.querySelector('.section-foot');
footerElem.insertAdjacentHTML('afterbegin', footerHtml);