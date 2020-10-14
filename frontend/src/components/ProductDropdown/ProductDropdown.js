import React, { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

function ProductDropdown({ select }) {
  return (
    <>
      <Dropdown drop="down">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Select Size
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          {select.map((option, i) => {
            console.log(option);
            return (
              <Dropdown.Item key={i} eventKey={i}>
                {option}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ProductDropdown;
