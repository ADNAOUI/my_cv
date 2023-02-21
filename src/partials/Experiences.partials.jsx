import { Chrono } from "react-chrono";

const Experiences = () => {

  return (
    <section className="experiences">

      <h2>Expériences</h2>

      <div className="experiences__timeline">
        <Chrono
          items={[
            {
              title: "May 1940",
              cardTitle: "Dunkirk",
              url: "http://google.com",
              cardSubtitle:
                "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            },
            {
              title: "25 July 1940",
              cardTitle: "The Battle of Britain",
              cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
            },
            {
              title: "June 1941",
              cardTitle: "Operation Barbarossa",
              cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
            }]}
          mode="VERTICAL_ALTERNATING"
          twoColumns
          theme={{
            primary: 'red',
            secondary: 'blue',
            cardBgColor: 'yellow',
            cardForeColor: 'violet',
            titleColor: 'black',
            titleColorActive: 'red',
          }}
          hideControls
          cardHeight={"250px"}
        />
      </div>

      <div className="experiences__resume">

      <ul className="d-flex flex-wrap justify-content-evenly">
    <li className="">
        <p>
            <i className="fa-brands fa-react"></i>
            <span>Front</span>
        </p>
        <span>React</span>
    </li>
    <li className="">
        <p>
            <i className="fa-brands fa-node-js"></i>
            <span>Back</span>
        </p>
        <span>Node js</span>
    </li>
    <li className="">
        <p>
            <i className="fa-solid fa-graduation-cap"></i>
            <span>5 ans d'études</span>
        </p>
        <span>Master</span>
    </li>
</ul>
      </div>

    </section>
  );
};
export default Experiences
