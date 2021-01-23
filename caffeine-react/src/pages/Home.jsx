import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function Home() {
  // const [artciles, setArtciles] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/product/products") //have to check the path in backend
  //     .then((res) => {
  //       setArtciles(res.data.msg);
  //     });
  // }, []);



  return (
    <div className="Home">
      <Container fluid className="container-section-ov">
        <Row>
          <Image src="https://i.imgur.com/STVyYtG.jpg" className="header-img" />
        </Row>
        <Row>
          <div class="article-header">
            <h1>Articles</h1>
          </div>
        </Row>
        <Row>
          <div className="article-section">
            <div className="art1">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/0e/bb/a2/2f/french-butter-croissants.jpg"
                alt=""
              />
              <h1>Coffee and diabetes</h1>
              <p>Coffee may help protect against type 2 diabetes.</p>
            </div>

            <div className="art2">
              <img
                src="https://static01.nyt.com/images/2016/07/11/health/well_coffee/well_coffee-facebookJumbo.jpg"
                alt=""
              />
              <h1>Coffee and diabetes</h1>
              <p>Coffee may help protect against type 2 diabetes.</p>
            </div>
            <div className="art3">
              <img
                src="https://www.visitdubai.com/sc7/-/media/images/articles/cafe-society-specialty-coffee/updated-03-2019/in-article-desktop-slider-the-sum-of-us.jpg"
                alt=""
              />
              <h1>Coffee and diabetes</h1>
              <p>Coffee may help protect against type 2 diabetes.</p>
            </div>
            <div className="art4">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/10/78/28/60/croissant-and-a-coffee.jpg"
                alt=""
              />
              <h1>Coffee and diabetes</h1>
              <p>Coffee may help protect against type 2 diabetes.</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
