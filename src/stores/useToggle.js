import { create } from "zustand";

const useToggle = create((set) => ({
  isCartOpen: false,
  setIsCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  openModal: false,
  setModalOpen: () => set(() => ({ openModal: true })),
  setModalClose: () => set(() => ({ openModal: false })),
}));

export default useToggle;
