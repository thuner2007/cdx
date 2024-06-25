import React from "react";
import "./SimpleFooter1.css";

interface SimpleFooter1Props {
  bgColor?: string;
  color?: string;
  padding?: string;
  rows?: {
    label: string;
    items: { label: string; onClick?: () => void }[];
  }[];
  alignRows?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end";
  borderTop?: string;
  gap?: string;
  textMargin?: string;
  itemUnderline?: "none" | "underline";
}

const SimpleFooter1: React.FC<SimpleFooter1Props> = ({
  bgColor = "#7553BB",
  color = "white",
  padding = "2rem",
  rows = [
    {
      label: "Legals",
      items: [
        { label: "Impressum", onClick: () => console.log("Impressum clicked") },
        {
          label: "Pricacy Policy",
          onClick: () => console.log("Pricacy Policy clicked"),
        },
        {
          label: "Terms of Service",
          onClick: () => console.log("Terms of Service clicked"),
        },
        {
          label: "Cookie Policy",
          onClick: () => console.log("Cookie Policy clicked"),
        },
      ],
    },
    {
      label: "Services",
      items: [
        { label: "Buy", onClick: () => console.log("Buy clicked") },
        { label: "Sell", onClick: () => console.log("Sell clicked") },
        { label: "Rent", onClick: () => console.log("Rent clicked") },
        { label: "Lease", onClick: () => console.log("Lease clicked") },
      ],
    },
  ],
  alignItems = "center",
  borderTop = "1px solid purple",
  alignRows = "center",
  gap = "2rem",
  textMargin = "1rem",
  itemUnderline = "underline",
}) => {
  return (
    <div
      className="mainDivSimpleFooter1"
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: padding,
        alignItems: alignRows,
        width: `calc(100% - ${padding} - ${padding})`,
        borderTop: borderTop,
      }}
    >
      <div className="parentDivRowsSimpleFooter1" style={{ gap: gap }}>
        {rows.map((row, index) => (
          <div
            key={index}
            className="rowSimpleFooter1"
            style={{ alignItems: alignItems }}
          >
            <h1 className="rowLabelSimpleFooter1">{row.label}</h1>
            {row.items.map((item, index) => (
              <p
                className="itemSimpleFooter1"
                style={{ margin: textMargin, textDecoration: itemUnderline }}
                key={index}
                onClick={item.onClick}
              >
                {item.label}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleFooter1;
