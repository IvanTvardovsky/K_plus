import React from "react";

class Footer extends React.Component {
   constructor(props) {
      super(props);
      this.footerRef = React.createRef();
   }

   componentDidMount() {
      this.checkFooterVisibility();
      window.addEventListener("scroll", this.checkFooterVisibility);
   }

   componentWillUnmount() {
      window.removeEventListener("scroll", this.checkFooterVisibility);
   }

   checkFooterVisibility = () => {
      const footerElement = this.footerRef.current;
      const bodyHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (bodyHeight <= windowHeight) {
         footerElement.classList.add("show-footer");
      } else {
         if (scrollPosition + windowHeight >= bodyHeight) {
            footerElement.classList.add("show-footer");
         } else {
            footerElement.classList.remove("show-footer");
         }
      }
   };

   render() {
      const currentDate = new Date().toLocaleDateString();

      return (
         <footer ref={this.footerRef} className="footer">
            <hr className="footer-line"/>
            <p className="footer-text">Информация актуальна на {currentDate}</p>
         </footer>
      );
   }
}

export default Footer;
