import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Propducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product) {
    setProducts((prev) => [...prev, product])
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get(
        'https://fakestoreapi.com/products?limit=5'
      )
      setProducts(response.data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading, addProduct }
}
