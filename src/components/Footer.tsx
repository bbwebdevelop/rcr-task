import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center text-xs p-0.5 mt-10 montreal text-[#000]">
  <hr
    className="my-2 mx-auto w-1/4"
    style={{ borderColor: "hsla(259, 54%, 49%, 0.100)", borderWidth: "0.1px" }}
  />
  <span>
    crafted by{" "}
    <a
      href="https://www.bbwebdevelop.pl"
      className="cursor-pointer text-inherit no-underline text-[#510273]"
    >
      bbwebdevelop
    </a>
  </span>
</footer>

  );
};

export default Footer;
