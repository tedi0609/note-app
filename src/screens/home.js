import React from "react";
import PropTypes from "prop-types";
import {
  FlatList, StyleSheet, View, Text,
} from "react-native";
import TombolKhusus from "../components/TombolKhusus";

const CatatanCard = ({ item, setCurrentPage, hapusCatatan }) => (
  <View style={gaya.card}>
    <Text style={gaya.cardTitle}>{item.judul}</Text>
    <Text>{item.catatan}</Text>
    <View style={gaya.buttons}>
      <TombolKhusus
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentPage("edit");
        }}
      />
      <TombolKhusus
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          hapusCatatan(item.id);
        }}
      />
    </View>
  </View>
);

CatatanCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  hapusCatatan: PropTypes.func.isRequired,
};

const Home = ({ dataCatatan, setCurrentPage, hapusCatatan }) => (
  <View style={gaya.container}>
    <TombolKhusus
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage("tambah");
      }}
    />

    <FlatList
      showsHorizontalScrollIndicator={false}
      data={dataCatatan}
      renderItem={({ item }) => (
        <CatatanCard item={item} setCurrentPage={setCurrentPage} hapusCatatan={hapusCatatan} />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);

Home.propTypes = {
  dataCatatan: PropTypes.instanceOf(Array).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  hapusCatatan: PropTypes.func.isRequired,
};

const gaya = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Home;
