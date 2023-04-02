import Product from '../components/Product'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import useProducts from '../hooks/products'
import { useContext } from 'react'
import Modal from '../components/Modal'
import { ModalContext } from '../context/ModalContext'
import CreateProduct from '../components/CreateProduct'

export default function Products() {
  const { error, loading, products, addProduct } = useProducts({})
  const { modal, open, close } = useContext(ModalContext)

  const createHandler = (product) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => {
        return <Product product={product} key={product.id} />
      })}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={open}
        className="fixed bottom-5 right-5 bg-red-700 text-white text-2xl px-4 rounded-full py-2"
      >
        +
      </button>
    </div>
  )
}
