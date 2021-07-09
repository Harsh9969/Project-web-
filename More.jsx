import React, { Component } from "react";
class More extends Component {
  state = {
    more: [
      {
        img: "https://www.planetware.com/photos-large/I/italy-best-places-to-visit-florence.jpg",
        name: "Florence",
        desc: "The showcase of the Italian Renaissance, Florence can at times seem like one giant art museum. The Duomo, the Cathedral of Santa Maria del Fiore, is a landmark of world architecture, topped by its gravity-defying massive dome. Together with its marble-inlaid bell tower by Giotto and its octagonal Baptistery with its incomparable bronze doors by Ghiberti, this is one of the world's finest ensembles of Renaissance art.Half a dozen art museums brim with paintings and sculpture, while more masterpieces decorate its churches.",
      },
      {
        img: "https://www.planetware.com/photos-large/I/italy-best-places-to-visit-san-gimignano.jpg",
        name: "Tuscan Hill Towns",
        desc: "The undulating landscape of Tuscany is crowned by stone towns whose foundations go back to the Etruscans. Each sits atop a hill, and many still have the castles and towers that once defended their commanding positions. It's difficult to choose one above the others, as each has its own architecture, art, character, and story to tell. Fairly bristling with towers and enclosed in walls that are largely intact, San Gimignano looks much as it did in the Middle Ages.",
      },
      {
        img: "https://www.planetware.com/wpimages/2019/05/italy-best-places-to-visit-milan-cathedral.jpg",
        name: "Milan",
        desc: "Although Milan is a major entry point for tourists because of its airport, it's often overlooked as a destination of its own. That's a shame, because Milan has one of the highest concentration of artistic and architectural attractions in all Italy, and for those interested in design and fashion (not to mention shopping), it's a must. Milan has been the home and work place for luminaries in all these fields: Michelangelo, Leonardo da Vinci, Verdi, Enrico Caruso, Toscanini, and designer Giorgio Armani.",
      },
      {
        img: "https://www.planetware.com/photos-large/I/italy-best-places-to-visit-lake-como.jpg",
        name: "Lake Como",
        desc: "Italy's most beautiful lake, Como has been the favorite summer retreat of the rich and famous since ancient Romans fled Milan's summer heat to cool off in villas along its steep shores. Later villas decorate its tightly clustered towns, especially pretty Bellagio, artfully set on a point where the three narrow arms of the lake meet.",
      },
      {
        img: "https://www.planetware.com/photos-large/I/italy-best-places-to-visit-pompeii.jpg",
        name: "Pompeii and Herculaneum",
        desc: "In AD 79, Mt. Vesuvius erupted violently and suddenly, engulfing the thriving Roman city of Pompeii and encasing it for more than a millennium in six meters of ash and pumice-stone. The city remained frozen in time until excavations that began in the 18th century uncovered more than half of its buildings and public spaces.",
      },
    ],
  };
  render() {
    let bg = {};
    if (this.props.dark === 1) {
      bg = {
        backgroundColor: "#37474F",
        color: "white",
        height: "100%",
      };
    } else {
      bg = {};
    }
    return (
      <div style={bg}>
        <div className="row">
          {this.state.more.map((place, index) => (
            <div className="col-5 top" key={index} style={{ margin: "2%" }}>
              <div className="row">
                <h2>{place["name"]}</h2>
              </div>
              <div className="row" style={{ marginLeft: "8%" }}>
                <div className="col">
                  {" "}
                  <img
                    src={place["img"]}
                    style={{
                      width: "130%",
                      borderRadius: "20px",
                      boxShadow:
                        "8px 8px 8px 0 rgba(0, 0, 0, 0.5),0 4px 5px 0 rgba(0, 0, 0, 0.1)",
                      float: "right",
                    }}
                  />
                </div>
                <div className="col">{place["desc"]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default More;
