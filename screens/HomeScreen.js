import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export const HomeScreen = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://corona.lmao.ninja/v2/countries");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>

      <View style={{alignSelf: "center", display: "flex"}}>
        <Text style={{fontSize: 25, color: "red"}}>Information</Text>
      </View>
      <ScrollView>
        {countries.map((country) => (
          <View
            key={country.country}
            style={{
              borderWidth: 1,
              width: "85%",
              alignSelf: "center",
              marginTop: 15,
              borderRadius: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 30, paddingLeft: 10, width: "60%" }}>
                {country.country}
              </Text>
              <Image
                style={{ width: 100, height: 70 }}
                source={{ uri: country.countryInfo.flag }}
              />
            </View>
            <View
              style={{ paddingLeft: 10, paddingTop: 15, paddingBottom: 15 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "300" }}>
                1. Number of Deaths: {country.deaths}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "300" }}>
                2. Number of Population: {country.population}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "300" }}>
                3. Number of Death Increase: 3000
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
