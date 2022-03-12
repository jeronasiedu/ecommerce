import create from 'zustand'
const useStore = create((set, get) => ({
  user: true,
  updateUser: () => set((state) => ({ user: true })),
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: true })),
  onClose: () => set((state) => ({ isOpen: false })),
}))
export default useStore
