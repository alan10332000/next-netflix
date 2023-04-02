'use client'
import InfoModal from './components/InfoModal'

import useInfoModalStore from '@/hooks/useInfoModalStore'

const ShowInfoModal = () => {
  const { isOpen, closeModal } = useInfoModalStore()

  return <InfoModal visible={isOpen} onClose={closeModal} />
}

export default ShowInfoModal
