import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import TombolKhusus from "../components/TombolKhusus";
import TextInputKhusus from "../components/TextInputKhusus";

const TambahCatatan = ({ setCurrentPage, tambahCatatan }) => {
  const [judul, setJudul] = useState("");
  const [catatan, setCatatan] = useState("");

  return (
    <View style={gaya.container}>
      <Text style={gaya.pageTitle}>Tambah Catatan</Text>

      <TextInputKhusus
        text={judul}
        onChange={setJudul}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />

      <TextInputKhusus
        text={catatan}
        onChange={setCatatan}
        label="Catatan"
        placeholder="Catatan"
        multiline
        numberOfLines={10}
      />
      <View style={gaya.spacerTop}>
        <TombolKhusus
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            tambahCatatan(judul, catatan);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={gaya.spacerTop}>
        <TombolKhusus
          backgroundColor="#DDDDDD"
          color="#203239"
          text="ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

TambahCatatan.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  tambahCatatan: PropTypes.func.isRequired,
};

const gaya = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default TambahCatatan;
