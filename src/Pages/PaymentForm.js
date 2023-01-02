// Formulario"detalles de pago

import {Typography, Divider} from "@material-ui/core";
import Review from "../components/ProcessOrder/Review";

const PaymentForm = ({ backStep, nextStep }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: "20px 0" }}>
        Método de Pago
      </Typography>
    </>
  );
};

export default PaymentForm;
