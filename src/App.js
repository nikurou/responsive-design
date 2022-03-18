import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Colors from "./constants/Colors";
import image01 from "./assets/image-01.jpg";
import image02 from "./assets/image-02.jpg";

const useStyles = makeStyles((theme) => ({
  body: {
    "& $p, $h1, $h2, $h3": { margin: 0 }, // Delete all default margins
    "& $p, $h2, $h3, $img": { marginBottom: "1em" }, // Give header margins
    margin: 0,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "300",

    "& header": {
      "& $h2": {
        color: Colors.primary,
        fontFamily: "Playfair Display",
        fontWeight: "900",
      },
    },

    "& header, section": {
      padding: "4rem 0", //topbottom, leftrigh
    },

    "& img": {
      display: "block", //	Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
      maxWidth: "100%", // So that it always stays inside screen, shrinks img if screen is small
    },
  },
  header: {
    "& $p": {
      fontFamily: "Playfair Display",
    },
  },
  container: {
    marginLeft: "auto", //Left to Right
    marginRight: "auto",
    width: "min(90%, 70.5rem)", //smallest between the two, max 70.5rem
  },

  containerNarrow: {
    maxWidth: "35rem",
  },

  bgLight: {
    backgroundColor: Colors.light,
  },
  bgDark: {
    backgroundColor: Colors.dark,
    color: "white",
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
    color: "white",
  },
  textCenter: {
    textAlign: "center",
  },
  split: {
    display: "flex",
    flexDirection: "column",
  },

  // MEDIA QUERY
  "@media (min-width: 40em)": {
    split: {
      flexDirection: "row",
      // &: current component selector, >: children selector, * universal selector, +: adjacent sibling combinator,
      "& > *": { flexBasis: "100%" }, // For all children of split, apply flexBasis to set the initial size of a flex item, at 100% they'll both choose to take exactly half.
      "& > * + *": { marginLeft: "2em" }, // Adjacent Sibling, separates two selectors and matches the second element only
    },
    body: {
      "& header, section": { padding: "7rem 0" }, // more space for bigger screens
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <header
        className={`${classes.bgLight} ${classes.textCenter} ${classes.header}`}
      >
        <div className={`${classes.container} ${classes.containerNarrow}`}>
          <p>Lorem, ipsum dolor.</p>
          <h2>Responsive layouts don't have to be a struggle</h2>
        </div>
      </header>

      <section>
        <div className={classes.container}>
          <h2 className={classes.textCenter}>Quality Designs</h2>
          <div className={classes.split}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione molestias reprehenderit distinctio illo, qui nisi nulla
                cupiditate perspiciatis dolorem perferendis delectus, aliquam
                veniam. Possimus, distinctio!
              </p>
            </div>
            <div>
              <p>
                Alias hic, repellendus magni quisquam consequuntur facilis
                aliquid blanditiis. Delectus eaque autem, incidunt a dolorum
                facilis recusandae, veritatis esse illo impedit debitis dolores
                minus veniam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.bgDark}>
        <div className={classes.container}>
          <div className={classes.split}>
            <div>
              <h2>Made custom for you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                laudantium quis magnam. Atque iure vitae aliquam saepe ea
                adipisci delectus. Id nemo officia consequuntur quam.
              </p>
            </div>
            <div>
              <img src={image01} alt="mountain_with_man" />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.bgPrimary}>
        <div className={classes.container}>
          <div className={classes.split}>
            <div>
              <img src={image02} alt="mountain_with_tree"></img>
            </div>
            <div>
              <h2>Created with Care</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate dolores non sed consequatur officiis beatae id
                eligendi. Minima ducimus id suscipit sequi corporis libero
                nulla!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
