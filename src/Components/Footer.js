import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class=" p-5 bg-dark text-center text-light position-relative">
        <div class="container">
          <p class="lead">
            Copyright &copy;
            {new Date().getFullYear()} : Chess Data WearHouse
          </p>
          <a href="#" class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
