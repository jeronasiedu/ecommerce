import create from 'zustand'
const useStore = create((set, get) => ({
  user: false,
  updateUser: () => set(() => ({ user: true })),
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
  savedProducts: [],
  saveItem: (newItem) =>
    set((state) => ({
      savedProducts: handleProduct(state.savedProducts, newItem),
    })),
  removeItem: (id) =>
    set((state) => ({
      savedProducts: state.savedProducts.filter((item) => item.id !== id),
    })),
}))
export default useStore
const handleProduct = (savedProducts, newItem) => {
  const index = savedProducts.findIndex((item) => item.id === newItem.id)
  if (index === -1) {
    savedProducts.push(newItem)
  } else {
    const newProducts = savedProducts.filter((item) => item.id !== newItem.id)
    savedProducts = newProducts
  }
  return savedProducts
}
