/* eslint-disable @typescript-eslint/no-floating-promises */
import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

interface useDogsHookResponse {
  dogs: string[] | undefined
  loading: boolean
}

const useDogs = (): useDogsHookResponse => {
  const [dogs, setDogs] = useState<string[] | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  const getData: () => Promise<string[]> = async () => {
    const response: AxiosResponse<{ message: string[] }> = await axios.get(
      'https://dog.ceo/api/breed/hound/afghan/images/random/3'
    )
    return response.data.message
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const data = await getData()
        setDogs(data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    })()
  }, [])

  return { dogs, loading }
}

export default useDogs
