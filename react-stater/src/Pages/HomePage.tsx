import { Container, Grid } from "@material-ui/core"
import React from "react"

const HomePage = () => {
  return (
    <Container maxWidth="xl" className="fade-in">
      <Grid container spacing={4}>
        <Grid item className="w-full">
          <p>Home page</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
