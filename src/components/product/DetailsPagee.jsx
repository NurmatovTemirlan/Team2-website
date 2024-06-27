import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { oneProduct, getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div>
      {oneProduct ? (
        <Container sx={{ mt: 8 }}>
          <Card sx={{ maxWidth: "100%", mb: 10 }}>
            <CardActionArea sx={{ height: 600, display: "flex", p: 2 }}>
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="300"
                image={oneProduct.picture}
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {oneProduct.title}
                </Typography>
                <br />
                <Typography variant="h4" color="text.secondary" component="div">
                  {oneProduct.description}
                </Typography>
                <br />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    color="text.secondary"
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>
              </CardContent>
            </CardActionArea>
            <Button>КУПИТЬ</Button>
          </Card>
        </Container>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default DetailsPage;
