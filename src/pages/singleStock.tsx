import React from 'react';
import {useParams} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StockChart from 'components/StockChart';
const SingleStock = () => {
  const {id} = useParams();

  const sector = 'Energy';
  const index = 'WIG20';
  const description = 'Spółka jest jedną z czterech największych krajowych grup energetycznych. Podstawowa działalność Energa S.A. obejmuje dystrybucję, wytwarzanie oraz obrót energią elektryczną i cieplną. Jest jednym z trzech największych dostawców energii elektrycznej w Polsce.';
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h2">
        {id}
      </Typography>
      <Typography variant="h4" component="h6">
        Sector: {sector}
      </Typography>
      <Typography variant="h4" component="h6">
        Index: {index}
      </Typography>
      <Button variant="contained" color="primary">
        Add to subscriptions
      </Button>
      <Typography variant="body1">
        {description}
      </Typography>
      <StockChart />
      <Button variant="contained" color="primary">
        Compare
      </Button>
    </Container>
  );
}
export default SingleStock;
