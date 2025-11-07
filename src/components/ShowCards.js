import React from "react";
import Card from "./Card";
export default function ShowCards({ data }) {
    return (
        <>
            <div style={{display : "flex", gap : "10px", flexWrap : "wrap", margin : "50px", justifyContent: "center"}}>
                {data.map((country) => (
                    <Card
                        key={country.abbr}
                        name={country.name}
                        img={country.flag}
                        abbr={country.abbr}
                    />
                ))}
            </div>
        </>
    );
}
