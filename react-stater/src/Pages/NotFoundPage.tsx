import { Container } from "@material-ui/core"
import React from "react"
import NotFound from "../Components/Common/NotFound"

export default function NotFoundPage() {
  return (
    <Container maxWidth="xl" className="fade-in w-full h-screen">
      <NotFound />
    </Container>
  )
}
