import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='Login'>
      <div>
        <h1 className='title'>Admin Page</h1>
      </div>
      <ul>
        <Button
          // component={Link}
          // to='/viewProducts'
          type='submit'
          variant='contained'
          sx={{ mt: 6, mb: 1 }}
          onClick={() => {}}
        >
          View Product
        </Button>
      </ul>
      <ul>
        <Button
          component={Link}
          to='/AddProduct'
          type='submit'
          variant='contained'
          sx={{ mt: 6, mb: 1 }}
          onClick={() => {}}
        >
          Add Product
        </Button>
      </ul>
    </div>
  );
}
