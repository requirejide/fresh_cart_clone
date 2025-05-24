import { create } from "zustand";

const useToggle = create((set) => ({
  isCartOpen: false,
  setIsCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  openModal: false,
  setModalOpen: () => set(() => ({ openModal: true })),
  setModalClose: () => set(() => ({ openModal: false })),

  openCategory: false,
  setOpenCategory: () => set(() => ({ openCategory: true })),
  setCloseCategory: () => set(() => ({ openCategory: false })),

  openMobileNav: false,
  setOpenMobileNav: () =>
    set((state) => ({ openMobileNav: !state.openMobileNav })),
  // setCloseMonileNav: () => set(() => ({ openMobileNav: false })),
}));

export default useToggle;
