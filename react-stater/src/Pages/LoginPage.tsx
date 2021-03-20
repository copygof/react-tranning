import { Button, Container, Grid } from "@material-ui/core"
import React from "react"

const LoginPage = () => {
  return (
    <Container maxWidth="xl" className="fade-in h-screen">
      <Grid container spacing={4}>
        <Grid item className="w-full bg-red-300">
          <p>Login page</p>
          <Button>Goto home page</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
