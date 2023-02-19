const user = {
    age: 25,
    address: "108 rue Théophile Lamy Bourges",
    mail: "farid.adnaoui@outlook.fr",
    licence: "B",
    phone: "07 71 62 54 25"
}

export const About = () => {

    const userDetails = Object.entries(user).map(([name, value], k) => (
        <li key={k} className="about__list__item">
            <strong className="text-capitalize ">{name}:</strong> {value}
        </li>
    ));

    return (
        <section className="about">
            <h2>Hello World, <strong className="primary-color">Farid ADNAOUI</strong> développeur web full stack</h2>
            <ul className="about__list">{userDetails}</ul>
        </section>
    )
};