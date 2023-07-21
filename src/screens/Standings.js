import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiSports from "../api/api-sports";
import Table from "./testScreens/Table";

const Standings = () => {
  const [pets, setPets] = useState([
    {
      Name: "Charlie",
      Gender: "Male",
      Breed: "Dog",
      Weight: 12,
      Age: 3,
    },
    {
      Name: "Max",
      Gender: "Male",
      Breed: "Dog",
      Weight: 23,
      Age: 7,
    },
    {
      Name: "Lucy",
      Gender: "Female",
      Breed: "Cat",
      Weight: 5,
      Age: 4,
    },
    {
      Name: "Oscar",
      Gender: "Male",
      Breed: "Turtle",
      Weight: 13,
      Age: 23,
    },
    {
      Name: "Daisy",
      Gender: "Female",
      Breed: "Bird",
      Weight: 1.7,
      Age: 3,
    },
    {
      Name: "Ruby",
      Gender: "Female",
      Breed: "Dog",
      Weight: 6,
      Age: 3,
    },
    {
      Name: "Milo",
      Gender: "Male",
      Breed: "Dog",
      Weight: 11,
      Age: 7,
    },
    {
      Name: "Toby",
      Gender: "Male",
      Breed: "Dog",
      Weight: 34,
      Age: 19,
    },
    {
      Name: "Lola",
      Gender: "Female",
      Breed: "Cat",
      Weight: 4,
      Age: 3,
    },
    {
      Name: "Jack",
      Gender: "Male",
      Breed: "Turtle",
      Weight: 13,
      Age: 23,
    },
    {
      Name: "Bailey",
      Gender: "Female",
      Breed: "Bird",
      Weight: 2,
      Age: 4,
    },
    {
      Name: "Bella",
      Gender: "Female",
      Breed: "Dog",
      Weight: 6,
      Age: 10,
    },
  ]);

  const [columns, setColumns] = useState([
    "Name",
    "Gender",
    "Breed",
    "Weight",
    "Age",
  ]);
  const [direction, setDirection] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  const getStandings = async () => {
    try {
      const response = await apiSports.get("/standings", {
        params: {
          league: 283,
          season: 2022,
        },
      });
      // console.log("response", response.data.response[0].league.standings[2]);
      // console.log("data is fetched");
      setData(response.data.response[0].league.standings[2]);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const data = {
    get: "standings",
    parameters: {
      league: "283",
      season: "2023",
    },
    errors: [],
    results: 1,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-1.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          standings: [
            [
              {
                rank: 1,
                team: {
                  id: 559,
                  name: "FCSB",
                  logo: "https://media-1.api-sports.io/football/teams/559.png",
                },
                points: 3,
                goalsDiff: 2,
                group: "Liga I: Regular Season",
                form: "W",
                status: "up",
                description: "Championship Round",
                all: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 3,
                    against: 1,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 3,
                    against: 1,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 2,
                team: {
                  id: 2246,
                  name: "CFR 1907 Cluj",
                  logo: "https://media-2.api-sports.io/football/teams/2246.png",
                },
                points: 3,
                goalsDiff: 2,
                group: "Liga I: Regular Season",
                form: "W",
                status: "same",
                description: "Championship Round",
                all: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 2,
                    against: 0,
                  },
                },
                home: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 2,
                    against: 0,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 3,
                team: {
                  id: 632,
                  name: "Universitatea Craiova",
                  logo: "https://media-2.api-sports.io/football/teams/632.png",
                },
                points: 3,
                goalsDiff: 2,
                group: "Liga I: Regular Season",
                form: "W",
                status: "up",
                description: "Championship Round",
                all: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 2,
                    against: 0,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 2,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 4,
                team: {
                  id: 2578,
                  name: "FC Voluntari",
                  logo: "https://media-2.api-sports.io/football/teams/2578.png",
                },
                points: 3,
                goalsDiff: 1,
                group: "Liga I: Regular Season",
                form: "W",
                status: "up",
                description: "Championship Round",
                all: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 2,
                    against: 1,
                  },
                },
                home: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 2,
                    against: 1,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 5,
                team: {
                  id: 2596,
                  name: "Farul Constanta",
                  logo: "https://media-1.api-sports.io/football/teams/2596.png",
                },
                points: 3,
                goalsDiff: 1,
                group: "Liga I: Regular Season",
                form: "W",
                status: "same",
                description: "Championship Round",
                all: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 0,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 1,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 6,
                team: {
                  id: 6886,
                  name: "Oţelul",
                  logo: "https://media-1.api-sports.io/football/teams/6886.png",
                },
                points: 1,
                goalsDiff: 0,
                group: "Liga I: Regular Season",
                form: "D",
                status: "up",
                description: "Championship Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                home: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 7,
                team: {
                  id: 2598,
                  name: "Petrolul Ploiesti",
                  logo: "https://media-3.api-sports.io/football/teams/2598.png",
                },
                points: 1,
                goalsDiff: 0,
                group: "Liga I: Regular Season",
                form: "D",
                status: "up",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                home: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 8,
                team: {
                  id: 2589,
                  name: "Uta Arad",
                  logo: "https://media-2.api-sports.io/football/teams/2589.png",
                },
                points: 1,
                goalsDiff: 0,
                group: "Liga I: Regular Season",
                form: "D",
                status: "up",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 9,
                team: {
                  id: 2599,
                  name: "Universitatea Cluj",
                  logo: "https://media-3.api-sports.io/football/teams/2599.png",
                },
                points: 1,
                goalsDiff: 0,
                group: "Liga I: Regular Season",
                form: "D",
                status: "up",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 1,
                    against: 1,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 10,
                team: {
                  id: 6231,
                  name: "Rapid",
                  logo: "https://media-3.api-sports.io/football/teams/6231.png",
                },
                points: 1,
                goalsDiff: 0,
                group: "Liga I: Regular Season",
                form: "D",
                status: "same",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                home: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 11,
                team: {
                  id: 2585,
                  name: "Sepsi OSK Sfantu Gheorghe",
                  logo: "https://media-3.api-sports.io/football/teams/2585.png",
                },
                points: 1,
                goalsDiff: 0,
                group: "Liga I: Regular Season",
                form: "D",
                status: "same",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 0,
                  draw: 1,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 12,
                team: {
                  id: 2581,
                  name: "FC Botosani",
                  logo: "https://media-3.api-sports.io/football/teams/2581.png",
                },
                points: 0,
                goalsDiff: -1,
                group: "Liga I: Regular Season",
                form: "L",
                status: "down",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 1,
                    against: 2,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 1,
                    against: 2,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 13,
                team: {
                  id: 2579,
                  name: "AFC Hermannstadt",
                  logo: "https://media-2.api-sports.io/football/teams/2579.png",
                },
                points: 0,
                goalsDiff: -1,
                group: "Liga I: Regular Season",
                form: "L",
                status: "down",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 0,
                    against: 1,
                  },
                },
                home: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 0,
                    against: 1,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 14,
                team: {
                  id: 6910,
                  name: "U Craiova 1948",
                  logo: "https://media-1.api-sports.io/football/teams/6910.png",
                },
                points: 0,
                goalsDiff: -2,
                group: "Liga I: Regular Season",
                form: "L",
                status: "down",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 1,
                    against: 3,
                  },
                },
                home: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 1,
                    against: 3,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 15,
                team: {
                  id: 635,
                  name: "Dinamo Bucuresti",
                  logo: "https://media-2.api-sports.io/football/teams/635.png",
                },
                points: 0,
                goalsDiff: -2,
                group: "Liga I: Regular Season",
                form: "L",
                status: "down",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 0,
                    against: 2,
                  },
                },
                home: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 0,
                    against: 2,
                  },
                },
                away: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
              {
                rank: 16,
                team: {
                  id: 2583,
                  name: "Politehnica Iasi",
                  logo: "https://media-2.api-sports.io/football/teams/2583.png",
                },
                points: 0,
                goalsDiff: -2,
                group: "Liga I: Regular Season",
                form: "L",
                status: "down",
                description: "Relegation Round",
                all: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 0,
                    against: 2,
                  },
                },
                home: {
                  played: 0,
                  win: 0,
                  draw: 0,
                  lose: 0,
                  goals: {
                    for: 0,
                    against: 0,
                  },
                },
                away: {
                  played: 1,
                  win: 0,
                  draw: 0,
                  lose: 1,
                  goals: {
                    for: 0,
                    against: 2,
                  },
                },
                update: "2023-07-19T00:00:00+00:00",
              },
            ],
          ],
        },
      },
    ],
  };

  // champiosnhip [0]
  // relegation [1]
  // last year regular season was [2]

  // regular season as of july 2023
  const clasament = data.response[0].league.standings[0].map((el) => {
    // console.log("el", el);
    return (
      <View>
        <Text>{el.team.name}</Text>
      </View>
    );
  });

  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity key={index} style={styles.columnHeader}>
              <Text style={styles.columnHeaderTxt}>{column + " "}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );

  const FlatListTable = (
    <FlatList
      data={pets}
      style={{ width: "90%" }}
      keyExtractor={(item, index) => index + ""}
      ListHeaderComponent={tableHeader}
      stickyHeaderIndices={[0]}
      renderItem={({ item, index }) => {
        return (
          <View
            style={{
              ...styles.tableRow,
              backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",
            }}
          >
            <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>
              {item.Name}
            </Text>
            <Text style={styles.columnRowTxt}>{item.Gender}</Text>
            <Text style={styles.columnRowTxt}>{item.Breed}</Text>
            <Text style={styles.columnRowTxt}>{item.Weight}</Text>
            <Text style={styles.columnRowTxt}>{item.Age}</Text>
          </View>
        );
      }}
    />
  );

  // console.log("clasament", clasament);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Standings page</Text>
      {/* {clasament} */}

      <Table />
    </View>
  );
};

export default Standings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "20%",
    textAlign: "center",
  },
});