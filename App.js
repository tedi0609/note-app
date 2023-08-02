import React, { useState } from "react";
import PropTypes from "prop-types";

import Home from "./src/screens/home";
import TambahCatatan from "./src/screens/tambahCatatan";
import UpdateCatatan from "./src/screens/updateCatatan";

const CurrentPageWidget = ({
  currentPage,
  dataCatatan,
  setCurrentPage,
  tambahCatatan,
  hapusCatatan,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          dataCatatan={dataCatatan}
          setCurrentPage={setCurrentPage}
          hapusCatatan={hapusCatatan}
        />
      );
    case "tambah":
      return <TambahCatatan setCurrentPage={setCurrentPage} tambahCatatan={tambahCatatan} />;
    case "edit":
      return <UpdateCatatan setCurrentPage={setCurrentPage} />;
    default:
      return <Home />;
  }
};

CurrentPageWidget.propTypes = {
  currentPage: PropTypes.string.isRequired,
  dataCatatan: PropTypes.instanceOf(Array).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  tambahCatatan: PropTypes.func.isRequired,
  hapusCatatan: PropTypes.func.isRequired,
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const [daftarCatatan, setDaftarCatatan] = useState([
    {
      id: 1,
      judul: "Judul Pertama",
      catatan:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const tambahCatatan = (judul, catatan) => {
    const id = daftarCatatan.length > 0 ? daftarCatatan[daftarCatatan.length - 1].id + 1 : 1;

    setDaftarCatatan([
      ...daftarCatatan,
      {
        id,
        judul,
        catatan,
      },
    ]);
  };

  const hapusCatatan = (catatanId) => {
    const daftarCatatanTidakHapus = daftarCatatan.filter((e) => e.id !== catatanId);
    setDaftarCatatan(daftarCatatanTidakHapus);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      dataCatatan={daftarCatatan}
      tambahCatatan={tambahCatatan}
      hapusCatatan={hapusCatatan}
    />
  );
};

export default App;
