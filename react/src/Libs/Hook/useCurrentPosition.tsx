import { useState, useEffect } from "react"
import { THAILAND_COORDINATES } from "../Constant"

function useCurrentPosition() {
  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [coords, setCoords] = useState(THAILAND_COORDINATES)

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      function(position) {
        setCoords({ lat: position.coords.latitude, lng: position.coords.longitude })
        setSuccess(true)
        setLoading(false)
        setError(false)
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        setSuccess(false)
        setLoading(false)
        setError(true)
      }
    )
  }, [])

  return {
    isSuccess,
    isLoading,
    isError,
    ...coords,
  }
}

export default useCurrentPosition
