import { Button, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <Container maxWidth="xl" className="fade-in flex flex-1 w-full h-full">
      <Grid container>
        <Grid
          item
          xs={12}
          className="flex flex-1 flex-col items-center justify-center"
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h4">Sorry, Page not found</Typography>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            color="primary"
            className="mt-8"
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
