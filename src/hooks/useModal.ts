import { useState } from "react";

const useModal = () => {
  const [addMedicationModalVisible, setAddMedicationModalVisible] =
    useState<boolean>(false);

  const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false);

  const openAddMedicationModal = () => {
    setAddMedicationModalVisible(true);
  };

  const closeAddMedicationModal = () => {
    setAddMedicationModalVisible(false);
  };

  const openSearchModal = () => {
    setSearchModalVisible(true);
  };

  const closeSearchModal = () => {
    setSearchModalVisible(false);
  };

  return {
    addMedicationModalVisible,
    openAddMedicationModal,
    closeAddMedicationModal,

    searchModalVisible,
    openSearchModal,
    closeSearchModal,
  };
};

export default useModal;
