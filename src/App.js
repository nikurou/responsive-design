import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Colors from "./constants/Colors";
import image01 from "./assets/image-01.jpg";
import image02 from "./assets/image-02.jpg";

const useStyles = makeStyles((theme) => ({
  App: {
    "& $body, $p, $h1, $h2, $h3": { margin: 0 }, //No spaces
  },
  bgLight: {
    backgroundColor: Colors.light,
  },
  bgDark: {
    backgroundColor: Colors.dark,
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  textCenter: {
    textAlign: "center",
  },
  split: {
    display: "flex",
    flexDirection: "column",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={`${classes.bgLight} ${classes.textCenter}`}>
        <p>Lorem, ipsum dolor.</p>
        <h2>Responsive layouts don't have to be a struggle</h2>
      </header>

      <section>
        <h2 className={classes.textCenter}>Quality Designs</h2>
        <div className={classes.split}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              molestias reprehenderit distinctio illo, qui nisi nulla cupiditate
              perspiciatis dolorem perferendis delectus, aliquam veniam.
              Possimus, distinctio!
            </p>
          </div>
          <div>
            <p>
              Alias hic, repellendus magni quisquam consequuntur facilis aliquid
              blanditiis. Delectus eaque autem, incidunt a dolorum facilis
              recusandae, veritatis esse illo impedit debitis dolores minus
              veniam?
            </p>
          </div>
        </div>
      </section>

      <section className={classes.bgDark}>
        <div className={classes.split}>
          <div>
            <h2>Made custom for you</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              laudantium quis magnam. Atque iure vitae aliquam saepe ea adipisci
              delectus. Id nemo officia consequuntur quam.
            </p>
          </div>
          <div>
            <img src={image01} alt="mountain_with_man" />
          </div>
        </div>
      </section>

      <section className={classes.bgPrimary}>
        <div className={classes.split}>
          <div>
            <img src={image02} alt="mountain_with_tree"></img>
          </div>
          <div>
            <h2>Created with Care</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate dolores non sed consequatur officiis beatae id eligendi.
              Minima ducimus id suscipit sequi corporis libero nulla!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
