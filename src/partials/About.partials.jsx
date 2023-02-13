import { useState } from 'react'
import { ListGroup } from 'react-bootstrap';

const user = {
    age: 25,
    address: "108 rue Théophile Lamy Bourges",
    mail: "farid.adnaoui@outlook.fr",
    licence: "B",
    phone: "07 71 62 54 25"
}

export const About = () => {

    const userDetails = Object.entries(user).map(([name, value], k) => (
        <li key={k}>
            <strong>{name}:</strong> {value}
        </li>
    ));

    return (
        <section>
            <ul>
                {userDetails}
            </ul>
        </section>
    );
};